/* Sound: off until the visitor opts in, remembered per browser (v31_sound). Everything is synthesised with Web Audio,
   so there are no files: a low deck hum while sound is on, a clunk when a view or the menu opens, a tape rattle when a
   cassette pulls off the shelf, a heavier clunk when it goes into the player, and a burst of static on the rewind. */
(() => {
  const KEY = "v31_sound";
  let ctx = null, master = null, hum = null, enabled = false;
  try { enabled = localStorage.getItem(KEY) === "1"; } catch (e) { enabled = false; }

  function ensure() {
    if (ctx) { if (ctx.state !== "running") ctx.resume().catch(() => {}); unmute(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
    if (ctx.state !== "running") ctx.resume().catch(() => {});                    // iOS hands back a suspended context even inside a tap
    unmute();
    return true;
  }
  /* iPhones mute Web Audio while the ringer switch is on silent, unless an <audio> element is playing: this one loops a
     tenth of a second of silence while sound is on, which moves the page to the playback session and lets the deck
     through the speaker. Started from the same tap that turns sound on, so it counts as the user's gesture. */
  let silent = null;
  function unmute() {
    if (!silent) {
      silent = new Audio("data:audio/wav;base64,UklGRkQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YSADAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==");
      silent.loop = true; silent.playsInline = true; silent.setAttribute("playsinline", ""); silent.volume = 0.01;
    }
    if (silent.paused) silent.play().catch(() => {});
  }
  function mute() { if (silent && !silent.paused) silent.pause(); }
  const noiseBuffer = (seconds = 1, pink = false) => {
    const b = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate), d = b.getChannelData(0);
    if (!pink) { for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; }
    // pink noise (Paul Kellet's filter): the even, steady "shhh" of a dead channel rather than spiky white noise
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < d.length; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.96900 * b2 + w * 0.1538520;
      b3 = 0.86650 * b3 + w * 0.3104856; b4 = 0.55000 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.0168980;
      d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
    }
    return b;
  };
  let snowBuf = null, snow = null;                             // the looping static while the screen shows snow
  const env = (g, t, peak, a, d) => { g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); };

  function startHum() {
    if (hum || !ctx) return;
    const g = ctx.createGain(); g.gain.value = 0; g.connect(master);
    const o1 = ctx.createOscillator(); o1.type = "sine"; o1.frequency.value = 55;
    const o2 = ctx.createOscillator(); o2.type = "triangle"; o2.frequency.value = 110; const g2 = ctx.createGain(); g2.gain.value = 0.25;
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(2); n.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 420; const gn = ctx.createGain(); gn.gain.value = 0.12;
    o1.connect(g); o2.connect(g2).connect(g); n.connect(lp).connect(gn).connect(g);
    o1.start(); o2.start(); n.start();
    g.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 1.2);
    hum = { g, stop() { g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4); setTimeout(() => { o1.stop(); o2.stop(); n.stop(); }, 500); } };
  }
  function stopHum() { if (hum) { hum.stop(); hum = null; } }

  const burst = (t, dur, filt, peak, a, d) => {              // a shaped puff of noise through a filter
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(dur + 0.05);
    const f = ctx.createBiquadFilter(); f.type = filt.type; f.frequency.value = filt.f; f.Q.value = filt.q ?? 1;
    const g = ctx.createGain(); env(g, t, peak, a, d); n.connect(f).connect(g).connect(master); n.start(t); n.stop(t + dur + 0.05);
    return { n, f, g };
  };
  const thump = (t, f0, f1, peak, d) => {                     // a pitched knock
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + d);
    const g = ctx.createGain(); env(g, t, peak, 0.003, d); o.connect(g).connect(master); o.start(t); o.stop(t + d + 0.1);
  };
  const cues = {
    click(t) {                                                 // one plastic click: a view or the menu changing
      burst(t, 0.03, { type: "bandpass", f: 2600, q: 1.2 }, 0.14, 0.001, 0.025);
      thump(t, 320, 160, 0.07, 0.05);
    },
    pull(t) {                                                  // plastic rattle as a cassette slides out of its case
      for (let i = 0; i < 3; i++) burst(t + i * 0.045, 0.08, { type: "bandpass", f: 2600 + i * 700, q: 1.4 }, 0.1, 0.002, 0.04);
    },
    insert(t) {                                                // a cassette going into a VCR: click, the loading motor, the carriage dropping, the latch
      burst(t, 0.03, { type: "bandpass", f: 3200, q: 2 }, 0.18, 0.001, 0.025);
      const m = burst(t + 0.08, 0.62, { type: "bandpass", f: 650, q: 2.5 }, 0.11, 0.06, 0.5);          // motor whir
      m.f.frequency.setValueAtTime(650, t + 0.08); m.f.frequency.linearRampToValueAtTime(1150, t + 0.68);
      const lfo = ctx.createOscillator(); lfo.type = "sine"; lfo.frequency.value = 28; const lg = ctx.createGain(); lg.gain.value = 0.04;
      lfo.connect(lg).connect(m.g.gain); lfo.start(t + 0.08); lfo.stop(t + 0.75);                        // the gear chatter in the whir
      const o = ctx.createOscillator(); o.type = "triangle"; o.frequency.setValueAtTime(118, t + 0.08); o.frequency.linearRampToValueAtTime(96, t + 0.68);
      const og = ctx.createGain(); env(og, t + 0.08, 0.045, 0.05, 0.55); o.connect(og).connect(master); o.start(t + 0.08); o.stop(t + 0.8);   // motor hum
      thump(t + 0.72, 120, 46, 0.4, 0.16); burst(t + 0.72, 0.06, { type: "bandpass", f: 1400, q: 1 }, 0.14, 0.002, 0.05);   // carriage drops
      burst(t + 0.9, 0.03, { type: "bandpass", f: 2200, q: 1.5 }, 0.12, 0.001, 0.03); thump(t + 0.9, 200, 90, 0.12, 0.06);   // latch
    },
    static(t, dur = 1.4) {                                     // TV static: steady pink hiss, gently capped on top, with a faint mains buzz
      if (!snowBuf) snowBuf = noiseBuffer(4, true);
      const n = ctx.createBufferSource(); n.buffer = snowBuf; n.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 9000; lp.Q.value = 0.5;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.55, t + 0.04); g.gain.setValueAtTime(0.55, t + dur - 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      n.connect(lp).connect(g).connect(master); n.start(t); n.stop(t + dur + 0.05);
      const bz = ctx.createOscillator(); bz.type = "sawtooth"; bz.frequency.value = 60;
      const bf = ctx.createBiquadFilter(); bf.type = "lowpass"; bf.frequency.value = 300;
      const bg = ctx.createGain(); env(bg, t, 0.012, 0.03, dur - 0.05); bz.connect(bf).connect(bg).connect(master); bz.start(t); bz.stop(t + dur);
    },
  };
  cues.scratch = cues.static;                                                                             // older callers
  cues.clunk = (t, heavy) => heavy ? cues.insert(t) : cues.click(t);                                       // older callers
  function snowStart() {
    if (!enabled || !ensure() || snow) return;
    if (!snowBuf) snowBuf = noiseBuffer(4, true);
    const n = ctx.createBufferSource(); n.buffer = snowBuf; n.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 9000; lp.Q.value = 0.5;
    const g = ctx.createGain(); const t = ctx.currentTime; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.05);
    const bz = ctx.createOscillator(); bz.type = "sawtooth"; bz.frequency.value = 60;
    const bf = ctx.createBiquadFilter(); bf.type = "lowpass"; bf.frequency.value = 300; const bg = ctx.createGain(); bg.gain.value = 0.012;
    n.connect(lp).connect(g).connect(master); bz.connect(bf).connect(bg).connect(master); n.start(t); bz.start(t);
    snow = { stop() { const e = ctx.currentTime; g.gain.cancelScheduledValues(e); g.gain.setValueAtTime(g.gain.value, e); g.gain.exponentialRampToValueAtTime(0.0001, e + 0.35); bg.gain.linearRampToValueAtTime(0, e + 0.35); setTimeout(() => { n.stop(); bz.stop(); }, 450); } };
  }
  function snowStop() { if (snow) { snow.stop(); snow = null; } }

  const Sound = {
    get enabled() { return enabled; },
    snowStart, snowStop,
    set(on) {
      if (on && !enabled && window.track) window.track("sound", { on: true });
      enabled = !!on; try { localStorage.setItem(KEY, enabled ? "1" : "0"); } catch (e) {}
      if (enabled) { if (ensure()) { loadRecordings(); startHum(); Sound.play("click"); } } else { stopHum(); snowStop(); mute(); }
      document.querySelectorAll("[data-sound-toggle]").forEach(b => { b.setAttribute("aria-pressed", enabled); b.classList.toggle("is-on", enabled); });
      dispatchEvent(new CustomEvent("sound:change", { detail: enabled }));
    },
    toggle() { Sound.set(!enabled); },
    // the first `seconds` of a recording, fading out over the last `fade`: the hero riff the first time the hand comes up
    playClip(name, seconds = 4, fade = 1.2, level = 0.8) {
      if (!enabled || !ensure()) return false;
      const rec = recordings[name]; if (!rec) return false;
      const src = ctx.createBufferSource(); src.buffer = rec; const g = ctx.createGain(); const t = ctx.currentTime;
      g.gain.setValueAtTime(level, t); g.gain.setValueAtTime(level, t + Math.max(0, seconds - fade)); g.gain.linearRampToValueAtTime(0.0001, t + seconds);
      src.connect(g).connect(master); src.start(t); src.stop(t + seconds + 0.05); return true;
    },
    state() { return { enabled, ctx: ctx ? ctx.state : null, unmuteLoop: silent ? !silent.paused : null, recordings: Object.keys(recordings) }; },   // debug
    play(name, opt) {
      if (!enabled || !ensure()) return;
      const rec = recordings[name];
      if (rec) { const src = ctx.createBufferSource(); src.buffer = rec; const g = ctx.createGain(); g.gain.value = 0.9; src.connect(g).connect(master); src.start(ctx.currentTime); return; }
      if (cues[name]) cues[name](ctx.currentTime, opt);
    },
  };
  // real recordings take over from the synthesised cues when present: assets/audio/<cue>.mp3 (insert, click, pull, static)
  const recordings = {};
  const RECORDED = ["insert", "click", "pull", "rewind", "riff"];
  function loadRecordings() {
    if (!ensure() || loadRecordings.done) return; loadRecordings.done = true;
    RECORDED.forEach(name => fetch(`assets/audio/${name}.mp3`).then(r => r.ok ? r.arrayBuffer() : Promise.reject()).then(ab => ctx.decodeAudioData(ab)).then(buf => { recordings[name] = buf; }).catch(() => {}));
  }
  window.Sound = Sound;
  // the hum needs a user gesture to start on a browser that remembers sound was on. A finger going down is not enough
  // of a gesture for iOS, so this waits for the lift (pointerup, click) or a key.
  if (enabled) {
    const KICKS = ["pointerup", "click", "keydown"];
    const kick = () => {
      if (ensure()) { loadRecordings(); startHum(); const intro = document.getElementById("intro"); if (intro && getComputedStyle(intro).display !== "none") Sound.play("scratch", 1.6); }   // the tape load static, if the intro is still rolling
      KICKS.forEach(k => removeEventListener(k, kick));
    };
    KICKS.forEach(k => addEventListener(k, kick));
  }
  document.addEventListener("visibilitychange", () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (enabled) ctx.resume(); });
  addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-sound-toggle]").forEach(b => { b.setAttribute("aria-pressed", enabled); b.classList.toggle("is-on", enabled); b.addEventListener("click", () => Sound.toggle()); });
  });
})();

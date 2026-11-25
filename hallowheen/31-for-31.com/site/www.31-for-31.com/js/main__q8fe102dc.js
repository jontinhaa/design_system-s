/* 31 for 31 — page build, Lenis smooth scroll, GSAP ScrollTrigger, Lottie, views, VHS effects */
(function () {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";   // reloads start at the top, with the intro
  const FILMS = window.FILMS;
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const pad = n => String(n).padStart(2, "0");
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------- streaming links ---------- */
  const justwatch = f => `https://www.justwatch.com/us/search?q=${encodeURIComponent(`${f.title} ${f.year}`)}`;
  // sketchy thumb, drawn once; the dislike is the same path flipped
  const { THUMB, blocks, weekOf } = window.Card;

  /* ---------- build sections ---------- */
  const films = $("#films");
  // Nights are grouped into weeks. Weeks two and four scroll sideways (one night per screen) on wide screens.
  const HORIZONTAL = matchMedia("(min-width: 861px)").matches;
  // index.html ships the 31 cards (tools/prerender.js writes them from data.js through the same template), so search
  // engines and link previews see the films without running a line of this; the script only builds them if they are missing
  if (!document.getElementById("thumb")) document.body.insertAdjacentHTML("afterbegin", window.Card.SYMBOL);
  if (!films.querySelector(".film")) films.innerHTML = window.Card.all(FILMS);
  films.querySelectorAll(".week").forEach(w => w.classList.toggle("week--h", +w.dataset.week % 2 === 0 && HORIZONTAL));

  /* list overlay */
  // directors sort by surname: the first full name's last word, or the last word of the whole credit when the first
  // part is only a given name ("Danny & Michael Philippou")
  const surname = d => { const first = d.split("&")[0].trim(); const src = first.includes(" ") ? first : d; return src.trim().split(/\s+/).pop().toLowerCase(); };
  $("#list").innerHTML = FILMS.map(f => `
    <li data-day="${f.day}" data-title="${esc(f.title.replace(/^(the|a|an)\s+/i, "")).toLowerCase()}" data-director="${esc(surname(f.director))}" data-year="${f.year}" data-slug="${f.slug}"><a href="#day-${pad(f.day)}" data-slug="${f.slug}">
      <span class="chk" data-toggle="${f.slug}" role="checkbox" tabindex="0" aria-checked="false" aria-label="Watched ${esc(f.title)}"></span>
      <span class="d">OCT ${pad(f.day)}</span>
      <span class="t" data-text="${esc(f.title)}">${esc(f.title)}</span>
      <span class="m">${esc(f.director)}</span>
      <span class="y">${f.year}</span>
      <span class="lk" title="Likes">${THUMB}<span class="l-like">–</span></span>
    </a></li>`).join("");

  /* ---------- Lenis + GSAP ---------- */
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });   // a phone's address bar coming and going must not re-measure the pins mid scroll
  const lenis = new Lenis({ lerp: REDUCED ? 1 : 0.085, smoothWheel: !REDUCED, wheelMultiplier: 1 });   // reduced motion: no smoothing, the wheel is the wheel
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  window.lenis = lenis;

  const scrollToDay = (hash, instant) => {
    const el = document.querySelector(hash);
    if (!el) return;
    const opts = { offset: 0, duration: (instant || REDUCED) ? 0 : 1.4, easing: t => 1 - Math.pow(1 - t, 4) };
    const week = el.closest(".week--h");
    if (week) week.scrollLeft = 0;                           // a hash change or a focus() can scroll the overflow-hidden week sideways; the track transform is the only scroll it should have
    if (week && weekTween.has(week)) {
      // a night inside a sideways week lives at a point along the week's pinned scroll distance
      const st = weekTween.get(week).scrollTrigger, kids = [...week.querySelectorAll(".film")], i = kids.indexOf(el);
      lenis.scrollTo(st.start + (st.end - st.start) * (i / Math.max(1, kids.length - 1)), opts);
      return;
    }
    lenis.scrollTo(el, opts);
  };

  /* hero */
  const BLUR_EASE = "cubic-bezier(0.2, 0.75, 0.25, 1)";
  // reduced motion: every reveal becomes a short fade with no travel, scale or blur
  const calm = v => REDUCED ? Object.assign({}, v, { x: 0, y: 0, scale: 1, skewX: 0, filter: "none", duration: .35, delay: 0, stagger: 0 }) : v;
  const heroIn = gsap.timeline({ paused: true })
    .from(".title .mark", calm({ y: 40, opacity: 0, scale: 1.12, duration: 1.3, ease: BLUR_EASE }), 0.2)
    .from(".hero .sub, .hero .scroll-cue", calm({ opacity: 0, y: 35, filter: "blur(12px)", duration: 1.1, ease: BLUR_EASE, stagger: .15, clearProps: "filter" }), 0.8);

  /* ---------- tape load intro (first visit only, click to skip; ?intro=1 plays it again) ---------- */
  (() => {
    const intro = $("#intro");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = performance.getEntriesByType("navigation")[0];
    const reloaded = nav && nav.type === "reload";
    // a reload always starts from the top with the intro; a leftover #day-NN from browsing is dropped
    if (reloaded && location.hash) history.replaceState(null, "", location.pathname + location.search);
    const deepLink = !reloaded && location.hash.startsWith("#day-");
    // the tape only loads once per browser: repeat visits go straight to the hero (and get a far better first paint)
    const INTRO_KEY = "v31_intro";
    let seen = false; try { seen = localStorage.getItem(INTRO_KEY) === "1"; } catch {}
    const q = new URLSearchParams(location.search), forced = q.get("intro") === "1", skipped = q.get("intro") === "0";
    if (q.get("bare") === "1") document.documentElement.classList.add("is-bare");               // ?bare=1: just the fog and the static, for capture plates
    const markSeen = () => { try { localStorage.setItem(INTRO_KEY, "1"); } catch {} };
    if (!intro || reduced || deepLink || skipped || (seen && !forced)) { intro?.remove(); heroIn.play(); return; }
    markSeen();
    if (reloaded) { window.scrollTo(0, 0); lenis.scrollTo(0, { immediate: true, force: true }); }
    intro.classList.add("is-on");
    lenis.stop();
    const nz = $(".intro-noise", intro), nx = nz.getContext("2d");
    nz.width = 220; nz.height = 140;
    const id = nx.createImageData(nz.width, nz.height);
    let noisy = true;
    (function burst() {
      if (!noisy) return;
      const d = id.data; for (let i = 0; i < d.length; i += 4) { const v = (Math.random() * 255) | 0; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
      nx.putImageData(id, 0, 0); requestAnimationFrame(burst);
    })();
    const main = $("main");
    const done = () => { noisy = false; intro.remove(); lenis.start(); lenis.scrollTo(0, { immediate: true, force: true }); heroIn.play(); };
    const tl = gsap.timeline({ onComplete: done })
      .set(".intro-noise", { opacity: 1 }, 0)
      .set(".intro-noise", { opacity: 0 }, 0.32)
      .to(".intro-blue", { opacity: 1, duration: 0.05 }, 0.32)
      .fromTo(".intro-osd", { opacity: 0 }, { opacity: 1, duration: 0.05, repeat: 3, yoyo: true, repeatDelay: 0.12 }, 0.45)
      .set(".intro-osd", { opacity: 1 }, 1.0)
      .set(".intro-track", { opacity: 1, yPercent: -120 }, 1.25)                                  // moved with a transform, so it never counts as a layout shift
      .to(".intro-track", { yPercent: 1000, duration: 0.45, ease: "none" }, 1.25)
      .to(".intro-blue", { opacity: 0, duration: 0.06, repeat: 3, yoyo: true }, 1.4)
      .set(".intro-blue", { opacity: 0 }, 1.66)
      .add(() => { main.classList.add("is-glitching"); const off = () => main.classList.remove("is-glitching"); main.addEventListener("animationend", off, { once: true }); setTimeout(off, 800); }, 1.62)   // always cleared: a throttled tab can freeze the CSS animation mid skew
      .to(intro, { opacity: 0, duration: 0.3, ease: "power1.in" }, 1.7)
      .to(".intro-osd", { opacity: 0, duration: 0.2 }, 1.7);
    const skip = () => { tl.progress(1); };
    intro.addEventListener("click", skip, { once: true });
    addEventListener("keydown", skip, { once: true });
  })();
  // The hero pins for 85vh of scrolling while the hand reaches in from below (zombie.js reads
  // window.heroReach). After that the hero simply scrolls away with the hand still in place.
  window.heroReach = 0;
  let riffed = false;                                                   // the riff plays once, the first time the hand comes up (sound on)
  ScrollTrigger.create({ trigger: ".hero", start: "top top", end: "+=85%", pin: true, scrub: 0.6,
    onUpdate: self => { window.heroReach = self.progress; if (!riffed && self.progress > 0.22 && window.Sound && window.Sound.enabled) { riffed = !!window.Sound.playClip("riff", 4.5, 1.5); } } });

  /* films: parallax + reveal + glitch on enter */
  // sideways weeks: pin the week and drag its track across, one night per screen
  const weekTween = new Map();
  const sideways = week => {
    if (weekTween.has(week)) return weekTween.get(week);
    const track = $(".track", week);
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, { x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: week, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } });
    weekTween.set(week, tween);
    return tween;
  };
  document.querySelectorAll(".film").forEach((sec, i) => {
    const poster = $(".film-poster", sec), copy = $(".film-copy", sec), day = $(".film-day", sec);
    const dir = i % 2 ? -1 : 1;
    const week = sec.closest(".week--h");
    const ca = week ? sideways(week) : null;
    // in a sideways week the triggers measure horizontally against the track's movement
    const span = ca ? { containerAnimation: ca, start: "left right", end: "right left" } : { start: "top bottom", end: "bottom top" };
    const enter = (pct, once = true) => ca ? { containerAnimation: ca, start: `left ${pct}%`, once } : { start: `top ${pct}%`, once };
    if (REDUCED) { /* no parallax: the poster and the day number stay put */ }
    else if (ca) {
      gsap.fromTo(poster, { x: 160 }, { x: -160, ease: "none", scrollTrigger: { trigger: sec, ...span, scrub: true } });
      gsap.fromTo(day, { x: 140, y: 30 }, { x: -140, y: -30, ease: "none", scrollTrigger: { trigger: sec, ...span, scrub: true } });
    } else {
      gsap.fromTo(poster, { y: 140 }, { y: -140, ease: "none", scrollTrigger: { trigger: sec, ...span, scrub: true } });
      gsap.fromTo(day, { y: 220, x: 40 * dir }, { y: -260, x: -40 * dir, ease: "none", scrollTrigger: { trigger: sec, ...span, scrub: true } });
    }
    gsap.from(copy.children, calm({ opacity: 0, y: 45, filter: "blur(12px)", duration: 1.1, stagger: .09, ease: BLUR_EASE, clearProps: "filter", scrollTrigger: { trigger: sec, ...enter(65) } }));
    gsap.from($(".frame", sec), calm({ opacity: 0, y: 60, scale: 1.04, filter: "blur(18px)", duration: 1.3, ease: BLUR_EASE, clearProps: "filter", scrollTrigger: { trigger: sec, ...enter(70) } }));
    if (matchMedia("(pointer:fine)").matches) {
      const frame = $(".frame", sec);
      poster.addEventListener("pointermove", e => {
        const r = frame.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(frame, { rotateY: px * 10, rotateX: -py * 8, duration: 0.5, ease: "power2.out", transformPerspective: 900 });
      });
      poster.addEventListener("pointerleave", () => gsap.to(frame, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "power2.out" }));
      poster.addEventListener("pointerenter", () => {
        const tl = gsap.timeline();
        for (let k = 0; k < 4; k++) tl.set(frame.querySelector("img"), { x: gsap.utils.random(-6, 6), skewX: gsap.utils.random(-4, 4) }, k * 0.04);
        tl.set(frame.querySelector("img"), { x: 0, skewX: 0 }, 0.18);
      });
    }
    ScrollTrigger.create({
      trigger: sec, ...enter(60),
      onEnter: () => {
        // tracking glitch when a tape "loads"
        const tl = gsap.timeline();
        for (let k = 0; k < 6; k++) tl.set(poster, { skewX: gsap.utils.random(-12, 12), x: gsap.utils.random(-10, 10), filter: `hue-rotate(${gsap.utils.random(-40, 40)}deg)` }, k * 0.05);
        tl.set(poster, { skewX: 0, x: 0, filter: "none" }, 0.32);
      }
    });
  });
  document.querySelectorAll(".block q").forEach(q => {
    // the divider line condenses out of a blur: oversized and soft, settling into focus
    gsap.from(q, calm({ scale: 1.35, opacity: 0, filter: "blur(28px)", duration: 1.6, ease: "power3.out", transformOrigin: "50% 50%", clearProps: "filter", scrollTrigger: { trigger: q, start: "top 80%", once: true } }));
    gsap.from(q.nextElementSibling, calm({ y: 24, opacity: 0, filter: "blur(10px)", duration: 1, delay: .55, ease: BLUR_EASE, clearProps: "filter", scrollTrigger: { trigger: q, start: "top 80%", once: true } }));
  });

  // the ghost section pins while the ghost comes out of the dark (evil.js reads window.riseProgress)
  window.riseProgress = 0;
  ScrollTrigger.create({ trigger: ".rise", start: "top top", end: "+=90%", pin: true, scrub: 0.5,
    onUpdate: self => { window.riseProgress = self.progress; } });
  gsap.from(".vcr-copy > *", calm({ y: 30, opacity: 0, filter: "blur(10px)", duration: 1, stagger: .12, ease: BLUR_EASE, clearProps: "filter", scrollTrigger: { trigger: ".vcr", start: "top 70%", once: true } }));
  gsap.from(".footer > *", calm({ y: 40, opacity: 0, filter: "blur(12px)", duration: 1.1, stagger: .12, ease: BLUR_EASE, clearProps: "filter", scrollTrigger: { trigger: ".footer", start: "top 75%", once: true } }));
  gsap.from(".rewind-head .bkr", calm({ y: 40, opacity: 0, filter: "blur(12px)", duration: 1.1, stagger: .12, ease: BLUR_EASE, clearProps: "filter", scrollTrigger: { trigger: ".rewind-head", start: "top 75%", once: true } }));

  /* OSD tape counter */
  const osdDay = $("#osd-day"), osdTime = $("#osd-time");
  function setDay(d) { osdDay.textContent = `OCT ${pad(d)}`; }
  const filmEls = Array.from(document.querySelectorAll(".film"));
  let shownDay = 0;
  lenis.on("scroll", ({ progress }) => {
    const s = Math.floor(progress * 31 * 60);
    osdTime.textContent = `${Math.floor(s / 3600)}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
  });
  // the current night is read every few frames rather than on scroll events, because the sideways
  // weeks keep moving (scrub smoothing) after the last scroll event fires
  let dayTick = 0;
  gsap.ticker.add(() => {
    if (++dayTick % 4) return;
    const midY = innerHeight * 0.5, midX = innerWidth * 0.5;
    let d = 1;
    for (const el of filmEls) { const r = el.getBoundingClientRect(); if (r.top <= midY && r.left <= midX) d = +el.dataset.day; }
    if (d !== shownDay) { shownDay = d; setDay(d); }
  });

  /* ---------- Lottie ---------- */
  // reduced motion: the Lottie marks sit on their last frame instead of looping
  const lot = (el, data, opts = {}) => { const a = lottie.loadAnimation({ container: el, renderer: "svg", loop: true, autoplay: true, animationData: data, ...opts }); if (REDUCED) a.addEventListener("DOMLoaded", () => a.goToAndStop(a.totalFrames - 1, true)); return a; };
  // the REC dot in the corner: the Lottie loop on desktop, a CSS blink on phones (Lottie touches the DOM every frame)
  document.querySelectorAll(".rec").forEach(el => { if (matchMedia("(hover: none) and (pointer: coarse)").matches && el.closest(".osd")) { el.classList.add("rec-css"); return; } lot(el, window.LOTTIE.rec); });
  /* ---------- knife cursor ---------- */
  const cursor = $("#cursor");
  if (cursor && matchMedia("(pointer:fine)").matches) {
    const curX = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power2.out" });
    const curY = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power2.out" });
    const knife = $(".knife", cursor), drop = $(".drop", cursor), dot = $(".dot", cursor);
    let shown = false;
    addEventListener("pointermove", e => {
      curX(e.clientX); curY(e.clientY);
      if (!shown) { shown = true; gsap.to(cursor, { opacity: 1, duration: 0.5, ease: "sine.out" }); }
    }, { passive: true });
    document.addEventListener("mouseleave", () => { shown = false; gsap.to(cursor, { opacity: 0, duration: 0.5, ease: "sine.in" }); });
    // click: Meredith's Figma motion for the knife (frame units are the SVG's 500 wide viewBox; the cursor is 46px, so 0.092px per unit)
    //   knife (15:397): lunges 57 units left and 52 up over 0.3s, back over the next 0.3s, ease-out both ways
    //   drop  (15:427): lets go of the blade, falls 199 units in 0.5s easing out while it fades
    //   dot   (9:344):  the splash at the tip fades in between 0.1s and 0.6s and holds until the 2s mark
    const U = 46 / 500;
    let pressTl = null;
    const press = () => {
      if (REDUCED) return;
      if (pressTl) pressTl.kill();
      pressTl = gsap.timeline()
        .fromTo(knife, { x: 0, y: 0 }, { x: -57 * U, y: -52 * U, duration: .303, ease: "power1.out" }, 0)
        .to(knife, { x: 0, y: 0, duration: .299, ease: "power1.out" }, .303)
        .fromTo(drop, { y: 0, opacity: 1 }, { y: 199, duration: .5, ease: "power1.out" }, 0)
        .to(drop, { opacity: 0, duration: .5, ease: "power2.inOut" }, 0)
        .fromTo(dot, { opacity: 0 }, { opacity: 1, duration: .5, ease: "power2.inOut" }, .102)
        .to(dot, { opacity: 0, duration: .25, ease: "power2.in" }, 2.0);
    };
    addEventListener("pointerdown", press);
    // hover: a little lift over anything clickable; over a gallery tile the knife gives way to the OPEN chip
    document.addEventListener("pointerover", e => {
      const hot = e.target.closest("a, button, [role=checkbox], input, .chk, .watch, #static, .vcr-hit");
      const tile = null;
      cursor.classList.toggle("is-play", false);
      gsap.to(cursor, { scale: hot ? 1.15 : 1, duration: 0.4, ease: "sine.inOut", transformOrigin: "6% 4%" });
    });
  }

  /* ---------- VHS noise + tracking bar ---------- */
  const nc = $(".vhs-noise"), nctx = nc.getContext("2d");
  nc.width = 320; nc.height = 200;
  const noiseImg = nctx.createImageData(nc.width, nc.height);
  let lastNoise = 0;
  function noise(now) {
    if (now - lastNoise > 70) {
      const d = noiseImg.data;
      for (let i = 0; i < d.length; i += 4) { const v = (Math.random() * 255) | 0; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
      nctx.putImageData(noiseImg, 0, 0); lastNoise = now;
    }
    requestAnimationFrame(noise);
  }
  if (!REDUCED) requestAnimationFrame(noise);
  const track = $(".vhs-track");
  if (!REDUCED) (function roll() {
    gsap.timeline({ onComplete: roll, delay: gsap.utils.random(3, 9) })
      .set(track, { yPercent: -120, opacity: 1 })
      .to(track, { yPercent: 1250, duration: gsap.utils.random(1.2, 2.4), ease: "none" })
      .set(track, { opacity: 0 });
  })();

  /* ---------- ratings ---------- */
  const R = window.Ratings;
  function paint(slug) {
    const c = R.get(slug) || { like: 0, dislike: 0 }, mine = R.myVote(slug);
    document.querySelectorAll(`.rate[data-slug="${slug}"]`).forEach(box => {
      const tick = (el, v) => { if (el.textContent === String(v)) return; el.textContent = v; if (!REDUCED) gsap.fromTo(el, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .35, ease: "power3.out" }); };
      tick($(".like .count", box), c.like);
      tick($(".dislike .count", box), c.dislike);
      box.querySelectorAll("button").forEach(b => { b.disabled = !!mine; b.classList.toggle("is-mine", b.dataset.kind === mine); });
      box.title = mine ? "You voted" : "";
    });
    document.querySelectorAll(`.list a[data-slug="${slug}"] .l-like`).forEach(el => el.textContent = c.like);
  }
  R.onChange(paint);
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { R.load(e.target.dataset.slug); io.unobserve(e.target); }
  }), { rootMargin: "600px 0px" });
  document.querySelectorAll(".film, .list a").forEach(s => io.observe(s));
  document.addEventListener("click", e => {
    const b = e.target.closest(".rate button");
    if (!b || b.disabled) return;
    const slug = b.closest(".rate").dataset.slug;
    if (!REDUCED) {
      gsap.timeline()
        .to(b, { scale: .86, rotate: -3, duration: .09, ease: "power2.in" })
        .to(b, { scale: 1, rotate: 0, duration: .55, ease: "elastic.out(1, .45)" });
      gsap.fromTo(b.querySelector(".thumb"), { y: 0 }, { y: -4, yoyo: true, repeat: 1, duration: .12 });
    }
    R.vote(slug, b.dataset.kind);
  });

  /* ---------- views ---------- */
  /* The heavy three.js scenes are not in the page's script tags. The ghost and the VCR import as their sections come
     within a screen and a half, the Shelf when its view opens (prefetched when its button is hovered or focused), so
     the first load is the hero and the posters, not three scenes and their models. */
  const V = ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || "";
  const SCENES = { evil: "js/evil.js", vcr: "js/vcr.js", shelf: "js/shelf.js", konami: "js/konami.js" };
  const sceneLoads = {};
  const loadScene = name => sceneLoads[name] || (sceneLoads[name] = import(new URL(`${SCENES[name]}?v=${V}`, document.baseURI).href)
    .catch(err => { console.error(`${name} scene failed to load`, err); delete sceneLoads[name]; }));
  const nearby = (el, name) => {
    if (!el) return;
    if (!("IntersectionObserver" in window)) return loadScene(name);
    const io = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { io.disconnect(); loadScene(name); } }, { rootMargin: "150% 0px" });
    io.observe(el);
  };
  nearby($("#rise"), "evil"); nearby($("#rewind"), "vcr");
  document.querySelectorAll('.deck button[data-view="gallery"], .menu button[data-view="gallery"]').forEach(b => {
    b.addEventListener("pointerenter", () => loadScene("shelf"), { passive: true });
    b.addEventListener("focus", () => loadScene("shelf"));
  });

  const overlays = { gallery: $("#view-gallery"), list: $("#view-list"), mine: $("#view-mine") };
  let current = "scroll";
  function setView(v) {
    if (v !== current && window.track) window.track("view", { view: v });
    if (v !== current && window.Sound) window.Sound.play("click");
    current = v;
    document.querySelectorAll(".deck button[data-view], .menu button[data-view]").forEach(b => b.classList.toggle("is-on", b.dataset.view === v));
    deckSync();
    Object.entries(overlays).forEach(([k, el]) => el.classList.toggle("is-open", k === v));
    document.documentElement.classList.toggle("view-open", v !== "scroll"); dispatchEvent(new Event("v31:view"));   // the hero scenes stop drawing under an open view and pick up again when it closes
    if (v !== "gallery" && window.__shelf) window.__shelf.close();
    if (v === "scroll") { lenis.start(); document.documentElement.classList.remove("lenis-stopped"); }
    else {
      lenis.stop();
      if (v === "gallery") {
        if (window.__shelf) window.__shelf.open();
        else { const hint = $("#view-gallery .shelf-hint"); if (hint) hint.textContent = "Loading the tapes…"; loadScene("shelf").then(() => { if (current === "gallery" && window.__shelf) window.__shelf.open(); }); }
      }
      const items = [overlays[v].querySelector("h2"), ...overlays[v].querySelectorAll(v === "gallery" ? ".shelf-hint" : v === "list" ? ".list li" : ".mine > *")];
      gsap.from(items, calm({ opacity: 0, y: 24, filter: "blur(10px)", duration: .8, stagger: .025, ease: BLUR_EASE, clearProps: "all" }));
    }
  }
  document.querySelectorAll(".deck button[data-view]").forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));
  // the deck folds to its badge once the page is scrolled and unfolds on hover, focus or a tap on the badge (velvele.studio)
  const deck = $(".deck"), deckBadge = $(".deck-badge");
  let deckHover = false, deckTapped = false;
  function deckSync() {
    const atTop = (window.lenis ? window.lenis.scroll : scrollY) < 80;
    const open = atTop || current !== "scroll" || deckHover || deckTapped;
    deck.classList.toggle("is-open", open); deckBadge.setAttribute("aria-expanded", open);
  }
  deck.addEventListener("pointerenter", e => { if (e.pointerType !== "touch") { deckHover = true; deckSync(); } });
  deck.addEventListener("pointerleave", () => { deckHover = false; deckTapped = false; deckSync(); });
  deck.addEventListener("focusin", () => { deckHover = true; deckSync(); });
  deck.addEventListener("focusout", e => { if (!deck.contains(e.relatedTarget)) { deckHover = false; deckSync(); } });
  // the 31 badge is the way home: back to the scroll and the top of the tape (the burger owns the menu on phones)
  deckBadge.addEventListener("click", () => {
    if (menuOpen) menuToggle(false);
    if (current !== "scroll") setView("scroll");
    lenis.scrollTo(0, { duration: REDUCED ? 0 : 1.4, easing: t => 1 - Math.pow(1 - t, 4) });
    deckTapped = false; deckSync();
  });
  lenis.on("scroll", deckSync);
  deckSync();
  // mobile: the full screen menu behind the hamburger
  const MOBILE_NAV = matchMedia("(max-width: 720px)");
  const menu = $("#menu"), burger = $(".deck-burger");
  let menuOpen = false;
  // keep Tab inside an open layer: the burger plus the menu links, or the label panel. Escape still closes either.
  const focusables = el => [...el.querySelectorAll('button, [href], input, select, [tabindex]:not([tabindex="-1"])')].filter(x => !x.disabled && x.offsetParent !== null);
  const menuTrap = e => {
    if (e.key !== "Tab" || !menuOpen) return;
    const f = [burger, ...focusables(menu)]; const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  function menuToggle(force) {
    menuOpen = force ?? !menuOpen;
    if (menuOpen) { document.addEventListener("keydown", menuTrap); requestAnimationFrame(() => { const first = menu.querySelector(".menu-links button"); if (first) first.focus({ preventScroll: true }); }); }
    else { document.removeEventListener("keydown", menuTrap); if (menu.contains(document.activeElement)) burger.focus({ preventScroll: true }); }
    menu.classList.toggle("is-open", menuOpen); menu.setAttribute("aria-hidden", !menuOpen);
    deck.classList.toggle("is-menu", menuOpen); burger.setAttribute("aria-expanded", menuOpen); burger.setAttribute("aria-label", menuOpen ? "Close the menu" : "Open the menu");
    if (menuOpen) { lenis.stop(); if (window.Sound) window.Sound.play("click"); if (!REDUCED) gsap.fromTo(menu.querySelectorAll(".menu-links button"), { opacity: 0, y: 18, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: .6, stagger: .06, ease: BLUR_EASE, clearProps: "all" }); }
    else if (current === "scroll") lenis.start();
  }
  burger.addEventListener("click", () => menuToggle());
  menu.querySelectorAll("button[data-view]").forEach(b => b.addEventListener("click", () => { setView(b.dataset.view); menuToggle(false); }));
  MOBILE_NAV.addEventListener("change", e => { if (!e.matches && menuOpen) menuToggle(false); });
  document.addEventListener("click", e => {
    if (e.target.closest("[data-toggle]")) { if (e.target.closest("a")) e.preventDefault(); return; }   // a tick inside a lineup row must not follow the row's link
    const a = e.target.closest('a[href^="#day-"]');
    if (!a) return;
    e.preventDefault();
    if (a.closest(".list")) { WL.toggle(a.dataset.slug); if (window.Sound) window.Sound.play("click"); return; }   // a lineup row ticks the night, it does not leave the view
    setView("scroll");
    history.replaceState(null, "", a.getAttribute("href"));
    requestAnimationFrame(() => scrollToDay(a.getAttribute("href")));
  });
  /* two things the keyboard knows: type "rewind" anywhere and the tape rewinds from wherever you are; the Konami code
     brings the hand back with a message. Neither listens while you are typing in a field. */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let typed = "", konamiAt = 0;
  document.addEventListener("keydown", e => {
    const t = e.target; if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    konamiAt = k === KONAMI[konamiAt] ? konamiAt + 1 : (k === KONAMI[0] ? 1 : 0);
    if (konamiAt === KONAMI.length) { konamiAt = 0; loadScene("konami").then(() => window.__konami && window.__konami.show()); return; }
    if (e.key.length === 1) { typed = (typed + k).slice(-12); if (typed.endsWith("rewind")) { typed = ""; loadScene("vcr").then(() => window.__vcr && window.__vcr.rewindNow()); } }
  });
  document.addEventListener("keydown", e => { if (e.key !== "Escape") return; if (document.querySelector("#label-panel.is-open")) return; if (menuOpen) { menuToggle(false); return; } if (current !== "scroll") setView("scroll"); });
  addEventListener("shelf:pick", e => { setView("scroll"); requestAnimationFrame(() => scrollToDay(`#day-${pad(e.detail.day)}`)); });
  // list view: an OSD cursor block glides to whichever row is under the pointer
  const listEl = $("#list"), listCursor = document.createElement("div"); listCursor.className = "list-cursor"; listEl.appendChild(listCursor);
  listEl.addEventListener("pointerover", e => {
    const li = e.target.closest("li"); if (!li) return;
    gsap.to(listCursor, { top: li.offsetTop, height: li.offsetHeight, opacity: 1, duration: REDUCED ? 0 : .28, ease: "power3.out" });
  });
  listEl.addEventListener("pointerleave", () => gsap.to(listCursor, { opacity: 0, duration: .25 }));
  // poster peek: the hovered night's poster pops up beside the pointer (pointer devices only)
  if (matchMedia("(pointer:fine)").matches) {
    const peek = document.createElement("div"); peek.className = "list-peek"; peek.innerHTML = `<img alt="">`; document.body.appendChild(peek);
    const peekImg = peek.firstElementChild;
    const px = gsap.quickTo(peek, "x", { duration: .35, ease: "power3.out" }), py = gsap.quickTo(peek, "y", { duration: .35, ease: "power3.out" });
    let peekSlug = null;
    // the poster pops up over the row itself, tilted, where the title column meets the credits, like a print dropped on an index
    const spot = a => { const w = 150, h = 225, lr = listEl.getBoundingClientRect(), rr = a.getBoundingClientRect();
      return { x: lr.left + lr.width * 0.46 - w / 2, y: rr.top + rr.height / 2 - h / 2 }; };
    listEl.addEventListener("pointerover", e => {
      const a = e.target.closest("a[data-slug]"); if (!a || a.dataset.slug === peekSlug) return;
      const f = bySlug[a.dataset.slug]; if (!f) return;
      const fresh = !peekSlug; peekSlug = a.dataset.slug; peekImg.src = f.poster;
      const at = spot(a);
      gsap.killTweensOf(peek, "opacity,scale,rotation,filter");
      if (REDUCED) gsap.set(peek, { opacity: 1, rotation: -8, x: at.x, y: at.y });
      else if (fresh) { gsap.set(peek, { x: at.x, y: at.y }); gsap.fromTo(peek, { opacity: 0, scale: .8, rotation: -16, filter: "blur(8px)" }, { opacity: 1, scale: 1, rotation: -8, filter: "blur(0px)", duration: .4, ease: "power3.out" }); }
      else { px(at.x); py(at.y); gsap.fromTo(peek, { scale: .94, rotation: -12 }, { scale: 1, rotation: -8, duration: .35, ease: "power3.out" }); }
    });
    listEl.addEventListener("pointerleave", () => { peekSlug = null; gsap.to(peek, { opacity: 0, scale: .9, filter: "blur(6px)", duration: .25, ease: "power2.in" }); });
  }
  // sort and filter bar
  const listState = { sort: "day", filter: "all" };
  function applyList(animate) {
    const lis = [...listEl.querySelectorAll("li")], st = WL.get();
    const key = listState.sort, dir = key === "year" ? 1 : 1;
    lis.sort((a, b) => (key === "title" || key === "director") ? (a.dataset[key].localeCompare(b.dataset[key]) || +a.dataset.day - +b.dataset.day) : (+a.dataset[key] - +b.dataset[key]) * dir || +a.dataset.day - +b.dataset.day);
    let shown = 0;
    const current = [...listEl.querySelectorAll("li")], moved = lis.some((li, i) => li !== current[i]);
    lis.forEach(li => {
      const on = !!st.watched[li.dataset.slug];
      const hide = listState.filter === "todo" ? on : listState.filter === "done" ? !on : false;
      li.hidden = hide; if (!hide) shown++;
      if (moved) listEl.insertBefore(li, listCursor);        // reorder in place only when the order changed: pulling every row out and back in made Chrome's scroll anchoring throw the view to the top on each tick
    });
    const done = Object.keys(st.watched).filter(k => bySlug[k]).length;
    $("#list-count").textContent = shown;
    $("#list-done").textContent = done ? `${done} watched` : "";
    if (animate && !REDUCED) gsap.fromTo(lis.filter(l => !l.hidden), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .45, stagger: .014, ease: "power3.out", clearProps: "all" });
    gsap.set(listCursor, { opacity: 0 });
  }
  $("#list-sort").addEventListener("change", e => { listState.sort = e.target.value; applyList(true); });
  $("#list-filter").addEventListener("change", e => { listState.filter = e.target.value; applyList(true); });
  /* the sort and show boxes: a button that shows "Sort by: Night" and opens the box downwards into its options
     (velvele.studio/work). The hidden native select keeps the value, so the handlers above stay as they are. */
  const CARET = '<svg class="sel-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5"/></svg>';
  let openSel = null;
  function buildSel(box) {
    const select = box.querySelector("select"), wrap = box.parentElement;
    const btn = document.createElement("button"); btn.type = "button"; btn.className = "sel-btn"; btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
    const NARROW = matchMedia("(max-width: 720px)");
    btn.innerHTML = `<span class="sel-k">${box.dataset.label}</span><span class="sel-v"></span>${CARET}`;
    const paintLabel = () => { btn.querySelector(".sel-k").textContent = NARROW.matches && box.dataset.short ? box.dataset.short : box.dataset.label; };   // phones: "Sort:" rather than "Sort by:"
    paintLabel(); NARROW.addEventListener("change", paintLabel);
    const menu = document.createElement("ul"); menu.className = "sel-menu"; menu.setAttribute("role", "listbox"); menu.setAttribute("aria-label", select.getAttribute("aria-label") || box.dataset.label);
    [...select.options].forEach(o => { const li = document.createElement("li"); li.setAttribute("role", "option"); li.dataset.value = o.value; li.textContent = o.text; li.tabIndex = -1; menu.appendChild(li); });
    box.prepend(btn); box.insertBefore(menu, select);
    const items = [...menu.children], val = btn.querySelector(".sel-v");
    const paint = () => {
      val.textContent = select.options[select.selectedIndex].text;
      items.forEach(li => li.setAttribute("aria-selected", li.dataset.value === select.value));
      wrap.style.width = ""; box.style.width = "";
      if (matchMedia("(min-width: 721px)").matches) wrap.style.width = `${Math.ceil(btn.getBoundingClientRect().width) + 2}px`;   // the closed box fits its choice, the open one its widest option; phones split the row instead
    };
    const openH = () => btn.offsetHeight + 2 + menu.offsetHeight;
    const open = () => {
      if (openSel && openSel !== box) openSel.__close();
      openSel = box; box.classList.add("is-open"); btn.setAttribute("aria-expanded", "true");
      box.style.width = "max-content";
      gsap.killTweensOf(box);
      gsap.to(box, { height: openH(), duration: REDUCED ? 0 : .5, ease: "back.out(1.3)" });
      if (!REDUCED) gsap.fromTo(items, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: .3, stagger: .035, delay: .08, ease: "power2.out", clearProps: "all" });
      if (window.Sound) window.Sound.play("click");
    };
    const close = () => {
      if (openSel === box) openSel = null;
      box.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false");
      items.forEach(li => li.classList.remove("is-focus"));
      gsap.killTweensOf(box);
      gsap.to(box, { height: 39, duration: REDUCED ? 0 : .3, ease: "power3.inOut", onComplete: () => { box.style.width = ""; } });
    };
    box.__close = close;
    const choose = li => { if (select.value !== li.dataset.value) { select.value = li.dataset.value; select.dispatchEvent(new Event("change")); } paint(); close(); btn.focus(); };
    btn.addEventListener("click", () => box.classList.contains("is-open") ? close() : open());
    items.forEach(li => li.addEventListener("click", () => choose(li)));
    box.addEventListener("keydown", e => {
      const isOpen = box.classList.contains("is-open");
      let i = items.findIndex(li => li.classList.contains("is-focus")); if (i < 0) i = items.findIndex(li => li.dataset.value === select.value);
      if (e.key === "Escape" && isOpen) { e.preventDefault(); close(); btn.focus(); return; }
      if ((e.key === "ArrowDown" || e.key === "ArrowUp") ) {
        e.preventDefault(); if (!isOpen) open();
        i = e.key === "ArrowDown" ? Math.min(items.length - 1, i + 1) : Math.max(0, i - 1);
        items.forEach((li, k) => li.classList.toggle("is-focus", k === i)); items[i].focus(); return;
      }
      if ((e.key === "Enter" || e.key === " ") && isOpen && document.activeElement !== btn) { e.preventDefault(); choose(items[i < 0 ? 0 : i]); }
    });
    select.addEventListener("change", paint);
    paint(); if (document.fonts) document.fonts.ready.then(paint);
    // the view is hidden when this runs, so the box is measured again whenever its button changes size (first show, fonts, resize)
    if ("ResizeObserver" in window) new ResizeObserver(() => { if (!box.classList.contains("is-open")) paint(); }).observe(btn);
  }
  document.querySelectorAll(".list-bar .sel").forEach(buildSel);
  document.addEventListener("pointerdown", e => { if (openSel && !openSel.contains(e.target)) openSel.__close(); });
  window.__applyList = applyList;
  document.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && e.target.matches(".list .chk")) { e.preventDefault(); WL.toggle(e.target.dataset.toggle); }
  });

  /* the tape log label: js/label.js and its photos only load when someone asks to share */
  const shareList = $("#share-list");
  if (shareList) shareList.addEventListener("click", () => {
    const go = () => window.Label && window.Label.list(myFilms(), WL.get());
    if (window.Label) return go();
    shareList.classList.add("is-busy"); const was = shareList.innerHTML; shareList.innerHTML = '<span class="rec-dot"></span>LOADING TAPE';
    const restore = () => { shareList.classList.remove("is-busy"); shareList.innerHTML = was; };
    const sc = document.createElement("script"); sc.src = new URL(`js/label.js?v=${V}`, document.baseURI).href;
    sc.onload = () => { restore(); go(); };
    sc.onerror = () => { restore(); console.error("label module failed to load"); };
    document.head.appendChild(sc);
  });

  /* deep link */
  addEventListener("load", () => {
    ScrollTrigger.refresh();
    if (location.hash.startsWith("#day-")) setTimeout(() => scrollToDay(location.hash), 300);
  });

  /* ---------- watchlist ---------- */
  const WL = window.Watchlist;
  const fmtDay = ts => { const d = new Date(ts); return `${d.toLocaleString("en-US", { month: "short" })} ${d.getDate()}`.toUpperCase(); };
  const bySlug = Object.fromEntries(FILMS.map(f => [f.slug, f]));
  /* capture flags, for the press stills and videos only: ?view=gallery|list|mine opens that view once the page is in, ?seed=N ticks the first N nights */
  { const q = new URLSearchParams(location.search), seed = +q.get("seed") || 0, view = q.get("view");
    if (seed) FILMS.slice(0, seed).forEach(f => { if (!WL.get().watched[f.slug]) WL.toggle(f.slug); });
    if (view && overlays[view]) addEventListener("load", () => setTimeout(() => setView(view), 600)); }

  let swapOpen = null;                                             // which night's swap form is open in My List
  // the visitor's own version of the 31: swapped titles in place of Meredith's, for the tape log label
  const myFilms = () => FILMS.map(f => { const sw = WL.getSwap(f.slug); return sw ? { ...f, title: sw.title, year: sw.year || f.year } : f; });
  function paintWatched() {
    const st = WL.get(), p = WL.progress(FILMS.length);
    // film sections
    document.querySelectorAll(".watch[data-slug]").forEach(b => {
      const on = !!st.watched[b.dataset.slug];
      b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on);
      $(".txt", b).textContent = on ? "Watched" : "Mark watched";
      const sec = b.closest(".film"); sec.classList.toggle("is-watched", on); sec.querySelector(".frame").classList.toggle("is-watched", on);
    });
    document.querySelectorAll(".list a[data-slug]").forEach(a => { const on = !!st.watched[a.dataset.slug]; a.classList.toggle("is-watched", on); const c = $(".chk", a); c.classList.toggle("is-on", on); c.setAttribute("aria-checked", on); });
    if (window.__applyList) window.__applyList(false);
    // progress
    $("#deck-progress").textContent = `[${p.done}/${p.total}]`;
    $("#menu-progress").textContent = p.done;
    $("#osd-progress").textContent = `${p.done}/${p.total}`;
    $("#mine-done").textContent = p.done;
    $("#mine-bar").style.width = p.pct + "%";
    $("#mine-hint").textContent = p.done === p.total ? "All 31. You survived October." : WL.syncEnabled ? "Tick films off as you go. Saved here and synced to your code below." : "Tick films off as you go. Your progress is saved in this browser.";
    // checklist
    $("#checklist").innerHTML = FILMS.map(f => {
      const on = !!st.watched[f.slug];
      const sw = WL.getSwap(f.slug), open = swapOpen === f.slug;
      const name = sw ? esc(sw.title) : esc(f.title), year = sw ? (sw.year || "") : f.year;
      // a swapped night shows the visitor's film with Meredith's pick struck beneath it and a Restore; the others get a Swap
      const ctl = sw ? `<button type="button" class="ctl" data-restore="${f.slug}">Restore</button>` : `<button type="button" class="ctl" data-swap="${f.slug}" aria-expanded="${open}">Swap</button>`;
      const form = open ? `<form class="swap-form" data-swap-form="${f.slug}" autocomplete="off"><input name="title" placeholder="Your film for night ${f.day}" maxlength="120" required><input name="year" placeholder="Year" inputmode="numeric" maxlength="4" size="4"><button type="submit">Save</button><button type="button" class="ctl" data-swap-cancel>Cancel</button></form>` : "";
      return `<li class="${on ? "is-on" : ""}${sw ? " is-swapped" : ""}"><button class="chk ${on ? "is-on" : ""}" data-toggle="${f.slug}" role="checkbox" aria-checked="${on}" aria-label="Watched ${name}"></button><span class="d">OCT ${pad(f.day)}</span><span class="t" data-text="${name}">${name}</span><span class="m">${sw ? `<s class="was">${esc(f.title)}</s>` : esc(f.director)}</span><span class="y">${year}</span>${ctl}${form}</li>`;
    }).join("");
    paintSync();
  }
  function paintSync() {
    const el = $("#sync-panel"), s = WL.status();
    if (!WL.syncEnabled) {
      el.innerHTML = `<p class="hint">Cross device sync is off on this copy of the site. Your list stays in this browser. To turn it on, deploy the sync-api folder and set SYNC_URL in index.html.</p>`;
      return;
    }
    const label = { idle: "Local copy", syncing: "Syncing", synced: "Synced", error: "Sync failed, saved locally" }[s] || s;
    el.innerHTML = `
      <p class="hint">Your list is saved under this code. Open the link on your phone or another computer and it picks up where you left off. Anyone with the code can edit the list, so share it like a house key.</p>
      <div class="row"><code>${WL.code()}</code><button class="ghost" data-copy>Copy sync link</button><span class="status ${s}">${label}</span></div>
      <p class="hint">Already have a code from another device?</p>
      <form class="load" id="load-form"><input name="code" placeholder="Enter code" maxlength="24" autocapitalize="off" autocorrect="off" spellcheck="false"><button type="submit">Load list</button></form>
      <p class="msg" id="sync-msg"></p>`;
  }
  WL.onChange(paintWatched);
  paintWatched();
  WL.init();

  document.addEventListener("click", e => {
    const w = e.target.closest(".watch[data-slug]");
    if (w) {
      const turningOn = !WL.isWatched(w.dataset.slug);
      WL.toggle(w.dataset.slug);
      if (!REDUCED) {
        gsap.fromTo(w, { scale: .94 }, { scale: 1, duration: .5, ease: "elastic.out(1, .4)" });
        if (turningOn) {
          // the rating and the label arrive with the stamp
          gsap.from(w.closest(".film").querySelectorAll(".after-watch > *"), { opacity: 0, y: 8, duration: .5, stagger: .08, delay: .35, ease: "power2.out", clearProps: "all" });
          const stamp = w.closest(".film").querySelector(".stamp");
          gsap.fromTo(stamp, { scale: 1.9, opacity: 0, rotate: -22 }, { scale: 1, opacity: .95, rotate: -14, duration: .45, ease: "power4.in", clearProps: "transform,opacity",
            onComplete: () => gsap.fromTo(w.closest(".film").querySelector(".frame"), { x: -5 }, { x: 0, duration: .35, ease: "elastic.out(1, .3)" }) });
        }
      }
      return;
    }
    const t = e.target.closest("[data-toggle]");
    if (t) { e.preventDefault(); WL.toggle(t.dataset.toggle); return; }
    const sw = e.target.closest("[data-swap]");
    if (sw) { swapOpen = swapOpen === sw.dataset.swap ? null : sw.dataset.swap; paintWatched(); const inp = $(`[data-swap-form="${swapOpen}"] input`); if (inp) inp.focus(); return; }
    if (e.target.closest("[data-swap-cancel]")) { swapOpen = null; paintWatched(); return; }
    const rs = e.target.closest("[data-restore]");
    if (rs) { WL.restore(rs.dataset.restore); return; }
    const go = e.target.closest("[data-go]");
    if (go) { e.preventDefault(); setView("scroll"); requestAnimationFrame(() => scrollToDay(go.getAttribute("href"))); return; }
    const cp = e.target.closest("[data-copy]");
    if (cp) {
      navigator.clipboard?.writeText(WL.syncLink()).then(() => { cp.textContent = "Copied"; setTimeout(() => cp.textContent = "Copy sync link", 1600); }, () => prompt("Copy this link", WL.syncLink()));
    }
  });
  document.addEventListener("submit", e => {
    const form = e.target.closest("[data-swap-form]"); if (!form) return;
    e.preventDefault();
    const fd = new FormData(form);
    if (WL.swap(form.dataset.swapForm, fd.get("title"), fd.get("year"))) { swapOpen = null; if (window.Sound) window.Sound.play("click"); }
  });
  document.addEventListener("submit", async e => {
    if (e.target.id !== "load-form") return;
    e.preventDefault();
    const msg = $("#sync-msg"); msg.textContent = "Loading…";
    const r = await WL.adopt(new FormData(e.target).get("code"));
    msg.textContent = r.ok ? "Loaded. This device now follows that list." : r.reason;
    if (r.ok) setTimeout(paintWatched, 50);
  });

  // #sync=CODE link from another device
  if (location.hash.startsWith("#sync=")) {
    const code = location.hash.slice(6);
    history.replaceState(null, "", location.pathname);
    WL.adopt(code).then(r => { setView("mine"); const m = $("#sync-msg"); if (m) m.textContent = r.ok ? "Loaded from your other device." : r.reason; });
  }
})();

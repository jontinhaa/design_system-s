/* Loam House — editorial engine
   ONE reveal system, ONE nav, one scroll model. No second engine, no per-element
   trigger scatter, no direction flags.

   Model
   -----
   • ScrollSmoother virtualises the scroll into a continuous, smoothed position.
   • Every chapter is one viewport tall and rests TOP-ALIGNED. A chapter's reveal
     is a single scroll-TIED timeline on a band that is SYMMETRIC about that rest
     point (top 50% -> top -50%). So the rest position is the exact middle of the
     timeline's "hold": everything is shown, centred, at rest.
   • Because the timeline is a pure function of scroll position, its OUT is always
     on screen and behaves identically for wheel, scrollbar and keys. And because
     each OUT is generated as the exact MIRROR of its IN (reversed ease, mirrored
     time, reversed stagger), scrolling UP through a chapter reproduces the IN
     exactly — up == down for free, and exit order is entrance order reversed by
     construction. There is no reconciling of separate triggers.
   • The gap between two chapters is therefore: chapter A's OUT (first half) handing
     off to chapter B's IN (second half). The nav's job is only to TRAVERSE that gap
     at a pace that lets those reveals render — never to teleport past them.

   Authoring
   ---------
   You declare only ENTRANCES, once, in one vocabulary (`chapterMoves`). Every
   chapter flows through it; each element type has one consistent motion across the
   whole site. Global feel lives in REV. The hero is the single exception — it has a
   one-shot on-load performance and a form card, so it keeps its own timeline.

   Respects prefers-reduced-motion. fromTo() with explicit start/end states
   everywhere, so a ScrollTrigger refresh (fired when videos finish loading) can
   never mis-read a live value and snap an element to the wrong place. */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger, window.SplitText || {});
  // Mobile browser chrome (URL bar) growing/shrinking mid-scroll fires resize events that
  // would refresh every trigger and visibly jump the pinned map beat — ignore them; real
  // orientation/size changes still refresh.
  ScrollTrigger.config({ ignoreMobileResize: true });
  document.documentElement.classList.add('gsap-on');

  if (window.ScrollSmoother && document.getElementById('smooth-wrapper')) {
    gsap.registerPlugin(ScrollSmoother);
    ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 0.8, smoothTouch: 0.1, effects: false });
    // Focusing an input makes the browser bring it into view by scrolling #smooth-wrapper —
    // but the wrapper is fixed + overflow:hidden with the content transform-positioned inside,
    // so that scroll shifts the whole page (dragging the next chapter in) and never re-syncs
    // with ScrollSmoother. Pin the wrapper's own scroll at 0 so ScrollSmoother stays the sole
    // scroller; the enquiry inputs sit high enough to remain visible above the keyboard.
    var _sw = document.getElementById('smooth-wrapper');
    function _pinWrap() { if (_sw.scrollTop || _sw.scrollLeft) { _sw.scrollTop = 0; _sw.scrollLeft = 0; } }
    _sw.addEventListener('scroll', _pinWrap, { passive: true });
    // overflow:hidden suppresses the scroll event for the browser's focus scroll-into-view, so
    // also pin across the frames right after any field gains focus (when that scroll happens).
    document.addEventListener('focusin', function () {
      var n = 0; (function loop() { _pinWrap(); if (++n < 20) requestAnimationFrame(loop); })();
    });
  }

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  // Deep links (/#enquire from paid ads) must land ON the chapter, not reset to top.
  // A hash resolves to the chapter that CONTAINS its target — the nav links' own rule
  // (chapters[k].contains(target)) — so #enquire and #fmc-name both mean the form
  // chapter. A hash matching nothing (#top is <main>, typos) keeps the top reset.
  // Read live, never cached, so pageshow / beforeunload judge the same hash.
  function deepLinkChapter() {
    var h = location.hash && location.hash.length > 1 ? location.hash.slice(1) : '';
    var target = h && document.getElementById(h);
    if (!target) return null;
    var chapters = document.querySelectorAll('.chapter');
    for (var k = 0; k < chapters.length; k++)
      if (chapters[k] === target || chapters[k].contains(target)) return chapters[k];
    return null;
  }
  // Force top on every entry to the page (fresh load, reload, BFCache restore via
  // pageshow), and sync the header out of its scrolled state so the white nav can't
  // flash in. Reset before unload too, belt and braces. A deep link owns its own
  // arrival instead (deepLinkPlace / deepLinkSettle below), so every reset is skipped.
  var header = document.querySelector('[data-header]');
  function toTop() {
    if (deepLinkChapter()) return;
    window.scrollTo(0, 0);
    if (header) header.classList.remove('scrolled');
  }
  toTop();
  window.addEventListener('pageshow', toTop);
  window.addEventListener('beforeunload', toTop);

  var $ = gsap.utils.toArray;

  /* ---- Deep-link arrival ----
     1. deepLinkPlace: put the page at the chapter's stop BEHIND the curtain (body.pl-active
        blocks the visitor's scrolling, not ours), through the engine's own setY, so the
        chapter is simply there when the stripes lift — no hero glimpse, no travel.
     2. deepLinkSettle: at curtain-lift, after ScrollTrigger.refresh, glide to the exact
        stop through the SAME primitive a nav-link click uses (navGlide, registered by
        whichever nav owns the viewport). Normally zero distance; it absorbs any shift
        the refresh found. */
  function deepLinkPlace() {
    var ch = deepLinkChapter();
    if (!ch) return;
    var arr = chapterStops(), top = arr[ch._stop];
    var s = window.ScrollSmoother && ScrollSmoother.get();
    if (s) s.scrollTop(top); else window.scrollTo(0, top);
    if (header) header.classList.toggle('scrolled', top > 24);
  }
  var navGlide = null;   // (stopIndex, dur, ease) — set by chapterNav / touchNav, cleared on revert
  function deepLinkSettle() {
    var ch = deepLinkChapter();
    if (!ch) return;
    var arr = chapterStops(), si = ch._stop;
    var s = window.ScrollSmoother && ScrollSmoother.get();
    var D = arr[si] - (s ? s.scrollTop() : window.scrollY);
    if (header) header.classList.toggle('scrolled', arr[si] > 24);
    if (Math.abs(D) < 6) return;   // already on the chapter (the navs' own threshold) — no glide, no lock
    if (navGlide) navGlide(si, NAV_DUR, NAV_EASE);
    else if (s) s.scrollTop(arr[si]); else window.scrollTo(0, arr[si]);
  }
  deepLinkPlace();

  // The hero entrance is built PAUSED and parked here; the preloader releases it the
  // instant the stripe curtain lifts, so the intro is one continuous sequence
  // (curtain -> hero) owned by the engine rather than two scripts racing.
  // Arriving by deep link, the entrance does not play: each parked player jumps to its
  // end state instead, which still fires its completion hooks (heroOut's scrub, the
  // form card's exit) so the hero is at rest if the visitor scrolls back up to it.
  var heroPlayers = [], heroReleased = false;
  function startHero(t) { if (deepLinkChapter()) t.progress(1); else t.play(0); }
  function releaseHero() {
    heroReleased = true;
    heroPlayers.forEach(startHero);
  }

  function lines(el) {
    if (!window.SplitText) return [el];
    if (el._edLines) return el._edLines;   // cache: rebuilds must not re-split split lines
    try {
      el._edSplit = new SplitText(el, { type: 'lines', linesClass: 'ed-line' });   // kept for revert on resize
      el._edLines = el._edSplit.lines;
      return el._edLines;
    }
    catch (e) { return [el]; }
  }

  /* =========================== REVEAL PRIMITIVE ===========================
     moves: flat list of { els, from, dur, ease, at, stagger }. `from` is the
     hidden state; the shown state is derived from it. The IN plays from -> shown
     exactly as declared; the OUT is the generated mirror (shown -> from), placed so
     that playing the timeline backwards equals the IN. Global feel in REV. */
  // Map chapter timing — every number the choreography runs on, in one place.
  // ?tune in the URL opens a slider panel that live-rebuilds the chapter from these.
  // NORMALIZED 2026-09-03: all beat values divided by 6 so one beat costs the same
  // wall-time here as on every other chapter (scrub 6 vs 2.5 over ~2.4x the beats).
  // Generic vocabulary now lands correctly with NO per-element scale factors.
  var MAP_T = { scrub: 6, band: 85, dotsAt: 3.333, dotsDur: 7.333, dotsStag: 0.333, dotsTravel: 0.4,
                chromeAt: 9.167,
                camAt: 0, camDur: 0, camDist: 2.4, camRot: 15, camEase: 'sine.inOut',    // hand-tuned via ?tune, 2026-09-02
                diveDur: 1.6, divePow: 4,     // dot-dive flight: length multiplier + ease exponent, read by map.js at flight time
                photoOut: 22, photoLen: 20, photoCurve: 1.3,   // photo fade: start altitude, span, shape (hand-tuned 2026-09-02)
                textLead: 600, textSpeed: 2,     // copy: ms before landing it starts; entrance timeScale (hand-tuned 2026-09-02)
                touchCoast: 0.25, touchThrow: 250,     // mobile flick: momentum projection (s), min speed that always advances a beat (hand-tuned 2026-09-02)
                noteAt: 8.333, noteDur: 2,   // precinct note: when it performs; pace multiplier on the hero vocabulary (2 = half the hero's pace)
                dotsOut: 1, dotsBounce: 0, // dots: departure timing; landing overshoot strength (0 = glide, no bounce)
                pulsePeriod: 4.1, pulseBreath: 1.2, pingPhase: 0.35, pingScale: 4.2, pingOp: 0.36 };   // ambient dot pulse (hand-tuned 2026-09-02)
  var mapTls = [];   // live timelines for the map chapter, killed + rebuilt on tuning changes

  var REV = {
    scrub: 2.5,       // scroll-tied catch-up. Lower = the reveal tracks the scroll
                      // more tightly; higher = softer, more trailing.
    start: 'top 50%', // symmetric band -> chapter rests dead-centre in the hold,
    end: 'top -50%',  // which is what makes up == down, and the gap = OUT then IN.
    hold: 0.0         // beats of stillness between IN finishing and OUT starting.
  };
  // Shown values for every property we animate from. transformOrigin is a config,
  // not a state, so it is excluded here and set once on the element instead.
  var _SHOWN = { opacity: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, scale: 1, scaleX: 1, scaleY: 1, rotation: 0, filter: 'blur(0px)' };
  function _shown(from) { var o = {}, k; for (k in from) if (k !== 'transformOrigin') o[k] = (_SHOWN[k] !== undefined ? _SHOWN[k] : 0); return o; }
  function _merge(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b) o[k] = b[k]; return o; }
  function _revEase(e) {
    if (!e) return 'power2.out';
    if (e.indexOf('.inOut') >= 0) return e;
    if (e.indexOf('.out') >= 0) return e.replace('.out', '.in');
    if (e.indexOf('.in') >= 0) return e.replace('.in', '.out');
    return e;
  }

  function reveal(chapter, moves, ticks, opts) {
    moves = (moves || []).filter(function (m) { return m.els && m.els.length; });
    if (!moves.length && !(ticks && ticks.length)) return;
    opts = opts || {};

    // MOBILE: strip the animated blur. iOS Safari pops filter:blur that resolves while the
    // page is scrolling (proven exhaustively — only the static hero stays clean; the
    // scroll-driven tickers, which never blur, also stay clean). Slide + fade remain and
    // still scrub to scroll (that motion doesn't pop). Desktop keeps the full blur reveal.
    if (window.matchMedia('(max-width:800px)').matches) {
      moves = moves.map(function (m) {
        if (!m.from || m.from.filter == null) return m;
        var f = {}, k; for (k in m.from) if (k !== 'filter') f[k] = m.from[k];
        return _merge(m, { from: f });
      }).filter(function (m) { return m.from && Object.keys(m.from).length; });
      if (!moves.length && !(ticks && ticks.length)) return;
    }

    // Any transformOrigin declared in a `from` is a config: apply it once, up front.
    moves.forEach(function (m) { if (m.from.transformOrigin) gsap.set(m.els, { transformOrigin: m.from.transformOrigin }); });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: chapter,
        start: opts.start || REV.start,
        end: opts.end || REV.end,
        scrub: opts.scrub || REV.scrub
      }
    });

    // Length of the IN = the latest finishing move.
    var inEnd = 0;
    moves.forEach(function (m) {
      var s = m.stagger || 0, end = (m.at || 0) + m.dur + s * (m.els.length - 1);
      if (end > inEnd) inEnd = end;
    });
    // noMirror: IN-only reveal — for chapters whose exit is its own choreography
    // (the map's place pull-back) rather than a mirrored departure.
    var holdEnd = inEnd + REV.hold, total = opts.noMirror ? inEnd : holdEnd + inEnd;

    moves.forEach(function (m) {
      var shown = _shown(m.from), at = m.at || 0, stag = m.stagger || 0;
      var inEase = m.ease || 'power2.out';
      // IN — the entrance, exactly as authored.
      tl.fromTo(m.els, m.from, _merge(shown, { duration: m.dur, ease: inEase, stagger: stag }), at);
      if (opts.noMirror) return;
      // OUT — the mirror: shown -> hidden, reversed ease, mirrored time, reversed
      // stagger, so scrolling up (timeline played backwards) reproduces the IN.
      // m.outAt overrides the mirrored position (beats into the departure) — for moves
      // whose entrance is early but whose exit must stay visible (the map's dots).
      var outAt = m.outAt != null ? holdEnd + m.outAt : holdEnd + (inEnd - (at + m.dur)) - stag * (m.els.length - 1);
      tl.fromTo(m.els, shown, _merge(m.from, {
        duration: m.dur, ease: _revEase(inEase),
        stagger: stag ? { each: stag, from: 'end' } : 0, immediateRender: false
      }), outAt);
    });
    tl.to({}, { duration: total }, 0); // pin the length so positions map exactly.
    reveal._last = tl;   // rebuild support: caller can retrieve the created timeline

    // Number tickers, driven by the SAME timeline: count up over the arrival half,
    // back down over the departure half, so they peak at the centre and are
    // symmetric both ways like everything else. Linear = exactly even.
    if (ticks && ticks.length) {
      ticks.forEach(function (el) {
        // The ticker OWNS textContent once harvested — cache the authored figures on
        // first sight and always parse from the cache, restoring the element first: a
        // rebuild that fires mid-count must never read animation output as the target.
        if (el._tkSrc == null) el._tkSrc = el.textContent;
        el.textContent = el._tkSrc;
        var parts = el._tkSrc.match(/(\d[\d,]*(?:\.\d+)?)|(\D+)/g) || [];
        el._tk = parts.map(function (p) {
          if (!/\d/.test(p)) return { s: p };
          var mm = /\.(\d+)/.exec(p), n = parseFloat(p.replace(/,/g, '')), d = mm ? mm[1].length : 0;
          // Big numbers count from NEARBY (no digit-boundary crossing — settles into place
          // instead of slot-machining, width never jumps). Small numbers (<=20) count from
          // ZERO: 0->13 is a visible, satisfying run and can't churn at these magnitudes.
          var st = 0;
          if (n > 20) {
            st = Math.max(Math.ceil(n * 0.55), Math.pow(10, String(Math.round(n)).length - 1));
            if (st >= n) st = n - 1;
          }
          return { n: n, d: d, st: st };
        });
      });
      var stt = { p: 0 };
      var render = function () {
        ticks.forEach(function (el) {
          var s = ''; el._tk.forEach(function (t) { if (t.s != null) { s += t.s; return; } var v = t.st + (t.n - t.st) * stt.p; s += t.d ? v.toFixed(t.d) : Math.round(v).toLocaleString('en-AU'); });
          el.textContent = s;
        });
      };
      render();
      // The count rides WITH the stat block's arrival (same beats as the figs move) and
      // decelerates to rest as the block lands — not a linear churn to the timeline's
      // midpoint. The departure mirrors it, position and ease reversed.
      var TICK_AT = opts.tickAt != null ? opts.tickAt : Math.min(1.5, inEnd * 0.35);
      var TICK_DUR = Math.max(1, Math.min(opts.tickDur || 3.2, inEnd - TICK_AT));
      tl.to(stt, { p: 1, ease: 'power2.out', onUpdate: render, duration: TICK_DUR }, TICK_AT);
      if (!opts.noMirror) {
        tl.to(stt, { p: 0, ease: 'power2.in', onUpdate: render, duration: TICK_DUR, immediateRender: false }, total - TICK_AT - TICK_DUR);
      }
    }
  }

  /* ===================== HERO ENQUIRY CARD (behaviour) =====================
     The ink card's interactions: focus-line draws, the callback morph, submit →
     window.submitLead (script.js pipeline) → the success performance, the
     post-success call-back offer, and Calendly loaded lazily on first intent. */
  function heroForm() {
    var card = document.querySelector('.hero-form-card');
    if (!card || !card.querySelector('.fmc-form')) return;

    // focus: the bright line redraws from the left; retreats on blur
    $('.fmc-field', card).forEach(function (f) {
      var line = f.querySelector('.fmc-focusline'), input = f.querySelector('input');
      if (!line || !input) return;
      input.addEventListener('focus', function () { gsap.to(line, { scaleX: 1, duration: .55, ease: 'power3.out' }); });
      input.addEventListener('blur', function () {
        gsap.to(line, { scaleX: 0, transformOrigin: '100% 50%', duration: .4, ease: 'power2.in',
          onComplete: function () { gsap.set(line, { transformOrigin: '0 50%' }); } });
      });
    });

    // the callback morph — one card, two depths of ask; only the delta moves
    var mode = 'brochure';
    var swapText = function (el, txt) {
      return gsap.timeline()
        .to(el, { opacity: 0, y: -8, filter: 'blur(4px)', duration: .28, ease: 'power2.in' })
        .add(function () { el.textContent = txt; })
        .to(el, { opacity: 1, y: 0, filter: 'blur(0px)', duration: .4, ease: 'power2.out' });
    };
    document.getElementById('fmc-mode').addEventListener('click', function (e) {
      e.preventDefault();
      var toCall = mode === 'brochure';
      mode = toCall ? 'callback' : 'brochure';
      var wrap = document.getElementById('fmc-phone-wrap'), inner = wrap.firstElementChild;
      document.getElementById('fmc-phone').required = toCall;
      if (toCall) {
        gsap.timeline()
          .to(wrap, { height: inner.offsetHeight + 26, duration: .6, ease: 'power3.out' }, 0)
          .fromTo(inner, { y: 40, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: .7, ease: 'power3.out' }, .12);
      } else {
        gsap.timeline()
          .to(inner, { y: 30, opacity: 0, filter: 'blur(6px)', duration: .35, ease: 'power2.in' }, 0)
          .to(wrap, { height: 0, duration: .5, ease: 'power3.inOut' }, .1);
      }
      swapText(document.getElementById('fmc-mode-eyebrow'), toCall ? 'Request a call back' : 'The Loam House brochure');
      swapText(document.getElementById('fmc-intro'), toCall ? 'Leave your number and we’ll phone you within one business day.' : 'Floorplans, finishes, amenities and current pricing, sent directly to your inbox.');
      swapText(document.getElementById('fmc-send-label'), toCall ? 'Request a call back' : 'Send me the brochure');
      swapText(document.getElementById('fmc-mode-label'), toCall ? '← Just send the brochure' : 'Request a call back');
    });

    // submit → pipeline → the thank-you performance (no lead is ever lost silently)
    var FALLBACK = 'Something went wrong sending your details. Please call Leone Steele on 0422 299 202 or Edwina Smith on 0497 126 202, and we’ll look after you directly.';
    function showError(where) {
      var n = where.querySelector('.lead-error');
      if (!n) { n = document.createElement('p'); n.className = 'lead-error'; where.appendChild(n); }
      n.textContent = FALLBACK;
    }
    var form = card.querySelector('[data-hero-form]');
    var sendBtn = document.getElementById('fmc-send');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('fmc-name').value.trim();
      var email = document.getElementById('fmc-email').value.trim();
      var phone = document.getElementById('fmc-phone').value.trim();
      sendBtn.disabled = true;
      window.submitLead({ name: name, email: email, phone: phone,
        website: (form.querySelector('[name="website"]') || {}).value || '', intent: mode })
        .then(function () { successPerf(name, email, mode); })
        .catch(function () { showError(form); })
        .finally(function () { sendBtn.disabled = false; });
    });
    // The thank-you reads differently by what was asked for. Brochure: "on its way to <email>"
    // plus the call-back offer. Call-back: that request IS the whole ask, so no brochure lines
    // and no second phone prompt — just the confirmation that the team will ring.
    function successPerf(name, email, how) {
      var first = name.split(/\s+/)[0] || '';
      var callback = how === 'callback';
      document.getElementById('fmc-success-eyebrow').textContent = first ? 'Thank you, ' + first : 'Thank you';
      document.getElementById('fmc-success-email').textContent = email || 'your inbox';
      var fm = card.querySelector('.fmc-form'), sc = card.querySelector('.fmc-success');
      gsap.set(sc.querySelectorAll('.line'), { display: callback ? 'none' : '' });
      gsap.set(sc.querySelector('.fmc-view'), { display: callback ? 'none' : '' });
      gsap.set([sc.querySelector('.fmc-upsell-intro'), sc.querySelector('.fmc-upsell-form')], { display: callback ? 'none' : '' });
      gsap.set(sc.querySelector('.fmc-upsell-done'), { display: callback ? 'block' : 'none' });
      card.style.minHeight = card.offsetHeight + 'px';   // the card never resizes on the swap
      var tl = gsap.timeline()
        .to(fm.children, { opacity: 0, y: -18, filter: 'blur(6px)', duration: .45, ease: 'power2.in', stagger: .05 })
        .set(fm, { display: 'none' })
        .set(sc, { display: 'block' })
        .from(sc.querySelector('.fmc-line'), { scaleX: 0, transformOrigin: '0 50%', duration: 1, ease: 'power3.out' })
        .from(sc.querySelector('.fmc-eyebrow .m span'), { yPercent: 130, duration: .9, ease: 'power3.out' }, '-=.7');
      if (!callback) {
        tl.from(sc.querySelectorAll('.line span'), { x: function (i) { return i % 2 ? 90 : -90; }, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: .08 }, '-=.55')
          .from(sc.querySelectorAll('.line span'), { filter: 'blur(16px)', duration: 1.5, ease: 'power1.out', stagger: .08 }, '<');
        tl.from(sc.querySelector('.fmc-view'), { opacity: 0, y: 16, duration: .6, ease: 'power2.out' }, '-=.7');
      }
      tl.from(sc.querySelector('.fmc-upsell'), { opacity: 0, y: 18, duration: .7, ease: 'power2.out' }, callback ? '-=.5' : '-=.4');
    }

    // the post-success call-back offer → a second lead, intent 'callback'
    var upBtn = document.getElementById('fmc-upsell-send');
    upBtn.addEventListener('click', function () {
      var phone = document.getElementById('fmc-upsell-phone').value.trim();
      if (!phone) return;
      var up = card.querySelector('.fmc-upsell');
      upBtn.disabled = true;
      window.submitLead({
        name: document.getElementById('fmc-name').value.trim(),
        email: document.getElementById('fmc-email').value.trim(),
        phone: phone, intent: 'callback' })
        .then(function () {
          card.style.minHeight = card.offsetHeight + 'px';
          up.style.minHeight = up.offsetHeight + 'px';
          gsap.timeline()
            .to('.fmc-upsell-intro, .fmc-upsell-form, .fmc-success .line', { opacity: 0, y: -14, filter: 'blur(5px)', duration: .4, ease: 'power2.in', stagger: .03 })
            .set('.fmc-upsell-intro, .fmc-upsell-form, .fmc-success .line', { display: 'none' })
            .set('.fmc-upsell-done', { display: 'block' })
            .from('.fmc-upsell-done', { opacity: 0, y: 16, filter: 'blur(6px)', duration: .8, ease: 'power2.out' }, '+=.15');
        })
        .catch(function () { showError(up); })
        .finally(function () { upBtn.disabled = false; });
    });

    // Calendly: loaded on first intent only — the site ships no third-party weight
    // to visitors who never book. Stock popup, palette + prefill via URL params.
    var CAL_URL = 'https://calendly.com/d/cqb7-kbq-h5d/loam-house-sandringham-private-appointment';
    var calReady = null;
    function loadCalendly() {
      if (calReady) return calReady;
      calReady = new Promise(function (resolve, reject) {
        var l = document.createElement('link'); l.rel = 'stylesheet';
        l.href = 'https://assets.calendly.com/assets/external/widget.css'; document.head.appendChild(l);
        var s = document.createElement('script'); s.async = true;
        s.src = 'https://assets.calendly.com/assets/external/widget.js';
        s.onload = resolve; s.onerror = reject; document.head.appendChild(s);
      });
      return calReady;
    }
    function openCalendly(e) {
      e.preventDefault();
      var q = ['hide_gdpr_banner=1', 'background_color=ffffff', 'text_color=1e211d', 'primary_color=1e211d'];
      var n = document.getElementById('fmc-name').value.trim(); if (n) q.push('name=' + encodeURIComponent(n));
      var em = document.getElementById('fmc-email').value.trim(); if (em) q.push('email=' + encodeURIComponent(em));
      loadCalendly()
        .then(function () { Calendly.initPopupWidget({ url: CAL_URL + '?' + q.join('&') }); })
        .catch(function () { window.open(CAL_URL, '_blank', 'noopener'); });   // script blocked: plain new tab
    }
    document.getElementById('fmc-appt').addEventListener('click', openCalendly);
    // the header + mobile-menu appointment pills book through the same popup
    $('[data-open-calendly]').forEach(function (b) { b.addEventListener('click', openCalendly); });
  }

  /* ===================== CONTACT CHAPTER (multi-step enquiry) =====================
     Adapted from a standard index + active-class stepper: one .cf-step shows at a time,
     per-step validation gates Continue, the progress dots track position, and Submit
     funnels through window.submitLead — the same seam every form on the site uses. */
  function contactForm() {
    var sec = document.querySelector('.contact-chapter');
    if (!sec) return;
    var form = sec.querySelector('[data-contact-form]');
    if (!form) return;
    var steps = $('.cf-step', form);
    var dots = $('.cf-dot', sec);
    var cur = 0;

    // underline redraws on focus, retreats on blur — same grammar as the ink card
    $('.cf-field', sec).forEach(function (f) {
      var line = f.querySelector('.cf-line'), input = f.querySelector('input, select, textarea');
      if (!line || !input) return;
      input.addEventListener('focus', function () { f.classList.remove('invalid'); gsap.to(line, { scaleX: 1, duration: .5, ease: 'power3.out' }); });
      input.addEventListener('blur', function () { gsap.to(line, { scaleX: 0, transformOrigin: '100% 50%', duration: .4, ease: 'power2.in', onComplete: function () { gsap.set(line, { transformOrigin: '0 50%' }); } }); });
    });

    function paint() {
      steps.forEach(function (s, i) { s.classList.toggle('active', i === cur); });
      dots.forEach(function (d, i) { d.classList.toggle('active', i === cur); d.classList.toggle('completed', i < cur); });
    }
    function valid(stepEl) {
      var ok = true;
      $('input, select, textarea', stepEl).forEach(function (f) {
        if (f.name === 'website') return;
        var field = f.closest('.cf-field');
        if (f.hasAttribute('required') && !f.checkValidity()) { ok = false; if (field) field.classList.add('invalid'); }
        else if (field) field.classList.remove('invalid');
      });
      return ok;
    }
    function go(step) {
      if (step > 0 && !valid(steps[cur])) {
        var bad = steps[cur].querySelector('.cf-field.invalid input, .cf-field.invalid select, .cf-field.invalid textarea');
        if (bad) bad.focus();
        return;
      }
      cur = Math.max(0, Math.min(cur + step, steps.length - 1));
      paint();
    }
    sec.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.classList.contains('cf-next')) { e.preventDefault(); go(1); }
      else if (b.classList.contains('cf-prev')) { e.preventDefault(); go(-1); }
    });

    var FALLBACK = 'Something went wrong sending your enquiry. Please call Leone Steele on 0422 299 202 or Edwina Smith on 0497 126 202, and we’ll look after you directly.';
    function showError() {
      var n = form.querySelector('.lead-error');
      if (!n) { n = document.createElement('p'); n.className = 'lead-error'; form.appendChild(n); }
      n.textContent = FALLBACK;
    }
    var val = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valid(steps[cur])) return;
      var btn = form.querySelector('.cf-submit'); if (btn) btn.disabled = true;
      window.submitLead({
        name: val('cf-name'), email: val('cf-email'), phone: val('cf-phone'),
        preferred: val('cf-preferred'), enquiry: val('cf-enquiry'), message: val('cf-message'),
        website: (form.querySelector('[name="website"]') || {}).value || '', intent: 'contact'
      }).then(function () { success(val('cf-name')); })
        .catch(function () { showError(); })
        .finally(function () { if (btn) btn.disabled = false; });
    });

    function success(name) {
      var first = name.split(/\s+/)[0] || '';
      var sc = sec.querySelector('.cf-success'), nm = document.getElementById('cf-success-name');
      if (nm) nm.textContent = first ? ', ' + first : '';
      var prog = sec.querySelector('.cf-progress');
      // The thank-you REPLACES the heading block ("Speak with the team" / "Register your
      // interest."), it doesn't sit beneath it — so the eyebrow and h2 leave with the form.
      var leaving = [form, prog, sec.querySelector('.contact-inner .eyebrow'), sec.querySelector('.contact-inner h2')].filter(Boolean);
      gsap.timeline()
        .to(leaving, { opacity: 0, y: -16, filter: 'blur(6px)', duration: .45, ease: 'power2.in' })
        .set(leaving, { display: 'none' })
        .add(function () { sc.hidden = false; })
        .from(sc, { opacity: 0, y: 18, filter: 'blur(8px)', duration: .8, ease: 'power2.out' });
    }

    paint();
  }

  /* ===================== SECTION NUMBER STRUCTURE =====================
     "01 / The proposition" -> the chapter plate: the fig lockup at chapter scale —
     serif numeral over the caps title, both masked for their drops. Built here;
     animated by chapterMoves like everything else, so it rides the chapter clock. */
  function buildSectionNumbers() {
    $('.section-number').forEach(function (el) {
      if (el.querySelector('.sn-text')) return;
      var parts = el.textContent.split('/');
      el.textContent = '';
      var numMask = document.createElement('span'); numMask.className = 'sn-mask sn-num-mask';
      var num = document.createElement('span'); num.className = 'sn-num';
      num.textContent = (parts[0] || '').trim();
      numMask.appendChild(num);
      var pMask = document.createElement('span'); pMask.className = 'sn-mask';
      var pText = document.createElement('span'); pText.className = 'sn-text';
      pText.textContent = (parts[1] || '').trim();
      pMask.appendChild(pText);
      el.appendChild(numMask);
      el.appendChild(pMask);
    });
  }

  /* ===================== CHOREOGRAPHY (one vocabulary) =====================
     Every content chapter is described here, once. Each element TYPE has a single
     consistent motion across the whole site; exits mirror automatically. Times are
     in beats on the chapter timeline. Change a motion here, change it everywhere. */
  function chapterMoves(chapter) {
    var moves = [], ticks = [];
    // The form chapter: on MOBILE the card rises in as its own beat; on desktop it is a
    // hero overlay whose card the hero's load timeline owns — no scrub moves there.
    if (chapter.classList.contains('form-chapter')) {
      if (window.matchMedia('(max-width:800px)').matches) {
        var fCard = chapter.querySelector('.hero-form-card');
        if (fCard) {
          moves.push({ els: [fCard], from: { y: 70, opacity: 0 }, dur: 2.4, ease: 'power2.out', at: 0.3 });
          moves.push({ els: [fCard], from: { filter: 'blur(8px)' }, dur: 2.8, ease: 'power1.out', at: 0.3 });
        }
      }
      return { moves: moves, ticks: ticks };
    }
    var dir = function (i) { return (i % 2 ? 1 : -1) * Math.max(window.innerWidth, 1) * 0.28; };
    // The contact chapter: only the eyebrow + heading take the signature reveal. The form
    // (steps, fields, progress, buttons) is NEVER harvested into the scrubbed timeline — a
    // scroll-scrubbed form field is exactly the fragility we removed elsewhere.
    if (chapter.classList.contains('contact-chapter')) {
      var ceb = $('.eyebrow', chapter);
      if (ceb.length) {
        moves.push({ els: ceb, from: { x: 200, opacity: 0 }, dur: 1.8, ease: 'power3.out', at: 0.2 });
        moves.push({ els: ceb, from: { filter: 'blur(9px)' }, dur: 2.2, ease: 'power1.out', at: 0.2 });
      }
      var ch = []; $('h2', chapter).forEach(function (h) { ch = ch.concat(lines(h)); });
      if (ch.length) {
        moves.push({ els: ch, from: { x: dir, opacity: 0 }, dur: 4.4, ease: 'power3.out', at: 0.1 });
        moves.push({ els: ch, from: { filter: 'blur(22px)' }, dur: 4.5, ease: 'power1.out', at: 0 });
      }
      return { moves: moves, ticks: ticks };
    }
    // Map panel copy (#content) is a flight-time performance owned by map.js (destPanelIn/Out)
    // — it must never also be harvested into the scrubbed chapter reveal, or the two systems
    // write the same elements on alternating ticks while the scrub catches up (visible flicker).
    var owned = function (el) {
      return el.closest('.hero-form-card') || el.closest('.intro-figures') || el.closest('dl') ||
             el.closest('#content') ||
             el.closest('.precinct-note');   // precinct copy is authored in the map branch at MAP_T timing
    };
    var body = function (sel) {
      return $(sel, chapter).filter(function (el) { return !owned(el); });
    };

    // Chapter plate — the title drops in first, THEN the numeral slides UP from behind
    // it. Beat 0 on every chapter, map included (the old 3.333 map offset served the
    // deleted divider line, which had to draw mid-entry).
    var snAt = 0;
    var snText = $('.sn-text', chapter), snNum = $('.sn-num', chapter);
    if (snText.length) {
      moves.push({ els: snText, from: { yPercent: -240 }, dur: 1.4, ease: 'power3.out', at: snAt });
      moves.push({ els: snText, from: { filter: 'blur(6px)' }, dur: 2, ease: 'power1.out', at: snAt });
    }
    if (snNum.length) {
      moves.push({ els: snNum, from: { yPercent: 110 }, dur: 2.4, ease: 'power3.out', at: snAt + 0.9 });
      moves.push({ els: snNum, from: { filter: 'blur(6px)' }, dur: 3, ease: 'power1.out', at: snAt + 0.9 });
    }

    // Heading — lines enter from alternating sides with a long, held blur. The
    // signature move; starts earliest so it leads.
    var hLines = [];
    $('h1,h2,h3', chapter).forEach(function (h) { if (!owned(h)) hLines = hLines.concat(lines(h)); });
    if (hLines.length) {
      moves.push({ els: hLines, from: { x: dir, opacity: 0 }, dur: 4.4, ease: 'power3.out', at: 0.1 });
      moves.push({ els: hLines, from: { filter: 'blur(22px)' }, dur: 4.5, ease: 'power1.out', at: 0 });
    }

    // Big index numeral on the collection cards ("01" / "02" / "03") — settles down
    // from just above, with blur.
    var bigNum = $('.collection-copy > span', chapter);
    if (bigNum.length) {
      moves.push({ els: bigNum, from: { y: -46, opacity: 0 }, dur: 2.2, ease: 'power2.out', at: 1.2 });
      moves.push({ els: bigNum, from: { filter: 'blur(7px)' }, dur: 2.6, ease: 'power1.out', at: 1.2 });
    }

    // Eyebrow — small label, enters from the right with blur. Eyebrows living in a
    // stat block are NOT harvested here — they drop with the block's grammar below.
    var eb = $('.eyebrow', chapter).filter(function (el) { return !owned(el) && !el.closest('.figs'); });
    if (eb.length) {
      moves.push({ els: eb, from: { x: 220, opacity: 0 }, dur: 1.8, ease: 'power3.out', at: 1.6, stagger: 0.15 });
      moves.push({ els: eb, from: { filter: 'blur(9px)' }, dur: 2.2, ease: 'power1.out', at: 1.6, stagger: 0.15 });
    }
    // Collection eyebrow inside the stat block — once the block and its hairline have
    // landed, the label slides DOWN from behind the line through its mask.
    var figEb = $('.figs .figs-eyebrow .eyebrow', chapter).filter(function (el) { return !owned(el); });
    if (figEb.length) {
      moves.push({ els: figEb, from: { yPercent: -130 }, dur: 1.8, ease: 'power3.out', at: 3.2 });
      moves.push({ els: figEb, from: { filter: 'blur(6px)' }, dur: 2.4, ease: 'power1.out', at: 3.2 });
    }

    // Stat block (intro figures) — the whole unit, hairline + numbers together,
    // descends from above so the line travels with the numbers.
    var figWrap = $('.intro-figures, .figs', chapter).filter(function (el) { return !owned(el); });
    if (figWrap.length) {
      moves.push({ els: figWrap, from: { y: -110, opacity: 0 }, dur: 2.6, ease: 'power2.out', at: 1.5 });
      moves.push({ els: figWrap, from: { filter: 'blur(7px)' }, dur: 2.9, ease: 'power1.out', at: 1.5 });
      ticks = ticks.concat($('.intro-figures strong, .figs strong, [data-ticker]', chapter).filter(function (el) { return !owned(el); }));
    }

    // Body — paragraphs, notes and links rise from below with blur, gently
    // cascaded.
    var copy = body('p:not(.eyebrow), .finish-note span, .collection-copy a');
    if (copy.length) {
      moves.push({ els: copy, from: { y: 46, opacity: 0 }, dur: 2.2, ease: 'power2.out', at: 1.7, stagger: 0.12 });
      moves.push({ els: copy, from: { filter: 'blur(7px)' }, dur: 2.6, ease: 'power1.out', at: 1.7, stagger: 0.12 });
    }

    // Lists — credits, amenities and place lists rise as whole units, just after
    // the body, staggered between multiple lists.
    var lists = $('dl, .amenity-columns, .place-copy ul, .tags', chapter);
    if (lists.length) {
      moves.push({ els: lists, from: { y: 60, opacity: 0 }, dur: 2.3, ease: 'power2.out', at: 1.9, stagger: 0.18 });
      moves.push({ els: lists, from: { filter: 'blur(7px)' }, dur: 2.7, ease: 'power1.out', at: 1.9, stagger: 0.18 });
    }

    // Button row (final CTA) — rises with the body.
    var btnRow = $('.final-copy > div', chapter);
    if (btnRow.length) {
      moves.push({ els: btnRow, from: { y: 40, opacity: 0 }, dur: 2.2, ease: 'power2.out', at: 2.1 });
      moves.push({ els: btnRow, from: { filter: 'blur(6px)' }, dur: 2.4, ease: 'power1.out', at: 2.1 });
    }

    // Location line — a thin decorative rule; simply resolves in place with blur.
    var locLine = $('.location-line', chapter);
    if (locLine.length) {
      moves.push({ els: locLine, from: { opacity: 0, filter: 'blur(6px)' }, dur: 2.2, ease: 'power2.out', at: 2.1 });
    }

    /* ────────── Map chapter — the map elements ARE the chapter reveal ──────────
       Amenity dots use the same "signature" heading move (alternating sides + blur)
       so scrolling into the chapter watches 13 dots land onto the precinct plan. */
    if (chapter.classList.contains('map-chapter')) {
      // Chapter opens at Loam view — only precinct plan + amenity dots + amenity labels
      // + chrome are visible here. Everything area-view (roads, POIs, stations, area labels,
       //  suburb labels) stays out of the reveal; those animate when the user zooms out.

      // Map stage — enters ZOOMING IN (starts smaller, grows to natural size + slight rotation
      // + blur clearing). Duration matches full IN endpoint so motion runs continuously across
      // entering AND leaving (mirror OUT auto-reverses back to smaller/rotated/blurred).
      // The map's entry/exit is its own viewBox camera (hook exposed by map.js), driven
      // below on the exact same scrubbed, mirrored grammar as every chapter move.
      // Amenity dots — slide in from alternating sides with opacity fade. Sine S-curve so
      // the motion happens throughout scroll (not crammed at the end like expo.out).
      // Animate the .dot-reveal inner wrapper, NOT .dot itself — render() owns the outer
      // group's transform (camera-tied marker sizing) and must never be overwritten.
      // The wrapper lives inside the dot's ~1.67x-scaled local space, so its offset is
      // compensated (0.28 → 0.17) to reproduce the tuned on-screen travel distance.
      var dotDir = function (i) { return (i % 2 ? 1 : -1) * Math.max(window.innerWidth, 1) * MAP_T.dotsTravel; };
      var amenityDots = $('#dots .dot .dot-reveal', chapter);
      if (amenityDots.length) {
        // dotsBounce > 0 swaps the glide for a landing overshoot (back.out at that
        // strength) — each dot overshoots its spot and settles; the mirror pulls back in.
        var dotEase = MAP_T.dotsBounce > 0 ? 'back.out(' + MAP_T.dotsBounce + ')' : 'sine.inOut';
        moves.push({ els: amenityDots, from: { x: dotDir, opacity: 0 }, dur: MAP_T.dotsDur, ease: dotEase, at: MAP_T.dotsAt, stagger: MAP_T.dotsStag, outAt: MAP_T.dotsOut });
      }
      // Amenity labels — each name UNFURLS out from underneath its dot: tucked invisible at
      // the dot, sliding sideways into place with a slight overshoot, one by one after each
      // dot lands. A physically-motivated motion that belongs to the labels alone.
      // Legend list — entries unfurl in from the side, SLOWLY, one by one, after the
      // dots have landed. Long duration + long stagger so it reads at scroll pace.

      // Chrome (the journey link) — quiet fade last. It animates the link inside the nav,
      // not #map-nav itself, because render() owns #map-nav's opacity during dives.
      // The precinct note — the chapter's leading copy in the site's vocabulary. It starts
      // EARLY (MAP_T.noteAt, default 6): the headline performs over the arriving map with a
      // full runway, instead of being squeezed into the entry's tail like the first attempt.
      var pNote = chapter.querySelector('.precinct-note');
      if (pNote) {
        // Same moves as every chapter, scaled to THIS chapter's clock: the map's timeline
        // is ~8x longer in beats than a frame's (its scale is set by the tuned dots), so
        // the site-vocabulary durations multiply by noteDur to match wall-time elsewhere.
        var nk = MAP_T.noteDur;
        var nLines = pNote.querySelector('h2') ? lines(pNote.querySelector('h2')) : [];
        if (nLines.length) {
          moves.push({ els: nLines, from: { x: dir, opacity: 0 }, dur: 4.4 * nk, ease: 'power3.out', at: MAP_T.noteAt });
          moves.push({ els: nLines, from: { filter: 'blur(22px)' }, dur: 4.5 * nk, ease: 'power1.out', at: MAP_T.noteAt });
        }
        var nEb = pNote.querySelector('.eyebrow');
        if (nEb) {
          moves.push({ els: [nEb], from: { x: 220, opacity: 0 }, dur: 1.8 * nk, ease: 'power3.out', at: MAP_T.noteAt + 1.5 * nk });
          moves.push({ els: [nEb], from: { filter: 'blur(9px)' }, dur: 2.2 * nk, ease: 'power1.out', at: MAP_T.noteAt + 1.5 * nk });
        }
        var nLede = pNote.querySelector('.lede');
        if (nLede) {
          moves.push({ els: [nLede], from: { y: 46, opacity: 0 }, dur: 2.2 * nk, ease: 'power2.out', at: MAP_T.noteAt + 1.7 * nk });
          moves.push({ els: [nLede], from: { filter: 'blur(7px)' }, dur: 2.6 * nk, ease: 'power1.out', at: MAP_T.noteAt + 1.7 * nk });
        }
      }
      var mapChrome = $('#map-nav .nav-in', chapter);
      if (mapChrome.length) {
        moves.push({ els: mapChrome, from: { opacity: 0, filter: 'blur(8px)' }, dur: 3, ease: 'power2.out', at: MAP_T.chromeAt });
      }

      // Camera — a full-IN move on its own timeline, built from the same REV constants as
      // reveal(): identical band, identical scrub, mirrored OUT, the heading's power3.out.
      // Duration = this chapter's IN length, computed exactly the way reveal() computes it,
      // so the camera and the dots share one clock.
      if (window.__mapCam) {
        var camIn = 0;
        moves.forEach(function (m) {
          var s = m.stagger || 0, end = (m.at || 0) + m.dur + s * (m.els.length - 1);
          if (end > camIn) camIn = end;
        });
        if (window.__mapCam.set) window.__mapCam.set(MAP_T.camDist, MAP_T.camRot);
        // The camera's flight sits inside the chapter's IN window (length camIn). camAt
        // delays it; camDur shortens it (0 = fill the window). The OUT mirrors it: same
        // slice of the window from the other end, ease reversed — leaving the chapter
        // flies the camera back out, like every mirrored exit.
        var total = camIn + REV.hold + camIn;
        var camAt = Math.max(0, Math.min(MAP_T.camAt, camIn - 4));
        var camD = MAP_T.camDur > 0 ? Math.min(MAP_T.camDur, camIn - camAt) : camIn - camAt;
        var camTl = gsap.timeline({
          scrollTrigger: { trigger: chapter, start: 'top ' + MAP_T.band + '%', end: 'top -' + MAP_T.band + '%', scrub: MAP_T.scrub }
        })
        .to(window.__mapCam.state, { t: 1, duration: camD, ease: MAP_T.camEase, onUpdate: window.__mapCam.apply }, camAt)
        .to(window.__mapCam.state, { t: 0, duration: camD, ease: _revEase(MAP_T.camEase), onUpdate: window.__mapCam.apply, immediateRender: false }, total - camAt - camD)
        .to({}, { duration: total }, 0);
        mapTls.push(camTl);
        window.__mapCam.apply();   // reframe the rest pose in case the distance changed
      }
    }

    return { moves: moves, ticks: ticks };
  }

  /* ---------------------------- HERO ----------------------------
     The one bespoke moment: a one-shot on-load performance, then a scroll-tied OUT.
     Left as authored — this OUT (blur-led, form card sliding away) is the reference
     the chapter reveals are tuned to match. */
  function hero() {
    var wrap = document.querySelector('.hero-copy');
    if (!wrap) return;
    var eyebrow = wrap.querySelector('.eyebrow');
    var hLines = lines(wrap.querySelector('h1'));
    var small = $('.hero-bottom p, .hero-bottom .round-link, .hero-bottom .hero-brochure', wrap);
    var wordmark = document.querySelector('.site-header .wordmark');
    var formCard = document.querySelector('.hero-form-card');
    var dir = function (i) { return (i % 2 ? 1 : -1) * Math.max(window.innerWidth, 1) * 0.28; };
    var SHOWN = { opacity: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, filter: 'blur(0px)' };
    var shown = function (keys) { var o = {}, i; for (i = 0; i < keys.length; i++) o[keys[i]] = SHOWN[keys[i]]; return o; };

    // Entrance — built PAUSED and parked in heroPlayers; the preloader releases it
    // the moment the curtain lifts, so the hero animates in on the reveal.
    var entrance = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' }, onComplete: heroOut });
    entrance.timeScale(1.5)
      .from(wordmark, { opacity: 0, filter: 'blur(10px)', y: -8, duration: 3.6, ease: 'power1.out' }, 0)
      .from(eyebrow, { y: 46, opacity: 0, duration: 1.82 }, 1.6)
      .from(eyebrow, { filter: 'blur(9px)', duration: 2.9, ease: 'power1.out' }, 1.6)
      .from(hLines, { x: dir, opacity: 0, duration: 2.6, ease: 'expo.out' }, 0.05)
      .from(hLines, { filter: 'blur(16px)', duration: 3.06, ease: 'power1.out' }, 0.05)
      .from(small, { y: 46, opacity: 0, duration: 1.82, stagger: 0.15 }, 1.6)
      .from(small, { filter: 'blur(9px)', duration: 2.9, ease: 'power1.out', stagger: 0.15 }, 1.6)
      .from('.header-ctas .mbtn', { opacity: 0, filter: 'blur(8px)', duration: 1.7, stagger: 0.12, ease: 'power2.out', clearProps: 'filter,opacity' }, 1.6)
      .from('.menu-button', { opacity: 0, filter: 'blur(8px)', duration: 1.6, ease: 'power2.out', clearProps: 'filter,opacity' }, 1.7);
    heroPlayers.push(entrance);
    if (heroReleased) startHero(entrance);   // curtain already lifted before build ran

    if (formCard) {
      var mm = gsap.matchMedia();
      mm.add('(min-width:1051px)', function () {
        // Rise from below with the house blur-resolve; settles after the headline lands.
        // The exit is armed only once the entrance has landed (the heroOut pattern) —
        // the preloader's refresh mid-rise must never stamp the exit's start values
        // over the running entrance.
        var exit = null;
        var fin = gsap.from(formCard, { y: 90, opacity: 0, scale: .97, filter: 'blur(12px)', duration: 2.2, ease: 'power3.out', transformOrigin: '50% 100%', paused: true,
          onComplete: function () {
            // Exit: releases upward ahead of the hero image; mirrored back by the scrub.
            exit = gsap.fromTo(formCard, { y: 0, opacity: 1, filter: 'blur(0px)' },
              { y: -120, opacity: 0, filter: 'blur(10px)', ease: 'power2.out', immediateRender: false,
                scrollTrigger: { trigger: '.hero', start: '3% top', end: '33% top', scrub: 1.2 } });
          } });
        heroPlayers.push(fin);
        if (heroReleased) startHero(fin);
        return function () { if (exit) { if (exit.scrollTrigger) exit.scrollTrigger.kill(); exit.kill(); } };
      });
      // Tablet only (801–1050): phones (≤800) are owned by reveal()'s slide+fade, which has a
      // settled plateau — running this scrubbed rotation there too made the card rotate off when
      // focusing a field auto-scrolled the page.
      mm.add('(min-width:801px) and (max-width:1050px)', function () {
        var tl = gsap.timeline({ scrollTrigger: { trigger: formCard, start: 'top 95%', end: 'top -22%', scrub: 1 } });
        tl.fromTo(formCard, { xPercent: 120, rotation: 22, opacity: 0 },
            { xPercent: 0, rotation: 0, opacity: 1, ease: 'power3.out', duration: 2, transformOrigin: '50% 50%' }, 0);
        tl.to({}, { duration: 1.5 });
        tl.fromTo(formCard, { xPercent: 0, rotation: 0, opacity: 1 },
            { xPercent: -120, rotation: -22, opacity: 0, ease: 'power3.in', duration: 2, transformOrigin: '50% 50%', immediateRender: false });
      });
    }

    // Scrubbed OUT (explicit fromTo -> refresh-safe). Blur leads.
    function heroOut() {
      var tl = gsap.timeline({
        defaults: { ease: 'power2.in' },
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '40% top', scrub: 1.2 }
      });
      tl.fromTo(hLines, shown(['filter']),
        { filter: 'blur(14px)', duration: 0.5, ease: 'power2.out' }, 0);
      tl.fromTo(hLines, shown(['x', 'opacity']),
        { x: dir, opacity: 0, duration: 1, ease: 'power2.out' }, 0);
      tl.fromTo(eyebrow, shown(['y', 'filter']),
        { y: 46, filter: 'blur(9px)', duration: 0.4, ease: 'power2.out' }, 0);
      tl.fromTo(eyebrow, shown(['opacity']),
        { opacity: 0, duration: 0.95, ease: 'power1.out' }, 0);
      tl.fromTo(small, shown(['y', 'opacity', 'filter']),
        { y: -26, opacity: 0, filter: 'blur(7px)', stagger: 0.08 }, 0.1);
    }
  }

  /* ============================ CHAPTER NAV (desktop) ============================
     Settling is ONE primitive: glideTo(chapter). Every input resolves through it,
     differing only in how the target chapter is chosen —
       • wheel / keys : one step in the flick direction;
       • nav links    : the chapter holding the anchor;
       • scrollbar    : on RELEASE, project the release velocity and snap to where it
                        lands (real inertia → decelerate → rest, no seam).
     So the scrollbar is a free drag while HELD (nothing runs, nothing to fight), and
     the instant you let go it carries its momentum into the nearest chapter through
     the same glide the wheel uses.
     Knobs — NAV_DUR / NAV_EASE: the wheel + key glide.
       SETTLE_EASE : shape of the scrollbar landing. A longer-tailed ease coasts to
                     rest naturally instead of stopping short.
       SETTLE_V0   : the initial-speed factor of SETTLE_EASE, and it MUST match it so
                     the glide picks up at exactly the release speed (seamless hand-
                     off). sine.out≈1.57, power2.out=3, power3.out=4, power4.out=5.
                     Change SETTLE_EASE and SETTLE_V0 together.
       SETTLE_COAST: how far a flick throws.
       SETTLE_DUR  : the softest a settle can land (floors a fast flick's duration). */
  // The narrative's rest points, shared by the desktop glide and the mobile settle:
  // every chapter top, plus the map chapter's second beat (the Place pull-back).
  function chapterStops() {
    var max = ScrollTrigger.maxScroll(window), arr = [];
    $('.chapter').forEach(function (ch) {
      var top = Math.min(ch.offsetTop, max);
      // Overlay chapters (the desktop form-chapter shares the hero's position) share the
      // stop — two stops at one scroll position would trap the wheel step.
      if (arr.length && Math.abs(top - arr[arr.length - 1]) < 2) { ch._stop = arr.length - 1; return; }
      ch._stop = arr.length;   // the chapter's own stop index (nav links land here)
      arr.push(top);
    });
    return arr;
  }

  /* Mobile: the DESKTOP feel, ported — not native momentum with a correction bolted on.
     The finger is the scrollbar: while down, scroll is free 1:1 (nothing runs, nothing to
     fight). On release, exactly the desktop settle: read the release velocity, project
     where that momentum would coast (SETTLE_COAST), glide into the chapter nearest the
     PROJECTED point with the glide's initial speed matched to the release speed — so a
     flick's energy carries you into the next beat and decelerates to rest, seamlessly.
     A hard flick steps one beat with the wheel's own glide (NAV_DUR/NAV_EASE). */
  function touchNav() {
    gsap.matchMedia().add('(max-width:800px)', function () {
      var chapters = $('.chapter');
      if (chapters.length < 2) return;
      var smoother = window.ScrollSmoother && ScrollSmoother.get();
      var tween = null;
      function y() { return smoother ? smoother.scrollTop() : window.scrollY; }
      function setY(v) { if (smoother) smoother.scrollTop(v); else window.scrollTo(0, v); }
      function nearest(pos) {
        var arr = chapterStops(), b = 0, d = 1 / 0;
        arr.forEach(function (t, i) { var dd = Math.abs(t - pos); if (dd < d) { d = dd; b = i; } });
        return b;
      }
      function glide(i, dur, ease) {
        var arr = chapterStops();
        i = Math.max(0, Math.min(arr.length - 1, i));
        var p = { v: y() };
        if (tween) tween.kill();
        tween = gsap.to(p, { v: arr[i], duration: dur, ease: ease, overwrite: true, onUpdate: function () { setY(p.v); } });
      }
      // Nav links resolve through the SAME glide as the desktop (href → chapter stop,
      // distance-scaled NAV_DUR). Links inside the sliding menu wait for its conveyor
      // to finish closing before travelling — close completes, THEN you move.
      var menu = document.querySelector('[data-mobile-menu]');
      var lastPanel = menu && menu.querySelector('.mm-panels i');   // longest close delay
      function onLinkClick(e) {
        var a = e.currentTarget, id = a.getAttribute('href');
        if (!id || id.charAt(0) !== '#' || id === '#') return;
        var arr = chapterStops();   // refreshes each chapter's _stop index
        var si;
        if (id === '#top') si = 0;   // the wordmark's way home — stop 0 is the hero
        else {
          var target = document.getElementById(id.slice(1));
          if (!target) return;
          var si2 = -1;
          for (var k = 0; k < chapters.length; k++)
            if (chapters[k] === target || chapters[k].contains(target)) { si2 = chapters[k]._stop; break; }
          if (si2 < 0) return;
          si = si2;
        }
        e.preventDefault();
        var go = function () {
          var jump = Math.abs(si - nearest(y()));
          glide(si, Math.min(NAV_DUR + (jump - 1) * 0.18, 2.2), NAV_EASE);
        };
        if (menu && menu.contains(a) && lastPanel) {
          // script.js closes the menu on this same click; travel when the last stripe
          // has cleared (transitionend), with a timeout backstop past the .82s close.
          var done = false, fire = function () { if (done) return; done = true; go(); };
          var onEnd = function (ev) {
            if (ev.propertyName !== 'transform') return;
            lastPanel.removeEventListener('transitionend', onEnd); fire();
          };
          lastPanel.addEventListener('transitionend', onEnd);
          setTimeout(fire, 950);
        } else go();
      }
      var links = $('a[href^="#"]').filter(function (a) {
        var h = a.getAttribute('href');
        return h.length > 1 && !a.hasAttribute('data-open-form') && (h === '#top' || document.getElementById(h.slice(1)));
      });
      links.forEach(function (a) { a.addEventListener('click', onLinkClick); });
      var obs = ScrollTrigger.observe({
        target: document.documentElement, type: 'touch', preventDefault: true, tolerance: 4,
        onPress: function () { if (tween) tween.kill(); },
        // Observer's touch deltas follow the FINGER's motion (swipe up = negative), verified
        // empirically — scroll intent is the inverse.
        onChangeY: function (self) { setY(y() - self.deltaY); },
        onRelease: function (self) {
          var v = -self.velocityY;
          var TTt = (window.__mapTune && window.__mapTune.T) || {};
          var coast = TTt.touchCoast || 0.8;      // touch flicks throw further than a scrollbar release
          var throwV = TTt.touchThrow || 250;     // px/s of clear directional intent
          var arr = chapterStops(), i = nearest(y() + v * coast);
          // A definite flick never lands you backwards — it advances at least one beat,
          // arriving at the speed you threw it (the settle's velocity-matched duration).
          if (Math.abs(v) > throwV && i === nearest(y())) i = nearest(y()) + (v > 0 ? 1 : -1);
          i = Math.max(0, Math.min(arr.length - 1, i));
          var D = arr[i] - y();
          if (Math.abs(D) < 6) return;
          var speed = Math.abs(v);
          var dur = speed > 60 ? Math.abs(D) * SETTLE_V0 / speed : NAV_DUR;
          var maxDur = 1.6 * Math.max(1, Math.abs(D) / window.innerHeight);
          if (dur > maxDur) {
            // The release speed can't honestly be matched over this distance (a lazy flick
            // still advancing a whole beat) — clamping would launch far hotter than the
            // hand. Fall back to the desktop WHEEL model instead: the soft step glide,
            // scaled per viewport of travel, so every beat costs the same energy.
            glide(i, NAV_DUR * Math.max(1, Math.abs(D) / window.innerHeight), NAV_EASE);
          } else {
            glide(i, Math.max(SETTLE_DUR, dur), SETTLE_EASE);
          }
        }
      });
      navGlide = glide;   // deep-link settle arrives through this same glide
      return function () {
        navGlide = null;
        obs.kill(); if (tween) tween.kill();
        links.forEach(function (a) { a.removeEventListener('click', onLinkClick); });
      };
    });
  }

  var NAV_DUR = 1.3, NAV_EASE = 'sine.out';
  var SETTLE_EASE = 'power3.out', SETTLE_V0 = 4, SETTLE_COAST = 0.4, SETTLE_DUR = 0.7;
  function chapterNav() {
    gsap.matchMedia().add('(min-width:801px)', function () {
      var chapters = $('.chapter');
      if (chapters.length < 2) return;
      var smoother = window.ScrollSmoother && ScrollSmoother.get();
      var locked = false, lockTimer, tween, current = 0;

      function tops() { return chapterStops(); }
      function y() { return smoother ? smoother.scrollTop() : window.scrollY; }
      function setY(v) { if (smoother) smoother.scrollTop(v); else window.scrollTo(0, v); }
      function nearest(pos) {
        var arr = tops(), b = 0, d = Infinity;
        arr.forEach(function (t, i) { var dd = Math.abs(t - pos); if (dd < d) { d = dd; b = i; } });
        return b;
      }
      function glideTo(i, dur, ease) {
        var arr = tops();
        i = Math.max(0, Math.min(arr.length - 1, i));
        current = i; locked = true;
        var p = { v: y() };
        if (tween) tween.kill();
        tween = gsap.to(p, {
          v: arr[i], duration: dur || NAV_DUR, ease: ease || NAV_EASE, overwrite: true,
          onUpdate: function () { setY(p.v); },
          onComplete: function () { locked = false; }
        });
        clearTimeout(lockTimer);
        lockTimer = setTimeout(function () { locked = false; }, (dur || NAV_DUR) * 1000 + 250);
      }
      function step(d) {
        if (locked) return;
        current = nearest(y());
        glideTo(current + d);
      }
      function onWheel(e) {
        e.preventDefault();
        if (locked) return;
        step(e.deltaY > 0 ? 1 : -1);
      }
      function onKey(e) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        var t = e.target;
        if (t && (t.matches('input,textarea,select') || t.isContentEditable)) return;
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); step(1); }
        else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); step(-1); }
        else if (e.key === 'Home') { e.preventDefault(); glideTo(0); }
        else if (e.key === 'End') { e.preventDefault(); glideTo(1e9); }   // clamped to the last stop
      }
      // In-page nav links glide to the chapter that holds the target, scaled a
      // little longer for longer jumps so a far link doesn't blur past everything.
      function chapterIndexOf(el) {
        for (var i = 0; i < chapters.length; i++) if (chapters[i] === el || chapters[i].contains(el)) return i;
        return -1;
      }
      function onLinkClick(e) {
        var a = e.currentTarget, id = a.getAttribute('href');
        if (!id || id.charAt(0) !== '#' || id === '#') return;
        tops();   // refresh each chapter's _stop index
        var si;
        if (id === '#top') si = 0;   // the wordmark's way home — stop 0 is the hero
        else {
          var target = document.getElementById(id.slice(1));
          if (!target) return;
          var i = chapterIndexOf(target);
          if (i < 0) return;
          si = chapters[i]._stop;
        }
        e.preventDefault();
        var jump = Math.abs(si - nearest(y()));
        glideTo(si, Math.min(NAV_DUR + (jump - 1) * 0.18, 2.2));
      }
      var links = $('a[href^="#"]').filter(function (a) {
        var h = a.getAttribute('href');
        return h.length > 1 && !a.hasAttribute('data-open-form') && (h === '#top' || document.getElementById(h.slice(1)));
      });
      links.forEach(function (a) { a.addEventListener('click', onLinkClick); });

      // ---- Scrollbar inertia + settle (RELEASE only) ----
      // Grabbing the bar (or the bare document) marks a drag and cancels any running
      // settle, handing control straight back. While held, nothing runs. On release
      // we read the live scroll velocity from ScrollSmoother, project where that
      // momentum would coast (SETTLE_COAST seconds ahead), and glide into the nearest
      // chapter — with the glide's OWN duration solved so its initial speed equals
      // the release speed. sine.out reaches a target of distance D with initial speed
      // D*(pi/2)/dur, so dur = D*(pi/2)/speed hands the momentum over seamlessly and
      // decelerates into rest. A gentle release (no real velocity) just settles to
      // the nearest chapter at the default pace.
      var holding = false;
      function isBarGrab(e) {
        return e.clientX >= document.documentElement.clientWidth
          || e.target === document.documentElement || e.target === document.body;
      }
      function onDown(e) {
        if (!isBarGrab(e)) return;
        holding = true;
        if (tween) { tween.kill(); locked = false; }
      }
      function onUp() {
        if (!holding) return;
        holding = false;
        var v = smoother ? smoother.getVelocity() : 0;
        var arr = tops(), i = Math.max(0, Math.min(arr.length - 1, nearest(y() + v * SETTLE_COAST)));
        var D = arr[i] - y();
        if (Math.abs(D) < 6) return;                     // already on a chapter
        var speed = Math.abs(v);
        var dur = speed > 60 ? Math.abs(D) * SETTLE_V0 / speed : NAV_DUR;
        glideTo(i, Math.max(SETTLE_DUR, Math.min(dur, 1.6)), SETTLE_EASE);
      }


      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('keydown', onKey);
      window.addEventListener('pointerdown', onDown, true);
      window.addEventListener('pointerup', onUp, true);
      window.addEventListener('mousedown', onDown, true);
      window.addEventListener('mouseup', onUp, true);
      navGlide = glideTo;   // deep-link settle arrives through this same glide
      return function () {
        navGlide = null;
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('keydown', onKey);
        window.removeEventListener('pointerdown', onDown, true);
        window.removeEventListener('pointerup', onUp, true);
        window.removeEventListener('mousedown', onDown, true);
        window.removeEventListener('mouseup', onUp, true);
        links.forEach(function (a) { a.removeEventListener('click', onLinkClick); });
        if (tween) tween.kill();
        clearTimeout(lockTimer);
      };
    });
  }

  /* ============================ PRELOADER ============================
     The stripe curtain (CSS, the same primitive as the menu) is held until the hero
     video can play, the wordmark sharpening from blur as REAL load progresses. Then
     the stripes lift and the parked hero entrance is released — one intro sequence,
     owned by the engine. Non-hero videos are NOT blocked here; they preload on
     approach (chapterVideos) so they're ready just as you reach them. */
  function preloader() {
    var pre = document.querySelector('[data-preloader]');
    if (!pre) { releaseHero(); return; }
    document.body.classList.add('pl-active');
    toTop();
    var logo = pre.querySelector('.pl-logo img');
    var pctEl = pre.querySelector('[data-pl-pct]');
    var MAXBLUR = 22, shown = { v: 0 }, revealed = false;
    var now = function () { return (window.performance && performance.now) ? performance.now() : Date.now(); };
    var start = now();

    function paint() {
      if (logo) logo.style.filter = 'invert(1) blur(' + ((1 - shown.v) * MAXBLUR).toFixed(2) + 'px)';
      if (pctEl) pctEl.textContent = Math.round(shown.v * 100);
    }
    paint();

    // Reveal gate: the first-view hero video can play, fonts, and the hero poster.
    var isMobile = window.matchMedia('(max-width:800px)').matches;
    var heroVid = isMobile ? document.querySelector('.hero .hero-media-mobile')
                           : document.querySelector('.hero [data-hero-intro]');
    var poster = heroVid && heroVid.getAttribute('poster');
    var units = [
      function (done) {
        if (!heroVid) return done();
        if (heroVid.readyState >= 3) return done();          // HAVE_FUTURE_DATA (can play)
        var fn = function () {
          heroVid.removeEventListener('canplay', fn);
          heroVid.removeEventListener('loadeddata', fn);
          heroVid.removeEventListener('error', fn);
          done();
        };
        heroVid.addEventListener('canplay', fn);
        heroVid.addEventListener('loadeddata', fn);
        heroVid.addEventListener('error', fn);
        try { heroVid.load(); } catch (e) {}
      },
      function (done) { (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(done); },
      function (done) { if (!poster) return done(); var im = new Image(); im.onload = im.onerror = done; im.src = poster; }
    ];
    var total = units.length, count = 0;
    function bump() {
      count++;
      gsap.to(shown, { v: count / total, duration: 0.8, ease: 'power2.out', overwrite: 'auto', onUpdate: paint,
        onComplete: function () { if (count >= total) maybeReveal(); } });
    }
    function maybeReveal() {
      if (revealed) return; revealed = true;
      // guarantee the "sharpen to clarity" is felt on a fast load, then hold a beat
      var wait = Math.max(0, 550 - (now() - start)) / 1000 + 0.35;
      gsap.delayedCall(wait, doReveal);
    }
    function doReveal() {
      gsap.timeline({ onComplete: function () {
          document.body.classList.remove('pl-active');
          document.body.classList.add('pl-done');
          ScrollTrigger.refresh();
          deepLinkSettle();
        } })
        .to(pre.querySelector('.pl-logo'), { opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)   // wordmark + counter leave as one lockup
        .add(function () { pre.classList.add('lift'); deepLinkPlace(); }, 0.15)   // CSS stripe wipe, ~0.98s to clear; last fully-covered moment, so a deep link is re-seated here
        .add(releaseHero, 1.15)                                  // wipe clears, then the hero enters
        .to({}, { duration: 0.5 });
    }
    units.forEach(function (u) { u(bump); });
    // safety cap: a stalled asset must never trap the visitor behind the curtain
    gsap.delayedCall(5, function () { if (!revealed) gsap.to(shown, { v: 1, duration: 0.4, onUpdate: paint, onComplete: maybeReveal }); });
  }

  // Non-hero videos: start fetching each as its chapter comes within ~a screen, so
  // it's ready to play by the time you reach it (nothing blocks the initial curtain).
  function chapterVideos() {
    $('.chapter video').forEach(function (v) {
      if (v.closest('.hero') || v.preload === 'auto') return;
      ScrollTrigger.create({
        trigger: v, start: 'top bottom+=100%', once: true,
        onEnter: function () { try { v.preload = 'auto'; v.load(); } catch (e) {} }
      });
    });
  }

  /* ---- TUNING PANEL (?tune) ---- */
  function buildTunePanel() {
    if (document.getElementById('tune-panel')) return;
    var css = document.createElement('style');
    css.textContent = '#tune-panel{position:fixed;top:90px;right:14px;z-index:9999;background:rgba(20,22,18,.95);color:#fff;font:11px/1.5 monospace;padding:14px 16px;border-radius:8px;width:270px;max-height:calc(100vh - 110px);overflow-y:auto;overscroll-behavior:contain}' +
      '#tune-panel label{display:block;margin:7px 0 1px;color:#c9a37c}' +
      '#tune-panel input[type=range]{width:100%}' +
      '#tune-panel .v{float:right;color:#fff}' +
      '#tune-panel select,#tune-panel textarea{width:100%;background:#333;color:#fff;border:1px solid #555;font:inherit}' +
      '#tune-panel textarea{height:74px;margin-top:8px}';
    document.head.appendChild(css);
    var P = document.createElement('div'); P.id = 'tune-panel';
    var defs = [
      ['scrub',      'Overall speed (higher = slower playout)', 1, 14, 0.5],
      ['band',       'Scroll distance the chapter owns (%)', 50, 100, 5],
      ['dotsAt',     'Dots: when they start (later = camera flies alone longer)', 0, 13, 0.1],
      ['dotsDur',    'Dots: flight time of each dot', 0.7, 7.5, 0.1],
      ['dotsStag',   'Dots: gap between one dot and the next', 0, 0.35, 0.01],
      ['dotsTravel', 'Dots: fly-in distance from off-side', 0.05, 0.4, 0.01],
      ['chromeAt',   'Journey link: when it appears', 0, 18, 0.2],
      ['camAt',      'Map camera: start delay', 0, 40, 1],
      ['camDur',     'Map camera: flight time (0 = fill the whole entry)', 0, 60, 1],
      ['camDist',    'Map camera: how far out it starts (x rest view)', 1.2, 4, 0.05],
      ['camRot',     'Map camera: starting rotation (degrees)', 0, 15, 0.5],
      ['diveDur',    'Dot dive: flight length (x baseline)', 0.8, 2.5, 0.05],
      ['divePow',    'Dot dive: ease shape (higher = softer ends, faster middle)', 2, 6, 0.1],
      ['photoOut',   'Photo fade: when it starts (higher = earlier in the dive)', 6, 60, 1],
      ['photoLen',   'Photo fade: how long it runs', 2, 50, 1],
      ['photoCurve', 'Photo fade: shape (under 1 = front-loaded, over 1 = back-loaded)', 0.3, 3, 0.05],
      ['textLead',   'Copy: head start before landing (ms — too high risks the flash)', 0, 900, 25],
      ['textSpeed',  'Copy: entrance speed (higher = snappier)', 1, 4, 0.05],
      ['touchCoast', 'Touch flick: throw power (how far momentum projects)', 0.2, 2, 0.05],
      ['touchThrow', 'Touch flick: min speed that always advances a beat (px/s)', 80, 800, 10],
      ['noteAt',     'Precinct copy: when it performs (dots land around 7)', 0, 10, 0.1],
      ['noteDur',    'Precinct copy: performance pace (1 = the hero recipe, higher = statelier)', 0.25, 3, 0.05],
      ['dotsOut',    'Dots: exit timing (beats into the departure — low = leave early)', 0, 16, 0.2],
      ['dotsBounce', 'Dots: landing overshoot (0 = smooth glide, higher = springier)', 0, 4, 0.1],
      ['pulsePeriod', 'Dot pulse: breath cycle (seconds)', 1, 6, 0.1],
      ['pulseBreath', 'Dot pulse: breath depth (how far it swells)', 1, 1.2, 0.005],
      ['pingPhase',  'Dot ping: launch point in the breath (0 = swell start, 1 = full cycle)', 0, 1, 0.05],
      ['pingScale',  'Dot ping: reach (halo end scale)', 1.2, 6, 0.1],
      ['pingOp',     'Dot ping: strength (starting opacity)', 0, 0.8, 0.02]
    ];
    var html = '<b>MAP CHAPTER TUNING</b>';
    defs.forEach(function (d) {
      html += '<label title="' + d[1] + '">' + d[1] + '<span class="v" id="tv-' + d[0] + '">' + MAP_T[d[0]] + '</span></label>' +
        '<input type="range" data-k="' + d[0] + '" min="' + d[2] + '" max="' + d[3] + '" step="' + d[4] + '" value="' + MAP_T[d[0]] + '">';
    });
    var easeOpts = ['sine.out','power1.out','power2.out','power3.out','sine.inOut','power2.inOut','expo.out'];
    var easeSelect = function (k, label) {
      return '<label>' + label + '</label><select data-k="' + k + '">' +
        easeOpts.map(function (e) { return '<option' + (e === MAP_T[k] ? ' selected' : '') + '>' + e + '</option>'; }).join('') +
        '</select>';
    };
    html += easeSelect('camEase', 'Camera: easing curve') +
            '<textarea readonly id="tune-out"></textarea>';
    P.innerHTML = html;
    document.body.appendChild(P);
    var deb;
    function refreshOut() { document.getElementById('tune-out').value = JSON.stringify(MAP_T); }
    P.addEventListener('input', function (e) {
      var k = e.target.dataset.k; if (!k) return;
      MAP_T[k] = e.target.type === 'range' ? parseFloat(e.target.value) : e.target.value;
      var v = document.getElementById('tv-' + k); if (v) v.textContent = MAP_T[k];
      refreshOut();
      // Pulse knobs apply live (CSS vars + per-dot delays) — no timeline rebuild involved.
      if (/^(pulse|ping)/.test(k)) { if (window.__mapPulse) window.__mapPulse(); return; }
      clearTimeout(deb); deb = setTimeout(window.__mapTune.rebuild, 300);
    });
    refreshOut();
  }

  /* ---- BUILD ---- */
  function build() {
    hero();
    heroForm();
    contactForm();
    buildSectionNumbers();
    // Every content chapter (all but the hero) runs on the one reveal system.
    $('.chapter').forEach(function (ch) {
      if (ch.classList.contains('hero')) return;
      // Map chapter builds its own DOM (dots, POIs, labels) asynchronously — defer its
      // reveal setup until map.js dispatches 'map-ready' so the selectors resolve.
      if (ch.classList.contains('map-chapter')) {
        var rebuildMap = function () {
          mapTls.forEach(function (t) { if (t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
          mapTls = [];
          gsap.set($('#dots .dot .dot-reveal, #map-nav .nav-in, .precinct-note .ed-line, .precinct-note .eyebrow, .precinct-note .lede', ch), { clearProps: 'all' });
          var spec = chapterMoves(ch);
          // Full mirrored reveal — the chapter's exit is the mirror of its entrance
          // (note included, last-in-first-out).
          reveal(ch, spec.moves, spec.ticks, {
            start: 'top ' + MAP_T.band + '%', end: 'top -' + MAP_T.band + '%', scrub: MAP_T.scrub
          });
          if (reveal._last) { mapTls.push(reveal._last); reveal._last = null; }
          ScrollTrigger.refresh();
        };
        window.__mapTune = { T: MAP_T, rebuild: rebuildMap };
        // A user flight (map.js dispatches 'map-flight') completes the entry: snap any scrub
        // catch-up still easing to its target so entry moves can never write mid-dive.
        window.addEventListener('map-flight', function () {
          mapTls.forEach(function (t) {
            var tw = t.scrollTrigger && t.scrollTrigger.getTween && t.scrollTrigger.getTween();
            if (tw) tw.progress(1);
          });
        });
        var setup = function () {
          rebuildMap();
          if (/[?&]tune/.test(location.search)) buildTunePanel();
        };
        if (window.__mapReady) setup();
        else window.addEventListener('map-ready', setup, { once: true });
        return;
      }
      var spec = chapterMoves(ch);
      reveal(ch, spec.moves, spec.ticks);
    });
    chapterNav();
    touchNav();
    chapterVideos();
    ScrollTrigger.refresh();
    edBuilt = true;
    lastBuildW = window.innerWidth;
  }

  /* ===================== RESIZE RE-SPLIT =====================
     SplitText measures lines at build; a resized window keeps those stale breaks (extra
     lines, or lines that overflow). On a real desktop WIDTH change, revert every
     chapter's splits and rebuild its reveal so the lines re-measure. Height-only
     changes (the mobile URL bar) never qualify. The hero entrance has already played
     and is left alone. */
  var edBuilt = false, lastBuildW = 0, resizeDeb;
  function rebuildChapterReveals() {
    lastBuildW = window.innerWidth;
    $('.chapter').forEach(function (ch) {
      if (ch.classList.contains('hero')) return;
      $('h1,h2,h3', ch).forEach(function (h) {
        if (h._edSplit) { try { h._edSplit.revert(); } catch (e) {} h._edSplit = null; h._edLines = null; }
      });
      if (ch.classList.contains('map-chapter')) return;   // its own rebuild below re-splits
      ScrollTrigger.getAll().forEach(function (t) {
        if (t.trigger === ch) { if (t.animation) t.animation.kill(); t.kill(); }
      });
      gsap.set($('.sn-num, .sn-text, .eyebrow, .figs, .intro-figures, .hero-form-card, p, .tags, dl, .collection-copy > span, .amenity-columns, .place-copy ul', ch), { clearProps: 'all' });
      var spec = chapterMoves(ch);
      reveal(ch, spec.moves, spec.ticks);
    });
    if (window.__mapTune && window.__mapTune.rebuild && window.__mapReady) window.__mapTune.rebuild();
    else ScrollTrigger.refresh();
  }
  window.addEventListener('resize', function () {
    if (!edBuilt) return;
    clearTimeout(resizeDeb);
    resizeDeb = setTimeout(function () {
      if (Math.abs(window.innerWidth - lastBuildW) < 24) return;
      rebuildChapterReveals();
    }, 350);
  });

  // Curtain first (shows immediately, tracks real load); the rest builds behind it.
  preloader();
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve())
    .then(function () {
      // rAF is the right moment when the tab is visible, but it never fires in a hidden
      // tab — a visitor who opens the site in a background tab would get no reveals at
      // all. The timeout fallback guarantees the build runs either way, exactly once.
      var built = false;
      function once(){ if(built) return; built = true; build(); }
      requestAnimationFrame(once);
      setTimeout(once, 1200);
    });

  window.addEventListener('load', function () {
    ScrollTrigger.refresh();
    if (!document.body.classList.contains('pl-done')) deepLinkPlace();   // still behind the curtain
  });
})();

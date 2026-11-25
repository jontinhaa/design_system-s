document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
// Only an ordinary internal click hands the resource's view to the hero. Consume the note
// before the first paint; a direct visit or reload still gets the full preloader.
let heroHandoff = false;
try {
  const note = JSON.parse(sessionStorage.getItem('sybiosme:hero-handoff') || 'null');
  sessionStorage.removeItem('sybiosme:hero-handoff');
  heroHandoff = performance.getEntriesByType('navigation')[0]?.type === 'navigate' &&
    note?.href === location.href && Date.now() - note.at >= 0 && Date.now() - note.at < 15000;
} catch {}
if (heroHandoff && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const rule = document.createElement('style');
  rule.setAttribute('data-hero-arrival', '');
  rule.textContent = '@view-transition { navigation: auto; }';
  document.head.append(rule);
}
// Arm before the first paint, only on a fresh landing document. No cookie or
// crawler-specific path: visits and reloads play it, with or without an
// anchor; history restoration and an internal hero hand-off don't.
(() => {
  if (!/^(?:\/|\/(?:fr|en|en-us|en-gb)\/?)$/.test(location.pathname)) return;
  // Start the hero's single request early and share its reusable Blob with
  // WebGL. Safari can download an as=fetch preload again when fetch consumes
  // it; a shared promise avoids that second transfer on every engine.
  window.__heroSheet = fetch('/media/hero-sphere.avif', { priority: 'high' })
    .then(response => response.ok ? response.blob() : null)
    .catch(() => null);
  const root = document.documentElement;
  // The landing scrolls inside its own box (`state/scroller.ts`); before the
  // body is parsed, or on a page without one, the window is the scroller.
  const scroller = () => document.querySelector('[data-scroller]');
  const scrollTopOf = () => { const s = scroller(); return s ? s.scrollTop : window.scrollY; };
  const scrollLeftOf = () => { const s = scroller(); return s ? s.scrollLeft : window.scrollX; };
  const toTop = () => { const s = scroller(); if (s) s.scrollTo({ left: 0, top: 0, behavior: 'instant' }); else window.scrollTo({ left: 0, top: 0, behavior: 'instant' }); };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  const entry = performance.getEntriesByType('navigation')[0];
  const navigation = entry?.type;
  const reload = navigation === 'reload';
  /* A DEEP LINK STILL GETS AN INTRO (2026-10-03, Adrien: « l'animation ne se
     joue pas … notamment lorsque l'url a une ancre »): the aperture alone,
     opening on the section the link names. Behind the mask the browser's own
     jump is held off (the page is still settling: the runways, the coil's
     seam) and the controller lands the page there just before it opens
     (`land`, `utils/landing-intro.ts`). */
  const anchor = location.hash;
  /* LATE IS COUNTED FROM THE RESPONSE, not from the click: the redirects
     (`sybiosme.com` → `www`, `/` → `/fr`), the DNS, TLS and the server's own
     time are not this document being slow, and on a phone network they alone
     passed 1.2 s often enough to drop the intro « parfois » (2026-10-03). What
     is still skipped is a document whose own bytes and head took that long. */
  const late = performance.now() - (entry?.responseStart > 0 ? entry.responseStart : 0) > 1200;
  /* A TAB OPENED BEHIND ANOTHER waits for its first sight instead of losing the
     intro (2026-10-03): the mask stands, its clocks and its CSS escape hatch
     are held (`data-intro-hold`) and start on the first `visible`. */
  let waiting = document.hidden;
  // A locale chosen on the landing: the previous document faded to ink and
  // left a note (`utils/locale-transition.ts`). This one opens on that ink,
  // with the short opening, however long its own load took.
  let handoff = false;
  try {
    const at = Number(sessionStorage.getItem('sybiosme:locale-handoff'));
    sessionStorage.removeItem('sybiosme:locale-handoff');
    handoff = navigation !== 'back_forward' && at > 0 && Date.now() - at < 15000;
  } catch {}
  if (heroHandoff || reduced.matches || (!reload && !handoff && late) || connection?.saveData ||
      /^(slow-)?2g$/.test(connection?.effectiveType || '') ||
      navigation === 'back_forward') return;

  let ended = false;
  const events = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll', 'resize', 'pagehide'];
  const finish = (reason = 'complete') => {
    if (ended) return;
    ended = true;
    clearTimeout(deadline);
    root.removeAttribute('data-landing-intro');
    root.removeAttribute('data-intro-hold');
    root.style.removeProperty('background-color');
    events.forEach(type => window.removeEventListener(type, interrupt, true));
    document.removeEventListener('visibilitychange', away);
    reduced.removeEventListener('change', interrupt);
    // An intro over before its reveal (a key, a timeout) still leaves the reader where
    // the link points: by the links' own law once the page has hydrated (`land`),
    // the plain jump the browser would have made before that.
    const intro = window.__landingIntro;
    if (anchor && reason !== 'navigation' && !intro?.landed) {
      try {
        if (intro?.land) intro.land();
        else document.getElementById(decodeURIComponent(anchor.slice(1)))?.scrollIntoView({ block: 'start', behavior: 'instant' });
      } catch {}
    }
    performance.mark('sybiosme:intro-end', { detail: reason });
    window.dispatchEvent(new CustomEvent('sybiosme:intro-end', { detail: reason }));
    delete window.__landingIntro;
  };
  const width = window.innerWidth;
  const interrupt = (event) => {
    // Native/SPA scroll restoration is not user input. A reload, a locale
    // hand-off or an anchor is held at the top behind the mask: the browser's
    // own jump to the fragment is undone (the controller lands on it);
    // a fresh visit only ends on a scroll that actually left the hero. Real
    // wheel, touch, pointer and keyboard input still ends the intro before
    // its scroll takes place.
    if (event.type === 'scroll') {
      // Landed on the anchor (`land`): the page stands where it was put.
      if (window.__landingIntro?.landed) return;
      if (reload || handoff || anchor) {
        if (scrollLeftOf() || scrollTopOf()) toTop();
      } else if (scrollLeftOf() > 2 || scrollTopOf() > 2) finish('interaction');
      return;
    }
    // A phone's toolbar, or the translation bar an in-app browser adds for a
    // page in another language, slides in and out: a height-only resize, and
    // the same screen. Only a new width (a rotation) is a new layout.
    if (event.type === 'resize' && window.innerWidth === width) return;
    finish('interaction');
  };
  let deadline;
  let show = () => {};
  const shown = waiting ? new Promise(resolve => { show = resolve; }) : Promise.resolve();
  // Independent of hydration: even a broken application module cannot strand
  // someone behind the curtain. CSS has an additional visual escape hatch.
  // Separate the resource budget (3.5 s in the controller) from the reference's
  // complete 3.3 s choreography. Never truncate an entrance already playing.
  const arm = () => { deadline = setTimeout(() => finish('deadline'), 7500); };
  const away = () => {
    if (!document.hidden && waiting) {
      waiting = false;
      root.removeAttribute('data-intro-hold');
      window.__landingIntro.started = performance.now();
      arm();
      show();
    } else if (document.hidden && !waiting) finish('hidden');
  };
  window.__landingIntro = { started: performance.now(), finish, quick: handoff, anchor, shown };
  if (waiting) root.setAttribute('data-intro-hold', '');
  root.setAttribute('data-landing-intro', 'pending');
  // The hand-off's ink goes on without a gap: the root is ink until the mask
  // is up, whatever paints first.
  if (handoff) root.style.setProperty('background-color', '#111111');
  performance.mark('sybiosme:intro-start', { detail: handoff ? 'locale' : 'visit' });
  if (!waiting) arm();
  events.forEach(type => window.addEventListener(type, interrupt, { capture: true, passive: true }));
  if (reload || handoff || anchor) toTop();
  document.addEventListener('visibilitychange', away);
  reduced.addEventListener('change', interrupt);
})();
/* THE PAGE TRANSITION ACROSS A FULL LOAD (2026-10-05). The resources are pages to read, served
   without JavaScript: the landing sends a reader there through the browser and hands that load
   its own transition (`handOver`, utils/page-transition.ts), which a page to read accepts
   (reading.css). Here, before the first paint, it plays as between the landing's pages: the same
   choreography (page-transitions.css, forward), given up at the first gesture. Only that hand-off
   carries one: a document hands its view over only at an internal click
   (`data-view-handover`), including a resource's return to the hero; never through history. */
addEventListener('pageswap', (event) => {
  if (event.viewTransition) {
    // Skipping a native transition rejects `ready` with AbortError. A language change or
    // history navigation may skip it intentionally; consume that lifecycle rejection.
    event.viewTransition.ready.catch(() => {});
    if (!document.querySelector('style[data-view-handover]')) event.viewTransition.skipTransition();
  }
});
addEventListener('pagereveal', (event) => {
  const transition = event.viewTransition;
  const arrivalRule = document.querySelector('style[data-hero-arrival]');
  if (!transition) { arrivalRule?.remove(); return; }
  transition.ready.catch(() => {});
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const kind = window.navigation?.activation?.navigationType;
  if (reduced.matches || (kind && kind !== 'push' && kind !== 'replace')) {
    arrivalRule?.remove();
    transition.skipTransition();
    return;
  }
  root.dataset.pageTransition = heroHandoff ? 'backward' : 'forward';
  // A phone's toolbar sliding in or out is a height-only resize, the same screen (as for the intro).
  const width = window.innerWidth;
  const events = ['wheel', 'touchstart', 'keydown', 'resize', 'pagehide'];
  const skip = (input) => {
    if (input.type === 'resize' && window.innerWidth === width) return;
    transition.skipTransition();
  };
  events.forEach(type => window.addEventListener(type, skip, { passive: true }));
  reduced.addEventListener('change', skip);
  transition.finished.catch(() => {}).finally(() => {
    arrivalRule?.remove();
    events.forEach(type => window.removeEventListener(type, skip));
    reduced.removeEventListener('change', skip);
    delete root.dataset.pageTransition;
  });
});

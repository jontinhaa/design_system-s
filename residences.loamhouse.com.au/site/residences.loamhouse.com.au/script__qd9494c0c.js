/* Loam House — page behaviour: header state, mobile menu, the lead-pipeline seam,
   .reveal fallback (no-GSAP), hero video intro→ambient, finishes tag swap. */

const header = document.querySelector('[data-header]');
const mobile = document.querySelector('[data-mobile-menu]');
const menuButton = document.querySelector('[data-menu-button]');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24), { passive: true });

function setMenu(o) {
  mobile.classList.toggle('open', o);
  menuButton.classList.toggle('is-open', o);
  menuButton.setAttribute('aria-expanded', o);
}
menuButton.addEventListener('click', () => setMenu(!mobile.classList.contains('open')));
mobile.querySelectorAll('a,[data-menu-close],[data-open-calendly]').forEach(el => el.addEventListener('click', () => setMenu(false)));

/* ── Lead pipeline: forms → POST /api/lead (Cloudflare Pages Function) → Property Shell.
   Attribution is captured once at load; submitLead is the ONE seam every form uses.
   The API key lives server-side only — nothing here ever sees it. */
const attribution = (() => {
  const p = new URLSearchParams(location.search);
  return {
    utm_source: p.get('utm_source') || '',
    utm_medium: p.get('utm_medium') || '',
    utm_campaign: p.get('utm_campaign') || '',
    utm_content: p.get('utm_content') || '',   // the ad itself — shown to sales in the lead note
    utm_term: p.get('utm_term') || '',
    referrer: document.referrer || '',
  };
})();

async function submitLead(fields) {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(Object.assign({}, attribution, fields)),
  });
  if (!res.ok) throw new Error('lead delivery failed (' + res.status + ')');
  const out = await res.json();
  // Conversion event — ONLY after /api/lead confirms delivery (a failed submission
  // must never count). GTM maps lead_brochure/lead_callback/lead_contact to the
  // Pixel Lead, Google Ads Submit Lead Form and GA4 generate_lead tags (§3).
  track('lead_' + fields.intent, { intent: fields.intent });
  return out;
}
window.submitLead = submitLead;   // the new form's choreography (editorial.js) calls this

/* ── Tracking seam: every conversion goes through here as a dataLayer push.
   UTMs ride along so GA4 sees the same attribution Property Shell stores. */
function track(event, data) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event }, attribution, data || {}));
  } catch (_) {}
}

/* Calendly popup: a completed booking posts calendly.event_scheduled via postMessage.
   This is the ad-attribution half (§4.3) — the CRM half is the server-side webhook. */
window.addEventListener('message', function (e) {
  if (typeof e.origin === 'string' && /https:\/\/([a-z0-9-]+\.)?calendly\.com$/.test(e.origin)
      && e.data && e.data.event === 'calendly.event_scheduled') {
    track('book_appointment', {});
  }
});

/* Both forms — the hero ink card and the contact chapter — are owned by editorial.js
   (choreographed submit + success performances); they call window.submitLead directly. */

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Hero video: intro plays once, ambient loop takes over on its last frames */
(function () {
  var intro = document.querySelector('[data-hero-intro]');
  var amb = document.querySelector('[data-hero-ambient]');
  if (!intro || !amb) return;
  var swapped = false;
  intro.addEventListener('playing', function () { amb.load(); }, { once: true });
  function swap() {
    if (swapped) return;
    swapped = true;
    var p = amb.play();
    (p && p.then ? p : Promise.resolve()).then(function () {
      intro.closest('.hero').classList.add('ambient-on');
    }).catch(function () {});
  }
  // frames match exactly — hard cut at the end, no fade
  intro.addEventListener('timeupdate', function () {
    if (intro.duration && intro.duration - intro.currentTime < 0.25 && !swapped) { amb.play().catch(function () {}); }
  });
  intro.addEventListener('ended', swap);
  // Mobile: a dedicated 9:16 clip (hero-media-mobile) autoplays on its own —
  // stop the desktop intro/ambient so we don't load or play them.
  if (window.matchMedia('(max-width:800px)').matches) {
    swapped = true;
    intro.pause();
    intro.removeAttribute('autoplay');
  }
})();

/* Preloader failsafe: the engine (editorial.js) owns the curtain and lifts it.
   If it never initialises (no GSAP), don't leave the visitor behind the curtain. */
window.addEventListener('load', function () {
  setTimeout(function () {
    if (!document.documentElement.classList.contains('gsap-on')) {
      document.body.classList.remove('pl-active');
      document.body.classList.add('pl-done');
    }
  }, 400);
});


// Finishes chapter: the spec tags swap the frame's background with a cross-dissolve
// (two-layer ping-pong so successive clicks never flash).
(() => {
  const sec = document.getElementById('finishes');
  if (!sec) return;
  const base = sec.querySelector('img:not(.swap)'), swap = sec.querySelector('img.swap');
  if (!base || !swap) return;
  // Mobile serves the optimised crops (assets/mobile/): the base frame and every tag swap
  // pick their -m variant; desktop keeps the full-size originals. (No srcset here: the
  // swaps set .src, and a srcset would silently override that.)
  const mobile = window.matchMedia('(max-width:800px)').matches;
  if (mobile && base.dataset.srcM) base.src = base.dataset.srcM;
  let current = base.getAttribute('src');
  sec.querySelectorAll('.tags span[data-img]').forEach(tag => {
    tag.addEventListener('click', () => {
      const src = (mobile && tag.dataset.imgM) || tag.dataset.img;
      if (!src || src === current) return;
      const pos = tag.dataset.pos || 'center';
      const pre = new Image(); pre.src = src;
      const apply = () => {
        if (swap.classList.contains('on')) {
          base.src = src; base.style.setProperty('--mob-pos', pos);
          swap.classList.remove('on');
        } else {
          swap.src = src; swap.style.setProperty('--mob-pos', pos);
          swap.classList.add('on');
        }
        current = src;
      };
      pre.onload = apply;
    });
  });
})();

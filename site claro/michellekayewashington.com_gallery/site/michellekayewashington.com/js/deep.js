/* Michelle Kaye — "Deep" redesign behaviour: the site as a quiet exhibition.
 * Shares the Butter router and shell; adds a walking transition, the entrance compositions,
 * a wall hung at true relative scale with a gallery light and a minimap, and a viewing room
 * where the pointer travels across the magnified texture (exact mapping, EFF-017 / L-PHE-02).
 *
 * Butter notes kept below for the shared parts.
 *
 * Research sources (website-design-research):
 *   Router ........ roller coaster logic (I-19, EFF-050): prefetch on intent, move on the click,
 *                   reveal the next page from the click point while the old one is still visible.
 *   Gallery ....... Lenis on one clock that stops when you stop (EFF-052); live wayfinding (I-05).
 *   Works ......... the hovered work goes firm and faces you (R-12, R-2); swirling warms its mat
 *                   toward the painting's own colour (R-16, EFF-048), so the effect celebrates the art.
 *   Viewer ........ the collection stays beneath the detail view (L-TUU-03); arrows, keys, swipe.
 * Everything degrades to plain links and native scroll; reduced motion removes all movement.
 */
(() => {
  "use strict";

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const root = document.documentElement;
  const PAGES = { index: ["/", "Michelle"], gallery: ["/gallery", "Gallery"], connect: ["/connect", "Socials"] };
  const ORDER = ["index", "gallery", "connect"];
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // How the visitor last moved (TKT-026): after a finger or a mouse, no focus outline is drawn (the
  // stylesheet keys off data-input), so nothing is left outlined when focus moves into the viewer or a
  // note and back. Focus still moves, for screen readers; the keyboard brings the outlines back.
  const setInput = (kind) => { if (root.dataset.input !== kind) root.dataset.input = kind; };
  addEventListener("pointerdown", () => setInput("pointer"), { capture: true, passive: true });
  addEventListener("keydown", (e) => { if (!e.metaKey && !e.ctrlKey && !e.altKey) setInput("key"); }, true);

  // ---------------------------------------------------------------- visits (TKT-020)
  // What visitors do, counted in PostHog once a project key is set in build-pages.py (it arrives as
  // the mk-analytics meta tag): pages and how people moved between them, rooms reached, the end of the
  // gallery, works opened, time with each work on the wall and in the viewer, Zoom to Inspect and for
  // how long, notes opened, and which leave-the-site notes were confirmed. No cookies: an anonymous id
  // in this browser's storage. Only on the real domain, never when the browser asks not to be tracked,
  // and the counting script arrives only once the page is idle. ?analytics=debug logs events here.
  const track = (() => {
    const meta = document.querySelector('meta[name="mk-analytics"]');
    const debug = /[?&]analytics=debug\b/.test(location.search);
    const live = !!meta?.content && /(^|\.)michellekayewashington\.com$/.test(location.hostname) &&
      !navigator.globalPrivacyControl && navigator.doNotTrack !== "1";
    const queue = [];
    let ph = null;
    if (live) {
      const load = () => import("https://cdn.jsdelivr.net/npm/posthog-js@1.434.15/dist/module.js").then(({ default: posthog }) => {
        posthog.init(meta.content, {
          api_host: meta.dataset.host || "https://us.i.posthog.com", persistence: "localStorage",
          capture_pageview: false, capture_pageleave: false, autocapture: false, disable_session_recording: true,
          disable_surveys: true, respect_dnt: true, person_profiles: "identified_only",
        });
        ph = posthog;
        queue.splice(0).forEach(([event, props, timestamp]) => ph.capture(event, props, { timestamp }));
      }).catch(() => {});
      (window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(load, { timeout: 4000 });
    }
    return (event, props = {}, beacon = false) => {
      if (debug) console.info("[visit]", event, props);
      if (!live) return;
      if (ph) ph.capture(event, props, beacon ? { transport: "sendBeacon" } : undefined);
      else queue.push([event, props, new Date()]);
    };
  })();
  const pageview = (key, from, via) => track("$pageview", { $current_url: location.href, $pathname: location.pathname, page: key, from: from || null, via: via || "arrival" });

  // ---------------------------------------------------------------- router
  const cache = new Map();
  let busy = false;
  let pageCleanup = () => {};

  const pageKey = (href) => {
    const path = new URL(href, location.href).pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
    return ORDER.find((k) => PAGES[k][0] === (path === "" ? "/" : path));
  };

  const fetchPage = (key) => {
    if (!cache.has(key)) {
      cache.set(key, fetch(PAGES[key][0], { credentials: "same-origin" }).then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      }).catch((err) => { cache.delete(key); throw err; }));
    }
    return cache.get(key);
  };

  const prefetchOn = (el) => {
    const key = pageKey(el.href);
    if (key && key !== root.dataset.page) fetchPage(key).catch(() => {});
  };

  document.addEventListener("pointerover", (e) => { const a = e.target.closest?.("a[data-nav]"); if (a) prefetchOn(a); });
  document.addEventListener("focusin", (e) => { const a = e.target.closest?.("a[data-nav]"); if (a) prefetchOn(a); });

  document.addEventListener("click", (e) => {
    const a = e.target.closest?.("a[data-nav]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const key = pageKey(a.href);
    if (!key) return;
    e.preventDefault();
    if (key === root.dataset.page) { closeAll(); return; }
    const via = a.matches(".cta") ? "enter-the-gallery" : a.closest(".pager") ? "page-arrow" : a.closest(".nav-index") ? "menu"
      : a.matches(".wordmark") ? "wordmark" : a.closest(".gallery-end") ? "end-of-gallery" : a.closest(".connect-end") ? "end-of-socials"
      : a.closest("[data-modal]") ? "note" : "link";
    go(key, e.clientX || innerWidth / 2, e.clientY || innerHeight / 2, true, via);
  });

  addEventListener("popstate", () => {
    const key = pageKey(location.href);
    if (key && key !== root.dataset.page) go(key, innerWidth / 2, innerHeight / 2, false, "back-forward");
  });

  async function go(key, x, y, push, via = "link") {
    if (busy) return;
    busy = true;
    const from = root.dataset.page;
    track("page_walk", { from, to: key, via });
    closeAll();
    const stage = document.getElementById("stage");

    // Roller coaster: the current page starts moving on the click, before anything has loaded.
    // Its words leave quickly, so they never sit beside or over the next page's words.
    const crawl = reduced ? null : stage.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );

    let html;
    try { html = await fetchPage(key); } catch { location.href = PAGES[key][0]; return; }
    const doc = new DOMParser().parseFromString(html, "text/html");
    const next = doc.getElementById("stage");
    if (!next) { location.href = PAGES[key][0]; return; }

    pageCleanup();
    if (push) history.pushState({ key }, "", PAGES[key][0]);
    document.title = doc.title;

    // The next page is placed over the old one and revealed from the click point.
    const layer = document.createElement("div");
    layer.className = "transit-next";
    layer.append(document.importNode(next, true));
    const extra = doc.querySelector("[data-viewer]");
    root.classList.add("is-transit");
    document.body.append(layer);

    if (reduced) {
      await layer.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, fill: "forwards" }).finished;
    } else {
      // Walk to the next room: the old one slides away left, the new one is uncovered from the right.
      const dir = ORDER.indexOf(key) >= ORDER.indexOf(root.dataset.page) ? 1 : -1;
      stage.animate([{ transform: "translateX(0)" }, { transform: `translateX(${-6 * dir}vw)` }], { duration: 950, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" });
      await layer.animate(
        [{ clipPath: dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", transform: `translateX(${4 * dir}vw)` }, { clipPath: "inset(0 0 0 0)", transform: "translateX(0)" }],
        { duration: 950, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" }
      ).finished;
    }

    // Swap for real, then let go. The page already uncovered in the layer moves into place as it is:
    // a fresh copy would have to load and paint its pictures again, so they blinked out for a moment
    // (Michael, 2026-10-12: the portrait and the Socials squares on phones).
    const fresh = layer.querySelector("#stage") || document.importNode(next, true);
    stage.replaceWith(fresh);
    document.querySelector("[data-viewer]")?.remove();
    if (extra) fresh.after(document.importNode(extra, true));
    crawl?.cancel();
    root.dataset.page = key;
    root.dataset.ground = "paper";
    scrollTo(0, 0);
    layer.remove();
    root.classList.remove("is-transit");
    syncChrome(key);
    initPage(key);
    pageview(key, from, via);
    if (!reduced && key === "gallery") {
      // The room arrives first; the works, the bench and the map appear once they are hung.
      fresh.querySelectorAll(".wall > *, .minimap, .where").forEach((el) =>
        el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 520, easing: "ease-out" }));
    }
    fresh.focus?.({ preventScroll: true });
    busy = false;
  }

  function syncChrome(key) {
    document.querySelectorAll(".nav-index a").forEach((a) => {
      if (a.dataset.nav === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    const i = ORDER.indexOf(key);
    const prev = ORDER[(i + 2) % 3];
    const nxt = ORDER[(i + 1) % 3];
    const pager = document.querySelector("[data-pager]");
    if (!pager) return;
    pager.querySelector("[data-pager-num]").textContent = `0${i + 1}`;
    pager.querySelector("[data-pager-name]").textContent = PAGES[key][1];
    const [pa, na] = pager.querySelectorAll(".pager-arrow");
    pa.href = PAGES[prev][0]; pa.dataset.nav = prev; pa.setAttribute("aria-label", `Previous page: ${PAGES[prev][1]}`);
    na.href = PAGES[nxt][0]; na.dataset.nav = nxt; na.setAttribute("aria-label", `Next page: ${PAGES[nxt][1]}`);
  }

  // ---------------------------------------------------------------- shell: menu, news, modals
  let lastFocus = null;
  // News unfolds and folds smoothly (the items around it glide to make room); closed, its links are
  // out of reach of the keyboard and screen readers.
  function setNews(open) {
    document.querySelectorAll("[data-news]").forEach((n) => {
      if (n.classList.contains("is-open") === open) return;
      n.classList.toggle("is-open", open);
      n.querySelector("[data-news-toggle]").setAttribute("aria-expanded", String(open));
      n.querySelector(".news-links").inert = !open;
    });
  }
  function closeAll() {
    setNews(false);
    document.querySelectorAll("[data-modal]:not([hidden])").forEach((m) => { m.hidden = true; });
    const menu = document.getElementById("site-nav");
    menu?.classList.remove("is-open");
    root.classList.remove("is-menu");
    document.querySelector("[data-menu-button]")?.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", (e) => {
    const t = e.target;
    const open = t.closest?.("[data-open]");
    if (open) {
      const m = document.getElementById(open.dataset.open);
      if (m) { lastFocus = open; closeAll(); m.hidden = false; m.querySelector("a, button:not(.modal-backdrop)")?.focus(); track("note_open", { note: open.dataset.open, page: root.dataset.page }); }
      return;
    }
    if (t.closest?.("[data-close]")) { closeAll(); lastFocus?.focus(); return; }
    const mb = t.closest?.("[data-menu-button]");
    if (mb) {
      const nav = document.getElementById("site-nav");
      const isOpen = nav.classList.toggle("is-open");
      mb.setAttribute("aria-expanded", String(isOpen));
      root.classList.toggle("is-menu", isOpen);
      if (isOpen) menuFoot();
      return;
    }
    const news = t.closest?.("[data-news-toggle]");
    if (news) {
      const opening = !news.closest("[data-news]").classList.contains("is-open");
      setNews(opening);
      if (opening) track("note_open", { note: "news", page: root.dataset.page });
    }
    else if (!t.closest?.("[data-news]")) setNews(false);   // a click anywhere else folds the news away
  });

  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.querySelector("[data-news].is-open")) setNews(false);
    if (e.key === "Escape" && document.querySelector("[data-modal]:not([hidden])")) {
      e.stopImmediatePropagation();                          // Escape closes the note only, not the viewer behind it
      closeAll(); lastFocus?.focus();
    }
  });

  // Leaving the site asks first, on every screen (Michael, 2026-10-11). Each destination has its own
  // note: Instagram, the shop ("Available" on a label or in the viewer, and the Shopify buttons), and
  // each news story. The note's own link carries on and closes the note.
  const leaving = (a) => {
    let u; try { u = new URL(a.href, location.href); } catch { return null; }
    if (u.origin === location.origin) return null;
    const host = u.hostname.replace(/^www\./, "");
    if (a.matches("a.work-buy, [data-viewer-buy] a")) return ["Off to the shop", "You are leaving this site for Michelle's Shopify store, to see this work there.", "Continue to the shop"];
    if (host.endsWith("instagram.com")) return ["Off to Instagram", "You are leaving this site for Michelle's Instagram, @Mkwashingtonart.", "Go to Instagram"];
    if (host.endsWith("myshopify.com")) return ["Off to the shop", "You are leaving this site for Michelle's Shopify store, to get in touch with her there.", "Continue to the shop"];
    if (host.endsWith("palmettolifesc.com")) return ["Off to Palmetto Life", "You are leaving this site to watch the Drummond Studio Gallery video on Palmetto Life.", "Continue to Palmetto Life"];
    if (host.endsWith("charlestoncitypaper.com")) return ["Off to the City Paper", "You are leaving this site to read the story in the Charleston City Paper.", "Continue to the City Paper"];
    if (host.endsWith("publitas.com")) return ["Off to Charleston Magazine", "You are leaving this site to read Charleston Magazine's May 2026 issue, on Publitas.", "Continue to the magazine"];
    if (host.endsWith("roqpointdesigns.com")) return ["Off to RoqPoint", "You are leaving this site for RoqPoint Design Studios, who designed it.", "Continue to RoqPoint"];
    return ["Leaving this site", `You are leaving this site for ${host}.`, "Continue"];
  };
  document.addEventListener("click", (e) => {
    const goOn = e.target.closest?.("[data-leave-go]");
    if (goOn) {
      const d = goOn.closest("[data-modal]")?.dataset || {};
      track("outbound_confirm", { kind: d.kind, destination: d.destination, place: d.place, work: d.fromWork || null, url: goOn.href, page: root.dataset.page }, true);
      setTimeout(closeAll, 0); return;
    }
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    const a = e.target.closest?.("a[href]");
    const words = a && leaving(a);
    const m = document.getElementById("leave");
    if (!words || !m) return;
    e.preventDefault();
    const [title, text, go] = words, link = m.querySelector("[data-leave-go]");
    m.querySelector("[data-leave-title]").textContent = title;
    m.querySelector("[data-leave-text]").textContent = text;
    link.textContent = go; link.href = a.href;
    const host = new URL(a.href).hostname.replace(/^www\./, "");
    const kind = a.matches("a.work-buy, [data-viewer-buy] a") || host.endsWith("myshopify.com") ? "shop"
      : host.endsWith("instagram.com") ? "instagram" : /palmettolifesc|charlestoncitypaper|publitas/.test(host) ? "news" : "other";
    const place = a.closest(".work-label") ? "wall-label" : a.closest("[data-viewer]") ? "viewer" : a.closest("#contact") ? "contact-note"
      : a.closest(".news-links") ? "news-menu" : a.closest(".tiles") ? "instagram-tile" : a.closest(".connect") ? "socials" : a.closest(".gallery-end") ? "end-of-gallery" : "page";
    const work = a.closest("[data-work]")?.dataset.title || (a.closest("[data-viewer]") ? document.querySelector("[data-viewer-title]")?.textContent : "") || "";
    Object.assign(m.dataset, { kind, destination: title, place, fromWork: work });
    track("outbound_prompt", { kind, destination: title, place, work: work || null, url: a.href, page: root.dataset.page });
    closeAll(); lastFocus = a; m.hidden = false;
    link.focus();
  });

  // The desktop foot line (Michael, 2026-10-14): the page arrows (and, in the gallery, the map and the
  // room's name) share one centre line whose bottom is level with the bottom of the letters of "Contact"
  // at the foot of the menu column. Measured from the letters, on each screen.
  const footPen = document.createElement("canvas").getContext("2d");
  const footLine = () => {
    const contact = document.querySelector(".site-nav .nav-secondary > :last-child");
    const bar = matchMedia("(max-width: 899px), (max-width: 999px) and (max-height: 520px) and (orientation: landscape)").matches;
    const g = document.createRange(); if (contact) g.selectNodeContents(contact);
    const q = contact && !bar ? [...g.getClientRects()].filter((r) => r.width).pop() : null;
    if (!q) { root.style.removeProperty("--foot-line"); root.style.removeProperty("--foot-side"); return; }
    const cs = getComputedStyle(contact);
    footPen.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = footPen.measureText(contact.textContent.trim());
    root.style.setProperty("--foot-line", `${Math.round(innerHeight - (q.bottom - m.fontBoundingBoxDescent))}px`);
    // ...and the arrows keep the same margin to the right edge as the "C" of Contact keeps to the left.
    root.style.setProperty("--foot-side", `${Math.round(q.left - m.actualBoundingBoxLeft)}px`);
  };
  // The open menu's foot (TKT-044, Michael 2026-10-14): on phones and tablets the bottom of the letters of
  // "Contact" sits level with the bottom of the page arrows' circles. Measured as the menu opens, because the
  // arrows sit at different heights on different pages and screens; the panel's own slide is subtracted.
  const menuFoot = () => {
    const nav = document.getElementById("site-nav"), sec = nav?.querySelector(".nav-secondary");
    const contact = sec?.lastElementChild, arrow = document.querySelector("[data-pager] .pager-arrow");
    if (!sec) return;
    sec.style.marginBottom = "";
    const dropdown = matchMedia("(max-width: 899px)").matches && !matchMedia("(max-height: 520px) and (orientation: landscape)").matches;
    if (!dropdown || !contact || !arrow) return;
    const g = document.createRange(); g.selectNodeContents(contact);
    const q = [...g.getClientRects()].filter((r) => r.width).pop();
    if (!q) return;
    const cs = getComputedStyle(contact);
    footPen.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const letters = q.bottom - nav.getBoundingClientRect().top - footPen.measureText(contact.textContent.trim()).fontBoundingBoxDescent;
    sec.style.marginBottom = `${Math.round((letters - arrow.getBoundingClientRect().bottom) * 10) / 10}px`;
  };
  addEventListener("resize", () => { if (document.getElementById("site-nav")?.classList.contains("is-open")) menuFoot(); });
  footLine();
  document.fonts?.ready.then(footLine);
  addEventListener("resize", footLine);

  // ---------------------------------------------------------------- pages
  // A page is marked ready once its script has set it up. If setting it up fails, the page loads again in
  // full, once (the safety net in each page's head decides; TKT-040). Nothing watches beyond that.
  function initPage(key) {
    delete root.dataset.ready;
    try {
      pageCleanup = ({ index: initHome, gallery: initGallery, connect: () => charger("connect") }[key] || (() => () => {}))() || (() => {});
    } catch (err) {
      pageCleanup = () => {};
      console.error(err);
      (window.mkRetry || (() => location.reload()))();
      return;
    }
    root.dataset.ready = key;
    try { sessionStorage.removeItem("mk-retry"); } catch { /* storage off: nothing to clear */ }
  }

  // Home: a little depth in the portrait, steered by the pointer (R-2), nothing more. And when someone
  // keeps scrolling a page that has nowhere further to go, "Enter the Gallery" fills up and, at the
  // brim, carries them in (the push-through below; it took over from the 2026-10-11 pulse).
  function initHome() {
    const offPulse = charger("index");
    const fig = document.querySelector("[data-depth]");
    if (!fig || reduced || !finePointer) return offPulse;
    const layers = [...fig.querySelectorAll("[data-depth-layer]")];
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const move = (e) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; };
    const tick = () => {
      cx = lerp(cx, tx, 0.06); cy = lerp(cy, ty, 0.06);
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depthLayer);
        l.style.transform = `translate3d(${(-cx * 14 * d).toFixed(2)}px, ${(-cy * 10 * d).toFixed(2)}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };
    addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); offPulse(); };
  }

  // Push through (TKT-019, Michael 2026-10-12): where a page has nowhere further to go, keep going and
  // the way on fills up. The button swells as a rose tint sweeps through it, the → page arrow's ring
  // fills, a hairline grows along the foot of the screen, and a line of words says what is happening.
  // At the brim it bursts and the walk to the next page begins; let go, and it all drains away. It
  // takes a deliberate push: enough travel (two good trackpad swipes, a few turns of the wheel, two
  // swipes on a phone, four presses of ↓ or →) and, with a mouse or trackpad, at least two thirds of a
  // second of it, so one flick never carries anyone off by accident.
  function charger(from) {
    const target = document.querySelector("#stage [data-charge-target]");
    const to = target && pageKey(target.href);
    if (!to) return () => {};
    const pager = document.querySelector("[data-pager] .pager-arrow[rel='next']");
    const se = document.scrollingElement || root;
    const atEnd = () => se.scrollTop + se.clientHeight >= se.scrollHeight - 2;
    const blocked = () => busy || root.classList.contains("is-menu") || root.classList.contains("is-transit") ||
      !!document.querySelector("[data-modal]:not([hidden]), [data-viewer]:not([hidden])");
    const touch = navigator.maxTouchPoints > 0 && !finePointer;
    // Travel for a full charge, the fastest it can fill, and how long it waits before draining. A finger
    // lifts between swipes, so a phone waits a little longer; a swipe is quick, so it may fill faster.
    // Phones (Michael, 2026-10-12): one swipe from the middle of the screen bursts it, with a little to
    // spare before the finger reaches the top (40% of the height; about 85px to spare on a 6.1" phone).
    // Desktop (Michael, 2026-10-14): "just a little" less to push, about an eighth less travel and time.
    const T = touch ? clamp(innerHeight * 0.4, 240, 460) : 1150;
    const TX = touch ? clamp(innerWidth * 1.15, 360, 640) : T;          // sideways on a phone: a narrower screen
    const RATE = touch ? 1 / 0.2 : 1 / 0.66;
    const GRACE = touch ? 420 : 240;

    target.classList.add("is-charge-target");
    const fill = document.createElement("span"); fill.className = "charge-fill"; fill.setAttribute("aria-hidden", "true");
    target.prepend(fill);
    const caption = document.createElement("p"); caption.className = "charge-caption"; caption.setAttribute("aria-hidden", "true");
    caption.textContent = `${touch ? "Keep swiping" : "Keep scrolling"} ${{ gallery: "to the Gallery", connect: "to Socials", index: "back Home" }[to]}`;
    const line = document.createElement("div"); line.className = "charge-line"; line.setAttribute("aria-hidden", "true");
    line.hidden = caption.hidden = true;
    document.body.append(caption, line);
    let ring = pager?.querySelector(".charge-ring");
    if (pager && !ring) {
      const NS = "http://www.w3.org/2000/svg";
      ring = document.createElementNS(NS, "svg"); ring.setAttribute("class", "charge-ring"); ring.setAttribute("viewBox", "0 0 50 50"); ring.setAttribute("aria-hidden", "true");
      const c = document.createElementNS(NS, "circle");
      [["cx", 25], ["cy", 25], ["r", 24], ["pathLength", 100], ["stroke-dasharray", 100], ["stroke-dashoffset", 100]].forEach(([k, v]) => c.setAttribute(k, v));
      ring.append(c); pager.append(ring);
    }

    let charge = 0, shown = 0, last = 0, raf = 0, prevT = 0, placed = false, gone = false;
    const place = () => {                                  // the words under the button (above it near the foot)
      const r = target.getBoundingClientRect(), h = caption.offsetHeight || 16, w = caption.offsetWidth || 260;
      // Under a button that starts at its column's left edge (the home's way in on a tablet or desktop), the
      // words start on that edge too; under a centred one they are centred, always inside the page margins
      // (Michael, 2026-10-14: on the tablet home they ran off the screen).
      const col = target.parentElement.getBoundingClientRect(), pad = Math.min(20, r.left);
      const flush = Math.abs(r.left - col.left) < 2 && getComputedStyle(target.parentElement).textAlign !== "center" && getComputedStyle(target).justifySelf !== "center";
      // No room below: beside a left-aligned button, on its centre line (above it, the words would crowd the
      // text over the button); otherwise above.
      const below = r.bottom + 14 + h <= innerHeight - 96, beside = !below && flush && r.right + 18 + w <= innerWidth - pad;
      caption.style.transform = "none";
      caption.style.left = `${beside ? r.right + 18 : flush ? r.left : clamp(r.left + r.width / 2 - w / 2, pad, innerWidth - pad - w)}px`;
      caption.style.top = `${below ? r.bottom + 14 : beside ? (r.top + r.bottom) / 2 - h / 2 : r.top - 14 - h}px`;
      placed = true;
    };
    const paint = (v) => {
      target.style.setProperty("--charge", v.toFixed(3));
      line.style.transform = `scaleX(${v.toFixed(3)})`;
      if (ring) { ring.style.opacity = v > 0.01 ? "1" : "0"; ring.firstChild.setAttribute("stroke-dashoffset", (100 * (1 - v)).toFixed(1)); }
      // Off the page entirely while idle: iPhone Safari takes its bottom bar's colour from anything fixed
      // against the bottom edge, so an idle hairline there turned the bar white in every room.
      line.hidden = caption.hidden = v === 0;
      root.classList.toggle("is-charging", v > 0);
      if (v > 0 && !placed) place();
      if (v === 0) placed = false;
      caption.style.opacity = clamp(v * 4 - 0.15, 0, 1).toFixed(2);
    };
    const burst = () => {
      gone = true;
      paint(1);
      const r = target.getBoundingClientRect();
      track("charge_release", { from, to });
      if (!reduced) {
        const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
        target.animate([{ transform: "scale(1.06)", boxShadow: "0 0 0 7px rgb(154 103 92 / 26%)" }, { transform: "scale(1.13)", boxShadow: "0 0 0 24px rgb(154 103 92 / 0%)" }], { duration: 340, easing: ease, fill: "forwards" });
        ring?.animate([{ transform: "rotate(-90deg) scale(1)", opacity: 1 }, { transform: "rotate(-90deg) scale(1.4)", opacity: 0 }], { duration: 420, easing: ease, fill: "forwards" });
        line.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 420, easing: ease, fill: "forwards" });
        caption.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: "forwards" });
      }
      setTimeout(() => go(to, r.left + r.width / 2, r.top + r.height / 2, true, "push-through"), reduced ? 0 : 240);
    };
    const tick = (now) => {
      raf = 0;
      const dt = prevT ? (now - prevT) / 1000 : 0; prevT = now;
      if (!gone && now - last > GRACE) charge = Math.max(0, charge - dt * 1.4);  // let go: it drains
      shown += (charge - shown) * (reduced ? 1 : 0.24);
      if (Math.abs(charge - shown) < 0.002) shown = charge;
      paint(shown);
      if (!gone && charge >= 1 && shown > 0.96) burst();
      else if (shown > 0 || charge > 0) raf = requestAnimationFrame(tick);
      else prevT = 0;
    };
    const feed = (amount) => {                             // a share of a full charge; negative drains
      if (gone || (amount > 0 && (blocked() || !atEnd()))) return;
      const now = performance.now();
      const dt = clamp((now - (last || now - 16)) / 1000, 0.016, 0.25);
      last = now;
      charge = amount > 0 ? Math.min(1, charge + Math.min(amount, dt * RATE)) : Math.max(0, charge + amount * 2);
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const wheel = (e) => {
      const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1;
      const d = (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) * k;   // down or sideways onward
      if (d) feed(d / T);
    };
    let tx = null, ty = null;
    const tStart = (e) => { const t = e.touches[0]; tx = t ? t.clientX : null; ty = t ? t.clientY : null; };
    const tMove = (e) => {
      if (tx === null || e.touches.length > 1) return;
      const t = e.touches[0], dx = tx - t.clientX, dy = ty - t.clientY;      // the finger moving up or left is onward
      tx = t.clientX; ty = t.clientY;
      if (Math.abs(dy) >= Math.abs(dx)) { if (dy) feed(dy / T); } else feed(dx / TX);
    };
    const tEnd = () => { tx = ty = null; };
    const keys = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.("input, textarea, select, [contenteditable]")) return;
      const dir = { ArrowDown: 1, PageDown: 1, " ": 1, End: 1, ArrowRight: 1, ArrowUp: -1, PageUp: -1, ArrowLeft: -1 }[e.key];
      if (dir) feed(dir * 0.26);
    };
    addEventListener("wheel", wheel, { passive: true });
    addEventListener("touchstart", tStart, { passive: true });
    addEventListener("touchmove", tMove, { passive: true });
    addEventListener("touchend", tEnd, { passive: true });
    addEventListener("keydown", keys);
    return () => {
      gone = true; cancelAnimationFrame(raf);
      removeEventListener("wheel", wheel); removeEventListener("touchstart", tStart); removeEventListener("touchmove", tMove);
      removeEventListener("touchend", tEnd); removeEventListener("keydown", keys);
      caption.remove(); line.remove();
      root.classList.remove("is-charging");
      if (ring) { ring.getAnimations().forEach((a) => a.cancel()); ring.style.opacity = "0"; ring.firstChild.setAttribute("stroke-dashoffset", "100"); }
    };
  }

  // Gallery: rooms whose walls move sideways as you scroll; works hang at true relative scale.
  function initGallery() {
    const offs = [];
    // Only the works on the walls (TKT-040: the leave-for-Instagram note once carried a data-work of its own,
    // and the gallery tried to hang it, stopping before anything was laid out).
    const works = [...document.querySelectorAll("#stage .wall [data-work]")];
    const chapters = [...document.querySelectorAll("[data-chapter]")];
    const total = works.length;
    const pad = (n) => String(n).padStart(2, "0");
    const wide = { matches: true };                    // sideways on every screen size
    const phone = matchMedia("(max-width: 599px)");     // labels sit under the works
    const narrow = matchMedia("(max-width: 899px), (max-width: 999px) and (max-height: 520px) and (orientation: landscape)");    // the menu is a bar across the top
    // A phone on its side (TKT-036): a wide screen in the tablet range that is unusually short, with or
    // without the browser's tab bar. Its own composition, not the tablet's.
    const sideways = matchMedia("(min-width: 600px) and (max-width: 999px) and (max-height: 520px) and (orientation: landscape)");
    const tablet = matchMedia("(min-width: 600px) and (max-width: 899px) and (min-height: 521px)");   // upright tablets and narrow windows
    const stacked = matchMedia("(min-width: 600px) and (max-width: 750px) and (min-height: 521px)");  // the foot stacks, as on phones

    let lenis = null;
    const touch = navigator.maxTouchPoints > 0 && !finePointer;
    if (finePointer && !touch) root.classList.add("walk-desk");   // a mouse or trackpad: invite a scroll
    if (window.Lenis && !reduced && !touch) {
      // Up/down and sideways both walk the gallery (Michael, 2026-10-11): a trackpad's sideways swipe
      // or Shift + wheel moves you along, eased exactly like the up/down scroll.
      lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, gestureOrientation: "both" });
      let raf = 0;
      const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      offs.push(() => { cancelAnimationFrame(raf); lenis.destroy(); });
    }

    // Build the rooms: a sticky pin holding the wall, the light, and the room's head.
    const rooms = chapters.map((ch) => {
      const wall = ch.querySelector("[data-wall]");
      const pin = document.createElement("div");
      pin.className = "wall-pin";
      const light = document.createElement("div");
      light.className = "light";
      wall.before(pin); pin.append(wall, light);
      return { ch, wall, pin, light, head: ch.querySelector(".chapter-head"), bench: wall.querySelector(".bench"),
        works: [...wall.querySelectorAll("[data-work]")], travel: 0, top: 0 };
    });

    const NS = "http://www.w3.org/2000/svg";
    // Each cut-out work hangs from two thin strings at 30% and 70% along its own top edge (the
    // groupings sit flush; Ague II sits on a line-drawn corner). The lines live inside the button so
    // they lift with the work.
    works.forEach((w) => {
      const btn = w.querySelector(".work-open");
      w._btn = btn; w._img = btn.querySelector("img");
      try { w._outline = JSON.parse(w.dataset.outline || "null"); } catch { w._outline = null; }
      if (w.dataset.hang === "wire") {
        const svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "strings"); svg.setAttribute("aria-hidden", "true");
        svg.append(document.createElementNS(NS, "line"), document.createElementNS(NS, "line")); btn.prepend(svg); w._strings = svg;
      } else if (w.dataset.hang === "pillar" && w._outline?.length === 6) {
        const svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "corner"); svg.setAttribute("aria-hidden", "true");
        svg.append(document.createElementNS(NS, "path")); btn.prepend(svg); w._corner = svg;
      }
    });

    // Where a line through a and b reaches height y; where two lines cross.
    const atY = (a, b, y) => [a[0] + ((y - a[1]) * (b[0] - a[0])) / ((b[1] - a[1]) || 1e-6), y];
    const cross = (p, d, q, e) => {
      const den = d[0] * e[1] - d[1] * e[0] || 1e-6, t = ((q[0] - p[0]) * e[1] - (q[1] - p[1]) * e[0]) / den;
      return [p[0] + d[0] * t, p[1] + d[1] * t];
    };
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
    const pts = (arr) => arr.map(([a, b]) => `${a.toFixed(1)} ${b.toFixed(1)}`).join(" L");

    const drawLines = (r, groundY) => {
      const wallTop = r.wall.getBoundingClientRect().top;
      r.works.forEach((w) => {
        // The painting's own proportions, not the picture's current box: on a phone a work further along
        // the walk has not loaded yet, and iPhone Safari gives an unloaded picture almost no height, which
        // drew AGUE's corner squashed at its top (Michael, 2026-10-13).
        const wd = w._btn.offsetWidth, ht = wd / (parseFloat(w.dataset.ratio) || wd / (w._img.offsetHeight || 1));
        const top = w._btn.getBoundingClientRect().top - wallTop;          // from the top of the screen
        const O = w._outline?.map(([x, y]) => [x * wd, y * ht]);
        if (w._strings) {
          // Attach where the strings meet the work's real top edge: a tilted canvas, or a round one.
          const R = wd / 2;
          const meet = (f) => {
            if (w.dataset.shape === "round") { const x = f * wd; return [x, R - Math.sqrt(Math.max(R * R - (x - R) ** 2, 0))]; }
            if (O?.length === 4) return [O[0][0] + f * (O[1][0] - O[0][0]), O[0][1] + f * (O[1][1] - O[0][1])];
            return [f * wd, 0];
          };
          const ends = [meet(0.3), meet(0.7)];
          const len = top + Math.max(ends[0][1], ends[1][1]) + 3;
          Object.assign(w._strings.style, { left: "0px", top: `${-top}px`, width: `${wd}px`, height: `${len}px` });
          w._strings.setAttribute("viewBox", `0 0 ${wd} ${len}`);
          ends.forEach(([x, y], i) => {
            const l = w._strings.children[i];
            l.setAttribute("x1", x); l.setAttribute("y1", 0); l.setAttribute("x2", x); l.setAttribute("y2", top + y + 3);
          });
        }
        if (w._corner && O) {
          // The wall corner Ague II wraps: its three edges carry on up past the top of the screen and
          // down below the painting; its foot runs parallel to the painting's own lower edges.
          const [P0, P1, P2, P3, P4, P5] = O;
          // Phone: the label sits centred under the work, like every other label, on frosted glass
          // (Michael, 2026-10-13: centred, and never over the painting). Its bottom keeps the floor line;
          // the work was sized to end above it. The corner then meets the floor just above the label, so
          // no line runs down through the words (Michael, 2026-10-13: the lines came in at odd angles).
          const lab = w.querySelector(".work-label");
          let floorY = groundY;
          if (phone.matches) {
            const rem = parseFloat(getComputedStyle(root).fontSize) || 16;
            lab.classList.add("is-glass");
            Object.assign(lab.style, { alignSelf: "center", height: "auto", marginLeft: "", marginTop: "", marginBottom: "0px" });
            const lh = lab.offsetHeight, H = parseFloat(getComputedStyle(r.wall).getPropertyValue("--label-h")) || lh;
            lab.style.marginBottom = `${Math.round(Math.max(0, H - lh))}px`;   // level with its neighbours
            floorY = lab.getBoundingClientRect().top - wallTop - 0.6 * rem;
          } else {
            lab.classList.remove("is-glass");
            Object.assign(lab.style, { alignSelf: "", height: "", marginLeft: "", marginTop: "", marginBottom: "" });
          }
          const yTop = -top - 4;
          const d4 = sub(P4, P1);
          const foot = (drop) => {
            const B4 = [P4[0] + (d4[0] / d4[1]) * drop, P4[1] + drop];
            return [B4, cross(B4, sub(P3, P4), P3, sub(P3, P2)), cross(B4, sub(P5, P4), P5, sub(P5, P0))];
          };
          // The foot's lowest point (its outer ends can sit below the corner itself) stays above floorY.
          const least = phone.matches ? 3 : ht * 0.06;                    // phone: the floor may sit just under it
          let drop = Math.max(least, floorY - top - P4[1]);
          for (let k = 0; k < 3; k++) {
            const low = Math.max(...foot(drop).map((b) => b[1])) - (floorY - top);
            if (low <= 0.5 || drop <= least) break;
            drop = Math.max(least, drop - low);
          }
          const [B4, B3, B5] = foot(drop);
          const T0 = atY(P0, P5, yTop), T1 = atY(P1, P4, yTop), T2 = atY(P2, P3, yTop);
          const bottom = Math.max(B3[1], B4[1], B5[1]) + 2;
          Object.assign(w._corner.style, { left: "0px", top: `${yTop}px`, width: `${wd}px`, height: `${bottom - yTop}px` });
          w._corner.setAttribute("viewBox", `0 ${yTop} ${wd} ${bottom - yTop}`);
          w._corner.firstChild.setAttribute("d", `M${pts([T0, B5, B4, B3, T2])} M${pts([T1, B4])}`);
        }
      });
    };

    // Sizes: true relative scale, then each room's enlargement (Michael: the paintings 1.5x, 1.3x on a
    // phone; the charcoal drawings 2.5x). The largest works ease toward the space the screen has,
    // rather than being cut off by it, and no work is wider than the screen can show with its label.
    // Works after the first few carry their addresses as data-src/data-srcset, so nothing is fetched
    // until the layout has chosen the right size (desktop) or the walk is near (touch screens).
    const arm = (im) => {
      if (!im.dataset.srcset) return;
      im.srcset = im.dataset.srcset; im.src = im.dataset.src;
      delete im.dataset.srcset; delete im.dataset.src;
    };
    const soft = (x, cap) => { const k = 0.72 * cap; return x <= k ? x : k + (cap - k) * (1 - Math.exp(-(x - k) / (cap - k))); };

    // The end of the gallery fills the screen (TKT-025, Michael 2026-10-12), so no painting or label is
    // sliced by the top edge when you arrive. Its words sit centred in the space the fixed header, meter,
    // counter and page arrows leave free on this screen: only the pieces that cross the words' column
    // count, and a column running the full height (the desktop menu) never does.
    const end = document.querySelector(".gallery-end");
    const fitEnd = (h, vw) => {
      if (!end) return;
      end.style.minHeight = `${h}px`;                     // fills the screen it was laid out for (TKT-045)
      // The end continues the last room's wall: one colour, no seam (Michael, 2026-10-13).
      const lastRoom = rooms[rooms.length - 1];
      const wall = lastRoom ? getComputedStyle(lastRoom.ch).getPropertyValue("--room-bottom").trim() : "";
      if (wall) end.style.setProperty("--end-wall", wall); else end.style.removeProperty("--end-wall");
      const half = Math.max(0, ...[...end.children].map((k) => k.getBoundingClientRect().width)) / 2 + 16;
      let top = 0, bottom = 0;
      document.querySelectorAll("[data-shell], [data-minimap], [data-where], [data-pager]").forEach((el) => {
        const b = el.getBoundingClientRect();
        if (!b.width || !b.height || b.height > h * 0.5) return;           // hidden, or a full-height column
        if (b.right < vw / 2 - half || b.left > vw / 2 + half) return;     // beside the words, not over them
        if (b.top + b.height / 2 < h / 2) top = Math.max(top, b.bottom);
        else bottom = Math.max(bottom, h - b.top);
      });
      end.style.setProperty("--end-top", `${Math.round(top)}px`);
      end.style.setProperty("--end-bottom", `${Math.round(bottom)}px`);
      // Phones (Michael, 2026-10-13): "End of the gallery" starts as far below the dark section's top as
      // the last room's labels sit above its end, so the step across the boundary reads evenly. A short
      // phone gives a little of that up, so the words still clear the map with room to breathe.
      if (phone.matches) {
        const rem = parseFloat(getComputedStyle(root).fontSize) || 16;
        const mapTop = map ? map.getBoundingClientRect().top : h - 6.5 * rem;
        const kids = [...end.children].filter((k) => getComputedStyle(k).position !== "absolute");
        const content = kids.length ? kids[kids.length - 1].getBoundingClientRect().bottom - kids[0].getBoundingClientRect().top : 0;
        const even = h - mapTop + 1.75 * rem;                             // the labels' gap above the room's end
        const room = h - bottom - 1.75 * rem - content;                   // the most that still clears the map
        end.style.setProperty("--end-lead", `${Math.round(Math.max(top + 1.25 * rem, Math.min(even, room)))}px`);
      } else end.style.removeProperty("--end-lead");
    };
    // The scrubber's invitation (TKT-045, Michael 2026-10-14): a second after the signature lights up at the
    // end of the gallery, a quiet line above the scrubber suggests exploring with it. It stays while the
    // visitor lingers near the end and leaves once they have scrolled back far enough for the last painting
    // to come into view (a good way on a phone, a little way on desktop); it comes back at the next arrival.
    const scrubHint = (() => {
      const el = document.createElement("p");
      el.className = "scrub-hint"; el.setAttribute("aria-hidden", "true");
      el.textContent = "Try Exploring with Our Scrubbing Tool Below";
      document.body.append(el);
      let timer = 0, shown = false;
      const place = () => {
        if (!map) return;
        const m = map.getBoundingClientRect(), rem = parseFloat(getComputedStyle(root).fontSize) || 16;
        el.style.left = `${Math.round((m.left + m.right) / 2)}px`;
        el.style.bottom = `${Math.round(innerHeight - m.top + 0.85 * rem)}px`;
      };
      const hide = () => { clearTimeout(timer); timer = 0; end?.classList.remove("is-hinted"); if (!shown) return; shown = false; el.classList.remove("is-on"); };
      // On the shortest screens there is no room for both small lines above the scrubber: the signature
      // finishes its light-up and then makes way for the hint.
      const crowded = () => {
        const sig = end?.querySelector(".gallery-end-credit a")?.getBoundingClientRect(), hb = el.getBoundingClientRect();
        return !!sig && sig.width > 0 && hb.top < sig.bottom + 16;
      };
      const reveal = () => { shown = true; el.classList.add("is-on"); };
      const onResize = () => { if (shown) place(); };
      addEventListener("resize", onResize);
      return {
        get shown() { return shown || !!timer; },
        arm() {
          if (shown || timer) return;
          timer = setTimeout(() => {
            timer = 0;
            if (!end?.classList.contains("is-signed")) return;
            place();
            if (!crowded()) { reveal(); return; }
            timer = setTimeout(() => { timer = 0; if (!end.classList.contains("is-signed")) return; end.classList.add("is-hinted"); reveal(); }, 1000);
          }, 1000);
        },
        hide,
        remove() { hide(); removeEventListener("resize", onResize); el.remove(); },
      };
    })();
    // The studio's signature (TKT-028): it lights up when you reach the very end of the gallery and fades
    // as soon as you start back up (a few pixels). A marker on the end's last 24px says when that is.
    if (end) {
      const mark = document.createElement("i");
      mark.className = "gallery-end-sentinel"; mark.setAttribute("aria-hidden", "true"); end.append(mark);
      const io = new IntersectionObserver(([e]) => {
        const on = e.intersectionRatio > 0.98;
        end.classList.toggle("is-signed", on);
        if (on) scrubHint.arm();
      }, { rootMargin: "0px 0px 6px 0px", threshold: [0, 0.99, 1] });
      io.observe(mark);
      offs.push(() => { io.disconnect(); mark.remove(); end.classList.remove("is-signed"); scrubHint.remove(); });
    }
    // Phone (Michael, 2026-10-13): each room's "GALLERY · I" sits as far below the white header as the
    // wordmark's letters sit above the header's edge. Measured from the letters, not their boxes: the
    // tops of the capitals below, and the wordmark's baseline above (where the eye reads the text's
    // bottom; the descender of "Kaye" read 5px short on his iPhone). A short phone gives up only what
    // keeps the swipe invitation clear of the map.
    const inkPen = document.createElement("canvas").getContext("2d");
    const ink = (el, text) => { const cs = getComputedStyle(el); inkPen.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`; return inkPen.measureText(text); };
    const textBoxes = (el) => { const g = document.createRange(); g.selectNodeContents(el); return [...g.getClientRects()].filter((q) => q.width); };
    const fitHeads = (h) => {
      root.style.removeProperty("--head-shift");
      rooms.forEach((r) => { const n = r.head?.querySelector(".chapter-count"); if (n) n.style.marginTop = ""; });
      if (!phone.matches && !sideways.matches) return;
      // The room's count ("15 WORKS") sits as far below the words above it as those words sit below the
      // title (Michael, 2026-10-13): measured ink to ink, from the bottom curl of the title's "g" to the
      // tops of the words, and from the words' lowest descenders to the tops of the count's capitals.
      rooms.forEach((r) => {
        const title = r.head?.querySelector(".chapter-title"), note = r.head?.querySelector(".chapter-note"), count = r.head?.querySelector(".chapter-count");
        if (!title || !note || !count) return;
        const tb = textBoxes(title), nb = textBoxes(note), cb = textBoxes(count);
        if (!tb.length || !nb.length || !cb.length) return;
        const tm = ink(title, title.textContent), nm = ink(note, note.textContent), cm = ink(count, count.textContent.toUpperCase());
        const titleBottom = Math.max(...tb.map((q) => q.bottom)) - tm.fontBoundingBoxDescent + tm.actualBoundingBoxDescent;
        const noteTop = Math.min(...nb.map((q) => q.bottom)) - nm.fontBoundingBoxDescent - nm.actualBoundingBoxAscent;
        const noteBottom = Math.max(...nb.map((q) => q.bottom)) - nm.fontBoundingBoxDescent + nm.actualBoundingBoxDescent;
        const countTop = cb[0].bottom - cm.fontBoundingBoxDescent - cm.actualBoundingBoxAscent;
        const more = (noteTop - titleBottom) - (countTop - noteBottom);
        if (more > 0.5) count.style.marginTop = `${Math.round(more)}px`;
      });
      const shell = document.querySelector("[data-shell]")?.getBoundingClientRect();
      // The opening's first visible line: "GALLERY · I" on a phone; the title on a phone on its side.
      const num = [rooms[0]?.head?.querySelector(".chapter-num"), rooms[0]?.head?.querySelector(".chapter-title")].find((el) => el && getComputedStyle(el).display !== "none" && textBoxes(el).length);
      if (!shell || !num) return;
      let inkBottom = 0;
      document.querySelectorAll("[data-shell] .wordmark-name, [data-shell] .wordmark-fine").forEach((el) => {
        const m = ink(el, getComputedStyle(el).textTransform === "uppercase" ? el.textContent.toUpperCase() : el.textContent);
        textBoxes(el).forEach((q) => { inkBottom = Math.max(inkBottom, q.bottom - m.fontBoundingBoxDescent); });   // the baseline
      });
      const mn = ink(num, num.classList.contains("chapter-num") ? num.textContent.toUpperCase() : num.textContent), q = textBoxes(num)[0];
      const capTop = q.bottom - mn.fontBoundingBoxDescent - mn.actualBoundingBoxAscent;
      let shift = (shell.bottom - inkBottom) - (capTop - shell.bottom);
      const rem = parseFloat(getComputedStyle(root).fontSize) || 16, mapTop = map ? map.getBoundingClientRect().top : h;
      const cues = rooms.map((r) => r.head?.querySelector(".walk-cue")).filter(Boolean).map((c) => c.getBoundingClientRect().bottom - (c.closest("[data-chapter]").getBoundingClientRect().top));
      if (cues.length) shift = Math.min(shift, mapTop - 1.25 * rem - Math.max(...cues));
      if (shift > 0.5) root.style.setProperty("--head-shift", `${Math.round(shift)}px`);
    };
    // Phone labels (Michael, 2026-10-13): a label that wraps is only as wide as its longest line, so the
    // block sits centred under its work instead of leaning left.
    const fitLabels = () => {
      rooms.forEach((r) => r.works.forEach((w) => {
        const lab = w.querySelector(".work-label");
        lab.style.width = "";
        if (!phone.matches) return;
        const box = lab.getBoundingClientRect();
        if (!box.width) return;
        const right = Math.max(...textBoxes(lab).map((q) => q.right));
        const fit = Math.ceil(right - box.left + (parseFloat(getComputedStyle(lab).paddingRight) || 0) + 0.5);
        if (fit < box.width - 1) lab.style.width = `${fit}px`;
      }));
    };
    const layout = () => {
      const h = innerHeight, vw = innerWidth;
      if (h < 80 || vw < 80) return;
      const rem = parseFloat(getComputedStyle(root).fontSize) || 16;
      const isPhone = phone.matches;
      const navW = narrow.matches ? 0 : document.querySelector("[data-shell]")?.offsetWidth || 0;
      peek?.hide();
      buildMap();                                                       // measure the map at its real size
      fitEnd(h, vw);
      fitHeads(h);
      const mapTop = map ? map.getBoundingClientRect().top : h - 4 * rem;
      const shellBox = document.querySelector("[data-shell]")?.getBoundingClientRect();
      const barBottom = shellBox && shellBox.height < h * 0.5 ? shellBox.bottom : 0;   // a header bar, not the desktop menu
      const footTop = Math.min(mapTop, ...["[data-where]", "[data-pager]"].map((s) => document.querySelector(s)?.getBoundingClientRect().top ?? h));
      rooms.forEach((r) => {
        // Under a header bar the works start a measured step below it, so none hides behind it (Michael,
        // 2026-10-13: on a phone on its side the tops were under the bar); beside the desktop menu, 8%.
        const headroom = barBottom ? barBottom + (sideways.matches ? 1.1 : 1.4) * rem : h * 0.08;
        // A phone on its side is short, and 1 inch = 1% of the height made its works small (Michael: "far too
        // small and should take up much more space individually"); they are scaled up, within their room.
        const scale = (parseFloat(isPhone ? r.ch.dataset.scalePhone : r.ch.dataset.scale) || 1.5) * (sideways.matches ? 1.4 : 1);
        const ppi = h / 100;                                            // 1 inch of canvas = 1% of the view
        const labelW = isPhone ? 0 : 12.5 * rem + 1.15 * rem;
        const maxW = isPhone ? vw - 2.5 * rem : vw - navW - 2 * Math.min(Math.max(1.25 * rem, vw * 0.032), 4 * rem) - labelW;
        // Phone: each label hangs under its work at one shared height, with its bottom a little above
        // the map; the works are spaced evenly painting to painting, and a label may reach into the
        // space after its work (never into the next label).
        const gap = parseFloat(getComputedStyle(r.wall).columnGap) || 60;
        const drop = isPhone ? parseFloat(getComputedStyle(r.works[0]).rowGap) || 18 : 0;
        if (isPhone) r.wall.style.paddingBottom = `${Math.round(h - mapTop + 1.75 * rem)}px`;   // air above the map
        else if (stacked.matches) r.wall.style.paddingBottom = `${Math.round(Math.max(h * 0.25, h - mapTop + 1.75 * rem))}px`;   // clear of the stacked foot
        else if (sideways.matches) r.wall.style.paddingBottom = `${Math.round(h - footTop + (h <= 340 ? 1.9 : 2.5) * rem)}px`;   // works hang low, above the foot row
        // A phone on its side: the bench rests on the works' floor line, as far left as it can go without
        // touching the opening's words (beside the invitation when the opening is tall), small enough that
        // the first works are already in view; the wall starts just after the words and the bench.
        r._side = null; r.wall.style.paddingLeft = "";
        if (sideways.matches && r.head) {
          const chTop = r.ch.getBoundingClientRect().top, gy = h - parseFloat(r.wall.style.paddingBottom || 0);
          const boxes = [...r.head.children].filter((el) => getComputedStyle(el).display !== "none")
            .flatMap((el) => (el.classList.contains("walk-cue") ? [...el.children].filter((s) => getComputedStyle(s).display !== "none").map((s) => s.getBoundingClientRect()) : textBoxes(el)))
            .filter((q) => q.width).map((q) => ({ l: q.left, r: q.right, t: q.top - chTop, b: q.bottom - chTop }));
          const shortH = h <= 340, gap = 0.9 * rem;
          const bw = Math.min(vw * (shortH ? 0.17 : 0.24), shortH ? 140 : 210); let x = 1.25 * rem;
          for (let k = 0; k < 5; k++) {
            const top = gy - bw / 5;
            const hit = boxes.filter((q) => q.b > top - gap && q.r > x - gap && q.l < x + bw + gap);
            if (!hit.length) break;
            x = Math.max(...hit.map((q) => q.r)) + 1.25 * rem;
          }
          r._side = { x, bw, gy, words: boxes.length ? Math.max(...boxes.map((q) => q.r)) : x };
        }
        // A tablet (Michael, 2026-10-14): the first works show at the right from the start, as on desktop,
        // inviting the walk. The wall starts just after the opening's words (at least 55% across); the words
        // fade as the first work slides toward them.
        r._fade = null;
        if (tablet.matches && r.head) {
          const words = Math.max(0, ...[...r.head.children].filter((el) => getComputedStyle(el).display !== "none")
            .flatMap((el) => (el.classList.contains("walk-cue") ? [...el.children].map((k) => k.getBoundingClientRect()) : textBoxes(el)))
            .filter((q) => q.width).map((q) => q.right));
          const start = Math.max(words + 2.5 * rem, vw * 0.55);
          r.wall.style.paddingLeft = `${Math.round(start)}px`;
          r._fade = Math.max(48, start - words);
        }
        if (!isPhone && !stacked.matches && !sideways.matches) r.wall.style.paddingBottom = "";
        const size = (labelH) => {
          const floor = parseFloat(getComputedStyle(r.wall).paddingBottom) || h * 0.25;
          r.works.forEach((w) => {
            // Phone: a taller label (AGUE's two canvases) takes its own room under its work, so the work
            // ends above it rather than the label rising over the painting (Michael, 2026-10-13).
            const tag = w.querySelector(".work-label");
            const own = isPhone && tag.classList.contains("has-parts")
              ? Math.max(labelH, tag.scrollHeight + (tag.classList.contains("is-glass") ? 0 : 1.05 * rem)) : labelH;
            const room = h - floor - (isPhone ? own + drop : 0) - headroom;
            const inches = parseFloat(w.dataset.inches) || 20, ratio = parseFloat(w.dataset.ratio) || 0.75;
            let ht = Math.max(soft(ppi * inches * scale, room), h * 0.1);
            let wd = ht * ratio;
            if (wd > maxW) { wd = maxW; ht = wd / ratio; }
            w._btn.style.width = `${Math.round(wd)}px`;
            w._img.style.aspectRatio = String(ratio);       // its box is the painting's, loaded or not (Safari)
            // The sharpest file the screen can show, decided before the picture is fetched (never twice).
            if (!w._img.currentSrc) w._img.sizes = `${Math.ceil(wd)}px`;
            if (!touch) arm(w._img);                         // desktop: the browser's own lazy loading takes it from here
            w.style.width = isPhone ? `${Math.round(wd)}px` : "";
            const lab = w.querySelector(".work-label");
            lab.style.maxWidth = isPhone ? `${Math.round(wd + gap - 12)}px` : "";   // centred: 24px into each gap at most
          });
        };
        if (isPhone) {
          r.wall.style.removeProperty("--label-h");
          size(parseFloat(r._labelH) || 7 * rem);
          const tallest = () => Math.max(0, ...r.works.filter((w) => !w.querySelector(".work-label.has-parts"))
            .map((w) => w.querySelector(".work-label").scrollHeight));
          size(tallest());                                              // once more with the real labels
          r._labelH = tallest();
          r.wall.style.setProperty("--label-h", `${r._labelH}px`);
        } else {
          r.wall.style.removeProperty("--label-h");
          size(0);
        }
        if (r._side) {
          // The wall starts after the words and the bench, but never so far right that the first work is cut
          // off: it shows whole, so the walk is plainly there to take; the bench gives way if it must.
          // If the bench beside the invitation would not fit, the first work may step on, half in view or more.
          const s = r._side, firstW = r.works[0]._btn.offsetWidth;
          let start = Math.min(Math.max(s.words, s.x + s.bw) + 2 * rem, Math.max(vw * 0.7, vw - firstW - 1.25 * rem));
          if (s.x + 64 > start - rem) start = Math.max(start, Math.min(s.x + 64 + rem, vw - 0.6 * firstW));
          s.bw = Math.min(s.bw, start - rem - s.x);
          s.fade = Math.max(48, start - s.words);
          r.wall.style.paddingLeft = `${Math.round(start)}px`;
        }
        // A room ends when its last work stands in the middle of a phone; elsewhere, at the wall's end.
        const last = r.works[r.works.length - 1];
        r.travel = isPhone || touch
          ? Math.max(0, last.offsetLeft + last._btn.offsetLeft + last._btn.offsetWidth / 2 - vw / 2)
          : Math.max(0, r.wall.scrollWidth - innerWidth);
        r.ch.style.height = `${r.travel + h}px`;
        r.pin.style.height = `${h}px`;                    // the same height the works were sized for (TKT-045: Safari's 100svh stayed short when the tab bar went)
      });
      rooms.forEach((r) => {
        r.top = r.ch.getBoundingClientRect().top + scrollY;
        const cs = getComputedStyle(r.ch);
        r.edge = ["--room-top", "--room-bottom", "--room-fg"].map((k) => cs.getPropertyValue(k).trim());
      });
      maxY = document.documentElement.scrollHeight - innerHeight;
      update();
      rooms.forEach((r) => {
        // The bench: centred under the room's title and words, with a little air above the map.
        const groundY = r._side ? r._side.gy : mapTop - 1.75 * rem;
        if (r.bench && r._side) {
          const wl = r.pin.getBoundingClientRect().left;
          r.bench.style.display = r._side.bw < 48 ? "none" : "";
          Object.assign(r.bench.style, { width: `${Math.round(r._side.bw)}px`, left: `${Math.round(r._side.x - wl)}px`, bottom: `${Math.round(h - groundY)}px` });
        } else if (r.bench && r.head) {
          const t = r.head.querySelector(".chapter-title").getBoundingClientRect();
          const n = (r.head.querySelector(".chapter-note") || r.head.querySelector(".chapter-count")).getBoundingClientRect();
          const left = Math.min(t.left, n.left), right = Math.max(t.right, n.right);
          let bw = Math.min(vw * (isPhone ? 0.62 : narrow.matches ? 0.3 : 0.18), 260);
          const headBottom = r.head.getBoundingClientRect().bottom - r.ch.getBoundingClientRect().top;
          bw = Math.min(bw, (groundY - headBottom - 1.5 * rem) * 5);       // never touches the words
          r.bench.style.display = bw < 90 ? "none" : "";                     // no room: no bench
          const wl = r.pin.getBoundingClientRect().left;                  // the wall at rest, not as scrolled
          Object.assign(r.bench.style, { width: `${bw}px`, left: `${(left + right) / 2 - bw / 2 - wl}px`, bottom: `${h - groundY}px` });
        }
        drawLines(r, groundY);
      });
      fitLabels();
      measure();
      update();
      document.getElementById("stage")?.classList.add("is-hung");   // the rooms are laid out: images may come
    };

    // Minimap: one mark per work, its height by real size; the marks under view light up.
    const map = document.querySelector("[data-minimap]");
    const buildMap = () => {
      if (!map) return;
      map.innerHTML = "";
      rooms.forEach((r, ri) => {
        if (ri) { const g = document.createElement("span"); g.className = "mm-gap"; map.append(g); }
        r.works.forEach((w) => {
          const a = document.createElement("a");
          // Not a link (TKT-023): nothing for a phone to open in a new tab, highlight or drag. It is
          // still a focusable control that Enter or the space bar walks to.
          a.setAttribute("role", "link"); a.tabIndex = 0; a.draggable = false;
          a.setAttribute("aria-label", `${w.dataset.title}, ${w.dataset.index} of ${total}`);
          a.style.height = `${clamp((parseFloat(w.dataset.inches) || 20) * 0.45, 6, 22)}px`;
          const lit = document.createElement("i"); lit.className = "mm-lit"; a.append(lit); w._lit = lit; w._on = -1;
          a.addEventListener("click", (e) => { e.preventDefault(); goTo(w, r); });
          w._mark = a; map.append(a);
        });
      });
      map.parentElement?.style.setProperty("--mm-w", `${map.offsetWidth}px`);   // the label beside it keeps its distance
      const whereName = document.querySelector("[data-where-chapter]");
      if (whereName) map.parentElement?.style.setProperty("--where-w", `${Math.ceil(Math.max(...rooms.map((r) => ink(whereName, r.ch.dataset.chapter).width)))}px`);
    };
    const goTo = (w, r) => {
      let y;
      if (wide.matches) {
        const x = w.offsetLeft + w._btn.offsetLeft + w._btn.offsetWidth / 2 - innerWidth / 2;
        y = r.top + clamp(x, 0, r.travel);
      } else y = w.getBoundingClientRect().top + scrollY - innerHeight * 0.3;
      lenis ? lenis.scrollTo(y) : scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
    };

    // Visits (TKT-020): rooms reached, the end of the gallery, and time with the work in front of you.
    const seenRooms = new Set();
    let maxY = Infinity, endSeen = false, inViewer = false, wallAt = null, wallT0 = 0;
    const wallTime = new Map();
    const workProps = (w) => ({ title: w.dataset.title, number: +w.dataset.index, room: w.closest("[data-chapter]").dataset.chapter });
    const tenths = (ms) => Math.round(ms / 100) / 10;
    const wallMark = (w) => {                              // the work now in front of you (null: not on the wall)
      const now = performance.now();
      if (wallAt) wallTime.set(wallAt, (wallTime.get(wallAt) || 0) + now - wallT0);
      wallAt = w; wallT0 = now;
    };
    const wallFlush = (beacon) => {
      wallMark(wallAt);
      wallTime.forEach((ms, w) => { if (ms >= 2000) track("artwork_wall_time", { ...workProps(w), seconds: tenths(ms) }, beacon); });
      wallTime.clear();
    };
    // The edges of the screen (Michael, 2026-10-12): the phone browser's top and bottom, and the phone
    // header, take the colours of the room you are in, with no fade, so no room's colour carries over
    // into the next. Each room names its edge colours in the stylesheet.
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    let edgeTop = "", edgeBottom = "";
    // The meter's preview (TKT-022, Michael 2026-10-12). Point at the meter, or long-press it on a touch
    // screen, and a small bubble rises above it: a loupe of the marks around you (the one you are on lit)
    // and a tiny thumbnail of that painting with its number and title. Moving along steps from mark to
    // mark with a slight, eased lag, like placing the text cursor between two letters on a phone; letting
    // go (or clicking) walks to that work. A quick tap still jumps straight there, without the bubble.
    const peek = (() => {
      if (!map) return { hide: () => {} };
      const el = document.createElement("div");
      el.className = "mm-peek"; el.setAttribute("aria-hidden", "true"); el.hidden = true;
      el.innerHTML = '<div class="mm-peek-art"><img alt="" decoding="async" /><p class="mm-peek-cap"><span class="mm-peek-num"></span><span class="mm-peek-title"></span></p></div><div class="mm-loupe"><div class="mm-loupe-row"></div></div>';
      map.after(el);
      const img = el.querySelector("img"), num = el.querySelector(".mm-peek-num"), ttl = el.querySelector(".mm-peek-title");
      const loupe = el.querySelector(".mm-loupe"), row = el.querySelector(".mm-loupe-row");
      const ZOOM = 2.2;                                    // the loupe's magnification
      let centres = [], loupeX = [], loupeMarks = [], open = false, mode = "", pos = 0, target = 0, sel = -1, raf = 0;
      let pressT = 0, sx = 0, sy = 0, px = 0, moved = false, swallow = false, lastType = "mouse", loaded = false;
      const DRIFT = 30;                                    // a finger may wander this far and still be a press or a tap
      const preload = () => {                              // all the thumbnails, once (about 22 KB)
        if (loaded) return; loaded = true;
        works.forEach((w) => { if (w.dataset.thumb) { const i = new Image(); i.decoding = "async"; i.src = w.dataset.thumb; } });
      };
      const measure = () => {                              // where each mark sits, on screen and in the loupe
        const m0 = map.getBoundingClientRect().left;
        row.innerHTML = ""; loupeMarks = [];
        [...map.children].forEach((c) => {
          const b = c.getBoundingClientRect(), d = document.createElement("i");
          d.style.cssText = `left:${((b.left - m0) * ZOOM).toFixed(1)}px;width:${(b.width * ZOOM).toFixed(1)}px;height:${(b.height * ZOOM).toFixed(1)}px`;
          if (c.classList.contains("mm-gap")) d.className = "is-gap"; else loupeMarks.push(d);
          row.append(d);
        });
        centres = works.map((w) => { const b = w._mark.getBoundingClientRect(); return b.left + b.width / 2; });
        loupeX = centres.map((c) => (c - m0) * ZOOM);
      };
      const nearest = (x) => { let k = 0, bd = Infinity; centres.forEach((c, i) => { const d = Math.abs(c - x); if (d < bd) { bd = d; k = i; } }); return k; };
      // Where the pointer is between marks, softly pulled toward the nearer one: it glides from mark to
      // mark and still settles on paintings (Michael: slightly smoother, less clicky; 2026-10-12).
      const soft = (x) => {
        let f = centres.length - 1;
        if (x <= centres[0]) f = 0;
        else for (let i = 0; i < centres.length - 1; i++) if (x <= centres[i + 1]) { f = i + (x - centres[i]) / ((centres[i + 1] - centres[i]) || 1); break; }
        return f + (Math.round(f) - f) * 0.5;
      };
      const along = (f, arr) => { const i = clamp(Math.floor(f), 0, arr.length - 1), n = clamp(i + 1, 0, arr.length - 1); return arr[i] + (arr[n] - arr[i]) * (f - i); };
      const paint = () => {
        const s = clamp(Math.round(pos), 0, works.length - 1);
        if (s !== sel) {
          works[sel]?._mark?.classList.remove("is-peek");
          sel = s; const w = works[s];
          w._mark?.classList.add("is-peek");
          el.dataset.ground = w.closest("[data-chapter]")?.dataset.ground || "paper";   // the bubble wears that room's colours
          if (w.dataset.thumb) { img.src = w.dataset.thumb; if (!reduced) img.animate([{ opacity: 0.6 }, { opacity: 1 }], { duration: 140, easing: "ease-out" }); }
          num.textContent = pad(w.dataset.index); ttl.textContent = w.dataset.title;
          loupeMarks.forEach((d, i) => d.classList.toggle("is-here", i === s));
        }
        row.style.transform = `translate3d(${(loupe.clientWidth / 2 - along(pos, loupeX)).toFixed(1)}px, 0, 0)`;
        const cx = along(pos, centres), pw = el.offsetWidth, left = clamp(cx - pw / 2, 8, innerWidth - pw - 8);
        el.style.left = `${left.toFixed(1)}px`;
        el.style.setProperty("--caret", `${clamp(cx - left, 14, pw - 14).toFixed(1)}px`);
      };
      const tick = () => {                                 // the eased follow: a slight lag, never a jump
        raf = 0;
        pos += (target - pos) * (reduced ? 1 : mode === "touch" ? 0.18 : 0.28);
        if (Math.abs(target - pos) < 0.004) pos = target;
        paint();
        if (open && pos !== target) raf = requestAnimationFrame(tick);
      };
      const run = () => { if (!raf) raf = requestAnimationFrame(tick); };
      const show = (m, i) => {
        preload(); measure(); mode = m; target = pos = i; sel = -1;
        el.style.bottom = `${(innerHeight - map.getBoundingClientRect().top + 12).toFixed(1)}px`;
        el.hidden = false; open = true; map.classList.add("is-peeking"); paint();
        el.classList.remove("is-in"); void el.offsetWidth; el.classList.add("is-in");
      };
      const hide = () => {
        clearTimeout(pressT); pressT = 0;
        if (!open) return;
        open = false; cancelAnimationFrame(raf); raf = 0;
        works[sel]?._mark?.classList.remove("is-peek"); sel = -1;
        map.classList.remove("is-peeking"); el.classList.remove("is-in"); el.hidden = true;
      };
      const jump = (i, via) => {
        const w = works[i]; hide();
        if (!w) return;
        goTo(w, w._room || rooms.find((r) => r.works.includes(w)));
        track("minimap_jump", { title: w.dataset.title, number: +w.dataset.index, via });
      };
      // A finger (TKT-023, Michael 2026-10-12): a press anywhere on the meter, or within 15px of it, opens
      // the preview after a moment even if the finger wanders a little; a quick tap goes straight there.
      // Taps are decided on release, so a slightly moving finger still counts. No mouse events follow a
      // touch here, so nothing focuses, selects or starts a drag.
      // TKT-043 (Michael, 2026-10-14): the press opens sooner (220ms, still longer than a tap), and a finger
      // that clearly slides along the meter (10px, mostly sideways) opens the preview at once and scrubs;
      // a tap's small wobble never does. Lifting after a slide walks to the work under the finger.
      map.addEventListener("pointerdown", (e) => {
        lastType = e.pointerType; swallow = false;
        if (e.pointerType === "mouse") return;
        e.preventDefault();
        sx = px = e.clientX; sy = e.clientY; moved = false; preload(); measure();
        clearTimeout(pressT);
        const id = e.pointerId;
        pressT = setTimeout(() => {
          pressT = 0; show("touch", nearest(px)); target = soft(px); run();
          try { map.setPointerCapture(id); } catch { /* already released */ }
        }, 220);
      });
      map.addEventListener("pointermove", (e) => {
        if (e.pointerType === "mouse") {
          if (!open) { measure(); show("mouse", nearest(e.clientX)); }
          target = soft(e.clientX); run(); return;
        }
        if (open && mode === "touch") { target = soft(e.clientX); run(); return; }
        px = e.clientX;
        if (!pressT) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) >= 10 && Math.abs(dx) > Math.abs(dy) * 1.5) {    // sliding along the meter: preview now
          clearTimeout(pressT); pressT = 0; show("touch", nearest(px)); target = soft(px); run();
          try { map.setPointerCapture(e.pointerId); } catch { /* already released */ }
          return;
        }
        if ((Math.abs(dy) >= 12 && Math.abs(dy) > Math.abs(dx) * 1.5) || Math.hypot(dx, dy) > DRIFT) { clearTimeout(pressT); pressT = 0; moved = true; }   // up or down, or off elsewhere: neither
      });
      map.addEventListener("pointerup", (e) => {
        if (e.pointerType === "mouse") return;
        const quick = !!pressT;
        clearTimeout(pressT); pressT = 0;
        if (open && mode === "touch") { swallow = true; jump(Math.round(target), "long-press"); }
        else if (quick && !moved) { swallow = true; if (!centres.length) measure(); jump(nearest(e.clientX), "tap"); }
      });
      map.addEventListener("pointercancel", (e) => { if (e.pointerType !== "mouse") { clearTimeout(pressT); pressT = 0; } if (mode !== "mouse") hide(); });
      ["contextmenu", "dragstart", "selectstart"].forEach((k) => map.addEventListener(k, (e) => e.preventDefault()));
      map.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse" && mode === "mouse") hide(); });
      // Clicks are decided here, before a mark's own handler: the release that ends a long press does not
      // also count as a tap, and a tap that lands between two marks goes to the nearer one.
      map.addEventListener("click", (e) => {
        if (swallow) { swallow = false; e.preventDefault(); e.stopPropagation(); return; }
        const a = e.target.closest("a");
        if (!centres.length) measure();
        const i = a ? works.findIndex((w) => w._mark === a) : nearest(e.clientX);
        e.preventDefault(); e.stopPropagation();
        if (i >= 0) jump(i, lastType === "key" ? "key" : lastType === "mouse" ? "click" : "tap");
      }, true);
      // The keyboard: a mark that takes focus shows its preview too, and Enter or the space bar walks there.
      map.addEventListener("focusin", (e) => { const i = works.findIndex((w) => w._mark === e.target); if (i >= 0 && e.target.matches(":focus-visible")) { show("key", i); } });
      map.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && e.target.closest?.("a")) { e.preventDefault(); lastType = "key"; e.target.click(); }
      });
      map.addEventListener("focusout", () => { if (mode === "key") hide(); });
      // The meter's touches are its own: they never walk the gallery or fill the push-through.
      const own = (e) => e.stopPropagation();
      ["touchstart", "touchmove", "touchend"].forEach((k) => map.addEventListener(k, own, { passive: true }));
      addEventListener("resize", hide);
      offs.push(() => { hide(); removeEventListener("resize", hide); el.remove(); });
      return { hide };
    })();
    const whereNum = document.querySelector("[data-where-num]");
    const whereChapter = document.querySelector("[data-where-chapter]");
    // Each scroll step (every frame of the walk) works from positions measured once per layout, so it
    // never asks the browser where anything is: no forced layout while moving. Only what changed is
    // written. (Michael, 2026-10-11: the mobile walk caught and bumped; this was the cost.)
    const measure = () => {
      rooms.forEach((r) => {
        const pinTop = r.pin.getBoundingClientRect().top;
        r.works.forEach((w) => {
          const b = w._btn.getBoundingClientRect();
          w._room = r; w._x = w.offsetLeft + w._btn.offsetLeft; w._w = w._btn.offsetWidth;
          w._y0 = b.top - pinTop; w._y1 = b.bottom - pinTop;
        });
      });
    };
    let lastBest = null, walkMovedAt = 0;
    const update = () => {
      const y = scrollY, vw = innerWidth, vh = innerHeight;
      let active = rooms[0];
      rooms.forEach((r) => {
        const into = clamp(y - r.top, 0, r.travel);
        r._into = into;
        r._pinTop = y < r.top ? r.top - y : y > r.top + r.travel ? r.top + r.travel - y : 0;   // the sticky pin
        if (r._shown !== into) { r._shown = into; r.wall.style.transform = `translate3d(${-into}px, 0, 0)`; }
        const fade = r._side?.fade ?? r._fade;
        const op = fade && r.head ? Math.max(0, Math.min(1, 1 - into / fade)) : null;   // a phone on its side or a tablet: the words make way
        if (r._op !== op) { r._op = op; if (r.head) r.head.style.opacity = op === null ? "" : op.toFixed(3); }
        if (y >= r.top - vh * 0.5) active = r;
      });
      const ground = active.ch.dataset.ground;
      if (root.dataset.ground !== ground) root.dataset.ground = ground;
      // Both edges follow the room that fills most of the screen and change together, at the same moment
      // as the words, whichever way you are walking (Michael: the bottom kept the later room's colour
      // when walking back). The end of the gallery is the last room's own wall, so nothing changes there
      // (Michael, 2026-10-13: a deeper brown appeared "BOOOM" and jumped about). On a phone the bottom bar
      // reads its colour from the .edge-tint strip, which wears --edge-bottom (TKT-023).
      const last = rooms[rooms.length - 1];
      if (scrubHint.shown) {                              // back far enough that the last painting shows: the hint goes
        const lw = last?.works[last.works.length - 1];
        if (lw && last._pinTop + lw._y1 > 0) scrubHint.hide();
      }
      const [top, wallColour, topFg] = active.edge || [];
      const bottom = wallColour;
      if (top && top !== edgeTop) { edgeTop = top; root.style.setProperty("--edge-top", top); root.style.setProperty("--edge-fg", topFg); themeMeta?.setAttribute("content", top); }
      if (bottom && bottom !== edgeBottom) { edgeBottom = bottom; root.style.setProperty("--edge-bottom", bottom); }
      if (!seenRooms.has(active)) { seenRooms.add(active); track("gallery_room", { room: active.ch.dataset.chapter, number: rooms.indexOf(active) + 1 }); }
      if (!endSeen && y >= maxY - 4) { endSeen = true; track("gallery_end", { works: total }); }
      let best = works[0], bd = Infinity;
      for (const w of works) {
        const r = w._room;
        if (!r) continue;
        const left = w._x - r._into, right = left + w._w, top = r._pinTop + w._y0, bottom = r._pinTop + w._y1;
        const inView = bottom > 0 && top < vh;
        const d = Math.abs((left + right) / 2 - vw / 2) + (inView ? 0 : 1e5);
        if (d < bd) { bd = d; best = w; }
        // How much of the work is on screen (0..1) lights its mark in step with the walk: no switch, no lag.
        if (!w._mark) continue;
        const on = inView ? Math.round(clamp((Math.min(right, vw) - Math.max(left, 0)) / Math.max(w._w, 1), 0, 1) * 50) / 50 : 0;
        if (on !== w._on) { w._on = on; w._lit.style.opacity = on; }
      }
      // Nothing on screen: the end of the gallery fills it (TKT-025). The meter stays on the last work.
      if (bd >= 1e5) best = y >= last.top ? works[works.length - 1] : lastBest || works[0];
      if (best !== lastBest) {
        lastBest = best;
        if (!inViewer && !document.hidden) wallMark(best);
        window.__walkPlan?.();                            // a new work: move the ready window along
        if (whereNum) whereNum.textContent = pad(best.dataset.index);
        if (whereChapter) whereChapter.textContent = best.closest("[data-chapter]").dataset.chapter;
      }
    };
    addEventListener("scroll", update, { passive: true });
    let pend = 0;
    let laidW = innerWidth, laidH = innerHeight;
    const relayout = (e) => {
      // On a phone the browser bar sliding in or out changes the height a little; that is not a new layout.
      // On its side it is: the tab bar comes and goes (about 110px), and each height needs its own layout
      // (Michael, 2026-10-13: laid out with the tabs showing, the works hung high once they went).
      const dh = Math.abs(innerHeight - laidH);
      if (e?.type === "resize" && touch && innerWidth === laidW && dh < (innerWidth > innerHeight ? 40 : 160)) return;
      laidW = innerWidth; laidH = innerHeight;
      // Keep the visitor where they were: the same room, the same share of its walk.
      const y0 = scrollY, k = rooms.findIndex((r) => y0 >= r.top - 2 && y0 <= r.top + r.travel + 2);
      const share = k >= 0 ? (y0 - rooms[k].top) / Math.max(1, rooms[k].travel) : y0 / Math.max(1, document.documentElement.scrollHeight - innerHeight);
      cancelAnimationFrame(pend);
      pend = requestAnimationFrame(() => {
        layout();
        if (e?.type !== "resize") return;
        const y = k >= 0 ? rooms[k].top + share * rooms[k].travel : share * (document.documentElement.scrollHeight - innerHeight);
        scrollTo(0, Math.round(y)); update();
      });
    };
    addEventListener("resize", relayout);
    document.fonts?.ready.then(relayout);
    layout();
    offs.push(() => { removeEventListener("scroll", update); removeEventListener("resize", relayout); cancelAnimationFrame(pend); });
    document.querySelector("[data-to-top]")?.addEventListener("click", (e) => { e.preventDefault(); lenis ? lenis.scrollTo(0) : scrollTo(0, 0); });
    // The arrow keys walk too: → and ↓ onward, ← and ↑ back (the viewer keeps ← → while it is open).
    let keyTo = null;                                    // presses in quick succession add up
    const walkKeys = (e) => {
      if (!["ArrowRight", "ArrowLeft"].includes(e.key) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!document.querySelector("[data-viewer]")?.hidden || document.querySelector("[data-modal]:not([hidden])")) return;
      if (e.target.closest?.("input, textarea, select, [contenteditable]")) return;
      e.preventDefault();
      const from = keyTo !== null && Math.abs(keyTo - scrollY) > 2 ? keyTo : scrollY;
      const to = clamp(from + (e.key === "ArrowRight" ? 1 : -1) * innerHeight * 0.18, 0, document.documentElement.scrollHeight - innerHeight);
      keyTo = to;
      lenis ? lenis.scrollTo(to) : scrollTo({ top: to, behavior: reduced ? "auto" : "smooth" });
    };
    addEventListener("keydown", walkKeys);
    offs.push(() => removeEventListener("keydown", walkKeys));

    // Touch (phones and tablets): the walk follows your swipe, Locomotive-style. Any swipe moves you
    // along the walk: sideways, or down (onward) and up (back). The wall follows the finger with a
    // light ease, and a flick carries on with momentum that slows gently; momentum also carries you
    // round the turn from one room into the next. If you come to rest between rooms, the step
    // finishes in the direction you were going.
    if (touch) {
      const stage = document.getElementById("stage");
      root.classList.add("walk-touch");
      let target = scrollY, current = scrollY, vel = 0, raf = 0, dragging = false, lastDir = 1, samples = [];
      const max = () => document.documentElement.scrollHeight - innerHeight;
      // Stretches of the walk: sideways along a room (x) or downward between rooms (turn) and to the end.
      const turns = () => {
        const out = []; let y = 0;
        rooms.forEach((r) => { if (r.top - y > 0.5 && y > 0) out.push([y, r.top]); y = r.top + r.travel; });
        if (max() - y > 0.5) out.push([y, max()]);      // and on into the end (Michael, 2026-10-13: it stopped halfway)
        return out;
      };
      const turnAt = (p) => turns().find(([a, b]) => p > a + 0.5 && p < b - 0.5);
      const loop = (now) => {
        const dt = Math.min(now - (loop.t || now), 40) || 16; loop.t = now;
        if (!dragging && Math.abs(vel) > 0.004) {
          target = clamp(target + vel * dt, 0, max());
          vel *= Math.pow(0.965, dt / 16);                                 // a gentle, long glide
          if (target <= 0 || target >= max()) vel = 0;
        } else if (!dragging && Math.abs(vel) <= 0.004 && vel !== 0) {
          vel = 0;
          const t = turnAt(target);                                       // at rest mid-turn: finish the step
          if (t) target = lastDir > 0 ? t[1] : t[0];
        }
        const k = 1 - Math.pow(dragging ? 0.6 : 0.86, dt / 16);           // follow: snug while dragging, soft after
        current += (target - current) * k;
        if (Math.abs(target - current) < 0.3 && Math.abs(vel) <= 0.004) current = target;
        scrollTo(0, Math.round(current));
        update();                                         // move the wall in this same frame, not the next
        walkMovedAt = now;
        if (dragging || current !== target || vel !== 0) raf = requestAnimationFrame(loop);   // until a rest mid-turn has finished its step
        else { raf = 0; loop.t = 0; }
      };
      const run = () => { if (!raf) raf = requestAnimationFrame(loop); };
      let sx = 0, sy = 0, lx = 0, ly = 0, axis = null;
      stage.addEventListener("touchstart", (e) => {
        if (e.touches.length > 1) return;
        const t = e.touches[0]; sx = lx = t.clientX; sy = ly = t.clientY; axis = null;
        if (!raf) target = current = scrollY;                             // pick up wherever the page is
        vel = 0; samples = [];
      }, { passive: true });
      stage.addEventListener("touchmove", (e) => {
        if (e.touches.length > 1) return;
        const t = e.touches[0], dx = t.clientX - lx, dy = t.clientY - ly;
        lx = t.clientX; ly = t.clientY;
        if (!axis) {
          const ax = Math.abs(t.clientX - sx), ay = Math.abs(t.clientY - sy);
          if (Math.max(ax, ay) < 6) return;
          axis = ax >= ay ? "x" : "y"; dragging = true; vel = 0;
        }
        e.preventDefault();
        const d = -(axis === "x" ? dx : dy) * 1.15;                       // onward is positive
        if (d) lastDir = Math.sign(d);
        target = clamp(target + d, 0, max());
        const now = performance.now();
        samples.push([now, target]); while (samples.length && now - samples[0][0] > 100) samples.shift();
        run();
      }, { passive: false });
      const release = () => {
        if (!dragging) return;
        dragging = false;
        const now = performance.now();
        while (samples.length && now - samples[0][0] > 100) samples.shift();
        vel = samples.length > 1 ? (samples[samples.length - 1][1] - samples[0][1]) / Math.max(samples[samples.length - 1][0] - samples[0][0], 16) : 0;
        if (now - (samples[samples.length - 1]?.[0] || 0) > 80) vel = 0;  // the finger had stopped
        vel = clamp(vel * 1.1, -6, 6);
        if (vel) lastDir = Math.sign(vel);
        if (!vel) vel = 0.0041 * lastDir;                                 // still let a mid-turn rest finish
        run();
      };
      stage.addEventListener("touchend", release);
      stage.addEventListener("touchcancel", release);
      offs.push(() => { cancelAnimationFrame(raf); root.classList.remove("walk-touch"); delete window.__walkPlan; });
    }
    // Touch screens: keep the walk's next works ready, in walking order, without ever preparing a
    // picture mid-swipe. A small window rides just ahead of you (the work you are at, the next few,
    // one behind): fetched with priority by nearness, then decoded one at a time only while the walk is
    // at rest. A data-saver or slow connection keeps the window short. Nothing far ahead is spent until
    // the visitor heads that way.
    if (touch) {
      const conn = navigator.connection;
      const lean = !!(conn && (conn.saveData || /(^|-)2g$|3g/.test(conn.effectiveType || "")));
      const AHEAD = lean ? 2 : 5;
      const ready = new Set(), fetching = new Set();
      let decoding = false;
      const later = (f, ms) => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: ms }) : setTimeout(f, ms / 3));
      const windowAt = () => {
        const i = Math.max(0, works.indexOf(lastBest || works[0]));
        const list = [];
        for (let k = 0; k <= AHEAD; k++) if (works[i + k]) list.push(works[i + k]);
        if (works[i - 1]) list.push(works[i - 1]);
        return list;
      };
      const plan = () => {
        windowAt().forEach((w, k) => {
          if (fetching.has(w)) return;
          fetching.add(w);
          w._img.fetchPriority = k < 2 ? "high" : "low";
          w._img.loading = "eager";                      // start the download; the picture is not drawn yet
          arm(w._img);
        });
        decodeNext();
      };
      const decodeNext = () => {
        if (decoding) return;
        if (performance.now() - walkMovedAt < 260) { later(decodeNext, 500); return; }   // never mid-swipe
        const w = windowAt().find((x) => !ready.has(x));
        if (!w) return;
        const im = w._img;
        if (!(im.complete && im.naturalWidth)) { im.addEventListener("load", () => later(decodeNext, 500), { once: true }); return; }
        decoding = true;
        (im.decode ? im.decode() : Promise.resolve()).catch(() => {}).finally(() => { ready.add(w); decoding = false; later(decodeNext, 500); });
      };
      window.__walkPlan = plan;                          // the walk calls this when you reach a new work
      later(plan, 800);
    }
    if (root.classList.contains("walk-desk")) {
      offs.push(() => root.classList.remove("walk-desk"));
    }

    // The gallery light follows the hand and settles on the work you choose (R-2, R-12).
    if (finePointer && !reduced) {
      let raf = 0;
      const st = { x: innerWidth / 2, y: innerHeight * 0.45, tx: innerWidth / 2, ty: innerHeight * 0.45 };
      const move = (e) => { st.tx = e.clientX; st.ty = e.clientY; };
      const tick = () => {
        st.x = lerp(st.x, st.tx, 0.08); st.y = lerp(st.y, st.ty, 0.08);
        rooms.forEach((r) => { r.light.style.setProperty("--lx", `${st.x}px`); r.light.style.setProperty("--ly", `${st.y}px`); });
        raf = requestAnimationFrame(tick);
      };
      addEventListener("pointermove", move);
      raf = requestAnimationFrame(tick);
      works.forEach((w) => {
        const btn = w.querySelector(".work-open"), wall = w.closest("[data-wall]");
        btn.addEventListener("pointerenter", () => {
          const b = btn.getBoundingClientRect();
          st.tx = b.left + b.width / 2; st.ty = b.top + b.height * 0.4;
          btn.classList.add("is-focus"); wall.classList.add("has-focus");
          btn.animate([{ transform: "translateY(0)" }, { transform: "translateY(-6px)" }], { duration: 450, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
        });
        btn.addEventListener("pointerleave", () => {
          btn.classList.remove("is-focus"); wall.classList.remove("has-focus");
          btn.animate([{ transform: "translateY(-6px)" }, { transform: "translateY(0)" }], { duration: 380, easing: "ease-out", fill: "forwards" });
        });
      });
      offs.push(() => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); });
    }

    // Viewing room: magnify, then move the pointer to travel across the texture (exact mapping).
    const viewer = document.querySelector("[data-viewer]");
    const vImg = viewer?.querySelector("[data-viewer-img]");
    const fig = viewer?.querySelector(".viewer-figure");
    let current = -1, zoom = false, zx = 0.5, zy = 0.5, cx = 0.5, cy = 0.5, zraf = 0;
    let vAt = null, vT0 = 0, zAt = null, zT0 = 0;          // visits: the work in the viewer, and since when
    const viewerMark = (w, beacon) => {
      const now = performance.now();
      if (vAt && now - vT0 >= 1000) track("artwork_viewer_time", { ...workProps(vAt), seconds: tenths(now - vT0) }, beacon);
      vAt = w; vT0 = now;
    };
    const zoomBtn = document.createElement("button");
    zoomBtn.type = "button"; zoomBtn.className = "viewer-zoom"; zoomBtn.textContent = "Zoom to Inspect"; zoomBtn.setAttribute("aria-pressed", "false");
    viewer?.querySelector(".viewer-info").append(zoomBtn);
    // While inspecting, a small map in the work's own shape (rectangle, square, circle or Ague II's
    // corner) sits at the corner of the picture, with a warm glow where you are on the work.
    // Michael (2026-10-11): the map sits outside the picture. On phones and tablets it fills the space
    // to the right of the details, its top level with the "02 / 22" line; on desktop it sits under
    // the details. Outline only; a soft white dot marks where you are.
    const nav = viewer?.querySelector("[data-viewer-nav]"), navSvg = nav?.querySelector("svg");
    const navShape = (w) => {
      if (!nav) return;
      const ratio = parseFloat(w.dataset.ratio) || 0.75, W = ratio >= 1 ? 100 : 100 * ratio, H = ratio >= 1 ? 100 / ratio : 100;
      navSvg.setAttribute("viewBox", `0 0 ${W.toFixed(2)} ${H.toFixed(2)}`); nav._W = W; nav._H = H;
      let d;
      if (w.dataset.shape === "round") {
        d = `M${W / 2} 0A${W / 2} ${H / 2} 0 1 1 ${W / 2} ${H}A${W / 2} ${H / 2} 0 1 1 ${W / 2} 0Z`;
        nav._poly = null;
      } else {
        let O = null; try { O = JSON.parse(w.dataset.outline || "null"); } catch {}
        const P = O && O.length >= 4 ? O : [[0, 0], [1, 0], [1, 1], [0, 1]];
        d = "M" + P.map(([x, y]) => `${(x * W).toFixed(2)} ${(y * H).toFixed(2)}`).join("L") + "Z";
        nav._poly = P.map(([x, y]) => [x * W, y * H]);
      }
      navSvg.querySelector(".viewer-nav-shape").setAttribute("d", d);
    };
    const placeNav = () => {
      if (!nav?._W || !zoom) return;
      const rem = parseFloat(getComputedStyle(root).fontSize) || 16, ratio = nav._W / nav._H;
      const v = viewer.getBoundingClientRect();
      const fit = (bw, bh) => { let w = bw, h = w / ratio; if (h > bh) { h = bh; w = h * ratio; } return [Math.max(w, 0), Math.max(h, 0)]; };
      let w, h, left, top;
      if (matchMedia("(max-width: 999px) and (max-height: 520px) and (orientation: landscape)").matches) {
        // A phone on its side: the map has the right-hand column to itself, between the close button and
        // the page arrows, sharing their right edge (TKT-041, TKT-042).
        viewer.style.removeProperty("--nav-room");
        const close = viewer.querySelector("[data-viewer-close]").getBoundingClientRect();
        const prev = viewer.querySelector("[data-viewer-prev]").getBoundingClientRect(), next = viewer.querySelector("[data-viewer-next]").getBoundingClientRect();
        const colW = parseFloat(getComputedStyle(viewer).getPropertyValue("--rcol")) * rem || next.right - prev.left;
        const gap = 0.75 * rem;                          // right-aligned with the × and the arrows (TKT-042)
        [w, h] = fit(colW, prev.top - gap - (close.bottom + gap));
        top = close.bottom + gap + (prev.top - gap - (close.bottom + gap) - h) / 2;
        left = next.right - w;
      } else if (matchMedia("(max-width: 899px), (max-width: 999px) and (max-height: 520px) and (orientation: landscape)").matches) {
        const pad = parseFloat(getComputedStyle(viewer).paddingRight) || 20;
        const floor = viewer.querySelector("[data-viewer-prev]").getBoundingClientRect().top - rem;
        for (let k = 0; k < 3; k++) {                     // making room beside the details moves them; settle
          top = viewer.querySelector(".viewer-count").getBoundingClientRect().top;
          [w, h] = fit(v.width * 0.31, floor - top);
          viewer.style.setProperty("--nav-room", `${Math.round(w + rem)}px`);
        }
        top = viewer.querySelector(".viewer-count").getBoundingClientRect().top;
        left = v.right - pad - w;
      } else {
        viewer.style.removeProperty("--nav-room");
        const info = viewer.querySelector(".viewer-info").getBoundingClientRect();
        top = zoomBtn.getBoundingClientRect().bottom + 2.25 * rem;
        [w, h] = fit(Math.min(info.width, 10 * rem), Math.min(v.bottom - 3 * rem - top, 12 * rem));
        left = info.left;
      }
      Object.assign(nav.style, { width: `${w.toFixed(1)}px`, height: `${h.toFixed(1)}px`, left: `${(left - v.left).toFixed(1)}px`, top: `${(top - v.top).toFixed(1)}px` });
    };
    addEventListener("resize", placeNav);
    offs.push(() => removeEventListener("resize", placeNav));
    const applyZoom = () => {
      if (!zoom) { vImg.style.transform = ""; return; }
      cx = lerp(cx, zx, reduced ? 1 : 0.14); cy = lerp(cy, zy, reduced ? 1 : 0.14);
      // At least far enough in to cover the frame both ways, so the picture moves inside the frame and
      // never slides about with empty margins (Michael, 2026-10-13: a tall work in a wide tablet frame was
      // narrower than the frame at 2.6x).
      const f = fig.getBoundingClientRect();
      const s = Math.max(2.6, (f.width + 2) / Math.max(1, vImg.offsetWidth), (f.height + 2) / Math.max(1, vImg.offsetHeight));
      const iw = vImg.offsetWidth * s, ih = vImg.offsetHeight * s;
      const ox = vImg.offsetLeft, oy = vImg.offsetTop;
      const tx = -(iw - f.width) * cx - ox, ty = -(ih - f.height) * cy - oy;
      vImg.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${s})`;
      if (nav?._W) {
        // Where you are on the work, edge to edge: the same place the zoomed view is showing.
        // The whole dot stays inside the outline: at the work's edge it rests against the line.
        const dot = navSvg.querySelector(".viewer-nav-dot"), W = nav._W, H = nav._H, r = +dot.getAttribute("r") || 11;
        let px = cx * W, py = cy * H;
        if (!nav._poly) { const R = W / 2, k = Math.max(0, (R - r) / R); px = R + (px - R) * k; py = H / 2 + (py - H / 2) * k; }
        else if (nav._poly.length === 4) { px = r + cx * Math.max(W - 2 * r, 0); py = r + cy * Math.max(H - 2 * r, 0); }
        else {
          const gx = nav._poly.reduce((a, q) => a + q[0], 0) / nav._poly.length, gy = nav._poly.reduce((a, q) => a + q[1], 0) / nav._poly.length;
          const k = Math.max(0, 1 - (r * 1.4) / (Math.min(W, H) / 2)); px = gx + (px - gx) * k; py = gy + (py - gy) * k;
        }
        dot.setAttribute("cx", px.toFixed(2)); dot.setAttribute("cy", py.toFixed(2));
      }
      zraf = requestAnimationFrame(applyZoom);
    };
    const setZoom = (on) => {
      const now = performance.now();
      if (on && !zAt) { zAt = works[current]; zT0 = now; }
      else if (!on && zAt) { if (now - zT0 >= 300) track("artwork_zoom", { ...workProps(zAt), seconds: tenths(now - zT0) }); zAt = null; }
      zoom = on; viewer.classList.toggle("is-zoom", on);
      zoomBtn.classList.toggle("is-on", on); zoomBtn.setAttribute("aria-pressed", String(on));   // lit while zoomed
      if (on) placeNav(); else viewer.style.removeProperty("--nav-room");
      zoomBtn.textContent = on ? "Zoom Out" : "Zoom to Inspect";
      cancelAnimationFrame(zraf);
      if (on) zraf = requestAnimationFrame(applyZoom); else vImg.style.transform = "";
    };
    zoomBtn.addEventListener("click", () => setZoom(!zoom));
    // Keep a point (shares of the work, 0..1) inside the work's own shape: a circle, or its outline.
    const inShape = (fx, fy) => {
      if (!nav?._W) return [clamp(fx, 0, 1), clamp(fy, 0, 1)];
      const W = nav._W, H = nav._H; let x = fx * W, y = fy * H;
      if (!nav._poly) {                                   // round: onto the circle if outside it
        const r = W / 2, dx = x - r, dy = y - H / 2, d = Math.hypot(dx, dy);
        if (d > r) { x = r + (dx / d) * r; y = H / 2 + (dy / d) * r; }
      } else {
        const P = nav._poly; let inside = false;
        for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
          if ((P[i][1] > y) !== (P[j][1] > y) && x < ((P[j][0] - P[i][0]) * (y - P[i][1])) / (P[j][1] - P[i][1]) + P[i][0]) inside = !inside;
        }
        if (!inside) {                                    // onto the nearest point of the outline
          let best = null, bd = Infinity;
          for (let i = 0; i < P.length; i++) {
            const [ax, ay] = P[i], [bx, by] = P[(i + 1) % P.length], ex = bx - ax, ey = by - ay;
            const t = clamp(((x - ax) * ex + (y - ay) * ey) / (ex * ex + ey * ey || 1), 0, 1), px = ax + ex * t, py = ay + ey * t;
            const dd = (px - x) ** 2 + (py - y) ** 2; if (dd < bd) { bd = dd; best = [px, py]; }
          }
          [x, y] = best;
        }
      }
      return [clamp(x / W, 0, 1), clamp(y / H, 0, 1)];
    };
    // On the picture: measured against the painting itself (not the empty margins beside it).
    const explore = (e) => {
      if (!zoom) return;
      const f = fig.getBoundingClientRect();
      const left = f.left + vImg.offsetLeft, top = f.top + vImg.offsetTop;
      [zx, zy] = inShape((e.clientX - left) / vImg.offsetWidth, (e.clientY - top) / vImg.offsetHeight);
    };
    fig?.addEventListener("pointermove", explore);
    fig?.addEventListener("pointerdown", explore);
    // A click (or a tap) on the picture zooms in, at that point (Michael, 2026-10-13). While zoomed, a
    // click or tap only moves the view; only Zoom Out (lit white while zoomed) leaves, or Escape and Z.
    fig?.addEventListener("click", (e) => { if (!zoom) { setZoom(true); explore(e); } });
    // On the map: point at (or drag across) the shape to steer the view; the dot stays inside the shape,
    // and stays where you last were when you leave it.
    const steer = (e) => {
      if (!zoom || !nav?._W) return;
      if (e.pointerType === "mouse" || e.buttons || e.type === "pointerdown") {
        const r = nav.getBoundingClientRect();
        [zx, zy] = inShape((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
      }
    };
    nav?.addEventListener("pointerdown", (e) => { if (!zoom) return; nav.setPointerCapture?.(e.pointerId); steer(e); });
    nav?.addEventListener("pointermove", steer);

    const show = (i, via) => {
      current = (i + total) % total;
      setZoom(false);
      const w = works[current];
      viewerMark(w);
      track("artwork_open", { ...workProps(w), via });
      navShape(w);
      const small = w.querySelector("img");
      vImg.src = small.currentSrc || small.getAttribute("src") || small.dataset.src || w.dataset.lg; vImg.alt = small.alt;
      const big = new Image(); big.onload = () => { if (works[current] === w) vImg.src = big.src; }; big.src = w.dataset.lg;
      viewer.querySelector("[data-viewer-num]").textContent = pad(current + 1);
      viewer.querySelector("[data-viewer-chapter]").textContent = w.closest("[data-chapter]").dataset.chapter;
      viewer.querySelector("[data-viewer-title]").textContent = w.dataset.title;
      let parts = null; try { parts = JSON.parse(w.dataset.parts || "null"); } catch { parts = null; }
      viewer.querySelector("[data-viewer-meta]").textContent = parts
        ? parts.map((q) => `${q.name} · ${q.size} · ${q.medium}`).join("\n")
        : `${w.dataset.size} · ${w.dataset.medium}`;
      const buy = viewer.querySelector("[data-viewer-buy]"); buy.innerHTML = "";
      if (w.dataset.buy) { const a = document.createElement("a"); a.className = "pill"; a.href = w.dataset.buy; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Available — view in shop"; buy.append(a); }
    };
    const openViewer = (i) => { inViewer = true; wallMark(null); viewer.hidden = false; lenis?.stop(); root.style.overflow = "hidden"; show(i, "wall"); viewer.querySelector("[data-viewer-close]").focus({ preventScroll: true }); };
    const closeViewer = () => { setZoom(false); viewerMark(null); inViewer = false; wallMark(lastBest); viewer.hidden = true; lenis?.start(); root.style.overflow = ""; works[current]?.querySelector(".work-open").focus({ preventScroll: true }); };
    works.forEach((w, i) => w.querySelector(".work-open").addEventListener("click", () => openViewer(i)));
    viewer?.querySelector("[data-viewer-close]").addEventListener("click", closeViewer);
    viewer?.querySelector("[data-viewer-prev]").addEventListener("click", () => show(current - 1, "arrow"));
    viewer?.querySelector("[data-viewer-next]").addEventListener("click", () => show(current + 1, "arrow"));
    const keys = (e) => {
      if (!viewer || viewer.hidden || document.querySelector("[data-modal]:not([hidden])")) return;
      if (e.key === "Escape") { if (zoom) setZoom(false); else closeViewer(); }
      if (zoom && ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        zx = clamp(zx + (e.key === "ArrowRight") * 0.1 - (e.key === "ArrowLeft") * 0.1, 0, 1);
        zy = clamp(zy + (e.key === "ArrowDown") * 0.1 - (e.key === "ArrowUp") * 0.1, 0, 1);
        return;
      }
      if (e.key === "ArrowRight") show(current + 1, "key");
      if (e.key === "ArrowLeft") show(current - 1, "key");
      if (e.key.toLowerCase() === "z") setZoom(!zoom);
    };
    addEventListener("keydown", keys);
    offs.push(() => {
      removeEventListener("keydown", keys); cancelAnimationFrame(zraf); root.style.overflow = ""; root.dataset.ground = "paper";
      ["--edge-top", "--edge-bottom", "--edge-fg"].forEach((k) => root.style.removeProperty(k));
      themeMeta?.setAttribute("content", "#fffdf8");
    });
    // Visits: a hidden tab stops the clocks (and sends what it has); leaving the gallery sends the rest.
    const vis = () => {
      if (document.hidden) { wallFlush(true); wallAt = null; if (inViewer) { const w = vAt; viewerMark(null, true); vAt = w; vT0 = performance.now(); } }
      else if (inViewer) vT0 = performance.now(); else wallMark(lastBest);
    };
    document.addEventListener("visibilitychange", vis);
    offs.push(() => { document.removeEventListener("visibilitychange", vis); if (inViewer) viewerMark(null, true); wallFlush(true); });
    offs.push(charger("gallery"));
    return () => offs.forEach((f) => f());
  }

  // ---------------------------------------------------------------- boot
  const boot = () => {
    root.dataset.page = root.dataset.page || pageKey(location.href) || "index";
    history.replaceState({ key: root.dataset.page }, "");
    initPage(root.dataset.page);
    pageview(root.dataset.page);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();

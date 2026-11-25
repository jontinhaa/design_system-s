const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// The Adobe Fonts stylesheet may load without blocking the page (the WordPress theme does that), and then
// document.fonts.ready can resolve before Neue Haas is even known. This waits for its faces to be declared
// and for the two weights the site uses to load; after four seconds it stops waiting
const fontsReady = new Promise((resolve) => {
  const started = performance.now();
  const declared = () => [...document.fonts].some((face) => /neue-haas-grotesk-display/i.test(face.family));
  const check = () => {
    if (declared()) {
      Promise.all(['400', '700'].map((weight) => document.fonts.load(`${weight} 1em "neue-haas-grotesk-display"`)))
        .catch(() => {})
        .then(() => document.fonts.ready)
        .then(resolve);
    } else if (performance.now() - started > 4000) resolve();
    else setTimeout(check, 30);
  };
  check();
});

// The hero's entrance is held until the 3D Upwork badge is drawn, so that everything comes in together
// (heroGo releases it; css/main.css holds it). It then takes about two and a half seconds, and until it is
// over nothing in the hero answers to the scroll. heroSettled() says when that moment has passed
const HERO_ENTRANCE = 2400; // ms from the release
const HERO_MAX_WAIT = 1200; // ms from the start of the page load: go anyway if the badge is not ready by then
let heroGoAt = null;
// While the cover is up it holds the entrance back; it releases it as it lifts
let heroHold = document.documentElement.classList.contains('is-loading');
const heroGo = () => {
  if (heroHold || heroGoAt !== null) return;
  heroGoAt = performance.now();
  const hero = document.querySelector('.hero');
  if (hero) hero.classList.add('is-go');
};
const heroSettled = () => heroGoAt !== null && performance.now() >= heroGoAt + HERO_ENTRANCE;
setTimeout(heroGo, Math.max(0, HERO_MAX_WAIT - performance.now()));

// Cover: the page stays hidden until the hero is really ready (the name's typeface, the first poster of
// the slot and the four 3D badges, each one actually drawn), so nothing shows half-made. The bar and its
// count only become visible if this takes more than half a second (css/main.css)
(() => {
  const root = document.documentElement;
  const loader = document.querySelector('.loader');
  if (!loader || !root.classList.contains('is-loading')) return;

  const count = loader.querySelector('[data-loader-count]');
  const bar = loader.querySelector('[data-loader-bar]');
  const started = performance.now();
  const MAX_TIME = 6000; // never keep anyone waiting longer than this

  const drawn = (id) => new Promise((resolve) => {
    const check = () => {
      const ready = window.badges3d && window.badges3d.drawn.has(id);
      // No 3D after a while (no WebGL, or the library did not load): the flat badges will do
      const givenUp = !window.badges3d && performance.now() - started > 1800;
      return ready || givenUp ? resolve() : setTimeout(check, 40);
    };
    check();
  });
  const poster = document.querySelector('.slot__frame img');
  const tasks = [
    fontsReady,
    poster ? poster.decode().catch(() => {}) : null,
    // Only the badges this screen shows (a phone has the Upwork one alone)
    ...[['upwork', '.hero__feature'], ['wordpress', '.badge--wordpress'], ['elementor', '.badge--elementor'], ['figma', '.badge--figma']]
      .filter(([, selector]) => {
        const el = document.querySelector(selector);
        return el && el.getClientRects().length > 0;
      })
      .map(([id]) => drawn(id)),
  ];
  let done = 0;
  tasks.forEach((task) => Promise.resolve(task).then(() => (done += 1)));

  let shown = 0;
  let finished = false;
  const paint = () => {
    count.textContent = String(Math.round(shown));
    bar.style.transform = `scaleX(${(shown / 100).toFixed(3)})`;
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    shown = 100;
    paint();
    root.classList.remove('is-loading');
    loader.classList.add('is-done');
    heroHold = false;
    heroGo();
    setTimeout(() => loader.remove(), 600);
  };
  // The number and the bar are only the display; timers decide when to lift, so a slow tab cannot leave it stuck
  const tick = () => {
    if (finished) return;
    shown += ((done / tasks.length) * 100 - shown) * 0.16;
    paint();
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  Promise.all(tasks).then(() => {
    // If the bar is on screen, let it be seen reaching the end before lifting
    const visible = performance.now() - started > 700;
    setTimeout(finish, visible ? 350 : 60);
  });
  setTimeout(finish, MAX_TIME);
})();

// Posters ahead of the scroll: once the hero has appeared, the images further down the page are fetched and
// decoded one at a time in the background, so none of them has to be loaded or decoded in the middle of
// a scroll. Nothing is hidden or delayed for it
(() => {
  const images = [...document.querySelectorAll('main img[loading="lazy"]')];
  if (!images.length) return;
  // In a quiet moment, but never waiting more than a third of a second for one
  const idle = (run) => (window.requestIdleCallback ? window.requestIdleCallback(run, { timeout: 300 }) : setTimeout(run, 120));
  const next = () => {
    const img = images.shift();
    if (!img) return;
    img.loading = 'eager';
    img.decode().catch(() => {}).then(() => idle(next));
  };
  const start = () => (heroSettled() || !document.querySelector('.hero') ? idle(next) : setTimeout(start, 200));
  start();
})();

// Hero slideshow: cycles the project posters inside the name
(() => {
  const frame = document.querySelector('[data-slideshow]');
  if (!frame) return;

  const slides = [...frame.querySelectorAll('img')];
  const INTERVAL = 2800;
  let index = 0;
  let timer = null;

  const show = (next) => {
    slides.forEach((img) => img.classList.remove('is-prev', 'is-entering'));
    slides[index].classList.replace('is-active', 'is-prev');
    slides[next].classList.add('is-active', 'is-entering');
    index = next;
  };

  const start = () => {
    if (timer || reduceMotion.matches || document.hidden) return;
    timer = setInterval(() => show((index + 1) % slides.length), INTERVAL);
  };

  const stop = () => {
    clearInterval(timer);
    timer = null;
  };

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  reduceMotion.addEventListener('change', () => (reduceMotion.matches ? stop() : start()));
  start();
})();

// Hero badges: 3D cushions that live on a figure-of-eight around the name,
// plus one large Upwork cushion that stays in the upper right and turns with the scroll.
// Each one has a home on the path and behaves like a small physical object:
//   - it floats gently in place and turns to face the pointer
//   - the pointer pushes it aside and it springs back
//   - it can be grabbed and dropped anywhere, and it stays where it was left (a click flips it)
//   - scrolling rolls all of them along the path with inertia, in front of the letters
//     on one strand and behind them on the other, and draws any moved badge back onto the path
(() => {
  const stage = document.querySelector('[data-badges]');
  const name = stage && stage.querySelector('.hero__name');
  if (!name) return;
  const hero = stage;

  const UPWORK_URL = (window.DE && window.DE.upwork) || 'https://www.upwork.com/freelancers/~014831123217f75a25';
  // `rest` is where each badge sits on the path (degrees) when nothing is moving.
  // All three rest on the half of the path that passes in front of the letters (see FRONT), so on load
  // none of them is behind the name: WordPress and Elementor sit on its top edge and only just overlap it,
  // Figma floats above it. Scrolling is what first sends one behind the letters
  const BADGES = [
    { id: 'wordpress', rest: 104 },
    { id: 'elementor', rest: -12 },
    { id: 'figma', rest: 160 },
  ];
  const narrow = window.matchMedia('(max-width: 700px)');
  const EDGE_LAYERS = 21;
  const LOGO_LAYERS = 6;

  const TAU = Math.PI * 2;
  const REST = 0; // resting position on the path, in laps
  const FRONT = (18 / 360) * TAU; // the half in front of the letters runs from -18 to 162 degrees
  // Laps travelled on load before settling: a short drift into place. Any longer and the badges would
  // cross the letters on their way in; they arrive around the name, and only the scroll takes them over it
  const INTRO = 0.03;
  const PATH_FRICTION = 2.4; // how quickly a scroll push dies out (1/s)
  const WHEEL_GAIN = 0.0005; // lap speed added per pixel of wheel
  const SPRING = 110; // pull back to the home position
  const DAMPING = 9; // low enough to overshoot a little
  const PUSH = 5200; // strength of the pointer's push
  const TILT = 28; // max degrees a slab turns towards the pointer
  const HOLD_RELEASE = 14; // how fast scrolling frees a dropped badge (per lap travelled)
  const GLIDE = 5; // friction on a dropped badge after it is thrown (1/s)

  const face = (id, side) => {
    const logos = Array.from({ length: LOGO_LAYERS }, (_, l) =>
      `<svg class="coin__logo" style="--l:${l}" viewBox="0 0 24 24" focusable="false"><use href="#mark-${id}"/></svg>`
    ).join('');
    return `<span class="coin__face coin__face--${side}">${logos}</span>`;
  };

  const cushion = (id) => {
    const edges = Array.from({ length: EDGE_LAYERS }, (_, i) =>
      `<span class="coin__edge" style="--i:${i}"></span>`
    ).join('');
    return `<span class="coin">${edges}${face(id, 'front')}${face(id, 'back')}</span>`;
  };

  // The large Upwork cushion: it does not travel and it ignores the scroll. It floats in place, sways slowly
  // on its own and leans a little towards the pointer
  const featureBox = stage.querySelector('[data-feature]');
  let feature = null;
  if (featureBox) {
    const arrow = '<svg viewBox="0 0 16 16" focusable="false"><path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    featureBox.innerHTML = `<a href="${UPWORK_URL}" target="_blank" rel="noopener" tabindex="-1" draggable="false">${cushion('upwork')}</a><span class="cursor-tag">Visit my profile ${arrow}</span>`;
    feature = { coin: featureBox.querySelector('.coin'), rx: -8, ry: -24, hovered: false, hover: 0 };

    // Hover: the badge swells a little and squares up to the viewer, and a "Visit my profile" tag follows the pointer
    const link = featureBox.querySelector('a');
    const follow = (event) => {
      const box = featureBox.getBoundingClientRect();
      featureBox.style.setProperty('--tag-x', `${event.clientX - box.left}px`);
      featureBox.style.setProperty('--tag-y', `${event.clientY - box.top}px`);
    };
    link.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      follow(event);
      feature.hovered = true;
      featureBox.classList.add('is-hovered');
    });
    link.addEventListener('pointermove', follow);
    link.addEventListener('pointerleave', () => {
      feature.hovered = false;
      featureBox.classList.remove('is-hovered');
    });
  }
  let featureShown = false;
  let featureWarm = 0; // frames since the 3D badge was first drawn
  const FEATURE_REST = -18; // resting angle, degrees
  const FEATURE_MAX = 45; // it never turns further than this to either side

  const turnFeature = (dt) => {
    if (!feature) return;
    let targetRx = -8;
    let lean = 0;
    if (pointer.active) {
      const box = featureBox.getBoundingClientRect();
      const px = pointer.x + stageBox.left;
      const py = pointer.y + stageBox.top;
      lean = clamp((px - (box.left + box.width / 2)) / (box.width * 3), -1, 1) * 14;
      targetRx = -clamp((py - (box.top + box.height / 2)) / (box.height * 3), -1, 1) * 14;
    }
    const follow = Math.min(1, dt * 6);
    feature.rx += (targetRx - feature.rx) * follow;
    feature.ry += (lean - feature.ry) * follow;
    feature.hover += ((feature.hovered ? 1 : 0) - feature.hover) * follow;
    const calm = 1 - feature.hover * 0.85; // hovered: almost square to the viewer, so the mark reads as a button
    // On its own it sways slowly from side to side and nods a little, so it draws the eye without any input
    const time = performance.now() / 1000;
    const sway = Math.sin(time * 0.42) * 12 * calm;
    const nod = Math.cos(time * 0.31) * 5 * calm;
    // Scrolling does not touch it. Rest angle, sway and pointer lean are squeezed through tanh
    // so it never turns past FEATURE_MAX
    const turn = FEATURE_MAX * Math.tanh((FEATURE_REST * calm + sway + feature.ry) / FEATURE_MAX);
    if (!featureBox || !featureBox.classList.contains('is-3d')) feature.coin.style.transform = `rotateX(${feature.rx + nod}deg) rotateY(${turn}deg)`;
    if (window.badges3d) window.badges3d.draw('upwork', feature.rx + nod, turn);
  };

  const badges = BADGES.map(({ id, rest }, n) => {
    const el = document.createElement('div');

    el.className = `badge badge--${id}`;
    el.setAttribute('aria-hidden', 'true');
    el.style.setProperty('--n', n);
    el.innerHTML = `<span class="badge__pop">${cushion(id)}</span>`;
    stage.append(el);

    return {
      el,
      coin: el.querySelector('.coin'),
      id,
      rest,
      phase: 0,
      x: 0, y: 0, // current centre, relative to the stage
      ox: 0, oy: 0, vx: 0, vy: 0, // offset from home and its velocity
      rx: -10, ry: 0, // tilt
      spin: 0, spinTarget: 0, spinV: 0, // flip on click
      dragging: false, grabX: 0, grabY: 0, moved: 0,
      hold: 0, // 1 = stays where it was dropped, 0 = fully back on the path
      under: 0, // 0 = in front of the letters, 1 = fully behind them
      size: 0,
    };
  });

  // The orange copy of each word, and where its box starts in stage coordinates (set in measure)
  const tints = [...name.querySelectorAll('.hero__ink--tint')].map((el) => ({ el, x: 0, y: 0 }));
  // Moves the mask of each orange copy onto the badges, so the letters are orange exactly over them
  // The square is as large as the badge is at that moment: nothing while the badge has not been drawn in 3D
  // or has not popped in yet, growing with it as it appears
  const pops = badges.map((item) => item.el.querySelector('.badge__pop'));
  // Once a badge has popped in, its scale is 1 for good: no need to ask the browser for it again (reading the
  // computed style of an element every frame made the browser recalculate the styles of the whole hero)
  const popped = badges.map(() => false);
  pops.forEach((pop, k) => pop.addEventListener('animationend', () => { popped[k] = true; }, { once: true }));
  // The last values written, so a frame only touches the masks that actually changed
  const written = new Map();
  const write = (el, key, value) => {
    const id = el.dataset.ink || (el.dataset.ink = String(written.size));
    if (written.get(id + key) === value) return;
    written.set(id + key, value);
    el.style.setProperty(key, value);
  };
  const paintInk = () => {
    const sizes = badges.map((item, k) => {
      // Only a badge that is behind the letters prints its orange on them, and the square grows from
      // nothing as the badge goes under, so the colour does not snap on
      if (!item.under) return 0;
      const waiting3d = item.el.classList.contains('is-3d') && !(window.badges3d && window.badges3d.drawn.has(item.id));
      if (waiting3d) return 0;
      let scale = 1;
      if (!popped[k]) {
        const matrix = getComputedStyle(pops[k]).transform;
        scale = matrix && matrix !== 'none' ? new DOMMatrixReadOnly(matrix).a : 1;
      }
      return item.size * Math.max(0, Math.min(1.2, scale)) * item.under;
    });
    tints.forEach((tint) => {
      badges.forEach((item, k) => {
        const half = sizes[k] / 2;
        write(tint.el, `--s${k}`, `${sizes[k].toFixed(1)}px`);
        // A square of no size can stay where it is
        if (sizes[k]) write(tint.el, `--m${k}`, `${(item.x - half - tint.x).toFixed(1)}px ${(item.y - half - tint.y - lift()).toFixed(1)}px`);
      });
    });
  };

  // Path geometry, measured from the name and re-measured on resize
  let cx = 0;
  let cy = 0;
  let a = 0;
  let b = 0;
  let size = 0;

  // Fit the name to the width of the hero: scale the font until the widest line fills it exactly
  const fit = () => {
    const available = name.clientWidth;
    // Parts share a row when one's middle falls within the other's height (the slot is shorter than the words)
    const lines = [];
    [...name.children].forEach((part) => {
      const rect = part.getBoundingClientRect();
      const middle = (rect.top + rect.bottom) / 2;
      const line = lines.find((entry) => middle > entry.top && middle < entry.bottom);
      if (!line) return lines.push({ top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right });
      line.left = Math.min(line.left, rect.left);
      line.right = Math.max(line.right, rect.right);
    });
    const widest = Math.max(...lines.map((line) => line.right - line.left));
    if (!widest || !available) return;
    const next = parseFloat(getComputedStyle(name).fontSize) * (available / widest);
    name.style.setProperty('--fit', `${Math.floor(next * 100) / 100}px`);
  };

  const measure = () => {
    fit();
    fit(); // a second pass settles any wrapping the first one changed
    const box = stage.getBoundingClientRect();
    const rect = name.getBoundingClientRect();
    const fontSize = parseFloat(getComputedStyle(name).fontSize);

    badges.forEach(({ el }) => (el.style.fontSize = `${fontSize}px`));
    badges.forEach((item) => (item.size = item.el.offsetWidth));
    size = Math.max(...badges.map((item) => item.size)); // the path leaves room for the largest one

    // The figure-of-eight is centred on the top edge of the name: its lower arcs dip into the letters,
    // its upper arcs float in the free space above them
    cx = rect.left - box.left + rect.width / 2;
    cy = rect.top - box.top - lift() + fontSize * 0.12; // measured as if the name were at rest
    a = Math.min(rect.width / 2 - size * 0.3, window.innerWidth / 2 - size * 0.62);
    b = fontSize * (narrow.matches ? 0.62 : 0.5);
    badges.forEach((item) => (item.phase = (item.rest / 360) * TAU));

    tints.forEach((tint) => {
      const word = tint.el.parentElement.getBoundingClientRect();
      tint.x = word.left - box.left + tint.el.offsetLeft;
      tint.y = word.top - box.top - lift() + tint.el.offsetTop;
    });
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  // How far the scroll scene (below) has raised the name, in pixels; the path travels with it
  const lift = () => window.heroLift || 0;

  // Pointer position in stage coordinates
  const pointer = { x: 0, y: 0, active: false, vx: 0, vy: 0 };
  let stageBox = stage.getBoundingClientRect();

  let progress = REST - INTRO; // laps
  let pathV = INTRO * PATH_FRICTION; // decays to exactly REST
  let last = null;
  let running = false;
  let rolled = false; // the visitor has set the path in motion at least once

  const render = (item, depth, now) => {
    const lift = item.dragging ? 0.1 : 0;
    const scale = 1 + depth * 0.12 + lift;

    item.el.style.transform = `translate3d(${item.x - item.size / 2}px, ${item.y - item.size / 2}px, 0) scale(${scale})`;
    // In front of the letters on one strand, behind them on the other. Until the visitor has scrolled,
    // and while a badge is held or lies where it was dropped, it is always in front
    const front = !rolled || depth > 0 || item.dragging || item.hold > 0.5;
    item.el.classList.toggle('is-front', front);
    item.under = front ? 0 : clamp(-depth * 4, 0, 1);
    // The CSS cushion only turns while it is the one on show; once the 3D one is drawn it is hidden
    if (!item.el.classList.contains('is-3d')) item.coin.style.transform = `rotateX(${item.rx}deg) rotateY(${item.ry + item.spin}deg)`;
    if (window.badges3d) window.badges3d.draw(item.id, item.rx, item.ry + item.spin);
  };

  const step = (now) => {
    const dt = last === null ? 0.016 : Math.min(Math.max((now - last) / 1000, 0.001), 0.05);
    const time = now / 1000;
    last = now;
    stageBox = stage.getBoundingClientRect();
    const heroBottom = hero.getBoundingClientRect().bottom;

    progress += pathV * dt;
    pathV *= Math.exp(-PATH_FRICTION * dt);

    badges.forEach((item) => {
      const t = progress * TAU + item.phase;
      const depth = Math.sin(t + FRONT);
      const homeX = cx + a * Math.cos(t) + Math.cos(time * 0.6 + item.phase) * item.size * 0.03;
      const homeY = cy + lift() + b * Math.sin(2 * t) + Math.sin(time * 0.9 + item.phase * 1.7) * item.size * 0.06;

      if (item.dragging) {
        const nextX = pointer.x - item.grabX - homeX;
        const nextY = pointer.y - item.grabY - homeY;
        item.vx = (nextX - item.ox) / dt;
        item.vy = (nextY - item.oy) / dt;
        item.ox = nextX;
        item.oy = nextY;
      } else {
        // The pointer pushes the slab away when it gets close
        if (pointer.active) {
          const dx = homeX + item.ox - pointer.x;
          const dy = homeY + item.oy - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          const reach = item.size * 1.35;
          if (distance < reach) {
            const force = (1 - distance / reach) ** 2 * PUSH;
            item.vx += (dx / distance) * force * dt;
            item.vy += (dy / distance) * force * dt;
          }
        }
        // A dropped badge stays put until scrolling sets the path in motion, which gradually frees it
        item.hold = Math.max(0, item.hold - Math.abs(pathV) * dt * HOLD_RELEASE);
        // ...and a spring brings it home, as strongly as the hold allows
        const pull = SPRING * (1 - item.hold);
        const drag = DAMPING * (1 - item.hold) + GLIDE * item.hold;
        item.vx += (-pull * item.ox - drag * item.vx) * dt;
        item.vy += (-pull * item.oy - drag * item.vy) * dt;
        item.ox += item.vx * dt;
        item.oy += item.vy * dt;
      }

      // Keep it inside the visible hero so a dropped badge can always be picked up again
      const half = item.size / 2;
      const x = clamp(homeX + item.ox, half - stageBox.left, window.innerWidth - half - stageBox.left);
      const y = clamp(homeY + item.oy, half - stageBox.top, heroBottom - half - stageBox.top);
      if (x !== homeX + item.ox) item.vx = 0;
      if (y !== homeY + item.oy) item.vy = 0;
      item.ox = x - homeX;
      item.oy = y - homeY;
      item.x = x;
      item.y = y;

      // Turn towards the pointer; lean into the direction of travel
      let targetRy = Math.sin(time * 0.5 + item.phase) * 12;
      let targetRx = -10;
      if (pointer.active) {
        targetRy = clamp((pointer.x - item.x) / (size * 5), -1, 1) * TILT;
        targetRx = -clamp((pointer.y - item.y) / (size * 5), -1, 1) * TILT;
      }
      targetRy += clamp(item.vx * 0.03 + pathV * 160, -30, 30);
      targetRx -= clamp(item.vy * 0.03, -24, 24);
      const follow = Math.min(1, dt * 9);
      item.rx += (targetRx - item.rx) * follow;
      item.ry += (targetRy - item.ry) * follow;

      // Flip spring
      item.spinV += ((item.spinTarget - item.spin) * 70 - item.spinV * 11) * dt;
      item.spin += item.spinV * dt;

      render(item, depth, now);
    });

    paintInk();
    turnFeature(dt);
    // The Upwork badge shows once its 3D version is drawn (or after a moment, if there is no WebGL),
    // so it never appears as the flat fallback and then changes
    if (featureBox && !featureShown) {
      const drawn = window.badges3d && window.badges3d.ready;
      // A few clean frames after the first real draw: by then the shaders are compiled and the canvas is full
      if (drawn) featureWarm += 1;
      if (featureWarm > 4 || now > 2000) {
        featureShown = true;
        featureBox.classList.add('is-ready');
        heroGo(); // the rest of the entrance was waiting for this
      }
    }

    if (running) requestAnimationFrame(step);
  };

  const place = () => {
    badges.forEach((item) => {
      const t = REST * TAU + item.phase;
      item.x = cx + a * Math.cos(t);
      item.y = cy + b * Math.sin(2 * t);
      item.ry = -22;
      render(item, Math.sin(t + FRONT));
    });
    paintInk();
    if (feature) feature.coin.style.transform = `rotateX(-8deg) rotateY(${FEATURE_REST}deg)`;
    if (featureBox) featureBox.classList.add('is-ready');
    heroGo();
  };

  const refresh = () => {
    measure();
    if (!running) place();
  };
  new ResizeObserver(refresh).observe(stage);
  fontsReady.then(refresh);

  measure();

  if (reduceMotion.matches) {
    place();
    return;
  }

  // Pointer tracking
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX - stageBox.left;
    pointer.y = event.clientY - stageBox.top;
    pointer.active = true;
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => (pointer.active = false));
  window.addEventListener('pointerup', (event) => {
    if (event.pointerType !== 'mouse') pointer.active = false;
  });

  // Scrolling rolls the badges along the path
  let scrollY = window.scrollY;
  let lastWheel = 0;
  window.addEventListener('wheel', (event) => {
    if (!heroSettled()) return;
    lastWheel = performance.now();
    rolled = true;
    pathV += clamp(event.deltaY, -240, 240) * WHEEL_GAIN;
  }, { passive: true });
  window.addEventListener('scroll', () => {
    const delta = window.scrollY - scrollY;
    scrollY = window.scrollY;
    if (!heroSettled()) return;
    rolled = true;
    if (performance.now() - lastWheel > 200) pathV += clamp(delta, -240, 240) * WHEEL_GAIN;
  }, { passive: true });

  // Grab, throw, click
  badges.forEach((item) => {
    const { el } = item;

    el.addEventListener('pointerdown', (event) => {
      pointer.x = event.clientX - stageBox.left;
      pointer.y = event.clientY - stageBox.top;
      pointer.active = true;
      item.dragging = true;
      item.moved = 0;
      item.grabX = pointer.x - item.x;
      item.grabY = pointer.y - item.y;
      el.classList.add('is-dragging');
      el.setPointerCapture(event.pointerId);
    });

    el.addEventListener('pointermove', (event) => {
      if (item.dragging) item.moved += Math.abs(event.movementX) + Math.abs(event.movementY);
    });

    const release = () => {
      if (!item.dragging) return;
      item.dragging = false;
      item.vx = clamp(item.vx, -1600, 1600);
      item.vy = clamp(item.vy, -1600, 1600);
      if (item.moved > 6) item.hold = 1; // it was moved: leave it where it lands
      el.classList.remove('is-dragging');
    };
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);

    el.addEventListener('click', (event) => {
      if (item.moved > 6) {
        event.preventDefault(); // it was a drag, not a click
        return;
      }
      item.spinTarget += 360;
    });
  });

  // Only animate while the hero is on screen and the tab is visible
  let onScreen = true;
  const sync = () => {
    const shouldRun = onScreen && !document.hidden;
    if (shouldRun && !running) {
      running = true;
      last = null;
      requestAnimationFrame(step);
    } else if (!shouldRun) {
      running = false;
    }
  };
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  }).observe(stage);
  document.addEventListener('visibilitychange', sync);
  sync();
})();

// Reviews: the words of each quote start dimmed and light up as they cross the reading line,
// about two thirds of the way down the screen, so each review is read as it is scrolled
(() => {
  const section = document.querySelector('[data-reviews]');
  if (!section || reduceMotion.matches) return;

  const READING_LINE = 0.72; // fraction of the viewport height

  const quotes = [...section.querySelectorAll('[data-reveal]')].map((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    const spans = words.map((word, i) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = word;
      el.append(span, i < words.length - 1 ? ' ' : '');
      return span;
    });
    return { el, spans, lit: 0 };
  });
  section.classList.add('is-reading');

  let queued = false;
  const update = () => {
    queued = false;
    const line = window.innerHeight * READING_LINE;
    quotes.forEach((quote) => {
      const box = quote.el.getBoundingClientRect();
      const read = Math.min(1, Math.max(0, (line - box.top) / box.height));
      const lit = Math.round(read * quote.spans.length);
      if (lit === quote.lit) return;
      const row = quote.el.matches('.review__quote') && quote.el.closest('li'); // absent on the case pages
      if (row) row.classList.toggle('is-read', lit > 0);
      const [from, to] = lit > quote.lit ? [quote.lit, lit] : [lit, quote.lit];
      for (let i = from; i < to; i++) quote.spans[i].classList.toggle('is-lit', lit > quote.lit);
      quote.lit = lit;
    });
  };
  const request = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
})();

// Section lines: each section opens with two bold words fitted edge to edge, like the name in the hero.
// The words rise out of their mask the first time the line comes into view
(() => {
  const lines = [...document.querySelectorAll('[data-fit]')];
  if (!lines.length) return;

  // Scale the font until the widest row of each line fills its width exactly. All the lines are measured
  // first and all the sizes written after, so the browser lays the page out once per pass and not once per
  // line (with nine lines on the page that was most of the work at load)
  const measure = (line) => {
    const available = line.clientWidth;
    // Parts share a row when one's middle falls within the other's height (the cushion is shorter than the words)
    const rows = [];
    [...line.children].forEach((part) => {
      const rect = part.getBoundingClientRect();
      const middle = (rect.top + rect.bottom) / 2;
      const row = rows.find((entry) => middle > entry.top && middle < entry.bottom);
      if (!row) return rows.push({ top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right });
      row.left = Math.min(row.left, rect.left);
      row.right = Math.max(row.right, rect.right);
    });
    const widest = Math.max(...rows.map((row) => row.right - row.left));
    if (!widest || !available) return null;
    return parseFloat(getComputedStyle(line).fontSize) * (available / widest);
  };
  const pass = (set) => {
    const sizes = set.map(measure);
    set.forEach((line, i) => {
      if (sizes[i]) line.style.setProperty('--fit', `${Math.floor(sizes[i] * 100) / 100}px`);
    });
  };
  const refit = (set) => {
    pass(set);
    pass(set); // a second pass settles any wrapping the first one changed
  };

  // A line is fitted again when the room it has changes; several changing in the same frame are done together
  const widths = new Map();
  let queued = [];
  const queue = (line) => {
    if (!queued.length) requestAnimationFrame(() => {
      const set = queued;
      queued = [];
      refit(set);
    });
    if (!queued.includes(line)) queued.push(line);
  };
  refit(lines);
  lines.forEach((line) => {
    widths.set(line, line.parentElement.clientWidth);
    new ResizeObserver(() => {
      const width = line.parentElement.clientWidth;
      if (width === widths.get(line)) return; // the first call, or a change in height only
      widths.set(line, width);
      queue(line);
    }).observe(line.parentElement);
  });
  fontsReady.then(() => refit(lines));

  if (reduceMotion.matches) return;
  const seen = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      seen.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  lines.forEach((line) => {
    line.classList.add('will-rise');
    seen.observe(line);
  });
})();

// Section cushions: the pillows inside the section lines behave like the badges of the hero.
// Each one floats in its place and turns towards the pointer; the pointer pushes it aside and it springs
// back; it can be grabbed and thrown, and it always returns to its line; a click flips it
(() => {
  const cushions = [...document.querySelectorAll('[data-cushion]')].map((el, n) => ({
    el,
    id: el.dataset.cushion,
    side: n % 2 ? 1 : -1, // which way it rests
    ox: 0, oy: 0, vx: 0, vy: 0, // offset from its place in the line, and its velocity
    rx: -8, ry: 0,
    spin: 0, spinTarget: 0, spinV: 0,
    dragging: false, grabX: 0, grabY: 0, moved: 0,
    visible: false,
  }));
  // None of these is a link, not even the ones with the Upwork mark: the only cushion that opens the
  // profile is the large one in the hero (David, 2026-10-07). A click flips them
  if (!cushions.length || reduceMotion.matches) return;

  const SPRING = 110;
  const DAMPING = 9;
  const PUSH = 5200;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const pointer = { x: 0, y: 0, active: false };
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = event.pointerType === 'mouse' || cushions.some((item) => item.dragging);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => (pointer.active = false));

  let last = null;
  let request = 0;
  const awake = () => cushions.some((item) => item.visible || item.dragging) && !document.hidden;

  const frame = (now) => {
    const dt = last === null ? 0.016 : Math.min(Math.max((now - last) / 1000, 0.001), 0.05);
    last = now;
    const time = now / 1000;

    cushions.forEach((item, n) => {
      if (!item.visible && !item.dragging) return;
      const box = item.el.getBoundingClientRect();
      const size = item.el.offsetWidth || 1;
      const float = Math.sin(time * 0.9 + n * 1.7) * size * 0.03;
      // Where it rests: the middle of its box without the offset it is carrying
      const homeX = box.left + box.width / 2 - item.ox;
      const homeY = box.top + box.height / 2 - item.oy - item.float;

      if (item.dragging) {
        const nextX = pointer.x - item.grabX - homeX;
        const nextY = pointer.y - item.grabY - homeY;
        item.vx = (nextX - item.ox) / dt;
        item.vy = (nextY - item.oy) / dt;
        item.ox = nextX;
        item.oy = nextY;
      } else {
        if (pointer.active) {
          const dx = homeX + item.ox - pointer.x;
          const dy = homeY + item.oy - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          const reach = size * 0.95;
          if (distance < reach) {
            const force = (1 - distance / reach) ** 2 * PUSH;
            item.vx += (dx / distance) * force * dt;
            item.vy += (dy / distance) * force * dt;
          }
        }
        item.vx += (-SPRING * item.ox - DAMPING * item.vx) * dt;
        item.vy += (-SPRING * item.oy - DAMPING * item.vy) * dt;
        item.ox += item.vx * dt;
        item.oy += item.vy * dt;
      }

      // Turn towards the pointer and lean into the direction of travel
      let targetRy = item.side * 18 + Math.sin(time * 0.45 + n * 1.7) * 12;
      let targetRx = -8 + Math.cos(time * 0.33 + n) * 5;
      if (pointer.active) {
        targetRy = clamp((pointer.x - (homeX + item.ox)) / (size * 4), -1, 1) * 28;
        targetRx = -clamp((pointer.y - (homeY + item.oy)) / (size * 4), -1, 1) * 28;
      }
      targetRy += clamp(item.vx * 0.03, -30, 30);
      targetRx -= clamp(item.vy * 0.03, -24, 24);
      const follow = Math.min(1, dt * 8);
      item.rx += (targetRx - item.rx) * follow;
      item.ry += (targetRy - item.ry) * follow;
      item.spinV += ((item.spinTarget - item.spin) * 70 - item.spinV * 11) * dt;
      item.spin += item.spinV * dt;

      item.float = float;
      item.el.style.translate = `${item.ox.toFixed(1)}px ${(item.oy + float).toFixed(1)}px`;
      if (item.el.classList.contains('is-3d') && window.badges3d) {
        window.badges3d.draw(item.id, item.rx, item.ry + item.spin);
      } else {
        // Flat cushions (the portrait, or no WebGL) tilt as a plane instead
        item.el.style.transform = `perspective(${(size * 5).toFixed(0)}px) rotateX(${item.rx.toFixed(2)}deg) rotateY(${(item.ry + item.spin).toFixed(2)}deg)`;
      }
    });

    request = awake() ? requestAnimationFrame(frame) : 0;
  };
  const wake = () => {
    if (request || !awake()) return;
    last = null;
    request = requestAnimationFrame(frame);
  };

  const watch = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      cushions.find((item) => item.el === entry.target).visible = entry.isIntersecting;
    });
    wake();
  });

  cushions.forEach((item) => {
    const { el } = item;
    item.float = 0;
    watch.observe(el);

    el.addEventListener('pointerdown', (event) => {
      if (event.button) return;
      const box = el.getBoundingClientRect();
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      item.dragging = true;
      item.moved = 0;
      item.grabX = event.clientX - (box.left + box.width / 2);
      item.grabY = event.clientY - (box.top + box.height / 2);
      el.classList.add('is-dragging');
      el.setPointerCapture(event.pointerId);
      wake();
    });
    el.addEventListener('pointermove', (event) => {
      if (item.dragging) item.moved += Math.abs(event.movementX) + Math.abs(event.movementY);
    });
    const release = (event) => {
      if (!item.dragging) return;
      item.dragging = false;
      item.vx = clamp(item.vx, -1600, 1600);
      item.vy = clamp(item.vy, -1600, 1600);
      if (event.pointerType !== 'mouse') pointer.active = false;
      el.classList.remove('is-dragging');
      if (item.moved <= 6 && event.type === 'pointerup') {
        // A click, not a drag: it flips
        item.spinTarget += 360;
      }
    };
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
  });
  document.addEventListener('visibilitychange', wake);
})();

// Work: the posters scroll over the pinned title with a little weight, and the text of whichever one is
// crossing the screen is shown in the caption pinned to the bottom.
//   --p  each poster's drift, in pixels        --v  the lean from the speed of the scroll, -1..1
// A "View case" tag follows the pointer over each poster
(() => {
  const section = document.querySelector('[data-work]');
  const list = section && section.querySelector('.work__list');
  if (!list) return;
  const cards = [...list.querySelectorAll('.work-card')].map((el, n) => ({
    el,
    media: el.querySelector('.work-card__media'),
    p: 0, // its drift in pixels, as last written to --p
    set: '',
    drift: [0.06, -0.1, 0.04, -0.12, 0.08, -0.05][n % 6], // share of its distance from the middle of the screen
    href: el.querySelector('.work-card__media').getAttribute('href'),
    name: el.querySelector('h3').textContent,
    desc: el.querySelector('.work-card__caption p').textContent,
    tags: el.querySelector('.work-card__tags').textContent,
  }));

  cards.forEach(({ el }) => {
    const follow = (event) => {
      const box = el.getBoundingClientRect();
      el.style.setProperty('--tag-x', `${event.clientX - box.left}px`);
      el.style.setProperty('--tag-y', `${event.clientY - box.top}px`);
    };
    el.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      follow(event);
      el.classList.add('is-hovered');
    });
    el.addEventListener('pointermove', follow);
    el.addEventListener('pointerleave', () => el.classList.remove('is-hovered'));
  });

  // The posters take their width and position from the two words of the pinned title
  const words = [...section.querySelectorAll('.work__stage .line__word')];
  const matchWords = () => {
    if (words.length < 2) return;
    const origin = list.getBoundingClientRect().left;
    ['a', 'b'].forEach((key, n) => {
      // The word's own box already reaches past its letters (see .line__word); a touch more makes sure
      // the overhang of a w or a k, and the poster's rounded corners, leave nothing showing
      const box = words[n].getBoundingClientRect();
      const bleed = parseFloat(getComputedStyle(words[n]).fontSize) * 0.02;
      list.style.setProperty(`--${key}-x`, `${(box.left - bleed - origin).toFixed(1)}px`);
      list.style.setProperty(`--${key}-w`, `${(box.width + bleed * 2).toFixed(1)}px`);
    });
  };
  const title = section.querySelector('.work__stage .line');
  if (title) {
    new ResizeObserver(matchWords).observe(title);
    words.forEach((word) => new ResizeObserver(matchWords).observe(word));
    fontsReady.then(matchWords);
  }

  // Pinned caption
  const caption = section.querySelector('.work__caption');
  const parts = caption && {
    name: caption.querySelector('.work__caption-name'),
    desc: caption.querySelector('.work__caption-desc'),
    tags: caption.querySelector('.work__caption-tags'),
    link: caption.querySelector('a'),
  };
  let shown = null;
  const show = (card) => {
    if (!caption || card === shown) return;
    const first = shown === null;
    shown = card;
    caption.classList.toggle('is-on', !!card);
    if (!card) return;
    parts.name.textContent = card.name;
    parts.desc.textContent = card.desc;
    parts.tags.textContent = card.tags;
    parts.link.setAttribute('href', card.href);
    if (first || reduceMotion.matches) return;
    [parts.name, parts.desc].forEach((el, n) => {
      el.animate(
        [{ opacity: 0, transform: 'translateY(0.4em)' }, { opacity: 1, transform: 'none' }],
        { duration: 550, delay: n * 60, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' }
      );
    });
  };

  let lean = 0; // current lean, -1..1
  let leanV = 0;
  let lastY = window.scrollY;
  let last = null;
  let request = 0;
  let onScreen = false;

  const frame = (now) => {
    const dt = last === null ? 0.016 : Math.min(Math.max((now - last) / 1000, 0.001), 0.05);
    last = now;
    const still = reduceMotion.matches;
    const height = window.innerHeight;

    if (!still) {
      // Scroll speed in screens per second pulls the lean; a spring brings it back
      const speed = (window.scrollY - lastY) / dt / height;
      const target = Math.max(-1, Math.min(1, speed * 0.55));
      leanV += ((target - lean) * 60 - leanV * 12) * dt;
      lean += leanV * dt;
      list.style.setProperty('--v', lean.toFixed(4));
    }
    lastY = window.scrollY;

    // The project in the caption is the one whose poster is nearest the reading line, a little above the
    // middle of the screen, as long as a good part of it is in view
    const line = height * 0.42;
    let nearest = null;
    let distance = Infinity;
    // Every poster is measured before any is moved: reading one after moving another makes the browser
    // lay the page out again for each of them
    const boxes = cards.map((card) => card.media.getBoundingClientRect());
    cards.forEach((card, i) => {
      const box = boxes[i];
      if (box.bottom < -200 || box.top > height + 200) return;
      if (!still) {
        const centre = box.top + box.height / 2 - card.p; // where it would be without its drift
        const next = ((centre - height / 2) * card.drift).toFixed(1);
        if (next !== card.set) {
          card.el.style.setProperty('--p', next);
          card.set = next;
          card.p = parseFloat(next);
        }
      }
      if (box.top > height * 0.72 || box.bottom < height * 0.18) return;
      const away = Math.abs(box.top + box.height / 2 - line);
      if (away < distance) {
        distance = away;
        nearest = card;
      }
    });
    show(nearest);

    request = onScreen && !document.hidden ? requestAnimationFrame(frame) : 0;
  };
  const wake = () => {
    if (request || !onScreen || document.hidden) return;
    last = null;
    lastY = window.scrollY;
    request = requestAnimationFrame(frame);
  };
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    wake();
  }).observe(section);
  document.addEventListener('visibilitychange', wake);
})();

// Small screens: the header's button steps aside while the hero's own button is on screen, so there are
// never two buttons to the same place in view (css/main.css only acts on the class under 700px)
(() => {
  const twin = document.querySelector('.site-header__cta');
  const own = document.querySelector('.hero .button');
  if (!twin || !own || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(([entry]) => twin.classList.toggle('is-twin', entry.isIntersecting)).observe(own);
})();

// Header theme: the header is fixed over sections that are light or dark, and takes the theme of whichever
// one is under it, so its text and button always read
(() => {
  const header = document.querySelector('.site-header');
  const zones = [...document.querySelectorAll('[data-theme]')].filter((el) => el !== header && !el.closest('.site-header'));
  if (!header || !zones.length) return;

  let queued = false;
  const update = () => {
    queued = false;
    const line = header.offsetHeight / 3;
    // The innermost themed element crossing the header's line wins
    let theme = null;
    zones.forEach((zone) => {
      const box = zone.getBoundingClientRect();
      if (box.top <= line && box.bottom > line) theme = zone.dataset.theme;
    });
    if (theme && header.dataset.theme !== theme) header.dataset.theme = theme;
  };
  const request = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
})();

// Menu for small screens: the header's links are rebuilt as a full-screen menu with the loud type of the
// site, the Upwork button and the email. The header gets the button that opens it
(() => {
  const header = document.querySelector('.site-header');
  const nav = header && header.querySelector('.site-header__nav');
  const cta = header && header.querySelector('.site-header__cta');
  if (!nav || !cta) return;

  const arrow = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const links = [...nav.querySelectorAll('a')].map((a) => `<a href="${a.getAttribute('href')}">${a.firstChild.textContent.trim()}</a>`).join('');
  const contact = nav.querySelector('a').getAttribute('href').replace(/#.*$/, '') + '#contact';

  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.id = 'menu';
  menu.setAttribute('role', 'dialog');
  menu.setAttribute('aria-modal', 'true');
  menu.setAttribute('aria-label', 'Menu');
  menu.inert = true;
  menu.innerHTML = `
    <div class="menu__top"><span>\u00a9DavidEstrada</span><button type="button" class="menu__close">Close</button></div>
    <nav class="menu__links" aria-label="Main">${links}<a href="${contact}">Let\u2019s talk</a></nav>
    <div class="menu__foot">
      <a class="button" href="${cta.getAttribute('href')}" target="_blank" rel="noopener">Hire me on Upwork ${arrow}</a>
      <p>Top Rated, 100% Job Success on Upwork.</p>
    </div>`;
  document.body.append(menu);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'site-header__menu';
  button.textContent = 'Menu';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'menu');
  header.append(button);
  document.documentElement.classList.add('js-menu');

  const set = (open) => {
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    button.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) menu.querySelector('.menu__close').focus();
    else button.focus();
  };
  button.addEventListener('click', () => set(true));
  menu.querySelector('.menu__close').addEventListener('click', () => set(false));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menu.inert = true;
    button.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) set(false);
  });
  // Leaving the small-screen layout closes it
  window.matchMedia('(max-width: 700px)').addEventListener('change', (query) => {
    if (!query.matches && menu.classList.contains('is-open')) set(false);
  });
})();

// Case pages: the rows of the presentation board rise into place once, as they come into view
(() => {
  const rows = document.querySelectorAll('[data-rise]');
  if (!rows.length || reduceMotion.matches || !('IntersectionObserver' in window)) return;
  const seen = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    seen.unobserve(entry.target);
  }), { rootMargin: '0px 0px -10% 0px' });
  rows.forEach((row) => {
    // Rows already on screen when the page opens are left alone
    if (row.getBoundingClientRect().top < window.innerHeight) return;
    row.classList.add('will-rise');
    seen.observe(row);
  });
})();

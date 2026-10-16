/* Lando Norris Design System — Components view behavior
 * Reproduces the Overview interactions on the live specimens with the source values:
 * text roll (data-anim="text-hover"), line highlight reveal (data-anim-high) and Rive icons.
 */
(function () {
  'use strict';

  var root = document.getElementById('components');
  if (!root) return;

  var POWER2_OUT = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  var POWER2_IN_OUT = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
  var POWER3_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
  var RIVE_URL = 'https://cdn.jsdelivr.net/npm/@rive-app/canvas-lite@2.26.4/rive.js';
  var RIVE_WASM = 'https://cdn.jsdelivr.net/npm/@rive-app/canvas-lite@2.26.4/rive.wasm';

  // ------------------------------------------------------------------ sidebar

  var buttons = root.querySelectorAll('[data-ds-goto]');
  var groups = root.querySelectorAll('[data-ds-group]');

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var g = root.querySelector('[data-ds-group="' + b.getAttribute('data-ds-goto') + '"]');
      if (g) root.scrollTo({ top: g.offsetTop, behavior: 'smooth' });
    });
  });

  function setActive() {
    var y = root.scrollTop + root.clientHeight * 0.3, current = groups[0];
    groups.forEach(function (g) { if (g.offsetTop <= y) current = g; });
    buttons.forEach(function (b) {
      b.classList.toggle('is-active', current && b.getAttribute('data-ds-goto') === current.getAttribute('data-ds-group'));
    });
  }
  root.addEventListener('scroll', setActive, { passive: true });

  // links inside specimens stay inside the catalog
  root.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a) e.preventDefault();
  });

  // ------------------------------------------------------------------ text roll

  function splitChars(el) {
    if (el.getAttribute('data-ds-split')) return;
    el.setAttribute('data-ds-split', '');
    var text = el.textContent.trim();
    el.textContent = '';
    Array.prototype.forEach.call(text, function (ch) {
      var s = document.createElement('span');
      s.className = 'char';
      s.textContent = ch === ' ' ? ' ' : ch;
      el.appendChild(s);
    });
  }

  function roll(chars, to) {
    chars.forEach(function (c, i) {
      var from = getComputedStyle(c).transform;
      c.getAnimations().forEach(function (a) { a.cancel(); });
      c.animate([{ transform: from === 'none' ? 'translateY(0)' : from }, { transform: 'translateY(' + to + ')' }],
        { duration: 600, delay: i * 20, easing: POWER3_OUT, fill: 'forwards' });
    });
  }

  function initTextRoll() {
    root.querySelectorAll('[data-anim="text-hover"]').forEach(function (a) {
      var t = a.querySelector('[split-text]');
      if (!t || t.getAttribute('data-ds-split') !== null) return;
      splitChars(t);
      var chars = Array.prototype.slice.call(t.querySelectorAll('.char'));
      a.addEventListener('mouseenter', function () { roll(chars, '-100%'); });
      a.addEventListener('mouseleave', function () { roll(chars, '0%'); });
    });
  }

  // ------------------------------------------------------------------ line highlight reveal

  function reveal(wrap) {
    var dir = wrap.getAttribute('data-ds-reveal') || 'right';
    var color = wrap.getAttribute('data-ds-reveal-color') || 'var(--color--lime, #d2ff00)';
    Array.prototype.forEach.call(wrap.children, function (el) {
      var line = el.querySelector(':scope > .line');
      if (!line) {
        line = document.createElement('span');
        line.className = 'line';
        line.style.cssText = 'display:inline-block;position:relative';
        while (el.firstChild) line.appendChild(el.firstChild);
        el.appendChild(line);
      }
      var block = line.querySelector('.high-line-reveal');
      if (!block) {
        block = document.createElement('div');
        block.className = 'high-line-reveal';
        block.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:5;background-color:' + color +
          ';transform-origin:' + (dir === 'right' ? 'right center' : 'left center');
        line.appendChild(block);
      }
      var from = dir === 'right' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)';
      line.getAnimations().forEach(function (a) { a.cancel(); });
      block.getAnimations().forEach(function (a) { a.cancel(); });
      line.animate([{ clipPath: from }, { clipPath: 'inset(0 0% 0 0%)' }], { duration: 600, easing: POWER2_OUT, fill: 'both' });
      block.animate([{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }], { duration: 600, delay: 300, easing: POWER2_IN_OUT, fill: 'both' });
    });
  }

  function initReveal() {
    root.querySelectorAll('[data-ds-reveal]').forEach(function (wrap) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { reveal(wrap); io.disconnect(); } });
      }, { root: root, rootMargin: '0px 0px -10% 0px' });
      io.observe(wrap);
      var stage = wrap.closest('.ds-stage');
      var btn = stage && stage.querySelector('[data-ds-replay]');
      if (btn) btn.addEventListener('click', function () { reveal(wrap); });
    });
  }

  // ------------------------------------------------------------------ Rive

  var riveReady = null;
  function loadRive() {
    if (riveReady) return riveReady;
    riveReady = new Promise(function (resolve, reject) {
      if (window.rive) return resolve(window.rive);
      var s = document.createElement('script');
      s.src = RIVE_URL;
      s.onload = function () { resolve(window.rive); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return riveReady;
  }

  function toBuffer(b64) {
    var bin = atob(b64), n = bin.length, out = new Uint8Array(n);
    for (var i = 0; i < n; i++) out[i] = bin.charCodeAt(i);
    return out.buffer;
  }

  function initRive() {
    loadRive().then(function (rive) {
      try { rive.RuntimeLoader.setWasmUrl(RIVE_WASM); } catch (err) { /* ignora */ }
      root.querySelectorAll('canvas[data-ds-rive]').forEach(function (c) {
        if (c.riveInstance) return;
        var file = c.getAttribute('data-ds-rive');
        var data = window.DS_RIVE && window.DS_RIVE[file];
        if (!data) return;
        var sm = c.getAttribute('data-rive-state-machine') || (file === 'btn-ui' ? 'arrow' : null);
        var input = c.getAttribute('data-rive-input');
        var track = c.getAttribute('data-rive-input-track');
        var r = new rive.Rive({
          buffer: toBuffer(data), canvas: c, artboard: c.getAttribute('data-rive-artboard') || undefined,
          stateMachines: sm || undefined, autoplay: true,
          layout: new rive.Layout({ fit: rive.Fit.Contain, alignment: rive.Alignment.Center }),
          onLoad: function () {
            r.resizeDrawingSurfaceToCanvas();
            var wrap = c.closest('.base-helmet-rive-w');
            var ph = wrap && wrap.querySelector('[data-rive-placeholder]');
            if (ph) ph.style.visibility = 'hidden';
            var ins = sm ? r.stateMachineInputs(sm) : null;
            if (!ins) return;
            var bool = rive.StateMachineInputType.Boolean;
            if (input) {
              var i = ins.find(function (x) { return x.name === input; });
              if (i && i.type === bool) i.value = true;
            }
            if (track) {
              ins.filter(function (x) { return x.type === bool && x.name.indexOf('color_') !== 0 && x.name.indexOf('weight_') !== 0; })
                .forEach(function (x) { x.value = false; });
              var t = ins.find(function (x) { return x.name === track; });
              if (t) t.value = true;
            }
            // hamburger da navbar: cor conforme o tema, como no site
            var navTheme = c.closest('[data-nav-ham]') && c.closest('[data-nav-theme]');
            if (navTheme) {
              var light = navTheme.getAttribute('data-nav-theme') === 'light';
              // aplicado depois do primeiro quadro; no onLoad a maquina de estados ainda o descarta
              setTimeout(function () {
                ins.forEach(function (x) {
                  if (x.name === 'color-white') x.value = light;
                  if (x.name === 'color-transparent') x.value = !light;
                });
              }, 150);
            }
            var hover = ins.find(function (x) { return x.name === 'hover'; });
            if (hover) {
              var host = c.closest('[data-btn-rive-hover], [data-nav-ham]') || c;
              hover.value = false;
              host.addEventListener('mouseenter', function () { hover.value = true; });
              host.addEventListener('mouseleave', function () { hover.value = false; });
            }
          }
        });
        c.riveInstance = r;
      });
    }).catch(function () { /* sem rede: os canvases Rive ficam vazios */ });
  }

  // ------------------------------------------------------------------ show

  var started = false;
  window.DSComponents = {
    show: function () {
      if (!started) {
        started = true;
        initTextRoll();
        initReveal();
        initRive();
      }
      setActive();
    }
  };
})();

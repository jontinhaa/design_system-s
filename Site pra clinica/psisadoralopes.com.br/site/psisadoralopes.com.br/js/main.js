/* Isadora Lopes — interações da landing page */
(function () {
  'use strict';

  /* ---- Ano no rodapé ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Header: estado "scrolled" ---- */
  var header = document.getElementById('header');
  var onScroll = function () {
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Reveal ao rolar (seções, divisórias e quebras) ---- */
  var revealEls = document.querySelectorAll('.reveal, .divider, .brk, .about-title, .cred-bars');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });

    /* Rede de segurança: em alguns navegadores mobile o observer pode não
       disparar (rolagem muito rápida, restauração de scroll, abertura via âncora).
       Garantimos que nada fique invisível liberando o que já está na tela e,
       como último recurso, tudo após um curto intervalo. */
    var forceShow = function (el) { el.classList.add('is-in'); io.unobserve(el); };
    var sweepVisible = function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach(function (el) {
        if (el.classList.contains('is-in')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.96) forceShow(el);
      });
    };
    window.addEventListener('load', sweepVisible, { once: true });
    window.addEventListener('scroll', sweepVisible, { passive: true });
    window.addEventListener('resize', sweepVisible, { passive: true });
    setTimeout(function () { revealEls.forEach(forceShow); }, 3500);
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- Cards "Como funciona": ativa o brilho ao tocar (dispositivos sem mouse) ---- */
  var stepCards = document.querySelectorAll('.step');
  if (stepCards.length && window.matchMedia && window.matchMedia('(hover: none)').matches) {
    stepCards.forEach(function (card) {
      card.addEventListener('click', function () {
        stepCards.forEach(function (o) { if (o !== card) o.classList.remove('is-touched'); });
        card.classList.toggle('is-touched');
      });
    });
  }

  /* ---- Baralho interativo: leque fechado + navegação (swipe / clique / setas) ---- */
  var deck = document.getElementById('deck');
  if (deck) {
    var cards = Array.prototype.slice.call(deck.querySelectorAll('.pcard'));
    var dotsWrap = document.getElementById('deckDots');
    var prevBtn = document.getElementById('deckPrev');
    var nextBtn = document.getElementById('deckNext');
    var n = cards.length, active = 0;

    // cria os pontos indicadores
    var dots = [];
    if (dotsWrap) {
      cards.forEach(function (c, i) {
        var d = document.createElement('button');
        d.className = 'deck-dot';
        d.type = 'button';
        d.setAttribute('role', 'tab');
        d.setAttribute('aria-label', 'Carta ' + (i + 1));
        d.addEventListener('click', function () { go(i); });
        dotsWrap.appendChild(d);
        dots.push(d);
      });
    }

    function render() {
      cards.forEach(function (c, i) {
        var rel = i - active;
        var ar = Math.abs(rel);
        if (i === active) {
          c.setAttribute('data-active', '');
          c.style.transform = 'translateX(0) translateY(-6px) rotate(0deg) scale(1)';
          c.style.opacity = '1';
          c.style.zIndex = '60';
        } else {
          c.removeAttribute('data-active');
          c.style.transform =
            'translateX(' + (rel * 42) + 'px) translateY(' + (ar * 14) + 'px) ' +
            'rotate(' + (rel * 7) + 'deg) scale(' + (1 - ar * 0.07) + ')';
          c.style.opacity = String(Math.max(0, 1 - ar * 0.28));
          c.style.zIndex = String(50 - ar);
        }
      });
      dots.forEach(function (d, i) {
        d.setAttribute('aria-current', i === active ? 'true' : 'false');
      });
    }
    function go(i) { active = (i + n) % n; render(); }
    function next() { go(active + 1); }
    function prev() { go(active - 1); }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    // clique nas cartas: a ativa avança; uma de trás vem à frente
    cards.forEach(function (c, i) {
      c.addEventListener('click', function () {
        if (i === active) next(); else go(i);
      });
    });

    // teclado (acessibilidade)
    deck.setAttribute('tabindex', '0');
    deck.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
    });

    // swipe (toque) e arraste (mouse)
    var x0 = null, y0 = null, dragging = false;
    function start(x, y) { x0 = x; y0 = y; dragging = true; }
    function end(x) {
      if (!dragging || x0 === null) return;
      var dx = x - x0;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
      dragging = false; x0 = null;
    }
    deck.addEventListener('touchstart', function (e) {
      start(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    deck.addEventListener('touchend', function (e) {
      var t = e.changedTouches[0];
      // só conta como swipe se o movimento horizontal dominar (não atrapalha a rolagem vertical)
      if (y0 !== null && Math.abs(t.clientX - x0) > Math.abs(t.clientY - y0)) end(t.clientX);
      else { dragging = false; x0 = null; }
    }, { passive: true });
    deck.addEventListener('mousedown', function (e) { start(e.clientX, e.clientY); });
    window.addEventListener('mouseup', function (e) { if (dragging) end(e.clientX); });

    render();
  }

  /* ---- FAQ: acordeão com abertura/fechamento suave (um por vez) ---- */
  var faqs = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
  var faqReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function faqEnd(body, cb) {
    var t;
    var done = function (ev) {
      if (ev && ev.propertyName && ev.propertyName !== 'height') return;
      body.removeEventListener('transitionend', done);
      clearTimeout(t);
      cb();
    };
    body.addEventListener('transitionend', done);
    t = setTimeout(done, 620); // garante a finalização mesmo sem transitionend
  }
  function faqExpand(item, body) {
    item.open = true; item._anim = true;
    var h = body.scrollHeight;
    body.style.height = '0px'; body.style.opacity = '0';
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      body.style.height = h + 'px'; body.style.opacity = '1';
    }); });
    faqEnd(body, function () { body.style.height = 'auto'; item._anim = false; });
  }
  function faqCollapse(item, body) {
    item._anim = true;
    body.style.height = body.scrollHeight + 'px'; body.style.opacity = '1';
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      body.style.height = '0px'; body.style.opacity = '0';
    }); });
    faqEnd(body, function () {
      item.open = false; body.style.height = ''; body.style.opacity = ''; item._anim = false;
    });
  }

  faqs.forEach(function (item) {
    var summary = item.querySelector('summary');
    var body = item.querySelector('.faq-body');
    if (!summary || !body) return;
    summary.addEventListener('click', function (e) {
      e.preventDefault();
      if (faqReduce) {
        if (item.open) { item.open = false; }
        else { faqs.forEach(function (o) { if (o !== item) o.open = false; }); item.open = true; }
        return;
      }
      if (item._anim) return;
      if (item.open) {
        faqCollapse(item, body);
      } else {
        faqs.forEach(function (o) {
          if (o !== item && o.open && !o._anim) faqCollapse(o, o.querySelector('.faq-body'));
        });
        faqExpand(item, body);
      }
    });
  });

  /* ---- Parallax + flutuação do hero (mouse no desktop · inclinação + rolagem no celular) ---- */
  var hero = document.getElementById('hero');
  if (hero) {
    var layers = Array.prototype.map.call(
      hero.querySelectorAll('[data-depth]'),
      function (el, i) {
        return { el: el, i: i, depth: parseFloat(el.getAttribute('data-depth')) || 0, x: 0, y: 0 };
      }
    );
    var maxDepth = layers.reduce(function (m, l) { return Math.max(m, l.depth); }, 1);
    var pointX = 0, pointY = 0;   // mouse / inclinação (-0.5..0.5)
    var scrollK = 0;              // progresso de rolagem no hero (0..1)
    var running = false, raf = null, t0 = performance.now();
    // Sem mouse (celular/tablet): um "ponteiro automático" descreve uma órbita
    // lenta e contínua, alimentando a MESMA fórmula de parallax do desktop.
    var noPointer = window.matchMedia ? window.matchMedia('(hover: none)').matches : ('ontouchstart' in window);
    var tiltActive = false;       // se a inclinação real do aparelho assumir, ela tem prioridade
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) noPointer = false;

    function tick() {
      var t = (performance.now() - t0) / 1000;
      // ponteiro automático no celular: mesma fórmula de parallax, sem precisar de mouse/permissão
      if (noPointer && !tiltActive) {
        pointX = Math.sin(t * 0.24) * 0.20;
        pointY = Math.cos(t * 0.18) * 0.16;
      }
      for (var k = 0; k < layers.length; k++) {
        var l = layers[k];
        // flutuação leve perpétua (ondas suaves, amplitude pequena)
        var amp = 1.4 + l.depth * 0.05;
        var idleY = Math.sin(t * 0.62 + l.i * 0.7) * amp;
        var idleX = Math.cos(t * 0.5 + l.i * 0.9) * amp * 0.5;
        // alvo = ponteiro/inclinação + deriva de rolagem + flutuação
        var tx = -pointX * l.depth + idleX;
        var ty = -pointY * l.depth - scrollK * (l.depth / maxDepth) * 110 + idleY;
        l.x += (tx - l.x) * 0.09;
        l.y += (ty - l.y) * 0.09;
        l.el.style.transform = 'translate3d(' + l.x.toFixed(2) + 'px,' + l.y.toFixed(2) + 'px,0)';
      }
    }
    function loop() { if (!running) { raf = null; return; } tick(); raf = requestAnimationFrame(loop); }
    function start() { if (!running) { running = true; t0 = performance.now() - t0 % 1e6; raf = requestAnimationFrame(loop); } }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }

    /* só anima enquanto o hero está visível (economiza bateria) */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { e.isIntersecting ? start() : stop(); });
      }, { threshold: 0 }).observe(hero);
    } else { start(); }

    /* Mouse (desktop) */
    window.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      pointX = (e.clientX - r.left) / r.width - 0.5;
      pointY = (e.clientY - r.top) / r.height - 0.5;
    }, { passive: true });

    /* Rolagem (todos os dispositivos) */
    function onScrollParallax() {
      var h = hero.offsetHeight || 1;
      scrollK = Math.max(0, Math.min(1, window.scrollY / h));
    }
    window.addEventListener('scroll', onScrollParallax, { passive: true });
    onScrollParallax();

    /* Inclinação do aparelho (celular) — equivalente ao "seguir o mouse" */
    function onTilt(ev) {
      if (ev.gamma == null || ev.beta == null) return;
      tiltActive = true;
      pointX = Math.max(-0.5, Math.min(0.5, ev.gamma / 45));
      pointY = Math.max(-0.5, Math.min(0.5, (ev.beta - 45) / 60));
    }
    function enableTilt() {
      if (typeof DeviceOrientationEvent !== 'undefined' &&
          typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(function (state) {
          if (state === 'granted') window.addEventListener('deviceorientation', onTilt, { passive: true });
        }).catch(function () {});
      } else if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', onTilt, { passive: true });
      }
    }
    enableTilt();
    window.addEventListener('touchend', function once() {
      enableTilt();
      window.removeEventListener('touchend', once);
    }, { passive: true });
  }
})();

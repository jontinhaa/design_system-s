(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // pre-loader: vídeo da logo (~2 s). Sai quando o vídeo termina e a página carregou;
  // se o vídeo falhar ou o autoplay for bloqueado, sai logo após o load; teto de 6 s.
  var pre = document.getElementById('pre');
  var preQ = [];
  function afterPre(fn) { if (pre) preQ.push(fn); else fn(); }
  if (pre) {
    var vid = pre.querySelector('video');
    var vidDone = false, pageLoaded = document.readyState === 'complete';
    var endPre = function () {
      if (!pre) return;
      var el = pre; pre = null;
      el.classList.add('done');
      root.classList.remove('preloading');
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1000);
      preQ.splice(0).forEach(function (fn) { fn(); });
    };
    var check = function () { if (vidDone && pageLoaded) endPre(); };
    if (reduce || !vid) { vidDone = true; pageLoaded = true; endPre(); }
    else {
      vid.addEventListener('ended', function () { vidDone = true; check(); });
      vid.addEventListener('error', function () { vidDone = true; check(); });
      window.addEventListener('load', function () { pageLoaded = true; check(); });
      var p = vid.play && vid.play();
      if (p && p.catch) p.catch(function () { vidDone = true; check(); });
      setTimeout(endPre, 6000);
    }
  }

  // navbar: some ao rolar para baixo, volta ao rolar para cima; a cor (data-theme) segue o fundo atrás dela.
  // O fundo é lido do elemento que está sob a navbar (primeiro com cor de fundo opaca); data-nav="dark|light"
  // força o tema de um bloco e data-nav="split" indica um fundo meio escuro/meio claro (o degradê do carrossel).
  var nav = document.querySelector('.top');
  if (nav) {
    var navY = window.pageYOffset, navAcc = 0, navBusy = false, navDark = null;
    var navTheme = function () {
      var y = Math.round(nav.offsetHeight / 2);
      var stack = document.elementsFromPoint(2, y);
      for (var i = 0; i < stack.length; i++) {
        var el = stack[i];
        if (nav.contains(el) || el.closest('.sb, .pre, .wall-vp')) continue;
        var mark = el.getAttribute('data-nav');
        if (mark === 'dark' || mark === 'light') return mark === 'dark';
        if (mark === 'split') { var r = el.getBoundingClientRect(); return y < r.top + r.height / 2; }
        var n = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
        if (!n || (n.length > 3 && parseFloat(n[3]) < 0.5)) continue;
        return (0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) < 140;
      }
      return false;
    };
    var navUpdate = function () {
      navBusy = false;
      var dark = navTheme();
      if (dark !== navDark) { navDark = dark; nav.setAttribute('data-theme', dark ? 'dark' : 'light'); }
      var y = window.pageYOffset, d = y - navY;
      navY = y;
      if (d * navAcc < 0) navAcc = 0;
      navAcc += d;
      if (y <= nav.offsetHeight || navAcc < -6) nav.classList.remove('is-hidden');
      else if (navAcc > 12) nav.classList.add('is-hidden');
    };
    var navQueue = function () { if (!navBusy) { navBusy = true; requestAnimationFrame(navUpdate); } };
    window.addEventListener('scroll', navQueue, { passive: true });
    window.addEventListener('resize', navQueue);
    window.addEventListener('load', navQueue);
    // quem navega por teclado precisa enxergar o foco
    nav.addEventListener('focusin', function () { nav.classList.remove('is-hidden'); navAcc = 0; });
    // primeira leitura no quadro seguinte (antes da 1ª pintura): aproveita o layout do próprio quadro em vez de forçar um no meio da carga
    navQueue();
  }

  // botão flutuante do WhatsApp (celular): fica escondido no topo e aparece com fade depois de rolar um pouco
  var fab = document.querySelector('.fab');
  if (fab) {
    var fabOn = null;
    var fabUpdate = function () {
      var on = window.pageYOffset > 160;
      if (on !== fabOn) { fabOn = on; fab.classList.toggle('is-on', on); }
    };
    window.addEventListener('scroll', fabUpdate, { passive: true });
    fabUpdate();
  }

  // barra de rolagem: aparece ao rolar ou ao aproximar o mouse da borda direita; some após ~1,2 s parada
  var hideBar, barBusy = false;
  var bar = document.createElement('div');
  bar.className = 'sb';
  bar.innerHTML = '<div class="sb-t"></div>';
  document.body.appendChild(bar);
  var thumb = bar.firstChild;
  function layoutBar() {
    var vh = window.innerHeight, max = root.scrollHeight - vh;
    if (max <= 1) { bar.style.display = 'none'; return; }
    bar.style.display = '';
    var th = Math.max(40, vh * vh / root.scrollHeight);
    thumb.style.height = th + 'px';
    thumb.style.transform = 'translateY(' + (window.pageYOffset / max * (vh - th)) + 'px)';
  }
  function showBar() {
    layoutBar();
    root.classList.add('is-scrolling');
    clearTimeout(hideBar);
    if (barBusy) return;
    hideBar = setTimeout(function () { root.classList.remove('is-scrolling'); }, 1200);
  }
  window.addEventListener('scroll', showBar, { passive: true });
  window.addEventListener('resize', layoutBar);
  if ('ResizeObserver' in window) new ResizeObserver(layoutBar).observe(document.body);
  layoutBar();
  bar.addEventListener('mouseenter', function () { barBusy = true; showBar(); });
  bar.addEventListener('mouseleave', function () { barBusy = false; showBar(); });
  // arrastar o thumb / clicar no trilho
  var dragY = null, dragTop = 0;
  bar.addEventListener('pointerdown', function (e) {
    var vh = window.innerHeight, max = root.scrollHeight - vh, th = thumb.offsetHeight;
    var r = thumb.getBoundingClientRect();
    if (e.target !== thumb) { window.scrollTo(0, (e.clientY - th / 2) / (vh - th) * max); r = thumb.getBoundingClientRect(); }
    dragY = e.clientY; dragTop = r.top;
    bar.classList.add('drag'); barBusy = true;
    bar.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  bar.addEventListener('pointermove', function (e) {
    if (dragY === null) return;
    var vh = window.innerHeight, max = root.scrollHeight - vh, th = thumb.offsetHeight;
    var top = Math.min(Math.max(dragTop + e.clientY - dragY, 0), vh - th);
    window.scrollTo(0, top / (vh - th) * max);
  });
  function endDrag() { if (dragY === null) return; dragY = null; bar.classList.remove('drag'); barBusy = false; showBar(); }
  bar.addEventListener('pointerup', endDrag);
  bar.addEventListener('pointercancel', endDrag);
  window.addEventListener('mousemove', function (e) {
    if (e.clientX >= window.innerWidth - 24) showBar();
  }, { passive: true });

  // rolagem suave (inércia) para a roda do mouse e links de âncora.
  // Não depende de prefers-reduced-motion: no Windows com "animações" desligado isso é ativado sem o usuário saber.
  // amortecimento por tempo (não por frame): igual em 60/120/144 Hz. TAU maior = mais suave/longo.
  var TAU = 200, cur = window.pageYOffset, tgt = cur, raf = null, last = 0;
  function maxY() { return Math.max(0, root.scrollHeight - window.innerHeight); }
  function clampY(y) { return Math.min(Math.max(y, 0), maxY()); }
  function tick(now) {
    var dt = Math.min(now - last, 50); last = now;
    var d = tgt - cur;
    if (Math.abs(d) < 0.3) { cur = tgt; window.scrollTo(0, cur); raf = null; return; }
    cur += d * (1 - Math.exp(-dt / TAU));
    window.scrollTo(0, cur);
    raf = requestAnimationFrame(tick);
  }
  function go(y) { tgt = clampY(y); if (!raf) { cur = window.pageYOffset; last = performance.now(); raf = requestAnimationFrame(tick); } }
  // rolagem por teclado/barra/toque: mantém a posição sincronizada
  window.addEventListener('scroll', function () { if (!raf) { cur = tgt = window.pageYOffset; } }, { passive: true });
  function scrollableAncestor(el) {
    while (el && el !== document.body && el !== root) {
      var oy = getComputedStyle(el).overflowY;
      if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight) return true;
      el = el.parentElement;
    }
    return false;
  }
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey || e.defaultPrevented || e.deltaY === 0 || Math.abs(e.deltaX) > Math.abs(e.deltaY) || scrollableAncestor(e.target)) return;
    e.preventDefault();
    var dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
    go((raf ? tgt : window.pageYOffset) + dy);
  }, { passive: false });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var id = a.getAttribute('href').slice(1);
    var el = id ? document.getElementById(id) : root;
    if (!el) return;
    e.preventDefault();
    var padTop = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    go(id ? el.getBoundingClientRect().top + window.pageYOffset - padTop : 0);
    if (id && history.pushState) history.pushState(null, '', '#' + id);
  });

  // carrosséis em loop (.wall-vp): aprovados no topo, depoimentos e aprovados na seção de avaliações.
  // A rolagem da página acelera (e inverte) o movimento; o mouse em cima pausa.
  // data-speed = px/s (padrão 46) · data-dir="-1" anda para o outro lado.
  // fotos em img/aprovados/01.webp ... 12.webp (cada <li class="win"> no index.html)
  [].slice.call(document.querySelectorAll('.wall-vp')).forEach(function (wall) {
    var wtrack = wall.querySelector('.wall-track');
    var speed = parseFloat(wall.getAttribute('data-speed')) || 46;
    var dir = wall.getAttribute('data-dir') === '-1' ? -1 : 1;
    if (!reduce) {
      var base = [].slice.call(wtrack.children);
      var setW = 0, vpW = 0;
      // fixa o desnível de cada original (vem do :nth-child) para os clones herdarem o mesmo e a emenda do loop não pular
      base.forEach(function (li) { li.style.setProperty('--dy', getComputedStyle(li).getPropertyValue('--dy').trim()); });
      // largura exata (fracionária) de um ciclo: offsetWidth arredonda e deixava o loop com erro de alguns px
      var measure = function () {
        var gap = parseFloat(getComputedStyle(wtrack).columnGap) || 0;
        return base.reduce(function (s, li) { return s + parseFloat(getComputedStyle(li).width) + gap; }, 0);
      };
      var build = function () {
        var nw = measure();
        if (!nw) return;
        // mesma posição relativa no ciclo, mesmo que a largura dos cards mude (resize, fonte carregando)
        if (setW) { var k = nw / setW; x *= k; if (drag) drag.xs *= k; }
        [].slice.call(wtrack.querySelectorAll('[data-clone]')).forEach(function (n) { n.remove(); });
        setW = nw;
        vpW = wall.clientWidth;
        var total = setW;
        while (total < wall.clientWidth + setW) {
          base.forEach(function (li) {
            var c = li.cloneNode(true);
            c.setAttribute('data-clone', '');
            c.setAttribute('aria-hidden', 'true');
            wtrack.appendChild(c);
          });
          total += setW;
        }
      };
      build();
      // refaz só se o ciclo ou a largura da janela mudaram de verdade (no celular, a barra de endereço dispara resize só de rolar)
      var recheck = function () {
        if (Math.abs(measure() - setW) > 0.01 || wall.clientWidth > vpW) build();
      };
      window.addEventListener('resize', recheck);
      if ('ResizeObserver' in window) new ResizeObserver(recheck).observe(base[0]);
      var x = 0, boost = 0, hold = 1, over = false, lastY = window.pageYOffset, lastT = null, inView = true;
      var drag = null, fling = 0;
      // pausa só com mouse (no toque o "hover" emulado ficaria preso depois de um toque)
      wall.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') over = true; });
      wall.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') over = false; });
      // arrastar (mouse, toque e caneta): segue o dedo/cursor, solta com inércia e volta ao movimento automático.
      // No toque, o gesto vertical continua rolando a página (touch-action: pan-y no CSS).
      wall.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        drag = { id: e.pointerId, x0: e.clientX, y0: e.clientY, xs: x, moved: false, lastX: e.clientX, lastT: e.timeStamp, v: 0 };
        fling = 0;
      });
      wall.addEventListener('pointermove', function (e) {
        if (!drag || e.pointerId !== drag.id) return;
        var dx = e.clientX - drag.x0;
        if (!drag.moved) {
          if (Math.abs(dx) < 6) return;
          // só vira arrasto se o gesto for mais horizontal que vertical
          if (e.pointerType !== 'mouse' && Math.abs(e.clientY - drag.y0) > Math.abs(dx)) { drag = null; return; }
          drag.moved = true;
          wall.classList.add('is-drag');
          try { wall.setPointerCapture(e.pointerId); } catch (err) {}
        }
        var dt = (e.timeStamp - drag.lastT) / 1000;
        if (dt > 0) drag.v = drag.v * 0.6 + ((e.clientX - drag.lastX) / dt) * 0.4;
        drag.lastX = e.clientX; drag.lastT = e.timeStamp;
        x = drag.xs + dx;
      });
      var endDrag = function (e) {
        if (!drag || e.pointerId !== drag.id) return;
        // parou antes de soltar: sem inércia
        if (drag.moved && e.timeStamp - drag.lastT < 80) fling = Math.max(-3500, Math.min(3500, drag.v));
        drag = null;
        wall.classList.remove('is-drag');
      };
      wall.addEventListener('pointerup', endDrag);
      wall.addEventListener('pointercancel', endDrag);
      wall.addEventListener('dragstart', function (e) { e.preventDefault(); });
      // no celular o carrossel não reage à rolagem da página (só no desktop/tablet)
      var mobileMq = window.matchMedia('(max-width:759px)');
      window.addEventListener('scroll', function () {
        var y = window.pageYOffset;
        if (mobileMq.matches) { lastY = y; boost = 0; return; }
        boost =Math.max(-1400, Math.min(1400, boost + (y - lastY) * 1.6));
        lastY = y;
      }, { passive: true });
      if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { inView = en[0].isIntersecting; }).observe(wall);
      var spin = function (ts) {
        if (lastT === null) lastT = ts;
        var dt = Math.min((ts - lastT) / 1000, 0.05);
        lastT = ts;
        if (inView && setW) {
          var held = over || (drag && drag.moved);
          hold += ((held ? 0 : 1) - hold) * Math.min(dt * 6, 1);
          boost *= Math.pow(0.04, dt);
          if (!drag) {
            x -= dir * (speed + boost) * hold * dt;
            x += fling * dt;
            fling *= Math.pow(0.05, dt);
            if (Math.abs(fling) < 4) fling = 0;
          }
          x = ((x % setW) - setW) % setW;
          if (drag && drag.moved) { drag.xs += x - (drag.xs + (drag.lastX - drag.x0)); }
          wtrack.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
        }
        requestAnimationFrame(spin);
      };
      requestAnimationFrame(spin);
    }
  });

  // trilha das etapas: a seção fica presa na tela (.trip-pin sticky) e a rolagem leva o carro de etapa em etapa.
  // tU = posição do carro em etapas (0 = etapa 1 ... 5 = CNH); começa em -0.6, entrando pela esquerda.
  // A rolagem é dividida em trechos: andar até a próxima etapa (acelera e freia) e ficar parado nela (a cena anima).
  // Todas as variáveis com prefixo t: este bloco divide o escopo com o carrossel (x, spin, last...).
  var trip = document.getElementById('trilha');
  if (trip && !reduce) {
    trip.classList.add('trip-on');
    var tsvg = trip.querySelector('.trip-svg');
    var tq = function (s) { return tsvg.querySelector(s); };
    var tWorld = tq('.t-world'), tSky = tq('.t-sky'), tCar = tq('.t-car'), tBody = tq('.t-body'), tSun = tq('.t-sun'), tClouds = tq('.t-clouds');
    var tWheels = [].slice.call(tsvg.querySelectorAll('.t-wheel'));
    var tScenes = [].slice.call(tsvg.querySelectorAll('.sc'));
    var tCards = [].slice.call(trip.querySelectorAll('.trip-step'));
    var tDots = [].slice.call(trip.querySelectorAll('.trip-dot'));
    var tSteps = trip.querySelector('.trip-steps');
    // cenas a cada 900 unidades do SVG, a primeira em x=700 (mesmos valores dos translate() das .sc no index.html)
    var tGap = 900, tX0 = 700, tEnd = tScenes.length - 1, tStart = -0.6;
    // trechos da rolagem: [peso, de, até]. O carro anda em linha reta com a rolagem (peso = distância percorrida)
    // e cada parada tem uma trava curta: um trecho em que ele fica parado, para dar para soltar a roda em cima da etapa
    var tSegs = [], tSegW = 0, ti, tk;
    for (tk = 0; tk <= tEnd; tk++) {
      tSegs.push([tk ? 1 : tStart * -1, tk ? tk - 1 : tStart, tk]);
      tSegs.push([tk === tEnd ? 1 : 0.8, tk, tk]);
    }
    tSegs.forEach(function (s) { tSegW += s[0]; });
    var tUAt = function (p) {
      var w = p * tSegW, i = 0;
      while (i < tSegs.length - 1 && w > tSegs[i][0]) w -= tSegs[i++][0];
      return tSegs[i][1] + (tSegs[i][2] - tSegs[i][1]) * Math.min(w / tSegs[i][0], 1);
    };

    // cenário gerado: nuvens e prédios ao fundo (parallax), postes entre as etapas, placas, raios e confete da CNH
    var tSeed = 7;
    var tRnd = function () { tSeed = tSeed * 16807 % 2147483647; return tSeed / 2147483647; };
    var tN = Math.round, tHtml = '';
    for (var tcx = -200; tcx < 3800; tcx += 260 + tRnd() * 220) tHtml += '<use href="#t-cloud" transform="translate(' + tN(tcx) + ' ' + tN(60 + tRnd() * 130) + ') scale(' + (0.6 + tRnd() * 0.7).toFixed(2) + ')" opacity="' + (0.7 + tRnd() * 0.3).toFixed(2) + '"/>';
    tClouds.innerHTML = tHtml;
    tHtml = '';
    for (var tbx = -900; tbx < 4400;) {
      var tbw = 60 + tRnd() * 90, tbh = 80 + tRnd() * 190, tby = 432 - tbh;
      tHtml += '<rect x="' + tN(tbx) + '" y="' + tN(tby) + '" width="' + tN(tbw) + '" height="' + tN(tbh) + '" fill="' + (tRnd() < 0.5 ? '#c3d2de' : '#b4c5d3') + '"/>';
      for (var twy = tby + 14; twy < 410; twy += 22) for (var twx = tbx + 10; twx < tbx + tbw - 14; twx += 18) if (tRnd() < 0.16) tHtml += '<rect class="t-win" x="' + tN(twx) + '" y="' + tN(twy) + '" width="7" height="10"/>';
      tbx += tbw + 4 + tRnd() * 30;
    }
    tSky.innerHTML = tHtml;
    tHtml = '';
    for (tk = -1; tk <= tEnd; tk++) tHtml += '<g transform="translate(' + (tX0 + tk * tGap + tGap / 2) + ' 0)"><path class="t-pole" d="M0 436V252q0-14 14-14h26"/><rect class="t-head" x="34" y="234" width="26" height="8" rx="3"/></g>';
    tq('.t-lamps').innerHTML = tHtml;
    tScenes.forEach(function (s, i) {
      if (i < tEnd) s.insertAdjacentHTML('beforeend', '<g><rect class="t-mk-p" x="196" y="330" width="6" height="106"/><rect class="t-mk-b" x="172" y="280" width="54" height="54" rx="7"/><text class="t-mk-s" x="199" y="297">ETAPA</text><text class="t-mk-n" x="199" y="326">' + (i + 1) + '</text></g>');
    });
    var tCols = ['#E81820', '#FFC400', '#111'];
    tHtml = '';
    for (ti = 0; ti < 26; ti++) tHtml += '<rect x="-4" y="292" width="' + tN(6 + tRnd() * 6) + '" height="' + tN(4 + tRnd() * 6) + '" fill="' + tCols[ti % 3] + '" style="--x:' + tN((tRnd() - 0.5) * 480) + 'px;--y:' + tN(-60 - tRnd() * 200) + 'px;--r:' + tN((tRnd() - 0.5) * 900) + 'deg;--d:' + tN(300 + tRnd() * 2000) + 'ms"/>';
    tq('.s6-cf').innerHTML = tHtml;
    tHtml = '';
    for (ti = 0; ti < 12; ti++) {
      var ta = ti * Math.PI / 6;
      tHtml += '<path d="M0 297L' + tN(Math.cos(ta - 0.13) * 300) + ' ' + tN(297 + Math.sin(ta - 0.13) * 300) + 'L' + tN(Math.cos(ta + 0.13) * 300) + ' ' + tN(297 + Math.sin(ta + 0.13) * 300) + 'z"/>';
    }
    tq('.s6-rays g').innerHTML = tHtml;

    // o SVG tem 600 unidades de altura; a largura visível acompanha a tela. No desktop o carro para à direita do texto
    var tVisW = 1200, tAnchor = 0.5, tSc = 1;
    var tSize = function () {
      tSc = (tsvg.clientHeight || 600) / 600;
      tVisW = tsvg.clientWidth / tSc;
      tsvg.setAttribute('viewBox', '0 0 ' + tVisW.toFixed(1) + ' 600');
      var desk = window.innerWidth >= 760 && window.innerWidth * 20 >= window.innerHeight * 21;
      tAnchor = desk ? Math.min(0.72, Math.max(0.6, (tSteps.getBoundingClientRect().right + 210 * tSc) / window.innerWidth)) : 0.5;
      tSun.setAttribute('transform', 'translate(' + tN(tVisW - (desk ? 170 : 60)) + ' 96)');
    };
    // medida no 1º quadro, antes do tFrame (a trilha está fora da tela na carga); evita um layout forçado durante a inicialização
    requestAnimationFrame(tSize);
    window.addEventListener('resize', tSize);

    var tU = null, tCam = 0, tX = 0, tV = 0, tPitch = 0, tRot = 0, tLast = null, tIn = true, tAct = -1, tIdle = false;
    // fora da tela, .is-off pausa as animações de CSS do cenário (style.css)
    if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { tIn = en[0].isIntersecting; trip.classList.toggle('is-off', !tIn); }).observe(trip);
    var tSet = function (el, v) { el.setAttribute('transform', v); };
    var tFrame = function (ts) {
      requestAnimationFrame(tFrame);
      var dt = tLast === null ? 0 : Math.min((ts - tLast) / 1000, 0.05);
      tLast = ts;
      if (!tIn && tU !== null) return;
      var r = trip.getBoundingClientRect(), span = r.height - window.innerHeight;
      var goal = tUAt(span > 0 ? Math.min(Math.max(-r.top / span, 0), 1) : 0);
      var first = tU === null;
      // só tira o "seco" da rolagem (toque e barra de rolagem); o carro acompanha a mão quase em tempo real
      tU = first ? goal : tU + (goal - tU) * (1 - Math.exp(-dt / 0.04));
      if (Math.abs(goal - tU) < 0.002) tU = goal;
      var nx = tX0 + tU * tGap, dx = first ? 0 : nx - tX;
      var v = dt ? tV + (dx / dt - tV) * (1 - Math.exp(-dt / 0.03)) : 0;
      var acc = dt ? (v - tV) / dt : 0;
      tV = v; tX = nx;
      // a câmera segue o carro com atraso: ele avança na tela ao acelerar e volta para a marca ao parar
      var camGoal = tX - tAnchor * tVisW;
      tCam = first ? camGoal : tCam + (camGoal - tCam) * (1 - Math.exp(-dt / 0.07));
      tCam = Math.min(Math.max(tCam, camGoal - 0.06 * tVisW), camGoal + 0.06 * tVisW);
      // freada abaixa o bico, arrancada levanta
      tPitch += (Math.max(-3.5, Math.min(3.5, -acc * 0.0003)) - tPitch) * (1 - Math.exp(-dt / 0.12));
      tRot = (tRot + dx / 18 * 57.3) % 360;
      // parado e com a câmera assentada: não reescreve o SVG a cada quadro (as animações de CSS seguem rodando)
      var still = tU === goal && Math.abs(camGoal - tCam) < 0.05 && Math.abs(tPitch) < 0.005 && Math.abs(v) < 0.5;
      if (still && tIdle) return;
      tIdle = still;
      var bob = Math.abs(v) > 30 ? Math.sin(tX / 22) * 0.9 : 0;
      tSet(tWorld, 'translate(' + (-tCam).toFixed(1) + ' 0)');
      tSet(tSky, 'translate(' + (-tCam * 0.35).toFixed(1) + ' 0)');
      tSet(tClouds, 'translate(' + (-tCam * 0.1).toFixed(1) + ' 0)');
      tSet(tCar, 'translate(' + (tX - 115).toFixed(1) + ' 420)');
      tSet(tBody, 'translate(0 ' + bob.toFixed(2) + ') rotate(' + tPitch.toFixed(2) + ' 115 80)');
      tWheels.forEach(function (w) { tSet(w, 'rotate(' + tRot.toFixed(1) + ')'); });
      tsvg.classList.toggle('is-moving', Math.abs(v) > 40);
      tsvg.classList.toggle('is-fast', Math.abs(v) > 900);
      tsvg.classList.toggle('is-rev', v < -40);
      tScenes.forEach(function (s, i) { s.classList.toggle('is-on', tU > i - 0.08); });
      var act = Math.max(0, Math.min(tEnd, Math.round(tU)));
      if (act !== tAct) {
        tAct = act;
        tCards.forEach(function (c, i) { c.classList.toggle('is-active', i === act); c.classList.toggle('is-past', i < act); });
        tDots.forEach(function (d, i) {
          d.classList.toggle('is-active', i === act);
          d.classList.toggle('is-done', i < act);
          if (i === act) d.setAttribute('aria-current', 'step'); else d.removeAttribute('aria-current');
        });
      }
    };
    requestAnimationFrame(tFrame);

    // os traços de progresso levam ao meio da parada de cada etapa (o carro dirige até lá pela rolagem suave)
    tDots.forEach(function (d, i) {
      d.addEventListener('click', function () {
        var w = tSegs[2 * i + 1][0] / 2;
        for (var j = 0; j <= 2 * i; j++) w += tSegs[j][0];
        go(trip.getBoundingClientRect().top + window.pageYOffset + w / tSegW * (trip.offsetHeight - window.innerHeight));
      });
    });
  }

  // fotos dos modelos da frota: cada .mc tem um .mc-gallery com <img data-src alt>; o .mc-open abre o <dialog id="gal">
  // com as fotos num carrossel (deslizar no toque, setas, ← → no teclado, Esc ou clique fora fecha).
  // Para incluir uma foto, é só copiar uma linha <img data-src alt> no .mc-gallery do card (index.html).
  (function () {
    var dlg = document.getElementById('gal');
    if (!dlg || typeof dlg.showModal !== 'function') return;
    var track = dlg.querySelector('.gal-track');
    var title = dlg.querySelector('.gal-title');
    var num = dlg.querySelector('.gal-n');
    var dots = dlg.querySelector('.gal-dots');
    var total = 0, idx = 0, tick = null;

    function photos(card) { return [].slice.call(card.querySelectorAll('.mc-gallery img[data-src]')); }

    [].slice.call(document.querySelectorAll('.mc')).forEach(function (card) {
      var btn = card.querySelector('.mc-open');
      // o nome acessível começa pelo texto visível ("Ver veículo"), como pede a WCAG 2.5.3
      if (btn) btn.setAttribute('aria-label', btn.textContent.trim() + ': ' + btn.getAttribute('data-title'));
    });

    function show(i) {
      idx = i;
      num.textContent = (i + 1) + ' / ' + total;
      [].slice.call(dots.children).forEach(function (d, k) { d.classList.toggle('on', k === i); });
    }
    function goTo(i) {
      i = (i + total) % total;
      track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
      show(i);
    }
    track.addEventListener('scroll', function () {
      if (tick) return;
      tick = requestAnimationFrame(function () {
        tick = null;
        var i = Math.round(track.scrollLeft / (track.clientWidth || 1));
        if (i !== idx && i >= 0 && i < total) show(i);
      });
    }, { passive: true });

    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.mc-open');
      if (!btn) return;
      var card = btn.closest('.mc');
      var imgs = photos(card);
      if (!imgs.length) return;
      total = imgs.length;
      title.textContent = btn.getAttribute('data-title') || '';
      track.innerHTML = '';
      dots.innerHTML = '';
      imgs.forEach(function (src, k) {
        var li = document.createElement('li');
        var im = document.createElement('img');
        im.src = src.getAttribute('data-src');
        im.alt = src.getAttribute('alt') || '';
        im.decoding = 'async';
        li.appendChild(im);
        track.appendChild(li);
        dots.appendChild(document.createElement('i'));
      });
      dlg.classList.toggle('is-single', total < 2);
      root.classList.add('gal-open');
      dlg.showModal();
      track.scrollLeft = 0;
      show(0);
    });

    dlg.querySelector('.gal-prev').addEventListener('click', function () { goTo(idx - 1); });
    dlg.querySelector('.gal-next').addEventListener('click', function () { goTo(idx + 1); });
    // destrava a rolagem da página em todo caminho de fechamento (X, fundo, Esc), sem depender só do evento "close"
    function unlock() {
      root.classList.remove('gal-open');
      track.innerHTML = '';
      dots.innerHTML = '';
    }
    function closeGal() { dlg.close(); unlock(); }
    dlg.querySelector('.gal-x').addEventListener('click', closeGal);
    // clique no fundo (fora da caixa) fecha
    dlg.addEventListener('click', function (e) { if (e.target === dlg) closeGal(); });
    dlg.addEventListener('cancel', unlock);
    dlg.addEventListener('keydown', function (e) {
      if (total < 2) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(idx - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(idx + 1); }
    });
    // a roda do mouse não pode rolar a página por trás (a rolagem suave acima ignora eventos já cancelados)
    dlg.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) e.preventDefault();
    }, { passive: false });
    dlg.addEventListener('close', unlock);
  })();

  // Segurança: se o observer não responder em ~3 s (ou nem existir), tudo aparece
  // (o timeout principal fica inline no <head>, caso este arquivo nem carregue; aqui só acerta os contadores)
  var safety = setTimeout(function () {
    if (window.__rvOk) return;
    root.classList.add('reveal-all');
    [].slice.call(document.querySelectorAll('[data-count]')).forEach(function (c) {
      c.textContent = c.getAttribute('data-final') || c.getAttribute('data-count');
    });
  }, 3000);

  // contadores (21 anos, 4,8, 62): o HTML já traz o valor final; só anima se puder
  function fmt(v, dec) { return v.toFixed(dec).replace('.', ','); }
  function countUp(el) {
    var raw = el.getAttribute('data-count').replace(',', '.');
    var target = parseFloat(raw);
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    if (reduce || isNaN(target)) { el.textContent = fmt(target, dec); return; }
    var start = null, dur = 1100;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * e, dec);
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target, dec);
    }
    requestAnimationFrame(step);
  }

  var counters = [].slice.call(document.querySelectorAll('[data-count]'));
  // contador do hero começa depois da entrada do selo
  if (!reduce) {
    counters.forEach(function (c) { if (c.closest('.hero')) { c.textContent = '0'; } });
    afterPre(function () {
      setTimeout(function () {
        counters.forEach(function (c) { if (c.closest('.hero')) countUp(c); });
      }, 900);
    });
  }

  var items = [].slice.call(document.querySelectorAll('.rv'));

  if (reduce || !('IntersectionObserver' in window)) {
    window.__rvOk = true;
    items.forEach(function (el) { el.classList.add('in'); });
    clearTimeout(safety);
    return;
  }

  // contadores fora do hero: zera e conta quando o bloco entra
  counters.forEach(function (c) {
    if (!c.closest('.hero')) { c.setAttribute('data-final', c.textContent); c.textContent = fmt(0, parseInt(c.getAttribute('data-dec') || '0', 10)); }
  });

  // quando a entrada deslizante termina, .rv-done tira o will-change (dezenas de camadas de GPU a menos no celular)
  var settle = function (el) {
    var done = function (e) {
      if (e.target !== el || e.propertyName !== 'transform') return;
      el.removeEventListener('transitionend', done);
      el.classList.add('rv-done');
    };
    el.addEventListener('transitionend', done);
  };

  var io = new IntersectionObserver(function (entries) {
    window.__rvOk = true;
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      settle(el);
      el.classList.add('in');
      io.unobserve(el);
      [].slice.call(el.querySelectorAll('[data-count]')).forEach(function (c) {
        if (!c.closest('.hero')) countUp(c);
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  items.forEach(function (el) { io.observe(el); });

  // se algum contador fora do hero não estiver dentro de um .rv, conta na entrada dele
  counters.forEach(function (c) {
    if (c.closest('.hero') || c.closest('.rv')) return;
    var o = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { countUp(c); o.disconnect(); }
    });
    o.observe(c);
  });
})();

// FAQ (#duvidas): acordeão com uma pergunta aberta por vez. A altura anima por CSS (grid 0fr → 1fr);
// aqui só alternamos .is-open/aria-expanded e trocamos o veículo do palco (data-v do item = data-v da imagem).
(function () {
  var list = document.querySelector('.faq-list');
  if (!list) return;
  var items = [].slice.call(list.querySelectorAll('.faq-item'));
  var stage = document.querySelector('.faq-stage');
  var cars = [].slice.call(document.querySelectorAll('.faq-car'));

  function showCar(v) {
    var next = cars.filter(function (c) { return c.getAttribute('data-v') === v; })[0];
    var cur = cars.filter(function (c) { return c.classList.contains('is-on'); })[0];
    if (!next || next === cur) return;
    if (stage) stage.classList.add('swapped');
    if (cur) {
      cur.classList.remove('is-on');
      cur.classList.add('is-out');
      cur.addEventListener('animationend', function done() {
        cur.removeEventListener('animationend', done);
        cur.classList.remove('is-out');
      });
    }
    next.classList.remove('is-out');
    next.classList.add('is-on');
  }

  function setOpen(item, open) {
    item.classList.toggle('is-open', open);
    item.querySelector('.faq-q').setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  list.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-q');
    if (!btn) return;
    var item = btn.closest('.faq-item');
    var open = !item.classList.contains('is-open');
    items.forEach(function (it) { if (it !== item) setOpen(it, false); });
    setOpen(item, open);
    if (open) showCar(item.getAttribute('data-v'));
  });

  // setas, Home e End percorrem as perguntas
  list.addEventListener('keydown', function (e) {
    var btn = e.target.closest('.faq-q');
    if (!btn) return;
    var qs = items.map(function (it) { return it.querySelector('.faq-q'); });
    var i = qs.indexOf(btn), n = -1;
    if (e.key === 'ArrowDown') n = (i + 1) % qs.length;
    else if (e.key === 'ArrowUp') n = (i - 1 + qs.length) % qs.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = qs.length - 1;
    if (n < 0) return;
    e.preventDefault();
    qs[n].focus();
  });
})();

// carrossel dos modelos da frota (.mc-grid) em celular e tablet (< 1100px): infinito, o card do meio fica maior e elevado e os vizinhos
// aparecem em parte, menores e apagados. Arrasta com dedo/mouse (solta com inércia e encaixa no card mais próximo) e avança sozinho a cada 3 s.
// Tocar no card do meio abre as fotos (galeria acima); tocar num vizinho só o traz para o meio. No desktop continua a grade de cards.
(function () {
  var stage = document.querySelector('.mc-grid');
  if (!stage || !window.matchMedia) return;
  var cards = [].slice.call(stage.querySelectorAll('.mc'));
  var n = cards.length;
  if (n < 3) return;
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mq = matchMedia('(max-width:1099px)');
  var AUTO_MS = 3000;
  var active = false, step = 0, padTop = 0, padBot = 0;
  var pos = 0, target = 0, raf = null, last = 0, drag = null, dragged = false, auto = null, inView = true;

  function wrap(d) { d = ((d % n) + n) % n; return d > n / 2 ? d - n : d; }
  function center() { return ((Math.round(target) % n) + n) % n; }

  // bolinhas abaixo do carrossel: mostram qual card está no meio e levam a ele ao clicar
  var dotsEl = document.createElement('div');
  dotsEl.className = 'mc-dots';
  dotsEl.hidden = true;
  var dots = cards.map(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ir para ' + c.querySelector('h3').textContent);
    b.addEventListener('click', function () { goTo(i); });
    dotsEl.appendChild(b);
    return b;
  });
  stage.parentNode.insertBefore(dotsEl, stage.nextSibling);
  var curDot = -1;
  function markDot() {
    var k = ((Math.round(pos) % n) + n) % n;
    if (k === curDot) return;
    curDot = k;
    dots.forEach(function (b, j) {
      b.classList.toggle('is-on', j === k);
      if (j === k) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
  }

  // posição de cada card a partir da distância d até o centro (a = |d|): escala, opacidade, elevação e camada
  function paint() {
    for (var i = 0; i < n; i++) {
      var d = wrap(i - pos), a = Math.abs(d);
      var s = 1 - 0.22 * Math.min(a, 1) - 0.18 * Math.min(Math.max(a - 1, 0), 1);
      var o = a <= 1 ? 1 - 0.55 * a : a <= 2 ? 0.45 - 0.25 * (a - 1) : Math.max(0, 0.2 - 0.4 * (a - 2));
      var y = -18 * Math.max(0, 1 - a);
      var c = cards[i].style;
      c.transform = 'translate3d(' + (d * step).toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scale(' + s.toFixed(3) + ')';
      c.opacity = o.toFixed(3);
      c.zIndex = String(10 - Math.round(a * 3));
      c.visibility = a > 2.6 ? 'hidden' : 'visible';
      c.pointerEvents = a > 1.6 ? 'none' : '';
    }
    markDot();
  }
  function frame(ts) {
    var dt = Math.min((ts - last) / 1000, 0.05);
    last = ts;
    if (!drag) {
      var diff = target - pos;
      if (Math.abs(diff) < 0.001) pos = target; else pos += diff * (1 - Math.exp(-dt / 0.11));
    }
    paint();
    if (drag || pos !== target) raf = requestAnimationFrame(frame);
    else {
      raf = null;
      // mantém os números pequenos: só importa a posição módulo n
      var k = n * Math.floor(pos / n);
      if (k) { pos -= k; target -= k; paint(); }
    }
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  function advance(dir) { target = Math.round(target) + dir; kick(); }
  function goTo(i) { var base = Math.round(target); target = base + wrap(i - base); kick(); schedule(); }
  function schedule() {
    clearTimeout(auto);
    if (!active || reduce) return;
    auto = setTimeout(function () {
      if (!document.hidden && inView && !drag && !root.classList.contains('gal-open')) advance(1);
      schedule();
    }, AUTO_MS);
  }

  // mede o card (largura vem do CSS) e deixa todos com a mesma altura, a do maior
  function layout() {
    if (!active) return;
    cards.forEach(function (c) { c.style.height = ''; });
    var cs = getComputedStyle(stage);
    padTop = parseFloat(cs.paddingTop) || 0;
    padBot = parseFloat(cs.paddingBottom) || 0;
    var w = cards[0].offsetWidth, h = 0;
    cards.forEach(function (c) { h = Math.max(h, c.offsetHeight); });
    cards.forEach(function (c) { c.style.height = h + 'px'; });
    stage.style.height = (h + padTop + padBot) + 'px';
    step = w * 0.95;
    paint();
  }

  stage.addEventListener('pointerdown', function (e) {
    if (!active || (e.pointerType === 'mouse' && e.button !== 0)) return;
    drag = { id: e.pointerId, x0: e.clientX, y0: e.clientY, p0: pos, moved: false, lastX: e.clientX, lastT: e.timeStamp, v: 0 };
  });
  stage.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x0;
    if (!drag.moved) {
      if (Math.abs(dx) < 6) return;
      // no toque, o gesto mais vertical que horizontal continua rolando a página (touch-action: pan-y)
      if (e.pointerType !== 'mouse' && Math.abs(e.clientY - drag.y0) > Math.abs(dx)) { drag = null; return; }
      drag.moved = true;
      stage.classList.add('is-drag');
      clearTimeout(auto);
      try { stage.setPointerCapture(e.pointerId); } catch (err) {}
    }
    var dt = (e.timeStamp - drag.lastT) / 1000;
    if (dt > 0) drag.v = drag.v * 0.6 + ((e.clientX - drag.lastX) / dt) * 0.4;
    drag.lastX = e.clientX; drag.lastT = e.timeStamp;
    pos = target = drag.p0 - dx / step;
    kick();
  });
  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var moved = drag.moved, v = drag.v, stopped = e.timeStamp - drag.lastT > 80;
    drag = null;
    stage.classList.remove('is-drag');
    if (moved) {
      dragged = true;
      setTimeout(function () { dragged = false; }, 60);
      // soltar em movimento lança para o próximo (ou anterior); parado, encaixa no mais próximo
      var fling = stopped ? 0 : Math.max(-1, Math.min(1, -v / step * 0.18));
      target = Math.round(pos + fling);
      kick();
    }
    schedule();
  }
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);
  stage.addEventListener('dragstart', function (e) { e.preventDefault(); });

  // em captura, antes do handler da galeria: arrasto não abre nada e o clique num vizinho só o centraliza
  stage.addEventListener('click', function (e) {
    if (!active) return;
    if (dragged) { e.preventDefault(); e.stopPropagation(); return; }
    var card = e.target.closest && e.target.closest('.mc');
    if (!card) return;
    var i = cards.indexOf(card);
    if (i !== center()) { e.preventDefault(); e.stopPropagation(); goTo(i); }
  }, true);
  // navegando por teclado, o card que recebe o foco vai para o meio
  stage.addEventListener('focusin', function (e) {
    if (!active || !e.target.matches || !e.target.matches(':focus-visible')) return;
    var card = e.target.closest('.mc');
    if (card && cards.indexOf(card) !== center()) goTo(cards.indexOf(card));
  });

  function activate() {
    if (active) return;
    active = true;
    stage.classList.add('is-car');
    // o carrossel faz a própria animação: sai da entrada deslizante dos cards (.rv)
    cards.forEach(function (c) { c.classList.remove('rv', 'in'); });
    dotsEl.hidden = false;
    curDot = -1;
    layout();
    schedule();
  }
  function deactivate() {
    if (!active) return;
    active = false;
    clearTimeout(auto);
    stage.classList.remove('is-car');
    dotsEl.hidden = true;
    stage.style.height = '';
    cards.forEach(function (c) { c.removeAttribute('style'); });
  }
  function sync() { if (mq.matches) activate(); else deactivate(); }
  if (mq.addEventListener) mq.addEventListener('change', sync); else if (mq.addListener) mq.addListener(sync);
  window.addEventListener('resize', layout);
  window.addEventListener('load', layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { inView = en[0].isIntersecting; }).observe(stage);
  sync();
})();

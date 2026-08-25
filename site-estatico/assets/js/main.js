/* =========================================================================
   ELEMENTO FIT ACADEMIA — comportamento do site
   Sem bibliotecas. Tudo em vanilla JS.

   1. Navbar, barra de progresso e botão flutuante
   2. Menu mobile
   3. Divisão dos títulos em linhas (para a revelação por máscara)
   4. Observador de revelações, com atraso escalonado
   5. Parallax do hero
   6. Faixa rolante (marquee)
   7. Contadores e barras
   8. Horários + selo ABERTO AGORA
   9. Mapa sob demanda
  10. Link ativo na navbar
  11. Ano no rodapé
   ========================================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------------
     1. NAVBAR + PROGRESSO + BOTÃO FLUTUANTE
     --------------------------------------------------------------- */
  var nav  = $('#nav');
  var fab  = $('#fab');
  var prog = $('#prog');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('is-stuck', y > 30);
    if (fab) fab.classList.toggle('is-on', y > 560);
    if (prog) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
  }
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ---------------------------------------------------------------
     2. MENU MOBILE — links entram escalonados
     --------------------------------------------------------------- */
  var burger = $('#burger');
  var drawer = $('#drawer');

  $$('.drawer__link', drawer).forEach(function (a, i) {
    a.style.transitionDelay = (90 + i * 55) + 'ms';
  });

  function setDrawer(open) {
    if (!burger || !drawer) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    drawer.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) {
    burger.addEventListener('click', function () {
      setDrawer(burger.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) setDrawer(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  /* ---------------------------------------------------------------
     3. TÍTULOS DIVIDIDOS EM LINHAS
        Cada <br> vira uma linha própria, dentro de uma máscara.
     --------------------------------------------------------------- */
  $$('[data-split]').forEach(function (el) {
    var parts = el.innerHTML.split(/<br\s*\/?>/i);
    if (parts.length === 0) return;
    el.innerHTML = parts.map(function (p, i) {
      return '<span class="ln" style="--d:' + (i * 95) + 'ms"><i>' + p.trim() + '</i></span>';
    }).join('');
  });

  /* ---------------------------------------------------------------
     4. REVELAÇÕES
        .rv-lines  título entra linha a linha
        .rv-clip   imagem/bloco descoberto da esquerda para a direita
        .rv-up     texto corrido sobe
        .rv-row    linha de tabela entra pela esquerda
        .rv-rule   régua que se desenha
     --------------------------------------------------------------- */
  var SEL = '.rv-lines, .rv-clip, .rv-up, .rv-row, .rv-rule';
  var animated = $$(SEL);

  // atraso escalonado entre irmãos do mesmo grupo
  var groups = {};
  animated.forEach(function (el) {
    if (!el.classList.contains('rv-row')) return;
    var p = el.parentElement;
    if (!p) return;
    var key = p.getAttribute('data-grp');
    if (!key) { key = 'g' + Object.keys(groups).length; p.setAttribute('data-grp', key); groups[key] = 0; }
    el.style.setProperty('--d', (groups[key]++ * 65) + 'ms');
  });

  if (reduce || !('IntersectionObserver' in window)) {
    animated.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    animated.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------
     5. PARALLAX DO HERO — mais marcado que o habitual
     --------------------------------------------------------------- */
  var heroMedia = $('#heroMedia');
  if (heroMedia && !reduce && window.matchMedia('(min-width: 860px)').matches) {
    var raf = false;
    window.addEventListener('scroll', function () {
      if (raf) return;
      raf = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset;
        if (y < window.innerHeight * 1.25) {
          heroMedia.style.transform = 'translate3d(0,' + (y * 0.26).toFixed(1) + 'px,0) scale(1.14)';
        }
        raf = false;
      });
    }, { passive: true });
  }

  /* ---------------------------------------------------------------
     6. FAIXA ROLANTE — duplica o conteúdo até cobrir o ecrã
     --------------------------------------------------------------- */
  var marq = $('#marq');
  if (marq && marq.firstElementChild) {
    var unit = marq.firstElementChild;
    var need = Math.max(2, Math.ceil((window.innerWidth * 2) / Math.max(unit.offsetWidth, 1)));
    for (var i = 1; i < need; i++) marq.appendChild(unit.cloneNode(true));
    // a animação desloca -50%: o conteúdo tem de ser par
    if (marq.children.length % 2 !== 0) marq.appendChild(unit.cloneNode(true));
  }

  /* ---------------------------------------------------------------
     7. CONTADORES E BARRAS
     --------------------------------------------------------------- */
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target) || reduce) { el.textContent = String(target || el.textContent); return; }
    var start = null, dur = 900;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var kickers = $$('[data-count], .phone__bar i[data-fill]');
  if (kickers.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      kickers.forEach(function (el) {
        if (el.hasAttribute('data-count')) countUp(el);
        else el.style.width = el.getAttribute('data-fill') + '%';
      });
    } else {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          if (el.hasAttribute('data-count')) {
            countUp(el);
          } else {
            el.style.transition = 'width 1.1s cubic-bezier(.16,1,.3,1)';
            el.style.width = el.getAttribute('data-fill') + '%';
          }
          io2.unobserve(el);
        });
      }, { threshold: 0.4 });
      kickers.forEach(function (el) {
        if (!el.hasAttribute('data-count')) el.style.width = '0%';
        io2.observe(el);
      });
    }
  }

  /* ---------------------------------------------------------------
     8. HORÁRIOS + ABERTO AGORA
        Seg–Sex 06:00–00:00 · Sáb e feriados 07:00–19:00 · Dom 08:00–12:00
     --------------------------------------------------------------- */
  var SCHEDULE = {
    0: [480, 720],           // domingo
    1: [360, 1440], 2: [360, 1440], 3: [360, 1440], 4: [360, 1440], 5: [360, 1440],
    6: [420, 1140]           // sábado
  };

  function nowInSaoPaulo() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(new Date());
      var get = function (t) {
        for (var i = 0; i < parts.length; i++) if (parts[i].type === t) return parts[i].value;
        return '';
      };
      var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var day = days[get('weekday')];
      var h = parseInt(get('hour'), 10) % 24;
      var m = parseInt(get('minute'), 10);
      if (day === undefined || isNaN(h) || isNaN(m)) throw new Error('tz');
      return { day: day, minutes: h * 60 + m };
    } catch (err) {
      var n = new Date();
      return { day: n.getDay(), minutes: n.getHours() * 60 + n.getMinutes() };
    }
  }

  function fmt(mins) {
    var h = Math.floor(mins / 60) % 24, m = mins % 60;
    return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2);
  }

  function renderHours() {
    var t = nowInSaoPaulo();
    var today = SCHEDULE[t.day];
    var isOpen = !!today && t.minutes >= today[0] && t.minutes < today[1];

    $$('.hrow').forEach(function (row) {
      row.classList.toggle('is-today', parseInt(row.getAttribute('data-day'), 10) === t.day);
    });

    var sub = '';
    if (isOpen) {
      sub = today[1] >= 1440 ? 'Fecha à meia-noite' : 'Fecha às ' + fmt(today[1]);
    } else if (today && t.minutes < today[0]) {
      sub = 'Abre hoje às ' + fmt(today[0]);
    } else {
      var names = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
      var d = t.day;
      for (var g = 1; g <= 7; g++) {
        d = (d + 1) % 7;
        if (SCHEDULE[d]) { sub = 'Abre ' + (g === 1 ? 'amanhã' : names[d]) + ' às ' + fmt(SCHEDULE[d][0]); break; }
      }
    }

    [['status', 'statusTxt'], ['status2', 'statusTxt2']].forEach(function (pair) {
      var box = document.getElementById(pair[0]);
      var txt = document.getElementById(pair[1]);
      if (!box || !txt) return;
      box.classList.toggle('is-open', isOpen);
      box.classList.toggle('is-closed', !isOpen);
      txt.textContent = isOpen ? 'Aberto agora' : 'Fechado agora';
    });

    var statusSub = $('#statusSub');
    if (statusSub) statusSub.textContent = sub;
  }
  renderHours();
  setInterval(renderHours, 60000);

  /* ---------------------------------------------------------------
     9. MAPA SOB DEMANDA — só carrega quando o visitante pede
     --------------------------------------------------------------- */
  var cover = $('#mapCover');
  var mapBox = $('#mapBox');
  if (cover && mapBox) {
    cover.addEventListener('click', function () {
      if (mapBox.dataset.loaded) return;
      mapBox.dataset.loaded = '1';
      var f = document.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=Elemento%20Fit%20Academia%2C%20Rua%20Martim%20Pescador%2C%20917%2C%20Bombas%2C%20Bombinhas%20-%20SC&z=16&output=embed';
      f.title = 'Mapa da Elemento Fit Academia — R. Martim Pescador, 917, Bombas, Bombinhas/SC';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      mapBox.appendChild(f);
      cover.remove();
    });
  }

  /* ---------------------------------------------------------------
     10. LINK ATIVO NA NAVBAR
     --------------------------------------------------------------- */
  var ids = ['inicio', 'sobre', 'estrutura', 'planos', 'app', 'horarios', 'localizacao'];
  var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$('.nav__links a').forEach(function (a) {
          a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------------------------------------------------------
     11. ANO NO RODAPÉ
     --------------------------------------------------------------- */
  var ano = $('#ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();

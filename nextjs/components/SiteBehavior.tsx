'use client';

import { useEffect } from 'react';
import { HORARIOS } from '@/lib/site';

/**
 * Comportamento do site — a versão React do assets/js/main.js do site estático.
 *
 *  1. Navbar, barra de progresso e botão flutuante
 *  2. Menu mobile
 *  3. Divisão dos títulos em linhas (revelação por máscara)
 *  4. Observador de revelações, com atraso escalonado
 *  5. Parallax do hero
 *  6. Faixa rolante
 *  7. Contadores e barras
 *  8. Horários + selo ABERTO AGORA
 *  9. Mapa sob demanda
 * 10. Link ativo na navbar
 * 11. Ano no rodapé
 */
export default function SiteBehavior() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];
    const $ = <T extends Element>(s: string) => document.querySelector<T>(s);
    const $$ = <T extends Element>(s: string) => Array.from(document.querySelectorAll<T>(s));

    /* ---------- 1. NAVBAR + PROGRESSO + BOTÃO FLUTUANTE ---------- */
    const nav = $<HTMLElement>('#nav');
    const fab = $<HTMLElement>('#fab');
    const prog = $<HTMLElement>('#prog');
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      nav?.classList.toggle('is-stuck', y > 30);
      fab?.classList.toggle('is-on', y > 560);
      if (prog) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
    };
    const scrollHandler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', scrollHandler));

    /* ---------- 2. MENU MOBILE ---------- */
    const burger = $<HTMLButtonElement>('#burger');
    const drawer = $<HTMLElement>('#drawer');
    $$<HTMLElement>('.drawer__link').forEach((a, i) => { a.style.transitionDelay = `${90 + i * 55}ms`; });

    const setDrawer = (open: boolean) => {
      if (!burger || !drawer) return;
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      drawer.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    const onBurger = () => setDrawer(burger?.getAttribute('aria-expanded') !== 'true');
    const onDrawerClick = (e: Event) => { if ((e.target as HTMLElement).closest('a')) setDrawer(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawer(false); };
    burger?.addEventListener('click', onBurger);
    drawer?.addEventListener('click', onDrawerClick);
    document.addEventListener('keydown', onKey);
    cleanups.push(() => {
      burger?.removeEventListener('click', onBurger);
      drawer?.removeEventListener('click', onDrawerClick);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    });

    /* ---------- 3. TÍTULOS DIVIDIDOS EM LINHAS ---------- */
    $$<HTMLElement>('[data-split]').forEach((el) => {
      if (el.dataset.done === '1') return;
      el.dataset.done = '1';
      const parts = el.innerHTML.split(/<br\s*\/?>/i);
      el.innerHTML = parts
        .map((p, i) => `<span class="ln" style="--d:${i * 95}ms"><i>${p.trim()}</i></span>`)
        .join('');
    });

    /* ---------- 4. REVELAÇÕES ---------- */
    const SEL = '.rv-lines, .rv-clip, .rv-up, .rv-row, .rv-rule';
    const animated = $$<HTMLElement>(SEL);

    const groups: Record<string, number> = {};
    animated.forEach((el) => {
      if (!el.classList.contains('rv-row')) return;
      const p = el.parentElement;
      if (!p) return;
      let key = p.getAttribute('data-grp');
      if (!key) { key = `g${Object.keys(groups).length}`; p.setAttribute('data-grp', key); groups[key] = 0; }
      el.style.setProperty('--d', `${groups[key]++ * 65}ms`);
    });

    let io: IntersectionObserver | undefined;
    if (reduce || !('IntersectionObserver' in window)) {
      animated.forEach((el) => el.classList.add('is-in'));
    } else {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io?.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
      animated.forEach((el) => io!.observe(el));
    }
    cleanups.push(() => io?.disconnect());

    /* ---------- 5. PARALLAX DO HERO ---------- */
    const heroMedia = $<HTMLElement>('#heroMedia');
    if (heroMedia && !reduce && window.matchMedia('(min-width: 860px)').matches) {
      let raf = false;
      const onParallax = () => {
        if (raf) return;
        raf = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.25) {
            heroMedia.style.transform = `translate3d(0,${(y * 0.26).toFixed(1)}px,0) scale(1.14)`;
          }
          raf = false;
        });
      };
      window.addEventListener('scroll', onParallax, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onParallax));
    }

    /* ---------- 6. FAIXA ROLANTE ---------- */
    const marq = $<HTMLElement>('#marq');
    if (marq && marq.firstElementChild && marq.children.length === 1) {
      const unit = marq.firstElementChild as HTMLElement;
      const need = Math.max(2, Math.ceil((window.innerWidth * 2) / Math.max(unit.offsetWidth, 1)));
      for (let i = 1; i < need; i++) marq.appendChild(unit.cloneNode(true));
      if (marq.children.length % 2 !== 0) marq.appendChild(unit.cloneNode(true));
    }

    /* ---------- 7. CONTADORES E BARRAS ---------- */
    const countUp = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute('data-count') || '', 10);
      if (isNaN(target) || reduce) { el.textContent = String(target || el.textContent); return; }
      let start: number | null = null;
      const dur = 900;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const kickers = $$<HTMLElement>('[data-count], .phone__bar i[data-fill]');
    let io2: IntersectionObserver | undefined;
    if (kickers.length) {
      if (reduce || !('IntersectionObserver' in window)) {
        kickers.forEach((el) => {
          if (el.hasAttribute('data-count')) countUp(el);
          else el.style.width = `${el.getAttribute('data-fill')}%`;
        });
      } else {
        io2 = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            if (el.hasAttribute('data-count')) {
              countUp(el);
            } else {
              el.style.transition = 'width 1.1s cubic-bezier(.16,1,.3,1)';
              el.style.width = `${el.getAttribute('data-fill')}%`;
            }
            io2?.unobserve(el);
          });
        }, { threshold: 0.4 });
        kickers.forEach((el) => {
          if (!el.hasAttribute('data-count')) el.style.width = '0%';
          io2!.observe(el);
        });
      }
    }
    cleanups.push(() => io2?.disconnect());

    /* ---------- 8. HORÁRIOS + ABERTO AGORA ---------- */
    const nowInSaoPaulo = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Sao_Paulo',
          weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
        }).formatToParts(new Date());
        const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
        const days: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
        const day = days[get('weekday')];
        const h = parseInt(get('hour'), 10) % 24;
        const m = parseInt(get('minute'), 10);
        if (day === undefined || isNaN(h) || isNaN(m)) throw new Error('tz');
        return { day, minutes: h * 60 + m };
      } catch {
        const n = new Date();
        return { day: n.getDay(), minutes: n.getHours() * 60 + n.getMinutes() };
      }
    };
    const fmt = (mins: number) => {
      const h = Math.floor(mins / 60) % 24;
      const m = mins % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    };
    const renderHours = () => {
      const t = nowInSaoPaulo();
      const today = HORARIOS[t.day];
      const isOpen = !!today && t.minutes >= today[0] && t.minutes < today[1];

      $$<HTMLElement>('.hrow').forEach((row) => {
        row.classList.toggle('is-today', Number(row.dataset.day) === t.day);
      });

      let sub = '';
      if (isOpen && today) {
        sub = today[1] >= 1440 ? 'Fecha à meia-noite' : `Fecha às ${fmt(today[1])}`;
      } else if (today && t.minutes < today[0]) {
        sub = `Abre hoje às ${fmt(today[0])}`;
      } else {
        const nomes = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
        let d = t.day;
        for (let g = 1; g <= 7; g++) {
          d = (d + 1) % 7;
          const h = HORARIOS[d];
          if (h) { sub = `Abre ${g === 1 ? 'amanhã' : nomes[d]} às ${fmt(h[0])}`; break; }
        }
      }

      ([['status', 'statusTxt'], ['status2', 'statusTxt2']] as const).forEach(([boxId, txtId]) => {
        const box = document.getElementById(boxId);
        const txt = document.getElementById(txtId);
        if (!box || !txt) return;
        box.classList.toggle('is-open', isOpen);
        box.classList.toggle('is-closed', !isOpen);
        txt.textContent = isOpen ? 'Aberto agora' : 'Fechado agora';
      });

      const statusSub = document.getElementById('statusSub');
      if (statusSub) statusSub.textContent = sub;
    };
    renderHours();
    const timer = window.setInterval(renderHours, 60000);
    cleanups.push(() => clearInterval(timer));

    /* ---------- 9. MAPA SOB DEMANDA ---------- */
    const cover = $<HTMLElement>('#mapCover');
    const mapBox = $<HTMLElement>('#mapBox');
    const loadMap = () => {
      if (!mapBox || mapBox.dataset.loaded) return;
      mapBox.dataset.loaded = '1';
      const f = document.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=Elemento%20Fit%20Academia%2C%20Rua%20Martim%20Pescador%2C%20917%2C%20Bombas%2C%20Bombinhas%20-%20SC&z=16&output=embed';
      f.title = 'Mapa da Elemento Fit Academia — R. Martim Pescador, 917, Bombas, Bombinhas/SC';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      mapBox.appendChild(f);
      cover?.remove();
    };
    cover?.addEventListener('click', loadMap);
    cleanups.push(() => cover?.removeEventListener('click', loadMap));

    /* ---------- 10. LINK ATIVO NA NAVBAR ---------- */
    const ids = ['inicio', 'sobre', 'estrutura', 'planos', 'app', 'horarios', 'localizacao'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    let spy: IntersectionObserver | undefined;
    if (sections.length && 'IntersectionObserver' in window) {
      spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          $$('.nav__links a').forEach((a) => {
            a.setAttribute('aria-current', a.getAttribute('href') === `#${e.target.id}` ? 'true' : 'false');
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach((s) => spy!.observe(s));
    }
    cleanups.push(() => spy?.disconnect());

    /* ---------- 11. ANO NO RODAPÉ ---------- */
    const ano = document.getElementById('ano');
    if (ano) ano.textContent = String(new Date().getFullYear());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

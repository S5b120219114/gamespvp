/* ═══════════════════════════════════════════════════════════════
   Games PvP — topic.js
   Interacción del símbolo gigante de Games PvP en "Conozcamos el tema":
   flota en bucle, se "carga" al acercarse (hover/foco) y al hacer clic
   EXPLOTA en la categoría: partículas radiales + onda de choque +
   revelado animado del contenido y desplazamiento a la primera sección.
   Accesible por teclado (es un <button>), con aviso aria-live y
   respeto a prefers-reduced-motion.
   ═══════════════════════════════════════════════════════════════ */

import { t } from './i18n.js';

const GLYPHS = ['◆', '✦', '⚔', '★', '▣', '✚', '●', '▲'];
const COLORS = [
  'var(--color-accent)',
  'var(--color-primary)',
  'var(--color-focus)',
  'var(--color-text-muted)',
];

/** Inicializa el símbolo (se llama tras cada render del router). */
export function initTopicEmblem() {
  const btn = document.getElementById('gp-emblem');
  if (!btn) return;

  const stage = btn.closest('.topic-hero__stage');
  const particles = document.getElementById('gp-particles');
  const content = document.getElementById('topic-content');
  const status = document.getElementById('gp-status');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let busy = false;

  const spawnParticles = () => {
    if (!particles) return;
    const count = 20;
    for (let i = 0; i < count; i += 1) {
      const sp = document.createElement('span');
      sp.className = 'gp-particle';
      sp.textContent = GLYPHS[i % GLYPHS.length];

      const angle = (360 / count) * i + (Math.random() * 16 - 8);
      const rad = (angle * Math.PI) / 180;
      const dist = 110 + Math.random() * 100;

      sp.style.setProperty('--tx', `${Math.cos(rad) * dist}px`);
      sp.style.setProperty('--ty', `${Math.sin(rad) * dist}px`);
      sp.style.setProperty('--r', `${Math.round(Math.random() * 540 - 270)}deg`);
      sp.style.setProperty('--delay', `${Math.round(Math.random() * 110)}ms`);
      sp.style.setProperty('--c', COLORS[i % COLORS.length]);

      particles.appendChild(sp);
    }
  };

  const explode = () => {
    if (busy) return;
    busy = true;

    btn.classList.add('is-exploding');
    stage?.classList.add('is-exploding');
    if (!reduced) spawnParticles();

    const reveal = () => {
      content?.classList.add('is-revealed');
      if (status) status.textContent = t('topicExplodeStatus');
      const first = document.getElementById('tema-explicacion');
      if (first && typeof first.scrollIntoView === 'function') {
        first.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
      }
    };

    if (reduced) reveal();
    else window.setTimeout(reveal, 360);

    window.setTimeout(() => {
      btn.classList.remove('is-exploding');
      btn.classList.add('is-returning');
      stage?.classList.remove('is-exploding');
      if (particles) particles.innerHTML = '';
      window.setTimeout(() => {
        btn.classList.remove('is-returning');
        busy = false;
      }, 620);
    }, reduced ? 40 : 1150);
  };

  btn.addEventListener('click', explode);
}

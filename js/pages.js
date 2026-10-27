/* ═══════════════════════════════════════════════════════════════
   Games PvP — pages.js
   Renderizadores de cada categoría (contenido del <main>). Cada
   función devuelve HTML y se re-ejecuta al cambiar idioma/ruta.
   ═══════════════════════════════════════════════════════════════ */

import {
  CATEGORIES,
  PVP_SECTIONS,
  TEXTURE_PACKS,
  SPEEDRUN_TECHNIQUES,
  SPEEDRUN_VIDEOS,
  CUPHEAD_VIDEOS,
  HOLLOW_VIDEOS,
  HEALTH_GROUPS,
  PERIPHERAL_BLOCKS,
  SOURCES,
  EXTRA_SOURCES,
  TOPIC_BLOCKS,
  WORLD_EXAMPLES,
  SCHOOL_EXAMPLES,
  RECORD_CARDS,
  PERSPECTIVES,
  STREAMER_CASES,
  STREAMER_GALLERY,
  CATEGORY_IMAGES,
  MEDIA_CREDITS,
  ytWatch,
} from './data.js';
import { t, getLang } from './i18n.js';
import {
  pageHead,
  videoCard,
  techniqueCard,
  productCard,
  tipCard,
  packCard,
  refItem,
  icon,
  esc,
  pick,
  mediaFigure,
  imgTag,
  sourceLinks,
  statChips,
  bulletList,
  sectionHead,
} from './ui.js';

/* Descripción traducible de cada subsección de Minecraft PVP */
const PVP_DESC_KEYS = {
  'pvp-intro': 'pvpIntroDesc',
  'pvp-keybinds': 'pvpKeybindsDesc',
  'pvp-configs': 'pvpConfigsDesc',
  'pvp-sword': 'pvpSwordDesc',
  'pvp-uhc-axe': 'pvpUhcAxeDesc',
  'pvp-smp': 'pvpSmpDesc',
  'pvp-mace': 'pvpMaceDesc',
  'pvp-packs': 'pvpPacksDesc',
};

/* ── INTRODUCCIÓN ── */
function renderIntroduccion() {
  const cards = CATEGORIES.filter((c) => c.id !== 'introduccion' && c.id !== 'fuentes')
    .map(
      (c) => `
      <a class="card" href="#${c.path}" style="text-decoration:none;color:inherit">
        <div class="tip-icon">${icon('gamepad')}</div>
        <h3 style="font-family:var(--font-ui);margin:8px 0 4px">${esc(c.label)}</h3>
        <p class="text-muted" style="font-family:var(--font-ui);font-size:.9rem;margin:0">
          ${esc(introCardBlurb(c.id))}
        </p>
      </a>`
    )
    .join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Games PvP', title: t('introLead'), lead: '' })}
      <section class="section-block" style="margin-top:0">
        <div class="card" style="padding:clamp(24px,4vw,44px)">
          <p style="font-size:1.18rem;line-height:1.8;margin:0">${esc(t('introText'))}</p>
        </div>
      </section>
      <section class="section-block">
        <h2>Explora</h2>
        <div class="grid grid--3">${cards}</div>
      </section>
    </div>`;
}

/* Blurbs cortos (traducibles) para las tarjetas de la portada */
function introCardBlurb(id) {
  const blurbs = {
    es: {
      'conoce-el-tema': 'Qué somos + por qué te importa. Sin rollo.',
      'mirada-amplia': 'Países, escuelas, récords y streamers. En corto.',
      'minecraft-pvp': 'Sword, UHC, mace, SMP, configs y texture packs.',
      'minecraft-speedrun': 'Técnicas para correr el juego a máxima velocidad.',
      cuphead: 'Speedrun del juego base y del DLC.',
      'hollow-knight': 'Guías crazy y rutas Any% explicadas.',
      recomendaciones: 'Postura, salud visual y descansos.',
      perifericos: 'Mouses y teclados recomendados por juego.',
    },
    en: {
      'conoce-el-tema': 'Who we are + why you should care. No fluff.',
      'mirada-amplia': 'Countries, schools, records and streamers. Short version.',
      'minecraft-pvp': 'Sword, UHC, mace, SMP, configs and texture packs.',
      'minecraft-speedrun': 'Techniques to run the game at top speed.',
      cuphead: 'Speedrun of the main game and the DLC.',
      'hollow-knight': 'Crazy guides and Any% routes explained.',
      recomendaciones: 'Posture, visual health and breaks.',
      perifericos: 'Recommended mice and keyboards per game.',
    },
  };
  return blurbs[getLang()]?.[id] ?? '';
}

/* Imagen de cabecera opcional para las categorías clásicas. */
function categoryImage(id) {
  const img = CATEGORY_IMAGES[id];
  return img ? mediaFigure(img, 'media-figure--hero') : '';
}

/* Botón/enlace que navega respetando anclas internas del router. */
function goLink(label, route, anchor = null) {
  return `
    <a class="btn" href="#${route}" data-go-route="${esc(route)}" ${anchor ? `data-go-anchor="${esc(anchor)}"` : ''}>
      ${icon('arrow')}<span>${esc(label)}</span>
    </a>`;
}

/* ══════════════ SUBPÁGINA 1 — CONOZCAMOS EL TEMA ══════════════ */

function renderTopicBlock(block, index) {
  const image = block.image ? mediaFigure(block.image, 'media-figure--card') : '';
  return `
    <section class="section-block topic-block" id="${block.id}">
      <div class="topic-block__head">
        <span class="topic-block__icon" aria-hidden="true">${icon(block.icon)}</span>
        <div>
          <span class="eyebrow">${esc(pick(block.label))}</span>
          <h2>${esc(pick(block.title))}</h2>
          <p class="topic-block__lead">${esc(pick(block.lead))}</p>
        </div>
        <span class="topic-block__num" aria-hidden="true">0${index + 1}</span>
      </div>
      <div class="topic-block__grid ${image ? '' : 'is-single'}">
        <div class="topic-block__text">
          ${block.body.map((p) => `<p>${esc(pick(p))}</p>`).join('')}
          ${
            block.bullets
              ? `<h3 class="mini-title">${icon('zap')} ${esc(t('topicBulletsTitle'))}</h3>${bulletList(block.bullets)}`
              : ''
          }
          ${block.stats ? `<h3 class="mini-title">${icon('trending')} ${esc(t('topicStatTitle'))}</h3>${statChips(block.stats)}` : ''}
          ${
            block.callout
              ? `<div class="callout">${icon('lightbulb')}<p>${esc(pick(block.callout))}</p></div>`
              : ''
          }
          ${sourceLinks([block.source, block.source2].filter(Boolean))}
          ${block.cta ? goLink(pick(block.cta.label), block.cta.route, block.cta.anchor) : ''}
        </div>
        ${image}
      </div>
    </section>`;
}

function renderConoceElTema() {
  const anchorNav = `
    <nav class="anchor-nav" aria-label="${esc(t('anchorNavTema'))}">
      ${TOPIC_BLOCKS.map((b, i) => `<button type="button" data-scroll="${b.id}">${esc(pick(b.label))}</button>`).join('')}
    </nav>`;

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Games PvP', title: t('conozcamos'), lead: t('conozcamosLead') })}

      <!-- Símbolo gigante: flota, se carga al acercarse y EXPLOTA al hacer clic -->
      <section class="topic-hero" aria-label="${esc(t('conozcamos'))}">
        <div class="topic-hero__copy">
          <span class="eyebrow">${esc(t('topicHeroEyebrow'))}</span>
          <p class="topic-hero__mission">${esc(pick(TOPIC_BLOCKS[0].lead))}</p>
          <p class="topic-hero__sub"><strong>Games PvP</strong> · ${esc(t('topicEmblemBurst'))}</p>
        </div>
        <div class="topic-hero__stage">
          <span class="topic-hero__halo" aria-hidden="true"></span>
          <button
            class="gp-emblem"
            id="gp-emblem"
            type="button"
            aria-label="${esc(t('topicEmblemAria'))}"
            aria-describedby="gp-emblem-hint"
          >
            <span class="gp-emblem__one" aria-hidden="true">1</span>
            <span class="gp-emblem__ring" aria-hidden="true"></span>
            <span class="gp-emblem__core" aria-hidden="true">
              <span class="gp-emblem__mark">GP</span>
              <span class="gp-emblem__text">Games PvP</span>
            </span>
          </button>
          <div class="gp-particles" id="gp-particles" aria-hidden="true"></div>
          <p class="topic-hero__hint" id="gp-emblem-hint">
            ${icon('zap')} ${esc(t('topicEmblemHint'))} <strong>${esc(t('topicEmblemBurst'))}</strong>
          </p>
          <p class="visually-hidden" id="gp-status" role="status" aria-live="polite"></p>
        </div>
      </section>

      ${anchorNav}

      <div class="topic-content" id="topic-content">
        ${TOPIC_BLOCKS.map(renderTopicBlock).join('')}
      </div>

      <div class="topic-end">
        ${icon('heart')}
        <p>${esc(getLang() === 'es'
          ? 'Jugar bien = cuidarte. Sigue:'
          : 'Play well = take care. Next up:')}</p>
        ${goLink(t('miradaAmplia'), '/mirada-amplia')}
      </div>
    </div>`;
}

/* ══════════════ SUBPÁGINA 2 — MIRADA AMPLIA ══════════════ */

function renderWorldCard(item) {
  return `
    <article class="card context-card">
      <div class="context-card__top">
        <span class="context-card__flag" aria-hidden="true">${esc(item.flag)}</span>
        <span class="badge">${esc(pick(item.year))}</span>
      </div>
      <h3>${esc(pick(item.place))}</h3>
      <h4>${esc(pick(item.title))}</h4>
      <p>${esc(pick(item.body))}</p>
      <p class="context-card__line context-card__line--cause">
        <strong>${esc(t('causeLabel'))}:</strong> ${esc(pick(item.cause))}
      </p>
      <p class="context-card__line context-card__line--effect">
        <strong>${esc(t('effectLabel'))}:</strong> ${esc(pick(item.effect))}
      </p>
      ${sourceLinks([item.source])}
    </article>`;
}

function renderSchoolCard(item) {
  return `
    <article class="card school-card">
      ${item.image ? mediaFigure(item.image, 'media-figure--card') : ''}
      <div class="school-card__body">
        <span class="eyebrow">${esc(pick(item.place))} · ${esc(pick(item.year))}</span>
        <h3>${esc(pick(item.title))}</h3>
        <p>${esc(pick(item.body))}</p>
        ${sourceLinks([item.source])}
      </div>
    </article>`;
}

function renderRecordCard(item) {
  return `
    <article class="card record-card">
      ${item.image ? mediaFigure(item.image, 'media-figure--card') : ''}
      <div class="record-card__body">
        <span class="record-card__kind">${icon('trophy')} ${esc(pick(item.kind))}</span>
        <h3>${esc(pick(item.title))}</h3>
        <p>${esc(pick(item.body))}</p>
        ${sourceLinks([item.source])}
      </div>
    </article>`;
}

function renderPerspectiveCard(item) {
  return `
    <article class="card perspective-card perspective-card--${esc(item.tone)}" id="${item.id}">
      <div class="perspective-card__head">
        <span class="perspective-card__icon">${icon(item.icon)}</span>
        <h3>${esc(pick(item.title))}</h3>
      </div>
      <blockquote>${esc(pick(item.claim))}</blockquote>
      <p class="perspective-card__row">
        <span class="perspective-card__tag">${esc(t('caseLabel'))}</span>
        ${esc(pick(item.case))}
      </p>
      <p class="perspective-card__row perspective-card__row--reply">
        <span class="perspective-card__tag">${esc(t('replyLabel'))}</span>
        ${esc(pick(item.reply))}
      </p>
      ${sourceLinks(item.sources)}
    </article>`;
}

function renderStreamerCard(item) {
  return `
    <article class="card streamer-card">
      <div class="streamer-card__media">${imgTag(item.image)}</div>
      <div class="streamer-card__body">
        <span class="eyebrow">${esc(pick(item.badge))}</span>
        <h3>${esc(item.name)} <small>${esc(item.realName)}</small></h3>
        ${statChips(item.stats)}
        <p>${esc(pick(item.text))}</p>
        ${sourceLinks([item.source])}
        <a class="media-credit" href="${esc(item.image.creditUrl)}" target="_blank" rel="noopener noreferrer">${esc(t('imgCredit'))}: ${esc(item.image.credit)}</a>
      </div>
    </article>`;
}

function renderMiradaAmplia() {
  const sections = [
    { id: 'mundo-paises', label: { es: 'Otros países', en: 'Other countries' } },
    { id: 'mundo-escuelas', label: { es: 'Escuelas', en: 'Schools' } },
    { id: 'mundo-records', label: { es: 'Récords y patrimonio', en: 'Records & heritage' } },
    { id: 'mundo-perspectivas', label: { es: 'Perspectivas', en: 'Perspectives' } },
    { id: 'mundo-streamers', label: { es: 'Streamers', en: 'Streamers' } },
  ];

  const anchorNav = `
    <nav class="anchor-nav" aria-label="${esc(t('anchorNavMirada'))}">
      ${sections.map((s) => `<button type="button" data-scroll="${s.id}">${esc(pick(s.label))}</button>`).join('')}
    </nav>`;

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Games PvP', title: t('miradaAmplia'), lead: t('miradaLead') })}
      ${anchorNav}

      <section class="section-block" id="mundo-paises">
        ${sectionHead(t('miradaWorldTitle'), t('miradaWorldLead'))}
        <div class="grid grid--3">${WORLD_EXAMPLES.map(renderWorldCard).join('')}</div>
        <div class="callout callout--wide">${icon('globe')}<p>${esc(t('miradaWorldNote'))}</p></div>
      </section>

      <section class="section-block" id="mundo-escuelas">
        ${sectionHead(t('miradaSchoolTitle'), t('miradaSchoolLead'))}
        <div class="grid grid--2">${SCHOOL_EXAMPLES.map(renderSchoolCard).join('')}</div>
      </section>

      <section class="section-block" id="mundo-records">
        ${sectionHead(t('miradaRecordsTitle'), t('miradaRecordsLead'))}
        <div class="grid grid--3">${RECORD_CARDS.map(renderRecordCard).join('')}</div>
        <div class="callout callout--wide">${icon('music')}<p>${esc(t('miradaRecordsNote'))}</p></div>
      </section>

      <section class="section-block" id="mundo-perspectivas">
        ${sectionHead(t('miradaPerspectivesTitle'), t('miradaPerspectivesLead'))}
        <div class="grid grid--2">${PERSPECTIVES.map(renderPerspectiveCard).join('')}</div>
      </section>

      <section class="section-block" id="mundo-streamers">
        ${sectionHead(t('miradaStreamersTitle'), t('miradaStreamersLead'))}
        <div class="grid streamer-grid">${STREAMER_CASES.map(renderStreamerCard).join('')}</div>

        <h3 class="sub-heading">${icon('sparkles')} ${esc(t('miradaGalleryTitle'))}</h3>
        <div class="gallery">
          ${STREAMER_GALLERY.map(
            (g) => `
            <figure class="gallery__item">
              ${imgTag({ src: g.src, alt: g.alt ?? g.caption, fallback: g.fallback })}
              <figcaption>
                <span>${esc(pick(g.caption))}</span>
                ${g.credit ? `<a class="media-credit" href="${esc(g.creditUrl)}" target="_blank" rel="noopener noreferrer">${esc(t('imgCredit'))}: ${esc(g.credit)}</a>` : ''}
              </figcaption>
            </figure>`
          ).join('')}
        </div>
        <p class="gallery__note">${esc(t('miradaGalleryNote'))}</p>
      </section>

      <div class="topic-end">
        ${icon('heart')}
        <p>${esc(getLang() === 'es'
          ? 'Todo vuelve a lo mismo: jugar con cabeza.'
          : 'It all comes back to: play smart.')}</p>
        ${goLink(t('conozcamos'), '/conoce-el-tema')}
      </div>
    </div>`;
}

/* ── MINECRAFT PVP ── */
function renderMinecraftPvp() {
  const anchorNav = `
    <nav class="anchor-nav" aria-label="${esc(t('anchorNav'))}">
      ${PVP_SECTIONS.map(
        (s) => `<button type="button" data-scroll="${s.id}">${esc(s.label)}</button>`
      ).join('')}
    </nav>`;

  const sections = PVP_SECTIONS.map((s) => {
    const desc = t(PVP_DESC_KEYS[s.id]);
    const body = s.packs
      ? `<div class="grid grid--2">${TEXTURE_PACKS.map(packCard).join('')}</div>`
      : s.videos.map(videoCard).join('');
    return `
      <section class="section-block" id="${s.id}">
        <h2 class="${s.emph ? 'is-emph' : ''}">${s.emph ? `<strong>${esc(s.label)}</strong>` : esc(s.label)}</h2>
        <p class="text-muted" style="max-width:720px">${esc(desc)}</p>
        ${body}
      </section>`;
  }).join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Minecraft', title: 'Minecraft PVP', lead: t('pvpLead') })}
      ${categoryImage('minecraft-pvp')}
      ${anchorNav}
      ${sections}
    </div>`;
}

/* ── MINECRAFT SPEEDRUN ── */
function renderSpeedrun() {
  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Minecraft', title: 'Minecraft Speedrun', lead: t('speedrunLead') })}
      <section class="section-block" style="margin-top:0">
        <h2>${esc(t('techniquesTitle'))}</h2>
        <div class="grid grid--2">
          ${SPEEDRUN_TECHNIQUES.map(techniqueCard).join('')}
        </div>
      </section>
      <section class="section-block">
        <h2>${esc(t('videosTitle'))}</h2>
        ${SPEEDRUN_VIDEOS.map(videoCard).join('')}
      </section>
    </div>`;
}

/* ── CUPHEAD ── */
function renderCuphead() {
  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Cuphead', title: 'Cuphead', lead: t('cupheadLead') })}
      ${categoryImage('cuphead')}
      <section class="section-block" style="margin-top:0">
        <h2>${esc(t('cupheadSection'))}</h2>
        ${CUPHEAD_VIDEOS.map(videoCard).join('')}
      </section>
    </div>`;
}

/* ── HOLLOW KNIGHT ── */
function renderHollowKnight() {
  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Hollow Knight', title: 'Hollow Knight', lead: t('hollowLead') })}
      ${categoryImage('hollow-knight')}
      <section class="section-block" style="margin-top:0">
        <h2>${esc(t('hollowSection'))}</h2>
        ${HOLLOW_VIDEOS.map(videoCard).join('')}
      </section>
    </div>`;
}

/* ── RECOMENDACIONES (salud) ── */
function renderRecomendaciones() {
  const groups = HEALTH_GROUPS.map(
    (g) => `
    <section class="section-block" id="salud-${g.id}">
      <h2>${esc(t(g.titleKey))}</h2>
      <div class="grid grid--3">
        ${g.items.map(tipCard).join('')}
      </div>
    </section>`
  ).join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Salud', title: t('recomendaciones'), lead: t('recomendacionesLead') })}
      ${categoryImage('recomendaciones')}
      ${groups}
    </div>`;
}

/* ── PERIFÉRICOS ── */
function renderPerifericos() {
  const blocks = PERIPHERAL_BLOCKS.map((block) => {
    const groups = block.groups
      .map(
        (g) => `
        <section class="section-block" id="${g.id}" style="margin-top:34px">
          <h3 style="font-family:var(--font-ui);font-size:1.25rem;display:flex;align-items:center;gap:10px">
            ${icon(g.icon)} ${esc(t(g.labelKey))}
          </h3>
          <div class="grid grid--3">
            ${g.products.map(productCard).join('')}
          </div>
        </section>`
      )
      .join('');
    return `
      <section class="section-block" id="${block.id}" style="margin-top:0">
        <h2>${esc(block.title)}</h2>
        ${groups}
      </section>`;
  }).join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Periféricos', title: t('perifericos'), lead: t('perifericosLead') })}
      ${blocks}
    </div>`;
}

/* ── FUENTES (referencias tipo APA simplificado) ── */
function renderFuentes() {
  /* 1. Videos agrupados por categoría de origen */
  const videoGroups = [
    { title: 'Minecraft PVP', items: PVP_SECTIONS.flatMap((s) => s.videos || []) },
    { title: 'Minecraft Speedrun', items: SPEEDRUN_VIDEOS },
    { title: 'Cuphead', items: CUPHEAD_VIDEOS },
    { title: 'Hollow Knight', items: HOLLOW_VIDEOS },
  ];

  const videoRefs = videoGroups
    .map(
      (g) => `
      <section class="ref-group">
        <h2>${esc(g.title)} — ${esc(t('refsYoutube'))}</h2>
        <ul class="ref-list">
          ${g.items
            .map((v) =>
              refItem({
                text: `${v.title}. ${v.creator ? v.creator + '. ' : ''}YouTube.${v.start ? ` [${v.start}s].` : ''}`,
                url: ytWatch(v.yt, v.start || 0),
              })
            )
            .join('')}
        </ul>
      </section>`
    )
    .join('');

  /* 2. Texture packs (enlaces pendientes → se muestran como pendientes) */
  const packRefs = `
    <section class="ref-group">
      <h2>${esc(t('refsPacks'))}</h2>
      <ul class="ref-list">
        ${TEXTURE_PACKS.map((p) =>
          refItem({
            text: `${p.name}${p.author && p.author !== '—' ? '. ' + p.author : ''}. Google Drive.${p.url ? '' : ' (enlace pendiente)'}`,
            url: p.url ?? 'https://drive.google.com/',
          })
        ).join('')}
      </ul>
    </section>`;

  /* 3. Salud */
  const healthList = Object.values(SOURCES).map((s) => ({
    text: `${s.name}. Consulta del ${new Date().toISOString().slice(0, 10)}.`,
    url: s.url,
  }));
  const healthRefs = `
    <section class="ref-group">
      <h2>${esc(t('refsHealth'))}</h2>
      <ul class="ref-list">${healthList.map(refItem).join('')}</ul>
    </section>`;

  /* 4. Productos */
  const seen = new Set();
  const productRefs = PERIPHERAL_BLOCKS.flatMap((b) =>
    b.groups.flatMap((g) => g.products)
  )
    .filter((p) => (seen.has(p.name) ? false : (seen.add(p.name), true)))
    .map((p) => refItem({ text: `${p.name}. ${p.tag}. ${t('refsAccessed')} 2026-10-15.`, url: p.url }));
  const productsBlock = `
    <section class="ref-group">
      <h2>${esc(t('refsProducts'))}</h2>
      <ul class="ref-list">${productRefs.join('')}</ul>
    </section>`;

  /* 5. Nuevas categorías: salud/bienestar, contexto, streamers */
  const sourceGroup = (title, list) => `
    <section class="ref-group">
      <h2>${esc(title)}</h2>
      <ul class="ref-list">${list.map((s) => refItem({ text: s.name, url: s.url })).join('')}</ul>
    </section>`;

  const topicRefs = sourceGroup(t('refsTopic'), [
    EXTRA_SOURCES.who, EXTRA_SOURCES.oxford2022, EXTRA_SOURCES.oxford2024,
  ]);

  const worldRefs = sourceGroup(t('refsWorld'), [
    EXTRA_SOURCES.northKorea, EXTRA_SOURCES.cpj, EXTRA_SOURCES.chinaBan,
    EXTRA_SOURCES.swedenSchool, EXTRA_SOURCES.minecraftEdu, EXTRA_SOURCES.halmstad,
    EXTRA_SOURCES.blockByBlock, EXTRA_SOURCES.guinnessBest, EXTRA_SOURCES.guinnessSchool,
    EXTRA_SOURCES.bbc300m, EXTRA_SOURCES.loc,
  ]);

  const streamerRefs = sourceGroup(t('refsStreamers'), [
    EXTRA_SOURCES.spreen, EXTRA_SOURCES.speedTime, EXTRA_SOURCES.speedForbes,
  ]);

  /* 6. Créditos de las imágenes locales */
  const mediaRefs = `
    <section class="ref-group">
      <h2>${esc(t('refsMedia'))}</h2>
      <ul class="ref-list">
        ${MEDIA_CREDITS.map((m) =>
          refItem({ text: `${pick(m.label)} — assets/${m.file}. ${m.site}.`, url: m.url })
        ).join('')}
      </ul>
    </section>`;

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Referencias', title: t('fuentes'), lead: t('fuentesLead') })}
      ${topicRefs}
      ${worldRefs}
      ${streamerRefs}
      ${videoRefs}
      ${packRefs}
      ${healthRefs}
      ${productsBlock}
      ${mediaRefs}
    </div>`;
}

/* ── Mapa ruta → renderizador ── */
export const PAGES = {
  introduccion: renderIntroduccion,
  'conoce-el-tema': renderConoceElTema,
  'mirada-amplia': renderMiradaAmplia,
  'minecraft-pvp': renderMinecraftPvp,
  'minecraft-speedrun': renderSpeedrun,
  cuphead: renderCuphead,
  'hollow-knight': renderHollowKnight,
  recomendaciones: renderRecomendaciones,
  perifericos: renderPerifericos,
  fuentes: renderFuentes,
};

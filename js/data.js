/* ═══════════════════════════════════════════════════════════════
   Games PvP — data.js
   Catálogo central de contenido: categorías, videos (IDs de YouTube
   extraídos de las URLs originales), técnicas, packs, salud y productos.

   NOTA DE IDIOMA: los nombres de técnicas, categorías, videos,
   periféricos, marcas y creadores se guardan como texto FIJO (nunca
   se traducen). Solo los campos con `{ es, en }` son traducibles.
   ═══════════════════════════════════════════════════════════════ */

/** Construye la URL de embed de YouTube a partir del ID. */
export const ytEmbed = (id, start = 0) =>
  `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`;

/** URL de visualización (para la página de Fuentes). */
export const ytWatch = (id, start = 0) =>
  `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ''}`;

/* ── Categorías (orden exacto del menú; nombres NUNCA se traducen) ── */
export const CATEGORIES = [
  { id: 'introduccion',       path: '/introduccion',       label: 'Introducción',        key: 'introduccion' },
  { id: 'conoce-el-tema',     path: '/conoce-el-tema',     label: 'Conozcamos el tema',  key: 'conozcamos' },
  { id: 'mirada-amplia',      path: '/mirada-amplia',      label: 'Mirada amplia',       key: 'miradaAmplia' },
  { id: 'minecraft-pvp',      path: '/minecraft-pvp',      label: 'Minecraft PVP' },
  { id: 'minecraft-speedrun', path: '/minecraft-speedrun', label: 'Minecraft Speedrun' },
  { id: 'cuphead',            path: '/cuphead',            label: 'Cuphead' },
  { id: 'hollow-knight',      path: '/hollow-knight',      label: 'Hollow Knight' },
  { id: 'recomendaciones',    path: '/recomendaciones',    label: 'Recomendaciones',     key: 'recomendaciones' },
  { id: 'perifericos',        path: '/perifericos',        label: 'Periféricos',         key: 'perifericos' },
  /* Categoría final (también accesible desde el footer) */
  { id: 'fuentes',            path: '/fuentes',            label: 'Fuentes',             key: 'fuentes' },
];

/* ══════════════════════════ MINECRAFT PVP ══════════════════════════ */

/** Subsecciones con anclas internas (sidebar/tabs). */
export const PVP_SECTIONS = [
  {
    id: 'pvp-intro',
    label: 'Introducción',
    videos: [
      {
        title: 'How to DOMINATE Minecraft PvP! (1.9-1.21) Intel Edits',
        yt: 'rA_7wmPG_bg',
        creator: 'Intel Edits',
      },
    ],
  },
  {
    id: 'pvp-keybinds',
    label: 'KeyBinds',
    videos: [
      { title: 'TheoBaldTheBird Keybinds Guide', yt: '471bVlFOpwY', creator: 'TheoBaldTheBird' },
    ],
  },
  {
    id: 'pvp-configs',
    label: 'Configs and Settings',
    videos: [
      { title: 'Coldified Settings', yt: 'vtZ7yLvIVPg', creator: 'Coldified' },
      { title: 'Swight Settings', yt: 'sfFolsqcrXI', creator: 'Swight' },
      { title: 'Marlowww Settings', yt: 'qHxhd84fnLI', creator: 'Marlowww' },
    ],
  },
  {
    id: 'pvp-sword',
    label: 'Sword PVP',
    emph: true, // título en negrita
    videos: [
      { title: 'Melee', yt: 'G_-FqCxdnAE' },
      { title: 'Conexion Sword Tutorial 1.9', yt: '5HhAeUU3AvU' },
      { title: 'ADVANCED Sword PvP Tutorial | Every Technique Explained! (1.20+)', yt: 'NinYq0LcqS8' },
      { title: 'Why Your Minecraft Combos Suck', yt: 'fOvafhkcmzk' },
      { title: 'Crit Chain Guide', yt: '96FUKq_IZFg' },
    ],
  },
  {
    id: 'pvp-uhc-axe',
    label: 'UHC AND AXE',
    emph: true, // título en negrita
    videos: [
      { title: 'Shield Guide', yt: 'mLZ5vtzO93Y' },
      { title: 'How to Stun', yt: 'HRZDGVCrDh4' },
      { title: 'Cooldown Trick', yt: 'oeIcNlftXTQ' },
      { title: 'UHC GUIDE', yt: '22wS7Kl8xAQ', start: 546 },
      { title: 'Cobwebs and Lava Tricks', yt: 'omvr8KKsbPg' },
    ],
  },
  {
    id: 'pvp-smp',
    label: 'SMP Guide',
    videos: [
      { title: 'SMP KIT GUIDE', yt: 'pgrROsKOb5w' },
    ],
  },
  {
    id: 'pvp-mace',
    label: 'Mace PVP',
    videos: [
      {
        title: 'Advanced Guide On How To Dominate Minecraft Mace PVP',
        yt: 'OJIvD1x1juE',
        creator: 'EnchantedSky, KhalithMortimer',
      },
      {
        title: 'Common Mace PvP Mistakes & How to Avoid Them',
        yt: 'YoK3K9HHFSo',
        creator: 'AlexOinks',
      },
      { title: 'How to Dodge EVERY Divebomb in Mace PvP', yt: 'M_8fjxpA2wk' },
    ],
  },
  {
    id: 'pvp-packs',
    label: 'Texture Packs',
    packs: true, // renderiza tarjetas de descarga en vez de videos
  },
];

/**
 * Texture Packs.
 * ⚠ Enlaces de Google Drive: sustituir `url` por el enlace exacto del
 * proyecto (basta con editar este array). Mientras sea `null`, la tarjeta
 * muestra el botón "Próximamente" deshabilitado.
 */
export const TEXTURE_PACKS = [
  { name: 'Vanilla Crystal by Marlowww', author: 'Marlowww', url: null },
  { name: 'Swight V3', author: 'Swight', url: null },
  { name: 'All in one overlay', author: '—', url: null },
  { name: 'BBCGOONKEBABJELQ', author: '—', url: null },
  { name: 'Birria Pack Edit V2', author: '—', url: null },
];

/* ══════════════════════ MINECRAFT SPEEDRUN ══════════════════════ */

/** Técnicas (los nombres se mantienen siempre en su idioma original). */
export const SPEEDRUN_TECHNIQUES = [
  {
    name: 'Fast Resets',
    desc: {
      es: 'Reinicia la partida de forma casi instantánea y vuelve a generar el mundo en segundos para buscar semillas óptimas. Mantener un ritmo de resets alto es clave para empezar runs competitivas.',
      en: 'Restart the run almost instantly and regenerate the world in seconds to fish for optimal seeds. Keeping a high reset pace is key to competitive runs.',
    },
  },
  {
    name: 'Loteo Estructurado',
    desc: {
      es: 'Ruta planificada de recolección inicial: prioriza madera, comida y herramientas en un orden fijo para minimizar la improvisación y los tiempos muertos.',
      en: 'A planned early-game looting route: prioritize wood, food and tools in a fixed order to minimize improvisation and downtime.',
    },
  },
  {
    name: 'Portal de Magma / Lava Bucket',
    desc: {
      es: 'Construye el portal al Nether sin minar obsidiana: usa bloques de magma y cubos de lava para formar el marco y actívalo con agua sobre la lava en la posición correcta.',
      en: 'Build the Nether portal without mining obsidian: use magma blocks and lava buckets to form the frame and ignite it with water over lava in the right spot.',
    },
  },
  {
    name: 'Portal Flintless',
    desc: {
      es: 'Activa el portal sin pedernal ni yesca: genera fuego dentro del marco con lava y materiales combustibles, ahorrando el tiempo de conseguir pedernal.',
      en: 'Light the portal without flint and steel: create fire inside the frame using lava and flammable blocks, saving the time of getting flint.',
    },
  },
  {
    name: 'Uso del Menú F3 (Pie-Ray y E-Ray)',
    desc: {
      es: 'La pantalla de depuración F3 revela coordenadas, bioma y orientación. El Pie-Ray (datos del pie de página) y el E-Ray (entidades) permiten leer pistas para localizar estructuras y portales.',
      en: 'The F3 debug screen reveals coordinates, biome and facing direction. Pie-Ray (footer data) and E-Ray (entities) expose clues to locate structures and portals.',
    },
  },
  {
    name: 'Rutas de Bastión (Housing, Bridge, Treasure, Stables)',
    desc: {
      es: 'Identifica el tipo de bastión al que entras y aplica su ruta: Housing para cofres y oro, Bridge para cruces rápidos, Treasure para el cofre del tesoro y Stables para bartering y salida.',
      en: 'Identify which bastion type you entered and run its route: Housing for chests and gold, Bridge for fast crossings, Treasure for the treasure room, Stables for bartering and exit.',
    },
  },
  {
    name: 'Bartering con Piglins',
    desc: {
      es: 'Intercambia lingotes de oro con Piglins para obtener ender pearls, obsidiana y cuerdas. Gestiona tu oro y tu posición para no ser rodeado mientras haces trueque.',
      en: 'Trade gold ingots with Piglins for ender pearls, obsidian and string. Manage your gold and positioning so you do not get surrounded while bartering.',
    },
  },
  {
    name: 'Navegación de Fortaleza',
    desc: {
      es: 'Reconoce el layout de la fortaleza: corredores, escaleras y salas. Usa F3 para no perder el rumbo y llegar rápido a la sala del portal.',
      en: 'Recognize the fortress layout: corridors, stairs and rooms. Use F3 to keep your heading and reach the portal room fast.',
    },
  },
  {
    name: 'Triangulación de Ojos de Ender',
    desc: {
      es: 'Lanza ojos de Ender desde dos posiciones distintas y cruza las direcciones para estimar la ubicación del stronghold con muy pocos ojos.',
      en: 'Throw eyes of Ender from two different positions and cross the directions to estimate the stronghold location with very few eyes.',
    },
  },
  {
    name: 'Regla 8,8 / Perfect Triangulation',
    desc: {
      es: 'Regla empírica de triangulación: con las coordenadas de dos lanzamientos y sus ángulos se puede clavar la posición del stronghold, ahorrando ojos de Ender.',
      en: 'Empirical triangulation rule: with the coordinates of two throws and their angles you can pinpoint the stronghold, saving eyes of Ender.',
    },
  },
  {
    name: 'Navegación Interna de Fortaleza',
    desc: {
      es: 'Movimiento eficiente dentro de la stronghold: saltos, lectura de pasillos y decisiones rápidas para encontrar la sala del portal sin explorar de más.',
      en: 'Efficient movement inside the stronghold: jumps, corridor reading and quick decisions to find the portal room without over-exploring.',
    },
  },
  {
    name: 'Dragon Bed One-Cycle',
    desc: {
      es: 'Coloca camas junto al portal del End y explótalas al despertar al dragón para infligir daño masivo y matarlo en un solo ciclo.',
      en: 'Place beds next to the End portal and explode them as the dragon wakes to deal massive damage and kill it in a single cycle.',
    },
  },
  {
    name: 'Respawn Anchor One-Cycle',
    desc: {
      es: 'Usa Respawn Anchors cargados con glowstone en lugar de camas (ideal en situaciones sin camas) para ejecutar el one-cycle del dragón.',
      en: 'Use Respawn Anchors charged with glowstone instead of beds (ideal when beds are unavailable) to perform the dragon one-cycle.',
    },
  },
];

export const SPEEDRUN_VIDEOS = [
  { title: 'The Ultimate Guide to Minecraft Speedrunning', yt: 'qo475jHhxGg' },
  {
    title: 'How to setup Minecraft (and Boateye) for Speedrunning - Full comprehensive guide [2026]',
    yt: 'l-q-_4R8_6M',
    creator: 'Boateye',
  },
];

/* ══════════════════════════════ CUPHEAD ══════════════════════════════ */

export const CUPHEAD_VIDEOS = [
  { title: 'Legacy Edition', yt: 'RBrYUA1CDK4', start: 15 },
  {
    title: 'Beginner/Intermediate Speedrunning Tutorial for V1.1+ - All Bosses - Regular Category',
    yt: 'AV1DOVWb8YI',
  },
  { title: 'Cuphead DLC Any% Advanced Speedrun Tutorial', yt: 'BvFqD8km254' },
  {
    title: 'Cuphead - Beginner/Intermediate Speedrun Tutorial for DLC Any% [Lobber/Spread Route]',
    yt: '9O05ljtzDsg',
  },
];

/* ════════════════════════════ HOLLOW KNIGHT ════════════════════════════ */

export const HOLLOW_VIDEOS = [
  { title: 'How to Beat Hollow Knight in Under 5 Hours', yt: 'mkRKZHJXZRE' },
  {
    title: 'Speedrun of Hollow Knight (SPEEDRUN EXPLAINED - Any% [No Major Glitches])',
    yt: 'fOSYnHelFe8',
  },
  { title: '5-minute CRAZY GUIDE', yt: 'BKYV5Og0ld8' },
];

/* ══════════════════════ RECOMENDACIONES (SALUD) ══════════════════════ */

/** Fuentes médicas/ergonómicas verificadas. */
export const SOURCES = {
  mayo: {
    name: 'Mayo Clinic',
    url: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/office-ergonomics/art-20046169',
  },
  aao: {
    name: 'American Academy of Ophthalmology',
    url: 'https://www.aao.org/eye-health/tips-prevention/computer-usage',
  },
  aaoDry: {
    name: 'American Academy of Ophthalmology',
    url: 'https://www.aao.org/eye-health/diseases/what-is-dry-eye',
  },
  cdc: {
    name: 'CDC',
    url: 'https://www.cdc.gov/physical-activity-basics/guidelines/adults.html',
  },
  cdcWater: {
    name: 'CDC',
    url: 'https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html',
  },
  harvard: {
    name: 'Harvard Health',
    url: 'https://www.health.harvard.edu/pain/carpal-tunnel-syndrome',
  },
};

export const HEALTH_GROUPS = [
  {
    id: 'postura',
    titleKey: 'healthGroupPostura',
    items: [
      {
        icon: 'chair',
        titleKey: 'tipEspalda',
        descKey: 'tipEspaldaDesc',
        source: SOURCES.mayo,
      },
      {
        icon: 'monitor',
        titleKey: 'tipMonitor',
        descKey: 'tipMonitorDesc',
        source: SOURCES.mayo,
      },
      {
        icon: 'arm',
        titleKey: 'tipBrazos',
        descKey: 'tipBrazosDesc',
        source: SOURCES.mayo,
      },
    ],
  },
  {
    id: 'vision',
    titleKey: 'healthGroupVision',
    items: [
      {
        icon: 'eye',
        titleKey: 'tip2020',
        descKey: 'tip2020Desc',
        source: SOURCES.aao,
      },
      {
        icon: 'sun',
        titleKey: 'tipLuz',
        descKey: 'tipLuzDesc',
        source: SOURCES.aao,
      },
      {
        icon: 'droplet',
        titleKey: 'tipParpadeo',
        descKey: 'tipParpadeoDesc',
        source: SOURCES.aaoDry,
      },
    ],
  },
  {
    id: 'descansos',
    titleKey: 'healthGroupDescansos',
    items: [
      {
        icon: 'clock',
        titleKey: 'tipPausas',
        descKey: 'tipPausasDesc',
        source: SOURCES.cdc,
      },
      {
        icon: 'stretch',
        titleKey: 'tipEstiramientos',
        descKey: 'tipEstiramientosDesc',
        source: SOURCES.harvard,
      },
      {
        icon: 'bottle',
        titleKey: 'tipHidratacion',
        descKey: 'tipHidratacionDesc',
        source: SOURCES.cdcWater,
      },
    ],
  },
];

/* ══════════════════════════════ PERIFÉRICOS ══════════════════════════════ */

/**
 * Productos (nombres y marcas NUNCA se traducen; specs = texto fijo
 * técnico, descripciones = `{ es, en }`).
 */
export const PERIPHERAL_BLOCKS = [
  {
    id: 'block-minecraft',
    title: 'Minecraft',
    groups: [
      {
        id: 'mc-mouses',
        labelKey: 'groupMouses',
        icon: 'mouse',
        products: [
          {
            name: 'Bloody A70 II',
            tag: 'Bloody',
            spec: 'Interruptores ópticos Light Strike — ideales para drag click / butterfly click',
            desc: {
              es: 'Mouse orientado al PvP clásico de Minecraft: sus interruptores ópticos y superficie lo hacen especialmente apto para drag click y butterfly click.',
              en: 'A mouse aimed at classic Minecraft PvP: its optical switches and surface make it especially suitable for drag click and butterfly click.',
            },
            url: 'https://www.bloody.com/',
          },
          {
            name: 'Razer Viper V3 Pro',
            tag: 'Razer',
            spec: '54 g — polling rate de 8000 Hz',
            desc: {
              es: 'Ultraligero (54 g) con polling de 8000 Hz: seguimiento preciso y latencia mínima para intercambios rápidos.',
              en: 'Ultra-light (54 g) with 8000 Hz polling: precise tracking and minimal latency for fast exchanges.',
            },
            url: 'https://www.razer.com/gaming-mice/razer-viper-v3-pro',
          },
          {
            name: 'Logitech G PRO X Superlight 2',
            tag: 'Logitech G',
            spec: 'Sensor HERO 2 — interruptores híbridos óptico-mecánicos (LIGHTFORCE)',
            desc: {
              es: 'El estándar competitivo: sensor HERO 2, interruptores híbridos óptico-mecánicos y hasta 95 h de batería.',
              en: 'The competitive standard: HERO 2 sensor, hybrid optical-mechanical switches and up to 95h battery life.',
            },
            url: 'https://www.logitechg.com/en-us/shop/p/pro-x2-superlight-wireless-mouse',
          },
        ],
      },
      {
        id: 'mc-keyboards',
        labelKey: 'groupKeyboards',
        icon: 'keyboard',
        products: [
          {
            name: 'Wooting 60HE+',
            tag: 'Wooting',
            spec: 'Switches magnéticos Hall Effect (Lekker L60) — Rapid Trigger',
            desc: {
              es: 'Teclado magnético compacto con Rapid Trigger: registra el punto de reposo en tiempo real, ideal para strafes y w-taps.',
              en: 'Compact magnetic keyboard with Rapid Trigger: registers the reset point in real time, ideal for strafes and w-taps.',
            },
            url: 'https://wooting.io/wooting-60he',
          },
          {
            name: 'SteelSeries Apex Pro Mini',
            tag: 'SteelSeries',
            spec: 'Punto de actuación ajustable desde 0.1 mm (OmniPoint 2.0)',
            desc: {
              es: 'Formato 60% con switches magnéticos OmniPoint 2.0 y actuación ajustable desde 0.1 mm.',
              en: '60% form factor with OmniPoint 2.0 magnetic switches and actuation adjustable from 0.1 mm.',
            },
            url: 'https://steelseries.com/gaming-keyboards/apex-pro-mini',
          },
        ],
      },
    ],
  },
  {
    id: 'block-hk-cuphead',
    title: 'Hollow Knight & Cuphead',
    groups: [
      {
        id: 'hk-mouses',
        labelKey: 'groupMouses',
        icon: 'mouse',
        products: [
          {
            name: 'Logitech G PRO X Superlight 2',
            tag: 'Logitech G',
            spec: 'Ergonómico y ligero (60 g)',
            desc: {
              es: 'Ergonomía y peso mínimo para sesiones largas de platforming y speedruns sin fatiga.',
              en: 'Ergonomics and minimal weight for long platforming sessions and speedruns without fatigue.',
            },
            url: 'https://www.logitechg.com/en-us/shop/p/pro-x2-superlight-wireless-mouse',
          },
          {
            name: 'Razer Viper V3 Pro',
            tag: 'Razer',
            spec: 'Latencia ultrabaja en clics (8000 Hz)',
            desc: {
              es: 'Latencia ultrabaja en los clics: inputs exactos para dash, parry y ráfagas de ataques.',
              en: 'Ultra-low click latency: exact inputs for dash, parry and attack bursts.',
            },
            url: 'https://www.razer.com/gaming-mice/razer-viper-v3-pro',
          },
        ],
      },
      {
        id: 'hk-keyboards',
        labelKey: 'groupKeyboards',
        icon: 'keyboard',
        products: [
          {
            name: 'Wooting 60HE+',
            tag: 'Wooting',
            spec: 'Rapid Trigger — saltos y dash precisos',
            desc: {
              es: 'Rapid Trigger para saltos y dashes precisos en Hollow Knight y Cuphead.',
              en: 'Rapid Trigger for precise jumps and dashes in Hollow Knight and Cuphead.',
            },
            url: 'https://wooting.io/wooting-60he',
          },
          {
            name: 'Razer Huntsman V3 Pro',
            tag: 'Razer',
            spec: 'Switches óptico-analógicos Gen-2 — Snap Tap',
            desc: {
              es: 'Switches óptico-analógicos Gen-2 con Snap Tap: movimiento y técnicas avanzadas de input.',
              en: 'Gen-2 analog optical switches with Snap Tap: movement and advanced input techniques.',
            },
            url: 'https://www.razer.com/gaming-keyboards/razer-huntsman-v3-pro',
          },
          {
            name: 'SteelSeries Apex Pro Mini',
            tag: 'SteelSeries',
            spec: 'Formato 60% — actuación magnética',
            desc: {
              es: 'Formato compacto 60% con actuación magnética para respuestas inmediatas.',
              en: 'Compact 60% form factor with magnetic actuation for immediate responses.',
            },
            url: 'https://steelseries.com/gaming-keyboards/apex-pro-mini',
          },
        ],
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   NUEVAS CATEGORÍAS — "Conozcamos el tema" y "Mirada amplia"
   Todo el texto descriptivo se guarda como { es, en } para respetar la
   política de idioma del sitio. Los nombres propios (juegos, países,
   creadores, marcas, récords) se mantienen en su forma original.
   ═══════════════════════════════════════════════════════════════════════ */

/** Fuentes externas usadas en las dos nuevas categorías (también en Fuentes). */
export const EXTRA_SOURCES = {
  who: {
    name: 'OMS — Gaming disorder (CIE-11)',
    url: 'https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder',
  },
  oxford2022: {
    name: 'University of Oxford — Gaming and mental health (2022)',
    url: 'https://www.ox.ac.uk/news/2022-07-27-gaming-does-not-appear-harmful-mental-health-unless-gamer-cant-stop-oxford-study',
  },
  oxford2024: {
    name: 'Oxford Internet Institute — Mood changes during play (2024)',
    url: 'https://www.oii.ox.ac.uk/news-events/new-study-reveals-positive-mood-changes-during-video-game-play-finds-oxford-team/',
  },
  loc: {
    name: 'Library of Congress — National Recording Registry 2025',
    url: 'https://newsroom.loc.gov/news/national-recording-registry-inducts-sounds-of-elton-john--chicago--broadway-s--hamilton---mary-j.-bl/s/986b2312-27dd-4b66-bd41-3113e0cb2e57',
  },
  guinnessBest: {
    name: 'Guinness World Records — Best-selling videogame',
    url: 'https://www.guinnessworldrecords.com/world-records/best-selling-video-game',
  },
  guinnessSchool: {
    name: 'Guinness World Records — First compulsory videogame in a Swedish school',
    url: 'https://www.guinnessworldrecords.com/world-records/385146-first-compulsory-videogame-in-a-swedish-school',
  },
  swedenSchool: {
    name: 'PC Gamer — Minecraft becomes a compulsory class for Swedish school',
    url: 'https://www.pcgamer.com/minecraft-becomes-a-compulsory-class-for-swedish-school/',
  },
  minecraftEdu: {
    name: 'Minecraft Education — Get Minecraft for Your Classroom',
    url: 'https://education.minecraft.net/en-us',
  },
  halmstad: {
    name: 'Halmstads kommun — Minecraft Education i undervisningen',
    url: 'https://www.halmstad.se/barnochutbildning/pedagoghalmstad/stodfordigsompedagog/tekniskalarresurserpedagoghalmstad/minecraft.22055.html',
  },
  blockByBlock: {
    name: 'Block by Block — Mojang, Microsoft y UN-Habitat',
    url: 'https://www.blockbyblock.org/about/',
  },
  cpj: {
    name: 'Committee to Protect Journalists — 10 Most Censored Countries',
    url: 'https://cpj.org/2015/04/10-most-censored-countries/',
  },
  northKorea: {
    name: 'Wikipedia — Censorship in North Korea',
    url: 'https://en.wikipedia.org/wiki/Censorship_in_North_Korea',
  },
  chinaBan: {
    name: 'The Verge — China officially ends ban on video game consoles (2015)',
    url: 'https://www.theverge.com/2015/7/25/9039995/china-ends-ban-on-video-game-consoles',
  },
  bbc300m: {
    name: 'BBC News — Minecraft becomes first video game to hit 300m sales',
    url: 'https://www.bbc.co.uk/news/technology-67105983',
  },
  spreen: {
    name: 'AP News — El debut profesional del streamer Spreen (2024)',
    url: 'https://apnews.com/article/spreen-argentina-streamer-velez-sarsfield-deportivo-riestra-5d27a9f71322443ebd89626cfeea485f',
  },
  speedTime: {
    name: 'TIME100 Sports 2026 — IShowSpeed',
    url: 'https://time.com/collection/time100-sports/2026/ishowspeed/',
  },
  speedForbes: {
    name: 'Forbes — How IShowSpeed Became A Global Phenomenon',
    url: 'https://www.forbes.com/sites/jonyoushaei/2024/12/13/how-ishowspeed-became-a-global-phenomenon/',
  },
};

/* ── CONTENIDO COMPACTO — misma info, menos rollo ─────────────────────── */

/* SUBPÁGINA 1 · CONOZCAMOS EL TEMA */
export const TOPIC_BLOCKS = [
  {
    id: 'tema-explicacion',
    icon: 'target',
    label: { es: 'El tema', en: 'The topic' },
    title: { es: '¿Qué es Games PvP?', en: 'What is Games PvP?' },
    lead: { es: 'Aprende de los mejores. Sube de nivel. Cuídate.', en: 'Learn from the best. Level up. Stay healthy.' },
    body: [
      {
        es: 'Guías y videos de la comunidad para dominar Minecraft PvP, Speedrun, Cuphead y Hollow Knight… sin dejarte la salud en el intento. Objetivo: jugar con cabeza. Misión: que el gaming sea un hábito sano, no un encierro.',
        en: 'Community guides and videos to master Minecraft PvP, Speedrun, Cuphead and Hollow Knight… without trashing your health on the way. Goal: play smart. Mission: make gaming a healthy habit, not a lockdown.',
      },
    ],
    bullets: [
      { es: 'Aprende: técnicas reales, cero humo.', en: 'Learn: real techniques, zero fluff.' },
      { es: 'Mejora: práctica con objetivo, no horas en automático.', en: 'Improve: purposeful practice, not autopilot hours.' },
      { es: 'Cuídate: pausas, postura y vista. GG.', en: 'Take care: breaks, posture and eyesight. GG.' },
    ],
    image: {
      src: 'assets/friends-gaming.jpg',
      alt: { es: 'Amigos jugando con mandos', en: 'Friends gaming with controllers' },
      caption: { es: 'Jugar acompañado también es jugar sano.', en: 'Playing together is healthy too.' },
      credit: 'Pexels', creditUrl: 'https://pexels.com/photo/a-person-holding-a-game-controller-7862417',
    },
    cta: { label: { es: 'Ver recomendaciones', en: 'Health tips' }, route: '/recomendaciones' },
  },
  {
    id: 'tema-adolescentes',
    icon: 'users',
    label: { es: 'Adolescentes', en: 'Teenagers' },
    title: { es: 'Si eres adolescente, esto va contigo', en: 'Teenagers: this one is for you' },
    lead: { es: 'Sin guía, grindear horas te pasa factura.', en: 'No guide? Grinding hours catches up with you.' },
    body: [
      {
        es: 'Muchos llegan sin saber ajustar la sensibilidad ni ponerse límites: se frustran porque "son malos" y algunos caen en el juego compulsivo (la OMS lo llama trastorno por juego). Y el cuerpo avisa: muñecas, vista, espalda, sueño. La solución no es dejar de jugar: es jugar bien.',
        en: 'Many start without knowing how to set sensitivity or limits: they rage at feeling "bad" and some slip into compulsive play (the WHO calls it gaming disorder). Then the body cashes the bill: wrists, eyes, back, sleep. The fix is not quitting: it is playing well.',
      },
    ],
    bullets: [
      { es: 'Adicción: si "no puedes parar", es warning.', en: 'Addiction: "I cannot stop" = red flag.' },
      { es: 'Estancamiento: sin bases, rage quit seguro.', en: 'Stuck: no basics, guaranteed rage quit.' },
      { es: 'Lesiones: muñecas, vista y sueño. Duele.', en: 'Injuries: wrists, eyes, sleep. It hurts.' },
      { es: 'Salida: límites + pausas + info. Puro buff.', en: 'Way out: limits + breaks + info. Pure buff.' },
    ],
    image: {
      src: 'assets/wrist-gaming.webp',
      alt: { es: 'Jugador estirando la muñeca', en: 'Gamer stretching a wrist' },
      caption: { es: 'Prevenir la lesión es más fácil que curarla.', en: 'Preventing it beats curing it.' },
      credit: 'Plarium', creditUrl: 'https://plarium.com/en/blog/wrist-pain-from-gaming-exercises-and-prevention-tips',
    },
    source: EXTRA_SOURCES.who,
    cta: { label: { es: 'Cuidar mis muñecas', en: 'Protect my wrists' }, route: '/recomendaciones', anchor: 'salud-descansos' },
  },
  {
    id: 'tema-dato',
    icon: 'sparkles',
    label: { es: 'Dato', en: 'Fun fact' },
    title: { es: 'Un dato que juega a favor', en: 'A fact in games’ favour' },
    lead: { es: 'No es el reloj: es jugar obligado.', en: 'Not the clock — playing because you have to.' },
    body: [
      {
        es: 'Oxford siguió a 39.000 jugadores en 7 juegos (2022): las horas casi no movían el bienestar. Lo que importaba era jugar porque quieres. En 2024, el 72 % reportó mejor ánimo durante la partida.',
        en: 'Oxford tracked 39,000 players across 7 games (2022): hours barely moved wellbeing. What mattered was wanting to play. In 2024, 72% reported a better mood mid-game.',
      },
    ],
    stats: [
      { value: '39 k', label: { es: 'jugadores (Oxford 2022)', en: 'players (Oxford 2022)' } },
      { value: '72 %', label: { es: 'mejor ánimo al jugar', en: 'better mood while playing' } },
      { value: '7', label: { es: 'juegos analizados', en: 'games analysed' } },
    ],
    callout: {
      es: 'El problema no es jugar: es perder el control. Juega, pero con cabeza.',
      en: 'The problem is not playing: it is losing control. Play — but play smart.',
    },
    source: EXTRA_SOURCES.oxford2022,
    source2: EXTRA_SOURCES.oxford2024,
  },
];

/* SUBPÁGINA 2 · MIRADA AMPLIA — donde se juega poco, algo falla */
export const WORLD_EXAMPLES = [
  {
    flag: '🇰🇵',
    place: { es: 'Corea del Norte', en: 'North Korea' },
    year: { es: 'Hoy', en: 'Today' },
    title: { es: 'Internet solo para unos pocos', en: 'Internet for a tiny few' },
    body: { es: 'La élite navega; los demás, intranet cerrada. Casi cero juegos extranjeros.', en: 'The elite browses; everyone else gets a closed intranet. Almost zero foreign games.' },
    cause: { es: 'censura estatal', en: 'state censorship' },
    effect: { es: 'aislamiento digital', en: 'digital isolation' },
    source: EXTRA_SOURCES.northKorea,
  },
  {
    flag: '🇪🇷',
    place: { es: 'Eritrea', en: 'Eritrea' },
    year: { es: 'Informe 2015', en: '2015 report' },
    title: { es: 'Menos del 1 % conectado', en: 'Under 1% online' },
    body: { es: 'Internet por marcación y casi sin móviles: el más censurado del mundo según CPJ.', en: 'Dial-up internet and almost no mobiles: CPJ calls it the world’s most censored.' },
    cause: { es: 'brecha e infraestructura', en: 'digital gap and infrastructure' },
    effect: { es: 'menos estudio y oportunidades', en: 'fewer chances to study and work' },
    source: EXTRA_SOURCES.cpj,
  },
  {
    flag: '🇨🇳',
    place: { es: 'China (2000–2015)', en: 'China (2000–2015)' },
    year: { es: '2000–2015', en: '2000–2015' },
    title: { es: '15 años sin consolas', en: '15 years without consoles' },
    body: { es: 'Prohibidas en 2000 "para proteger" a los jóvenes; vuelta en 2015. El juego se mudó a PC y móvil.', en: 'Banned in 2000 "to protect" kids; back in 2015. Gaming just moved to PC and mobile.' },
    cause: { es: 'prohibición por miedo', en: 'ban driven by fear' },
    effect: { es: 'el riesgo cambió de plataforma', en: 'the risk changed platforms' },
    source: EXTRA_SOURCES.chinaBan,
  },
];

/* Escuelas que enseñan con videojuegos */
export const SCHOOL_EXAMPLES = [
  {
    place: { es: 'Viktor Rydberg · Suecia', en: 'Viktor Rydberg · Sweden' },
    year: { es: '2013', en: '2013' },
    title: { es: 'Minecraft como asignatura', en: 'Minecraft as a subject' },
    body: { es: 'Obligatorio para ~180 alumnos de 13 años: urbanismo, redes y agua. Además, récord Guinness.', en: 'Compulsory for ~180 13-year-olds: city planning, grids and water. Also a Guinness record.' },
    image: {
      src: 'assets/minecraft-education-logo.jpg',
      alt: { es: 'Minecraft Education Edition', en: 'Minecraft Education Edition' },
      credit: 'Wallpapers.com', creditUrl: 'https://wallpapers.com/minecraft-education-edition',
    },
    source: EXTRA_SOURCES.guinnessSchool,
  },
  {
    place: { es: 'Minecraft Education · 140 países', en: 'Minecraft Education · 140 countries' },
    year: { es: '2016–hoy', en: '2016–today' },
    title: { es: '40.000+ escuelas', en: '40,000+ schools' },
    body: { es: 'Mates, historia, física y código en clase. El aula también puede ser un mundo de bloques.', en: 'Maths, history, physics and coding in class. A classroom can be a block world too.' },
    image: {
      src: 'assets/minecraft-education.webp',
      alt: { es: 'Estudiantes con Minecraft Education', en: 'Students using Minecraft Education' },
      credit: 'Structural Learning', creditUrl: 'https://www.structural-learning.com/post/minecraft-education',
    },
    source: EXTRA_SOURCES.minecraftEdu,
  },
  {
    place: { es: 'Block by Block · ONU', en: 'Block by Block · UN' },
    year: { es: '2012–hoy', en: '2012–today' },
    title: { es: 'Jóvenes rediseñan su barrio', en: 'Kids redesign their neighbourhood' },
    body: { es: 'Mojang + Microsoft + UN-Habitat: propuestas en Minecraft que llegan a plazas reales.', en: 'Mojang + Microsoft + UN-Habitat: Minecraft ideas that reach real public squares.' },
    source: EXTRA_SOURCES.blockByBlock,
  },
  {
    place: { es: 'Halmstad · Suecia', en: 'Halmstad · Sweden' },
    year: { es: 'Hoy', en: 'Today' },
    title: { es: 'Programar con el Agent', en: 'Coding with the Agent' },
    body: { es: 'Clases listas: del tutorial a programar por bloques y documentar el proyecto.', en: 'Ready-made lessons: from tutorial to block coding and project write-ups.' },
    source: EXTRA_SOURCES.halmstad,
  },
];

/* Récords Guinness y patrimonio cultural */
export const RECORD_CARDS = [
  {
    kind: { es: 'Récord Guinness', en: 'Guinness record' },
    title: { es: 'El juego más vendido', en: 'Best-selling game ever' },
    body: { es: 'Minecraft: primer juego en pasar 300 M de copias (2023). Guinness: 350 M+ en 2025.', en: 'Minecraft: first game past 300M copies (2023). Guinness: 350M+ in 2025.' },
    image: {
      src: 'assets/guinness-gamers.jpg',
      fit: 'contain',
      alt: { es: 'Guinness World Records Gamer’s Edition', en: 'Guinness World Records Gamer’s Edition' },
      credit: 'Guinness World Records', creditUrl: 'https://www.guinnessworldrecords.com/',
    },
    source: EXTRA_SOURCES.guinnessBest,
  },
  {
    kind: { es: 'Récord Guinness', en: 'Guinness record' },
    title: { es: 'Primer juego obligatorio en un cole', en: 'First compulsory game in a school' },
    body: { es: 'Viktor Rydberg, Suecia, 9-ene-2013. Unos 180 alumnos de 13 años.', en: 'Viktor Rydberg, Sweden, 9 Jan 2013. Around 180 13-year-old pupils.' },
    image: {
      src: 'assets/minecraft-education-logo.jpg',
      alt: { es: 'Logo de Minecraft Education', en: 'Minecraft Education logo' },
      credit: 'Wallpapers.com', creditUrl: 'https://wallpapers.com/minecraft-education-edition',
    },
    source: EXTRA_SOURCES.guinnessSchool,
  },
  {
    kind: { es: 'Patrimonio', en: 'Heritage' },
    title: { es: 'Minecraft, patrimonio sonoro', en: 'Minecraft, sound heritage' },
    body: { es: 'Volume Alpha (C418) entró en la Biblioteca del Congreso en 2025. Segunda banda sonora de un juego, tras Mario (2023).', en: 'Volume Alpha (C418) entered the Library of Congress in 2025. Only the second game soundtrack, after Mario (2023).' },
    image: {
      src: 'assets/minecraft-volume-alpha.jpg',
      fit: 'contain',
      alt: { es: 'Vinilo de Minecraft: Volume Alpha', en: 'Minecraft: Volume Alpha vinyl' },
      credit: 'Library of Congress / C418', creditUrl: 'https://www.loc.gov/static/programs/national-recording-preservation-board/documents/Minecraft-Volume-Alpha_Grosser.pdf',
    },
    source: EXTRA_SOURCES.loc,
  },
];

/* Cuatro miradas, una respuesta */
export const PERSPECTIVES = [
  {
    id: 'perspectiva-critica',
    tone: 'risk',
    icon: 'alert',
    title: { es: 'La crítica', en: 'The criticism' },
    claim: { es: '“Los juegos enganchan y aíslan”.', en: '“Games hook you and isolate you”.' },
    case: {
      es: 'OMS: trastorno por juego. China prohibió consolas 15 años. El debut de Spreen (59 s) recibió críticas.',
      en: 'WHO: gaming disorder. China banned consoles for 15 years. Spreen’s 59-second debut drew flak.',
    },
    reply: { es: 'Prohibir no curó nada: el juego se mudó a PC. Educación + límites > censura.', en: 'Banning fixed nothing: gaming moved to PC. Education + limits beat censorship.' },
    sources: [EXTRA_SOURCES.who, EXTRA_SOURCES.chinaBan, EXTRA_SOURCES.spreen],
  },
  {
    id: 'perspectiva-educativa',
    tone: 'good',
    icon: 'school',
    title: { es: 'La educativa', en: 'The classroom take' },
    claim: { es: '“Jugar es perder el tiempo”.', en: '“Gaming wastes time”.' },
    case: {
      es: 'Viktor Rydberg lo hizo asignatura; Minecraft Education está en 40.000+ escuelas de 140 países.',
      en: 'Viktor Rydberg made it a subject; Minecraft Education runs in 40,000+ schools across 140 countries.',
    },
    reply: { es: 'El mismo juego enseña urbanismo, mates y código. Manda el objetivo.', en: 'The same game teaches planning, maths and code. Purpose is what counts.' },
    sources: [EXTRA_SOURCES.swedenSchool, EXTRA_SOURCES.minecraftEdu, EXTRA_SOURCES.blockByBlock],
  },
  {
    id: 'perspectiva-cultural',
    tone: 'good',
    icon: 'music',
    title: { es: 'La cultural', en: 'The culture take' },
    claim: { es: '“Los juegos no son cultura”.', en: '“Games are not culture”.' },
    case: {
      es: 'Volume Alpha entró en el Registro Nacional de Grabaciones (2025); el tema de Mario, en 2023.',
      en: 'Volume Alpha joined the National Recording Registry (2025); the Mario theme did in 2023.',
    },
    reply: { es: 'Ya es patrimonio sonoro. Un juego también es arte y memoria.', en: 'It is sound heritage now. A game is art and memory too.' },
    sources: [EXTRA_SOURCES.loc],
  },
  {
    id: 'perspectiva-profesional',
    tone: 'good',
    icon: 'trending',
    title: { es: 'La profesional', en: 'The career take' },
    claim: { es: '“Streamer no es un trabajo”.', en: '“Streaming is not a real job”.' },
    case: {
      es: 'Speed: 100 k → 1 M en 2021, Streamer of the Year 2024, TIME100. Spreen llenó un estadio.',
      en: 'Speed: 100k → 1M in 2021, Streamer of the Year 2024, TIME100. Spreen filled a stadium.',
    },
    reply: { es: 'Puede ser carrera… con entrenamiento, descanso y ética. Igual que el deporte.', en: 'It can be a career… with training, rest and ethics. Just like sport.' },
    sources: [EXTRA_SOURCES.speedTime, EXTRA_SOURCES.speedForbes, EXTRA_SOURCES.spreen],
  },
];

/* Casos reales de streamers */
export const STREAMER_CASES = [
  {
    name: 'Spreen',
    realName: 'Iván Buhajeruk',
    badge: { es: 'Streamer · Argentina', en: 'Streamer · Argentina' },
    image: {
      src: 'assets/spreen.jpg',
      alt: { es: 'Spreen con la camiseta de Deportivo Riestra', en: 'Spreen in a Deportivo Riestra shirt' },
      credit: 'El Debate', creditUrl: 'https://eldebate.com/deportes/futbol/20241113/spreen-youtuber-avergonzo-futbol-argentino-debut-disculpa-no-quise-faltar-respeto_244477.html',
    },
    stats: [
      { value: '≈8 M', label: { es: 'suscriptores en YouTube', en: 'YouTube subscribers' } },
      { value: '59 s', label: { es: 'duró su debut', en: 'his debut lasted' } },
    ],
    text: {
      es: 'De directos de Minecraft a millones de seguidores. El 11-nov-2024 debutó en Primera con Deportivo Riestra y salió antes del minuto. ¿Marketing irrespetuoso o prueba de que la comunidad gamer mueve masas? Las dos. Moraleja: fama sí, ética también.',
      en: 'From Minecraft streams to millions of followers. On 11 Nov 2024 he started in Argentina’s top flight for Deportivo Riestra and was off before the minute. Disrespectful marketing or proof the gaming crowd moves masses? Both. Moral: fame yes — ethics too.',
    },
    source: EXTRA_SOURCES.spreen,
  },
  {
    name: 'IShowSpeed',
    realName: 'Darren Watkins Jr.',
    badge: { es: 'Streamer · EE. UU.', en: 'Streamer · USA' },
    image: {
      src: 'assets/ishowspeed.jpg',
      alt: { es: 'IShowSpeed en la alfombra roja del Balón de Oro', en: 'IShowSpeed on the Ballon d’Or red carpet' },
      credit: 'Athlon Sports', creditUrl: 'https://athlonsports.com/soccer/ishowspeed-personal-life-girlfriend-parents-ethnicity-net-worth',
    },
    stats: [
      { value: '100 k → 1 M', label: { es: 'suscriptores en 2021', en: 'subscribers in 2021' } },
      { value: '2024', label: { es: 'Streamer of the Year', en: 'Streamer of the Year' } },
    ],
    text: {
      es: 'Empezó en su habitación. Pasó de 100 k a 1 M en 2021, ganó Streamer of the Year 2024, hoy supera los 50 M y entró en TIME100 Sports. Un canal de juegos se volvió imperio… si cuidas salud, descanso y respeto.',
      en: 'He started in his bedroom. 100k → 1M in 2021, Streamer of the Year 2024, 50M+ today and a TIME100 Sports nod. A gaming channel became an empire… provided you protect health, rest and respect.',
    },
    source: EXTRA_SOURCES.speedTime,
  },
];

/* Galería: las 3 URLs aportadas + 1 imagen local verificada.
   Si el host remoto bloquea, data-fallback carga la copia local. */
export const STREAMER_GALLERY = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGQcUcRJTBy0B3ao3YK5IL1__iyE6fEE6XP6ufExBPA&s=10',
    fallback: 'assets/spreen-news.jpg',
    caption: { es: 'Spreen · escena streamer', en: 'Spreen · streamer scene' },
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQL0p0SVIieF4SDSCHOvv9_uEYYA7Z-lyuVtrWa51KJAz3ImKJsOj7nZVtU8pG9RH_rZJWZ2gN53QQvv2i7y_8MPVXTNDfnXyEUqcmJuvbA&s=10',
    fallback: 'assets/ishowspeed-time.jpg',
    caption: { es: 'IShowSpeed · escena streamer', en: 'IShowSpeed · streamer scene' },
  },
  {
    src: 'https://yt3.googleusercontent.com/ytc/AIdro_l_qfAZ50hA3aZW2IEaYcsH3TBbh5CrW83u9oiOEcrQJIo=s900-c-k-c0x00ffffff-no-rj',
    fallback: 'assets/ishowspeed-avatar.jpg',
    caption: { es: 'Avatar de canal', en: 'Channel avatar' },
  },
  {
    src: 'assets/ishowspeed-family.jpg',
    alt: { es: 'IShowSpeed en el estreno de Speed Goes Pro', en: 'IShowSpeed at the Speed Goes Pro premiere' },
    caption: { es: 'Speed en Speed Goes Pro (2025)', en: 'Speed at Speed Goes Pro (2025)' },
    credit: 'Yahoo',
    creditUrl: 'https://www.yahoo.com/entertainment/celebrity/articles/discover-ishowspeeds-family-ethnicity-relationship-183000911.html',
  },
];

/* Imágenes de las categorías clásicas (estrictamente relacionadas) */
export const CATEGORY_IMAGES = {
  'minecraft-pvp': {
    src: 'assets/minecraft-pvp-arena.webp',
    alt: { es: 'Arena de Minecraft PvP', en: 'Minecraft PvP arena' },
    caption: { es: 'Arenas de la comunidad: aquí nacen las técnicas.', en: 'Community arenas: where the techniques are born.' },
    credit: '9Minecraft', creditUrl: 'https://www.9minecraft.net/minecraft-pvp-arena-map/',
  },
  cuphead: {
    src: 'assets/cuphead.jpg',
    alt: { es: 'Cuphead y Mugman', en: 'Cuphead and Mugman' },
    caption: { es: 'Dibujos de los años 30, jefes de precisión.', en: '1930s cartoons, pixel-precise bosses.' },
    credit: 'Alpha Coders', creditUrl: 'https://alphacoders.com/cuphead',
  },
  'hollow-knight': {
    src: 'assets/hollow-knight.jpg',
    alt: { es: 'El Caballero de Hollow Knight', en: 'The Knight from Hollow Knight' },
    caption: { es: 'Exploración, saltos milimétricos y speedrun.', en: 'Exploration, frame-perfect jumps and speedruns.' },
    credit: 'Wallpaper Alchemy', creditUrl: 'https://www.wallpaperalchemy.com/hollow-knight/wallpapers',
  },
  recomendaciones: {
    src: 'assets/wrist-gaming.webp',
    alt: { es: 'Jugador estirando la muñeca', en: 'Gamer stretching a wrist' },
    caption: { es: 'Pausas y estiramientos > lesiones.', en: 'Breaks and stretches > injuries.' },
    credit: 'Plarium', creditUrl: 'https://plarium.com/en/blog/wrist-pain-from-gaming-exercises-and-prevention-tips',
  },
};

/* Créditos de imagen (página Fuentes) */
export const MEDIA_CREDITS = [
  { file: 'friends-gaming.jpg', label: { es: 'Amigos jugando', en: 'Friends gaming' }, url: 'https://pexels.com/photo/a-person-holding-a-game-controller-7862417', site: 'Pexels' },
  { file: 'wrist-gaming.webp', label: { es: 'Estiramiento de muñeca', en: 'Wrist stretch' }, url: 'https://plarium.com/en/blog/wrist-pain-from-gaming-exercises-and-prevention-tips', site: 'Plarium' },
  { file: 'minecraft-education.webp', label: { es: 'Minecraft Education en clase', en: 'Minecraft Education in class' }, url: 'https://www.structural-learning.com/post/minecraft-education', site: 'Structural Learning' },
  { file: 'minecraft-education-logo.jpg', label: { es: 'Minecraft Education Edition', en: 'Minecraft Education Edition' }, url: 'https://wallpapers.com/minecraft-education-edition', site: 'Wallpapers.com' },
  { file: 'minecraft-volume-alpha.jpg', label: { es: 'Vinilo Volume Alpha', en: 'Volume Alpha vinyl' }, url: 'https://www.loc.gov/static/programs/national-recording-preservation-board/documents/Minecraft-Volume-Alpha_Grosser.pdf', site: 'Library of Congress / C418' },
  { file: 'guinness-gamers.jpg', label: { es: 'Guinness Gamer’s Edition', en: 'Guinness Gamer’s Edition' }, url: 'https://www.guinnessworldrecords.com/', site: 'Guinness World Records' },
  { file: 'spreen.jpg', label: { es: 'Spreen', en: 'Spreen' }, url: 'https://eldebate.com/deportes/futbol/20241113/spreen-youtuber-avergonzo-futbol-argentino-debut-disculpa-no-quise-faltar-respeto_244477.html', site: 'El Debate' },
  { file: 'spreen-news.jpg', label: { es: 'Spreen (prensa)', en: 'Spreen (press)' }, url: 'https://milenio.com/deportes/futbol-internacional/streamer-debuta-en-primera-division-de-argentina-genera-polemica', site: 'Milenio' },
  { file: 'ishowspeed.jpg', label: { es: 'IShowSpeed', en: 'IShowSpeed' }, url: 'https://athlonsports.com/soccer/ishowspeed-personal-life-girlfriend-parents-ethnicity-net-worth', site: 'Athlon Sports' },
  { file: 'ishowspeed-time.jpg', label: { es: 'IShowSpeed (TIME100)', en: 'IShowSpeed (TIME100)' }, url: 'https://time.com/collections/time100-creators-2025/7299111/ishowspeed/', site: 'TIME' },
  { file: 'ishowspeed-family.jpg', label: { es: 'Speed Goes Pro', en: 'Speed Goes Pro' }, url: 'https://www.yahoo.com/entertainment/celebrity/articles/discover-ishowspeeds-family-ethnicity-relationship-183000911.html', site: 'Yahoo' },
  { file: 'ishowspeed-avatar.jpg', label: { es: 'Avatar de IShowSpeed', en: 'IShowSpeed avatar' }, url: 'https://cadenaser.com/nacional/2024/11/12/indignacion-en-argentina-por-el-movimiento-del-deportivo-riestra-pone-de-titular-al-streamer-spreen-y-lo-cambia-en-segundos-cadena-ser/', site: 'Cadena SER' },
  { file: 'minecraft-pvp-arena.webp', label: { es: 'Arena Minecraft PvP', en: 'Minecraft PvP arena' }, url: 'https://www.9minecraft.net/minecraft-pvp-arena-map/', site: '9Minecraft' },
  { file: 'cuphead.jpg', label: { es: 'Arte de Cuphead', en: 'Cuphead art' }, url: 'https://alphacoders.com/cuphead', site: 'Alpha Coders' },
  { file: 'hollow-knight.jpg', label: { es: 'Arte de Hollow Knight', en: 'Hollow Knight art' }, url: 'https://www.wallpaperalchemy.com/hollow-knight/wallpapers', site: 'Wallpaper Alchemy' },
];

# Games PvP 🎮⚔️

Sitio web informativo/educativo sobre gaming: guías, técnicas y videos de
**Minecraft PvP** (especialización), **Minecraft Speedrun**, **Cuphead**,
**Hollow Knight**, **Recomendaciones** de salud/ergonomía y **Periféricos**,
además de dos categorías de contexto: **Conozcamos el tema** y **Mirada amplia**.

SPA estática (HTML5 + CSS3 con custom properties + JavaScript vanilla con
módulos ES) — **sin build step, lista para desplegar** (GitHub Pages,
Netlify, Vercel, o cualquier servidor estático).

---

## 🚀 Ejecutar / Desplegar

```bash
# Cualquier servidor estático sirve. Ejemplos:
python3 -m http.server 8000
# o
npx serve .
```

Abre `http://localhost:8000`. Para GitHub Pages: sube el repo y activa Pages
desde la rama principal (la raíz del repo es el sitio).

## 📁 Estructura

```
index.html          · Shell del sitio: splash, navbar, buscador, settings, footer
css/styles.css      · Diseño completo (tokens CSS, temas, tipografía por sección)
js/
  main.js           · Punto de entrada (splash + arranque)
  router.js         · SPA hash-router (#/categoria), SEO, lazy-load de videos
  pages.js          · Renderizadores de cada categoría
  ui.js             · Componentes: VideoCard, TechniqueCard, ProductCard, MediaFigure…
  data.js           · Catálogo de contenido (videos, técnicas, packs, productos, nuevas categorías)
  i18n.js           · Diccionario ES/EN
  search.js         · Buscador global (fuzzy, agrupado por categoría)
  settings.js       · Panel de configuración + localStorage
  topic.js          · Símbolo animado + explosión de "Conozcamos el tema"
assets/             · Imágenes locales optimizadas (≈860 KB) con créditos en "Fuentes"
fonts/
  Monocraft.ttf     · Fuente estilo chat de Minecraft (SIL OFL 1.1)
  Monocraft-Bold.ttf
  OFL-Monocraft.txt · Licencia de Monocraft
```

## ✨ Funcionalidades

| Requisito | Implementación |
|---|---|
| Splash screen | Logo sobre un gran "1", rebote en bucle (CSS keyframes, ease-in-out), mínimo 2.5 s, fade-out de salida |
| Navegación sticky | 7 categorías + "Fuentes", menú hamburguesa en móvil, rutas SPA (`#/minecraft-pvp`, …) |
| Buscador global | Lupa que se expande (0.3 s), índice de todo el contenido, fuzzy + sin acentos/mayúsculas, resultados agrupados por categoría, atajos `Ctrl + K` y `/` |
| Settings | Tipografía (default/por-categoría o personalizada con vista previa en vivo), 3 temas + colores personalizados (picker), idioma ES/EN, restaurar valores — todo persistido en `localStorage` |
| Tipografía por sección | `body[data-section=…]` redefine `--font-heading/--font-body`: Minecraft (Press Start 2P + Monocraft), Cuphead (Alegreya Sans), Hollow Knight (Cinzel + EB Garamond), general (Roboto). El usuario puede forzarla desde Settings |
| Videos | Embeds de YouTube 16:9 responsivos con `loading="lazy"` + `IntersectionObserver`, título visible y atribución al creador |
| Accesibilidad | Contraste WCAG AA, skip-link, navegación por teclado, `aria-label`/`aria-expanded`, `focus-visible`, `prefers-reduced-motion` |
| SEO | `<title>` y `meta description` por ruta (actualizados al navegar), Open Graph |
| Conozcamos el tema | Explicación del proyecto + misión de gaming saludable, importancia para adolescentes (adicción, frustración, daños de muñeca/vista/espalda) y datos de Oxford a favor de los videojuegos |
| Símbolo interactivo | Logo gigante de Games PvP que flota, se carga al hacer hover/foco y **explota** al hacer clic: 20 partículas radiales, onda de choque, revelado animado del contenido y salto a la primera sección. Accesible por teclado (`<button>`), aviso `aria-live` y respeto a `prefers-reduced-motion` |
| Mirada amplia | Países donde se juega poco por censura/brecha/prohibición, escuelas con Minecraft Education, récords Guinness, Minecraft como patrimonio cultural (Library of Congress 2025), cuatro perspectivas contrapuestas y casos reales de Spreen e IShowSpeed |
| Imágenes relacionadas | Figuras con pie de foto y crédito en PvP, Cuphead, Hollow Knight, Recomendaciones y en las dos nuevas categorías. Las 3 URLs externas aportadas tienen copia local de respaldo automática si el host las bloquea |
| Fuentes ampliadas | Nuevas secciones de referencias: salud/bienestar, contexto y récords, streamers y créditos de imágenes |

## 🔤 Tipografías y licencias

| Uso | Fuente | Licencia / nota |
|---|---|---|
| Minecraft (títulos) | **Press Start 2P** (Google Fonts) | OFL — pixel-art retro |
| Minecraft (cuerpo) | **Monocraft** local (`fonts/`) — equivalente a Minecraftia | SIL OFL 1.1, redistribuible ([IdreesInc/Monocraft](https://github.com/IdreesInc/Monocraft)) |
| Cuphead | **Alegreya Sans** (Google Fonts) | OFL — estética cartoon años 30 |
| Hollow Knight (títulos) | **Cinzel** (Google Fonts) | OFL — **sustituto libre de Trajan Pro** (Trajan Pro es comercial y no redistribuible; Cinzel replica su estética romana/mayúsculas clásicas) |
| Hollow Knight (cuerpo) | **EB Garamond** (Google Fonts) | OFL — serif elegante |
| General | **Roboto** (Google Fonts) | Apache 2.0 |
| Opción de usuario | Arial (sistema), Open Sans, y las anteriores | — |

En Settings, la opción **"Trajan Pro (Cinzel)"** aplica Cinzel como la
alternativa de licencia libre documentada arriba.

## 🌐 Política de idioma (ES/EN)

Al cambiar idioma **solo** se traduce texto descriptivo, instrucciones e
interfaz. **Nunca** se traducen:

- Nombres de técnicas (p. ej. `Fast Resets`, `Bartering con Piglins`).
- Nombres de videojuegos/categorías de juego (`Minecraft PVP`, `Cuphead`…).
- Nombres de periféricos, marcas y modelos (`Wooting 60HE+`, `Bloody A70 II`…).
- Nombres de creadores/YouTubers (`Intel Edits`, `Marlowww`…).

Las etiquetas genéricas de categoría (`Introducción`, `Recomendaciones`,
`Periféricos`, `Fuentes`) sí se traducen por ser texto de interfaz.

## ⚠️ Enlaces pendientes (Texture Packs)

Los enlaces de Google Drive de los texture packs no venían incluidos en las
notas del proyecto. El sistema ya está listo: edita **un solo lugar** en
`js/data.js` → `TEXTURE_PACKS` y cambia `url: null` por la URL real:

```js
{ name: 'Vanilla Crystal by Marlowww', author: 'Marlowww', url: 'https://drive.google.com/…' },
```

La tarjeta y la sección "Fuentes" pasarán automáticamente a mostrar el botón
**Descargar** con el enlace activo.

## 🎬 Videos de YouTube

Todos los IDs se extrajeron exactamente de las URLs del pliego
(p. ej. `https://www.youtube.com/watch?v=rA_7wmPG_bg` → ID `rA_7wmPG_bg`) y se
embeben como `https://www.youtube.com/embed/ID`. Los videos con marca de
tiempo (`UHC GUIDE` en 546 s, `Legacy Edition` en 15 s) se conservan.

## 🩺 Fuentes de salud

Mayo Clinic (ergonomía de oficina), American Academy of Ophthalmology
(20-20-20, iluminación, ojo seco), CDC (actividad física, hidratación) y
Harvard Health (síndrome del túnel carpiano). Enlaces exactos en
`js/data.js` → `SOURCES` y compilados en la página **Fuentes**.

## 🧭 Nuevas categorías (2026)

El menú pasó de 8 a **10 categorías** y todo el texto nuevo está escrito en **modo resumen**: frases cortas, tono gamer, misma información y las mismas fuentes. Las dos nuevas se sitúan justo después
de *Introducción* y están traducidas al 100 % en ES/EN:

| Ruta | Contenido |
|---|---|
| `#/conoce-el-tema` · **Conozcamos el tema** | 1) Qué es Games PvP y su misión de gaming saludable. 2) Adolescentes: adicción, frustración y lesiones (muñecas, vista, sueño). 3) Dato Oxford: 39 k jugadores (2022) y 72 % de mejor ánimo (2024). |
| `#/mirada-amplia` · **Mirada amplia** | 1) Corea del Norte, Eritrea y China (2000–2015): censura, brecha y prohibición. 2) Escuelas: Viktor Rydberg, Minecraft Education (140 países), Block by Block y Halmstad. 3) Récords Guinness y *Volume Alpha* en la Library of Congress (2025). 4) Cuatro miradas contrastadas. 5) Spreen e IShowSpeed + galería. |

### Interacción del símbolo

`js/topic.js` inicializa el emblema tras cada render del router:

- Flotado continuo (`gp-float`, 3.4 s).
- Hover/foco: animación `gp-float-hover` (escala 1.07 + rotación) y anillo
  giratorio acelerado.
- Clic: `is-exploding` → 20 partículas radiales (`--tx/--ty/--r/--delay`),
  onda de choque, explosión del núcleo, `aria-live` y `scrollIntoView` a
  `#tema-explicacion`; el contenido se revela con `gp-reveal`.
- Se puede repetir: tras 1.15 s el símbolo vuelve con `gp-return`.
- Con `prefers-reduced-motion` se omiten partículas y animaciones y solo se
  revela el contenido.

### Fuentes nuevas

Todas las afirmaciones de las nuevas categorías enlazan a fuentes reales
(`EXTRA_SOURCES` en `js/data.js`) y se compilan en la página **Fuentes**:
OMS (gaming disorder, CIE-11), Universidad de Oxford / Oxford Internet
Institute (2022 y 2024), Library of Congress, Guinness World Records,
Minecraft Education, Block by Block, PC Gamer, Halmstads kommun, CPJ,
Wikipedia (censura en Corea del Norte), The Verge, BBC, AP News, TIME y Forbes.

### Imágenes

Las imágenes viven en `assets/` y están optimizadas (JPEG progresivo / WebP,
máx. 1200 px). Son imágenes de terceros usadas con **finalidad educativa**;
cada una muestra su crédito al pie y aparece listada en la sección
*Créditos de imágenes* de la página **Fuentes**. Si necesitas sustituir
alguna, basta con reemplazar el archivo —las rutas están centralizadas en
`js/data.js` (`CATEGORY_IMAGES`, `STREAMER_CASES`, `STREAMER_GALLERY`,
`RECORD_CARDS`, `SCHOOL_EXAMPLES`, `TOPIC_BLOCKS`).

Las tres URLs externas aportadas para la galería de Spreen e IShowSpeed se
cargan directamente; si el host remoto bloquea la petición, el listener
global de `js/main.js` cambia el `src` por su copia local (`data-fallback`).

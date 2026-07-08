import { attr, escapeHtml, safeUrl } from "../utils/html.js";
import { icon } from "./icons.js";
import { mailto, tel } from "../utils/links.js";

const navigation = [
  { href: "#bio", label: "Bio" },
  { href: "#projets", label: "Projets hébergés" },
  { href: "#captures", label: "Projets non hostés" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" }
];

const neonLights = [
  { left: "7%", top: "24%", size: "7px", delay: "-1s", duration: "5.8s" },
  { left: "15%", top: "66%", size: "5px", delay: "-4s", duration: "7.1s" },
  { left: "23%", top: "42%", size: "6px", delay: "-2.4s", duration: "6.4s" },
  { left: "38%", top: "18%", size: "4px", delay: "-5.2s", duration: "8s" },
  { left: "54%", top: "72%", size: "7px", delay: "-3.1s", duration: "6.9s" },
  { left: "68%", top: "36%", size: "5px", delay: "-6s", duration: "7.7s" },
  { left: "78%", top: "58%", size: "6px", delay: "-2s", duration: "5.9s" },
  { left: "91%", top: "30%", size: "4px", delay: "-4.6s", duration: "7.4s" },
  { left: "86%", top: "82%", size: "6px", delay: "-1.7s", duration: "6.2s" },
  { left: "46%", top: "48%", size: "5px", delay: "-5.8s", duration: "8.3s" }
];

const petals = [
  { sprite: "petal1.png", left: "4%", delay: "-13s", duration: "21s", drift: "88px", size: "27px", rotate: "310deg" },
  { sprite: "petal2.png", left: "11%", delay: "-4s", duration: "17s", drift: "-64px", size: "22px", rotate: "250deg" },
  { sprite: "flower1.png", left: "18%", delay: "-18s", duration: "24s", drift: "76px", size: "39px", rotate: "420deg", flower: true },
  { sprite: "leaf1.png", left: "27%", delay: "-8s", duration: "19s", drift: "-92px", size: "30px", rotate: "290deg" },
  { sprite: "petal3.png", left: "34%", delay: "-14s", duration: "22s", drift: "54px", size: "20px", rotate: "360deg" },
  { sprite: "petal4.png", left: "43%", delay: "-2s", duration: "16s", drift: "-38px", size: "24px", rotate: "270deg" },
  { sprite: "flower2.png", left: "51%", delay: "-11s", duration: "25s", drift: "82px", size: "36px", rotate: "410deg", flower: true },
  { sprite: "petal1.png", left: "59%", delay: "-6s", duration: "18s", drift: "-72px", size: "21px", rotate: "305deg" },
  { sprite: "leaf1.png", left: "67%", delay: "-16s", duration: "23s", drift: "94px", size: "28px", rotate: "380deg" },
  { sprite: "petal2.png", left: "74%", delay: "-9s", duration: "19s", drift: "-58px", size: "25px", rotate: "330deg" },
  { sprite: "petal3.png", left: "82%", delay: "-20s", duration: "26s", drift: "62px", size: "18px", rotate: "260deg" },
  { sprite: "flower1.png", left: "93%", delay: "-7s", duration: "20s", drift: "-96px", size: "33px", rotate: "390deg", flower: true }
];

const glyphs = [
  { text: "</>", left: "9%", top: "34%", delay: "-7s" },
  { text: "{ api }", left: "79%", top: "22%", delay: "-3s" },
  { text: "fix()", left: "66%", top: "66%", delay: "-10s" },
  { text: "git", left: "22%", top: "78%", delay: "-5s" },
  { text: "bug", left: "84%", top: "84%", delay: "-12s" }
];

function cssVars(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
}

export function skipLink() {
  return `<a class="skip-link" href="#main">Aller au contenu</a>`;
}

export function backgroundEffects() {
  return `
    <div class="ambient-scene" aria-hidden="true">
      <div class="theme-backdrop theme-backdrop-retrowave"></div>
      <div class="theme-backdrop theme-backdrop-light"></div>
      <div class="ambient-tint"></div>
      <div class="retro-sun"></div>
      <div class="retro-grid"></div>

      <div class="neon-light-field">
        ${neonLights.map(item => `<span style="${attr(cssVars({
          "--x": item.left,
          "--y": item.top,
          "--size": item.size,
          "--delay": item.delay,
          "--duration": item.duration
        }))}"></span>`).join("")}
      </div>

      <div class="sakura-field">
        ${petals.map(item => `
          <span class="sakura-lane" style="${attr(cssVars({
            "--x": item.left,
            "--delay": item.delay,
            "--duration": item.duration,
            "--drift": item.drift
          }))}">
            <img
              class="${item.flower ? "is-flower" : "is-petal"}"
              src="${attr(`/media/themes/floral/${item.sprite}`)}"
              alt=""
              draggable="false"
              style="${attr(cssVars({
                "--size": item.size,
                "--rotate-to": item.rotate
              }))}"
            />
          </span>
        `).join("")}
      </div>

      <div class="code-glyph-field">
        ${glyphs.map(item => `<span class="mono" style="${attr(cssVars({
          "--x": item.left,
          "--y": item.top,
          "--delay": item.delay
        }))}">${escapeHtml(item.text)}</span>`).join("")}
      </div>
    </div>
    <div class="noise" aria-hidden="true"></div>
  `;
}

export function siteHeader(person) {
  return `
    <header class="site-header" data-glass>
      <a class="brand" href="#accueil" aria-label="Retour à l'accueil">
        <span class="brand-mark" aria-hidden="true">
          <img class="brand-icon brand-icon-dark" src="/media/brand/developer-icon-retrowave.png" alt="" />
          <img class="brand-icon brand-icon-light" src="/media/brand/developer-icon-sakura.png" alt="" />
        </span>
        <span class="brand-text">
          <strong>${escapeHtml(person.name)}</strong>
          <small>${escapeHtml(person.role)}</small>
        </span>
      </a>

      <div class="header-controls">
        <nav class="main-nav" aria-label="Navigation principale">
          ${navigation.map(item => `<a href="${attr(item.href)}">${escapeHtml(item.label)}</a>`).join("")}
        </nav>

        <button class="theme-toggle" type="button" aria-label="Changer de thème" aria-pressed="false">
          <span class="theme-toggle-icon theme-toggle-moon">${icon("moon")}</span>
          <span class="theme-toggle-icon theme-toggle-sun">${icon("sun")}</span>
        </button>

        <button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function quickContact(person) {
  const cvHref = safeUrl(person.cv);

  return `
    <aside class="quick-contact" aria-label="Contacts rapides">
      <a href="${attr(mailto(person.email))}" title="Écrire un courriel" aria-label="Écrire un courriel">${icon("mail")}</a>
      <a href="${attr(tel(person.phone))}" title="Téléphoner" aria-label="Téléphoner">${icon("phone")}</a>
      <a href="${attr(safeUrl(person.linkedin))}" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noreferrer">${icon("linkedin")}</a>
      <a href="${attr(safeUrl(person.website))}" title="GitHub" aria-label="GitHub" target="_blank" rel="noreferrer">${icon("github")}</a>
      <a href="${attr(cvHref)}" title="Télécharger le CV" aria-label="Télécharger le CV" download="Olivier_Poirier_CV.docx">${icon("download")}</a>
    </aside>
  `;
}

export function siteFooter(person) {
  const cvHref = safeUrl(person.cv);

  return `
    <footer class="footer">
      <div class="footer-meta">
        <span>${escapeHtml(person.name)}</span>
        <span>&copy; <span data-year>${new Date().getFullYear()}</span></span>
      </div>
      <a class="btn ghost footer-cv" href="${attr(cvHref)}" download="Olivier_Poirier_CV.docx">
        ${icon("download")}
        <span>Télécharger le CV</span>
      </a>
    </footer>
  `;
}

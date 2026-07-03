import { attr, escapeHtml, safeUrl } from "../utils/html.js";
import { mailto, tel } from "../utils/links.js";

const navigation = [
  { href: "#bio", label: "Bio" },
  { href: "#projets", label: "Projets hébergés" },
  { href: "#captures", label: "Projets non hostés" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" }
];

export function skipLink() {
  return `<a class="skip-link" href="#main">Aller au contenu</a>`;
}

export function backgroundEffects() {
  return `
    <div class="noise" aria-hidden="true"></div>
    <div class="orb orb-one" aria-hidden="true"></div>
    <div class="orb orb-two" aria-hidden="true"></div>
    <canvas id="matrixCanvas" aria-hidden="true"></canvas>
  `;
}

export function siteHeader(person) {
  return `
    <header class="site-header" data-glass>
      <a class="brand magnetic" href="#accueil" aria-label="Retour à l'accueil">
        <span class="brand-mark">${escapeHtml(person.initials)}</span>
        <span class="brand-text">
          <strong>${escapeHtml(person.name)}</strong>
          <small>${escapeHtml(person.role)}</small>
        </span>
      </a>

      <button class="menu-toggle magnetic" type="button" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" aria-label="Navigation principale">
        ${navigation.map(item => `<a href="${attr(item.href)}">${escapeHtml(item.label)}</a>`).join("")}
      </nav>
    </header>
  `;
}

export function quickContact(person) {
  return `
    <aside class="quick-contact" aria-label="Contacts rapides">
      <a href="${attr(mailto(person.email))}" title="Écrire un courriel">&#9993;</a>
      <a href="${attr(tel(person.phone))}" title="Téléphoner">&#9742;</a>
      <a href="${attr(safeUrl(person.linkedin))}" title="LinkedIn" target="_blank" rel="noreferrer">in</a>
      <button class="theme-toggle" type="button" title="Changer le thème" aria-label="Changer le thème" aria-pressed="false">&#9679;</button>
    </aside>
  `;
}

export function siteFooter(person) {
  return `
    <footer class="footer">
      <span>${escapeHtml(person.name)}</span>
      <span>&copy; <span data-year>${new Date().getFullYear()}</span></span>
    </footer>
  `;
}

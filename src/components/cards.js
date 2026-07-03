import { attr, escapeHtml, safeUrl } from "../utils/html.js";

export function tagList(items = []) {
  return `
    <div class="tag-list">
      ${items.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  `;
}

const skillIcons = {
  monitor: `
    <svg viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="13" rx="2"></rect>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
    </svg>
  `,
  radio: `
    <svg viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 0 1 16 0"></path>
      <path d="M8 12a4 4 0 0 1 8 0"></path>
      <circle cx="12" cy="12" r="1.6"></circle>
      <path d="M6 16h12"></path>
      <path d="M8 20h8"></path>
    </svg>
  `,
  server: `
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="6" rx="2"></rect>
      <rect x="4" y="14" width="16" height="6" rx="2"></rect>
      <path d="M8 7h.01"></path>
      <path d="M8 17h.01"></path>
      <path d="M12 7h4"></path>
      <path d="M12 17h4"></path>
    </svg>
  `,
  database: `
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="7" ry="3"></ellipse>
      <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"></path>
      <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"></path>
    </svg>
  `,
  plug: `
    <svg viewBox="0 0 24 24">
      <path d="M9 7V3"></path>
      <path d="M15 7V3"></path>
      <path d="M7 7h10v4a5 5 0 0 1-10 0Z"></path>
      <path d="M12 16v5"></path>
    </svg>
  `,
  app: `
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="3"></rect>
      <path d="M8 9h8"></path>
      <path d="M8 13h4"></path>
      <path d="M8 17h6"></path>
    </svg>
  `,
  tool: `
    <svg viewBox="0 0 24 24">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-4.8 4.8a2 2 0 0 0 2.8 2.8l4.8-4.8a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.6-2.6Z"></path>
    </svg>
  `,
  layout: `
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="3"></rect>
      <path d="M4 10h16"></path>
      <path d="M10 10v10"></path>
    </svg>
  `
};

function skillIcon(name) {
  return `
    <span class="skill-icon" aria-hidden="true">
      ${skillIcons[name] || skillIcons.tool}
    </span>
  `;
}

function proofList(items = [], label = "Démontré par") {
  if (!items.length) return "";

  return `
    <div class="proof-list" aria-label="${attr(label)}">
      <span>${escapeHtml(label)}</span>
      <div>
        ${items.map(item => `<strong>${escapeHtml(item)}</strong>`).join("")}
      </div>
    </div>
  `;
}

export function projectMedia(media, className = "") {
  if (!media?.src) return "";

  const label = media.type === "video" ? "Vidéo" : media.src.endsWith(".gif") ? "GIF" : "Capture";
  const body = media.type === "video"
    ? `<video src="${attr(media.src)}" poster="${attr(media.poster)}" autoplay muted loop playsinline></video>`
    : `<img src="${attr(media.src)}" alt="${attr(media.alt)}" loading="lazy" />`;

  return `
    <figure class="project-media ${className}">
      ${body}
      <figcaption class="media-label mono">${escapeHtml(label)}</figcaption>
    </figure>
  `;
}

export function mediaGallery(items = []) {
  if (!items.length) return "";

  return `
    <div class="media-gallery" aria-label="Aperçus supplémentaires">
      ${items.map(item => projectMedia(item, "gallery-media")).join("")}
    </div>
  `;
}

export function linkButtons(project) {
  const links = project.links || {};
  const hasExplicitLive = Boolean(links.live);
  const hasRepositoryLinks = Boolean(links.github || links.extra?.length);
  const liveUrl = hasExplicitLive || !hasRepositoryLinks ? links.live || project.url : undefined;
  const buttons = [
    { label: "Voir le site", url: liveUrl, variant: "primary" },
    { label: "GitHub", url: links.github, variant: "ghost" },
    { label: "Démo", url: links.demo, variant: "ghost" },
    ...(links.extra || [])
  ]
    .map(link => ({
      label: link.label,
      url: safeUrl(link.url),
      variant: link.variant || "ghost"
    }))
    .filter(link => link.label && link.url !== "#")
    .map(link => `<a class="btn ${attr(link.variant)} magnetic" href="${attr(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`);

  return buttons.length ? `<div class="project-links">${buttons.join("")}</div>` : "";
}

export function repoBadges(items = []) {
  if (!items.length) return "";

  return `
    <div class="repo-badges">
      ${items.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  `;
}

export function highlights(items = []) {
  if (!items.length) return "";

  return `
    <ul class="highlight-list">
      ${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

export function skillCard(skill, index) {
  const kindClass = skill.kind === "professional" ? "is-professional" : "is-demonstrated";
  const proofLabel = skill.kind === "professional" ? "Appuyé par" : "Démontré par";

  return `
    <article class="skill-card ${kindClass} reveal" style="--delay:${index * 70}ms">
      <div class="skill-card-top">
        ${skillIcon(skill.icon)}
        <div class="skill-number mono">${String(index + 1).padStart(2, "0")}</div>
      </div>
      <h3>${escapeHtml(skill.title)}</h3>
      ${skill.summary ? `<p class="skill-card-summary">${escapeHtml(skill.summary)}</p>` : ""}
      ${tagList(skill.items)}
      ${proofList(skill.proof, proofLabel)}
    </article>
  `;
}

export function featuredProjectCard(project, index) {
  return `
    <article class="featured-project-card reveal" style="--delay:${index * 90}ms">
      <div class="featured-project-copy">
        <div class="project-top compact">
          <span class="mono">${escapeHtml(project.date)}</span>
          <span>${escapeHtml(project.eyebrow || "Projet")}</span>
        </div>

        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        ${repoBadges(project.repoBadges)}
        ${highlights(project.highlights)}
        ${tagList(project.tags)}
        ${linkButtons(project)}
      </div>

      <div class="featured-project-visual">
        ${projectMedia(project.media, "featured-media")}
        ${mediaGallery(project.gallery)}
      </div>
    </article>
  `;
}

export function projectCard(project, index) {
  const url = safeUrl(project.links?.live || project.links?.github || project.url);
  const hasUrl = url !== "#";
  const action = hasUrl
    ? `<a class="project-arrow magnetic" href="${attr(url)}" target="_blank" rel="noreferrer" aria-label="Ouvrir ${attr(project.title)}">&#8599;</a>`
    : `<span class="project-arrow" aria-hidden="true">&bull;</span>`;

  return `
    <article class="project-card reveal tilt-card" style="--delay:${index * 80}ms">
      ${projectMedia(project.media, "card-media")}

      <div class="project-top">
        <span class="mono">${escapeHtml(project.date)}</span>
        ${action}
      </div>

      <p class="project-eyebrow">${escapeHtml(project.eyebrow || "Projet")}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      ${repoBadges(project.repoBadges)}
      ${highlights(project.highlights)}
      ${tagList(project.tags)}
      ${linkButtons(project)}
    </article>
  `;
}

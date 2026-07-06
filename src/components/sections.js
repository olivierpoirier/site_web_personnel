import { featuredProjectCard, projectCard, skillCard } from "./cards.js";
import { attr, escapeHtml, safeUrl } from "../utils/html.js";
import { displayUrl, getVideoLinks, mailto, tel } from "../utils/links.js";
import { icon } from "./icons.js";

function sectionHeader(kicker, title, text) {
  return `
    <div class="section-head reveal">
      <p class="section-kicker">${escapeHtml(kicker)}</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

export function heroSection(data) {
  const marqueeItems = [...data.marquee, ...data.marquee, ...data.marquee];

  return `
    <section id="accueil" class="hero section">
      <div class="hero-copy reveal">
        <p class="eyebrow">
          <span class="pulse"></span>
          <span>${escapeHtml(data.person.availability)}</span>
        </p>

        <h1>
          <span>${escapeHtml(data.hero.line1)}</span>
          <em>${escapeHtml(data.hero.line2)}</em>
        </h1>

        <p class="hero-text">${escapeHtml(data.hero.text)}</p>

        <div class="hero-actions">
          <a class="btn primary" href="#projets">${icon("arrowRight")}<span>Voir les projets</span></a>
          <a class="btn ghost" href="#contact">${icon("mail")}<span>Me contacter</span></a>
        </div>
      </div>

      <div class="hero-visual reveal">
        <div class="portrait-card profile-tilt">
          <div class="portrait-ring"></div>
          <img src="${attr(data.person.avatar)}" alt="Logo ou portrait de ${attr(data.person.name)}" />

          <div class="code-bubble bubble-one">
            <span class="mono">npm run build</span>
          </div>

          <div class="code-bubble bubble-two">
            <span class="mono">&lt;client + server /&gt;</span>
          </div>
        </div>
      </div>

      <div class="tech-marquee" aria-hidden="true">
        <div class="tech-marquee-track">
          ${marqueeItems.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>

      <div class="scroll-indicator" aria-hidden="true">
        <span></span>
      </div>
    </section>
  `;
}

export function bioSection(bio) {
  return `
    <section id="bio" class="section split">
      <div class="section-kicker reveal">01 / Bio</div>

      <div class="content-card reveal">
        <h2>${escapeHtml(bio.title)}</h2>
        <div>
          ${bio.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </div>
    </section>
  `;
}

export function projectsSection(projects) {
  const featuredProjects = projects.filter(project => project.featured);
  const standardProjects = projects.filter(project => !project.featured);

  return `
    <section id="projets" class="section">
      ${sectionHeader(
        "02 / Web",
        "Projets hébergés",
        "Applications, plateformes et projets accessibles en ligne, développés avec une approche full-stack, produit et déploiement."
      )}

      <div class="featured-projects">
        ${featuredProjects.map(featuredProjectCard).join("")}
      </div>

      <div class="project-grid">
        ${standardProjects.map(projectCard).join("")}
      </div>
    </section>
  `;
}

export function capturesSection(data) {
  const videoLinks = getVideoLinks(data.videos);
  const videoButtonAttrs = videoLinks.isAvailable
    ? `href="${attr(videoLinks.youtubeUrl)}" target="_blank" rel="noreferrer"`
    : `href="#" aria-disabled="true"`;
  const videoButtonText = videoLinks.isAvailable ? "Ouvrir sur YouTube" : "Playlist à venir";
  const featuredPrivateProjects = data.privateProjects.filter(project => project.featured);
  const standardPrivateProjects = data.privateProjects.filter(project => !project.featured);

  return `
    <section id="captures" class="section">
      ${sectionHeader(
        "03 / Prototypes",
        "Projets non hostés",
        "Projets privés, concepts applicatifs, architectures produit ou prototypes qui ne sont pas toujours disponibles publiquement."
      )}

      ${videoLinks.isAvailable ? `
        <div class="video-layout reveal">
          <div class="video-frame">
            <iframe
              title="Playlist de démonstrations"
              src="${attr(videoLinks.embedUrl)}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>

          <div class="video-copy">
            <h3>${escapeHtml(data.videos.title)}</h3>
            <p>${escapeHtml(data.videos.description)}</p>
            <a class="btn ghost" ${videoButtonAttrs}>${icon("external")}<span>${escapeHtml(videoButtonText)}</span></a>
          </div>
        </div>
      ` : ""}

      <div class="featured-projects private-featured-projects">
        ${featuredPrivateProjects.map(featuredProjectCard).join("")}
      </div>

      <div class="section-head private-projects-head reveal">
        <p class="section-kicker">03B / Concepts</p>
        <h2>Autres projets & architectures</h2>
        <p>
          SoundMaker, Troc local, StarBoost et autres projets démontrant la logique produit, l'automatisation et la structure technique.
        </p>
      </div>

      <div class="project-grid private-project-grid">
        ${standardPrivateProjects.map(projectCard).join("")}
      </div>
    </section>
  `;
}

export function skillsSection(skills) {
  const demonstratedSkills = skills.filter(skill => skill.kind !== "professional");
  const professionalSkills = skills.filter(skill => skill.kind === "professional");

  return `
    <section id="competences" class="section">
      ${sectionHeader(
        "04 / Stack",
        "Compétences",
        "Une stack reliée aux projets visibles : interfaces, APIs, audio, cloud, extensions et applications desktop."
      )}

      <div class="skills-showcase">
        <div class="skills-band">
          <div class="skills-band-head reveal">
            <p class="section-kicker">Stack démontrée</p>
            <h3>Des compétences visibles dans les projets.</h3>
          </div>

          <div class="skills-grid skills-grid-featured">
            ${demonstratedSkills.map(skillCard).join("")}
          </div>
        </div>

        ${professionalSkills.length ? `
          <div class="skills-band secondary-skills">
            <div class="skills-band-head reveal">
              <p class="section-kicker">Complémentaire</p>
              <h3>Méthodes, outils et réflexion produit.</h3>
            </div>

            <div class="skills-grid skills-grid-compact">
              ${professionalSkills.map((skill, index) => skillCard(skill, index + demonstratedSkills.length)).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

export function contactSection(data) {
  return `
    <section id="contact" class="section contact-section">
      <div class="contact-card reveal">
        <p class="section-kicker">05 / Contact</p>
        <h2>On construit quelque chose?</h2>
        <p>${escapeHtml(data.contactPitch)}</p>

        <div class="contact-links">
          <a href="${attr(mailto(data.person.email))}">${icon("mail")}<span>${escapeHtml(data.person.email)}</span></a>
          <a href="${attr(tel(data.person.phone))}">${icon("phone")}<span>${escapeHtml(data.person.phone)}</span></a>
          <a href="${attr(safeUrl(data.person.linkedin))}" target="_blank" rel="noreferrer">${icon("linkedin")}<span>LinkedIn</span></a>
          <a href="${attr(safeUrl(data.person.website))}" target="_blank" rel="noreferrer">${icon("github")}<span>${escapeHtml(displayUrl(data.person.website))}</span></a>
        </div>
      </div>
    </section>
  `;
}

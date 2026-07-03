import {
  backgroundEffects,
  quickContact,
  siteFooter,
  siteHeader,
  skipLink
} from "./layout.js";
import {
  bioSection,
  capturesSection,
  contactSection,
  heroSection,
  projectsSection,
  skillsSection
} from "./sections.js";

export function renderPortfolio(data) {
  const app = document.querySelector("#app");

  if (!app) {
    throw new Error("Le conteneur #app est introuvable.");
  }

  document.title = `${data.person.name} - Portfolio`;

  app.innerHTML = `
    ${skipLink()}
    ${backgroundEffects()}
    ${siteHeader(data.person)}
    ${quickContact(data.person)}

    <main id="main">
      ${heroSection(data)}
      ${bioSection(data.bio)}
      ${projectsSection(data.projects)}
      ${capturesSection(data)}
      ${skillsSection(data.skills)}
      ${contactSection(data)}
    </main>

    ${siteFooter(data.person)}
  `;
}

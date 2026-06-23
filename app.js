const data = window.PORTFOLIO_DATA;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value || "";
}

function setHref(selector, href) {
  const el = $(selector);
  if (el) el.href = href || "#";
}

function mailto(email) {
  return `mailto:${email}`;
}

function tel(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function initData() {
  if (!data) {
    console.error("PORTFOLIO_DATA est introuvable. Vérifie que data.js est bien chargé avant app.js.");
    return;
  }

  document.title = `${data.person.name} — Portfolio`;

  setText("[data-name]", data.person.name);
  setText("[data-role]", data.person.role);
  setText("[data-initials]", data.person.initials);
  setText("[data-availability]", data.person.availability);

  setText("[data-hero-line-1]", data.hero.line1);
  setText("[data-hero-line-2]", data.hero.line2);
  setText("[data-hero-text]", data.hero.text);

  const avatar = $("[data-avatar]");
  if (avatar) {
    avatar.src = data.person.avatar;
    avatar.alt = `Logo ou portrait de ${data.person.name}`;
  }

  setText("[data-bio-title]", data.bio.title);

  const bioText = $("[data-bio-text]");
  if (bioText && data.bio.paragraphs) {
    bioText.innerHTML = data.bio.paragraphs
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");
  }

  renderProjects();
  renderPrivateProjects();
  renderSkills();
  renderMarquee();
  initVideos();
  initContact();

  setText("[data-footer-name]", data.person.name);
  setText("[data-year]", new Date().getFullYear());
}

function renderSkills() {
  const grid = $("[data-skills]");
  if (!grid || !data.skills) return;

  grid.innerHTML = data.skills.map((skill, index) => `
    <article class="skill-card reveal" style="--delay:${index * 70}ms">
      <div class="skill-number mono">${String(index + 1).padStart(2, "0")}</div>
      <h3>${skill.title}</h3>

      <div class="tag-list">
        ${skill.items.map(item => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  const grid = $("[data-projects]");
  if (!grid || !data.projects) return;

  grid.innerHTML = data.projects.map((project, index) => `
    <article class="project-card reveal tilt-card" style="--delay:${index * 80}ms">
      <div class="project-top">
        <span class="mono">${project.date}</span>
        <a class="project-arrow magnetic" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Ouvrir ${project.title}">↗</a>
      </div>

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="tag-list">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderPrivateProjects() {
  const grid = $("[data-private-projects]");
  if (!grid || !data.privateProjects) return;

  grid.innerHTML = data.privateProjects.map((project, index) => {
    const hasUrl = project.url && project.url.trim() !== "" && project.url !== "#";

    return `
      <article class="project-card reveal tilt-card" style="--delay:${index * 80}ms">
        <div class="project-top">
          <span class="mono">${project.date}</span>

          ${
            hasUrl
              ? `<a class="project-arrow magnetic" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Ouvrir ${project.title}">↗</a>`
              : `<span class="project-arrow" aria-hidden="true">•</span>`
          }
        </div>

        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="tag-list">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderMarquee() {
  const track = $("[data-marquee-track]");
  if (!track || !data.marquee) return;

  const repeatedItems = [
    ...data.marquee,
    ...data.marquee,
    ...data.marquee
  ];

  track.innerHTML = repeatedItems
    .map(item => `<span>${item}</span>`)
    .join("");
}

function initVideos() {
  const iframe = $("[data-youtube-iframe]");
  const videoLink = $("[data-video-link]");

  const hasPlaylist = data.videos.playlistId && data.videos.playlistId.trim() !== "";
  const hasFallbackVideo = data.videos.fallbackVideoId && data.videos.fallbackVideoId.trim() !== "";

  let embedUrl = "";
  let youtubeUrl = "#";

  if (hasPlaylist) {
    embedUrl = `https://www.youtube.com/embed/videoseries?list=${data.videos.playlistId}`;
    youtubeUrl = `https://www.youtube.com/playlist?list=${data.videos.playlistId}`;
  } else if (hasFallbackVideo) {
    embedUrl = `https://www.youtube.com/embed/${data.videos.fallbackVideoId}`;
    youtubeUrl = `https://www.youtube.com/watch?v=${data.videos.fallbackVideoId}`;
  }

  if (iframe) {
    iframe.src = embedUrl;
  }

  setText("[data-video-title]", data.videos.title);
  setText("[data-video-description]", data.videos.description);

  if (videoLink) {
    videoLink.href = youtubeUrl;

    if (!hasPlaylist && !hasFallbackVideo) {
      videoLink.textContent = "Playlist à venir";
      videoLink.removeAttribute("target");
      videoLink.setAttribute("aria-disabled", "true");
    }
  }
}

function initContact() {
  const emailLink = mailto(data.person.email);
  const phoneLink = tel(data.person.phone);

  setHref("[data-contact-email]", emailLink);
  setHref("[data-contact-phone]", phoneLink);
  setHref("[data-contact-linkedin]", data.person.linkedin);

  const emailLabel = $("[data-contact-email-label]");
  if (emailLabel) {
    emailLabel.href = emailLink;
    emailLabel.textContent = data.person.email;
  }

  const phoneLabel = $("[data-contact-phone-label]");
  if (phoneLabel) {
    phoneLabel.href = phoneLink;
    phoneLabel.textContent = data.person.phone;
  }

  const websiteLabel = $("[data-contact-website-label]");
  if (websiteLabel) {
    websiteLabel.href = data.person.website;
    websiteLabel.textContent = data.person.website.replace(/^https?:\/\//, "");
  }

  setText("[data-contact-pitch]", data.contactPitch);
}

/* Menu mobile */
function initMenu() {
  const toggle = $(".menu-toggle");
  const nav = $(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  $$(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Apparition au scroll */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.14 });

  $$(".reveal").forEach(el => observer.observe(el));
}

/* Effet tilt subtil */
function initTilt() {
  $$(".tilt-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;

      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

/* Boutons magnétiques */
function initMagnetic() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  $$(".magnetic").forEach(el => {
    el.addEventListener("pointermove", event => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });

    el.addEventListener("pointerleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

/* Petit fond code-rain discret */
function initMatrixCanvas() {
  const canvas = $("#matrixCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const chars = "01{}[]<>/const=>npm.run.build";
  let width;
  let height;
  let columns;
  let drops;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / 18);
    drops = Array(columns).fill(0).map(() => Math.random() * height);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.font = "14px JetBrains Mono, monospace";

    const isLight = document.body.classList.contains("light");
    ctx.fillStyle = isLight ? "rgba(15, 23, 42, 0.07)" : "rgba(183, 255, 245, 0.075)";

    drops.forEach((drop, index) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = index * 18;
      const y = drop;

      ctx.fillText(char, x, y);

      if (y > height + Math.random() * 10000) drops[index] = 0;
      drops[index] += 0.45;
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

/* Thème */
function initTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "light") document.body.classList.add("light");

  const themeToggle = $(".theme-toggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "portfolio-theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  });
}

initData();
initMenu();
initReveal();
initTilt();
initMagnetic();
initMatrixCanvas();
initTheme();
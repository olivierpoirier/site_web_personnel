const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initInteractions() {
  initTheme();
  initMenu();
  initReveal();
  initHashScroll();
  initProfileTilt();
}

function initMenu() {
  const toggle = $(".menu-toggle");
  const nav = $(".main-nav");

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  $$(".main-nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

function initReveal() {
  const revealItems = $$(".reveal");

  if (reducedMotion() || !("IntersectionObserver" in window)) {
    revealItems.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach(el => observer.observe(el));

  const revealVisibleItems = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    revealItems.forEach(el => {
      if (el.classList.contains("is-visible")) return;

      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < viewportHeight * 0.92 && rect.bottom > 0;

      if (isInViewport) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    });
  };

  revealVisibleItems();
  requestAnimationFrame(revealVisibleItems);
  window.setTimeout(revealVisibleItems, 150);
  window.addEventListener("load", revealVisibleItems, { once: true });
  document.addEventListener("portfolio:check-reveal", revealVisibleItems);
  window.addEventListener("hashchange", () => requestAnimationFrame(revealVisibleItems));
}

function initHashScroll() {
  const scrollToHash = () => {
    if (!window.location.hash) return;

    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ block: "start", behavior: "auto" });
      document.dispatchEvent(new Event("portfolio:check-reveal"));
    }
  };

  if (window.location.hash) {
    scrollToHash();
    requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    window.setTimeout(scrollToHash, 150);
    window.addEventListener("load", scrollToHash, { once: true });
  }

  window.addEventListener("hashchange", () => requestAnimationFrame(scrollToHash));
}

function initProfileTilt() {
  if (reducedMotion()) return;

  const card = $(".profile-tilt");
  if (!card) return;

  card.addEventListener("pointermove", event => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
}

function initTheme() {
  const themeQuery = window.matchMedia("(prefers-color-scheme: light)");
  const toggle = $(".theme-toggle");
  const favicon = document.querySelector("#favicon");
  const storageKey = "portfolio_theme";
  let selectedTheme = themeQuery.matches ? "light" : "dark";

  try {
    const storedTheme = localStorage.getItem(storageKey);

    if (storedTheme === "light" || storedTheme === "dark") {
      selectedTheme = storedTheme;
    }
  } catch (err) {
    selectedTheme = themeQuery.matches ? "light" : "dark";
  }

  const applyTheme = () => {
    const isLight = selectedTheme === "light";

    document.documentElement.classList.toggle("light", isLight);

    if (favicon) {
      favicon.setAttribute(
        "href",
        isLight ? "/media/brand/favicon-sakura-32.png" : "/media/brand/favicon-retrowave-32.png"
      );
    }

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute("aria-label", isLight ? "Activer le thème nuit" : "Activer le thème sakura");
      toggle.title = isLight ? "Activer le thème nuit" : "Activer le thème sakura";
    }
  };

  applyTheme();

  if (toggle) {
    toggle.addEventListener("click", () => {
      selectedTheme = document.documentElement.classList.contains("light") ? "dark" : "light";

      try {
        localStorage.setItem(storageKey, selectedTheme);
      } catch (err) {
        // The visual toggle should keep working even if storage is unavailable.
      }

      applyTheme();
    });
  }
}

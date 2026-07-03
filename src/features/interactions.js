const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initInteractions() {
  initTheme();
  initMenu();
  initReveal();
  initHashScroll();
  initTilt();
  initMagnetic();
  initMatrixCanvas();
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

function initTilt() {
  if (reducedMotion()) return;

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

function initMagnetic() {
  if (reducedMotion()) return;

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

function initMatrixCanvas() {
  const canvas = $("#matrixCanvas");

  if (!canvas || reducedMotion()) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const chars = "01{}[]<>/const=>npm.run.build";
  let width = 0;
  let height = 0;
  let drops = [];
  let frameId = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);

    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const columns = Math.max(1, Math.floor(width / 18));
    drops = Array.from({ length: columns }, () => Math.random() * height);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.font = "14px JetBrains Mono, monospace";
    ctx.fillStyle = document.body.classList.contains("light")
      ? "rgba(15, 23, 42, 0.07)"
      : "rgba(183, 255, 245, 0.075)";

    drops.forEach((drop, index) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = index * 18;

      ctx.fillText(char, x, drop);

      if (drop > height + Math.random() * 10000) {
        drops[index] = 0;
      }

      drops[index] += 0.45;
    });

    frameId = requestAnimationFrame(draw);
  }

  function start() {
    if (!frameId) {
      frameId = requestAnimationFrame(draw);
    }
  }

  function stop() {
    cancelAnimationFrame(frameId);
    frameId = 0;
  }

  resize();
  start();

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });
}

function initTheme() {
  const themeToggle = $(".theme-toggle");
  const stored = localStorage.getItem("portfolio-theme");

  if (stored === "light") {
    document.body.classList.add("light");
  }

  if (!themeToggle) return;

  const syncButton = () => {
    const isLight = document.body.classList.contains("light");
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.title = isLight ? "Passer au thème sombre" : "Passer au thème clair";
  };

  syncButton();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "portfolio-theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
    syncButton();
  });
}

const icons = {
  arrowRight: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14"></path>
      <path d="m13 6 6 6-6 6"></path>
    </svg>
  `,
  code: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 9-4 3 4 3"></path>
      <path d="m16 9 4 3-4 3"></path>
      <path d="m14 4-4 16"></path>
    </svg>
  `,
  external: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7"></path>
      <path d="M9 7h8v8"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-fill-icon>
      <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.7.9.7 1.9v2.5c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.7Z"></path>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true" data-fill-icon>
      <path d="M5.2 9.1h3.4v10.7H5.2z"></path>
      <path d="M6.9 7.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"></path>
      <path d="M10.9 9.1h3.2v1.5c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3v5.7h-3.4v-5c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7v5.1h-3.4z"></path>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5"></rect>
      <path d="m5 8 7 5 7-5"></path>
    </svg>
  `,
  moon: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.3 14.8A8.2 8.2 0 0 1 9.2 3.7 8.7 8.7 0 1 0 20.3 14.8Z"></path>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="2.8" width="10" height="18.4" rx="2.6"></rect>
      <path d="M10 5.8h4"></path>
      <path d="M11.7 18h.6"></path>
    </svg>
  `,
  sun: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2.8v2.4"></path>
      <path d="M12 18.8v2.4"></path>
      <path d="m4.3 4.3 1.7 1.7"></path>
      <path d="m18 18 1.7 1.7"></path>
      <path d="M2.8 12h2.4"></path>
      <path d="M18.8 12h2.4"></path>
      <path d="m4.3 19.7 1.7-1.7"></path>
      <path d="m18 6 1.7-1.7"></path>
    </svg>
  `
};

export function icon(name) {
  return icons[name] || icons.external;
}

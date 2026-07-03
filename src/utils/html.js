const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
};

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => entities[char]);
}

export function attr(value) {
  return escapeHtml(value);
}

export function safeUrl(value, fallback = "#") {
  const url = String(value ?? "").trim();

  if (!url || /^javascript:/i.test(url)) {
    return fallback;
  }

  return url;
}

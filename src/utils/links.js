export function mailto(email) {
  return `mailto:${email}`;
}

export function tel(phone) {
  return `tel:${String(phone ?? "").replace(/[^\d+]/g, "")}`;
}

export function displayUrl(url) {
  return String(url ?? "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

export function getVideoLinks(videos) {
  const playlistId = String(videos?.playlistId ?? "").trim();
  const fallbackVideoId = String(videos?.fallbackVideoId ?? "").trim();

  if (playlistId) {
    return {
      embedUrl: `https://www.youtube.com/embed/videoseries?list=${playlistId}`,
      youtubeUrl: `https://www.youtube.com/playlist?list=${playlistId}`,
      isAvailable: true
    };
  }

  if (fallbackVideoId) {
    return {
      embedUrl: `https://www.youtube.com/embed/${fallbackVideoId}`,
      youtubeUrl: `https://www.youtube.com/watch?v=${fallbackVideoId}`,
      isAvailable: true
    };
  }

  return {
    embedUrl: "",
    youtubeUrl: "#",
    isAvailable: false
  };
}

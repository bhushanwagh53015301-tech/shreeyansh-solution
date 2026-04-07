const upsertMetaTag = (selector: string, attributes: Record<string, string>, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

export const setPageSeo = (title: string, description: string) => {
  document.title = title;

  upsertMetaTag('meta[name="description"]', { name: "description" }, description);
  upsertMetaTag('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMetaTag('meta[property="og:description"]', { property: "og:description" }, description);
  upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }, description);
};

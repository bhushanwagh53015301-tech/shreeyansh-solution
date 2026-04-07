const upsertMetaTag = (selector: string, attributes: Record<string, string>, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const upsertLinkTag = (selector: string, attributes: Record<string, string>) => {
  let tag = document.head.querySelector<HTMLLinkElement>(selector);

  if (!tag) {
    tag = document.createElement("link");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
};

export const setPageSeo = (title: string, description: string) => {
  const canonicalUrl = window.location.href;
  const ogImage = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/515401da-b2d8-4fc4-bb3b-89af28bdc8d0/id-preview-b64109c9--19fa6649-13eb-4042-a5bd-1007089e1fd9.lovable.app-1775476526495.png";

  document.title = title;

  upsertMetaTag('meta[name="description"]', { name: "description" }, description);
  upsertMetaTag('meta[name="robots"]', { name: "robots" }, "index, follow");
  upsertMetaTag('meta[property="og:type"]', { property: "og:type" }, "website");
  upsertMetaTag('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
  upsertMetaTag('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMetaTag('meta[property="og:description"]', { property: "og:description" }, description);
  upsertMetaTag('meta[property="og:image"]', { property: "og:image" }, ogImage);
  upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  upsertMetaTag('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage);
  upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
};

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

type SeoOptions = {
  robots?: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertStructuredData = (data?: SeoOptions["structuredData"]) => {
  const selector = 'script[data-seo="structured-data"]';
  const existing = document.head.querySelector<HTMLScriptElement>(selector);

  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo", "structured-data");
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(script);
  }
};

const getSiteUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  return (envUrl?.replace(/\/$/, "") || window.location.origin);
};

export const setPageSeo = (title: string, description: string, options: SeoOptions = {}) => {
  const siteUrl = getSiteUrl();
  const canonicalUrl = options.canonicalPath ? `${siteUrl}${options.canonicalPath}` : window.location.href;
  const ogImage = `${siteUrl}/favicon.ico`;
  const robots = options.robots ?? "index, follow";
  const ogType = options.ogType ?? "website";

  document.title = title;

  upsertMetaTag('meta[name="description"]', { name: "description" }, description);
  upsertMetaTag('meta[name="robots"]', { name: "robots" }, robots);
  upsertMetaTag('meta[property="og:type"]', { property: "og:type" }, ogType);
  upsertMetaTag('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
  upsertMetaTag('meta[property="og:site_name"]', { property: "og:site_name" }, "Shreeyansh Logitech Solutions");
  upsertMetaTag('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMetaTag('meta[property="og:description"]', { property: "og:description" }, description);
  upsertMetaTag('meta[property="og:image"]', { property: "og:image" }, ogImage);
  upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMetaTag('meta[name="twitter:site"]', { name: "twitter:site" }, "@shreeyanshlogitech");
  upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }, description);
  upsertMetaTag('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage);
  upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
  upsertStructuredData(options.structuredData);
};

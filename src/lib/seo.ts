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
  keywords?: string;
};

const DEFAULT_SEO_KEYWORDS = [
  "shreeyansh logistics",
  "shreyansh logistics",
  "shriyansh logistics",
  "shreeyansh logitech solutions",
  "shreeyansh transport",
  "shreeyansh truck booking",
  "shreeyansh truck rental",
  "shreeyansh logistics pune",
  "truck rental pune",
  "truck on rent pune",
  "truck booking online",
  "online truck booking pune",
  "truck booking pune",
  "truck hire pune",
  "lorry hire pune",
  "lorry booking service",
  "mini truck on rent near me",
  "mini truck booking near me",
  "pickup truck rental pune",
  "tempo on rent pune",
  "tempo traveller for goods pune",
  "transport services near me",
  "goods transport service",
  "goods transport pune",
  "load truck booking",
  "truck transport service pune",
  "tempo transport service",
  "freight transport service",
  "full truck load service pune",
  "ftl transport service",
  "cheapest truck booking service",
  "same day truck booking",
  "same day truck rental",
  "intercity truck transport",
  "truck rental for shifting goods",
  "cargo transportation services",
  "door to door logistics",
  "logistics company in Pune",
  "transport company in Pune",
  "reliable transport service",
  "affordable truck booking",
  "professional freight services",
  "truck booking for shifting goods",
  "transport services for business",
  "bulk goods transport India",
  "industrial goods transport service",
].join(", ");

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
  const ogImage = `${siteUrl}/og-image.png`;
  const robots = options.robots ?? "index, follow";
  const ogType = options.ogType ?? "website";
  const seoDescription = description;
  const keywords = options.keywords ?? DEFAULT_SEO_KEYWORDS;

  document.title = title;

  upsertMetaTag('meta[name="description"]', { name: "description" }, seoDescription);
  upsertMetaTag('meta[name="keywords"]', { name: "keywords" }, keywords);
  upsertMetaTag('meta[name="robots"]', { name: "robots" }, robots);
  upsertMetaTag('meta[property="og:type"]', { property: "og:type" }, ogType);
  upsertMetaTag('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
  upsertMetaTag('meta[property="og:site_name"]', { property: "og:site_name" }, "Shreeyansh Logitech Solutions");
  upsertMetaTag('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMetaTag('meta[property="og:description"]', { property: "og:description" }, seoDescription);
  upsertMetaTag('meta[property="og:image"]', { property: "og:image" }, ogImage);
  upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMetaTag('meta[name="twitter:site"]', { name: "twitter:site" }, "@shreeyanshlogitech");
  upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }, seoDescription);
  upsertMetaTag('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage);
  upsertLinkTag('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
  upsertStructuredData(options.structuredData);
};

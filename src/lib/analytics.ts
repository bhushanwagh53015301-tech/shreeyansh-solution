const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
let initialized = false;

type GtagCommand = "js" | "config" | "event";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
  }
}

export const isGAEnabled = () => Boolean(measurementId);

export const initGA4 = () => {
  if (!measurementId || initialized || typeof window === "undefined") {
    return;
  }

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"]`,
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      window.dataLayer.push(args);
    });

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  initialized = true;
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
};

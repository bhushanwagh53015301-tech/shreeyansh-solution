import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA4, isGAEnabled, trackPageView } from "@/lib/analytics";

const GA4PageTracker = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    initGA4();
  }, []);

  useEffect(() => {
    if (!isGAEnabled()) {
      return;
    }

    const pagePath = `${pathname}${search}${hash}`;
    trackPageView(pagePath, document.title);
  }, [pathname, search, hash]);

  return null;
};

export default GA4PageTracker;

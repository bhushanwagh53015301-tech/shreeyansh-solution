import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-24 right-3 md:bottom-4 md:right-4 z-[60] flex flex-col gap-2.5 md:gap-3 pb-[env(safe-area-inset-bottom)]">
      <a
        href="https://wa.me/919273234588?text=Hello%20Shreeyansh%20Logitech%20Solutions%2C%20I%20would%20like%20to%20book%20a%20truck.%20Please%20share%20availability%20and%20quote."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex h-11 w-11 md:h-12 md:w-12 rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-95 transition-all items-center justify-center"
      >
        <svg viewBox="0 0 16 16" className="h-5 w-5 md:h-6 md:w-6 fill-current" aria-hidden="true">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8c0 1.414.37 2.741 1.015 3.89L0 16l4.214-1.105A7.949 7.949 0 0 0 8 16h.003C12.418 16 16 12.418 16 8a7.948 7.948 0 0 0-2.399-5.674zM8.003 14.5a6.5 6.5 0 0 1-3.316-.908l-.237-.142-2.5.655.667-2.438-.154-.25a6.5 6.5 0 1 1 5.54 3.083z" />
          <path d="M11.566 9.644c-.195-.098-1.155-.57-1.334-.635-.179-.065-.31-.098-.44.098-.13.195-.505.635-.619.765-.114.13-.228.146-.423.049-.195-.098-.823-.303-1.568-.966-.58-.517-.972-1.154-1.086-1.349-.114-.195-.012-.3.086-.398.088-.087.195-.228.293-.342.098-.114.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.44-1.06-.602-1.452-.158-.38-.319-.328-.44-.334l-.375-.007c-.13 0-.342.049-.521.244s-.684.668-.684 1.63.7 1.891.798 2.021c.098.13 1.379 2.106 3.341 2.952.467.202.832.322 1.116.412.469.149.896.128 1.234.078.376-.056 1.155-.472 1.318-.928.163-.456.163-.847.114-.928-.049-.08-.179-.13-.374-.228z" />
        </svg>
      </a>

      {showBackToTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all flex items-center justify-center"
        >
          <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      ) : null}
    </div>
  );
};

export default FloatingActions;

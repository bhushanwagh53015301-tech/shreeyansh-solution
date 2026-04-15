import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
      <a
        href="tel:+919273234588"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl py-3 text-sm min-h-[44px]"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href="https://wa.me/919273234588?text=Hello%20Shreeyansh%20Logitech%20Solutions%2C%20I%20would%20like%20to%20book%20a%20truck.%20Please%20share%20availability%20and%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold rounded-xl py-3 text-sm min-h-[44px]"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
}

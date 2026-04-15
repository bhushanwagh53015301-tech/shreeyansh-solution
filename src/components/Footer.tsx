import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground overflow-hidden">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="h-8 w-8 text-secondary shrink-0" />
            <div className="min-w-0">
              <span className="font-heading font-bold text-lg leading-none block">Shreeyansh</span>
              <span className="font-heading text-xs text-secondary font-semibold tracking-wider">LOGITECH SOLUTIONS</span>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted partner for full truck load transportation across Maharashtra, Goa and Gujarat. 100+ vehicles at your service.
          </p>
        </div>

        <div className="min-w-0">
          <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 text-secondary shrink-0" />
              <span>
                SHREEYANSH LOGITECH SOLUTIONS, Swarajya Residency, Shop No. 1, Chakan MIDC Phase-V, Biradawadi,
                Taluka-Khed, Dist-Pune, Pin-401501
              </span>
            </div>
            <a href="tel:9273234588" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4 text-secondary" />
              9273234588
            </a>
            <a href="tel:7744897661" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4 text-secondary" />
              7744897661
            </a>
            <a href="mailto:shreeyanshlogitechsolutions@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors break-all">
              <Mail className="h-4 w-4 text-secondary" />
              shreeyanshlogitechsolutions@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 md:mt-12 pt-7 md:pt-8 text-center text-sm text-primary-foreground/50">
        {"\u00A9"} {new Date().getFullYear()} Shreeyansh Logitech Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;


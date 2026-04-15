import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <Truck className="h-8 w-8 text-secondary" />
          <div>
            <span className="font-heading font-bold text-lg text-primary leading-none block">Shreeyansh</span>
            <span className="font-heading text-xs text-secondary font-semibold tracking-wider">LOGITECH SOLUTIONS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-sm font-semibold tracking-wide transition-colors hover:text-secondary ${
                location.pathname === link.path ? "text-secondary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9273234588"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-heading text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden h-11 w-11 flex items-center justify-center rounded-lg border border-border bg-background/80 text-foreground transition-colors hover:bg-muted"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center w-full min-h-[44px] px-4 rounded-lg font-heading text-base font-semibold transition-colors ${
                    location.pathname === link.path ? "bg-secondary/10 text-secondary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9273234588"
                className="mt-1.5 flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 font-heading text-sm font-bold text-secondary-foreground min-h-[44px]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

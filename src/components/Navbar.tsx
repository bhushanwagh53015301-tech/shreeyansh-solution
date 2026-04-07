import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
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
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
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
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-sm font-semibold py-2 transition-colors ${
                    location.pathname === link.path ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9273234588"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-heading text-sm font-bold mt-2"
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

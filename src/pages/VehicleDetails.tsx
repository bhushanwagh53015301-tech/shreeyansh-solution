import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Truck, Shield, MapPin } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { setPageSeo } from "@/lib/seo";

const VehicleDetails = () => {
  const { slug } = useParams();
  const vehicle = vehicles.find((item) => item.slug === slug);

  useEffect(() => {
    if (!vehicle) {
      setPageSeo("Vehicle Not Found | Shreeyansh Logitech Solutions", "Requested fleet vehicle page was not found.");
      return;
    }

    setPageSeo(
      `${vehicle.name} on Rent in Pune | ${vehicle.capacity} Capacity`,
      `${vehicle.name} available for truck rental and full truck load movement across Maharashtra, Goa, and Gujarat.`
    );
  }, [vehicle]);

  if (!vehicle) {
    return (
      <div className="pt-16 md:pt-20">
        <section className="py-20 bg-section-light">
          <div className="container text-center">
            <h1 className="font-heading text-3xl font-black text-primary mb-3">Vehicle Not Found</h1>
            <p className="text-muted-foreground mb-6">Please choose a vehicle from our fleet list.</p>
            <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm">
              Back to Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary-foreground/80 text-sm font-semibold mb-2">Fleet Details</p>
            <h1 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              {vehicle.name} <span className="text-secondary">On Rent</span>
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl text-base md:text-lg">{vehicle.desc}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-card">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full rounded-2xl shadow-xl object-cover"
              width={1200}
              height={700}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                <p className="font-heading font-bold text-primary">{vehicle.capacity}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground mb-1">Load Range</p>
                <p className="font-heading font-bold text-primary">{vehicle.grossRange}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 sm:col-span-2">
                <p className="text-xs text-muted-foreground mb-1">Route Suitability</p>
                <p className="font-heading font-bold text-primary">{vehicle.routeSuitability}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-heading text-xl font-black text-primary mb-3">Best For</h2>
              <ul className="space-y-2">
                {vehicle.bestFor.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Truck className="h-4 w-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-heading text-xl font-black text-primary mb-3">Highlights</h2>
              <ul className="space-y-2">
                {vehicle.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Shield className="h-4 w-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-heading font-bold text-sm"
              >
                Get Quote for {vehicle.shortName} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9273234588"
                className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3.5 rounded-lg font-heading font-bold text-sm text-primary"
              >
                <MapPin className="h-4 w-4" /> Call: 9273234588
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VehicleDetails;


import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Truck, MapPin, Package, ArrowRight, CheckCircle, Globe2 } from "lucide-react";
import fleetImg from "@/assets/vehicals/tata-flatbed-trailer-truck-heavy-cargo-transport-construction-site.png";
import highlightImg from "@/assets/coverage-map.svg";
import { setPageSeo } from "@/lib/seo";
import { vehicles } from "@/data/vehicles";
import { products } from "@/data/products";

const services = [
  {
    title: "Truck Rental in Pune",
    desc: "Dedicated truck rental service for Pune businesses that need quick vehicle availability for factory dispatch, goods movement, and regular transport work.",
    features: ["Truck on rent for local movement", "Same-day pickup options", "Door-to-door coordination"],
  },
  {
    title: "Mini Truck and Pickup Truck Rental",
    desc: "Mini truck on rent and pickup truck rental support for lighter loads, urgent dispatches, and short-distance commercial deliveries.",
    features: ["Mini truck booking near me", "Pickup truck rental for business", "Flexible route planning"],
  },
  {
    title: "Tempo on Rent and Goods Transport",
    desc: "Tempo transport service for practical goods movement when you need a fast, affordable option for local and intercity routes.",
    features: ["Tempo on rent in Pune", "Goods transport for daily loads", "Commercial cargo support"],
  },
  {
    title: "Intercity and FTL Transport",
    desc: "Full truck load transport across Maharashtra, Goa, and selected Gujarat routes for larger shipments and business cargo movement.",
    features: ["Intercity truck booking", "FTL route support", "Timely interstate delivery"],
  },
];

const searchIntentBlocks = [
  {
    title: "Best Truck Rentals in Pune",
    desc: "If someone searches best truck rentals in Pune, they usually want a reliable company with the right vehicle options, quick response, and practical pricing. This services page is now written to match that local buying intent.",
  },
  {
    title: "Truck on Rent in Pune",
    desc: "When customers search truck on rent in Pune, truck rental Pune, or truck booking Pune, they are usually looking for quick availability, clear pricing, and dependable coordination. This page now speaks to that exact need.",
  },
  {
    title: "Mini Truck on Rent Near Me",
    desc: "For small commercial loads and urgent dispatches, people often search mini truck on rent near me, pickup truck rental, or small truck booking. We support those use cases with practical vehicle matching.",
  },
  {
    title: "Tempo on Rent for Goods Transport",
    desc: "Many buyers search tempo on rent, lorry booking service, or goods transport near me when they need flexible business transport. We help with local and intercity goods movement using the right vehicle type.",
  },
];

const destinationZones = [
  {
    title: "Pune Region",
    locations: ["Local Pune", "Shirur", "Karegaon, Shirur", "Baramati"],
  },
  {
    title: "Western Maharashtra",
    locations: ["Solapur", "Kolhapur", "Sangli"],
  },
  {
    title: "Mumbai Metropolitan Region",
    locations: ["Mumbai City", "Navi Mumbai", "Vasai", "Bhiwandi", "Panvel", "Thane", "Manor", "Palghar"],
  },
  {
    title: "Central Maharashtra",
    locations: ["Ahmednagar", "Aurangabad", "Jalna", "Karmad"],
  },
  {
    title: "Marathwada & Vidarbha",
    locations: ["Nagpur", "Nanded", "Beed", "Parli", "Latur"],
  },
  {
    title: "North Maharashtra",
    locations: ["Nashik", "Malegaon", "Dhule", "Jalgaon"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Services = () => {
  useEffect(() => {
    setPageSeo(
      "Best Truck Rentals in Pune | Mini Truck, Tempo & FTL Booking",
      "Looking for the best truck rentals in Pune? Shreeyansh Logitech Solutions provides truck rental, mini truck on rent, pickup truck rental, tempo on rent, and full truck load transport across Pune and nearby routes.",
      {
        canonicalPath: "/services",
        keywords:
          "best truck rentals in pune, truck rental pune, truck on rent pune, mini truck on rent near me, pickup truck rental pune, tempo on rent pune, truck booking pune, full truck load service pune, intercity truck transport, shreeyansh logistics services",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Best Truck Rentals in Pune",
          provider: {
            "@type": "Organization",
            name: "Shreeyansh Logitech Solutions",
          },
          description:
            "Truck rental, mini truck booking, pickup truck hire, tempo on rent, and full truck load transportation services in Pune and western India.",
          areaServed: ["Pune", "Maharashtra", "Goa", "Gujarat"],
        },
      }
    );
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4">
              Best Truck Rentals in Pune <span className="text-secondary">& Transport Services</span>
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl text-base sm:text-lg md:text-xl">
              Looking for the best truck rentals in Pune? Get truck on rent, mini truck booking, pickup truck rental, tempo on rent, and full truck load support for Pune and surrounding business routes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-10">
            <p className="font-heading text-sm font-black tracking-widest text-secondary mb-2">HIGH-INTENT SEARCH TERMS</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-4">
              Pune Truck Rental Services Built Around <span className="text-secondary">How Customers Search</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              People searching for transport usually type best truck rentals in Pune, truck rental Pune, mini truck on rent near me, tempo on rent, pickup truck rental, or truck booking Pune. We have aligned this services page around those real rental needs while keeping the content useful and natural.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {searchIntentBlocks.map((block, i) => (
              <motion.div
                key={block.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-black text-primary mb-3">{block.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 md:mb-8">
            <p className="font-heading text-sm font-black tracking-widest text-secondary mb-2 text-center">SPECIALIZED MATERIAL TRANSPORT</p>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-primary text-center">Material Handling Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {products.map((item, i) => (
              <motion.div
                key={item.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="overflow-hidden rounded-2xl border border-secondary/30 bg-secondary/10"
              >
                <div className="h-56 md:h-64 overflow-hidden bg-white">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain p-3" loading="lazy" />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-heading text-xl font-black text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground font-semibold text-sm">{item.desc}</p>
                  <Link to={`/products/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-secondary text-sm font-semibold">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm">
              Explore All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-secondary/20 bg-primary text-primary-foreground shadow-2xl"
          >
            <img
              src={highlightImg}
              alt="Service coverage map for Maharashtra Goa and Gujarat"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={700}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/82 to-primary/55" />
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
            <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative px-6 py-8 md:px-10 md:py-12">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                  <Globe2 className="h-3.5 w-3.5 text-secondary" />
                  Service Coverage
                </p>
                <h2 className="font-heading text-2xl font-black leading-tight md:text-4xl">
                  We Provide <span className="text-secondary">All Types of Rental Trucks</span> in
                  <span className="text-secondary"> Maharashtra, Goa and Gujarat</span> (Selected Areas).
                </h2>
                <p className="mt-4 max-w-xl text-sm text-primary-foreground/85 md:text-base">
                  Dedicated vehicles, trusted coordination, and practical route support for truck rental, goods transport, and industrial cargo movement.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["Maharashtra", "Goa", "Gujarat (Some Areas)"].map((area) => (
                    <span key={area} className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground md:text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 mt-8 md:mt-10 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide">
                Chakan/Pune
              </span>
              <span className="rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold tracking-wide">
                28 Destination Points
              </span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-black text-primary mb-2">
              <span className="text-secondary">Chakan/Pune</span> to various destination
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Planned truck booking and FTL movement across major commercial and industrial corridors in Maharashtra.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinationZones.map((zone) => (
                <div key={zone.title} className="rounded-xl border border-border bg-background p-4">
                  <h4 className="font-heading text-base font-bold text-primary mb-3">{zone.title}</h4>
                  <ul className="space-y-2">
                    {zone.locations.map((location) => (
                      <li key={location} className="text-sm text-foreground flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
              Vehicles Available <span className="text-secondary">On Rent</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Browse vehicle options for mini truck rental, pickup truck hire, medium truck movement, and full truck load cargo transport.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vehicles.map((v, i) => (
              <motion.div
                key={v.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <Link to={`/vehicles/${v.slug}`} className="block">
                  <div className="overflow-hidden h-48 md:h-52">
                    <img
                      src={v.image}
                      alt={v.name}
                      className={`w-full h-full transition-transform duration-500 ${v.imageClassName ?? "object-contain bg-white p-2 group-hover:scale-105"}`}
                      loading="lazy"
                      width={800}
                      height={600}
                      onError={(event) => {
                        if (!v.fallbackImage) return;
                        const target = event.currentTarget;
                        if (target.src.endsWith(v.fallbackImage)) return;
                        target.src = v.fallbackImage;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="min-w-0 font-heading font-bold text-base md:text-lg text-primary leading-tight">{v.shortName}</h3>
                      <span className="shrink-0 rounded-full bg-secondary/10 px-2.5 py-1.5 text-[11px] font-heading font-bold leading-none text-secondary sm:px-3 sm:text-xs sm:whitespace-nowrap">
                        {v.capacity}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{v.desc}</p>
                    <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-section-light py-14 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Whether someone searches for best truck rentals in Pune, truck hire Pune, lorry booking service, transport service near me, or full truck load transport, this page is designed to answer that requirement with relevant vehicle and route information.
            </p>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-12 md:py-16 lg:py-20 bg-section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
              Our Service <span className="text-secondary">Coverage</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Reliable truck rental and FTL transportation across western India with focus on Maharashtra, Goa, and selected routes in Gujarat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={highlightImg} alt="Service coverage map" className="w-full rounded-2xl shadow-lg" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Extensive Regional Network</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Maharashtra</h4>
                    <p className="text-sm text-muted-foreground">Pune, Mumbai, Nagpur, Aurangabad, Nashik, Solapur, Kolhapur, Sangli, Ratnagiri, Chiplun, Kokan area, MIDC areas, and all major industrial zones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Goa</h4>
                    <p className="text-sm text-muted-foreground">North Goa and South Goa regions with regular scheduled routes and reliable service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Gujarat</h4>
                    <p className="text-sm text-muted-foreground">Vapi, Vadodara, Ahmedabad, and select industrial areas with interstate permits and experienced drivers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { number: "3", label: "States Covered" },
              { number: "50+", label: "Cities & Towns" },
              { number: "100+", label: "Regular Routes" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-card rounded-2xl p-6 text-center shadow-sm"
              >
                <p className="font-heading text-3xl font-black text-secondary mb-2">{stat.number}</p>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex gap-4 mb-6">
              {[Truck, MapPin, Package].map((Icon, i) => (
                <div key={i} className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
              ))}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-4">
              Truck Rental for <span className="text-secondary">Business Transport</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in truck rental and FTL transportation with dedicated vehicles for cargo movement. From pickup trucks and mini trucks to larger trailers, we help businesses choose the right vehicle for local, intercity, and industrial transport requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-heading font-bold text-secondary-foreground hover:opacity-90 transition-opacity"
              >
                Book a Truck <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-heading font-bold text-primary hover:bg-card transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={fleetImg} alt="Fleet" className="rounded-2xl shadow-xl w-full" loading="lazy" width={1200} height={600} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

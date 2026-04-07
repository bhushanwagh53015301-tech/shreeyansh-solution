import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Phone, BadgeCheck, Headset, Route } from "lucide-react";
import heroImg from "@/assets/hero-trucks.jpg";
import fleetImg from "@/assets/fleet-trucks.jpg";
import { vehicles } from "@/data/vehicles";
import { setPageSeo } from "@/lib/seo";

const stats = [
  { number: "100+", label: "Vehicles" },
  { number: "18+", label: "Years Experience" },
  { number: "3", label: "States Covered" },
  { number: "500+", label: "Happy Clients" },
];

const whyChooseUs = [
  { icon: BadgeCheck, title: "Reliable Fleet Availability", desc: "All major vehicle categories available for urgent and planned bookings." },
  { icon: Route, title: "Route Expertise", desc: "Regular operations across Maharashtra, Goa, and Gujarat service corridors." },
  { icon: Shield, title: "Safer Cargo Handling", desc: "Handled by experienced drivers with practical loading and transit discipline." },
  { icon: Headset, title: "Responsive Support", desc: "Quick coordination support from booking to delivery completion." },
];

const howItWorks = [
  { step: "01", title: "Share Requirement", desc: "Tell us load type, pickup, drop, date, and preferred vehicle." },
  { step: "02", title: "Get Quote & Vehicle", desc: "Receive pricing and best-fit truck option based on route and cargo." },
  { step: "03", title: "Pickup & Delivery", desc: "Vehicle is assigned and delivery is coordinated on time." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Index = () => {
  useEffect(() => {
    setPageSeo(
      "Truck Rental in Pune | FTL Transport in Maharashtra, Goa, Gujarat",
      "Shreeyansh Logitech Solutions offers full truck load transportation from Pune across Maharashtra, Goa, and Gujarat with all major truck types."
    );
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[78vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Truck fleet on highway" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full font-heading text-xs font-bold tracking-wider mb-6">
              #1 TRUSTED TRUCK RENTAL IN MAHARASHTRA
            </span>
            <h1 className="font-heading text-3xl md:text-6xl font-black text-primary-foreground leading-tight mb-5 md:mb-6">
              Full Truck Load <br />
              <span className="text-secondary">Transportation</span> Solutions
            </h1>
            <p className="text-primary-foreground/85 text-base md:text-xl mb-7 md:mb-8 leading-relaxed">
              Rent all vehicle types from Pick Up to 40ft Trailer. Serving selected routes in Maharashtra, Goa, and Gujarat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                to="/contact"
                className="bg-secondary text-secondary-foreground px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9273234588"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-heading font-bold text-sm hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Highlight */}
      <section className="py-6 md:py-8 bg-card">
        <div className="container">
          <div className="rounded-2xl border-2 border-secondary/30 bg-secondary/10 px-4 md:px-6 py-4 md:py-5 text-center">
            <p className="font-heading text-lg md:text-2xl font-black text-primary leading-snug">
              We Provide <span className="text-secondary">All Types of Full Truckload Vehicles</span> in
              <span className="text-secondary"> Maharashtra, Goa, and Gujarat</span> (Selected Areas).
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-10 md:py-12">
        <div className="container">
          <div className="bg-card rounded-2xl shadow-xl p-5 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-black text-secondary">{stat.number}</div>
                <div className="text-muted-foreground text-sm font-semibold mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 md:py-20 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
              Why Choose <span className="text-secondary">Us</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="rounded-xl border border-border bg-background p-6">
                <item.icon className="h-7 w-7 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 md:py-20 bg-section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
              How Booking <span className="text-secondary">Works</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="bg-card rounded-2xl p-7 shadow-sm">
                <p className="font-heading text-secondary text-sm font-black tracking-widest mb-3">{item.step}</p>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="py-14 md:py-20 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
              Vehicles Available <span className="text-secondary">On Rent</span>
            </h2>
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
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="font-heading font-bold text-base md:text-lg text-primary">{v.shortName}</h3>
                      <span className="text-xs font-heading font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full">{v.capacity}</span>
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
        </div>
      </section>

      {/* Fleet CTA */}
      <section className="py-14 md:py-20 bg-section-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-heading text-2xl md:text-4xl font-black text-primary mb-5 md:mb-6">
                A Fleet for <span className="text-secondary">Every Need</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From Pick Up to 40ft Trailer, we support local, intercity, and interstate logistics with dependable vehicle availability.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={fleetImg} alt="Our truck fleet" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={1200} height={600} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Clock, Users, Phone } from "lucide-react";
import heroImg from "@/assets/hero-trucks.jpg";
import fleetImg from "@/assets/fleet-trucks.jpg";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[78vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Truck fleet on highway" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>
      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full font-heading text-xs font-bold tracking-wider mb-6">
            #1 TRUSTED TRUCK RENTAL IN MAHARASHTRA
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-6">
            Full Truck Load <br />
            <span className="text-secondary">Transportation</span> Solutions
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
            Rent any type of vehicle — Pick up to 40ft Trailers. Serving all Maharashtra, Goa & Gujarat with 100+ vehicles.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
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
    <section className="bg-card py-10 md:py-12 relative z-20">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-xl p-5 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <AnimatedStatNumber value={stat.number} />
              <div className="text-muted-foreground text-sm font-semibold mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-14 md:py-20 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
            Our <span className="text-secondary">Commitment</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Built for dependable full truckload movement with practical operations and route-ready support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-xl border border-border bg-background p-6"
            >
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
            How Booking <span className="text-secondary">Works</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Simple 3-step process for quick truck allocation and smooth cargo movement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-card rounded-2xl p-7 shadow-sm"
            >
              <p className="font-heading text-secondary text-sm font-black tracking-widest mb-3">{item.step}</p>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Fleet CTA */}
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary mb-6">
              A Fleet for <span className="text-secondary">Every Need</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From small pickups to 40ft trailers, we have the right vehicle for your cargo. Our diverse fleet serves local, intercity and interstate routes across Maharashtra, Goa and Gujarat.
            </p>
            <ul className="space-y-3 mb-8">
              {["Pick Up & Tata 407", "709 / 909 / 1109 Trucks", "20ft Container Vehicles", "JCB & Heavy Equipment", "40ft Trailer Vehicles"].map((v) => (
                <li key={v} className="flex items-center gap-3 text-foreground">
                  <Truck className="h-4 w-4 text-secondary shrink-0" />
                  <span className="font-semibold text-sm">{v}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <item.icon className="h-7 w-7 text-secondary mb-4" />
              <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Fleet Specs */}
    <section className="py-14 md:py-20 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
            Fleet <span className="text-secondary">Specifications</span>
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get in touch for competitive rates and reliable transportation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <a
              href="tel:9273234588"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              📞 9273234588
            </a>
          </div>
        </motion.div>

        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left bg-background">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-5 py-4 font-heading text-sm text-primary">Vehicle</th>
                <th className="px-5 py-4 font-heading text-sm text-primary">Capacity</th>
                <th className="px-5 py-4 font-heading text-sm text-primary">Best For</th>
                <th className="px-5 py-4 font-heading text-sm text-primary">Route Suitability</th>
              </tr>
            </thead>
            <tbody>
              {fleetSpecs.map((row) => (
                <tr key={row.vehicle} className="border-t border-border">
                  <td className="px-5 py-4 font-semibold text-foreground">{row.vehicle}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.capacity}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.bestFor}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {fleetSpecs.map((row, i) => (
            <motion.div
              key={row.vehicle}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-xl border border-border bg-background p-5"
            >
              <h3 className="font-heading text-lg font-bold text-primary">{row.vehicle}</h3>
              <p className="text-sm text-muted-foreground mt-2"><span className="font-semibold text-foreground">Capacity:</span> {row.capacity}</p>
              <p className="text-sm text-muted-foreground mt-1"><span className="font-semibold text-foreground">Best For:</span> {row.bestFor}</p>
              <p className="text-sm text-muted-foreground mt-1"><span className="font-semibold text-foreground">Route:</span> {row.route}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Index;

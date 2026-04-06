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

const commitments = [
  { icon: Clock, title: "Timely Delivery", desc: "Unwavering commitment to on-time delivery across all routes" },
  { icon: Shield, title: "Safe Handling", desc: "Reliable and safe handling of your goods with full insurance" },
  { icon: Users, title: "Prompt Support", desc: "24/7 support over call and quick resolution for all queries" },
  { icon: Truck, title: "End-to-End Solutions", desc: "Complete logistics solutions from pickup to final delivery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Truck fleet on highway" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>
      <div className="container relative z-10 py-32">
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
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:9273234588"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card py-12 -mt-16 relative z-20">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="font-heading text-3xl md:text-4xl font-black text-secondary">{stat.number}</div>
              <div className="text-muted-foreground text-sm font-semibold mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Commitments */}
    <section className="bg-section-light py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
            Our <span className="text-secondary">Commitment</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            We deliver excellence through reliability, safety, and dedication to every shipment.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-5">
                <item.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">{item.title}</h3>
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
              View Our Fleet <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={fleetImg}
              alt="Our truck fleet"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
              width={1200}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-hero-gradient py-16">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Ready to Move Your Cargo?
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
      </div>
    </section>
  </div>
);

export default Index;

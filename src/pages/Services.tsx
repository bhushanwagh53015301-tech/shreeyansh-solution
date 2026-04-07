import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, MapPin, Package, ArrowRight, CheckCircle, Factory, ShoppingBag, Building2, Wrench, CircleHelp } from "lucide-react";
import fleetImg from "@/assets/fleet-trucks.jpg";

const services = [
  {
    title: "Local FTL Transportation",
    desc: "Full truck load services within Pune and nearby areas with same-day pickup and delivery options.",
    features: ["Same-day pickup", "Door-to-door delivery", "GPS tracked vehicles"],
  },
  {
    title: "All Maharashtra FTL",
    desc: "Complete coverage across Maharashtra with dedicated routes to all major cities and industrial areas.",
    features: ["All major cities covered", "MIDC area specialization", "Regular scheduled routes"],
  },
  {
    title: "Goa Transportation",
    desc: "Reliable cargo transportation to and from Goa with regular scheduled services.",
    features: ["Weekly scheduled routes", "Safe cargo handling", "Competitive rates"],
  },
  {
    title: "Gujarat Routes",
    desc: "Serving select areas in Gujarat for interstate cargo transportation needs.",
    features: ["Interstate permits", "Experienced drivers", "Timely delivery"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Services = () => (
  <div className="pt-20">
    <section className="bg-hero-gradient py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Comprehensive FTL transportation services across Maharashtra, Goa and Gujarat.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services intro */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex gap-4 mb-6">
            {[Truck, MapPin, Package].map((Icon, i) => (
              <div key={i} className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Icon className="h-7 w-7 text-secondary" />
              </div>
            ))}
          </div>
          <h2 className="font-heading text-3xl font-black text-primary mb-4">
            Full Truck Load <span className="text-secondary">Transportation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in FTL transportation providing dedicated vehicles for your cargo. With our wide range of vehicles from Pick Up to 40ft Trailers, we handle every type of shipment with care and efficiency.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src={fleetImg} alt="Fleet" className="rounded-2xl shadow-xl w-full" loading="lazy" width={1200} height={600} />
        </motion.div>
      </div>
    </section>

    {/* Service Cards */}
    <section className="bg-section-light py-20">
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
  </div>
);

export default Services;

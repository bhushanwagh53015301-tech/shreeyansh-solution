import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import pickupSmallImg from "@/assets/pickup-small.jpg";
import pickupImg from "@/assets/pickup-truck.jpg";
import truck709Img from "@/assets/truck-709.jpg";
import containerImg from "@/assets/container-truck.jpg";
import jcbImg from "@/assets/jcb-vehicle.jpg";
import trailerImg from "@/assets/trailer-truck.jpg";
import mediumImg from "@/assets/medium-truck.jpg";

const vehicles = [
  { name: "Pick Up", desc: "Compact pickup for small loads and quick local deliveries within city limits.", image: pickupSmallImg, capacity: "0.5-1 Ton" },
  { name: "Tata 407", desc: "Ideal for small to medium loads and local MIDC area movements.", image: pickupImg, capacity: "2-3 Ton" },
  { name: "709 / 909", desc: "Medium duty trucks for intercity transportation and regular scheduled routes.", image: truck709Img, capacity: "4-7 Ton" },
  { name: "1109", desc: "Heavy medium truck for larger intercity cargo across Maharashtra.", image: mediumImg, capacity: "7-9 Ton" },
  { name: "20ft Container", desc: "Containerized cargo transport for secure and weather-protected shipments.", image: containerImg, capacity: "7-10 Ton" },
  { name: "JCB & Heavy Equipment", desc: "Construction and heavy equipment on rent for industrial and infrastructure projects.", image: jcbImg, capacity: "Heavy Duty" },
  { name: "40ft Trailer", desc: "Large capacity trailers for bulk cargo and oversized shipments across states.", image: trailerImg, capacity: "20-25 Ton" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Fleet = () => (
  <div className="pt-20">
    <section className="bg-hero-gradient py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            Our <span className="text-secondary">Fleet</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Explore our diverse range of vehicles available for rent across Maharashtra, Goa and Gujarat.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-lg text-primary">{v.name}</h3>
                  <span className="text-xs font-heading font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full">{v.capacity}</span>
                </div>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Book a Vehicle <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Fleet;

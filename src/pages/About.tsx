import { motion } from "framer-motion";
import { Award, Target, Users, Briefcase } from "lucide-react";
import directorImg from "@/assets/director-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="bg-hero-gradient py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            About <span className="text-secondary">Us</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Driven by experience, powered by trust — delivering logistics excellence since 2025.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="font-heading text-3xl font-black text-primary mb-6">
            Our <span className="text-secondary">Story</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Shreeyansh Logitech Solutions was established in 2025 with a vision to provide reliable, efficient and affordable full truck load transportation services across Maharashtra, Goa and Gujarat.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With a strong network across the transport sector and a fleet of 100+ vehicles, we bring deep industry insights and hands-on expertise to every delivery.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to timely delivery, safe goods handling and prompt customer support has made us a trusted partner for leading companies in the region.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "18+ Years Experience" },
              { icon: Target, label: "100+ Vehicles" },
              { icon: Users, label: "500+ Clients Served" },
              { icon: Briefcase, label: "3 States Coverage" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-card rounded-xl p-6 shadow-sm text-center"
              >
                <item.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <span className="font-heading font-bold text-sm text-primary">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Director */}
    <section className="bg-section-light py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl font-black text-primary">
            Our <span className="text-secondary">Leadership</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden md:flex"
        >
          <img
            src={directorImg}
            alt="Ravindra S. Padwal - Director"
            className="w-full md:w-64 h-64 md:h-auto object-cover"
            loading="lazy"
            width={600}
            height={600}
          />
          <div className="p-8">
            <h3 className="font-heading text-2xl font-bold text-primary">Ravindra S. Padwal</h3>
            <span className="text-secondary font-heading font-semibold text-sm">Director</span>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Ravi is a seasoned logistics manager and operations expert with over 18 years of experience in the transportation industry with Tata Motors, Mahindra, Gabriel and more.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              Educated in PGDBM/MBS from Savitribai Phule Pune University in Logistics and Supply Chain Solutions. As a fleet owner with a strong network across the transport sector, he brings deep industry insights to Shreeyansh Logitech Solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;

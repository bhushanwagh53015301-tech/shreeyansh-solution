import { motion } from "framer-motion";
import { Shield, Star, Award, Clock } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Safe Handling Standards",
    desc: "Every load follows standard loading checks, secure lashing, and monitored movement from pickup to delivery.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    desc: "All drivers hold valid commercial licenses with background verification and regular safety training.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "Committed delivery windows with 99.2% on-time track record. Compensation for delays over commitment.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Star,
    title: "Industry Recognized",
    desc: "SARTAI registered. Featured in logistics industry reviews. 4.8/5 average client rating.",
    color: "bg-purple-100 text-purple-700",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function InsuranceSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
            Trust & <span className="text-secondary">Safety</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Practical safety processes and certified operations for reliable cargo movement.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-border bg-background p-6 hover:shadow-lg transition-shadow group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${cert.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

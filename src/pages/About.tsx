import { motion } from "framer-motion";
import { useEffect } from "react";
import { Award, Target, Users, Briefcase } from "lucide-react";
import directorImg from "@/assets/director-portrait.jpg";
import { setPageSeo } from "@/lib/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const timeline = [
  {
    year: "2025",
    title: "Company Founded",
    desc: "Shreeyansh Logitech Solutions started operations with a focused full truck load logistics model.",
  },
  {
    year: "2025-26",
    title: "Fleet Expansion",
    desc: "Expanded vehicle availability from pickup trucks to high-capacity trailer options for diverse cargo needs.",
  },
  {
    year: "2026",
    title: "Regional Route Strength",
    desc: "Strengthened regular transport lanes across Maharashtra, Goa, and selected areas in Gujarat.",
  },
  {
    year: "Today",
    title: "Trusted Logistics Partner",
    desc: "Continuing to deliver reliable scheduling, safe handling, and responsive support for business cargo movement.",
  },
];

const missionVision = [
  {
    title: "Our Mission",
    desc: "To provide dependable, transparent, and cost-effective full truck load transportation with strong delivery discipline and customer-first coordination.",
  },
  {
    title: "Our Vision",
    desc: "To become the most trusted regional FTL logistics partner for businesses across western India through operational excellence and long-term reliability.",
  },
];

const coreValues = [
  {
    title: "On-Time Commitment",
    desc: "Focused dispatch planning and active follow-up to reduce delays.",
  },
  {
    title: "Safe Cargo Movement",
    desc: "Practical loading discipline and careful route execution for goods safety.",
  },
  {
    title: "Clear Communication",
    desc: "Straightforward updates and responsive support from booking to delivery.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Built on trust, consistency, and practical commercial understanding.",
  },
];

const operatingApproach = [
  "Requirement analysis based on load type, distance, and urgency.",
  "Vehicle matching from pickup, medium-duty trucks, containers, and trailers.",
  "Route and schedule planning for timely and safe transportation.",
  "Real-time coordination support until successful delivery closure.",
];

const About = () => {
  useEffect(() => {
    setPageSeo(
      "About Shreeyansh Logitech Solutions | Truck Transport Company",
      "Learn about Shreeyansh Logitech Solutions, our leadership, and our full truck load transportation expertise across Maharashtra, Goa, and Gujarat.",
      {
        canonicalPath: "/about",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Shreeyansh Logitech Solutions",
          url: `${window.location.origin}/about`,
          description: "Company profile and leadership details for Shreeyansh Logitech Solutions.",
        },
      }
    );
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-hero-gradient py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-4">
              About <span className="text-secondary">Us</span>
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl text-lg">
              Driven by experience, powered by trust - delivering logistics excellence since 2025.
            </p>
          </motion.div>
        </div>
      </section>

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

      <section className="bg-card py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-black text-primary">
              Our <span className="text-secondary">Journey Timeline</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-secondary/30 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`relative pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
                >
                  <span className="absolute left-2 top-5 h-4 w-4 rounded-full border-2 border-secondary bg-card md:left-1/2 md:-translate-x-1/2" />
                  <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
                    <p className="font-heading text-secondary text-sm font-black tracking-wider mb-2">{item.year}</p>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-black text-primary">
              Mission & <span className="text-secondary">Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl bg-card p-8 shadow-sm border border-border"
              >
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-card">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl font-black text-primary mb-6">
              Core <span className="text-secondary">Values</span>
            </h2>
            <div className="space-y-4">
              {coreValues.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <h3 className="font-heading font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl font-black text-primary mb-6">
              How We <span className="text-secondary">Operate</span>
            </h2>
            <div className="rounded-2xl border border-border bg-background p-6 md:p-7">
              <ol className="space-y-4">
                {operatingApproach.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-black">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

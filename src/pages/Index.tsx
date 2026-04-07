import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Phone, BadgeCheck, Headset, Route, Star } from "lucide-react";
import heroImg from "@/assets/hero-trucks.jpg";
import fleetImg from "@/assets/fleet-trucks.jpg";
import containerTruckImg from "@/assets/container-truck.jpg";
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

const testimonials = [
  {
    name: "Amit Kulkarni",
    company: "Industrial Supplier, Pune",
    quote: "Quick availability and smooth coordination. Our dispatches are now much more reliable.",
  },
  {
    name: "Neha Patil",
    company: "FMCG Distributor, Kolhapur",
    quote: "From pickup trucks to bigger vehicles, every booking was handled professionally and on time.",
  },
  {
    name: "Rohit Shah",
    company: "Trader, Vapi",
    quote: "Good route support for Gujarat lanes. Pricing and service are both practical for regular loads.",
  },
];

const blogPosts = [
  {
    title: "How to Choose the Right Truck for Your Cargo",
    desc: "A practical guide to selecting vehicle type based on load, route, and transit timeline.",
  },
  {
    title: "FTL vs Shared Transport: What Saves More Cost?",
    desc: "Understand when full-truck-load booking gives better control, speed, and total value.",
  },
  {
    title: "5 Tips for Safer Intercity Goods Movement",
    desc: "Simple planning steps that reduce delay risks and improve delivery consistency.",
  },
];

const faqs = [
  {
    question: "Which areas do you serve?",
    answer: "We provide transport support in Maharashtra, Goa, and selected routes in Gujarat.",
  },
  {
    question: "Can I book urgent same-day vehicle support?",
    answer: "Yes, subject to fleet availability and route feasibility at booking time.",
  },
  {
    question: "Do you provide heavy vehicles like trailer and JCB support?",
    answer: "Yes, we offer multiple categories including trailers, containers, and heavy equipment support.",
  },
  {
    question: "How can I get a quote?",
    answer: "You can call directly or submit your requirement from the contact page for a quick response.",
  },
];

const heroBanners = [
  { image: heroImg, alt: "Truck fleet on highway" },
  { image: fleetImg, alt: "Logistics fleet yard" },
  { image: containerTruckImg, alt: "Container truck transport" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [blogIndex, setBlogIndex] = useState(0);

  useEffect(() => {
    setPageSeo(
      "Truck Rental in Pune | FTL Transport in Maharashtra, Goa, Gujarat",
      "Shreeyansh Logitech Solutions offers full truck load transportation from Pune across Maharashtra, Goa, and Gujarat with all major truck types."
    );
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroBanners.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBlogIndex((prev) => (prev + 1) % blogPosts.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[78vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroBanners.map((banner, i) => (
            <img
              key={banner.alt}
              src={banner.image}
              alt={banner.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
              width={1920}
              height={1080}
            />
          ))}
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
            <div className="flex items-center gap-2 mt-6">
              {heroBanners.map((banner, i) => (
                <button
                  key={banner.alt}
                  type="button"
                  aria-label={`Show banner ${i + 1}`}
                  onClick={() => setHeroIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === heroIndex ? "w-7 bg-secondary" : "w-2.5 bg-primary-foreground/55"}`}
                />
              ))}
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

      {/* Testimonials */}
      <section className="py-14 md:py-20 bg-section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
              Client <span className="text-secondary">Testimonials</span>
            </h2>
          </motion.div>

          <div className="md:hidden">
            <motion.div key={testimonials[testimonialIndex].name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3 text-secondary">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{testimonials[testimonialIndex].quote}"</p>
              <h3 className="font-heading font-bold text-primary">{testimonials[testimonialIndex].name}</h3>
              <p className="text-xs text-muted-foreground">{testimonials[testimonialIndex].company}</p>
            </motion.div>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((item, i) => (
                <span key={item.name} className={`h-2.5 w-2.5 rounded-full ${i === testimonialIndex ? "bg-secondary" : "bg-secondary/30"}`} />
              ))}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div key={item.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="rounded-2xl bg-card border border-border p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3 text-secondary">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{item.quote}"</p>
                <h3 className="font-heading font-bold text-primary">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-14 md:py-20 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
              Latest <span className="text-secondary">Blogs</span>
            </h2>
          </motion.div>

          <div className="md:hidden">
            <motion.article key={blogPosts[blogIndex].title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">{blogPosts[blogIndex].title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{blogPosts[blogIndex].desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-secondary text-sm font-semibold">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
            <div className="flex justify-center gap-2 mt-4">
              {blogPosts.map((item, i) => (
                <span key={item.title} className={`h-2.5 w-2.5 rounded-full ${i === blogIndex ? "bg-secondary" : "bg-secondary/30"}`} />
              ))}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article key={post.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-secondary text-sm font-semibold">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-section-light">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={faq.question} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-heading font-bold text-primary pr-6">
                  {faq.question}
                </summary>
                <p className="text-sm text-muted-foreground mt-3">{faq.answer}</p>
              </motion.details>
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

      {/* Quick CTA */}
      <section className="py-14 md:py-20 bg-card">
        <div className="container">
          <div className="rounded-2xl bg-hero-gradient px-6 md:px-10 py-10 md:py-14 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
              Need a Truck Quickly?
            </h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-7">
              Get a fast quote for local, intercity, and interstate full truckload transport.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link to="/contact" className="bg-secondary text-secondary-foreground px-6 md:px-8 py-3.5 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity">
                Get Instant Quote
              </Link>
              <a href="tel:9273234588" className="border-2 border-primary-foreground/35 text-primary-foreground px-6 md:px-8 py-3.5 rounded-lg font-heading font-bold text-sm hover:bg-primary-foreground/10 transition-colors">
                Call: 9273234588
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

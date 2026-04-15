import { motion } from "framer-motion";
import { useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { setPageSeo } from "@/lib/seo";

const pricingPlans = [
  {
    category: "Local Pickup",
    desc: "Intra-city transport within Pune",
    baseRate: "Starting from",
    price: "₹2,500",
    features: [
      "Up to 20km radius",
      "Same-day pickup available",
      "GPS tracking included",
      "Basic insurance",
      "24-hour support",
    ],
  },
  {
    category: "Local FTL",
    desc: "Within Pune and nearby areas",
    baseRate: "Starting from",
    price: "₹4,500",
    features: [
      "Up to 50km radius",
      "Morning/Evening slots",
      "GPS tracking included",
      "Transit insurance available",
      "24/7 support",
      "Flexible scheduling",
    ],
    highlighted: true,
  },
  {
    category: "Maharashtra FTL",
    desc: "Across all major cities",
    baseRate: "Starting from",
    price: "₹8,000",
    features: [
      "All Maharashtra coverage",
      "Scheduled routes available",
      "Real-time GPS tracking",
      "Full cargo insurance",
      "24/7 dedicated support",
      "Experienced drivers",
    ],
  },
  {
    category: "Interstate Routes",
    desc: "Goa & Gujarat transport",
    baseRate: "Starting from",
    price: "₹12,000",
    features: [
      "Goa & selected Gujarat routes",
      "Multi-day scheduling",
      "Complete GPS coverage",
      "Comprehensive insurance",
      "Highway-certified vehicles",
      "Professional drivers (5+ years)",
    ],
  },
];

const vehicleRates = [
  { type: "Pickup Van", capacity: "1-2 Tons", rate: "₹2,500 - ₹3,500" },
  { type: "Small Truck", capacity: "3-5 Tons", rate: "₹3,500 - ₹5,500" },
  { type: "Medium Truck", capacity: "5-10 Tons", rate: "₹5,500 - ₹8,500" },
  { type: "Large Truck", capacity: "10-20 Tons", rate: "₹8,500 - ₹12,500" },
  { type: "Trailer", capacity: "20-40 Tons", rate: "₹12,500 - ₹18,000" },
  { type: "Heavy Trailer", capacity: "40+ Tons", rate: "Custom quote" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Pricing = () => {
  useEffect(() => {
    setPageSeo(
      "Truck Rental Pricing | Transparent FTL Rates in Maharashtra, Goa, Gujarat",
      "Get transparent, competitive pricing for full truck load transportation. View our rates for local, intercity, and interstate routes.",
      {
        canonicalPath: "/pricing",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "PriceDatasheet",
          name: "Shreeyansh Logitech Solutions Pricing",
          url: `${window.location.origin}/pricing`,
        },
      }
    );
  }, []);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary-foreground/80 text-sm font-semibold mb-2">Transparent & Competitive</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4">
              Simple <span className="text-secondary">Pricing</span>
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl text-base sm:text-lg md:text-xl">
              No hidden charges. All-inclusive rates with insurance, GPS tracking, and professional drivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Route-based Pricing */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
              Route-Based <span className="text-secondary">Pricing</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Rates vary based on route, vehicle type, and cargo requirements. All prices include driver, fuel, and basic insurance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.category}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`rounded-2xl p-7 border transition-all ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-xl scale-105 md:scale-110"
                    : "border-border bg-background hover:border-primary hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    POPULAR
                  </div>
                )}
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{plan.category}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground mb-1">{plan.baseRate}</p>
                  <p className="font-heading text-3xl font-black text-secondary">{plan.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">per trip onwards</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle-Based Rates */}
      <section className="py-16 md:py-20 bg-section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
              Vehicle <span className="text-secondary">Rate Card</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Base rates for local FTL bookings. Route-specific rates may vary.
            </p>
          </motion.div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/10">
                    <th className="px-6 py-4 text-left font-heading font-bold text-primary">Vehicle Type</th>
                    <th className="px-6 py-4 text-left font-heading font-bold text-primary">Capacity</th>
                    <th className="px-6 py-4 text-left font-heading font-bold text-primary">Local Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleRates.map((vehicle, i) => (
                    <tr key={vehicle.type} className={i !== vehicleRates.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-6 py-4 font-semibold text-foreground">{vehicle.type}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{vehicle.capacity}</td>
                      <td className="px-6 py-4 font-semibold text-secondary">{vehicle.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
              Pricing <span className="text-secondary">FAQs</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Are there any hidden charges?",
                a: "No. All our quotes include driver allowance, fuel, GPS tracking, and basic insurance. Any additional services will be mentioned upfront.",
              },
              {
                q: "Can I get a discount for regular bookings?",
                a: "Yes. We offer volume discounts and monthly retainer options for businesses with regular transport needs.",
              },
              {
                q: "What's included in the quote?",
                a: "Driver, fuel, vehicle, GPS tracking, basic transit insurance, toll charges, and 24/7 support.",
              },
              {
                q: "Do you charge extra for weekend/holiday bookings?",
                a: "Weekend bookings have a 10-15% premium. Holiday rates are confirmed on per-request basis.",
              },
              {
                q: "Is comprehensive insurance available?",
                a: "Yes. Comprehensive coverage is available at an additional cost depending on cargo value and route.",
              },
            ].map((faq, i) => (
              <motion.details key={faq.q} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} className="group rounded-xl border border-border bg-background p-6">
                <summary className="cursor-pointer list-none font-heading font-bold text-primary pr-6">{faq.q}</summary>
                <p className="text-sm text-muted-foreground mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-section-light">
        <div className="container">
          <div className="rounded-2xl bg-hero-gradient px-6 md:px-10 py-12 md:py-16 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Contact us now for a customized quote based on your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold rounded-xl px-8 py-3.5 text-sm hover:opacity-90 transition-opacity"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9273234588"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-xl px-8 py-3.5 text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

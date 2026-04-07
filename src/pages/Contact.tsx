import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, CircleHelp } from "lucide-react";
import { useState, FormEvent } from "react";

const CONTACT_EMAIL = "shreeyanshlogitechsolutions@gmail.com";

const bookingSteps = [
  { step: "01", title: "Share Requirement", desc: "Provide load type, route, and preferred date." },
  { step: "02", title: "Receive Quote", desc: "Get a suitable vehicle option with commercial quote." },
  { step: "03", title: "Confirm & Dispatch", desc: "Truck is assigned and dispatch is coordinated quickly." },
];

const contactFaqs = [
  {
    question: "How quickly will I get a response after form submission?",
    answer: "Our team usually responds quickly during working hours with a follow-up call or email.",
  },
  {
    question: "Can I book directly on WhatsApp or call?",
    answer: "Yes, you can directly call or WhatsApp for urgent booking and route support.",
  },
  {
    question: "What details should I share for an accurate quote?",
    answer: "Share pickup/drop, load type, approximate weight, and preferred date/time.",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [cargoRouteDetails, setCargoRouteDetails] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Truck Transport Quote Request");
    const body = encodeURIComponent(
      `Name: ${fullName}
Phone: ${phone}
Vehicle Type: ${vehicleType}
Cargo & Route Details: ${cargoRouteDetails || "Not provided"}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-4">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl text-lg">
              Get in touch for quotes, bookings, or any inquiries about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps */}
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
              Quick <span className="text-secondary">Booking Flow</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {bookingSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-card rounded-2xl p-7"
              >
                <p className="font-heading text-secondary font-black text-sm tracking-widest mb-3">{item.step}</p>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-2xl font-black text-primary mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1">Office Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Shreeyansh Logitech Solutions<br />
                    SWARAJYA Residency, Shop No. 1,<br />
                    Chakan Road, Chakan MIDC Phase-5,<br />
                    Biradawadi, Pune-401501
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1">Phone</h4>
                  <a href="tel:9273234588" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                    +91 9273234588
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Email</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground text-sm hover:text-secondary transition-colors break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.8!2d73.86!3d18.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzM2LjAiTiA3M8KwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="font-heading text-2xl font-black text-primary mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Vehicle Type Needed</label>
                    <select
                      required
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    >
                      <option value="">Select vehicle type</option>
                      <option>Pick Up / Tata 407</option>
                      <option>709 / 909 / 1109</option>
                      <option>20ft Container</option>
                      <option>JCB</option>
                      <option>40ft Trailer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={cargoRouteDetails}
                      onChange={(e) => setCargoRouteDetails(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none"
                      placeholder="Describe your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-card">
        <div className="container">
          <div className="rounded-2xl bg-hero-gradient p-6 md:p-8 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Need Urgent Truck Booking Support?
            </h2>
            <p className="text-primary-foreground/85 mb-6">
              Call or WhatsApp us directly for faster coordination.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a
                href="tel:9273234588"
                className="bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Call: 9273234588
              </a>
              <a
                href="https://wa.me/919273234588?text=Hello%20Shreeyansh%20Logitech%20Solutions%2C%20I%20need%20truck%20booking%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-foreground/35 text-primary-foreground px-7 py-3.5 rounded-lg font-heading font-bold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
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
              Contact <span className="text-secondary">FAQ</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {contactFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-heading font-bold text-primary flex items-start gap-2">
                  <CircleHelp className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-3 pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

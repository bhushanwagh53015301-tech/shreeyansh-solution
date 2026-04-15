import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, CircleHelp } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setPageSeo } from "@/lib/seo";
import { vehicles } from "@/data/vehicles";
import { products } from "@/data/products";

const CONTACT_EMAIL = "shreeyanshlogitechsolutions@gmail.com";
const NAME_REGEX = /^[A-Za-z ]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

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

const vehicleTypeOptions = vehicles.map((vehicle) => vehicle.shortName);
const productTypeOptions = products.map((product) => product.name);
const selectableOptions = new Set([...vehicleTypeOptions, ...productTypeOptions]);

type FormErrors = {
  fullName?: string;
  phone?: string;
  vehicleType?: string;
  cargoRouteDetails?: string;
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [cargoRouteDetails, setCargoRouteDetails] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    setPageSeo(
      "Contact Shreeyansh Logitech Solutions | Truck Booking & Quote",
      "Contact Shreeyansh Logitech Solutions for truck rental quotes, FTL booking support, and route assistance across Maharashtra, Goa, and Gujarat.",
      {
        canonicalPath: "/contact",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Shreeyansh Logitech Solutions",
          url: `${window.location.origin}/contact`,
        },
      }
    );
  }, []);

  useEffect(() => {
    const selectedItem = searchParams.get("item");
    if (!selectedItem) return;
    if (!selectableOptions.has(selectedItem)) return;
    setVehicleType(selectedItem);
  }, [searchParams]);

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    } else if (fullName.trim().length < 2) {
      nextErrors.fullName = "Enter at least 2 characters.";
    } else if (!NAME_REGEX.test(fullName.trim())) {
      nextErrors.fullName = "Use only letters and spaces.";
    }

    if (!phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!PHONE_REGEX.test(phone.trim())) {
      nextErrors.phone = "Enter a valid Indian phone number.";
    }

    if (!vehicleType.trim()) {
      nextErrors.vehicleType = "Please select a vehicle type.";
    }

    if (!cargoRouteDetails.trim()) {
      nextErrors.cargoRouteDetails = "Message is required.";
    } else if (cargoRouteDetails.trim().length < 10) {
      nextErrors.cargoRouteDetails = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Truck Transport Quote Request",
          name: fullName,
          phone,
          vehicleType,
          message: cargoRouteDetails || "Not provided",
        }),
      });

      if (!response.ok) {
        throw new Error("Form service request failed");
      }

      const result = await response.json();
      if (result.success !== "true") {
        throw new Error("Form service did not accept the enquiry");
      }

      setSubmitted(true);
      setFullName("");
      setPhone("");
      setVehicleType("");
      setCargoRouteDetails("");
      setErrors({});
    } catch {
      setSubmitError("Submission failed. Please call or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl text-base sm:text-lg md:text-xl">
              Get in touch for quotes, bookings, or any inquiries about our services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary">
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

      <section className="py-10 md:py-16 lg:py-20">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-xl sm:text-2xl md:text-2xl font-black text-primary mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-primary mb-1">Office Address</h4>
                  <p className="text-muted-foreground text-sm">
                    SHREEYANSH LOGITECH SOLUTIONS
                    <br />
                    Swarajya Residency, Shop No. 1,
                    <br />
                    Chakan MIDC Phase-V, Biradawadi,
                    <br />
                    Taluka-Khed, Dist-Pune, Pin-401501
                  </p>
                </div>
              </div>
              <div className="flex gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-primary mb-1">Phone</h4>
                  <div className="flex flex-col">
                    <a href="tel:9273234588" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                      +91 9273234588
                    </a>
                    <a href="tel:7744897661" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                      +91 7744897661
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-primary mb-1">Email</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground text-sm hover:text-secondary transition-colors break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-primary mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="font-heading text-xl sm:text-2xl md:text-2xl font-black text-primary mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">OK</div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="min-w-0" className="min-w-0">
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base min-h-[44px] focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Your name"
                    />
                    {errors.fullName ? <p className="text-sm text-destructive mt-1.5">{errors.fullName}</p> : null}
                  </div>
                  <div className="min-w-0" className="min-w-0">
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        const nextPhone = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setPhone(nextPhone);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base min-h-[44px] focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="10-digit phone number"
                    />
                    {errors.phone ? <p className="text-sm text-destructive mt-1.5">{errors.phone}</p> : null}
                  </div>
                  <div className="min-w-0" className="min-w-0">
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Vehicle / Product Needed</label>
                    <select
                      required
                      value={vehicleType}
                      onChange={(e) => {
                        setVehicleType(e.target.value);
                        if (errors.vehicleType) setErrors((prev) => ({ ...prev, vehicleType: undefined }));
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base min-h-[44px] focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    >
                      <option value="">Select vehicle or product</option>
                      <optgroup label="Vehicles">
                        {vehicleTypeOptions.map((vehicleName) => (
                          <option key={vehicleName} value={vehicleName}>
                            {vehicleName}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Products">
                        {productTypeOptions.map((productName) => (
                          <option key={productName} value={productName}>
                            {productName}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.vehicleType ? <p className="text-sm text-destructive mt-1.5">{errors.vehicleType}</p> : null}
                  </div>
                  <div className="min-w-0" className="min-w-0">
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={cargoRouteDetails}
                      onChange={(e) => {
                        setCargoRouteDetails(e.target.value);
                        if (errors.cargoRouteDetails) setErrors((prev) => ({ ...prev, cargoRouteDetails: undefined }));
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base min-h-[44px] focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none"
                      placeholder="Describe your requirements..."
                    />
                    {errors.cargoRouteDetails ? <p className="text-sm text-destructive mt-1.5">{errors.cargoRouteDetails}</p> : null}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm min-h-[44px] flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {submitError ? (
                    <p className="text-sm text-destructive">{submitError}</p>
                  ) : null}
                  <div className="rounded-lg border border-border bg-background/60 p-3.5 min-w-0">
                    <p className="text-xs text-muted-foreground mb-2">If form does not send, use instant contact:</p>
                    <div className="flex flex-col sm:flex-row gap-2 min-w-0">
                      <a
                        href="tel:9273234588"
                        className="flex items-center justify-center rounded-md bg-secondary px-3 py-2 text-xs font-heading font-bold text-secondary-foreground hover:opacity-90 transition-opacity"
                      >
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/919273234588?text=Hello%20Shreeyansh%20Logitech%20Solutions%2C%20I%20would%20like%20to%20book%20a%20truck.%20Please%20share%20availability%20and%20quote."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ems-center justify-center rounded-md border border-border px-3 py-2 text-xs font-heading font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

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
                className="inline-flex w-full sm:w-auto items-center justify-center bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-heading font-bold text-sm text-center whitespace-normal break-words hover:opacity-90 transition-opacity"
              >
                Call: 9273234588 / 7744897661
              </a>
              <a
                href="https://wa.me/919273234588?text=Hello%20Shreeyansh%20Logitech%20Solutions%2C%20I%20would%20like%20to%20book%20a%20truck.%20Please%20share%20availability%20and%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center border-2 border-primary-foreground/35 text-primary-foreground px-7 py-3.5 rounded-lg font-heading font-bold text-sm text-center whitespace-normal break-words hover:bg-primary-foreground/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

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

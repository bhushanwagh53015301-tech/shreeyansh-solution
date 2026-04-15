import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate email submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-section-light">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-3">
            Stay Updated
          </h2>
          <p className="text-muted-foreground">
            Get tips on logistics, industry insights, and exclusive offers directly in your inbox.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 bg-card border border-border rounded-2xl p-3 shadow-sm"
        >
          <div className="flex-1 flex items-center gap-3 px-4">
            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground text-foreground"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || submitted}
            className="bg-primary text-primary-foreground font-semibold rounded-lg px-6 py-3 text-sm hover:bg-primary/90 transition-all disabled:opacity-75 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {submitted ? "✓ Subscribed" : isLoading ? "..." : <>Subscribe <ArrowRight className="h-4 w-4" /></>}
          </button>
        </motion.form>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xs text-muted-foreground text-center mt-4">
          We respect your privacy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}

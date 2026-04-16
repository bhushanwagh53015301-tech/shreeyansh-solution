import {
  Satellite,
  ShieldCheck,
  Clock,
  Phone,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Satellite,
    title: "GPS-tracked fleet",
    description:
      "Real-time tracking on every vehicle. Know exactly where your shipment is, at any moment.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Safe goods handling",
    description:
      "Every shipment is handled with strict loading and transit safety protocols to reduce risk from pickup to delivery.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Clock,
    title: "On-time guarantee",
    description:
      "Committed delivery schedules with proactive communication if anything changes en route.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Phone,
    title: "24/7 support",
    description:
      "Our operations team is available round the clock for urgent bookings and mid-route queries.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Truck,
    title: "100+ vehicle fleet",
    description:
      "Pickup vans to 40ft trailers — the right truck for every load size, available when you need it.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Users,
    title: "Experienced drivers",
    description:
      "Verified, licensed drivers with 5+ years of inter-state freight experience. Professional always.",
    color: "bg-secondary/10 text-secondary",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-section-light py-10 md:py-16 lg:py-20">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why choose us
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-primary leading-tight mb-4">
            Logistics you can count on,
            <br className="hidden sm:block" /> every single delivery
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From Pickup vans to 40ft trailers — we move goods across Maharashtra,
            Goa &amp; Gujarat with reliability built into every trip.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-6 md:p-7 
                           transition-all duration-300 hover:-translate-y-1 
                           hover:border-primary hover:shadow-lg relative overflow-hidden"
              >
                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-secondary 
                                scale-x-0 group-hover:scale-x-100 transition-transform 
                                duration-300 origin-left rounded-t-2xl" />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="font-heading font-bold text-base text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 md:mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary 
                       text-primary-foreground font-semibold rounded-xl px-8 py-3.5 
                       text-sm min-h-[44px] hover:bg-primary/90 transition-colors"
          >
            Get a free quote
          </Link>
          <a
            href="/#fleet"
            className="inline-flex items-center justify-center gap-2 border-2 
                       border-primary text-primary font-semibold rounded-xl px-8 py-3.5 
                       text-sm min-h-[44px] hover:bg-primary/5 transition-colors"
          >
            View our fleet
          </a>
        </div>

      </div>
    </section>
  );
}

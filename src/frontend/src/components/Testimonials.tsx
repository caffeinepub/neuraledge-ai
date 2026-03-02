import { Quote } from "lucide-react";
import { type Variants, motion } from "motion/react";

const testimonials = [
  {
    quote:
      "THUNDER completely transformed our logistics operations. Their AI automation system reduced our processing time by 65% within 90 days of deployment. The ROI was undeniable from day one.",
    name: "Sarah Chen",
    role: "Chief Operations Officer",
    company: "Apex Logistics Group",
    initials: "SC",
  },
  {
    quote:
      "The predictive analytics platform they built for us surfaced patterns our analysts had missed for years. We now anticipate market shifts 3 weeks earlier than our competitors. It's a genuine strategic edge.",
    name: "Marcus Okafor",
    role: "VP of Strategy",
    company: "Meridian Financial",
    initials: "MO",
  },
  {
    quote:
      "We evaluated six AI agencies before choosing THUNDER. The difference is their depth of domain expertise. They built a custom model tailored to our medical imaging data that outperforms all off-the-shelf solutions.",
    name: "Dr. Elena Vasquez",
    role: "Director of Innovation",
    company: "HelixMed Technologies",
    initials: "EV",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" } as never,
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.008 0) 0%, oklch(0.08 0.006 0) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden="true" />

      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.22 25 / 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <div className="section-line mx-auto mb-6" />
          <span
            className="text-sm font-semibold uppercase tracking-[0.25em] mb-4 block"
            style={{ color: "oklch(0.70 0.22 25)" }}
          >
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5"
          >
            Trusted by Teams{" "}
            <span className="gradient-text">Building Tomorrow</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Real results from organizations that chose precision over promise.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={cardVariants}
              className="relative glass-card rounded-2xl p-7 flex flex-col group hover:glow-cyan-border transition-all duration-400"
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{
                  background: "oklch(0.55 0.22 25 / 0.10)",
                  boxShadow: "0 0 0 1px oklch(0.55 0.22 25 / 0.18)",
                }}
                aria-hidden="true"
              >
                <Quote size={18} style={{ color: "oklch(0.70 0.22 25)" }} />
              </div>

              {/* Quote text */}
              <p className="text-foreground/75 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <footer className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.25), oklch(0.45 0.18 15 / 0.20))",
                    color: "oklch(0.80 0.20 25)",
                    border: "1px solid oklch(0.55 0.22 25 / 0.28)",
                  }}
                  aria-label={`${t.name} avatar`}
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-sm text-foreground block">
                    {t.name}
                  </cite>
                  <span className="text-foreground/50 text-xs">
                    {t.role}, {t.company}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { BarChart3, Bot, BrainCircuit, HeadphonesIcon } from "lucide-react";
import { type Variants, motion } from "motion/react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Eliminate repetitive workflows with intelligent process automation. Our AI agents handle complex tasks autonomously — freeing your team to focus on strategic decisions.",
    highlight: "Reduce operational costs by up to 70%",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Turn raw data into actionable foresight. We build ML models that predict customer behavior, market trends, and operational risks before they materialize.",
    highlight: "3× faster decision-making velocity",
  },
  {
    icon: BrainCircuit,
    title: "Custom AI Models",
    description:
      "Off-the-shelf AI won't cut it for complex domains. We develop bespoke models trained on your proprietary data — delivering competitive advantage through tailored intelligence.",
    highlight: "Fine-tuned to your exact domain",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 AI Support",
    description:
      "Deploy conversational AI that understands your products, policies, and customers. Intelligent support agents that resolve queries instantly, at any scale, around the clock.",
    highlight: "< 1s response, infinite scale",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as never,
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.006 0) 0%, oklch(0.09 0.007 0) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />

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
            What We Build
          </span>
          <h2
            id="services-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5"
          >
            AI Solutions That{" "}
            <span className="gradient-text">Actually Work</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            From automation to advanced analytics — every service is designed to
            deliver measurable business outcomes, not just technology for its
            own sake.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group relative p-6 lg:p-7 rounded-2xl glass-card transition-all duration-500 hover:glow-cyan-border cursor-default flex flex-col"
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.05) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.15), oklch(0.45 0.18 15 / 0.10))",
                    boxShadow: "0 0 0 1px oklch(0.55 0.22 25 / 0.22)",
                  }}
                >
                  <Icon size={22} style={{ color: "oklch(0.70 0.22 25)" }} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Highlight badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 mt-auto self-start"
                  style={{
                    background: "oklch(0.55 0.22 25 / 0.1)",
                    color: "oklch(0.70 0.22 25)",
                    border: "1px solid oklch(0.55 0.22 25 / 0.22)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.70 0.22 25)" }}
                    aria-hidden="true"
                  />
                  {service.highlight}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

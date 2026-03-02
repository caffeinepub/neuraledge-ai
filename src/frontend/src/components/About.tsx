import { CheckCircle2, Layers, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "200+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
  { value: "50+", label: "AI Experts On Team", icon: Users },
  { value: "12+", label: "Industries Served", icon: Layers },
];

const values = [
  "Precision-engineered AI architectures",
  "Ethical AI development practices",
  "Full-cycle delivery from concept to production",
  "Ongoing optimization and support",
  "Deep domain expertise across industries",
  "Transparent, outcome-driven partnerships",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.09 0.007 0) 0%, oklch(0.10 0.008 0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-line mb-6" />
            <span
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-4 block"
              style={{ color: "oklch(0.70 0.22 25)" }}
            >
              Our Mission
            </span>
            <h2
              id="about-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
            >
              We Don't Just Build AI.
              <br />
              We Build{" "}
              <span className="gradient-text">Competitive Advantage.</span>
            </h2>
            <p className="text-foreground/65 text-lg leading-relaxed mb-6">
              THUNDER was founded on a single conviction: AI should be a
              decisive business lever, not an experiment. We partner with
              forward-thinking organizations to architect, deploy, and optimize
              AI systems that deliver measurable, lasting impact.
            </p>
            <p className="text-foreground/55 leading-relaxed mb-8">
              Our multidisciplinary team — spanning ML researchers, data
              engineers, and domain strategists — operates at the frontier of
              applied AI. We don't do off-the-shelf. We do precision.
            </p>

            {/* Values list */}
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.55 0.22 25 / 0.15)",
                    }}
                    aria-hidden="true"
                  >
                    <CheckCircle2
                      size={12}
                      style={{ color: "oklch(0.70 0.22 25)" }}
                    />
                  </span>
                  <span className="text-foreground/70 text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Stats + decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative center orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full float-animation pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.55 0.22 25 / 0.12) 0%, oklch(0.45 0.18 15 / 0.06) 40%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5 relative z-10">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group hover:glow-cyan-border transition-all duration-400"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "oklch(0.55 0.22 25 / 0.12)",
                        boxShadow: "0 0 0 1px oklch(0.55 0.22 25 / 0.20)",
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: "oklch(0.70 0.22 25)" }}
                      />
                    </div>
                    <div
                      className="font-display font-extrabold text-3xl mb-1 stat-number"
                      style={{ color: "oklch(0.75 0.22 25)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-foreground/55 text-xs uppercase tracking-widest leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-dashed pointer-events-none"
              style={{
                borderColor: "oklch(0.55 0.22 25 / 0.12)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full border pointer-events-none"
              style={{
                borderColor: "oklch(0.55 0.22 25 / 0.08)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1600x800.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.08 0.018 252 / 0.7) 0%, oklch(0.08 0.018 252 / 0.85) 50%, oklch(0.1 0.015 250 / 0.95) 100%)",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 bg-grid opacity-30"
        aria-hidden="true"
      />

      {/* Decorative glowing orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] orb z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.18 200 / 0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] orb z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.22 215 / 0.1) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 glass-card"
          style={{
            color: "oklch(0.82 0.18 200)",
          }}
        >
          <Sparkles size={14} className="flex-shrink-0" />
          <span>Next-Generation AI Solutions for Enterprise</span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
          }}
        >
          The Future of
          <br />
          <span className="gradient-text glow-cyan-text">Intelligence</span>
          <br />
          is Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We architect AI systems that transform your business — from
          intelligent automation to predictive intelligence, delivered with
          precision and built to scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#contact")}
            className="font-semibold px-8 py-6 text-base glow-cyan transition-all duration-300 hover:scale-105 group"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.82 0.18 200), oklch(0.68 0.22 210))",
              color: "oklch(0.08 0.02 250)",
            }}
          >
            Start Your AI Journey
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("#services")}
            className="font-semibold px-8 py-6 text-base border-border/50 hover:border-primary/50 bg-transparent transition-all duration-300 hover:scale-105 group"
            style={{
              color: "oklch(0.95 0.01 230)",
            }}
          >
            <Play
              size={16}
              className="mr-2 transition-transform duration-300 group-hover:scale-110"
              style={{ color: "oklch(0.82 0.18 200)" }}
            />
            Explore Services
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "200+", label: "Projects" },
            { value: "98%", label: "Satisfaction" },
            { value: "50+", label: "AI Experts" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-bold text-2xl sm:text-3xl mb-1"
                style={{ color: "oklch(0.82 0.18 200)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-foreground/50 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-foreground/30 uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

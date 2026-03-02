import { Heart } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 overflow-hidden" aria-label="Site footer">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "oklch(0.08 0.018 252)",
        }}
        aria-hidden="true"
      />
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.82 0.18 200 / 0.2), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="NeuralEdge AI logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-xl tracking-tight">
                Neural<span className="gradient-text">Edge</span>
              </span>
            </div>
            <p className="text-foreground/40 text-sm max-w-xs">
              Precision AI for the organizations building tomorrow.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-foreground/45 hover:text-foreground/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div
            className="w-full max-w-sm h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.18 200 / 0.12), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Copyright */}
          <p className="text-foreground/35 text-xs text-center">
            © {year}. Built with{" "}
            <Heart
              size={11}
              className="inline-block mx-0.5 -mt-0.5"
              style={{ color: "oklch(0.75 0.22 15)" }}
              aria-label="love"
            />{" "}
            using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/60 underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

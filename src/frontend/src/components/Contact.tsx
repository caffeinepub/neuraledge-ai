import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Loader2, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@neuraledge.ai",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPending(true);
    try {
      if (!actor) throw new Error("Not connected");
      await actor.submitContact(
        form.name.trim(),
        form.email.trim(),
        form.message.trim(),
      );
      toast.success("Message sent successfully!", {
        description:
          "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      toast.error("Failed to send message", {
        description: "Please try again or reach out directly via email.",
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.1 0.015 250) 0%, oklch(0.09 0.016 252) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[300px] orb pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.82 0.18 200 / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="section-line mx-auto mb-6" />
          <span
            className="text-sm font-semibold uppercase tracking-[0.25em] mb-4 block"
            style={{ color: "oklch(0.82 0.18 200)" }}
          >
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5"
          >
            Ready to Build Your{" "}
            <span className="gradient-text">AI Advantage?</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Tell us about your challenge. Our team will respond with a tailored
            strategy within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 glass-card rounded-xl"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "oklch(0.82 0.18 200 / 0.12)",
                      boxShadow: "0 0 0 1px oklch(0.82 0.18 200 / 0.18)",
                    }}
                  >
                    <Icon size={18} style={{ color: "oklch(0.82 0.18 200)" }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/45 mb-1">
                      {info.label}
                    </div>
                    <div className="font-medium text-foreground/90">
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Decorative */}
            <div
              className="mt-4 p-5 rounded-xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.82 0.18 200 / 0.08), oklch(0.68 0.22 215 / 0.05))",
                border: "1px solid oklch(0.82 0.18 200 / 0.15)",
              }}
            >
              <p className="text-sm text-foreground/65 leading-relaxed">
                <span
                  className="font-semibold"
                  style={{ color: "oklch(0.82 0.18 200)" }}
                >
                  No commitment needed.
                </span>{" "}
                Our first consultation is always free. We'll assess your needs
                and tell you exactly what's possible.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-7 lg:p-8 space-y-5"
              noValidate
              aria-label="Contact form"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-foreground/80"
                >
                  Full Name{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Alex Johnson"
                  value={form.name}
                  onChange={handleChange("name")}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="bg-background/50 border-border/60 focus:border-primary/50 transition-colors"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-xs text-red-400 mt-1"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-foreground/80"
                >
                  Email Address{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="bg-background/50 border-border/60 focus:border-primary/50 transition-colors"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-xs text-red-400 mt-1"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground/80"
                >
                  Your Message{" "}
                  <span className="text-red-400" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="bg-background/50 border-border/60 focus:border-primary/50 transition-colors resize-none"
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-xs text-red-400 mt-1"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isPending}
                size="lg"
                className="w-full font-semibold text-base glow-cyan transition-all duration-300 hover:scale-[1.02] group"
                style={{
                  background: isPending
                    ? "oklch(0.55 0.1 200)"
                    : "linear-gradient(135deg, oklch(0.82 0.18 200), oklch(0.68 0.22 210))",
                  color: "oklch(0.08 0.02 250)",
                }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

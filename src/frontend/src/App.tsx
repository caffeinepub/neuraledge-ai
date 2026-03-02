import { Toaster } from "@/components/ui/sonner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-body overflow-x-hidden">
      {/* Global decorative orbs */}
      <div
        className="fixed top-0 left-1/4 w-96 h-96 orb pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 25 / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/3 right-0 w-80 h-80 orb pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 15 / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.10 0.008 0)",
            border: "1px solid oklch(0.55 0.22 25 / 0.4)",
            color: "oklch(0.95 0.01 0)",
          },
        }}
      />
    </div>
  );
}

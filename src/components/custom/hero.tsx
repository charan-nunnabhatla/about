import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { downloadResume } from "../../utils/downloadResume";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [initialDelayPassed, setInitialDelayPassed] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Show scroll indicator after 5 seconds on first landing
    const showTimeout = setTimeout(() => {
      setInitialDelayPassed(true);
      if (window.scrollY < 100) {
        setShowScrollIndicator(true);
      }
    }, 5000);

    const handleScroll = () => {
      // Only respond to scroll after initial delay has passed
      if (initialDelayPassed) {
        setShowScrollIndicator(window.scrollY < 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialDelayPassed]);

  const scrollToWork = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24"
    >
      {/* Subtle gradient orb in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="text-[var(--text-muted)] text-sm font-mono tracking-wide">
            Hi, I'm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--text-primary)] mb-6 tracking-tight"
        >
          Charan Nunnabhatla
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
        >
          <span className="gradient-text">I build AI that makes healthcare faster.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8 md:mb-10"
        >
          Full-stack engineer crafting HIPAA-compliant systems that serve{" "}
          <span className="text-[var(--text-primary)] font-medium">500+ users</span> and
          process{" "}
          <span className="text-[var(--text-primary)] font-medium">50,000+ patient records</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <button
            onClick={scrollToWork}
            className="btn-primary group justify-center"
          >
            View My Work
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={downloadResume}
            className="btn-secondary group justify-center"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-muted)]"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Currently @ VectorSoft
          </span>
          <span className="hidden sm:inline text-[var(--border-hover)]">·</span>
          <span>Hyderabad, India</span>
          <span className="hidden sm:inline text-[var(--border-hover)]">·</span>
          <span className="text-[var(--accent)]">Open to opportunities</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: mounted && showScrollIndicator ? 1 : 0,
          y: mounted && showScrollIndicator ? 0 : 10
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--border-hover)] flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[var(--text-muted)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

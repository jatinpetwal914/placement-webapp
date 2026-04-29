import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-primary)" }} />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="text-sm text-muted-foreground">Good evening</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back, <span className="gradient-text">Alex</span>
        </h1>
        <p className="text-muted-foreground max-w-lg mb-6">
          You're on a 7-day streak! Keep the momentum going — your consistency is paying off.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="gradient-btn px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"
        >
          Continue Learning <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;

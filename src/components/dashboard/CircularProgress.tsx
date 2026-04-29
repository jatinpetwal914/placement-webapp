import { motion } from "framer-motion";

interface CircularProgressProps {
  value: number;
  max: number;
  label: string;
  sublabel: string;
  gradient?: boolean;
}

const CircularProgress = ({ value, max, label, sublabel, gradient = true }: CircularProgressProps) => {
  const percentage = (value / max) * 100;
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="glass-card p-6 flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          {/* Track */}
          <circle cx="50" cy="50" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
          {/* Progress */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={gradient ? "url(#progressGradient)" : "hsl(var(--primary))"}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(263 70% 58%)" />
              <stop offset="100%" stopColor="hsl(24 94% 53%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{value}</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  );
};

export default CircularProgress;

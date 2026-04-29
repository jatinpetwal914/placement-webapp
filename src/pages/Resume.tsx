import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileText, Upload, Download, Sparkles, CheckCircle2, AlertTriangle, XCircle, History } from "lucide-react";

const atsScore = 74;
const keywordMatches = [
  { keyword: "React", found: true },
  { keyword: "TypeScript", found: true },
  { keyword: "REST API", found: true },
  { keyword: "CI/CD", found: false },
  { keyword: "Agile", found: false },
  { keyword: "System Design", found: true },
  { keyword: "Cloud Services", found: false },
];

const suggestions = [
  { type: "improvement", text: "Add quantifiable metrics to your project descriptions" },
  { type: "grammar", text: "Fix inconsistent tense in experience section" },
  { type: "missing", text: "Add a skills section highlighting CI/CD and Cloud experience" },
  { type: "improvement", text: "Use stronger action verbs: 'Architected' instead of 'Built'" },
];

const Resume = () => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Resume AI</h1>
            <p className="text-muted-foreground text-sm mt-1">AI-powered resume analysis and optimization</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-secondary px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary/80 transition-colors">
              <History className="h-4 w-4" /> Version History
            </button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-btn px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Optimized
            </motion.button>
          </div>
        </motion.div>

        {/* Upload Area */}
        {!uploaded ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            onClick={() => setUploaded(true)}
            className="glass-card p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary/30 transition-colors group">
            <Upload className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
            <p className="text-lg font-semibold">Upload Your Resume</p>
            <p className="text-sm text-muted-foreground mt-1">PDF or DOCX, max 5MB</p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* ATS Score */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 flex flex-col items-center">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">ATS Score</h3>
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="42" fill="none" stroke="url(#atsGrad)" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - atsScore / 100) }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                  <defs>
                    <linearGradient id="atsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(263 70% 58%)" />
                      <stop offset="100%" stopColor="hsl(24 94% 53%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{atsScore}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">for "SDE — Frontend"</p>
            </motion.div>

            {/* Keyword Matches */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">Keyword Match</h3>
              <div className="space-y-2">
                {keywordMatches.map((k) => (
                  <div key={k.keyword} className="flex items-center justify-between py-1.5">
                    <span className="text-sm">{k.keyword}</span>
                    {k.found ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <XCircle className="h-4 w-4 text-red-400" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Suggestions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">AI Suggestions</h3>
              <div className="space-y-3">
                {suggestions.map((s, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-secondary/30">
                    {s.type === "improvement" ? <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" /> :
                     s.type === "grammar" ? <AlertTriangle className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" /> :
                     <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />}
                    <p className="text-xs">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Resume;

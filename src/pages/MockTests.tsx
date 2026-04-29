import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ClipboardList, Clock, Users, Star, Play, BarChart3 } from "lucide-react";

const tests = [
  { title: "Full Mock — TCS NQT Pattern", duration: "90 min", questions: 60, difficulty: "Medium", participants: 2340, avgScore: 72 },
  { title: "Aptitude Speed Test", duration: "30 min", questions: 25, difficulty: "Easy", participants: 5120, avgScore: 81 },
  { title: "DSA Challenge — Hard", duration: "120 min", questions: 4, difficulty: "Hard", participants: 890, avgScore: 45 },
  { title: "Infosys SP Pattern", duration: "60 min", questions: 40, difficulty: "Medium", participants: 3200, avgScore: 68 },
  { title: "Verbal & Reasoning", duration: "45 min", questions: 30, difficulty: "Easy", participants: 4100, avgScore: 76 },
];

const pastResults = [
  { test: "TCS NQT Mock #3", score: 78, rank: 142, total: 2340, date: "Feb 18, 2026" },
  { test: "Aptitude Speed #7", score: 92, rank: 23, total: 5120, date: "Feb 15, 2026" },
  { test: "DSA Hard #2", score: 50, rank: 312, total: 890, date: "Feb 12, 2026" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const MockTests = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold">Mock Tests</h1>
        <p className="text-muted-foreground text-sm mt-1">Simulate real placement exams</p>
      </motion.div>

      {/* Available Tests */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests.map((t, i) => (
          <motion.div key={i} variants={item} className="glass-card p-5 hover:border-primary/30 transition-colors group cursor-pointer">
            <h3 className="font-semibold mb-2">{t.title}</h3>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t.duration}</span>
              <span className="flex items-center gap-1"><ClipboardList className="h-3 w-3" />{t.questions} Qs</span>
              <span className="flex items-center gap-1"><Users className="h-3 w-3" />{t.participants.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                t.difficulty === "Easy" ? "bg-green-500/10 text-green-400" :
                t.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                "bg-red-500/10 text-red-400"
              }`}>{t.difficulty}</span>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="gradient-btn px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
                <Play className="h-3 w-3" /> Start
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Past Results */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
        <h2 className="text-lg font-semibold mb-4">Past Results</h2>
        <div className="space-y-3">
          {pastResults.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
              <div>
                <p className="text-sm font-medium">{r.test}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-bold gradient-text">{r.score}%</p>
                  <p className="text-xs text-muted-foreground">Rank {r.rank}/{r.total}</p>
                </div>
                <BarChart3 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </DashboardLayout>
);

export default MockTests;

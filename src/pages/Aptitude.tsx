import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Brain, CheckCircle2, Clock, Target, TrendingUp, BookOpen } from "lucide-react";

const topics = [
  { name: "Quantitative Aptitude", progress: 72, total: 150, icon: Target, color: "text-purple-400" },
  { name: "Logical Reasoning", progress: 58, total: 120, icon: Brain, color: "text-blue-400" },
  { name: "Verbal Ability", progress: 45, total: 100, icon: BookOpen, color: "text-green-400" },
  { name: "Data Interpretation", progress: 30, total: 80, icon: TrendingUp, color: "text-orange-400" },
];

const recentQuestions = [
  { question: "Probability of drawing 2 red balls", topic: "Probability", difficulty: "Medium", status: "correct" },
  { question: "Time & Work — Pipes and Cisterns", topic: "Time & Work", difficulty: "Hard", status: "incorrect" },
  { question: "Seating Arrangement — Circular", topic: "Logical Reasoning", difficulty: "Medium", status: "correct" },
  { question: "Percentage Change Problem", topic: "Percentages", difficulty: "Easy", status: "correct" },
  { question: "Syllogism with 4 statements", topic: "Logical Reasoning", difficulty: "Hard", status: "skipped" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Aptitude = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Aptitude Practice</h1>
          <p className="text-muted-foreground text-sm mt-1">Master quantitative, logical, and verbal skills</p>
        </div>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-btn px-5 py-2.5 rounded-lg text-sm flex items-center gap-2">
          <Brain className="h-4 w-4" /> Start Practice
        </motion.button>
      </motion.div>

      {/* Topic Cards */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topics.map((t) => (
          <motion.div key={t.name} variants={item} className="glass-card p-5 cursor-pointer hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary">
                <t.icon className={`h-5 w-5 ${t.color}`} />
              </div>
              <h3 className="text-sm font-semibold">{t.name}</h3>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(t.progress / t.total) * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
            <p className="text-xs text-muted-foreground">{t.progress}/{t.total} problems solved</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Questions */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Questions</h2>
        <div className="space-y-3">
          {recentQuestions.map((q, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="flex-1">
                <p className="text-sm font-medium">{q.question}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{q.topic}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  q.difficulty === "Easy" ? "bg-green-500/10 text-green-400" :
                  q.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                  "bg-red-500/10 text-red-400"
                }`}>{q.difficulty}</span>
                <CheckCircle2 className={`h-4 w-4 ${
                  q.status === "correct" ? "text-green-400" :
                  q.status === "incorrect" ? "text-red-400" : "text-muted-foreground"
                }`} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </DashboardLayout>
);

export default Aptitude;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Mic, Play, User, Bot, Star, Target, TrendingUp, MessageSquare } from "lucide-react";

const roles = ["SDE — Frontend", "SDE — Backend", "Data Analyst", "Core Engineering", "MBA — Marketing"];
const difficulties = ["Easy", "Medium", "Hard"];

const sampleQuestions = [
  { type: "Technical", question: "Explain the difference between TCP and UDP. When would you use each?", aiAnswer: "TCP is connection-oriented with guaranteed delivery; UDP is connectionless with lower latency..." },
  { type: "HR", question: "Tell me about a time you faced a challenge in a team project.", aiAnswer: "Use STAR method: Situation, Task, Action, Result..." },
  { type: "Behavioral", question: "How do you prioritize tasks when you have multiple deadlines?", aiAnswer: "Eisenhower matrix approach: urgent vs important..." },
];

const pastInterviews = [
  { role: "SDE — Frontend", score: 82, date: "Feb 20, 2026", strengths: ["Technical depth", "Communication"], weaknesses: ["Time management"] },
  { role: "Data Analyst", score: 71, date: "Feb 17, 2026", strengths: ["SQL knowledge"], weaknesses: ["Case study approach", "Business sense"] },
];

const Interview = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold">AI Interview Simulator</h1>
          <p className="text-muted-foreground text-sm mt-1">Practice with AI-generated interview scenarios</p>
        </motion.div>

        {!started ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Setup */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6 space-y-5">
              <h2 className="text-lg font-semibold">Start New Interview</h2>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Select Role</label>
                <div className="flex flex-wrap gap-2">
                  {roles.map(r => (
                    <button key={r} onClick={() => setSelectedRole(r)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${selectedRole === r ? "gradient-btn" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Difficulty</label>
                <div className="flex gap-2">
                  {difficulties.map(d => (
                    <button key={d} onClick={() => setSelectedDifficulty(d)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${selectedDifficulty === d ? "gradient-btn" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => setStarted(true)}
                disabled={!selectedRole || !selectedDifficulty}
                className="gradient-btn px-6 py-3 rounded-lg text-sm flex items-center gap-2 w-full justify-center disabled:opacity-50">
                <Play className="h-4 w-4" /> Start Interview
              </motion.button>
            </motion.div>

            {/* Past Results */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4">Past Interviews</h2>
              <div className="space-y-4">
                {pastInterviews.map((pi, i) => (
                  <div key={i} className="p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">{pi.role}</span>
                      <span className="text-lg font-bold gradient-text">{pi.score}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{pi.date}</p>
                    <div className="flex flex-wrap gap-1">
                      {pi.strengths.map(s => <span key={s} className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded">{s}</span>)}
                      {pi.weaknesses.map(w => <span key={w} className="text-xs bg-red-500/10 text-red-400 px-2 py-0.5 rounded">{w}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Question {currentQ + 1} of {sampleQuestions.length}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{sampleQuestions[currentQ].type}</span>
              </div>
              <button onClick={() => { setStarted(false); setCurrentQ(0); setAnswer(""); }} className="text-xs text-muted-foreground hover:text-foreground">End Interview</button>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30">
              <p className="text-sm font-medium">{sampleQuestions[currentQ].question}</p>
            </div>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-32 bg-background border border-border rounded-lg p-4 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <div className="flex gap-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-btn px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Submit Answer
              </motion.button>
              <button onClick={() => { setCurrentQ(Math.min(currentQ + 1, sampleQuestions.length - 1)); setAnswer(""); }}
                className="bg-secondary px-4 py-2 rounded-lg text-sm hover:bg-secondary/80 transition-colors">
                Skip →
              </button>
              <button className="bg-secondary px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary/80 transition-colors">
                <Mic className="h-4 w-4" /> Voice Answer
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Interview;

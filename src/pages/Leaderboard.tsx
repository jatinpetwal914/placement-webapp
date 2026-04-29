import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Trophy, Medal, Star, Zap, Award, Crown, Shield } from "lucide-react";

const ranks = [
  { name: "Jatin Sharma", xp: 12450, rank: 1, level: "Elite", badge: Crown, college: "IIT Delhi" },
  { name: "Priya Patel", xp: 11200, rank: 2, level: "Expert", badge: Award, college: "NIT Trichy" },
  { name: "Rahul Singh", xp: 10800, rank: 3, level: "Expert", badge: Award, college: "BITS Pilani" },
  { name: "Ananya Gupta", xp: 9500, rank: 4, level: "Advanced", badge: Shield, college: "VIT Vellore" },
  { name: "Vikram Reddy", xp: 8900, rank: 5, level: "Advanced", badge: Shield, college: "IIIT Hyderabad" },
  { name: "Sneha Iyer", xp: 8200, rank: 6, level: "Intermediate", badge: Star, college: "DTU Delhi" },
  { name: "Arjun Kumar", xp: 7600, rank: 7, level: "Intermediate", badge: Star, college: "NSUT Delhi" },
  { name: "Meera Nair", xp: 7100, rank: 8, level: "Intermediate", badge: Star, college: "PEC Chandigarh" },
];

const badges = [
  { name: "First Blood", desc: "Solve your first problem", icon: Zap, unlocked: true },
  { name: "Streak Master", desc: "7-day streak", icon: Star, unlocked: true },
  { name: "Century", desc: "100 problems solved", icon: Medal, unlocked: true },
  { name: "Mock King", desc: "Score 90%+ in 5 mocks", icon: Crown, unlocked: false },
  { name: "All-Rounder", desc: "Complete all sections", icon: Award, unlocked: false },
  { name: "Speed Demon", desc: "Solve 10 problems in 30min", icon: Zap, unlocked: false },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

const Leaderboard = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Compete with peers, earn XP & badges</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Leaderboard Table */}
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Global Rankings</h2>
            <div className="flex gap-2">
              <button className="gradient-btn px-3 py-1 rounded-lg text-xs">Global</button>
              <button className="bg-secondary px-3 py-1 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors">College</button>
            </div>
          </div>
          <div className="space-y-2">
            {ranks.map((r) => (
              <motion.div key={r.rank} variants={item}
                className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${r.rank <= 3 ? "bg-primary/5 border border-primary/10" : "bg-secondary/20 hover:bg-secondary/40"}`}>
                <span className={`text-lg font-bold w-8 text-center ${r.rank === 1 ? "text-yellow-400" : r.rank === 2 ? "text-gray-300" : r.rank === 3 ? "text-amber-600" : "text-muted-foreground"}`}>
                  {r.rank}
                </span>
                <div className="w-8 h-8 rounded-full gradient-btn flex items-center justify-center text-xs font-bold">
                  {r.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.college}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <r.badge className="h-3.5 w-3.5 text-primary" />
                  <span>{r.level}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold gradient-text">{r.xp.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">XP</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Badges</h2>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((b) => (
              <div key={b.name} className={`p-3 rounded-lg text-center ${b.unlocked ? "bg-primary/10 border border-primary/20" : "bg-secondary/30 opacity-50"}`}>
                <b.icon className={`h-6 w-6 mx-auto mb-1 ${b.unlocked ? "text-primary" : "text-muted-foreground"}`} />
                <p className="text-xs font-semibold">{b.name}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </DashboardLayout>
);

export default Leaderboard;

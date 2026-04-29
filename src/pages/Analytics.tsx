import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { BarChart3, TrendingUp, Target, Brain, Code2, ClipboardList } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const radarData = [
  { subject: "Arrays", score: 85 },
  { subject: "Strings", score: 72 },
  { subject: "Trees", score: 60 },
  { subject: "Graphs", score: 45 },
  { subject: "DP", score: 55 },
  { subject: "Aptitude", score: 78 },
  { subject: "Verbal", score: 68 },
  { subject: "Reasoning", score: 74 },
];

const weeklyData = [
  { day: "Mon", problems: 12, hours: 3.5 },
  { day: "Tue", problems: 8, hours: 2 },
  { day: "Wed", problems: 15, hours: 4 },
  { day: "Thu", problems: 6, hours: 1.5 },
  { day: "Fri", problems: 20, hours: 5 },
  { day: "Sat", problems: 18, hours: 4.5 },
  { day: "Sun", problems: 10, hours: 3 },
];

const heatmapData = Array.from({ length: 52 * 7 }, (_, i) => ({
  week: Math.floor(i / 7),
  day: i % 7,
  value: Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0,
}));

const stats = [
  { label: "Problems This Week", value: "89", change: "+12%", icon: Code2 },
  { label: "Study Hours", value: "24.5h", change: "+8%", icon: Brain },
  { label: "Mock Test Avg", value: "76%", change: "+5%", icon: ClipboardList },
  { label: "Placement Probability", value: "82%", change: "+3%", icon: Target },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Analytics = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground text-sm mt-1">Track your preparation progress</p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <motion.div key={s.label} variants={item} className="glass-card p-5">
            <div className="flex items-center justify-between mb-2">
              <s.icon className="h-5 w-5 text-primary" />
              <span className="text-xs text-green-400">{s.change}</span>
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Topic Mastery</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(0 0% 20%)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} />
              <Radar dataKey="score" stroke="hsl(263 70% 58%)" fill="hsl(263 70% 58%)" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Weekly Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 15%)" />
              <XAxis dataKey="day" tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }} />
              <Tooltip contentStyle={{ background: "hsl(0 0% 8%)", border: "1px solid hsl(0 0% 20%)", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="problems" stroke="hsl(263 70% 58%)" fill="hsl(263 70% 58%)" fillOpacity={0.15} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Activity Heatmap */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
        <h2 className="text-lg font-semibold mb-4">Activity Heatmap</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-[2px] min-w-[700px]">
            {Array.from({ length: 52 }, (_, week) => (
              <div key={week} className="flex flex-col gap-[2px]">
                {Array.from({ length: 7 }, (_, day) => {
                  const cell = heatmapData[week * 7 + day];
                  const opacity = cell.value === 0 ? "bg-secondary/30" :
                    cell.value === 1 ? "bg-primary/20" :
                    cell.value === 2 ? "bg-primary/40" :
                    cell.value === 3 ? "bg-primary/60" : "bg-primary/80";
                  return <div key={day} className={`w-3 h-3 rounded-sm ${opacity}`} />;
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </DashboardLayout>
);

export default Analytics;

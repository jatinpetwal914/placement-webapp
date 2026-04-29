import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock, Code2, Brain, ClipboardList } from "lucide-react";

const activities = [
  { icon: Code2, label: "Solved 'Two Sum' on Coding", time: "2 hours ago", status: "success" },
  { icon: Brain, label: "Completed Aptitude Quiz #14", time: "5 hours ago", status: "success" },
  { icon: ClipboardList, label: "Mock Test: Data Structures", time: "Yesterday", status: "fail" },
  { icon: Code2, label: "Solved 'Valid Parentheses'", time: "Yesterday", status: "success" },
  { icon: Brain, label: "Logical Reasoning Set 7", time: "2 days ago", status: "success" },
];

const statusIcon = {
  success: <CheckCircle2 className="h-4 w-4 text-emerald-400" />,
  fail: <XCircle className="h-4 w-4 text-red-400" />,
  pending: <Clock className="h-4 w-4 text-yellow-400" />,
};

const RecentActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card p-6"
    >
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="p-2 rounded-lg bg-secondary">
              <a.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{a.label}</p>
              <p className="text-xs text-muted-foreground">{a.time}</p>
            </div>
            {statusIcon[a.status as keyof typeof statusIcon]}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;

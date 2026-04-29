import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";

const exams = [
  { title: "DSA Mock Test", date: "Feb 24", time: "10:00 AM", participants: 128, difficulty: "Hard" },
  { title: "Aptitude Round 3", date: "Feb 26", time: "2:00 PM", participants: 256, difficulty: "Medium" },
  { title: "Full Mock Interview", date: "Mar 1", time: "11:00 AM", participants: 64, difficulty: "Hard" },
];

const difficultyColor: Record<string, string> = {
  Easy: "text-emerald-400 bg-emerald-400/10",
  Medium: "text-yellow-400 bg-yellow-400/10",
  Hard: "text-red-400 bg-red-400/10",
};

const UpcomingExams = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-6"
    >
      <h2 className="text-lg font-semibold mb-4">Upcoming Exams</h2>
      <div className="space-y-3">
        {exams.map((exam, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-sm">{exam.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColor[exam.difficulty]}`}>
                {exam.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{exam.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{exam.time}</span>
              <span className="flex items-center gap-1"><Users className="h-3 w-3" />{exam.participants}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpcomingExams;

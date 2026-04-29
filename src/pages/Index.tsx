import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HeroSection from "@/components/dashboard/HeroSection";
import CircularProgress from "@/components/dashboard/CircularProgress";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingExams from "@/components/dashboard/UpcomingExams";

const stats = [
  { value: 78, max: 100, label: "Success Rate", sublabel: "Last 30 days" },
  { value: 142, max: 300, label: "Problems Solved", sublabel: "Out of 300" },
  { value: 85, max: 100, label: "Avg Score", sublabel: "Mock tests" },
  { value: 7, max: 30, label: "Daily Streak", sublabel: "Days in a row" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Index = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Hero */}
        <HeroSection />

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={item}>
              <CircularProgress {...s} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <RecentActivity />
          <UpcomingExams />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

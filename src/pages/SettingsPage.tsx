import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Settings, User, Target, Bell, Shield, Moon, Sun, Save } from "lucide-react";

const skills = ["JavaScript", "Python", "C++", "Java", "React", "Node.js", "SQL", "Data Structures", "System Design", "Machine Learning"];
const roles = ["SDE — Frontend", "SDE — Backend", "SDE — Full Stack", "Data Analyst", "Data Scientist", "DevOps Engineer", "Product Manager"];

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState(["JavaScript", "React", "Data Structures"]);
  const [selectedRole, setSelectedRole] = useState("SDE — Frontend");
  const [notifications, setNotifications] = useState({ email: true, push: true, reminders: true, leaderboard: false });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your preferences</p>
        </motion.div>

        {/* Profile */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <User className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Profile</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
              <input defaultValue="Jatin Sharma" className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <input defaultValue="jatin@example.com" className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">College</label>
              <input defaultValue="IIT Delhi" className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Graduation Year</label>
              <input defaultValue="2026" className="w-full bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>
        </motion.div>

        {/* Target Role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Target Role</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {roles.map(r => (
              <button key={r} onClick={() => setSelectedRole(r)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${selectedRole === r ? "gradient-btn" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                {r}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => (
              <button key={s} onClick={() => toggleSkill(s)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${selectedSkills.includes(s) ? "gradient-btn" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                {s}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-3">
            {Object.entries(notifications).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <button onClick={() => setNotifications(prev => ({ ...prev, [key]: !val }))}
                  className={`w-10 h-5 rounded-full transition-colors relative ${val ? "bg-primary" : "bg-secondary"}`}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground transition-transform ${val ? "left-5" : "left-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Appearance & Privacy */}
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              {darkMode ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
              <h2 className="text-lg font-semibold">Appearance</h2>
            </div>
            <button onClick={() => setDarkMode(!darkMode)}
              className={`w-full p-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors ${darkMode ? "gradient-btn" : "bg-secondary hover:bg-secondary/80"}`}>
              {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              {darkMode ? "Dark Mode" : "Light Mode"}
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Privacy</h2>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Profile visible to recruiters</p>
              <p>• Data used for recommendations</p>
              <button className="text-primary text-xs hover:underline mt-2">Manage Data →</button>
            </div>
          </motion.div>
        </div>

        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="gradient-btn w-full py-3 rounded-lg text-sm flex items-center justify-center gap-2">
          <Save className="h-4 w-4" /> Save Settings
        </motion.button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

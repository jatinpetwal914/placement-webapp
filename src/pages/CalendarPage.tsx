import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CalendarDays, Plus, Bell, Clock, Building2 } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const events = [
  { date: 24, title: "TCS NQT Mock Test", time: "10:00 AM", type: "mock", company: "TCS" },
  { date: 25, title: "Amazon SDE Application", time: "11:59 PM", type: "deadline", company: "Amazon" },
  { date: 26, title: "System Design Workshop", time: "3:00 PM", type: "event" },
  { date: 28, title: "Infosys SP Drive", time: "9:00 AM", type: "drive", company: "Infosys" },
];

const upcomingReminders = [
  { title: "Submit Amazon Application", daysLeft: 3, priority: "high" },
  { title: "Complete DSA Module 5", daysLeft: 5, priority: "medium" },
  { title: "Mock Interview Practice", daysLeft: 1, priority: "high" },
  { title: "Update Resume Skills", daysLeft: 7, priority: "low" },
];

const CalendarPage = () => {
  const [currentMonth] = useState(new Date(2026, 1)); // Feb 2026
  const daysInMonth = new Date(2026, 2, 0).getDate();
  const firstDay = new Date(2026, 1, 1).getDay();

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Calendar</h1>
            <p className="text-muted-foreground text-sm mt-1">Track your placement schedule</p>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-btn px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add Event
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 glass-card p-6">
            <h2 className="text-lg font-semibold mb-4">February 2026</h2>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map(d => <div key={d} className="text-xs text-muted-foreground text-center py-2">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }, (_, i) => <div key={`empty-${i}`} />)}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const dayEvents = events.filter(e => e.date === day);
                const isToday = day === 22;
                return (
                  <div key={day} className={`relative p-2 rounded-lg text-center cursor-pointer transition-colors min-h-[60px] ${
                    isToday ? "bg-primary/15 border border-primary/30" :
                    dayEvents.length ? "bg-secondary/30 hover:bg-secondary/50" : "hover:bg-secondary/20"
                  }`}>
                    <span className={`text-sm ${isToday ? "font-bold text-primary" : ""}`}>{day}</span>
                    {dayEvents.map((e, j) => (
                      <div key={j} className={`text-[9px] mt-1 px-1 py-0.5 rounded truncate ${
                        e.type === "mock" ? "bg-purple-500/20 text-purple-300" :
                        e.type === "deadline" ? "bg-red-500/20 text-red-300" :
                        e.type === "drive" ? "bg-green-500/20 text-green-300" :
                        "bg-blue-500/20 text-blue-300"
                      }`}>{e.title}</div>
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Reminders */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming</h2>
            <div className="space-y-3">
              {upcomingReminders.map((r, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/30 flex items-start gap-3">
                  <Bell className={`h-4 w-4 mt-0.5 shrink-0 ${
                    r.priority === "high" ? "text-red-400" : r.priority === "medium" ? "text-yellow-400" : "text-muted-foreground"
                  }`} />
                  <div>
                    <p className="text-sm font-medium">{r.title}</p>
                    <p className="text-xs text-muted-foreground">{r.daysLeft} day{r.daysLeft > 1 ? "s" : ""} left</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-secondary/50 p-3 rounded-lg text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2">
              <CalendarDays className="h-3.5 w-3.5" /> Sync with Google Calendar
            </button>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;

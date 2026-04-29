import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Building2, Search, TrendingUp, FileText, ClipboardList, Users, Star } from "lucide-react";

const companies = [
  { name: "Google", readiness: 68, pattern: "DSA Heavy + System Design", roles: ["SDE I", "SDE II"], logo: "G" },
  { name: "Amazon", readiness: 74, pattern: "Leadership Principles + Coding", roles: ["SDE", "Data Engineer"], logo: "A" },
  { name: "Microsoft", readiness: 81, pattern: "DSA + OS/DBMS Fundamentals", roles: ["SDE", "PM"], logo: "M" },
  { name: "TCS", readiness: 92, pattern: "Aptitude + Coding + Communication", roles: ["Digital", "Ninja"], logo: "T" },
  { name: "Infosys", readiness: 88, pattern: "InfyTQ + Aptitude + Coding", roles: ["SE", "DSE", "PP"], logo: "I" },
  { name: "Wipro", readiness: 85, pattern: "Aptitude + Essay + Technical", roles: ["ELITE", "Turbo"], logo: "W" },
];

const Company = () => {
  const [selected, setSelected] = useState<typeof companies[0] | null>(null);
  const [search, setSearch] = useState("");

  const filtered = companies.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold">Company Mode</h1>
          <p className="text-muted-foreground text-sm mt-1">Prepare for specific company placement drives</p>
        </motion.div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies..."
            className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Company Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {filtered.map((c) => (
              <motion.div key={c.name} whileHover={{ scale: 1.01 }} onClick={() => setSelected(c)}
                className={`glass-card p-5 cursor-pointer transition-colors ${selected?.name === c.name ? "border-primary/40" : "hover:border-primary/20"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center text-lg font-bold">{c.logo}</div>
                  <div>
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-xs text-muted-foreground">{c.roles.join(" • ")}</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-2">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${c.readiness}%` }} transition={{ duration: 1 }}
                    className="h-full rounded-full" style={{ background: "var(--gradient-primary)" }} />
                </div>
                <p className="text-xs text-muted-foreground">{c.readiness}% Readiness</p>
              </motion.div>
            ))}
          </div>

          {/* Company Details */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
            {selected ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg gradient-btn flex items-center justify-center text-xl font-bold">{selected.logo}</div>
                  <div>
                    <h2 className="text-lg font-bold">{selected.name}</h2>
                    <p className="text-xs text-muted-foreground">{selected.pattern}</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  <button className="w-full bg-secondary/50 p-3 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary transition-colors">
                    <TrendingUp className="h-4 w-4 text-primary" /> Previous Year Patterns
                  </button>
                  <button className="w-full bg-secondary/50 p-3 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary transition-colors">
                    <FileText className="h-4 w-4 text-primary" /> Interview Experiences
                  </button>
                  <button className="w-full bg-secondary/50 p-3 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary transition-colors">
                    <ClipboardList className="h-4 w-4 text-primary" /> Custom Mock Test
                  </button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="gradient-btn w-full p-3 rounded-lg text-sm flex items-center gap-2 justify-center">
                    <Star className="h-4 w-4" /> Start {selected.name} Prep
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Building2 className="h-12 w-12 mb-3 opacity-30" />
                <p className="text-sm">Select a company to view details</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Company;

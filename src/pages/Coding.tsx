import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Code2, Play, Send, Lightbulb, Eye, Sparkles, Filter } from "lucide-react";

const languages = ["JavaScript", "Python", "C++", "Java"];
const difficulties = ["Easy", "Medium", "Hard"];
const companies = ["Google", "Amazon", "Microsoft", "Meta", "Apple"];

const problems = [
  { title: "Two Sum", difficulty: "Easy", company: "Google", acceptance: "82%", tags: ["Array", "Hash Map"] },
  { title: "Longest Substring Without Repeating", difficulty: "Medium", company: "Amazon", acceptance: "64%", tags: ["Sliding Window", "String"] },
  { title: "Median of Two Sorted Arrays", difficulty: "Hard", company: "Microsoft", acceptance: "38%", tags: ["Binary Search", "Array"] },
  { title: "Valid Parentheses", difficulty: "Easy", company: "Meta", acceptance: "91%", tags: ["Stack", "String"] },
  { title: "Merge K Sorted Lists", difficulty: "Hard", company: "Apple", acceptance: "42%", tags: ["Heap", "Linked List"] },
];

const Coding = () => {
  const [selectedLang, setSelectedLang] = useState("JavaScript");
  const [code, setCode] = useState(`// Write your solution here\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}`);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Coding Practice</h1>
            <p className="text-muted-foreground text-sm mt-1">Solve problems, improve your DSA skills</p>
          </div>
          <div className="flex gap-2">
            <select className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground">
              <option>All Difficulties</option>
              {difficulties.map(d => <option key={d}>{d}</option>)}
            </select>
            <select className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground">
              <option>All Companies</option>
              {companies.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem List */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-5 space-y-3">
            <h2 className="text-lg font-semibold mb-3">Problems</h2>
            {problems.map((p, i) => (
              <div key={i} className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{p.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    p.difficulty === "Easy" ? "bg-green-500/10 text-green-400" :
                    p.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-red-500/10 text-red-400"
                  }`}>{p.difficulty}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">{p.company}</span>
                  <span className="text-xs text-muted-foreground">• {p.acceptance}</span>
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Code Editor */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {languages.map(lang => (
                  <button key={lang} onClick={() => setSelectedLang(lang)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${selectedLang === lang ? "gradient-btn" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-background border border-border rounded-lg p-4 font-mono text-sm text-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary/50"
                spellCheck={false}
              />
            </div>
            <div className="flex gap-2">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-btn px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <Play className="h-4 w-4" /> Run Code
              </motion.button>
              <button className="bg-secondary px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary/80 transition-colors">
                <Send className="h-4 w-4" /> Submit
              </button>
              <button className="bg-secondary px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary/80 transition-colors">
                <Eye className="h-4 w-4" /> Solution
              </button>
              <button className="bg-secondary px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-secondary/80 transition-colors">
                <Sparkles className="h-4 w-4" /> AI Review
              </button>
            </div>
            {/* Test Cases */}
            <div className="p-3 rounded-lg bg-secondary/30">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Test Cases</p>
              <div className="space-y-1 font-mono text-xs text-muted-foreground">
                <p>Input: nums = [2,7,11,15], target = 9</p>
                <p className="text-green-400">Output: [0,1] ✓</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Coding;

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Brain,
  Code2,
  FileText,
  ClipboardList,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Mic,
  Building2,
  BarChart3,
  Trophy,
  CalendarDays,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Aptitude", icon: Brain, path: "/aptitude" },
  { label: "Coding", icon: Code2, path: "/coding" },
  { label: "Mock Tests", icon: ClipboardList, path: "/mock-tests" },
  { label: "Resume AI", icon: FileText, path: "/resume" },
  { label: "Interview Sim", icon: Mic, path: "/interview" },
  { label: "Company Mode", icon: Building2, path: "/company" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
  { label: "Leaderboard", icon: Trophy, path: "/leaderboard" },
  { label: "Calendar", icon: CalendarDays, path: "/calendar" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 z-40 h-screen glass-card rounded-none border-r border-t-0 border-b-0 border-l-0 flex flex-col transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-border">
        <div className="gradient-btn rounded-lg p-2 shrink-0">
          <GraduationCap className="h-5 w-5" />
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold tracking-tight"
          >
            PlacePrep
          </motion.span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const linkContent = (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative ${
                isActive
                  ? "bg-primary/15 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon
                className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : "group-hover:text-foreground"}`}
              />
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-[3px] h-8 rounded-r-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              )}
            </NavLink>
          );

          if (collapsed) {
            return (
              <Tooltip key={item.path} delayDuration={0}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right" className="glass-card border-border">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          }

          return linkContent;
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="mx-3 mb-4 p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex items-center justify-center"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </motion.aside>
  );
};

export default Sidebar;

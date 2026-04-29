import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, LogIn, User, ChevronDown, LogOut, Settings } from "lucide-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="h-16 glass-card rounded-none border-x-0 border-t-0 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Search */}
      <div className="relative max-w-md flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search topics, problems, tests..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 ml-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>

        {/* Login / Profile */}
        {!isLoggedIn ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLoggedIn(true)}
            className="gradient-btn px-4 py-2 rounded-lg text-sm flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            Login
          </motion.button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="h-8 w-8 rounded-full gradient-btn flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-12 w-48 glass-card rounded-lg border border-border p-1.5 shadow-xl"
                >
                  <div className="px-3 py-2 border-b border-border mb-1">
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">alex@example.com</p>
                  </div>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors">
                    <Settings className="h-4 w-4" /> Settings
                  </button>
                  <button
                    onClick={() => { setIsLoggedIn(false); setShowDropdown(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    <LogOut className="h-4 w-4" /> Log out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

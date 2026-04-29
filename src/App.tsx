import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aptitude from "./pages/Aptitude";
import Coding from "./pages/Coding";
import MockTests from "./pages/MockTests";
import Resume from "./pages/Resume";
import Interview from "./pages/Interview";
import Company from "./pages/Company";
import Analytics from "./pages/Analytics";
import Leaderboard from "./pages/Leaderboard";
import CalendarPage from "./pages/CalendarPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/company" element={<Company />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className={`transition-all duration-300 ${collapsed ? "ml-[72px]" : "ml-[240px]"}`}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>

      {/* Mobile overlay sidebar */}
      <style>{`
        @media (max-width: 768px) {
          aside { display: none; }
          .ml-\\[72px\\], .ml-\\[240px\\] { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;

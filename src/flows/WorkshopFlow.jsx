import React from "react";
import "../styles/layout-fix.css";
import { FiSearch, FiBell, FiGrid, FiTruck, FiTool, FiBox, FiBarChart2, FiCalendar, FiSettings } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Dashboard from "../components/Dashboard";
import Vehicles from "../components/Vehicles";
import Jobs from "../components/Jobs";
import Reports from "../components/Reports";
import Inventory from "../components/Inventory"; 

export default function App() {
  const [activeNav, setActiveNav] = React.useState("Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  
  return (
    <div>
      {/* 2. Updated Sidebar to accept navigation props so clicking works */}
      <Sidebar 
        active={activeNav} 
        onNavigate={setActiveNav} 
        collapsed={isSidebarCollapsed} 
      />
      
      <TopNav onSearch={(q) => console.log("search:", q)} />

      <main className="main-content">
        <header className="app-header">
          <button 
            className="collapse-btn"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            aria-pressed={isSidebarCollapsed}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? "Expand" : "Collapse"}
          </button>
          <div className="header-icons">
            <FiSearch className="icon" />
            <FiBell className="icon" />
          </div>
        </header>

        <section className="content-area">
          {activeNav === "Dashboard" && <Dashboard />}
          {/* 3. Added Vehicles Render Condition */}
          {activeNav === "Vehicles" && <Vehicles />}
          {activeNav === "Jobs" && <Jobs />}
          {activeNav === "Reports" && <Reports />}
          {activeNav === "Inventory" && <Inventory />}
        </section>
      </main>
    </div>
  );
}
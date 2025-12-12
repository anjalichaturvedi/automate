// src/components/Sidebar.jsx
import React from "react";
import PropTypes from "prop-types";
import {
  FiGrid,
  FiTruck,
  FiTool,
  FiBox,
  FiBarChart2,
  FiCalendar,
  FiSettings,
  FiPackage,
  FiLogOut
} from "react-icons/fi";
import "../styles/sidebar.css";

const ICON_MAP = {
  Dashboard: FiGrid,
  Vehicles: FiTruck,
  Jobs: FiTool,
  Inventory: FiBox,
  Reports: FiBarChart2,
  Calendar: FiCalendar,
  Services: FiPackage,
  Settings: FiSettings,
};

export default function Sidebar({ active, onNavigate, collapsed = false }) {
  const items = [
    "Dashboard",
    "Vehicles",
    "Jobs",
    "Inventory",
    "Calendar",
    "Reports",
    "Services",
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* BRAND HEADER */}
      <div className="sidebar-top">
        <div className="brand">
          <div className="brand-mark">AM</div>
          <span className="brand-text">AutoMate</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="nav">
        {items.map((label) => {
          const Icon = ICON_MAP[label] || FiGrid;
          const isActive = active === label;
          return (
            <button
              key={label}
              className={`nav-item ${isActive ? "active" : ""}`}
              onClick={() => onNavigate(label)}
            >
              <span className="nav-icon"><Icon /></span>
              <span className="nav-label">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <button
          className="nav-item ghost"
          onClick={() => onNavigate("Settings")}
        >
          <span className="nav-icon"><FiSettings /></span>
          <span className="nav-label">Settings</span>
        </button>

        <button
          className="nav-item ghost"
          onClick={() => {
            const ev = new CustomEvent("sidebar:logout");
            window.dispatchEvent(ev);
          }}
        >
          <span className="nav-icon"><FiLogOut /></span>
          <span className="nav-label">Log out</span>
        </button>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
};
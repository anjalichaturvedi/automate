// src/components/LandingPage.jsx
import React from "react";
import { FiUser, FiTool, FiBarChart2, FiCpu } from "react-icons/fi";
import "../styles/landing.css";

export default function LandingPage({ onSelect }) {
  return (
    <div className="landing-container">
      
      <div className="landing-header">
        <span className="landing-tag">EY Techathon 6.0</span>
        <h1 className="landing-title">AutoMate Ecosystem</h1>
        <p className="landing-sub">Select a persona to launch the experience</p>
      </div>

      <div className="role-grid">
        
        {/* 1. CUSTOMER */}
        <div className="role-card" onClick={() => onSelect("CUSTOMER")}>
          <div className="role-icon"><FiUser size={32} /></div>
          <div className="role-name">Vehicle Owner</div>
          <div className="role-desc">Mobile app for real-time health alerts, booking, and tracking.</div>
        </div>

        {/* 2. WORKSHOP */}
        <div className="role-card" onClick={() => onSelect("WORKSHOP")}>
          <div className="role-icon"><FiTool size={32} /></div>
          <div className="role-name">Service Partner</div>
          <div className="role-desc">Workshop dashboard for job management, diagnostics, and inventory.</div>
        </div>

        {/* 3. OEM */}
        <div className="role-card" onClick={() => onSelect("OEM")}>
          <div className="role-icon"><FiBarChart2 size={32} /></div>
          <div className="role-name">OEM / Manufacturer</div>
          <div className="role-desc">Global analytics, recurring defect detection, and quality insights.</div>
        </div>

      </div>

      <div style={{ marginTop: 60, display:'flex', gap:8, color:'#94a3b8', fontSize:'0.8rem' }}>
        <FiCpu /> Made by Anjali Chaturvedi and Vibhu Chaudhary
      </div>

    </div>
  );
}
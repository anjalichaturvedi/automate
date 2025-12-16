import React, { useState } from "react";
import { 
  FiBarChart2, FiLayers, FiMap, FiUsers, FiLogOut, 
  FiTrendingUp, FiAlertTriangle, FiCheckCircle, FiCpu, FiFilter, FiDownload, FiGlobe,
  FiZap, FiTool
} from "react-icons/fi";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import "../styles/oem.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

// ------------------------------------------------------------------
// PAGE 1: GLOBAL COMMAND CENTER
// ------------------------------------------------------------------
const GlobalDashboard = () => {
  const defectData = {
    labels: ["XUV700", "Scorpio-N", "Thar", "Bolero", "XUV300"],
    datasets: [
      { label: "Critical Defects", data: [142, 95, 60, 30, 20], backgroundColor: "#ef4444", borderRadius: 4 },
      { label: "Resolved (OTA)", data: [80, 40, 15, 5, 2], backgroundColor: "#3b82f6", borderRadius: 4 }
    ]
  };

  const costData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
      label: "Warranty Spend (Cr)", data: [5.2, 4.8, 4.5, 3.9, 3.2],
      borderColor: "#10b981", backgroundColor: "rgba(16, 185, 129, 0.1)", fill: true, tension: 0.4
    }]
  };

  return (
    <div className="animate-fade">
      <div className="oem-header">
        <div><h1 className="oem-h1">Command Center</h1><p className="oem-sub">Global Fleet Health & Financial Impact</p></div>
        <div className="oem-controls">
           <button className="oem-btn"><FiFilter /> Filter: All Regions</button>
           <button className="oem-btn primary"><FiDownload /> Export Report</button>
        </div>
      </div>

      {/* KPI ROW */}
      <div className="kpi-grid">
        <div className="oem-card">
          <div className="kpi-lbl">Active Fleet Health</div>
          <div className="kpi-val">94.2%</div>
          <div className="kpi-trend pos"><FiTrendingUp /> +2.4% vs last Qtr</div>
        </div>
        <div className="oem-card">
          <div className="kpi-lbl">Recurring Defects</div>
          <div className="kpi-val" style={{color:'#ef4444'}}>1,240</div>
          <div className="kpi-trend neg"><FiAlertTriangle /> 3 Critical Batches</div>
        </div>
        <div className="oem-card">
          <div className="kpi-lbl">Warranty Saved</div>
          <div className="kpi-val" style={{color:'#10b981'}}>₹ 12 Cr</div>
          <div className="kpi-trend pos"><FiCheckCircle /> Predictive AI</div>
        </div>
        <div className="oem-card">
          <div className="kpi-lbl">Downtime Reduction</div>
          <div className="kpi-val" style={{color:'#3b82f6'}}>-35%</div>
          <div className="kpi-trend pos">Target: -50%</div>
        </div>
      </div>

      {/* CHARTS ROW */}
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:24, marginBottom:24}}>
        <div className="oem-card">
          <h3 style={{fontSize:'1.1rem', marginBottom:20}}>Defect Frequency by Model</h3>
          <div style={{height:300}}><Bar data={defectData} options={{maintainAspectRatio:false, plugins:{legend:{position:'bottom'}}}} /></div>
        </div>
        <div className="oem-card">
          <h3 style={{fontSize:'1.1rem', marginBottom:20}}>Warranty Cost Trend</h3>
          <div style={{height:300}}><Line data={costData} options={{maintainAspectRatio:false}} /></div>
        </div>
      </div>

      {/* AI PRODUCT DECISIONS (New Feature) */}
      <div className="ai-decision-card">
         <div className="ai-brain-icon"><FiCpu /></div>
         <div>
            <h4 style={{margin:0, color:'#166534', fontSize:'1.1rem'}}>AI Engineering Recommendation</h4>
            <p style={{margin:'4px 0 8px', fontSize:'0.9rem', color:'#15803d'}}>
               High correlation detected between <strong>Urban Driving Cycles</strong> and <strong>Clutch Wear</strong> in Scorpio-N (Diesel).
            </p>
            <div style={{display:'flex', gap:10}}>
               <span className="status-pill s-ok">Suggestion: Change Friction Material Grade to Ceramic-Composite</span>
               <span className="status-pill s-warn">Impact: +15% Life</span>
            </div>
         </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// PAGE 2: QUALITY & RCA (EXTENSIVE)
// ------------------------------------------------------------------
const QualityControl = () => {
  const capaList = [
    { id: "RCA-9921", model: "XUV700", issue: "Alternator Voltage Fluctuation", risk: "High", status: "Investigation", batch: "Batch #992" },
    { id: "RCA-8842", model: "Scorpio-N", issue: "Infotainment Screen Freeze", risk: "Med", status: "OTA Fix Ready", batch: "v2.4 Firmware" },
  ];

  const rootCauseData = {
    labels: ["Electrical (Sensors)", "Powertrain", "Suspension", "Software"],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ["#6366f1", "#f97316", "#10b981", "#3b82f6"],
      borderWidth: 0,
    }]
  };

  const workshopMatrix = [
    { name: "XY Workshop Delhi", defects: 45, topIssue: "Alternator", compliance: "Low" },
    { name: "Prime Auto Bangalore", defects: 12, topIssue: "Software", compliance: "High" },
    { name: "City Motors Mumbai", defects: 38, topIssue: "Brake Pads", compliance: "Med" },
  ];

  return (
    <div className="animate-fade">
      <div className="oem-header">
        <div><h1 className="oem-h1">Quality & RCA</h1><p className="oem-sub">Root Cause Analysis & Feedback Loop</p></div>
        <button className="oem-btn primary"><FiZap /> Trigger AI Audit</button>
      </div>

      <div className="rca-grid">
        
        {/* LEFT: Deep Dive Table */}
        <div className="oem-card">
          <h3 style={{marginBottom:20}}>Active Investigations (CAPA)</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>RCA ID</th>
                <th>Model</th>
                <th>Detected Issue</th>
                <th>Affected Batch</th>
                <th>Risk</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {capaList.map((item, i) => (
                <tr key={i}>
                  <td style={{fontFamily:'monospace', fontWeight:600}}>{item.id}</td>
                  <td>{item.model}</td>
                  <td style={{fontWeight:600}}>{item.issue}</td>
                  <td>{item.batch}</td>
                  <td><span className={`status-pill ${item.risk === 'High' ? 's-crit' : 's-warn'}`}>{item.risk}</span></td>
                  <td><span style={{color:'#3b82f6', fontWeight:600}}>{item.status}</span></td>
                  <td><button style={{color:'white', background:'#0f172a', border:'none', padding:'6px 12px', borderRadius:6, cursor:'pointer', fontSize:'0.8rem'}}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT: Root Cause Chart */}
        <div className="oem-card">
          <h3 style={{marginBottom:20}}>Root Cause Distribution</h3>
          <div style={{height:250, display:'flex', justifyContent:'center'}}>
             <Doughnut data={rootCauseData} options={{cutout:'70%', plugins:{legend:{position:'bottom'}}}} />
          </div>
        </div>
      </div>

      {/* WORKSHOP BREAKDOWN MATRIX */}
      <div className="oem-card">
         <h3 style={{marginBottom:20}}>Workshop Defect Matrix (Hotspots)</h3>
         <div className="workshop-breakdown">
            {workshopMatrix.map((ws, i) => (
               <div key={i} className="workshop-row">
                  <div style={{flex:2}}>
                     <div className="ws-name">{ws.name}</div>
                     <div className="ws-stat">Top Issue: <span style={{color:'#ef4444'}}>{ws.topIssue}</span></div>
                  </div>
                  <div style={{flex:1, display:'flex', alignItems:'center'}}>
                     <span className="ws-stat">{ws.defects} Cases</span>
                     <div className="ws-bar-bg"><div className="ws-bar-fill" style={{width:`${Math.min(ws.defects, 100)}%`, background: ws.defects > 30 ? '#ef4444' : '#10b981'}} /></div>
                  </div>
                  <div style={{flex:1, textAlign:'right'}}>
                     <span className={`status-pill ${ws.compliance === 'Low' ? 's-crit' : 's-ok'}`}>{ws.compliance} Compliance</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};

// ------------------------------------------------------------------
// PAGE 3: DEALER NETWORK PERFORMANCE
// ------------------------------------------------------------------
const DealerNetwork = () => {
  return (
    <div className="animate-fade">
      <div className="oem-header">
        <div><h1 className="oem-h1">Network Performance</h1><p className="oem-sub">Service Quality across 1200+ Workshops</p></div>
      </div>
      <div className="oem-card" style={{height:400, display:'flex', alignItems:'center', justifyContent:'center', background:'#f8fafc', border:'2px dashed #e2e8f0'}}>
         <div style={{textAlign:'center', color:'#94a3b8'}}>
            <FiMap size={48} />
            <p>Interactive Dealer Map Placeholder</p>
         </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// MAIN LAYOUT & SIDEBAR
// ------------------------------------------------------------------
export default function OEMFlow() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="oem-layout">
      
      {/* SIDEBAR (Matches Workshop Design) */}
      <aside className="oem-sidebar">
        <a href="#" className="oem-brand">
          <div className="oem-brand-mark">OC</div>
          <span className="oem-brand-text">OEM Connect</span>
        </a>

        <div className="nav-list">
          <button className={`oem-nav-item ${page === 'dashboard' ? 'active' : ''}`} onClick={() => setPage('dashboard')}>
            <FiBarChart2 /> Dashboard
          </button>
          <button className={`oem-nav-item ${page === 'quality' ? 'active' : ''}`} onClick={() => setPage('quality')}>
            <FiCpu /> Quality & RCA
          </button>
          <button className={`oem-nav-item ${page === 'network' ? 'active' : ''}`} onClick={() => setPage('network')}>
            <FiMap /> Dealer Network
          </button>
          <button className="oem-nav-item">
            <FiUsers /> Customers
          </button>
        </div>

        <div className="oem-user">
          <div style={{width:32, height:32, borderRadius:'50%', background:'#1e293b', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700}}>JD</div>
          <div style={{flex:1}}>
            <div style={{fontSize:'0.9rem', fontWeight:600, color:'#1e293b'}}>John Doe</div>
            <div style={{fontSize:'0.75rem', color:'#64748b'}}>Quality Head</div>
          </div>
          <FiLogOut style={{color:'#94a3b8', cursor:'pointer'}} />
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="oem-content">
        {page === "dashboard" && <GlobalDashboard />}
        {page === "quality" && <QualityControl />}
        {page === "network" && <DealerNetwork />}
      </main>

    </div>
  );
}
// src/flows/OEMFlow.jsx
import React from "react";
import { 
  FiBarChart2, FiMap, FiAlertTriangle, FiCheckCircle, FiTrendingUp, FiDownload, FiFilter 
} from "react-icons/fi";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import "../styles/oem.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

export default function OEMFlow() {

  // --- MOCK DATA (Based on PPT Impact Metrics) ---
  
  // 1. Defect Trends (Bar Chart)
  const defectData = {
    labels: ["XUV700", "Scorpio-N", "Thar", "Bolero", "XUV300"],
    datasets: [
      {
        label: "Critical Defects (This Month)",
        data: [145, 98, 65, 40, 25],
        backgroundColor: "#ef4444",
        borderRadius: 6,
      },
      {
        label: "Resolved via OTA",
        data: [80, 45, 20, 10, 5],
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      }
    ]
  };

  // 2. Failure Distribution (Doughnut)
  const rootCauseData = {
    labels: ["Electrical (Sensors)", "Powertrain", "Suspension", "Software"],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ["#6366f1", "#f97316", "#10b981", "#3b82f6"],
      borderWidth: 0,
    }]
  };

  // 3. CAPA / RCA Feed (AI generated insights from workshops)
  const capaItems = [
    {
      id: "RCA-9921",
      risk: "High",
      title: "Alternator Voltage Fluctuation",
      desc: "AI correlated 450+ breakdown logs. Issue traced to Voltage Regulator Batch #992.",
      model: "Mahindra XUV700",
      region: "North Zone",
      status: "Investigation Open"
    },
    {
      id: "RCA-8842",
      risk: "Med",
      title: "Infotainment Screen Freeze",
      desc: "Software loop detected in v2.4 firmware during startup sequence.",
      model: "Scorpio-N",
      region: "West Zone",
      status: "OTA Fix Ready"
    },
    {
      id: "RCA-7710",
      risk: "Med",
      title: "Premature Brake Pad Wear",
      desc: "15% of Urban users reporting wear <10k km. Material grade check recommended.",
      model: "Thar",
      region: "Metro Cities",
      status: "Vendor Flagged"
    }
  ];

  return (
    <div className="oem-layout">
      <div className="oem-container">
        
        {/* HEADER */}
        <div className="oem-header">
          <div className="oem-title">
            <h1>Global Quality Analytics</h1>
            <p>AI-Driven Insights across Service Network</p>
          </div>
          <div className="oem-controls">
            <button className="oem-btn"><FiFilter /> Filter: All Regions</button>
            <button className="oem-btn primary"><FiDownload /> Export Report</button>
          </div>
        </div>

        {/* 1. KPI GRID (Aligned with PPT ROI) */}
        <div className="oem-kpi-grid">
          <div className="oem-card">
            <div className="kpi-label">Active Fleet Health</div>
            <div className="kpi-val">94.2%</div>
            <div className="kpi-trend trend-good"><FiTrendingUp /> +2.4% vs last Qtr</div>
          </div>
          <div className="oem-card">
            <div className="kpi-label">Recurring Defects</div>
            <div className="kpi-val" style={{color:'#ef4444'}}>1,240</div>
            <div className="kpi-trend trend-bad"><FiAlertTriangle /> 3 Critical Batches</div>
          </div>
          <div className="oem-card">
            <div className="kpi-label">Warranty Saved</div>
            <div className="kpi-val" style={{color:'#10b981'}}>₹ 4.5 Cr</div>
            <div className="kpi-trend trend-good"><FiCheckCircle /> Predictive Interventions</div>
          </div>
          <div className="oem-card">
            <div className="kpi-label">Downtime Reduction</div>
            <div className="kpi-val" style={{color:'#3b82f6'}}>-35%</div>
            <div className="kpi-trend trend-good">Target: -50%</div>
          </div>
        </div>

        {/* 2. ANALYTICS ROW */}
        <div className="oem-charts-row">
          
          {/* Main Trend Chart */}
          <div className="oem-card">
            <div className="chart-header">
              <span className="chart-title">Defect Frequency by Model</span>
              <button style={{background:'none', border:'none', color:'#64748b', cursor:'pointer'}}>View Details</button>
            </div>
            <div className="chart-container">
              <Bar 
                data={defectData} 
                options={{
                  responsive: true, 
                  maintainAspectRatio: false,
                  scales: { y: { beginAtZero: true, grid: {color: '#f1f5f9'} }, x: { grid: {display: false} } }
                }} 
              />
            </div>
          </div>

          {/* Root Cause Distribution */}
          <div className="oem-card">
            <div className="chart-header">
              <span className="chart-title">Root Cause Analysis</span>
            </div>
            <div className="chart-container" style={{display:'flex', justifyContent:'center'}}>
              <Doughnut 
                data={rootCauseData} 
                options={{
                  cutout: '70%', 
                  plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } } } 
                }} 
              />
            </div>
          </div>

        </div>

        {/* 3. CAPA / AI INSIGHT FEED (The "Feedback Loop") */}
        <h3 style={{fontSize:'1.2rem', marginBottom:16, color:'#1e293b'}}>AI-Generated Quality Insights (CAPA)</h3>
        <div className="capa-section">
          <div className="capa-header">
             <span style={{fontWeight:600, color:'#64748b'}}>Recent Critical Flags</span>
             <span style={{fontSize:'0.8rem', color:'#94a3b8'}}>Updated: Just now</span>
          </div>
          
          <div className="capa-list">
            {capaItems.map((item, i) => (
              <div key={i} className="capa-item">
                
                {/* Risk Icon */}
                <div className={`risk-badge ${item.risk === 'High' ? 'risk-high' : 'risk-med'}`}>
                  !
                </div>

                {/* Content */}
                <div>
                  <div className="capa-title">{item.title}</div>
                  <div className="capa-desc">{item.desc}</div>
                </div>

                {/* Meta */}
                <div className="capa-meta">
                  <div>{item.model}</div>
                  <div>{item.region}</div>
                </div>

                {/* Status */}
                <div className="capa-status status-open">
                  {item.status}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
// src/components/RCAReports.jsx
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { FiCalendar, FiCpu, FiAlertTriangle, FiCheckCircle, FiUserCheck, FiRepeat } from "react-icons/fi";
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement
} from "chart.js";
import "../styles/reports.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function WorkshopRCA() {
  
  // --- WORKSHOP LEVEL DATA ---
  
  // 1. Top Local Failures (What are WE fixing most?)
  const localDefects = {
    labels: ["Brake Noise", "AC Cooling", "Battery Drain", "Suspension", "Clutch Hardness"],
    datasets: [{
      label: "Cases this Week",
      data: [42, 28, 15, 12, 8],
      backgroundColor: ["#ef4444", "#f97316", "#f59e0b", "#3b82f6", "#6366f1"],
      borderRadius: 6,
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, grid: { color: '#f3f4f6' } }, x: { grid: { display: false } } }
  };

  // 2. Root Cause Split (Man vs Machine)
  const rootCauseData = {
    labels: ["Part Failure", "Labor / Install Error", "Diagnosis Error", "External/Road"],
    datasets: [{
      data: [60, 15, 20, 5],
      backgroundColor: ["#3b82f6", "#ef4444", "#f59e0b", "#10b981"],
      borderWidth: 0,
    }]
  };

  // 3. Local Feedback Loop (Specific Jobs in THIS Workshop)
  const workshopInsights = [
    {
      id: "JOB-4992",
      title: "Repeat Complaint: AC Cooling (Nexon)",
      severity: "High",
      desc: "Customer returned after 2 days. AI analysis of OBD logs shows compressor clutch disengaging intermittently.",
      capa: "Action: Replace Compressor Relay (Missed in first diagnosis)",
      mechanic: "Assigned: Rahul K.",
      date: "Today, 09:15 AM"
    },
    {
      id: "JOB-4880",
      title: "Parts Quality Flag: XUV700 Brake Pads",
      severity: "Med",
      desc: "3rd car this week reporting squealing noise with new pads. Batch #9921 might be defective.",
      capa: "Action: Quarantine Stock Batch #9921",
      mechanic: "Store Manager Alerted",
      date: "Yesterday"
    },
    {
      id: "JOB-4911",
      title: "Diagnosis Success: Battery Drain",
      severity: "Low",
      desc: "Technician correctly identified aftermarket dashcam as drain source. AI validated against sleep-mode current logs.",
      capa: "Result: Diagnosis Verified (FTR Success)",
      mechanic: "Assigned: Priya S.",
      date: "Nov 12"
    }
  ];

  return (
    <div className="rca-layout">
      
      {/* HEADER */}
      <div className="rca-header">
        <div>
          <div className="rca-title">Workshop Quality & Analysis</div>
          <div className="rca-subtitle">Local Performance & Repeat Repair Analytics</div>
        </div>
        <button className="date-filter">
          <FiCalendar /> This Week
        </button>
      </div>

      {/* KPI ROW (Workshop Focused) */}
      <div className="rca-kpi-row">
        <div className="rca-card">
          <span className="rca-kpi-label">First Time Right (FTR)</span>
          <span className="rca-kpi-val">94%</span>
          <span className="rca-trend trend-down" style={{color: '#10b981'}}><FiCheckCircle /> +2% vs last week</span>
        </div>
        <div className="rca-card">
          <span className="rca-kpi-label">Repeat Repairs (Returns)</span>
          <span className="rca-kpi-val">6</span>
          <span className="rca-trend trend-up"><FiRepeat /> 2 Critical Cases</span>
        </div>
        <div className="rca-card">
          <span className="rca-kpi-label">Avg Diagnosis Time</span>
          <span className="rca-kpi-val">45 min</span>
          <span className="rca-trend trend-down" style={{color:'#3b82f6'}}>AI reduced by 15m</span>
        </div>
        <div className="rca-card">
          <span className="rca-kpi-label">Technician Accuracy</span>
          <span className="rca-kpi-val">91%</span>
          <span className="rca-trend" style={{color:'#f59e0b'}}><FiUserCheck /> Training Needed</span>
        </div>
      </div>

      {/* CHARTS ROW */}
      <div className="rca-grid-main">
        {/* Main Chart */}
        <div className="chart-box">
          <div className="chart-header">
            <div style={{fontWeight: 700}}>Top Defect Categories (This Shop)</div>
          </div>
          <div style={{flex:1}}>
            <Bar data={localDefects} options={chartOptions} />
          </div>
        </div>

        {/* Region Chart -> Swapped for Root Cause Analysis */}
        <div className="chart-box">
          <div className="chart-header">
            <div style={{fontWeight: 700}}>Failure Root Causes</div>
          </div>
          <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center', position:'relative'}}>
            <div style={{width: 200, height: 200}}>
              <Doughnut data={rootCauseData} options={{cutout: '70%', plugins:{legend:{display:false}}}} />
            </div>
            <div style={{position:'absolute', textAlign:'center'}}>
              <div style={{fontSize:'2rem', fontWeight:800}}>60%</div>
              <div style={{fontSize:'0.8rem', color:'#6b7280'}}>Parts</div>
            </div>
          </div>
          <div style={{textAlign:'center', marginTop:10, fontSize:'0.8rem', color:'var(--text-muted)'}}>
            <span style={{color:'#3b82f6'}}>● Parts</span> &nbsp;
            <span style={{color:'#ef4444'}}>● Labor</span> &nbsp;
            <span style={{color:'#f59e0b'}}>● Diag</span>
          </div>
        </div>
      </div>

      {/* FEEDBACK LOOP SECTION */}
      <div className="insights-feed">
        <div className="feed-header">
          <div style={{fontWeight: 800, fontSize:'1.1rem'}}>Local Quality Flags & RCA</div>
          <div className="ai-pill"><FiCpu /> AI Analysis Active</div>
        </div>

        {workshopInsights.map((item) => (
          <div key={item.id} className="insight-item">
            
            {/* Severity Box */}
            <div className="severity-box" style={{ 
              background: item.severity === 'High' ? '#fee2e2' : item.severity === 'Med' ? '#fff7ed' : '#ecfdf5',
              color: item.severity === 'High' ? '#ef4444' : item.severity === 'Med' ? '#c2410c' : '#10b981'
            }}>
              <FiAlertTriangle size={20} />
              <span className="severity-label">{item.severity}</span>
            </div>

            {/* Content */}
            <div className="insight-body">
              <h4>{item.title} <span style={{fontSize:'0.8rem', color:'#9ca3af', fontWeight:400}}> • {item.mechanic} • {item.date}</span></h4>
              <p>{item.desc}</p>
              <span className="capa-tag" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569' }}>
                {item.capa}
              </span>
            </div>

            {/* Actions */}
            <div className="insight-actions">
              <button className="btn-action btn-approve">View Job Card</button>
              <button className="btn-action btn-ignore">Dismiss</button>
            </div>

          </div>
        ))}
        
      </div>

    </div>
  );
}
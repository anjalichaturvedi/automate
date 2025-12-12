// src/components/Dashboard.jsx
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import "../styles/dashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

export default function Dashboard() {
  const DAYS = 20;
  const days = Array.from({ length: DAYS }, (_, i) => i + 1);

  // --- DATA ---
  const effService = days.map(() => Math.floor(40 + Math.random() * 30));
  const csat = days.map((_, i) => (4.0 + (i / 20) * 0.5).toFixed(1));
  
  const chartColors = {
    red: "#ef4444",
    green: "#10b981",
    blue: "#3b82f6",
    orange: "#f59e0b"
  };

  const calendarEvents = [
    { id: 1, time: "12:00", title: "Mahindra XUV700", sub: "DL7C 1234", type: "Alert", color: "var(--color-danger)" },
    { id: 2, time: "12:45", title: "Honda City", sub: "Walk-in", type: "Walk-in", color: "var(--color-info)" },
    { id: 3, time: "13:20", title: "Hyundai Creta", sub: "Service #9921", type: "Scheduled", color: "var(--color-success)" },
    { id: 4, time: "14:30", title: "Tata Nexon", sub: "Pickup", type: "Pickup", color: "var(--color-warning)" },
    { id: 5, time: "15:15", title: "Kia Seltos", sub: "Inspection", type: "Scheduled", color: "var(--color-info)" },
  ];

  const inventory = [
    { part: "Alternator (XUV700)", left: 2, status: "Critical" },
    { part: "Battery cell (Creta)", left: 1, status: "Critical" },
    { part: "Brake Pads (Nexon)", left: 4, status: "Low" },
  ];

  const customers = [
    { 
      id: "c1", name: "Amit Sharma", car: "Hyundai Creta", plate: "DL 3C AB 1234", time: "09:12", 
      preview: "Is my car ready yet?" 
    },
    { 
      id: "c2", name: "Priya Singh", car: "Tata Nexon", plate: "UP 16 Z 9988", time: "Yesterday", 
      preview: "Please check the AC cooling..." 
    },
    { 
      id: "c3", name: "Rahul Verma", car: "Mahindra XUV700", plate: "HR 26 DQ 5500", time: "Tue", 
      preview: "Approve the brake pads replacement." 
    },
  ];

  const messages = {
    c1: [
      { from: "me", text: "Hello Amit, we are working on your Creta.", time: "09:00" },
      { from: "them", text: "Is my car ready yet?", time: "09:12" },
      { from: "me", text: "It's in the final washing bay. ETA 45 mins.", time: "09:15" }
    ],
    c2: [
      { from: "them", text: "Hi, dropping the car off tomorrow.", time: "10:00" },
      { from: "them", text: "Please check the AC cooling, it feels weak.", time: "10:01" },
      { from: "me", text: "Noted Priya. We will run a diagnostic.", time: "10:05" }
    ],
    c3: [
      { from: "me", text: "Rahul, technician advises replacing front brake pads (2mm left).", time: "07:30" },
      { from: "them", text: "How much will that cost?", time: "07:35" },
      { from: "me", text: "Approx ₹4,500 including labor.", time: "07:36" },
      { from: "them", text: "Approve the brake pads replacement.", time: "07:40" }
    ]
  };

  const [activeId, setActiveId] = useState("c1");
  const activeCustomer = customers.find(c => c.id === activeId);
  const activeMessages = messages[activeId] || [];

  const donutData = {
    labels: ["Diag", "Repair", "Ready"],
    datasets: [{
      data: [220, 160, 120],
      backgroundColor: [chartColors.blue, chartColors.orange, chartColors.green],
      borderWidth: 0,
    }]
  };

  return (
    <div className="dash">
      
      {/* 1. TOP KPI GRID */}
      <div className="kpi-grid">
        <KPICard title="Efficiency" value="56%" sub="Predictive vs Service" trend="99% Match" color={chartColors.blue} data={effService} />
        <KPICard title="CSAT (30d)" value="4.6" sub="out of 5.0" trend="+15% Trend" color={chartColors.green} data={csat} />
        <KPICard title="Retention" value="71%" sub="Repeat Customers" trend="57% First-time" color={chartColors.blue} data={effService.reverse()} />

      </div>

      {/* 2. MIDDLE SECTION */}
      <div className="middle-section">
        
        {/* CALENDAR */}
        <div className="card" style={{ height: "550px" }}>
            <div className="card-header">
              <div>
                <div className="card-title">Agenda & Priorities</div>
                <div className="card-subtitle">AI Optimized Schedule</div>
              </div>
              <span className="ai-badge" style={{background: '#eff6ff', color: '#3b82f6', border: '1px solid #dbeafe', borderRadius: 20, padding: '4px 10px', fontSize: '0.75rem', fontWeight: 700}}>✨ AI Optimized</span>
            </div>

            <div className="calendar-list">
              {calendarEvents.map((ev) => (
                <div key={ev.id} className="event-row" style={{ borderLeftColor: ev.color }}>
                  <div className="ev-time">{ev.time}</div>
                  <div className="ev-details">
                    <div className="ev-title">{ev.title}</div>
                    <div className="ev-sub">
                      {ev.sub}
                    </div>
                  </div>
                  <div className="ev-type" style={{ color: ev.color }}>{ev.type}</div>
                </div>
              ))}
            </div>
        </div>

        {/* SIDEBAR STATS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, height: "550px" }}>
          
          <div className="card" style={{ flex: 1 }}>
            <div className="card-title" style={{ marginBottom: 16 }}>Live Performance</div>
            <div className="qs-list">
              <QuickStat label="Jobs Today" value="54" badge="SLA Risk 8%" badgeColor="#fee2e2" badgeText="#ef4444" />
              <QuickStat label="Critical Open" value="8" badge="Flagged" badgeColor="#fee2e2" badgeText="#ef4444" />
              <QuickStat label="SLA Compliance" value="92%" badge="+3% SOP" badgeColor="#dcfce7" badgeText="#166534" />
            </div>
          </div>

          <div className="card" style={{ flex: 1 }}>
             <div className="card-header" style={{ marginBottom: 10 }}>
                <div className="card-title">Inventory Alerts</div>
             </div>
             <div style={{ overflowY: "auto" }}>
               {inventory.map((item, i) => (
                 <div key={i} className="inv-item">
                    <div>
                      <div style={{ fontWeight: 600, color: "#991b1b", fontSize: "0.9rem" }}>{item.part}</div>
                      <div style={{ fontSize: "0.75rem", color: "#ef4444" }}>Only {item.left} left</div>
                    </div>
                    <button className="inv-btn">Order</button>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>

      {/* 3. INBOX (FULL WIDTH, PRETTY INPUT) */}
      <div className="card inbox-card-wrapper">
         <div className="inbox-layout">
            
            {/* INBOX LIST */}
            <div className="inbox-list">
               <div className="inbox-search">
                  <div className="card-title">Inbox</div>
                  <div className="card-subtitle">Recent Messages</div>
               </div>
               <div className="inbox-items-scroll">
                 {customers.map(c => (
                   <div 
                      key={c.id} 
                      className={`inbox-item ${activeId === c.id ? 'active' : ''}`}
                      onClick={() => setActiveId(c.id)}
                   >
                      <div className="inbox-top">
                         <span className="inbox-name">{c.name}</span>
                         <span className="inbox-time">{c.time}</span>
                      </div>
                      <div style={{display:'flex', alignItems:'center'}}>
                         <span className="plate-tag">{c.plate}</span>
                         <span style={{fontSize:'0.8rem', color:'#6b7280'}}>{c.car}</span>
                      </div>
                      <div className="msg-preview">{c.preview}</div>
                   </div>
                 ))}
               </div>
            </div>

            {/* CHAT AREA */}
            <div className="inbox-chat">
               <div className="chat-header">
                  <div>
                     <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>{activeCustomer.name}</div>
                     <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{activeCustomer.car} • <span className="plate-tag" style={{border:0, background:'#e5e7eb'}}>{activeCustomer.plate}</span></div>
                  </div>
                  <div style={{ background: "#eff6ff", color: "#3b82f6", padding: "4px 12px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 700 }}>
                    Job #4992
                  </div>
               </div>
               
               <div className="chat-scroll-area">
                  {activeMessages.map((msg, idx) => (
                     <div key={idx} className={`chat-bubble ${msg.from}`}>
                        {msg.text}
                        <span className="bubble-time">{msg.time}</span>
                     </div>
                  ))}
               </div>

               <div className="suggestions">
                  <span className="chip">✨ Suggest: "Ready for pickup"</span>
                  <span className="chip">✨ Suggest: "Need approval"</span>
                  <span className="chip">✨ Suggest: "Delay expected"</span>
               </div>

               <div className="chat-footer">
                  <div className="input-container">
                    {/* Fake attachment icon */}
                    <div style={{color:'#9ca3af', cursor:'pointer'}}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    </div>
                    
                    <input className="chat-input" placeholder={`Message ${activeCustomer.name.split(' ')[0]}...`} />
                    
                    <button className="send-btn">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
}

// --- SUB COMPONENTS ---
function KPICard({ title, value, sub, trend, color, data }) {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [{ data, borderColor: color, backgroundColor: color + "10", fill: true }]
  };
  return (
    <div className="card">
      <div className="card-header" style={{ marginBottom: 0 }}>
        <div>
          <div className="card-title">{title}</div>
          <div className="card-subtitle">{sub}</div>
        </div>
      </div>
      <div className="kpi-value-big">{value}</div>
      <div className="kpi-chart-container">
        <Line data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } }, elements: { point: { radius: 0 }, line: { borderWidth: 3, tension: 0.4 } } }} />
      </div>
      <div className="kpi-meta" style={{ marginTop: 10 }}>
        <span style={{ fontWeight: 700, color: color }}>{trend}</span>
      </div>
    </div>
  );
}

function QuickStat({ label, value, badge, badgeColor, badgeText }) {
  return (
    <div className="qs-item">
      <div>
        <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{label}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>{value}</div>
        <span style={{ background: badgeColor, color: badgeText, padding: '4px 8px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 700 }}>{badge}</span>
      </div>
    </div>
  );
}
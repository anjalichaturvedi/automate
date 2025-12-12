import React from "react";
import { 
  FiCheckCircle, FiClock, FiPhone, FiRefreshCw, FiClipboard 
} from "react-icons/fi";
import "../../styles/customer.css"; // Make sure CSS path is correct

export default function ServiceTracker() {
  
  // --- MOCK DATA ---
  
  const timeline = [
    { title: "Vehicle Check-In", time: "09:30 AM", status: "done", desc: "Intake photos uploaded" },
    { title: "Diagnosis Completed", time: "10:15 AM", status: "done", desc: "Report generated" },
    { title: "Repairs In Progress", time: "Est. 02:00 PM", status: "active", desc: "Currently on Lift #4" },
    { title: "Quality Check & Wash", time: "--", status: "pending", desc: "Pending repairs" },
    { title: "Ready for Pickup", time: "--", status: "pending", desc: "" },
  ];

  const tasks = [
    { name: "Engine Oil Replacement", status: "Done", class: "tp-done" },
    { name: "Oil Filter Change", status: "Done", class: "tp-done" },
    { name: "Air Filter Cleaning", status: "In Progress", class: "tp-prog" },
    { name: "Brake Pad Inspection", status: "Pending", class: "tp-pend" },
    { name: "Wheel Alignment", status: "Pending", class: "tp-pend" },
  ];

  const logs = [
    { time: "11:45 AM", msg: "Air Filter unit removed for cleaning" },
    { time: "11:30 AM", msg: "Technician started work on engine bay" },
    { time: "11:15 AM", msg: "Parts issued: 5W30 Synthetic Oil (3.5L)" },
    { time: "10:45 AM", msg: "Customer approved estimate #EST-992" },
  ];

  return (
    <div className="hero-section">
      
      {/* LEFT COLUMN: STATUS & TIMELINE */}
      <div style={{display:'flex', flexDirection:'column', gap: 24}}>
        
        <div className="cust-card">
          <h2 style={{fontSize:'1.5rem', marginBottom:20, fontWeight:800}}>Live Status</h2>
          
          {/* Mechanic Card */}
          <div className="mechanic-card">
            <div className="mech-avatar">RG</div>
            <div className="mech-details" style={{flex:1}}>
              <h4>Rakesh Gupta</h4>
              <p>Lead Technician • Bay 4</p>
            </div>
            <button style={{background:'white', border:'1px solid #e2e8f0', padding:'8px', borderRadius:'50%', cursor:'pointer'}}>
              <FiPhone color="#475569" />
            </button>
          </div>

          {/* Visual Timeline */}
          <div className="timeline-container">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className={`t-dot ${item.status}`} />
                <div className={`t-content ${item.status}`}>
                  <h5>{item.title}</h5>
                  {item.desc && <div style={{fontSize:'0.8rem', color:'#64748b', marginTop:2}}>{item.desc}</div>}
                  <div className="t-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: DETAILS & LOGS */}
      <div style={{display:'flex', flexDirection:'column', gap: 24}}>
        
        {/* Live Activity Feed */}
        <div className="cust-card" style={{height:'auto'}}>
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:20}}>
             <FiRefreshCw color="#ef4444"/> 
             <h3 style={{margin:0, fontSize:'1.1rem'}}>Live Activity Log</h3>
          </div>
          <div style={{maxHeight: 200, overflowY:'auto'}}>
            {logs.map((log, i) => (
              <div key={i} className="log-item">
                <span className="log-time">{log.time}</span>
                <span className="log-msg">{log.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Checklist */}
        <div className="cust-card">
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:20}}>
             <FiClipboard color="#3b82f6"/> 
             <h3 style={{margin:0, fontSize:'1.1rem'}}>Service Checklist</h3>
          </div>
          <div>
            {tasks.map((t, i) => (
              <div key={i} className="task-row">
                <span className="task-name">{t.name}</span>
                <span className={`task-pill ${t.class}`}>{t.status}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:20, paddingTop:16, borderTop:'1px dashed #e2e8f0', display:'flex', justifyContent:'space-between', fontSize:'0.85rem', color:'#64748b'}}>
             <span>Tasks Completed: <strong>2/5</strong></span>
             <span>Est. Remaining: <strong>2 hrs</strong></span>
          </div>
        </div>

      </div>

    </div>
  );
}
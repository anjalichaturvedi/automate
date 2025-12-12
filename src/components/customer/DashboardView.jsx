import React, { useState } from "react";
import { 
  FiCheckCircle, FiThermometer, FiZap, FiWind, FiFileText, 
  FiActivity, FiX, FiDownload 
} from "react-icons/fi";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "../../styles/customer.css"; // Ensure this path matches your folder structure

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

// --- MOCK DATA ---
const issuesList = [
  { id: 1, title: "Low Tire Pressure (Front-Left)", critical: true },
  { id: 2, title: "Refill Brake Fluid", critical: false },
  { id: 3, title: "Left Headlight Flicker", critical: false }
];

const fullInspectionReport = {
  engine: [
    { item: "Engine Oil Level", status: "Good", color: "green" },
    { item: "Coolant Level", status: "Good", color: "green" },
    { item: "Drive Belts", status: "Wear Detected", color: "orange" },
  ],
  brakes: [
    { item: "Front Brake Pads", status: "8mm (Good)", color: "green" },
    { item: "Rear Brake Pads", status: "3mm (Replace)", color: "red" },
    { item: "Brake Fluid Moisture", status: ">3% (Flush Req)", color: "red" },
  ],
  electrical: [
    { item: "Battery Health", status: "Good (12.6V)", color: "green" },
    { item: "Alternator", status: "14.2V", color: "green" },
    { item: "Headlights", status: "LH Bulb Issue", color: "red" }
  ]
};

// --- HELPER: MODAL COMPONENT ---
// (Included locally to avoid import errors)
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position:'fixed', top:0, left:0, right:0, bottom:0, 
      background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)', 
      display:'flex', alignItems:'center', justifyContent:'center', 
      zIndex:1000
    }}>
      <div style={{
        background:'white', width:'100%', maxWidth:500, 
        borderRadius:16, padding:24, margin:20, 
        maxHeight:'80vh', overflowY:'auto', 
        boxShadow:'0 20px 50px rgba(0,0,0,0.2)'
      }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
          <h3 style={{margin:0, fontSize:'1.2rem', fontWeight:800}}>{title}</h3>
          <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer'}}>
            <FiX size={20}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function DashboardView({ onTriggerDemo, setView }) {
  const [reportOpen, setReportOpen] = useState(false);

  const healthData = {
    datasets: [{
      data: [85, 15],
      backgroundColor: ["#10b981", "#f1f5f9"],
      borderWidth: 0,
      circumference: 260,
      rotation: 230,
    }]
  };

  return (
    <div className="animate-fade">
      
      {/* HEADER */}
      <div style={{marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: '1.8rem', fontWeight: 800, color: '#111827', margin: 0}}>My Vehicle</h1>
          <p style={{color: '#64748b', margin: '4px 0 0'}}>Mahindra XUV700 • DL 7C 1234</p>
        </div>
        {/* Hidden Demo Button */}
        <button onClick={onTriggerDemo} style={{opacity: 0.5, fontSize:'0.75rem', padding:'6px 12px', border:'1px dashed #ccc', borderRadius: 6, background:'white', cursor:'pointer'}}>
          Simulate Fault
        </button>
      </div>

      <div className="hero-section">
        
        {/* LEFT COLUMN: CAR IMAGE & BASIC STATS */}
        <div className="cust-card">
          <div style={{display:'flex', justifyContent:'space-between'}}>
             <span style={{background:'#ecfdf5', color:'#10b981', padding:'4px 12px', borderRadius:20, fontWeight:700, fontSize:'0.8rem', display:'flex', alignItems:'center', gap:6}}>
               <FiCheckCircle size={14}/> Connected
             </span>
             <span style={{color:'#64748b', fontSize:'0.9rem', fontWeight:600}}>Diesel Auto</span>
          </div>
          
          <div style={{textAlign:'center', margin:'20px 0'}}>
            <img 
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" 
              alt="Car" 
              style={{maxWidth:'100%', maxHeight: 200, objectFit:'contain'}} 
            />
          </div>

          <div className="health-grid">
             <div><div style={{color:'#64748b', fontSize:'0.75rem', fontWeight:700}}>RANGE</div><div style={{fontWeight:800, fontSize:'1.1rem'}}>420 km</div></div>
             <div><div style={{color:'#64748b', fontSize:'0.75rem', fontWeight:700}}>ODOMETER</div><div style={{fontWeight:800, fontSize:'1.1rem'}}>12,450</div></div>
             <div><div style={{color:'#64748b', fontSize:'0.75rem', fontWeight:700}}>SERVICE</div><div style={{fontWeight:800, fontSize:'1.1rem'}}>Nov 20</div></div>
          </div>
        </div>

        {/* RIGHT COLUMN: HEALTH & ALERTS */}
        <div style={{display:'flex', flexDirection:'column', gap: 24}}>
          
          {/* Health Score Card */}
          <div className="cust-card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 30px'}}>
             <div style={{position:'relative', width: 100, height: 100}}>
                <Doughnut data={healthData} options={{cutout: '85%', plugins:{tooltip:{enabled:false}, legend:{display:false}}}} />
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', textAlign:'center'}}>
                   <div style={{fontSize:'1.2rem', fontWeight:800, color:'#10b981'}}>85%</div>
                </div>
             </div>
             <div style={{flex:1, marginLeft: 24}}>
                <h3 style={{margin:0, fontSize:'1.1rem'}}>Vehicle Health</h3>
                <p style={{margin:'4px 0 12px', fontSize:'0.85rem', color:'#64748b'}}>Running smoothly. 3 minor items.</p>
                <button onClick={() => setReportOpen(true)} style={{background:'#f1f5f9', border:'none', padding:'8px 16px', borderRadius:8, fontWeight:600, fontSize:'0.8rem', cursor:'pointer', display:'flex', alignItems:'center', gap:6}}>
                  <FiFileText /> View Full Report
                </button>
             </div>
          </div>

          {/* Active Alerts Card */}
          <div className="cust-card" style={{flex:1, display:'flex', flexDirection:'column'}}>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
                <h3 style={{margin:0, fontSize:'1rem'}}>Active Alerts</h3>
                <span style={{background:'#fee2e2', color:'#ef4444', fontSize:'0.7rem', padding:'2px 8px', borderRadius:4, fontWeight:700}}>Attention Needed</span>
             </div>
             
             <div style={{display:'flex', flexDirection:'column', gap:12, flex:1}}>
                {issuesList.map(issue => (
                  <div key={issue.id} style={{display:'flex', alignItems:'center', gap:12, paddingBottom:12, borderBottom:'1px solid #f1f5f9'}}>
                     <div style={{width:8, height:8, borderRadius:'50%', background: issue.critical ? '#ef4444' : '#fbbf24', boxShadow: issue.critical ? '0 0 0 2px #fee2e2' : 'none'}} />
                     <span style={{flex:1, fontWeight:600, fontSize:'0.9rem', color: issue.critical ? '#1e293b' : '#475569'}}>{issue.title}</span>
                     <FiActivity size={16} color="#cbd5e1"/>
                  </div>
                ))}
             </div>

             <button onClick={() => setView('booking')} style={{marginTop:20, background:'#ef4444', color:'white', border:'none', padding:'12px', borderRadius:8, fontWeight:700, cursor:'pointer', width:'100%'}}>
               Schedule Service
             </button>
          </div>

        </div>
      </div>

      {/* FULL INSPECTION REPORT MODAL */}
      <Modal isOpen={reportOpen} onClose={() => setReportOpen(false)} title="Health Inspection Report">
         <div style={{display:'flex', flexDirection:'column', gap:20}}>
            <div style={{fontSize:'0.85rem', color:'#64748b', paddingBottom:12, borderBottom:'1px dashed #e2e8f0'}}>
               <strong>Inspection ID:</strong> #CHK-9921 • <strong>Date:</strong> Today, 09:00 AM
            </div>

            {Object.entries(fullInspectionReport).map(([category, items]) => (
              <div key={category} style={{background:'#f8fafc', padding:16, borderRadius:12}}>
                 <h4 style={{margin:'0 0 10px 0', fontSize:'0.8rem', textTransform:'uppercase', color:'#94a3b8', fontWeight:700, letterSpacing:0.5}}>{category}</h4>
                 <div style={{display:'flex', flexDirection:'column', gap:8}}>
                    {items.map((item, idx) => (
                       <div key={idx} style={{display:'flex', justifyContent:'space-between', fontSize:'0.9rem'}}>
                          <span style={{fontWeight:500, color:'#334155'}}>{item.item}</span>
                          <span style={{fontWeight:700, color: item.color === 'green' ? '#10b981' : item.color === 'red' ? '#ef4444' : '#f59e0b'}}>{item.status}</span>
                       </div>
                    ))}
                 </div>
              </div>
            ))}
            
            <button style={{background:'#111827', color:'white', border:'none', padding:'14px', borderRadius:10, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor:'pointer', marginTop:10}}>
               <FiDownload /> Download Report PDF
            </button>
         </div>
      </Modal>

    </div>
  );
}
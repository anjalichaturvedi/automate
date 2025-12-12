// src/components/Vehicles.jsx
import React, { useState } from "react";
import { FiPhone, FiUnlock, FiLock, FiCpu, FiX, FiActivity, FiMapPin, FiBattery } from "react-icons/fi";
import "../styles/dashboard.css";

export default function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // --- MOCK DATA ---
  const stats = [
    { label: "Total Vehicles", value: "42", sub: "On premise", color: "#3b82f6" },
    { label: "In Service", value: "28", sub: "Active Jobs", color: "#ef4444" },
    { label: "Ready for Pickup", value: "14", sub: "Washing Done", color: "#10b981" },
  ];

  const vehicles = [
    {
      id: 1, model: "Mahindra XUV700", plate: "DL 7C 1234", customer: "Amit Sharma", fuel: "Diesel",
      lastService: "Nov 20, 2024", est: "₹ 8,400",
      img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      locked: true, status: "In Service", statusColor: 'bg-orange',
      vin: "MA123XX9988", mileage: "12,400 km", battery: "Good (92%)", tire: "32 psi"
    },
    {
      id: 2, model: "Hyundai Creta", plate: "UP 16 Z 9988", customer: "Priya Singh", fuel: "Petrol",
      lastService: "Oct 12, 2024", est: "₹ 4,200",
      img: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/mob/cretagalleryb1.jpg",
      locked: false, status: "Diagnosis", statusColor: 'bg-blue',
      vin: "HYU998XX112", mileage: "8,200 km", battery: "Weak (45%)", tire: "30 psi"
    },
    {
      id: 3, model: "Tata Nexon", plate: "HR 26 DQ 5500", customer: "Rahul Verma", fuel: "EV",
      lastService: "Dec 01, 2024", est: "₹ 1,500",
      img: "https://s7ap1.scene7.com/is/image/tatapassenger/nexon-ev-2025all-new-digital-design-new?$TT-614-400-D$&fit=crop&fmt=avif-alpha&wid=614&hei=400",
      locked: true, status: "Ready", statusColor: 'bg-green',
      vin: "TATAVV2233", mileage: "15,100 km", battery: "Good (98%)", tire: "33 psi"
    },
     {
      id: 4, model: "Kia Seltos", plate: "DL 9C AB 7777", customer: "Sneha Gupta", fuel: "Diesel",
      lastService: "Sep 15, 2024", est: "₹ 12,000",
      img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      locked: true, status: "Repair", statusColor: 'bg-red',
      vin: "KIA7788XX99", mileage: "22,450 km", battery: "Good (88%)", tire: "31 psi"
    },
  ];

  // Mock Timeline Data
  const updates = [
    { time: "Just now", msg: "Vehicle Door Opened", sub: "Detected by Shop Floor Sensor 4" },
    { time: "12:45 PM", msg: "OBD Scan Completed", sub: "3 Fault Codes Found" },
    { time: "11:30 AM", msg: "Vehicle Entered Bay 2", sub: "Assigned to Mechanic RK" },
    { time: "09:15 AM", msg: "Check-in Completed", sub: "Customer: Amit Sharma" },
  ];

  return (
    <div className="dash">
      
      {/* 1. TOP STATS */}
      <div className="v-stats-row">
        {stats.map((stat, i) => (
          <div key={i} className="card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="card-subtitle">{stat.label}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, margin: '8px 0' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: stat.color, fontWeight: 700 }}>{stat.sub}</div>
            </div>
            <div style={{ 
              width: 56, height: 56, borderRadius: 12, 
              background: stat.color + '15', color: stat.color, 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' 
            }}>
              <FiCpu />
            </div>
          </div>
        ))}
      </div>

      {/* 2. VEHICLE GRID */}
      <div>
        <div className="card-title" style={{ marginBottom: 20 }}>All Vehicles</div>
        
        <div className="vehicle-grid">
          {vehicles.map((v) => (
            <div key={v.id} className="vehicle-card" onClick={() => setSelectedVehicle(v)} style={{ cursor: 'pointer' }}>
              
              <div className="v-img-container">
                <img src={v.img} alt={v.model} className="v-img" />
                <div className="v-status-pill">
                  <div className={`v-status-dot ${v.statusColor}`} />
                  {v.status}
                </div>
              </div>

              <div className="v-content">
                <div className="v-header">
                  <div>
                    <div className="v-model">{v.model}</div>
                    <span className="v-plate">{v.plate}</span>
                  </div>
                  <span className="v-fuel-badge">{v.fuel}</span>
                </div>

                <div className="v-customer-row">
                  <div className="v-avatar">{v.customer.charAt(0)}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{v.customer}</div>
                </div>

                <div className="v-info-grid">
                  <div className="v-info-item">
                    <span className="v-label">Last Service</span>
                    <span className="v-val">{v.lastService}</span>
                  </div>
                  <div className="v-info-item">
                    <span className="v-label">Estimated</span>
                    <span className="v-val">{v.est}</span>
                  </div>
                </div>

                <div className="v-actions">
                  <button className="btn-lock" onClick={(e) => e.stopPropagation()}>
                    {v.locked ? <FiLock /> : <FiUnlock />}
                  </button>
                  <button className="btn-call" onClick={(e) => e.stopPropagation()}>
                    <FiPhone /> Call Customer
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DETAIL MODAL (Overlay) */}
      {selectedVehicle && (
        <div className="v-modal-overlay" onClick={() => setSelectedVehicle(null)}>
          <div className="v-detail-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="v-modal-header">
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedVehicle.model}</div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 4 }}>
                  <span className="v-plate">{selectedVehicle.plate}</span>
                  <span className="v-status-pill" style={{ position: 'static', boxShadow: 'none', background: '#f3f4f6' }}>
                    <div className={`v-status-dot ${selectedVehicle.statusColor}`} /> {selectedVehicle.status}
                  </span>
                </div>
              </div>
              <button className="btn-close" onClick={() => setSelectedVehicle(null)}><FiX /></button>
            </div>

            {/* Modal Body */}
            <div className="v-modal-body">
              
              {/* Left Sidebar */}
              <div className="v-modal-sidebar">
                <img src={selectedVehicle.img} alt="Car" style={{ width: '100%', borderRadius: 16, height: 180, objectFit: 'cover' }} />
                
                <div className="telemetry-box">
                  <div style={{ marginBottom: 16, display:'flex', alignItems:'center', gap:8, fontWeight:700 }}>
                    <FiActivity color="#ef4444"/> Live Telemetry
                  </div>
                  <div className="t-row"><span className="t-label">Battery Health</span> <span className="t-val">{selectedVehicle.battery}</span></div>
                  <div className="t-row"><span className="t-label">Tire Pressure</span> <span className="t-val">{selectedVehicle.tire}</span></div>
                  <div className="t-row"><span className="t-label">Fuel / Range</span> <span className="t-val">120 km</span></div>
                </div>

                <div className="telemetry-box">
                  <div style={{ marginBottom: 16, display:'flex', alignItems:'center', gap:8, fontWeight:700 }}>
                    <FiMapPin color="#3b82f6"/> Vehicle Details
                  </div>
                  <div className="t-row"><span className="t-label">VIN</span> <span className="t-val" style={{fontSize:'0.9rem'}}>{selectedVehicle.vin}</span></div>
                  <div className="t-row"><span className="t-label">Mileage</span> <span className="t-val">{selectedVehicle.mileage}</span></div>
                </div>
              </div>

              {/* Right Content: Live Updates */}
              <div className="timeline-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Live Updates</div>
                  <div className="live-indicator"><div className="pulse-dot"/> LIVE CONNECTION</div>
                </div>

                <div className="timeline-list">
                  {updates.map((u, i) => (
                    <div key={i} className={`timeline-item ${i === 0 ? 'latest' : ''}`}>
                      <div className="tl-time">{u.time}</div>
                      <div className="tl-msg">{u.msg}</div>
                      <div className="tl-sub">{u.sub}</div>
                    </div>
                  ))}
                  <div className="timeline-item">
                     <div className="tl-time">Yesterday</div>
                     <div className="tl-msg">Appointment Scheduled</div>
                  </div>
                </div>
                
                <div style={{ marginTop: 'auto', paddingTop: 20, display:'flex', gap: 10 }}>
                   <button className="btn-call" style={{ flex: 1, background: '#ef4444' }}>Stop Engine</button>
                   <button className="btn-call" style={{ flex: 1 }}>Flash Lights</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
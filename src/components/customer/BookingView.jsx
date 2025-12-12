import React, { useState } from "react";
import { FiCalendar, FiClock, FiCheckCircle, FiTool, FiChevronRight, FiCreditCard } from "react-icons/fi";

export default function BookingView() {
  const [step, setStep] = useState(1); // 1: Select, 2: Confirmed
  const [serviceType, setServiceType] = useState("general");
  const [selectedDate, setSelectedDate] = useState(16);
  const [selectedSlot, setSelectedSlot] = useState("10:00");

  // --- MOCK DATA ---
  const services = [
    { id: "general", label: "Periodic Service", price: 5499, desc: "Oil change, filters, 40pt check" },
    { id: "ac", label: "AC Disinfection", price: 2199, desc: "Gas top-up, vent cleaning" },
    { id: "breakdown", label: "Diagnostic Check", price: 999, desc: "Engine scanning & troubleshooting" },
    { id: "wash", label: "Deep Spa Wash", price: 1499, desc: "Interior & Exterior detailing" },
  ];

  const timeSlots = ["09:00", "10:00", "11:30", "14:00", "16:00"];
  
  const currentService = services.find(s => s.id === serviceType);
  const total = currentService.price + 180; // Adding fake tax

  const handleBook = () => {
    // Simulate API call
    setTimeout(() => setStep(2), 1500);
  };

  if (step === 2) {
    return (
      <div className="cust-card" style={{ textAlign: 'center', padding: '60px 20px', maxWidth: 600, margin: '40px auto' }}>
        <div style={{ width: 80, height: 80, background: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <FiCheckCircle size={40} color="#10b981" />
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', marginBottom: 10 }}>Booking Confirmed!</h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Your appointment for <strong>{currentService.label}</strong> is set for <strong>Nov {selectedDate} at {selectedSlot}</strong>.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="btn-alert-action" onClick={() => window.location.reload()}>Track Status</button>
          <button style={{ padding: '10px 20px', background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Download Receipt</button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-section">
      
      {/* LEFT COLUMN: SELECTION */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        {/* 1. Service Type */}
        <div className="cust-card">
          <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ background: '#fee2e2', color: '#ef4444', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>1</span>
            Select Service
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 16 }}>
            {services.map(s => (
              <div 
                key={s.id}
                onClick={() => setServiceType(s.id)}
                style={{
                  padding: 16, borderRadius: 12, cursor: 'pointer', transition: '0.2s',
                  border: serviceType === s.id ? '2px solid #ef4444' : '1px solid #e2e8f0',
                  background: serviceType === s.id ? '#fef2f2' : 'white'
                }}
              >
                <div style={{ fontWeight: 700, color: serviceType === s.id ? '#991b1b' : '#1e293b' }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 4 }}>{s.desc}</div>
                <div style={{ fontWeight: 800, marginTop: 12 }}>₹ {s.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Date & Time */}
        <div className="cust-card">
          <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ background: '#fee2e2', color: '#ef4444', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>2</span>
            Schedule
          </h3>
          
          <div style={{ marginTop: 16 }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', marginBottom: 8, display: 'block' }}>NOVEMBER 2025</label>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
              {[14, 15, 16, 17, 18, 19, 20].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDate(d)}
                  style={{
                    minWidth: 60, padding: '12px 0', borderRadius: 12, border: 'none', cursor: 'pointer',
                    background: selectedDate === d ? '#111827' : '#f1f5f9',
                    color: selectedDate === d ? 'white' : '#64748b'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 600 }}>NOV</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{d}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', marginBottom: 8, display: 'block' }}>AVAILABLE SLOTS</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {timeSlots.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedSlot(t)}
                  style={{
                    padding: '8px 16px', borderRadius: 20, border: '1px solid', cursor: 'pointer', fontWeight: 600,
                    borderColor: selectedSlot === t ? '#ef4444' : '#e2e8f0',
                    background: selectedSlot === t ? '#fef2f2' : 'white',
                    color: selectedSlot === t ? '#ef4444' : '#64748b'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: SUMMARY */}
      <div className="right-col">
        <div className="cust-card" style={{ position: 'sticky', top: 90 }}>
          <h3 style={{ marginTop: 0 }}>Order Summary</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 16, borderBottom: '1px solid #f1f5f9', marginBottom: 16 }}>
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 6 }} alt="" />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Mahindra XUV700</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>DL 7C 1234</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem' }}>
            <span style={{ color: '#64748b' }}>Service Total</span>
            <span style={{ fontWeight: 600 }}>₹ {currentService.price}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem' }}>
            <span style={{ color: '#64748b' }}>Taxes & Fees</span>
            <span style={{ fontWeight: 600 }}>₹ 180</span>
          </div>
          
          <div style={{ borderTop: '1px dashed #e2e8f0', margin: '16px 0' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ fontWeight: 700 }}>Total Pay</span>
            <span style={{ fontWeight: 800, fontSize: '1.4rem' }}>₹ {total}</span>
          </div>

          <button 
            className="btn-alert-action" 
            style={{ width: '100%', background: '#111827', display: 'flex', justifyContent: 'center', gap: 8, padding: 14 }}
            onClick={handleBook}
          >
            Confirm Appointment <FiChevronRight />
          </button>
          
          <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <FiCreditCard /> Pay at Workshop available
          </div>

        </div>
      </div>

    </div>
  );
}
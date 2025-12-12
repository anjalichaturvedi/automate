// src/components/Inventory.jsx
import React from "react";
import { FiPlus, FiBox, FiAlertTriangle, FiTrendingUp, FiCpu, FiMoreVertical } from "react-icons/fi";
import "../styles/inventory.css";

export default function Inventory() {
  
  // --- MOCK DATA ---
  const stats = [
    { label: "Total Parts Value", value: "₹ 12.5 L", trend: "+5% vs last mo", color: "#10b981" },
    { label: "Low Stock Items", value: "8", trend: "3 Critical", color: "#ef4444" },
    { label: "Predicted Wastage", value: "-12%", trend: "AI Optimization", color: "#3b82f6" },
    { label: "Pending Orders", value: "4", trend: "Arriving Tomorrow", color: "#f59e0b" },
  ];

  const inventory = [
    { 
      id: 1, name: "Brake Pads (Front)", sku: "BP-XUV-001", model: "XUV700, Scorpio", 
      stock: 45, status: "In Stock", statusClass: "s-ok", 
      ai: "Normal Demand", aiColor: "#6b7280" 
    },
    { 
      id: 2, name: "Alternator 12V", sku: "ALT-GEN-992", model: "XUV700", 
      stock: 2, status: "Critical", statusClass: "s-crit", 
      ai: "High Failure Rate Detected", aiColor: "#ef4444" 
    },
    { 
      id: 3, name: "Cabin Air Filter", sku: "FLT-AC-220", model: "Creta, Seltos", 
      stock: 12, status: "Low Stock", statusClass: "s-low", 
      ai: "Seasonal Spike (Summer)", aiColor: "#f59e0b" 
    },
    { 
      id: 4, name: "Clutch Assembly", sku: "CLU-TATA-55", model: "Nexon", 
      stock: 8, status: "In Stock", statusClass: "s-ok", 
      ai: "Stable", aiColor: "#6b7280" 
    },
    { 
      id: 5, name: "Engine Oil (Synth)", sku: "OIL-5W30-L", model: "Universal", 
      stock: 120, status: "In Stock", statusClass: "s-ok", 
      ai: "Reorder in 4 days", aiColor: "#3b82f6" 
    },
  ];

  return (
    <div className="inv-layout">
      
      {/* Header */}
      <div className="inv-header">
        <div>
          <div className="inv-title">Parts Inventory</div>
          <div className="inv-sub">AI-Driven Stock Management</div>
        </div>
        <button className="btn-order">
          <FiPlus /> Create Order
        </button>
      </div>

      {/* Stats Row */}
      <div className="inv-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="st-label">{s.label}</div>
            <div className="st-val">{s.value}</div>
            <div className="st-trend" style={{ color: s.color }}>{s.trend}</div>
          </div>
        ))}
      </div>

      {/* Main Table */}
      <div className="inv-table-card">
        <table className="inv-table">
          <thead>
            <tr>
              <th>Part Details</th>
              <th>Compatible Models</th>
              <th>Stock Level</th>
              <th>AI Demand Prediction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="part-name">{item.name}</span>
                  <span className="part-sku">{item.sku}</span>
                </td>
                <td>{item.model}</td>
                <td>
                  <span className={`stock-badge ${item.statusClass}`}>
                    {item.stock} Units • {item.status}
                  </span>
                </td>
                <td>
                  <div className="ai-pred" style={{ color: item.aiColor }}>
                    <div className="ai-icon"><FiCpu size={14} color={item.aiColor}/></div>
                    {item.ai}
                  </div>
                </td>
                <td>
                  <div className="action-icon"><FiMoreVertical /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
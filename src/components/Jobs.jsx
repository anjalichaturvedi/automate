// src/components/Jobs.jsx
import React from "react";
import { FiPlus, FiClock, FiMoreHorizontal } from "react-icons/fi";
import "../styles/jobs.css";

// MOCK DATA
const JOBS_DATA = [
  { id: "#J-9921", model: "Hyundai Creta", plate: "DL 3C 1234", owner: "Amit Sharma", status: "Pending", priority: "High", mechanic: "RK", time: "2h ago" },
  { id: "#J-9922", model: "Mahindra XUV700", plate: "HR 26 DQ 5500", owner: "Rahul Verma", status: "Diagnosis", priority: "Medium", mechanic: "JS", time: "4h ago" },
  { id: "#J-9923", model: "Tata Nexon", plate: "UP 16 Z 9988", owner: "Priya Singh", status: "Repair", priority: "High", mechanic: "AM", time: "1d ago" },
  { id: "#J-9924", model: "Kia Seltos", plate: "DL 9C AB 7777", owner: "Sneha Gupta", status: "QC / Ready", priority: "Medium", mechanic: "RK", time: "Just now" },
  { id: "#J-9925", model: "Honda City", plate: "DL 11 CA 1111", owner: "Vikram Malhotra", status: "Pending", priority: "Medium", mechanic: "--", time: "10m ago" },
  { id: "#J-9926", model: "Toyota Fortuner", plate: "HR 55 X 0001", owner: "Arjun Das", status: "Diagnosis", priority: "High", mechanic: "JS", time: "30m ago" },
];

const COLUMNS = [
  { title: "Pending", status: "Pending", color: "#f59e0b" },
  { title: "In Diagnosis", status: "Diagnosis", color: "#3b82f6" },
  { title: "In Repair", status: "Repair", color: "#ef4444" },
  { title: "QC / Ready", status: "QC / Ready", color: "#10b981" },
];

export default function Jobs() {
  
  // Helper to filter jobs per column
  const getJobsByStatus = (status) => JOBS_DATA.filter(j => j.status === status);

  return (
    <div className="jobs-layout">
      
      {/* Header */}
      <div className="jobs-header">
        <div>
          <div className="jobs-title">Jobs Board</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Track vehicle progress across the floor</div>
        </div>
        <button className="btn-new-job">
          <FiPlus size={18} /> New Job Card
        </button>
      </div>

      {/* Kanban Board */}
      <div className="kanban-board">
        {COLUMNS.map((col) => {
          const jobs = getJobsByStatus(col.status);
          
          return (
            <div key={col.title} className="kanban-col">
              {/* Column Header */}
              <div className="col-header">
                <div className="col-title">
                  <span className="col-dot" style={{ background: col.color }} />
                  {col.title}
                </div>
                <span className="col-count">{jobs.length}</span>
              </div>

              {/* Job Cards */}
              {jobs.map((job) => (
                <div key={job.id} className="job-card">
                  
                  <div className="job-top">
                    <span className="job-id">{job.id}</span>
                    <span className={`priority-badge ${job.priority === 'High' ? 'p-high' : 'p-med'}`}>
                      {job.priority}
                    </span>
                  </div>

                  <div className="job-info">
                    <h4>{job.model}</h4>
                    <p>{job.owner} • {job.plate}</p>
                  </div>

                  <div className="job-footer">
                    <div className="mechanic-face" title={`Mechanic: ${job.mechanic}`}>
                      {job.mechanic}
                    </div>
                    <div className="job-time">
                      <FiClock size={12} /> {job.time}
                    </div>
                  </div>

                </div>
              ))}
              
              {/* Empty State for column */}
              {jobs.length === 0 && (
                <div style={{ padding: 20, textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem', border: '1px dashed #e5e7eb', borderRadius: 12 }}>
                  No jobs here
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
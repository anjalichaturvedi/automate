// src/flows/CustomerFlow.jsx
import React, { useState } from "react";
import {
  FiHome,
  FiActivity,
  FiCalendar,
  FiBell,
  FiUser,
  FiMessageSquare,
  FiX,
  FiAlertTriangle,
} from "react-icons/fi";
import DashboardView from "../components/customer/DashboardView";
import ServiceTracker from "../components/customer/ServiceTracker";
import BookingView from "../components/customer/BookingView";
import AIChat from "../components/customer/AIChat";
import "../styles/customer.css";

export default function CustomerFlow() {
  const [view, setView] = useState("dashboard"); // dashboard, tracker, booking
  const [alertVisible, setAlertVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Demo: simulate a predictive alert
  const triggerDemoAlert = () => {
    setAlertVisible(true);
    // auto-hide after 6s
    setTimeout(() => setAlertVisible(false), 6000);
  };

  return (
    <div className="cust-layout">
      {/* NAVBAR */}
      <header className="cust-nav" role="banner">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div className="cust-brand">AutoMate</div>
          <nav className="cust-links" aria-label="Primary">
            <button
              className={`nav-link ${view === "dashboard" ? "active" : ""}`}
              onClick={() => setView("dashboard")}
            >
              Home
            </button>
            <button
              className={`nav-link ${view === "tracker" ? "active" : ""}`}
              onClick={() => setView("tracker")}
            >
              Tracker
            </button>
            <button
              className={`nav-link ${view === "booking" ? "active" : ""}`}
              onClick={() => setView("booking")}
            >
              Booking
            </button>
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="icon-btn-simple"
            aria-label="Notifications"
            onClick={() => setAlertVisible((s) => !s)}
            title="Notifications"
          >
            <FiBell />
            <span className="badge-dot" />
          </button>

          <div className="cust-profile" title="Profile">
            <div className="profile-initials">AG</div>
            <div className="profile-name">Amit Gupta</div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="cust-container">
        {/* Alert Banner */}
        {alertVisible && (
          <div className="alert-banner" role="status" aria-live="polite">
            <div className="alert-left">
              <div className="alert-icon-box">
                <FiAlertTriangle color="#ef4444" size={20} />
              </div>
              <div>
                <h4>Critical Battery Alert</h4>
                <p>
                  AI detected a voltage drop. Risk of failure within 48 hours.
                </p>
                <div style={{ marginTop: 8 }}>
                  <button
                    className="btn-alert-action"
                    onClick={() => {
                      setAlertVisible(false);
                      setView("booking");
                    }}
                  >
                    Book Priority Check
                  </button>
                  <button
                    className="btn-close-alert"
                    style={{ marginLeft: 12 }}
                    onClick={() => setAlertVisible(false)}
                    aria-label="Dismiss alert"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
            <div className="alert-actions" aria-hidden>
              {/* reserved for additional CTA */}
            </div>
          </div>
        )}

        {/* Main content area */}
        <div className="view-wrapper">
          {view === "dashboard" && (
            <DashboardView onTriggerDemo={triggerDemoAlert} />
          )}
          {view === "tracker" && <ServiceTracker />}
          {view === "booking" && <BookingView />}
        </div>
      </main>

      {/* Chat FAB (desktop + mobile) */}
      <button
        className="chat-fab"
        aria-label="Open assistant"
        title="Ask AutoMate"
        onClick={() => setChatOpen(true)}
      >
        <FiMessageSquare />
      </button>

      {/* AI Chat overlay */}
      {chatOpen && <AIChat onClose={() => setChatOpen(false)} />}

      {/* MOBILE bottom nav (uses CSS .mobile-bottom-nav) */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <button
          className={`nav-btn ${view === "dashboard" ? "active" : ""}`}
          onClick={() => setView("dashboard")}
        >
          <FiHome /> <span style={{ fontSize: 11 }}>Home</span>
        </button>
        <button
          className={`nav-btn ${view === "tracker" ? "active" : ""}`}
          onClick={() => setView("tracker")}
        >
          <FiActivity /> <span style={{ fontSize: 11 }}>Tracker</span>
        </button>
        <button
          className={`nav-btn ${view === "booking" ? "active" : ""}`}
          onClick={() => setView("booking")}
        >
          <FiCalendar /> <span style={{ fontSize: 11 }}>Book</span>
        </button>
        <button className="nav-btn" onClick={() => alert("Profile coming soon")}>
          <FiUser /> <span style={{ fontSize: 11 }}>Profile</span>
        </button>
      </nav>
    </div>
  );
}

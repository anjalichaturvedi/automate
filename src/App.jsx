import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import WorkshopFlow from "./flows/WorkshopFlow";
import CustomerApp from "./flows/CustomerFlow"; 
import OEMFlow from "./flows/OEMFlow";
import "./styles/layout-fix.css"; 

export default function App() {
  const [currentView, setCurrentView] = useState(null); 

  const renderFlow = () => {
    switch (currentView) {
      case "WORKSHOP":
        return <WorkshopFlow />;
      case "CUSTOMER":
        return <CustomerApp />;
      case "OEM":
        return <OEMFlow />;
      default:
        return <LandingPage onSelect={setCurrentView} />;
    }
  };

  return (
    <div>
      {currentView && (
        <button className="back-home-btn" onClick={() => setCurrentView(null)}>
          ← Exit {currentView}
        </button>
      )}
      
      {renderFlow()}
    </div>
  );
}
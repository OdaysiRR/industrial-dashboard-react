import React, { useState, useEffect } from 'react';
import './IndustrialDashboard.css'; 

const IndustrialDashboard = () => {
  const [pressure, setPressure] = useState(120);
  const [status, setStatus] = useState("Running");

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
      setPressure(newValue);
      
      if (newValue > 140) {
        setStatus("CRITICAL ALERT");
      } else {
        setStatus("Running");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Determinar la clase de alerta según el estado
  const statusClass = status === "Running" ? "status-ok" : "status-alert";

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Oil Production Monitor</h1>
        <div className={`status-badge ${statusClass}`}>{status}</div>
      </header>

      <main className="dashboard-grid">
        <div className="card">
          <h3>Current Pressure</h3>
          <div className="pressure-value">
            {pressure} <span className="unit">PSI</span>
          </div>
          <div className="progress-container">
            <div 
              className={`progress-bar ${statusClass}`} 
              style={{ width: `${(pressure / 150) * 100}%` }}
            ></div>
          </div>
          <p className="description">Scale: 0 - 150 PSI</p>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>* Simulation active: React State & Effects tracking SCADA logic.</p>
      </footer>
    </div>
  );
};

export default IndustrialDashboard;
import React from 'react';
import { FaBell, FaCheckCircle } from 'react-icons/fa';
import './Alerts.css';

const Alerts = ({ alerts }: { alerts: string[] }) => {
  return (
    <div className="alerts-container">
      <h2>Alerts</h2>
      {alerts.length === 0 ? (
        <div className="no-alerts">
          <FaCheckCircle className="icon-ok" />
          <span>No alerts</span>
        </div>
      ) : (
        <ul className="alerts-list">
          {alerts.map((alert, index) => (
            <li key={index}>
              <FaBell className="icon-alert" />
              <span>{alert}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts;

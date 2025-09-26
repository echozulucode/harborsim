import React from 'react';
import Alerts from './Alerts';
import HealthStatus from './HealthStatus';
import DeviceSignalCard from './DeviceSignalCard';
import './MonitoringView.css';

// Sample Data
const sampleAlerts = [
  'Device "Crane-A" offline',
  'High latency detected on "Sensor-3"',
];

const sampleHealthCategories = [
  {
    name: 'API Services',
    items: [
      { name: 'Authentication Service', isOk: true },
      { name: 'Data Ingestion API', isOk: true },
    ],
  },
  {
    name: 'Backend Processes',
    items: [
      { name: 'Data Processing Pipeline', isOk: true },
      { name: 'Alerting Engine', isOk: false },
    ],
  },
];

const sampleDevices = [
  {
    groupName: 'Cranes',
    signals: [
      { name: 'Crane-A Load', value: 45, unit: 'tons' },
      { name: 'Crane-A Hoist Speed', value: 2.5, unit: 'm/s' },
      { name: 'Crane-B Load', value: 62, unit: 'tons' },
    ],
  },
  {
    groupName: 'Sensors',
    signals: [
      { name: 'Sensor-1 Temperature', value: 25, unit: '°C' },
      { name: 'Sensor-2 Humidity', value: 60, unit: '%' },
      { name: 'Sensor-3 Pressure', value: 1012, unit: 'hPa' },
    ],
  },
];

const MonitoringView = () => {
  return (
    <div className="monitoring-view">
      <header className="monitoring-header">
        <h1>Monitoring Dashboard</h1>
      </header>
      <div className="monitoring-content">
        <div className="status-section">
          <Alerts alerts={sampleAlerts} />
          <HealthStatus categories={sampleHealthCategories} />
        </div>
        <div className="device-signals">
          <h2>Device Signals</h2>
          {sampleDevices.map((deviceGroup) => (
            <div key={deviceGroup.groupName} className="device-group">
              <h3>{deviceGroup.groupName}</h3>
              <div className="signal-cards">
                {deviceGroup.signals.map((signal) => (
                  <DeviceSignalCard key={signal.name} signal={signal} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonitoringView;

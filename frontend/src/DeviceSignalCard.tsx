import React from 'react';
import './DeviceSignalCard.css';

type DeviceSignal = {
  name: string;
  value: string | number;
  unit: string;
};

const DeviceSignalCard = ({ signal }: { signal: DeviceSignal }) => {
  return (
    <div className="device-signal-card">
      <h4>{signal.name}</h4>
      <p>
        {signal.value} {signal.unit}
      </p>
    </div>
  );
};

export default DeviceSignalCard;

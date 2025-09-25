import { Handle, Position } from '@xyflow/react';

const MonitorNode = ({ data }) => {
  return (
    <div style={{ border: '1p solid #ddd', padding: '10px', borderRadius: '5px', background: '#fff' }}>
      <div>Monitor</div>
      <Handle type="target" position={Position.Left} id="input" />
    </div>
  );
};

export default MonitorNode;

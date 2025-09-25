import { Handle, Position } from '@xyflow/react';

const SimulatorNode = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', background: '#fff' }}>
      <div>Simulator</div>
      <Handle type="target" position={Position.Left} id="run" style={{ top: '20%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', left: '-40px', top: '20%' }}>Run</div>
      <Handle type="target" position={Position.Left} id="stop" style={{ top: '40%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', left: '-40px', top: '40%' }}>Stop</div>
      <Handle type="target" position={Position.Left} id="fault-command" style={{ top: '60%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', left: '-65px', top: '60%' }}>Fault Cmd</div>
      <Handle type="target" position={Position.Left} id="frequency-reference" style={{ top: '80%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', left: '-80px', top: '80%' }}>Freq Ref</div>

      <Handle type="source" position={Position.Right} id="running" style={{ top: '33%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', right: '-50px', top: '33%' }}>Running</div>
      <Handle type="source" position={Position.Right} id="faults" style={{ top: '66%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', right: '-45px', top: '66%' }}>Faults</div>
      <Handle type="source" position={Position.Right} id="output-frequency" style={{ top: '99%' }} />
      <div style={{ fontSize: '10px', position: 'absolute', right: '-80px', top: '99%' }}>Output Freq</div>
    </div>
  );
};

export default SimulatorNode;

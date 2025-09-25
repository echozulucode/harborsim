import { Handle, Position } from '@xyflow/react';

const CommInputNode = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', background: '#fff' }}>
      <div>Comm Input</div>
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
};

export default CommInputNode;

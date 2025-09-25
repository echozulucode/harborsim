import { useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CommInputNode from './CommInputNode';
import SimulatorNode from './SimulatorNode';
import MonitorNode from './MonitorNode';

const nodeTypes = {
  commInput: CommInputNode,
  simulator: SimulatorNode,
  monitor: MonitorNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'commInput',
    data: { label: 'Comm Input' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'simulator',
    data: { label: 'Simulator' },
    position: { x: 500, y: 5 },
  },
  {
    id: '3',
    type: 'monitor',
    data: { label: 'Monitor' },
    position: { x: 750, y: 5 },
  },
];

const ConfigurationView = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: 'calc(100vw - 50px)', height: 'calc(100vh - 25px)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ConfigurationView;

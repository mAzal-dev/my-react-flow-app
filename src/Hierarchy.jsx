import React, { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import dagre from 'dagre';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode'; // Import the custom node component

// Constants for node size and position
const nodeWidth = 150;
const nodeHeight = 100;
const initialPosition = { x: 0, y: 0 }; // Common initial position

// Add custom horizontal and vertical spacing
const nodeSpacingX = 50;
const nodeSpacingY = 50;

// Function to create nodes
const createNode = (id, name, age, relationship, image) => ({
  id,
  data: { name, age, relationship, image },
  position: initialPosition,
  type: 'custom',
});

const getLayoutedElements = (nodes, edges) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Customize spacing using dagre layout settings
  dagreGraph.setGraph({
    rankdir: 'LR', // Change to left-right layout
    nodesep: nodeSpacingX,
    ranksep: nodeSpacingY,
  });

  // Add nodes to the dagre graph
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  // Add edges to the dagre graph
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Perform layout
  dagre.layout(dagreGraph);

  // Set the position for each node based on the dagre graph output
  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

export default function Hierarchy() {
  const [nodes, setNodes] = useState([
    createNode('1', 'Mom', 45, 'Mother', 'https://via.placeholder.com/50'),
    createNode('2', 'Dad', 48, 'Father', 'https://via.placeholder.com/50'),
  ]);

  const [edges, setEdges] = useState([
    { id: 'e1-2', source: '1', target: '2', type: 'step' }, // Mom to Dad connection
  ]);

  // Automatically calculate the layout
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    nodes,
    edges
  );

  // Define node types for ReactFlow
  const nodeTypes = { custom: CustomNode };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div style={{ height: '100%', width: '100%' }}>
        <ReactFlow
          nodes={layoutedNodes}
          edges={layoutedEdges}
          nodeTypes={nodeTypes} // Pass custom node type
        />
      </div>
    </div>
  );
}

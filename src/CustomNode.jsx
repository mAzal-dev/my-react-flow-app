// CustomNode.jsx
import React from 'react';
import { Handle } from '@xyflow/react'; // Import Handle from React Flow

const CustomNode = ({ data }) => {
  return (
    <div style={nodeStyle}>
      <Handle type="target" position="top" />
      <img
        src={data.image}
        alt={data.name}
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
      <div>
        <strong>{data.name}</strong>
        <div>Age: {data.age}</div>
        <div>Relation: {data.relationship}</div>
      </div>
      <Handle type="source" position="bottom" />
    </div>
  );
};

// Inline styling for the node (you can use CSS or styled-components if preferred)
const nodeStyle = {
  border: '1px solid #777',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
  width: '150px',
  backgroundColor: '#fff',
};

export default CustomNode;

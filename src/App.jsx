import React from 'react';
import Hierarchy from './Hierarchy';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="logo">MySilah</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/canvas" className="active">Family Tree Canvas</a>
        </nav>
      </header>

      {/* Main content */}
      <div className="main-content">
        {/* Left section for Family Tree */}
        <div className="family-tree-section">
          <h2>Family Hierarchy Tree</h2>
          <Hierarchy/>
        </div>

        {/* Right section for member details */}

      </div>
    </div>
  );
}

export default App;

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
        <div className="member-details">
          <h2>Member Details</h2>
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/100"
              alt="John Doe"
              className="profile-img"
            />
            <div className="profile-info">
              <h3>John Doe</h3>
              <p><strong>Born:</strong> January 1, 1950</p>
              <p><strong>Occupation:</strong> Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

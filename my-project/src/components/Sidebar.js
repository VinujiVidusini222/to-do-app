import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Acmny Solutions</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">Dashboard</li>
      </ul>
    </div>
  );
}

export default Sidebar;

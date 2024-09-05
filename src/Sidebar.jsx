import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776;
      </div>
     
      <ul>
        <br />
        <br />
        <li><Link to="/ai-assisting-feature" onClick={toggleSidebar}>AI Assisting Feature</Link></li>
        <li><Link to="/judge-assisting-feature" onClick={toggleSidebar}>Judge Assisting Feature</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
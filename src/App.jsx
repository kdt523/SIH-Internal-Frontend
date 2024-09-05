import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import AIAssistingFeature from './AIAssistingFeature';
import FTAScoreCalculator from './FTAScoreCalculator';
import NCAScoreCalculator from './NCAScoreCalculator';
import NVCAScoreCalculator from './NVCAScoreCalculator';

function JudgeAssistingFeature() {
  return (
    <div className="judge-assisting-feature">
      <FTAScoreCalculator />
      <NCAScoreCalculator />
      <NVCAScoreCalculator />
    </div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/ai-assisting-feature" element={<AIAssistingFeature />} />
            <Route path="/judge-assisting-feature" element={<JudgeAssistingFeature />} />
            <Route path="/" element={<JudgeAssistingFeature />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
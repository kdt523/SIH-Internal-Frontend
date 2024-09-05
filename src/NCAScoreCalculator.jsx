// src/NCAScoreCalculator.jsx
import React, { useState } from 'react';
import './App.css';

function NCAScoreCalculator() {
  const [age, setAge] = useState(23);
  const [pendingCharge, setPendingCharge] = useState(false);
  const [priorMisdemeanor, setPriorMisdemeanor] = useState(false);
  const [priorFelony, setPriorFelony] = useState(false);
  const [priorViolent, setPriorViolent] = useState(0);
  const [priorFTA2Years, setPriorFTA2Years] = useState(0);
  const [priorIncarceration, setPriorIncarceration] = useState(false);
  const [scaledScore, setScaledScore] = useState(null);

  const calculateScore = () => {
    let totalPoints = 0;

    if (age <= 22) totalPoints += 2;
    if (pendingCharge) totalPoints += 3;
    if (priorMisdemeanor) totalPoints += 1;
    if (priorFelony) totalPoints += 1;
    if (priorViolent === 1 || priorViolent === 2) totalPoints += 1;
    if (priorViolent >= 3) totalPoints += 2;
    if (priorFTA2Years === 1) totalPoints += 1;
    if (priorFTA2Years >= 2) totalPoints += 2;
    if (priorIncarceration) totalPoints += 2;

    let score;
    if (totalPoints === 0) score = 1;
    else if (totalPoints <= 2) score = 2;
    else if (totalPoints <= 4) score = 3;
    else if (totalPoints <= 6) score = 4;
    else if (totalPoints <= 8) score = 5;
    else score = 6;

    setScaledScore(score);
  };

  return (
    <div className="form-container">
      <h2>NCA Score Calculator</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateScore(); }}>
        <label>Age at current arrest:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <label>Pending charge at the time of the arrest:</label>
        <input
          type="checkbox"
          checked={pendingCharge}
          onChange={(e) => setPendingCharge(e.target.checked)}
        />
        <label>Prior misdemeanor conviction:</label>
        <input
          type="checkbox"
          checked={priorMisdemeanor}
          onChange={(e) => setPriorMisdemeanor(e.target.checked)}
        />
        <label>Prior felony conviction:</label>
        <input
          type="checkbox"
          checked={priorFelony}
          onChange={(e) => setPriorFelony(e.target.checked)}
        />
        <label>Prior violent conviction:</label>
        <select
          value={priorViolent}
          onChange={(e) => setPriorViolent(parseInt(e.target.value))}
        >
          <option value="0">No</option>
          <option value="1">Yes, 1 or 2</option>
          <option value="3">Yes, 3 or more</option>
        </select>
        <label>Prior failure to appear in the past 2 years:</label>
        <select
          value={priorFTA2Years}
          onChange={(e) => setPriorFTA2Years(parseInt(e.target.value))}
        >
          <option value="0">No</option>
          <option value="1">Yes, just 1</option>
          <option value="2">Yes, 2 or more</option>
        </select>
        <label>Prior sentence to incarceration:</label>
        <input
          type="checkbox"
          checked={priorIncarceration}
          onChange={(e) => setPriorIncarceration(e.target.checked)}
        />
        <button type="submit">Calculate Score</button>
      </form>
      {scaledScore !== null && (
        <div className="result">
          <h3>Scaled Score: {scaledScore}</h3>
          <p>
            {scaledScore <= 2
              ? 'Lower likelihood of being arrested for a new crime during the pretrial period.'
              : 'Higher risk of re-arrest, which may necessitate stricter pretrial supervision or conditions.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default NCAScoreCalculator;
// src/FTAScoreCalculator.jsx
import React, { useState } from 'react';
import './App.css';

function FTAScoreCalculator() {
  const [pendingCharge, setPendingCharge] = useState(false);
  const [priorConviction, setPriorConviction] = useState(false);
  const [priorFTA2Years, setPriorFTA2Years] = useState(0);
  const [priorFTAOlder, setPriorFTAOlder] = useState(false);
  const [scaledScore, setScaledScore] = useState(null);

  const calculateScore = () => {
    let totalPoints = 0;

    if (pendingCharge) totalPoints += 1;
    if (priorConviction) totalPoints += 1;
    if (priorFTA2Years === 1) totalPoints += 2;
    if (priorFTA2Years >= 2) totalPoints += 4;
    if (priorFTAOlder) totalPoints += 1;

    let score;
    switch (totalPoints) {
      case 0:
        score = 1;
        break;
      case 1:
        score = 2;
        break;
      case 2:
        score = 3;
        break;
      case 3:
      case 4:
        score = 4;
        break;
      case 5:
      case 6:
        score = 5;
        break;
      default:
        score = 6;
    }

    setScaledScore(score);
  };

  return (
    <div className="form-container">
      <h2>FTA Score Calculator</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateScore(); }}>
        <table>
          <tbody>
            <tr>
              <td><label>Pending charge at the time of the arrest:</label></td>
              <td>
                <input
                  type="checkbox"
                  checked={pendingCharge}
                  onChange={(e) => setPendingCharge(e.target.checked)}
                />
              </td>
            </tr>
            <tr>
              <td><label>Prior conviction (misdemeanor or felony):</label></td>
              <td>
                <input
                  type="checkbox"
                  checked={priorConviction}
                  onChange={(e) => setPriorConviction(e.target.checked)}
                />
              </td>
            </tr>
            <tr>
              <td><label>Prior failure to appear in the past 2 years:</label></td>
              <td>
                <select
                  value={priorFTA2Years}
                  onChange={(e) => setPriorFTA2Years(parseInt(e.target.value))}
                >
                  <option value="0">No</option>
                  <option value="1">Yes, just 1</option>
                  <option value="2">Yes, 2 or more</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Prior failure to appear older than 2 years:</label></td>
              <td>
                <input
                  type="checkbox"
                  checked={priorFTAOlder}
                  onChange={(e) => setPriorFTAOlder(e.target.checked)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Calculate Score</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {scaledScore !== null && (
        <div className="result">
          <h3>Scaled Score: {scaledScore}</h3>
          <p>
            {scaledScore <= 2
              ? 'Lower likelihood of FTA, suggesting that the individual is more likely to appear in court as required.'
              : 'Higher risk of FTA, indicating that more stringent pretrial conditions may be necessary to ensure court appearance.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default FTAScoreCalculator;
// src/PublicSafetyForm.jsx
import React, { useState } from 'react';

function PublicSafetyForm() {
  const [incidentType, setIncidentType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Incident Type: ${incidentType}\nLocation: ${location}\nDescription: ${description}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Incident Type:</label>
        <input
          type="text"
          value={incidentType}
          onChange={(e) => setIncidentType(e.target.value)}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PublicSafetyForm;
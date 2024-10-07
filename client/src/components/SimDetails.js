import React, { useState } from 'react';
import axios from 'axios';

const SimDetails = () => {
  const [simNumber, setSimNumber] = useState('');
  const [simDetails, setSimDetails] = useState(null);
  const [message, setMessage] = useState('');

  const getSimDetails = async () => {
    try {
      const response = await axios.get(`/api/sim/sim-details/${simNumber}`);
      setSimDetails(response.data);
      setMessage('');
    } catch (error) {
      setMessage('SIM card not found');
    }
  };

  return (
    <div>
      <h3>Get SIM Details</h3>
      <input
        type="text"
        placeholder="SIM Number"
        value={simNumber}
        onChange={(e) => setSimNumber(e.target.value)}
      />
      <button onClick={getSimDetails}>Get Details</button>
      <p>{message}</p>
      {simDetails && (
        <div>
          <p>SIM Number: {simDetails.simNumber}</p>
          <p>Phone Number: {simDetails.phoneNumber}</p>
          <p>Status: {simDetails.status}</p>
          {simDetails.activationDate && <p>Activation Date: {new Date(simDetails.activationDate).toLocaleString()}</p>}
        </div>
      )}
    </div>
  );
};

export default SimDetails;

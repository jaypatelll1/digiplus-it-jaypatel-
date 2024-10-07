import React, { useState } from 'react';
import axios from 'axios';

const ActivateSim = () => {
  const [simNumber, setSimNumber] = useState('');
  const [message, setMessage] = useState('');

  const activateSim = async () => {
    try {
      const response = await axios.post('/api/sim/activate', { simNumber });
      setMessage(response.data.msg);
    } catch (error) {
      setMessage('Error activating SIM card');
    }
  };

  return (
    <div>
      <h3>Activate SIM Card</h3>
      <input
        type="text"
        placeholder="SIM Number"
        value={simNumber}
        onChange={(e) => setSimNumber(e.target.value)}
      />
      <button onClick={activateSim}>Activate SIM</button>
      <p>{message}</p>
    </div>
  );
};

export default ActivateSim;

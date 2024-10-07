import React, { useState } from 'react';
import axios from 'axios';

const DeactivateSim = () => {
  const [simNumber, setSimNumber] = useState('');
  const [message, setMessage] = useState('');

  const deactivateSim = async () => {
    try {
      const response = await axios.post('/api/sim/deactivate', { simNumber });
      setMessage(response.data.msg);
    } catch (error) {
      setMessage('Error deactivating SIM card');
    }
  };

  return (
    <div>
      <h3>Deactivate SIM Card</h3>
      <input
        type="text"
        placeholder="SIM Number"
        value={simNumber}
        onChange={(e) => setSimNumber(e.target.value)}
      />
      <button onClick={deactivateSim}>Deactivate SIM</button>
      <p>{message}</p>
    </div>
  );
};

export default DeactivateSim;

import React, { useState } from 'react';
import axios from 'axios';

const AddSimCard = () => {
  const [simNumber, setSimNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const addSimCard = async () => {
    try {
      const response = await axios.post('/api/sim/add', { simNumber, phoneNumber });
      setMessage(response.data.msg);
    } catch (error) {
      setMessage('Error adding SIM card');
    }
  };

  return (
    <div>
      <h3>Add SIM Card</h3>
      <input
        type="text"
        placeholder="SIM Number"
        value={simNumber}
        onChange={(e) => setSimNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={addSimCard}>Add SIM</button>
      <p>{message}</p>
    </div>
  );
};

export default AddSimCard;

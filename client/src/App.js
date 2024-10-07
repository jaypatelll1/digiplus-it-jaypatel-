import React from 'react';
import AddSimCard from './components/AddSimCard';
import ActivateSim from './components/ActivateSim';
import DeactivateSim from './components/DeactivateSim';
import SimDetails from './components/SimDetails';

function App() {
  return (
    <div>
      <h1>SIM Card Management</h1>
      <AddSimCard />
      <ActivateSim />
      <DeactivateSim />
      <SimDetails />
    </div>
  );
}

export default App;

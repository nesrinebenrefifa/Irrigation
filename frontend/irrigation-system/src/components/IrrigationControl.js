import React, { useState } from 'react';
import api from '../services/api';
import Dashbord from './Dashbord';

function IrrigationControl() {
  const [action, setAction] = useState('');

  const handleControlClick = async () => {
    try {
      await api.post('/irrigation/control', { action });
      // Mettez à jour l'état ou effectuez d'autres actions après le contrôle
    } catch (error) {
      console.error('Error controlling irrigation:', error);
    }
  };

  return (
    <div className='z'>
    
    <Dashbord/>
    <div   className='control' >
      <h2 >Irrigation Control</h2>
      <label>
       Pump
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
      </label>
      <button className='controlB' onClick={handleControlClick}>Control</button>
    </div>
    </div>
  );
}

export default IrrigationControl;

import React from 'react';
// import { Link } from 'react-router-dom';
function MoistureLevel({ level }) {
  return (
    <div id="# MoistureLevel">
      <h2>Moisture Level</h2>
      <p className='aa'>Level: {level}</p>
      {/* <Link to="/IrrigationControl">IrrigationControl</Link> */}
    </div>
  );
}

export default MoistureLevel;

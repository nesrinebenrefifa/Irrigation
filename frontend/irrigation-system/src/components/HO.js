import React from 'react';
 import  aa from "../services/aa.jpg"
 import { Link } from 'react-router-dom';

const HO = () => {
  return(

  <div>
  <div className="img">
    <img src={ aa} alt="" />
    </div> 
    <div className='TXT'>
    <h1>Invest in Farms with Ease, Seamlessly Connecting You to Agriculture.</h1>
    <p className="RR">Invest confidently in the agriculture industry. Explore our platform, find exciting farm investment opportunities, and enjoy the benefits of a thriving sector. Start growing your wealth through agricultural investments today.</p>
    <Link to="/">
      <button className="BUTTON">Get Started</button>
    </Link></div>
    </div>)}
export default HO;

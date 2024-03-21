import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
     
      <div>
        <nav>
          <ul>
           
            <li>
              <Link to="/HO"><i className='bi bi-droplet-half me-2 fs-4'></i>Home</Link>
            </li>

            <li>
              <Link to="/">Log In</Link>
            </li>
            <li>
              <Link to="/IrrigationControl">Irrigation Control</Link>
            </li>
            <li>
              <Link to="/Dashbord">Dashbord</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;

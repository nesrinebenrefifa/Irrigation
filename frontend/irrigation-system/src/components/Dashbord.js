import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import KTIBA from "./KTIBA";







function Dashbord() {
 
  return (
    <>
  
      <Sidebar className="s">
      <Menu>
          <MenuItem>    
       </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/Dashbord" />}>
            <i className="bi bi-clipboard-data fs-5 me-4"></i> Admin Dashboard{" "}
          </MenuItem>
        </Menu>
      
        <Menu>
          <MenuItem className="M" component={<Link to="/Temperature" />}>

            <i className="bi bi-thermometer p-3 fs-1"></i> Temperature{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/humidity"/>}>
          
            <i className="bi bi-moisture p-3 fs-1"></i> humidity{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/Moisturevalue" />}>
       
            <i className="bi bi-moisture p-3 fs-1"></i> Moisture value{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/Irrigationcontrol" />}>
          <i class="bi bi-clock-history"></i>Irrigationcontrol{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/History" />}>
          <i class="bi bi-clock-history"></i>History{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/HO" />}>
          <i class="bi bi-clock-history"></i>Log Out{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>    
       </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>    
       </MenuItem>
        </Menu>
      </Sidebar>
     
    
  
    
    </>
  );
}

export default Dashbord;

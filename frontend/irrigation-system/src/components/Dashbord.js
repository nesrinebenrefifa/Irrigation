import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";




function Dashbord() {
 
  return (
    <>

      <Sidebar className="AA">
        <Menu>
          <MenuItem component={<Link to="/Dashbord" />}>
            <i className="bi bi-clipboard-data fs-5 me-4"></i> Admin Dashboard{" "}
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem component={<Link to="/Temperature" />}>

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
      </Sidebar>
     
    <h2 >this is the admin Dashboard for the irrigation system</h2> 
    
    </>
  );
}

export default Dashbord;

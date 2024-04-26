import React from 'react'
import Capture from "../services/Capture.PNG"
import Dashbord from './Dashbord'

function KTIBA() {
  return (
    <div>
            <Dashbord/>
       <h2>This is the admin Dashboard for the irrigation system</h2> 
    <img className="cap"src={Capture} alt="" />
    </div>
  )
}

export default KTIBA

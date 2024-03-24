import React  ,{useEffect,useState}from "react";
import axios from "axios";
import Dashbord from "./Dashbord";
import TemperatureChart from "./TemperatureChart";
function Temperature() {
    const [data, setData] = useState([]);

    const getData = async () => {
      const response = await axios.get("http://localhost:3001/Temperature");
      
      setData(response.data);
    };
    useEffect(() => {
      getData();
    }, []);
    let message = '';

    if (data === 30) {
      message = "You need to irrigate";
    } else if (data > 30) {
      message = "Temperature level too high! you need to desactivate the pump";
    }
   
  return (
    <div className="AA">
    <Dashbord/>
    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
          <h2> Temperature<i className="bi bi-thermometer p-3 fs-1"></i></h2> 
            <h3 className="fs-2">{data}</h3>
        
          </div>
          {message && (
      <div className="message">
        {message}
      </div>)}
      <div>
    
      <div>
        <TemperatureChart />
      </div>
        <h4>Temperature Profile</h4>
    </div>

        </div></div>
  )
}


export default Temperature

import React  ,{useEffect,useState}from "react";
import axios from "axios";
import Dashbord from "./Dashbord";
import Moisturechart from "./Moisturechart";


function Moisturevalue() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/soilHumidity");
  
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  let message = '';

  if (data === 350) {
    message = "You need to irrigate";
  } else if (data > 350) {
    message = "Moisture level too high! you need to desactivate the pump";
  }

return (

  
<div className="AA">
  <Dashbord/>
      <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
        <div>
         <h2>  <i className="bi bi-moisture p-3 fs-1"></i>Moisture value</h2>
          <h3 className="fs-2">{data} </h3>
        </div>
       
        {message && (
      <div className="message">
        {message}
      </div>
    )}
      <Moisturechart/>
      </div></div>

)
}

export default Moisturevalue;

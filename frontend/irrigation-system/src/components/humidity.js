import React  ,{useEffect,useState}from "react";
import axios from "axios";
import Dashbord from "./Dashbord";
import Humiditychart from "./humiditychart";

function Humidity() {
    const [data, setData] = useState([]);

    const getData = async () => {
      const response = await axios.get("http://localhost:3001/humidity");
      
      setData(response.data);
    };
    useEffect(() => {
      getData();
    }, []);
  return (
    <div className="AA">
    <Dashbord/>

        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2">{data} </h3>
           
            <h2> <i className="bi bi-moisture p-3 fs-1"></i>Humidity</h2>
          <Humiditychart/>
          </div>
        </div>
     
       
      </div>
   
  )
}

export default Humidity

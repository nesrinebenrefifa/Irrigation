import React, { useState, useEffect, } from 'react';

import MoistureLevel from './components/MoistureLevel';
import api from './services/api';
import IrrigationControl from './components/IrrigationControl';
// import SignUp from './components/signUp';
import Navigation from './components/Navigation';
import HO from './components/HO';
import HomePage from './components/HomePage';
import Login from "./components/Login"
import Signup from "./components/Signup copy"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from 'axios';



alert("irrigation time")
function App() {
 
  const [moistureLevel, setMoistureLevel] = useState(0);


  useEffect(() => {
    // Fetch data from backend on component mount
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      
      const moistureResponse = await api.get('/irrigation/moisture');

      setMoistureLevel(moistureResponse.data.moistureLevel);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [data, setData] = useState([]);

  
  const getData = async () => {
    const response = await axios.get("http://localhost:3001/name");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
   

    <div>
      <div>
 
 {/* <ul>

   {data && data.map(item => (
      <li key={item._id}>
        <div>Nom: {item.name}</div>
        <div>Âge: {item.age}</div>
        <div>Ville: {item.city}</div>
      </li>
    ))}
  </ul> */}
</div>
      {/* <Button success>SE CONNECTER</Button> */}
   {/* <Title>nesss</Title> */}
   
   <Navigation/> 
   <HO/>


     
      {/* <SignUp/> */}
      <Router>
        <Routes>
       
          {/* <Route path="/home" element={<Home/>}/> */}
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>

      <MoistureLevel level={moistureLevel} />
      <IrrigationControl/>
     

      {/* {data} */}

      <Router>
      <HomePage/>
        <Routes>
       
<Route id="#MoistureLevel" exact element={<MoistureLevel/>} />
{/* <Route path="/IrrigationControl" component={IrrigationControl} /> */}</Routes>
</Router>
<h1>Données de la base de données</h1>
  <button>{data} </button>
    </div>
  );
}

export default App;

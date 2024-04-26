import React from "react";
import IrrigationControl from "./components/IrrigationControl";
import Navigation from "./components/Navigation";
import HO from "./components/HO";
import Dashbord from "./components/Dashbord";
import Login from "./components/Login";
import Signup from "./components/Signup copy";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Humidity from "./components/humidity";
import Temperature from "./components/Temperature";
import Moisturevalue from "./components/Moisturevalue";
import History from "./components/History";
import KTIBA from "./components/KTIBA";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/HO" element={<HO />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Dashbord" element={<Dashbord />} /> */}
          <Route path="/Dashbord" element={<KTIBA/>} />
          <Route path="/IrrigationControl" element={<IrrigationControl />} />
          <Route path="/humidity" element={<Humidity />} />
          <Route path="/Moisturevalue" element={<Moisturevalue />} />
          <Route path="/Temperature" element={<Temperature />} />
          <Route path="/History" element={<History />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

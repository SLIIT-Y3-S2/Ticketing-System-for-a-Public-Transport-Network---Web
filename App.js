import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusView from "./src/Components/BusView";
import Home from "./src/Components/Home";
import BusForm from "./src/Components/BusForm";
import SheduleForm from "./src/Components/SheduleForm";
import ViewShedule from "./src/Components/ViewShedule";
import LuxuryBusShedule from "./src/Components/LuxuryBusShedule";
import NormalBusShedule from "./src/Components/NormalBusShedule";
import SemiBusShedule from "./src/Components/SemiBusShedule";
import SheduleDashboard from "./src/Components/SheduleDashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busview" element={<BusView />} />
          <Route path="/busform" element={<BusForm />} />
          <Route path="/sheduleform" element={<SheduleForm />} />
          <Route path="/viewshedule" element={<ViewShedule />} />
          <Route path="/luxuryshedule" element={<LuxuryBusShedule />} />
          <Route path="/normalshedule" element={<NormalBusShedule />} />
          <Route path="/semishedule" element={<SemiBusShedule />} />
          <Route path="/sheduledashboard" element={<SheduleDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

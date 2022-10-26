import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusView from "./src/Components/BusView";
import Home from "./src/Components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busview" element={<BusView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

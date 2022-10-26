import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusView from './src/Components/BusView';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<BusView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
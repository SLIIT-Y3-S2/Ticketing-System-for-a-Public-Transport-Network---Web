import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import BusView from "./src/Components/BusView";
import Home from "./src/Components/Home";
import UserContext from "./src/Components/Context/UserContext";
import Register from "./src/Components/Auth/Register";
import Login from "./src/Components/Auth/Login";
import PassengerDashboard from "./src/Components/PassengerDashboard";
import ManagerDashbord from "./src/Components/ManagerDashbord";


const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passenger" element={<PassengerDashboard user={userData} />} />
            <Route path="/manager" element={<ManagerDashbord user={userData}/>}/>
            <Route path="/busview" element={<BusView />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

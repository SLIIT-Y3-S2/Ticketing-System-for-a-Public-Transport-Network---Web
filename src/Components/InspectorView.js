import React from "react";
//import SideNavBar from "./SupSideNavBar";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";

const InspectorView = () => {
  const [Inspectors, setInspector] = useState([]);
  

  useEffect(() => {
    const getInspectors = () => {
      axios
        .get("http://localhost:5000/inspector")
        .then((res) => {
          setInspector(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getInspectors();
  }, []);

 
  return (
    <>
      {/* <SideNavBar /> */}
     
      <div className="pageBody">
      <Link to="/Inspectorform">
        <button variant="primary" className="addButton" type="submit">
          ADD INSPECTOR
        </button>
      </Link>
        <br />
        <br />
        <h3>Inspectors</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Mobile No.</th>
             
              
            </tr>
          </thead>
          {Inspectors
          .map((Inspector) => (
            <tbody key={Inspector._id}>
              <tr>
                <td>{Inspector.name}</td>
                <td>{Inspector.email}</td>
                <td>{Inspector.gender}</td>
                <td>{Inspector.mobile}</td>
                
               
                
              </tr>
            </tbody>
          ))}
        </Table>
       
        
      </div>
    </>
  );
};

export default InspectorView;
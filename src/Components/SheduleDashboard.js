import React from "react";
//import SideNavBar from "./SupSideNavBar";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const SheduleDashboard = () => {
  const [Shedules, setShedule] = useState([]);

  useEffect(() => {
    const getShedules = () => {
      axios
        .get("http://localhost:5000/shedule")
        .then((res) => {
          setShedule(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getShedules();
  }, []);

  const rowCount = Shedules.length;

  return (
    <div>
      <div className="card1">
        <div class="scontainer">
          <h4>
            <b>Total of Available Buses</b>
          </h4>
          <center>
            <h2>{rowCount}</h2>
          </center>
        </div>
      </div>
      <div className="card2">
        <div class="scontainer">
          <h4>
            <b>Total of Available Drivers</b>
          </h4>
          <center>
            <h2>{rowCount}</h2>
          </center>
        </div>
      </div>
      <div className="card3">
        <div class="scontainer">
          <h4>
            <b>Total of Available Inspectors</b>
          </h4>
          <center>
            <h2>{rowCount}</h2>
          </center>
        </div>
      </div>
      {/* <CardGroup className="cardBody1">
      <Card >
        
        <Card.Body className='card1'>
          <Card.Title>Normal Only</Card.Title>
         
        </Card.Body>
        
      </Card>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card >
        
        <Card.Body className='card1'>
        
         
        </Card.Body>
       
      </Card>
      <Card >
        
        <Card.Body className='card1'>
        
        </Card.Body>
      
      </Card>
    </CardGroup> */}
      <div className="pageBodyShedule1">
        <h3>Today's Shedule</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Route No</th>
              <th>Bus No</th>
              <th>Route</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Driver Name</th>
              <th>Assigned Inspector</th>
            </tr>
          </thead>
          {Shedules.map((Shedule) => (
            <tbody key={Shedule._id}>
              <tr>
                <td>{Shedule.date}</td>
                <td>{Shedule.routeNo}</td>
                <td>{Shedule.busNo}</td>
                <td>{Shedule.route}</td>
                <td>{Shedule.departureTime}</td>
                <td>{Shedule.arriveTime}</td>
                <td>{Shedule.driverName}</td>
                <td>{Shedule.inspector}</td>
              </tr>
            </tbody>
          ))}
        </Table>

        <br />
        <br />
        <h3>Assigned Inspectors</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Route</th>
              <th>Route No</th>
              <th>Inspector Name</th>
            </tr>
          </thead>
          {Shedules.map((Shedule) => (
            <tbody key={Shedule._id}>
              <tr>
                <td>{Shedule.route}</td>
                <td>{Shedule.routeNo}</td>
                <td>{Shedule.inspector}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default SheduleDashboard;

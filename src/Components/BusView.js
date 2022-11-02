import React from "react";
//import SideNavBar from "./SupSideNavBar";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import ModleBus from "./ModleBus";
import ModleDelete from "./BusModleDelete";
import { Grid } from "@mui/material";
//import { FaUserPlus } from "react-icons/fa";
import axios from "axios";

const Bus = () => {
  const [Buses, setBus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [BusDet, setBusDet] = useState("");
  const [Busdelete, setBusDelete] = useState("");

  useEffect(() => {
    const getBuses = () => {
      axios
        .get("http://localhost:5000/bus")
        .then((res) => {
          setBus(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getBuses();
  }, []);

 
  return (
    <>
      {/* <SideNavBar /> */}
      <div className="pageBody">
       
        <br />
        <br />
        <h3>Normal Buses</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bus No</th>
              <th>Route</th>
              <th>Route No</th>
              <th>Owner Name</th>
              <th>Driver Name</th>
              <th>Action</th>
              
            </tr>
          </thead>
          {Buses
          .filter(
            (busType) =>
            busType.busType === "Normal" 
          ).map((Bus) => (
            <tbody key={Bus._id}>
              <tr>
                <td>{Bus.busNo}</td>
                <td>{Bus.route}</td>
                <td>{Bus.routeNo}</td>
                <td>{Bus.ownerName}</td>
                <td>{Bus.driverName}</td>
                
                <td>
                  <div style={{display:"flex", justifyContent:"center"}}>
                  
                    <button
                      type="button"
                      className="editButton"
                      onClick={() => {
                        setModalShow(true);
                        setBusDet(Bus);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Bus"
                    >
                      EDIT
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="deleteButton"
                      onClick={() => {
                        setModalDelete(true);
                        setBusDelete(Bus);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Delete Bus"
                    >
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <br />
        <br />
        <h3>Semi-luxury Buses</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bus No</th>
              <th>Route</th>
              <th>Route No</th>
              <th>Owner Name</th>
              <th>Driver Name</th>
              <th>Action</th>
              
            </tr>
          </thead>
          {Buses
          .filter(
            (busType) =>
            busType.busType === "Semi-luxury"
            
          ).map((Bus) => (
            <tbody key={Bus._id}>
              <tr>
                <td>{Bus.busNo}</td>
                <td>{Bus.route}</td>
                <td>{Bus.routeNo}</td>
                <td>{Bus.ownerName}</td>
                <td>{Bus.driverName}</td>
                
                <td>
                <div style={{display:"flex", justifyContent:"center"}}>
                  
                  
                    <button
                      type="button"
                      className="editButton"
                      onClick={() => {
                        setModalShow(true);
                        setBusDet(Bus);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Bus"
                    >
                      EDIT
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="deleteButton"
                      onClick={() => {
                        setModalDelete(true);
                        setBusDelete(Bus);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Delete Bus"
                    >
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <br />
        <br />
        <h3>Luxury Buses</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bus No</th>
              <th>Route</th>
              <th>Route No</th>
              <th>Owner Name</th>
              <th>Driver Name</th>
              <th>Action</th>
              
            </tr>
          </thead>
          {Buses
          .filter(
            (busType) =>
            busType.busType === "Luxury" 
          ).map((Bus) => (
            <tbody key={Bus._id}>
              <tr>
                <td>{Bus.busNo}</td>
                <td>{Bus.route}</td>
                <td>{Bus.routeNo}</td>
                <td>{Bus.ownerName}</td>
                <td>{Bus.driverName}</td>
                
                <td>
                <div style={{display:"flex", justifyContent:"center"}}>
                  
                    <button
                      type="button"
                      className="editButton"
                      onClick={() => {
                        setModalShow(true);
                        setBusDet(Bus);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Bus"
                    >
                      EDIT
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="deleteButton"
                      onClick={() => {
                        setModalDelete(true);
                        setBusDelete(Bus);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Delete Bus"
                    >
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <ModleBus show={showModal} onHide={() => setShowModal(false)} />
        <ModleBus
          show={modalShow}
          onHide={() => setModalShow(false)}
          BusDet={BusDet}
        />
        <ModleDelete
          show={modaldelete}
          onHide={() => setModalDelete(false)}
          Busdelete={Busdelete}
        />
      </div>
    </>
  );
};

export default Bus;
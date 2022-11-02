import React from 'react'
//import SideNavBar from "./SupSideNavBar";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import ModleShedule from "./ModleShedule";
import ModleDeleteShedule from "./SheduleModleDelete";
import { Grid } from "@mui/material";
import axios from "axios";
import Header from './Layout/Header';

const LuxuryBusShedule = () => {
  const [Shedules, setShedule] = useState([]);
  const [showModalShedule, setShowModalShedule] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modaldeleteShedule, setModalDeleteShedule] = useState(false);
  const [SheduleDet, setSheduleDet] = useState("");
  const [Sheduledelete, setSheduleDelete] = useState("");

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

  return (
    <>
      <Header/>
      <div className="pageBodySheduleTopic">
        <h3>Luxury Bus Shedule</h3>
        <div className="pageBodyShedule">
          <br />
          <br />

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
                <th>Action</th>
              </tr>
            </thead>
            {Shedules.filter((busType) => busType.busType === "Luxury").map(
              (Shedule) => (
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

                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          type="button"
                          className="editButton"
                          onClick={() => {
                            setModalShow1(true);
                            setSheduleDet(Shedule);
                          }}
                          style={{ cursor: "pointer" }}
                          title="Edit Shedule"
                        >
                          EDIT
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button
                          type="button"
                          className="deleteButton"
                          onClick={() => {
                            setModalDeleteShedule(true);
                            setSheduleDelete(Shedule);
                          }}
                          style={{ cursor: "pointer" }}
                          title="Delete Shedule"
                        >
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </Table>
          <ModleShedule
            show={showModalShedule}
            onHide={() => setShowModalShedule(false)}
          />
          <ModleShedule
            show={modalShow1}
            onHide={() => setModalShow1(false)}
            sheduleDet={SheduleDet}
          />
          <ModleDeleteShedule
            show={modaldeleteShedule}
            onHide={() => setModalDeleteShedule(false)}
            Sheduledelete={Sheduledelete}
          />
        </div>
      </div>
    </>
  );
}

export default LuxuryBusShedule
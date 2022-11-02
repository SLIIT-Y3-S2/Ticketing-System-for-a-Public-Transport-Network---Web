import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";

const SheduleForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [date, setDate] = useState(det != null ? det.date : "");
  const [busno, setBusNo] = useState(det != null ? det.busNo : "");
  const [route, setRoute] = useState(det != null ? det.route : "");
  const [routeno, setRouteNo] = useState(det != null ? det.routeNo : "");
  const [dtime, setDepTime] = useState(det != null ? det.departureTime : "");
  const [arrtime, setArrTime] = useState(det != null ? det.arriveTime : "");
  const [drivername, setDriverName] = useState(det != null ? det.driverName : "");
  const [inspectorname, setInspectorName] = useState(det != null ? det.inspector : "");
  const [type, setType] = useState(det != null ? det.busType : "");
  

  const handleSubmit = (event) => {
   // event.preventDefault();
    const newShedule = {
      date: date, 
      routeNo: routeno,  
      busNo: busno,  
      route: route,
      departureTime: dtime,
      arriveTime: arrtime,
      driverName: drivername,
      inspector: inspectorname,
      busType:type
    };
    

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (det == null) {

          axios
            .post("http://localhost:5000/shedule/", newShedule)
            .then(
              //() => swal("Success!", "Shedule Submitted Successfully!", "success"),
              navigate("/viewshedule")
            )
            .catch((err) => alert(err));

        
      }else{
             axios

               .put(
                 `http://localhost:5000/shedule/${det._id}`,
                 newShedule
               )
               .then(() =>
                 swal(
                   "Successfull!",
                   "Shedule Updated Successfully!",
                   "success",
                   {timer:3000 }
                 )
                // <Alert severity="success">This is a success alert — check it out!</Alert>
               )
               .catch((err) => alert(err));
           }
      }
    
    setvalidated(true);
  };

  const reset = () => {
    
       
    setBusNo(null);
    setRoute(null);
    setRouteNo(null);
    setOwnerName(null);
    setDriverName(null);
   
    
  };

  const disablePastDays = () => {
    const today = new Date();
    const dd = String(today.getDate() - 7).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const navigate = useNavigate();
  
  return (
    <>
      <Header/>
      <div className={det == null ? "topic1" : ""}>
        <h2>{det != null ? "Edit Bus Shedule" : "Add Bus Shedule"}</h2>
        <div className={det == null ? "formpageBody" : ""}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            // encType="multipart/form-data"
          >
            <Form.Group className="mb-4" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                min={disablePastDays()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please insert Date
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formrouteNo">
              <Form.Label>Route Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Route Number"
                pattern="[0-9]{3}"
                value={routeno}
                onChange={(e) => setRouteNo(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please insert Valid route Number. At most include 3 digits
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formbusno">
              {det == null ? (
                <div>
                  <Form.Label>Bus No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Bus number"
                    value={busno}
                    onChange={(e) => setBusNo(e.target.value)}
                    require
                  />
                </div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRoute">
              <Form.Label>Route</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formownername">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Departure Time"
                value={dtime}
                onChange={(e) => setDepTime(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formownername">
              <Form.Label>Expected Time of Arrival</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter expexted arrival time"
                value={arrtime}
                onChange={(e) => setArrTime(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Formdrivername">
              <Form.Label>Driver Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Driver Name"
                value={drivername}
                onChange={(e) => setDriverName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Forminspectorname">
              <Form.Label>Inspector Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inspector Name"
                value={inspectorname}
                onChange={(e) => setInspectorName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="inputreg">
              <Form.Label>Bus Type</Form.Label>
              <Form.Select
                aria-label="Feedback Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option selected disabled hidden>
                  Bus Type
                </option>
                <option>Select Bus Type</option>
                <option>Normal</option>
                <option>Semi-luxury</option>
                <option>Luxury</option>
              </Form.Select>
            </Form.Group>
            <br />
            <button variant="primary" className="editButton2" type="submit">
              {det != null ? "Save Changes" : "Add"}
            </button>
            &nbsp;&nbsp;
            <button
              varient="primary"
              className="resetButton"
              type="reset"
              onClick={reset}
            >
              Reset
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SheduleForm;
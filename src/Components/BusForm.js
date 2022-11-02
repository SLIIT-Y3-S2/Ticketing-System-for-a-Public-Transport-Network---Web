import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./Layout/Header";



const BusForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [busno, setBusNo] = useState(det != null ? det.busNo : "");
  const [route, setRoute] = useState(det != null ? det.route : "");
  const [routeno, setRouteNo] = useState(det != null ? det.routeNo : "");
  const [ownername, setOwnerName] = useState(det != null ? det.ownerName : "");
  const [drivername, setDriverName] = useState(
    det != null ? det.driverName : ""
  );
  const [type, setType] = useState(det != null ? det.busType : "");
  const [password, setPassword] = useState(det != null ? det.password : "");
  const [confirmPassword, setConfirmPassword] = useState(
    det != null ? det.passwordCheck : ""
  );

  const handleSubmit = () => {
    // event.preventDefault();
    const newBus = {
      busNo: busno,
      route: route,
      routeNo: routeno,
      ownerName: ownername,
      driverName: drivername,
      busType: type,
      password: password,
      passwordCheck: confirmPassword,
    };

    const form = event.currentTarget;

    if (det == null) {
      axios
        .post("http://localhost:5000/bus/", newBus)
        .then(
          
          navigate("/busview")
        )
        .catch((err) => alert(err));
    } else {
      axios

        .put(`http://localhost:5000/bus/${det._id}`, newBus)
        .then(
          () =>
            swal("Successfull!", "Bus Updated Successfully!", "success", {
              timer: 3000,
            })
          // <Alert severity="success">This is a success alert — check it out!</Alert>
        )
        .catch((err) => alert(err));
    }

    setvalidated(true);
  };

  const reset = () => {
    setBusNo(null);
    setRoute(null);
    setRouteNo(null);
    setOwnerName(null);
    setDriverName(null);
    setType(null);
    setPassword("");
    setConfirmPassword("");
  };

  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <div className={det == null ? "topic1" : ""}>
        <h2>{det != null ? "Edit a Bus " : "Add a Bus "}</h2>
        <div className={det == null ? "formpageBody" : ""}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            // encType="multipart/form-data"
          >
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
            <Form.Group className="mb-3" controlId="formownername">
              <Form.Label>Owner Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Owner Name"
                value={ownername}
                onChange={(e) => setOwnerName(e.target.value)}
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
            <Form.Group className="mb-3" controlId="formPassword">
              {det == null ? (
                <div>
                  <Form.Label>Create New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    Must contain at least one number and one symbol and one
                    uppercase and lowercase letter, and at least 8 or more
                    characters
                  </Form.Text>
                </div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formrePassword">
              {det == null ? (
                <div>
                  <Form.Label>Re Enter New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re Enter Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              ) : (
                ""
              )}
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

export default BusForm;

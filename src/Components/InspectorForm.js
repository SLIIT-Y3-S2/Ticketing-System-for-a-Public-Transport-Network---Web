import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";

const InspectorForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [name, setName] = useState(det != null ? det.name : "");
  const [email, setEmail] = useState(det != null ? det.email : "");
  const [gender, setGender] = useState(det != null ? det.gender : "");
  const [mobile, setMobile] = useState(det != null ? det.mobile : "");

  

  const handleSubmit = (event) => {
   // event.preventDefault();
    const newInspector = {
      name: name, 
      email: email,  
      gender: gender,  
      mobile: mobile
    };
    

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (det == null) {

          axios
            .post("http://localhost:5000/inspector/", newInspector)
            .then(
              //() => swal("Success!", "Shedule Submitted Successfully!", "success"),
              navigate("/manager")
            )
            .catch((err) => alert(err));

        
      }else{
             axios

               .put(
                 `http://localhost:5000/shedule/${det._id}`,
                 newInspector
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


 

  const navigate = useNavigate();
  
  return (
    <>
      <div> {det == null ? (<Header />) : ("")}
      <div className={det == null ? "topic1" : ""}>
        <h2>{det != null ? "Edit Inspector" : "Add Inspector"}</h2>
        <div className={det == null ? "formpageBody" : ""}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            // encType="multipart/form-data"
          >
          
            <Form.Group className="mb-3" controlId="formrouteNo">
              <Form.Label>Inspector Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inspector Name"
                
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
             
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Email Address
        </Form.Control.Feedback>
      </Form.Group>

           
      

      <Form.Group className="inputreg">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Feedback Type"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option selected disabled hidden>
                  Gender
                </option>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </Form.Select>
            </Form.Group>  
        
<br/>
            <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Moblie Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Moblie Number"
          title="Must include 10 digits without Country Code"
          pattern="[0-9]{10}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Mobile Number. Must include 10 digits
        </Form.Control.Feedback>
      </Form.Group>

           
            <br />
            <button variant="primary" className="editButton2" type="submit">
              {det != null ? "Save Changes" : "Add"}
            </button>
            &nbsp;&nbsp;
           
          </Form>
        </div>
      </div>
      </div>
    </>
  );
};

export default InspectorForm;
import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const BusDeleteForm = ({bus}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {

        axios
          .delete(`http://localhost:5000/bus/${bus._id}`)
          .then(() => swal("Successfull", "bus Deleted Successfully!", "success",{timer: 3000}))
          .catch((err) => {
            alert(err);
          });
     
    }

    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Are You Sure, Do You Want to Delete this Record?
          </Form.Label>
          
        </Form.Group>
        <button variant="danger" className="deleteButton" type="submit">
          Delete
        </button>
      </Form>
    </>
  );
};

export default BusDeleteForm;
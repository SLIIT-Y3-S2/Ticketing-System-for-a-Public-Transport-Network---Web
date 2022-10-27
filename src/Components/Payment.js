import React from 'react'
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Payment = () => {
  const [validated, setvalidated] = useState(false);
  const [hname, setHolderName] = useState("");
  const [cno, setCardNo] = useState("");
  const [expdate, setExpireDate] = useState("");
  const [cvc, setcvc] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    const newPayment = {
      holderName: hname,
      cardNo: cno,
      expireDate: expdate,
      cvc: cvc,
      amount: amount,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    } else {
      
        axios
          .post("http://localhost:5000/payment", newPayment)
          .then(() => alert("Successfully Added"))
          .catch((err) => alert("Error"));
      
    }
    setvalidated(true);
  };

const Resetform = () => {
    setHolderName(null);
    setCardNo(null);
    setExpireDate(null);
    setcvc(null);
    setAmount(null);
};

const disablePastMonths = () => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm;
  };


  return (
    <div>
        <hr style={{marginTop:'60px'}} />
        <div className="pic"></div>
        <div className='form'>
            <center>
                <h2 style={{color:"#0d316b"}}><b>Recharge Card</b></h2>
                <br/>
                <h4 style={{color:'#4287f5'}}>Credit Balance: LKR 450.00</h4>
            </center>
            <br />
            <div className='form-in'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label><b>Card Holder's Name</b></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        value={hname}
                        onChange={(e) => setHolderName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCno">
                    <Form.Label><b>Card Number</b></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="xxxx xxxx xxxx xxxx"
                        pattern="[0-9]{16}"
                        value={cno}
                        onChange={(e) => setCardNo(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Insert Valid Number
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label><b>Expiry Date</b></Form.Label>
                        <Form.Control
                             type="month" 
                             value={expdate}
                             min={disablePastMonths()}
                             onChange={(e) => setExpireDate(e.target.value)}
                             required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCvc">
                        <Form.Label><b>CVC</b></Form.Label>
                        <Form.Control 
                            type="password"
                            value={cvc}
                            pattern="[0-9]{3}"
                            onChange={(e) => setcvc(e.target.value)}
                            required
                         />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formAmount">
                    <Form.Label><b>Amount</b></Form.Label>
                    <Form.Control 
                        type="text"
                        value={amount}
                        placeholder="LKR 0.00"
                        onChange={(e) => setAmount(e.target.value)}
                        required
                     />
                </Form.Group>
                    
                <br />

                <center>
                    <button className='btn1' type='submit'>PAY</button>
                </center>


            </Form>
            </div>

        </div>
    </div>
  )
}

export default Payment
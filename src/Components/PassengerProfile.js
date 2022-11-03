import { Button } from '@mui/material';
import React from 'react'

const PassengerProfile = ({user}) => {
    console.log("user",user)
  return (
    <div>
      <h2>My Account</h2>
      <div
        style={{
          justifyContent: "center",
          border: "2px solid #0d316b",
          borderRadius: "8px",
          padding: "15px 5px 10px 10px",
          marginTop: "20px",
        }}
      >
        <h5>{`Name: ${user.user.name}`}</h5>
        <h5>{`Email: ${user.user.email}`}</h5>
        <h5>{`Gender: ${user.user.gender}`}</h5>
        <h5>{`Address: ${user.user.address}`}</h5>
        <h5>{`Date of Birth: ${user.user.dob}`}</h5>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          border: "2px solid #0d316b",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "30px",
          marginLeft:"30%",
        }}
      >
        <div style={{ color: "#4287f5" }}>
          <h4>{`LKR ${user.user.balance}`}</h4>
        </div>
        <div>
          <Button style={{ color: "white", backgroundColor: "#0d316b" }}>
            Recharge Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PassengerProfile
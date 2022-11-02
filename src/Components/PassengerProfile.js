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
          marginTop:"20px"
        }}
      >
        <h5>{`Name: ${user.user.name}`}</h5>
        <h5>{`Email: ${user.user.email}`}</h5>
        <h5>{`Gender: ${user.user.gender}`}</h5>
        <h5>{`Address: ${user.user.address}`}</h5>
        <h5>{`Date of Birth: ${user.user.dob}`}</h5>
      </div>
    </div>
  );
}

export default PassengerProfile
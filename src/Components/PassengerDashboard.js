import React from 'react'
import PassengerSideNavBar from './Layout/PassengerSideNavBar'

const PassengerDashboard = ({user}) => {
  return (
      <PassengerSideNavBar user={user} />
  )
}

export default PassengerDashboard
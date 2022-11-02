import { Link } from 'react-router-dom'
import React from 'react'
import Header from './Layout/Header';


const Home = () => {
  return (
    <div>
      <Header/>
      <div style={{backgroundColor:'white', height:'300px', width:'auto'}}>
        <br />
        <div style={{backgroundImage:`url("https://img.freepik.com/premium-vector/internet-service-book-buy-bus-ticket-travel-tourism-concept-tourist-planning-trip-online-passengers-buying-tickets-bus-mobile-app-vector-design_458444-1502.jpg?w=2000")`,backgroundSize:'cover', height:'250px', width:'400px',marginLeft:'auto', marginRight:'auto'}}>

        </div>
      </div>

      <div style={{backgroundColor:'#4287f5', height:'300px', width:'auto',display:'flex', justifyContent:'space-between'}}>
          <div style={{marginLeft:'auto', marginRight:'auto', height:'250px', width:'auto'}}>
            <br /><br />
            <h5 style={{textAlign: 'center'}}>No Coins - No Cash</h5>
            <p style={{textAlign: 'center'}}>Do your payments without cash. EasyGoing will take care of your bus fare. It is more efficent and saves your time.</p>
            <p style={{textAlign: 'center'}}>In this covid-19 pandemic do your bus fare without getting any risk. EasyGoing allows you to cash free payments.</p>
            <br />
            <center>
              <button className='btn-login'>LOGIN</button>
            </center>
          </div>
          <div style={{backgroundImage:`url("https://img.freepik.com/free-vector/autonomous-public-transport-abstract-concept-vector-illustration-self-driving-bus-urban-transport-services-smart-taxi-automatic-road-service-public-bus-city-train-traffic-abstract-metaphor_335657-1771.jpg?w=360")`,backgroundSize:'cover',marginLeft:'auto', marginRight:'auto', height:'250px', width:'250px', marginTop:'20px'}}>
            
          </div>
      </div>

      <div style={{backgroundColor:'white', height:'300px', width:'auto', display:'flex', justifyContent:'space-between'}}>
        <div style={{backgroundImage:`url("https://img.freepik.com/free-vector/bus-driver-concept-illustration_114360-6610.jpg?w=360")`,backgroundSize:'cover',marginLeft:'auto', marginRight:'auto', height:'250px', width:'250px', marginTop:'20px'}}>
            
        </div>
        <div style={{marginLeft:'auto', marginRight:'auto', height:'250px', width:'auto' }}>
            <br /><br />
            <h5 style={{textAlign: 'center'}}>Create Your Account</h5>
            <br />
            <p style={{textAlign: 'center'}}>First you need to register for our system to experience many more features. Create your personal account and get free credit for your next ride.</p>
            <br /><br />
            <center>
              <button className='btn1'>REGISTER</button>
            </center>
        </div>
      </div>

      <div style={{backgroundColor:'#4287f5', height:'300px', width:'auto', display:'flex', justifyContent:'space-between'}}>
        <div style={{marginLeft:'auto', marginRight:'auto', height:'250px', width:'auto'}}>
            <br /><br />
            <h5 style={{textAlign: 'center'}}>Easy Recharge</h5>
            <p style={{textAlign: 'center'}}>You can recharge your account easily by yourself at home.</p>
            <p style={{textAlign: 'center'}}>Only you have to do is log into your account and recharge your EasyGoing account by card payments.</p>
            <br />
            <center>
              <Link to ='/payment'>
                <button className='btn-login'>RECHARGE</button>
              </Link>
            </center>
          </div>
          <div style={{backgroundImage:`url("https://media.istockphoto.com/vectors/hand-holding-transport-card-near-terminal-airport-metro-bus-subway-vector-id1003579398?k=20&m=1003579398&s=612x612&w=0&h=QGpv22zAPyOHZcojy7jJdKu8lMZKpLk2k9c2ORwWKog=")`,backgroundSize:'cover',marginLeft:'auto', marginRight:'auto', height:'250px', width:'250px', marginTop:'20px'}}>
            
          </div>
      </div>

      <div style={{backgroundColor:'white',height:'300px', width:'auto',display:'flex', justifyContent:'space-between'}}>
        <div style={{backgroundImage:`url("https://www.rechapi.com/assets/images/svg/terms.svg")`,backgroundSize:'cover',marginLeft:'auto', marginRight:'auto', height:'250px', width:'250px', marginTop:'20px'}}>
            
        </div>
        <div style={{marginLeft:'auto', marginRight:'auto', height:'250px', width:'auto'}}>
            <br /><br />
            <h5 style={{textAlign: 'center'}}>Manager Login</h5>
            <p style={{textAlign: 'center'}}>If you are a public transport manager you can also log into the system.</p>
            <p style={{textAlign: 'center'}}>After logn to your account you can manage and change or create the bus schedules as needed.</p>
            <br />
            <center>
              <button className='btn1'>MANAGER LOGIN</button>
            </center>
          </div>
      </div>

    </div>
    
  )
}

export default Home
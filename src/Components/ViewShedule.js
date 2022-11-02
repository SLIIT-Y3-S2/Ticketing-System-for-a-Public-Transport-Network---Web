import React from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const ViewShedule = () => {
  return (
    <div className='topic'>
      <h2>View Shedules</h2>
      
      <Link to="/sheduleform"><button variant="primary" className='btn-add' type="submit">ADD SHEDULE</button></Link>
    <div  className="cardpageBody">
      
      <CardGroup className="cardBody">
      <Card >
        <Card.Img  src="https://thumbs.dreamstime.com/z/red-passenger-bus-27738574.jpg" className="image"/>
        <Card.Body>
          <Card.Title>Normal Only</Card.Title>
         
        </Card.Body>
        
      </Card>
      <Card className='btn-view1'>
        
        <Card.Body>
        <h2>{date}</h2>
         
        </Card.Body>
       
      </Card>
      <Card className='btn-view1'>
        
        <Card.Body>
        <Link to="/normalshedule"><button variant="primary" className='btn-view' type="submit">VIEW</button></Link>
        </Card.Body>
      
      </Card>
    </CardGroup>
    <br/>
    <CardGroup className="cardBody">
      <Card>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/2406299/screenshots/10840967/media/8f39dd3763eb8d9e33dcb8d43e088b7c.png?compress=1&resize=400x300" className="image"/>
        <Card.Body>
          <Card.Title>Semi-luxury Only</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card className='btn-view1'>
        
        <Card.Body>
        <h2>{date}</h2>
        </Card.Body>
       
      </Card>
      <Card className='btn-view1'>
        
        <Card.Body>
        <Link to="/semishedule"><button variant="primary" className='btn-view' type="submit">VIEW</button></Link>
        </Card.Body>
      
      </Card>
    </CardGroup>
    <br/>
    <CardGroup className="cardBody">
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDUGw1GuP9ZZ-zxNKFEuyf8_enS1WPNuoIw&usqp=CAU" className="image" />
        <Card.Body>
          <Card.Title>Luxury Only</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card className='btn-view1'>
        
        <Card.Body>
        <h2>{date}</h2>
        </Card.Body>
       
      </Card>
      <Card className='btn-view1'>
        
        <Card.Body>
        <Link to="/luxuryshedule"><button variant="primary" className='btn-view' type="submit">VIEW</button></Link>
        </Card.Body>
      
      </Card>
    </CardGroup>
    </div>
    </div>
    
  )
}

export default ViewShedule
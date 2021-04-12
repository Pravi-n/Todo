import React from 'react';
import {
    Button,
    Card,

  } from "react-bootstrap";
  import { NavLink } from "react-router-dom";
  const CustomCard = () => {
      return ( 
          
        <NavLink className="menu-link" to={`my-page`}>
       <Card style={{ width: '20em', cursor:'pointer', textAlign: 'center'}}>
  <Card.Img style={{ width: '50%',display:'block',margin:'auto',borderRadius:'50%'}} variant="top" src="/media/users/300_21.jpg" />
  <Card.Body>
    <Card.Title>Pravin Poshmani</Card.Title>
    <Card.Text>
     7/12
    </Card.Text>
    <Card.Text>
     3 logs missed
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
      </NavLink>
       );
  }
   
  export default CustomCard;
import React from 'react';
import {Button, Card, Accordion} from "react-bootstrap";
const Accordian = () => {
    return ( 
        <Accordion defaultActiveKey="0">
  <Card style={{margin:'5px',border:'2px solid green', borderRadius:'5px'}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Morning
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        fdnjdfnfdffbdffeffadnsdhsdfhasjfnskjdffnsakjfbsfdsashfsahfgsfhhsafashdjasdhasj
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card style={{margin:'5px',border:'2px solid red', borderRadius:'5px'}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Afternoon
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card style={{margin:'5px',border:'2px solid green', borderRadius:'5px'}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Evening
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
     );
}
 
export default Accordian;
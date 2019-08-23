import React from "react";
import "./style.css";
import placeholder from "../images/image-placeholder.jpg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Pictures(props) {
  const photo = props.profilePhotoURL ? props.profilePhotoURL : placeholder;
  const url = props.profilePhotoURL ? props.profilePhotoURL : "";

  return (



<Container>

  <Row>
    <Col>
    <Button variant="success" size="lg" onClick={props.showWidget}>Upload picture</Button>
      <br />

      <img className="profileImg" src={photo} />

      <br />
      <p>This is the URL: <span><a href={url}>{url}</a></span></p>
    </Col>
  </Row>

</Container>
    // <div>
 

    //   <button onClick={props.showWidget}>Upload picture</button>
    //   <br />

    //   <img className="profileImg" src={photo} />

    //   <br />
    //   <p>This is the URL: <span><a href={url}>{url}</a></span></p>
      
    // </div>
  );
}

export default Pictures;





import React from "react";
import "./style.css";
import placeholder from "../images/image-placeholder.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Pictures(props) {
  const photo = props.profilePhotoURL ? props.profilePhotoURL : placeholder;
  const url = props.profilePhotoURL ? props.profilePhotoURL : "";

  const type = props.type;

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="success" size="lg" onClick={props.showWidget}>
            Upload picture
          </Button>
          <br />
        
          {{type} === "image" ? (
            <img className="profileImg" src={photo} alt="media file" />
          ) : (
            <video autoPlay width="320" height="240" controls>
              <source src={photo} type="video/mp4" />
            </video>
          )}
          <br />

          <p>
            This is the picture URL:{" "}
            <span>
              <a href={url}>{url}</a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Pictures;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Image } from "react-bootstrap";
import Gif from "../images/aim.gif";
import "../styles/AimSection.css";

function AimSection() {
  return (
    <Container fluid className="p-3">
      <h1>Our Aim</h1>
      <div className="d-flex aim-body mx-auto">
        <div className="aim-left">
          <Image src={Gif} className="illustration mx-auto" fluid />
        </div>
        <div className="aim-right">
          <p className="aim-description mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, dolores? Voluptate et unde, consequuntur eos earum qui
            voluptatibus, corporis vitae sint sit rem dolorem dolor neque minus
            quae accusantium cupiditate?Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <Button className="mt-4 mb-5">Join Us</Button>
        </div>
      </div>
    </Container>
  );
}

export default AimSection;

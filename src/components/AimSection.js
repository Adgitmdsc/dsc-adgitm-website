import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Image } from "react-bootstrap";
import Gif from "../images/aim.gif";
import "../styles/AimSection.css";

function AimSection() {
  return (
    <Container
      fluid
      className="p-3"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <h1>Our Aim</h1>
      <div className="d-flex aim-body mx-auto">
        <div className="aim-left">
          <Image src={Gif} className="illustration mx-auto" fluid />
        </div>
        <div className="aim-right">
          <p className="aim-description mt-md-5">
            At Developer Student Club, ADGITM we believe imagination has no
            limits and we can make almost anything possible through technology.
            We want to create leaders by empowering them to think out of the
            box.
          </p>
          <a href="https://forms.gle/Qx21QCW9iG5B3XFVA"><Button className="mt-4 mb-5">Join Us</Button></a>
        </div>
      </div>
    </Container>
  );
}

export default AimSection;

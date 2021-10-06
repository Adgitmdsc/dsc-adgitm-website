import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Image } from "react-bootstrap";
import "../styles/ProjectSection.css";

function ProjectSection() {
  return (
    <Container fluid className="p-3">
      <h1>Projects</h1>
      <div className = "d-flex project-body mx-auto">
      <div className="left">
      <Image src="https://i.ibb.co/myx02Dg/Organizing-projects-rafiki.png" className = "illustration mx-auto" fluid />
      </div>
      <div className="right">
            <p className = "project-description mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores? Voluptate et unde, consequuntur eos earum qui voluptatibus, corporis vitae sint sit rem dolorem dolor neque minus quae accusantium cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className = "mt-4">Know More</Button>
      </div>
      </div>
    </Container>
  );
}

export default ProjectSection;

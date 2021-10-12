import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Image } from "react-bootstrap";
import "../styles/ProjectSection.css";

function ProjectSection() {
  return (
    <Container fluid className="p-3">
      <h1>Projects</h1>
      <div className="d-flex project-body mx-auto">
        <div className="left">
          <Image
            src="https://i.ibb.co/myx02Dg/Organizing-projects-rafiki.png"
            className="illustration mx-auto"
            fluid
          />
        </div>
        <div className="right">
          <p className="project-description mt-5">
            Projects provide an organized way of bringing about some kind of
            change such as developing a new product, building a bridge across a
            problem, and finding a cure for diseases. Without projects,
            businesses and our whole way of life would stagnate as we simply
            maintained the status quo. So, we want you to get your hands dirty.
            We will be having a curated list of product so that you can turn
            theory into practice.
          </p>
          <Button className="mt-4">Know More</Button>
        </div>
      </div>
    </Container>
  );
}

export default ProjectSection;

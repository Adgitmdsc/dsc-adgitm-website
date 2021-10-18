import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { projects } from "./data";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../styles/ProjectCard.css";
import { motion } from "framer-motion";

function ProjectCard() {
  const allCatValues = [
    "All",
    ...new Set(projects.map((curElem) => curElem.category)),
  ];

  const [categoryItems, setCategoryItems] = useState(allCatValues);

  const [items, setItems] = useState(projects);

  const filterMenu = (category) => {
    if (category === "All") {
      setItems(projects);
      return;
    }

    const updatedItems = projects.filter((curElem) => {
      return curElem.category === category;
    });

    setItems(updatedItems);
  };

  return (
    <motion.div
      className="mt-3"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="grid">
        <h1>PROJECTS</h1>
        <hr />
        <div className="buttons">
          {categoryItems.map((curElem, index) => {
            return (
              <Button
                className="btn m-2"
                key={index}
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </Button>
            );
          })}
        </div>

        <Row>
          {items.map((elem) => {
            const { id, title, image, visit, source } = elem;
            return (
              <Col lg={4} md={6} sm={12} key={id} className="mb-3 p-3 mx-auto">
                <Card className="mb-3 bg-dark hoverEffect">
                  <Card.Img variant="top" className="img" src={image} />
                  <Card.Body className="overlay">
                    <Card.Title className="main-title">{title}</Card.Title>
                    <p>
                      <Card.Link className="links" href={visit}>
                        View Live
                      </Card.Link>
                      <Card.Link className="links" href={source}>
                        Source Code
                      </Card.Link>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

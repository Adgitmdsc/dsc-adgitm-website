import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Instagram } from "react-bootstrap-icons";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/TeamCard.css";

function TeamSection() {
  return (
    <Container fluid className="mobile-padding p-4 bg-dark w-100">
      <Row>
        <Col>
          <Carousel nextLabel="" prevLabel="" interval={5000}>
            <Carousel.Item>
              <div className="d-flex justify-content-around align-items-center">
                <Card className="text-center team-card">
                  <div className="d-flex justify-content-center wrap">
                    <div className="d-flex flex-column align-item-center">
                      <img
                        src="https://source.unsplash.com/featured/?boy"
                        alt="memberDP"
                        className="rounded-circle"
                      />
                      <div className="mt-2">
                        <h3>Card Title</h3>
                        <h4 className="text-muted">Card Subtitle</h4>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <q className="fs-4">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </q>
                      <div className="d-flex w-100 mt-5 fs-3 justify-content-around social-links">
                        <Linkedin color="#0077b5" />
                        <Github color="#000" />
                        <Instagram color="#d6249f" />
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around align-items-center">
                <Card className="text-center team-card">
                  <div className="d-flex justify-content-center wrap">
                    <div className="d-flex flex-column align-item-center">
                      <img
                        src="https://source.unsplash.com/featured/?person"
                        alt="memberDP"
                        className="rounded-circle"
                      />
                      <div className="mt-2">
                        <h3>Card Title</h3>
                        <h4 className="text-muted">Card Subtitle</h4>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <q className="fs-4">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </q>
                      <div className="d-flex w-100 mt-5 fs-3 justify-content-around social-links">
                        <Linkedin color="#0077b5" />
                        <Github color="#000" />
                        <Instagram color="#d6249f" />
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around align-items-center">
                <Card className="text-center team-card">
                  <div className="d-flex justify-content-center wrap">
                    <div className="d-flex flex-column align-item-center">
                      <img
                        src="https://source.unsplash.com/featured/?girl"
                        alt="memberDP"
                        className="rounded-circle"
                      />
                      <div className="mt-2">
                        <h3>Card Title</h3>
                        <h4 className="text-muted">Card Subtitle</h4>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <q className="fs-4">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </q>
                      <div className="d-flex w-100 mt-5 fs-3 justify-content-around social-links">
                        <Linkedin color="#0077b5" />
                        <Github color="#000" />
                        <Instagram color="#d6249f" />
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamSection;

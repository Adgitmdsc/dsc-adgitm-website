import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <Container
      fluid
      className="p-3"
      data-sal="slide-up"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <h1>Blog and Resources</h1>
      <div className="d-flex justify-content-between direction">
        <div className="d-flex flex-column justify-content-start">
          <div className="blog-description">
            <p>
              The main purpose of a blog is to connect you to the relevant
              audience. It is to boost your traffic and send quality leads to
              your website/projects. In our community, we believe to make
              projects collectively and spread word by writing blogs or open
              source your projects.
              <br />
              If you think you can write a blog, we are free to publish on our
              GDSC medium feed. Please contact us on our
              <a href="mailto:googldevelopersadgitm@gmail.com"> email</a>.
            </p>
            <button className="btn btn-primary mt-3">Know More</button>
          </div>
        </div>
        <img
          src="https://my.pobble.com/hs-fs/hubfs/motivated-writer-no-bg-5.gif?width=1200&name=motivated-writer-no-bg-5.gif"
          alt="GIF"
          className="gif-logo"
        />
      </div>
    </Container>
  );
}

export default BlogSection;

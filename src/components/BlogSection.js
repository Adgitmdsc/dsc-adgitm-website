import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <Container fluid className="p-3">
      <h1>Blog and Resources</h1>
      <div className="d-flex justify-content-between direction">
        <div className="d-flex flex-column justify-content-start">
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            animi inventore blanditiis id voluptas velit necessitatibus nam,
            voluptatibus eveniet odit, reiciendis tenetur, quidem ducimus
            repellendus nihil totam ipsum. Optio, illo reiciendis necessitatibus
            est id similique ex?
            <button className="btn btn-primary mt-4 mb-5">Know More</button>
          </p>
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

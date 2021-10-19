import React from "react";
import Navbar from "../components/NavbarComponent";
import Helmet from "../components/Meta";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";
import "../styles/404page.css";

const NotFoundPage = () => {
  return (
    <div className="errpage">
      <Helmet />
      <Navbar />
      <img
        src="https://image.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg"
        alt="404 Page"
        className="bg-image"
      />
      <Button className="mt-4 text-light"><Link to="/" className="text-light">Go Back Home</Link></Button>
    </div>
  );
};

export default NotFoundPage;

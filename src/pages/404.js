import React from "react";
import Navbar from "../components/NavbarComponent";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import Favicon from "../images/favicon.ico";
import "../styles/404page.css";

const NotFoundPage = () => {
  return (
    <div className="errpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found: 404</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      </Helmet>
      <Navbar />
      <img
        src="https://image.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg"
        alt="404 Page"
        className="bg-image"
      />
      <Button className="mt-4 text-light">Go back Home</Button>
    </div>
  );
};

export default NotFoundPage;

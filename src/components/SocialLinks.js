import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Linkedin, Github, Instagram, Twitter } from "react-bootstrap-icons";
import "../styles/SocialLinks.css";

function SocialLinks() {
  return (
    <div id="socialLinks">
      <div className="socials-container">
        <a
          href="https://in.linkedin.com/company/dscadgitm"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin
            className="sticky-icons"
            id="linkedin-icon"
            style={{ fontSize: "1.6rem" }}
          />
        </a>

        <a href="https://github.com/Adgitmdsc" target="_blank" rel="noreferrer">
          <Github
            className="sticky-icons"
            id="github-icon"
            style={{ fontSize: "1.6rem" }}
          />
        </a>

        <a
          href="https://www.instagram.com/gdsc_adgitm/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram
            className="sticky-icons"
            id="instagram-icon"
            style={{ fontSize: "1.6rem" }}
          />
        </a>

        <a
          href="https://twitter.com/dscadgitm"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter
            className="sticky-icons"
            id="twitter-icon"
            style={{ fontSize: "1.6rem" }}
          />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;

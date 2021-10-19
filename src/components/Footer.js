import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Linkedin, Github, Instagram, Twitter } from "react-bootstrap-icons";
import "../styles/SocialLinks.css";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#111111" }}
    >
      <section className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3" style={{ fontSize: 24, fontWeight: 600 }}>
              <img
                style={{ height: 30, marginRight: 10 }}
                src="https://www.dscsdmc.org/img/logo.png"
                alt=""
              />
              DSC ADGITM
            </div>
          </div>
          <div
            id="footer-socials"
            style={{ display: "none" }}
            className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end pb-3"
          >
            <a
              style={{ marginLeft: 20 }}
              href="https://in.linkedin.com/company/dscadgitm"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin style={{ fontSize: "1.6rem", color: "#0077b5" }} />
            </a>

            <a
              style={{ marginLeft: 20 }}
              href="https://github.com/Adgitmdsc"
              target="_blank"
              rel="noreferrer"
            >
              <Github style={{ fontSize: "1.6rem", color: "#fff" }} />
            </a>

            <a
              style={{ marginLeft: 20 }}
              href="https://www.instagram.com/gdsc_adgitm/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram style={{ fontSize: "1.6rem", color: "#d6249f" }} />
            </a>

            <a
              style={{ marginLeft: 20 }}
              href="https://twitter.com/dscadgitm"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter style={{ fontSize: "1.6rem", color: "#0077b5" }} />
            </a>
          </div>
          <div
            id="copyright"
            className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end"
          >
            Copyright &#169; DSC ADGITM@2021
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

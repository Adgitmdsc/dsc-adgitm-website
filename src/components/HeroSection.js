import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import "../styles/HeroSection.css";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      <Container fluid className="p-3 HeroSection">
        <div className="d-flex justify-content-between direction mt-5 ">
          <motion.div
            className="d-flex flex-column justify-content-start pt-3 mt-5"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            <h1
              className="hero-header"
              style={{ textAlign: "left", paddingLeft: "6rem" }}
            >
              Welcome Aboard
            </h1>
            <p
              style={{
                textAlign: "left",
                paddingLeft: "6rem",
              }}
              className="pt-5 hero-text"
            >
              The Google Developer student clubs ADGITM is a community creating
              a peer to peer environment by bringing developers under one roof
              so that we connect, learn and grow by implementing projects that
              solve real-world problems!
              <br />
              We think slightly out of the box, we believe that a club’s
              resources must not only be channeled into conducting events but
              also to propagate learning and teaching, symbiotically.
            </p>
            <a
              className="discord-link"
              href="https://discord.com/invite/245QM6ckv3"
            >
              <motion.button
                whileHover={{
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                  backgroundColor: "#fff",
                  color: "rgb(3, 127, 255)",
                }}
                transition={{ duration: 0.05 }}
                style={{
                  marginLeft: "6rem",
                  width: "40%",
                  backgroundColor: "rgb(3, 127, 255)",
                }}
                className="btn mt-3 hero-button"
              >
                Collaborate on Project
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            style={{ width: "40%" }}
            src="https://dscupt.tech/_next/static/images/home-875df7ff864cdbe3f228360a1b1e263f.webp"
            alt="DSC Group Logo"
            id="hero-image"
          />
        </div>
      </Container>
      <a style={{ cursor: "pointer" }} href="#aimSection" id="aimSection">
        <img
          className="pb-4 pt-1 mb-4 mt-4 arrow"
          src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-1.png"
          alt="down-arrow"
        />
      </a>
    </>
  );
}

export default HeroSection;

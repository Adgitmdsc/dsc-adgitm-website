import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <motion.div fluid className="bg-dark text-white p-3"
    initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}>
      <h1>DSC Lead</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5">
        <TeamCard />
      </div>
      <h1>Core Team</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <h1>Web-Dev Team</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <h1>AI/ML Team</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5">
        <TeamCard />
        <TeamCard />
      </div>
      <h1>Non-Tech Team</h1>
      <div className="member-section mb-5">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </motion.div>
  );
}

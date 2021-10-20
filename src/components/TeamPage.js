import React from "react";
import { members } from "./data";
import "bootstrap/dist/css/bootstrap.css";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

export default function TeamPage() {
  const dscLead = members["DSC Lead"];
  const coreMembers = members["Core Team"];
  const webMembers = members["Web Dev"];
  const nonTechMembers = members["Non Tech"];
  const AiMembers = members["AI Team"];

  return (
    <motion.div
      className="bg-dark text-white p-5 mt-5"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>DSC Lead</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5 p-4">
        <TeamCard data={dscLead} />
      </div>
      <h1>Core Team</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5 p-4">
        {coreMembers.map((card, index) => {
          return <TeamCard data={card} key={index} />;
        })}
      </div>
      <h1>Web-Dev Team</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5 p-4">
        {webMembers.map((card, index) => {
          return <TeamCard data={card} key={index} />;
        })}
      </div>
      <h1>AI/ML Team</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5 p-4">
        {AiMembers.map((card, index) => {
          return <TeamCard data={card} key={index} />;
        })}
      </div>
      <h1>Non-Tech Team</h1>
      <div className="member-section mb-5 p-4">
        {nonTechMembers.map((card, index) => {
          return <TeamCard data={card} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

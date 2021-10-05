import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/TeamCard.css";

function TeamCard() {
  return (
    <div className="member-card d-flex flex-column align-items-center p-2">
      <div>
        <img
          src="https://source.unsplash.com/featured/?boy"
          alt="memberDP"
          className="rounded"
        />
      </div>
      <div className="text-center pt-1">
        <h4 className="member-link">
          <a href="/" target="_blank">
            Name of person
          </a>
        </h4>
        <h5 className="text-wrap designation">Design and Development Head</h5>
      </div>
    </div>
  );
}

export default TeamCard;

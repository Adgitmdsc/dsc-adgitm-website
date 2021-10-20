import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/TeamCard.css";

function TeamCard({ data }) {
  return (
    <div
      className="member-card d-flex flex-column align-items-center p-2"
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <div>
        <img src={data.image} alt="memberDP" className="rounded" />
      </div>
      <div className="text-center pt-1">
        <h4 className="member-link">
          <a href={data.linkedin || "#"} target="_blank" rel="noreferrer">
            {data.name}
          </a>
        </h4>
        <h5 className="text-wrap designation">{data.designation}</h5>
      </div>
    </div>
  );
}

export default TeamCard;

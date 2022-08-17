/* eslint-disable */
import React from "react";

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Felix Ouma",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/16392046?v=4",
    },
    {
      id: 2,
      name: "Grayce Muthui",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/95374858?v=4",
    },
    {
      id: 3,
      name: "Christian Siku",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/101924220?v=4",
    },
    {
      id: 4,
      name: "Christabelle Youta",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/98928638?v=4",
    },
    {
      id: 5,
      name: "Basir Mohammadi",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/101289027?s=100&v=4",
    },
    {
      id: 6,
      name: "Favour Ezeugwa",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/99246359?s=100&v=4",
    },
  ];
  return (
    <div className="container team-section">
      <div className="section-head">
        <h5>Team Members</h5>
        <span className="line"></span>
      </div>

      <div className="row team-content">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"></div>
      </div>
    </div>
  );
};

export default Team;

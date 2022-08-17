/* eslint-disable */
import React from "react";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import './team.css';

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
      name: "Afolabi Akorede",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/78634841?v=4",
    },
    {
      id: 6,
      name: "Abby Nyakara",
      text: "It is not everyday you come across a passionate and truthworthy financial adviser",
      img: "https://avatars.githubusercontent.com/u/81410040?v=4",
    },
  ];
  return (
    <div className="container team-section">
      <div className="section-head">
        <h5>Team Members</h5>
        <span className="line"></span>
      </div>

      <div className="row team-content">
        {teamData.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="card team-items">
              <img src={item.img} alt="images" />
              <div className="team-info">
              <h5>{item.name}</h5>
              <p>{item.text}</p>
              </div>
              <span className="team-line"></span>

              <div className="footer-icons">
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
                <p>
                  <AiOutlineTwitter />
                </p>
              </div>
            </div>           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

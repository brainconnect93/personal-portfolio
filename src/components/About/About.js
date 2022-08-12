/* eslint-disable */
import React from "react";
import "./about.css";
import dubai from "../../Images/dubai.jpg";

const About = () => (
  <div className="container about-sec">
    <div className="row about-content">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="about-img">
          <img src={dubai} alt="dubai" height="300px" width="300px" />
        </div>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="about-details">
          <div className="about-text">
            <h4>About</h4>
            <span className="line" />
          </div>
          <p>
            Hello I&apos;m a software developer! I can help you build a product,
            feature or website. Look through some of my work and experience! and
            let me be your one and only plug, don&apos;t hestiate to contact me.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

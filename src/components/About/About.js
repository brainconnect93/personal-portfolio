/* eslint-disable */
import React from "react";
import "./about.css";
import dubai from "../../Images/dubai.jpg";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRubyonrails } from "react-icons/si";

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
            <div className="come"></div>
          </div>
          <p>
            Hello I&apos;m a developer! I can help you build a product, feature
            or website. Let me be your plug, don&apos;t hestiate to contact me.
          </p>

          <div className="about-cards">
            <div className="about-items">
              <div className="about-icon">
                <p>
                  <SiRubyonrails size={50} />
                </p>
              </div>
              <div>
                <h6>Ruby on rail</h6>
                <p>
                  Rails is a full-stack framework. It ships with all the tools
                  needed to build amazing web apps.
                </p>
              </div>
            </div>
            </div>

            <div className="about-cards">
            <div className="about-items">
              <div className="about-icon">
                <p>
                  <FaReact size={40} />
                </p>
              </div>
              <div>
                <h6>React</h6>
                <p>
                  React is a JavaScript library for building user interfaces.
                </p>
              </div>
            </div>
            </div>

            <div className="about-cards">
            <div className="about-items">
              <div className="about-icon">
                <p>
                  <SiJavascript size={40} />
                </p>
              </div>
              <div>
                <h6>JavaScript</h6>
                <p>
                  JavaScript is the world&apos;s most popular programming
                  language.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default About;

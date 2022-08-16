/* eslint-disable */
import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-section">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-deatils">
              <h5>About</h5>
              <p>
                I am Afolabi Akorede a software developer, with years of
                experience on JavaScript, React, Redux, Tailwind, Ruby, Ruby on
                rail and many more. I can help you build a product, feature or
                website Look through some of my work and experience! If you like
                what you see and have a project you need to work on, dont
                hestiate to contact me.
              </p>
              <span className="footer-icons">
                <p>
                  <FaFacebookSquare size={20} />
                </p>
                <p>
                  <BsTwitter size={20} />
                </p>
                <p>
                  <FaInstagramSquare size={20} />
                </p>
                <p>
                  <BsLinkedin size={20} />
                </p>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">Footer</div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">Footer</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

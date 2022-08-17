/* eslint-disable */
import React from "react";
import { FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-section">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about">
              <h5>About</h5>
              <p>
                I am Afolabi Akorede a software developer, with years of
                experience on JavaScript, React, Redux, Tailwind, Ruby, Ruby on
                rail and many more. I can help you build a product, feature or
                website.
              </p>
              <span className="footer-icons">
                <p>
                  <FaFacebookSquare size={20} />
                </p>
                <p>
                  <AiFillTwitterSquare size={22} />
                </p>
                <p>
                  <FaInstagramSquare size={20} />
                </p>
                <p>
                  <BsLinkedin size={18} />
                </p>
                <p>
                  <FaGithubSquare size={21} />
                </p>
              </span>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h5>Service</h5>
              <div className="footer-item">
                <li>Website Design</li>
                <li>Innovation</li>
                <li>Technology</li>
                <li>Media Marketing</li>
                <li>Product Sort & Design</li>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="footer-custom">
              <h5>Customer Care</h5>
              <div className="footer-item">
                <li>Log In</li>
                <li>My Account</li>
                <li>Wish List</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

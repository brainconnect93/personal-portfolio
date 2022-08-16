/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [navBarScroll, setNavBarScroll] = useState(false);
  const seeColorChange = () => {
    if (window.scrollY >= 500) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  };

  window.addEventListener('scroll', seeColorChange);

  return (
    <nav className={navBarScroll ? 'nav-color nav-menu' : 'nav-menu'}>
      <ul>
        <li className="nav-items">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
        </li>

        <li className="nav-items">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
            About
          </Link>
        </li>

        <li className="nav-items">
          <Link to="service" spy={true} smooth={true} offset={-100} duration={100}>
            Service
          </Link>
        </li>

        <li className="nav-items">
          <Link to="career" spy={true} smooth={true} offset={-100} duration={100}>
            Career
          </Link>
        </li>

        <li className="nav-items">
          <Link to="video" spy={true} smooth={true} offset={-100} duration={100}>
            Video
          </Link>
        </li>

        <li className="nav-items">
          <Link to="team" spy={true} smooth={true} offset={-100} duration={100}>
            Team
          </Link>
        </li>

        <li className="nav-items">
          <Link to="testy" spy={true} smooth={true} offset={-100} duration={100}>
            Testimonial
          </Link>
        </li>

        <li className="nav-items">
          <Link to="feedback" spy={true} smooth={true} offset={-100} duration={100}>
            Feedback
          </Link>
        </li>

        <li className="nav-items">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

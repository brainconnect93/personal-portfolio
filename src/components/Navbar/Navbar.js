import React, { useState } from 'react';
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
        <li className="nav-items">Home</li>
        <li className="nav-items">About</li>
        <li className="nav-items">Service</li>
        <li className="nav-items">Career</li>
        <li className="nav-items">Video</li>
        <li className="nav-items">Team</li>
        <li className="nav-items">Testimonial</li>
        <li className="nav-items">Feedback</li>
        <li className="nav-items">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

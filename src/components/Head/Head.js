import React from 'react';
import './head.css';
import Typewriter from 'typewriter-effect';

const Head = () => (
  <div className="container-fluid head">
    <div className="container head-content">
      <h1 className="head-text">
        <Typewriter
          options={{
            strings: [
              'Full-Stack developer',
              'Fron-End developer',
              'JavaScript and React',
              'UI/UX Design',
              'Customer Service',
            ],
            autoStart: true,
            loop: true,
            delay: 10,
          }}
        />
      </h1>
      <p>
        I am Afolabi Akorede a software developer, with years of experience on
        JavaScript, React, Redux, Tailwind, Ruby, Ruby on rail and many more. I
        can help you build a product, feature or website Look through some of my
        work and experience! If you like what you see and have a project you
        need to work on, dont hestiate to contact me.
      </p>
      <button type="button" className="btn-details">
        View Details
      </button>
    </div>
  </div>
);

export default Head;

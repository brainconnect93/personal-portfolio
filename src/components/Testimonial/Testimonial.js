/* eslint-disable */
import React from 'react';
import './testimonial.css';

const Testimonial = () => {

    const testimonialData = [
      {
        "img": "../../Images/Passport.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Afolabi Akorede",
        "title": "Front-End Developer",
      },
      {
        "img": "../../Images/felix.png",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Felix Ouma",
        "title": "Full-Stack Developer",
      },
      {
        "img": "../../Images/IMG-20210111-WA0010.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Afolabi Ikhmot",
        "title": "Accountant and Data Scientist",
      },
      {
        "img": "../../Images/pexels-antony-trivet-12887434.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Anthony Trivet",
        "title": "React and Javascript developer",
      },
      {
        "img": "../../Images/pexels-cottonbro-6970106.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Christabelle Chris",
        "title": "Software Engineer",
      },
      {
        "img": "../../Images/pexels-david-kwasi-amuzu-5471615.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "David Kwasi",
        "title": "Django Developer",
      },
      {
        "img": "../../Images/pexels-skildring-by-andreas-ellegaard-12871449.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Andreas Ellegaard",
        "title": "Ruby Developer",
      },
      {
        "img": "../../Images/pexels-jairo-david-arboleda-1432237.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Jairo David",
        "title": "Node Js Developer",
      },
      {
        "img": "../../Images/pexels-pexels-user-12912964.jpg",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Christian Siku",
        "title": "Node Js Developer",
      },
    ];

  return (
    <div className="container testy-section">
      <div className="section-head">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="row testy-content">
        {testimonialData.map((item,index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="testy-cards">
              <p>{item.content}</p>
              <span>{item.name}</span>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

/* eslint-disable */
import React, { useState } from 'react';
import './testimonial.css';

const Testimonial = () => {

    const testimonialData = [
      {
        "image": "https://avatars.githubusercontent.com/u/78634841?v=4",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Afolabi Akorede",
        "title": "Front-End Developer",
      },
      {
        "image": "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Andreas Ellegaard",
        "title": "Ruby Developer",
      },
      {
        "image": "https://avatars.githubusercontent.com/u/16392046?v=4",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Felix Ouma",
        "title": "Full-Stack Developer",
      },
      {
        "image": "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Anthony Trivet",
        "title": "React and Javascript developer",
      },
      {
        "image": "https://avatars.githubusercontent.com/u/98928638?v=4",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Christabelle Youta",
        "title": "Software Engineer",
      },
      {
        "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "David Kwasi",
        "title": "Django Developer",
      },
      {
        "image": "https://avatars.githubusercontent.com/u/95374858?v=4",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Grayce Muthui",
        "title": "Web Developer",
      },
      {
        "image": "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Jairo David",
        "title": "Ruby on rail developer",
      },
      {
        "image": "https://avatars.githubusercontent.com/u/101924220?v=4",
        "content": "Thanks to Microverse for given me the chnace to learn and become certified",
        "name": "Christian Siku",
        "title": "Node Js Developer",
      },
    ];

    const [seeMorePost, setSeeMorePost] = useState(3);

    const loadMore = () => {
      setSeeMorePost((prev) => prev+3)
    };

  return (
    <div className="container testy-section" id="testy">
      <div className="section-head">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="row testy-content">
        {testimonialData.slice(0,seeMorePost).map((item,index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

            <div className={index==0 ? "mark-testy-card" : "testy-cards"}>
              <img src={item.image} alt="images" />
              <p>{item.content}</p>
              <p>
                <span className="testy-name">{item.name}</span>
              </p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
        
        {seeMorePost>=testimonialData.length ? null : (
          <button type="button" 
          className="load-more-btn"
          onClick={loadMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

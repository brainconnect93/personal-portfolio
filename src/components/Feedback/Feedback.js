/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import "./feedback.css";

const Feedback = () => {
  const feedData = [
    {
      image:
        "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "Thanks to Microverse for given me the chance to learn and become certified",
      name: "Andreas Ellegaard",
      title: "Ruby Developer",
    },
    {
      image:
        "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "Thanks to Microverse for given me the chance to learn and become certified",
      name: "Anthony Trivet",
      title: "React and Javascript developer",
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "Thanks to Microverse for given me the chance to learn and become certified",
      name: "David Kwasi",
      title: "Django Developer",
    },
    {
      image:
        "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "Thanks to Microverse for given me the chance to learn and become certified",
      name: "Jairo David",
      title: "Ruby on rail developer",
    },
    {
        image:
          "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Thanks to Microverse for given me the chance to learn and become certified",
        name: "Andreas Ellegaard",
        title: "Front-End Developer",
      },
      {
        image:
          "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Thanks to Microverse for given me the chance to learn and become certified",
        name: "Anthony Trivet",
        title: "Fullstack developer",
      },
      {
        image:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Thanks to Microverse for given me the chance to learn and become certified",
        name: "David Kwasi",
        title: "PHP Developer",
      },
      {
        image:
          "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Thanks to Microverse for given me the chance to learn and become certified",
        name: "Jairo David",
        title: "NodeJs developer",
      },
      {
        image:
          "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Thanks to Microverse for given me the chance to learn and become certified",
        name: "Anthony Trivet",
        title: "Fullstack developer",
      },
      {
        image:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content:
          "Thanks to Microverse for given me the chance to learn and become certified",
        name: "David Kwasi",
        title: "PHP Developer",
      },
   ];

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container feed-section" id="feedback">
      <div className="section-head">
        <h5>Feedback</h5>
        <span className="line"></span>
      </div>

      <Slider {...settings}>
      <div className="row feed-content">
        {feedData.map((item,index) => (
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card feed-slider" key={index}>
              <img src={item.image} alt="feedback-image" className="feed-img" />
              <p>{item.content}</p>
              <h6>{item.name}</h6>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      </Slider>
      
    </div>
  );
};

export default Feedback;

/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css";

const Feedback = () => {
  const feedData = [
    {
      image:
        "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Andreas Ellegaard",
      title: "Ruby Developer",
    },
    {
      image:
        "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Anthony Trivet",
      title: "React and Javascript developer",
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "David Kwasi",
      title: "Django Developer",
    },
    {
      image:
        "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Jairo David",
      title: "Ruby on rail developer",
    },
    {
      image:
        "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Andreas Ellegaard",
      title: "Front-End Developer",
    },
    {
      image:
        "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Anthony Trivet",
      title: "Fullstack developer",
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "David Kwasi",
      title: "PHP Developer",
    },
    {
      image:
        "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Jairo David",
      title: "NodeJs developer",
    },
    {
      image:
        "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "Anthony Trivet",
      title: "Fullstack developer",
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Thanks to Microverse for given me the chance to learn",
      name: "David Kwasi",
      title: "PHP Developer",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoPlay: true,
    slidesPerRow: 1,
    row: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container feed-section" id="feedback">
      <div className="section-head">
        <h5>Feedback</h5>
        <span className="line"></span>
      </div>

      <div className="feed-content">
        <Slider {...settings}>
          {feedData.map((item, index) => (
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              key={index}
            >
              <div className="card feed-slider">
                <img
                  src={item.image}
                  alt="feedback-image"
                  className="feed-img"
                />
                <p>{item.content}</p>
                <h6>{item.name}</h6>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;

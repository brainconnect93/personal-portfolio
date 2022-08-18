/* eslint-disable */
import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

const Video = () => {
  const videoData = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=bJzb-RuUcMU",
      title: "Learn Programming for beginner",
      content: "Thanks to Microverse for given me the chance to learn",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=CIRGjwYgdT4",
      title: "Programming vs Coding",
      content: "Thanks to Microverse for given me the chance to learn",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=79pKwdiqcwI",
      title: "Fastest way to learn coding",
      content: "Thanks to Microverse for given me the chance to learn",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=MRIMT0xPXFI",
      title: "Learn React in 5Minutes",
      content: "Thanks to Microverse for given me the chance to learn",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=0yeua71j5b4",
      title: "How to Master ReactJS",
      content: "Thanks to Microverse for given me the chance to learn",
    },
    {
      id: 6,
      url: "https://www.youtube.com/watch?v=a00NRSFgHsY",
      title: "JavaScript concept to know",
      content: "Thanks to Microverse for given me the chance to learn",
    },
  ];

  return (
    <div className="container video-section">
      <div className="section-head">
        <h5>Video</h5>
        <span className="line"></span>
      </div>

      <div className="row video-content">
        {videoData.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="video-details">
              <ReactPlayer
                url={item.url}
                loop={true}
                controls
                playing={false}
                width="auto"
                height="250px"
              />

              <div className="video-text">
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;

/* eslint-disable */
import React from "react";
import "./service.css";

const Service = () => {
  const serviceList = [
    {
      id: 1,
      service1: "Full-Stack web developer",
      service2: "Front-End developer",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 2,
      service1: "Full-Stack web developer",
      service2: "Front-End developer",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 3,
      service1: "Full-Stack web developer",
      service2: "Front-End developer",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 4,
      service1: "Full-Stack web developer",
      service2: "Front-End developer",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 5,
      service1: "Full-Stack web developer",
      service2: "Front-End developer",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 6,
      service1: "Full-Stack web developer",
      service2: "Front-End developer",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
  ];
  return (
    <div className="container service-section">
      <div className="section-head">
        <h4>Services</h4>
      </div>

      <div className="row">
        {serviceList.map((item, index) =>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <h4>Example</h4>
          </div>
        )};
      </div>
    </div>
  );
};

export default Service;

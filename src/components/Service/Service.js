/* eslint-disable */
import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";

const Service = () => {
  const serviceList = [
    {
      id: 1,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 2,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 3,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 4,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 5,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 6,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 7,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
    {
      id: 8,
      service1: "Full-Stack development",
      service2: "Front-End development",
      service3: "UI/UX design",
      service4: "React and JavaScript",
    },
  ];

  const colors = [
    "#cd5c5c",
    "#f7d010",
    "#e48c6f",
    "#ab11ce",
    "#36ff25",
    "lightblue",
    "red",
    "blue"
  ];
  return (
    <div className="container service-section">
      <div className="section-head">
        <h4>Services</h4>
        <span className="line"></span>
      </div>

      <div className="row service-content">
        {serviceList.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="service">
              <span
                className="numbers"
                style={{ backgroundColor: colors[index] }}
              >
                <p>{item.id}</p>
              </span>

              <div className="service-list">
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service1}
                </p>
                <span className="list-line"></span>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service2}
                </p>
                <span className="list-line"></span>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service3}
                </p>
                <span className="list-line"></span>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service4}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

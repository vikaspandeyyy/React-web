import React from "react";
import "./Services.css";
import ServiceCard from "./Service_card";

function Services() {
  return (
    <div className="services__section">
      <div className="services__title">
        <h3 className="services__heading">Services</h3>
      </div>
      <div className="services_card">
          <ServiceCard title="Web Design and Development" para="This is crash course of web-designing"/>
          <ServiceCard title="Search Engine optimization" para="This is crash course of web-designing"/>
          <ServiceCard title="Python Development" para="This is crash course of web-designing"/>
          <ServiceCard title="Java Development" para="This is crash course of web-designing"/>
          <ServiceCard title="MERN stack development" para="This is crash course of web-designing"/>
          <ServiceCard title="MEAN stack development" para="This is crash course of web-designing"/>
          <ServiceCard title="Sales-force Technology" para="This is crash course of web-designing"/>
          <ServiceCard title="Software Testing" para="This is crash course of web-designing"/>
          <ServiceCard title="Machine Learning" para="This is crash course of web-designing"/>
      </div>
    </div>
  );
}

export default Services;

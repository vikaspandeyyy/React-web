import React from "react";
import "./Service_card.css";
import image from "./Img/Services.jpg";

function ServiceCard(props) {
  return (
    <div className="servicesCard">
      <div className="service_img">
        <img src={image} alt="service card" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.para}</p>
      <div className="Button">
        <button className="Btn">Read More</button>
      </div>
    </div>
  );
}

export default ServiceCard;

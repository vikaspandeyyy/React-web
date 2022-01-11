import React from "react";
import "./Card.css";
import firstCard from "./Img/first-card.jpg";

function Card() {
  return (
    <div className="imageSection">
      <div className="card__image">
        <img src={firstCard} alt="" />
      </div>
    </div>
  );
} 

export default Card;

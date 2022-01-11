import React from "react";
import Card from "./Card";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="Card">
      <div className="card__title">
        <p className="card__text">Products</p>
      </div>
      <div className="cardCarousel">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Carousel;

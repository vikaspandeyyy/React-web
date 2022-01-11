import React from "react";
import Card from "./Card";
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="portfolio__heading">
        <h2>{props.title}</h2>
      </div>
      <div className="portfolio__card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Portfolio;

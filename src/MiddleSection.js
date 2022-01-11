import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Services from "./Services";
import "./MiddleSection.css";
import LargeCard from "./LargeCard";
import Footer from "./Footer";

function MiddleSection() {
  return (
    <div>
      <Banner />
      <Carousel />
      <Services />
      <LargeCard />
      <Footer/>
    </div>
  );
}

export default MiddleSection;

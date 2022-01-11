import React from "react";
import "./Navbar.css";
import logo from "./Img/logo.svg"
function Navbar() {
  return (
    <>
      <div className="navbar__info">
        <div className="mail__info info">
          <i style={{ fontSize: "15px" }} className="fa">
            &#xf0e0;
          </i>
          <p>info@bytequests.com</p>
        </div>
        <div className="phone__info info">
          <i style={{ fontSize: "15px" }} className="fa">
            &#xf095;
          </i>
          <p>+91-9711999770, +1 833-880-3355</p>
        </div>
      </div>

      <div className="Navbar">
        <div className="Navbar__logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="navbar__right">
          <ul>
            <li className="navlist">Home</li>
            <li className="navlist">About US</li>
            <li className="navlist">Services</li>
            <li className="navlist">Products</li>
            <li className="navlist">Portfolio</li>
          </ul>
          <div className="button">
            <button className="btn">Contact US</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

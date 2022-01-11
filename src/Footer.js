import React from "react";
import logo from "./Img/logo.svg"
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="top__footer">
        <div className="top__left">
          <h2>Let's Discuss</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Eligendi fugit delectus nostrum quis!
          </p>
        </div>
        <div className="searchbar">
          <input type="text" />
          <button className="search__btn">Sign Up</button>
        </div>
      </div>
      <div className="middle__footer">
        <div className="flex-1">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Dolore neque illum <br />
            molestias quasi facilis.
          </p>
        </div>
        <div className="flex-2">
        <h3>Links</h3>
          <ul>
            <li className="list">Our Clients</li>
            <li className="list">Privacy Policy</li>
            <li className="list">Our Benifits</li>
          </ul>
        </div>
        <div className="flex-2">
          <h3>Information</h3>
          <ul>
            <li className="list">Our Clients</li>
            <li className="list">Privacy Policy</li>
            <li className="list">Our Benifits</li>
          </ul>
        </div>
        <div className="flex-2">
          <h3>Contact US</h3>
          <ul>
            <li className="list">+91 9711999770 , +1 833-880-3355</li>
            <li className="list">info@bytequests.com</li>
            <li className="list">84,Block A, Sector 4,Noida,UP,201301</li>
          </ul>
        </div>
      </div>
      <div className="bottom__footer">
        <p>Copyrights 2020 ByteQuest Software Private Limted. All Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

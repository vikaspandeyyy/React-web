import React from 'react'
import Background from './Img/Background.jpg';
import "./Banner.css";

function Banner() {
    return (
        <header className='banner'>
            <div className="banner__bg">
                <img src={Background} alt="Background__img" />
            </div>
            <div className="bg__text">
                <p className='banner__text'>Lorem, ipsum dolor.</p>
            </div>
        </header>
    )
}

export default Banner

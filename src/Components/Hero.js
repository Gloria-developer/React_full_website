import React from "react";
import backgroundImage from "../Assets/hero-banner.jpg"; 

const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="hero-banner" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content" data-aos="fade-up">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

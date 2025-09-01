import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Predict the Stock Market with our ML model</h1>
        <p>
          Get real-time predictions and insights to make smarter trading
          decisions.
        </p>
        <button className="hero-btn">Register</button>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom"; 

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); 
  };


  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Predict the Stock Market with our ML model</h1>
        <p>
          Get real-time predictions and insights to make smarter trading
          decisions.
        </p>
         <button className="hero-btn" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;

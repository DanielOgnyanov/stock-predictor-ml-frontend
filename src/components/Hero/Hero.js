import "./Hero.css";
import { useNavigate } from "react-router-dom"; 
import BlurText from "../BlurText/BlurText"; 

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); 
  };

  return (
    <section className="hero">
      <div className="hero-content">
      
        <BlurText
          text="Predict the Stock Market with our ML Model."
          animateBy="words"
          direction="top"
          delay={150}
          className="hero-title"
        />

        
        <BlurText
          text="Get real-time predictions and insights to make smarter trading decisions."
          animateBy="words"
          direction="bottom"
          delay={100}
          fontSize="25px"
          className="hero-subtitle"
        />

        <button className="hero-btn" onClick={handleRegisterClick}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

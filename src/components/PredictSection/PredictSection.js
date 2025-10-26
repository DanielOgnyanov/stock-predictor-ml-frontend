import React from "react";
import { useNavigate } from "react-router-dom";
import "./PredictSection.css";

function PredictSection({ isRegistered }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isRegistered) {
      navigate("/predict");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="predict-section">
      <p className="predict-text">
        Check our <span className="highlight">ML Algorithm</span> to predict the short-term price.
      </p>
      <button className="predict-button" onClick={handleClick}>
        Try Prediction
      </button>
    </div>
  );
}

export default PredictSection;

import React, { useState, useEffect } from "react";
import TrueFocusText from "../TrueFocusText/TrueFocusText";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose a Stock",
      description:
        "Select the stock symbol you want to analyze using our prediction tool.",
    },
    {
      title: "Get ML Prediction",
      description:
        "Our machine learning model predicts potential price movements based on historical data.",
    },
    {
      title: "Use Responsibly",
      description:
        "These are predictions, not guaranteed prices. Always make decisions responsibly.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="how-it-works">
      <TrueFocusText
        sentence="How It Works"
        blurAmount={4}
        borderColor="#00ffff"
        glowColor="rgba(0, 255, 255, 0.7)"
        animationDuration={0.6}
        pauseBetweenAnimations={1.2}
      />

      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-card ${index === activeIndex ? "active" : ""}`}
          >
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

import React from "react";
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

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

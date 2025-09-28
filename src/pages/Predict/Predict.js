import React, { useState } from "react";
import "./Predict.css";

const Predict = ({ onSubmit }) => {
    
  const symbols = ["AAPL", "MSFT", "NVDA", "GOOGL", "AMZN"];
  const [symbol, setSymbol] = useState(symbols[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(symbol);
  };

  return (
    <form className="predict-form" onSubmit={handleSubmit} aria-label="predict-form">
      <select
        aria-label="ticker-select"
        className="predict-select"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      >
        {symbols.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <button type="submit" className="predict-button" aria-label="predict-button">
        Predict
      </button>
    </form>
  );
};

export default Predict;

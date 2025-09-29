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
    <div className="predict-root">
      <form className="predict-form" onSubmit={handleSubmit}>
        <p>Select the stock and our ML will predict the possible price based on historical data.</p>
        <select
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

        <button type="submit" className="predict-button">
          Predict
        </button>
      </form>
    </div>
  );
};

export default Predict;

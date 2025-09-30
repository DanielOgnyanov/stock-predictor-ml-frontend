import React, { useState } from "react";
import "./Predict.css";

const Predict = () => {
  const symbols = ["AAPL", "MSFT", "NVDA", "GOOGL", "AMZN"];
  const [symbol, setSymbol] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symbol) return;

    setLoading(true);
    setResult(null);


    await new Promise((r) => setTimeout(r, 1500));

    // Mock test results
    setResult({ price: 182 });
    setLoading(false);
  };

  return (
    <div className="predict-root">
      <form className="predict-form" onSubmit={handleSubmit}>
        <h1 className="predict-title">Stock Price Predictor</h1>
        <p className="predict-subtitle">
          Select a stock ticker and let our ML model estimate the next trend.
        </p>

        <select
          className="predict-select"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        >
          <option value="">-- Select a stock --</option>
          {symbols.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button type="submit" className="predict-button" disabled={loading}>
          {loading ? "Predicting…" : "Predict"}
        </button>

        {result && (
          <div className="predict-result">
            <div className="ticker">{symbol}</div>
            <div className={`direction ${result.direction ? result.direction.toLowerCase() : ""}`}>
              {result.direction}
            </div>
            <div className="confidence">
              Price: {result.price}%
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Predict;

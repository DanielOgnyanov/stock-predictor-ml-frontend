import React, { useState } from "react";
import "./Predict.css";
import IndicatorInfo from "../../components/IndicatorInfo/IndicatorInfo";

const Predict = () => {
  const symbols = ["AAPL", "MSFT", "NVDA", "GOOGL", "AMZN"];
  const [symbol, setSymbol] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symbol) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:8080/api/predict/${symbol}/latest`
      );

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();
      setResult(data); 
    } catch (err) {
      setError("At the moment it is not possible to predict, try it later.");
    } finally {
      setLoading(false);
    }
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

        {loading && <div className="loading-spinner"></div>}

        {error && <div className="predict-error">{error}</div>}

        {result && (
          <div className="predict-result">
            <div className="ticker">{result.symbol}</div>
            <div className="price">
              Predicted Close: {Number(result.predicted_close).toFixed(2)}$
            </div>
          </div>
        )}
      </form>

      <IndicatorInfo />
    </div>
  );
};

export default Predict;

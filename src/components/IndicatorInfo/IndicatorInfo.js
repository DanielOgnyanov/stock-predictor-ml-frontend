import React from "react";
import "./IndicatorInfo.css";

const IndicatorInfo = () => {
  return (
    <div className="indicator-info">
      <h2>📘 Understanding Key Stock Indicators</h2>

      <div className="indicator-item">
        <h3>Moving Average (MA)</h3>
        <p>
          Shows the average price over a specific time period. It helps smooth out short-term
          fluctuations and identify the overall trend direction.
        </p>
      </div>

      <div className="indicator-item">
        <h3>Relative Strength Index (RSI)</h3>
        <p>
          Measures the speed and change of price movements. RSI values above 70 indicate
          overbought conditions, while below 30 indicate oversold conditions.
        </p>
      </div>

      <div className="indicator-item">
        <h3>Volume</h3>
        <p>
          Represents how many shares are traded within a specific time. High volume often means
          stronger price moves or trend confirmation.
        </p>
      </div>

      <div className="indicator-item">
        <h3>MACD (Moving Average Convergence Divergence)</h3>
        <p>
          A trend-following momentum indicator that shows the relationship between two moving
          averages, helping traders spot potential buy or sell signals.
        </p>
      </div>
    </div>
  );
};

export default IndicatorInfo;

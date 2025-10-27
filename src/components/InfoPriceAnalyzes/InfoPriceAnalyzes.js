import React from "react";
import "./InfoPriceAnalyzes.css";

const InfoPriceAnalyzes = () => {
  return (
    <div className="info-analyzes-section">
      <p className="info-analyzes-text">
        Understanding price movements is key to making better trading decisions. 
        The open price shows where the market started the day, while the high and 
        low values reflect the day’s volatility. When the closing price is consistently 
        higher than the opening price, it may indicate an upward trend. Conversely, 
        frequent lower closes suggest selling pressure. Analyzing these fluctuations 
        along with historical data can help identify short-term support and resistance 
        levels and recognize potential momentum shifts in the market.
      </p>
    </div>
  );
};

export default InfoPriceAnalyzes;

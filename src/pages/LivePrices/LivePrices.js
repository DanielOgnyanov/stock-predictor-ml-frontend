import React, { useEffect, useState } from "react";
import "./LivePrices.css";

const mockData = [
  { symbol: "AAPL", name: "Apple Inc.", price: 189.35, change: +0.72 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 142.19, change: -0.54 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 125.87, change: +1.23 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 251.45, change: -0.88 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 326.77, change: +0.45 },
];

function LivePrices() {
  const [stocks, setStocks] = useState(mockData);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate changes to see how look before the real call to Be
      setStocks((prev) =>
        prev.map((s) => ({
          ...s,
          price: +(s.price + (Math.random() - 0.5) * 0.5).toFixed(2),
          change: +(Math.random() * 2 - 1).toFixed(2),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-container">
      <h1 className="live-title">📊 Live Stock Prices</h1>
      <div className="stock-table">
        <div className="stock-header">
          <span>Symbol</span>
          <span>Company</span>
          <span>Price ($)</span>
          <span>Change (%)</span>
        </div>
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className={`stock-row ${stock.change >= 0 ? "up" : "down"}`}
          >
            <span>{stock.symbol}</span>
            <span>{stock.name}</span>
            <span>{stock.price.toFixed(2)}</span>
            <span>{stock.change >= 0 ? "+" : ""}
              {stock.change.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LivePrices;

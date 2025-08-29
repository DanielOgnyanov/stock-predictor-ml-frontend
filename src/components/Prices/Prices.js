import React from "react";
import "./Prices.css";

export default function Prices() {
  // my json for test
  const data = [
    { symbol: "AAPL", price: "187.23" },
    { symbol: "GOOGL", price: "134.56" },
    { symbol: "MSFT", price: "322.14" },
    { symbol: "TSLA", price: "251.80" },
  ];

  return (
    <section className="prices">
      <h2>Stock Prices</h2>
      <div className="prices-container">
        <table className="prices-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock, index) => (
              <tr key={index}>
                <td>{stock.symbol}</td>
                <td>{stock.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
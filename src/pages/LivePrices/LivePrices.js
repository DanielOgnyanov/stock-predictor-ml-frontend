import React, { useEffect, useState } from "react";
import "./LivePrices.css";
import { fetchStocks } from "../../api/stockApi";
import { useNavigate } from "react-router-dom";

function LivePrices() {
  const [prices, setPrices] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  let prevPrices = {};

  const updatePrices = async () => {
    const data = await fetchStocks();

    const updated = data.map((newItem) => {
      const oldPrice = prevPrices[newItem.symbol] ?? newItem.open; // fallback if first run
      const change = newItem.open - oldPrice;
      const changePercent = ((change / oldPrice) * 100).toFixed(2);

      
      prevPrices[newItem.symbol] = newItem.open;

      return {
        ...newItem,
        change: change.toFixed(2),
        changePercent,
      };
    });

    setPrices(updated);
  };

  updatePrices();
  const interval = setInterval(updatePrices, 5000);
  return () => clearInterval(interval);
}, []);


  const handleSymbolClick = (symbol) => {
    navigate(`/price-history/${symbol}`);
  };

  return (
    <div className="live-container">
      <h2 className="title-live-container">📈 Live Stock Prices</h2>

      <table className="price-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open ($)</th>
            <th>High ($)</th>
            <th>Low ($)</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((stock) => (
            <tr key={stock.symbol}>
              <td
                className="clickable-symbol"
                onClick={() => handleSymbolClick(stock.symbol)}
              >
                {stock.symbol}
              </td>
              <td>{stock.open.toFixed(2)}</td>
              <td>{stock.high.toFixed(2)}</td>
              <td>{stock.low.toFixed(2)}</td>
              <td
                className={
                  stock.change > 0
                    ? "up"
                    : stock.change < 0
                    ? "down"
                    : "neutral"
                }
              >
                {stock.change > 0 ? "▲" : stock.change < 0 ? "▼" : "–"}{" "}
                {stock.changePercent}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LivePrices;

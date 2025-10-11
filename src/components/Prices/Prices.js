import React, { useEffect, useState } from "react";
import { fetchStocks } from "../../api/stockApi";
import "./Prices.css";

export default function Prices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStocks = async () => {
      const stocks = await fetchStocks();
      setData(stocks);
    };

    getStocks();
  }, []);

  return (
    <section className="prices">
      <h2>Stock Prices</h2>
      <div className="prices-container">
        <table className="prices-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Open (USD)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock, index) => (
              <tr key={index}>
                <td>{stock.symbol}</td>
                <td>{stock.open}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

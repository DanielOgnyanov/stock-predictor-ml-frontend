import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchStocks } from "../../api/stockApi";
import "./Prices.css";

export default function Prices() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getStocks = async () => {
      const stocks = await fetchStocks();
      setData(stocks);
    };

    getStocks();
  }, []);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section className="prices">
      <h2>Stock Open Prices</h2>
      <div className="prices-cards">
        {data.map((stock, index) => (
          <div key={index} className="price-card">
            <div className="stock-symbol">{stock.symbol}</div>
            <div className="stock-price">${Number(stock.open).toFixed(2)}</div>
            <button className="price-btn" onClick={handleRegisterClick}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

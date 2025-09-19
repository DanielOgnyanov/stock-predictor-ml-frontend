import React, { useState } from "react";
import PricesTable from "../../components/PricesTable/PricesTable"; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./LivePricesPage.css";

const testPrices = {
  AAPL: [
    { time: "09:00", price: 180 },
    { time: "10:00", price: 182 },
    { time: "11:00", price: 181 },
    { time: "12:00", price: 185 },
    { time: "13:00", price: 183 },
  ],
  TSLA: [
    { time: "09:00", price: 250 },
    { time: "10:00", price: 260 },
    { time: "11:00", price: 258 },
    { time: "12:00", price: 265 },
    { time: "13:00", price: 262 },
  ],
};

function LivePricesPage() {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleRowClick = (symbol) => {
    setSelectedStock(symbol);
  };

  return (
    <div className="live-prices-page">
      <h2 className="page-title">📊 Live Stock Prices</h2>

      <PricesTable onRowClick={handleRowClick} />

      {selectedStock && (
        <div className="chart-section">
          <h3>{selectedStock} - Price Trend</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={testPrices[selectedStock]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#4caf50" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default LivePricesPage;

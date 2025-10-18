import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./PriceHistory.css";
import { fetchPriceHistory } from "../../api/stockApi"; 

export default function PriceHistory() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPriceHistory(); 
        setHistoryData(data);
      } catch (error) {
        console.error("Error loading history data:", error);
      }
    };

    getData();
  }, []);

  return (
    <section className="price-history">
      <h2 className="section-title">📈 Stock Price History</h2>

      {historyData.length === 0 ? (
        <p className="loading">Loading price history...</p>
      ) : (
        historyData.map((stock, index) => (
          <div className="chart-card" key={index}>
            <h3 className="symbol-title">{stock.symbol}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stock.open_prices}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis
                  dataKey="updatedAt"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                  stroke="#555"
                />
                <YAxis stroke="#555" />
                <Tooltip
                  labelFormatter={(label) =>
                    `Date: ${new Date(label).toLocaleString()}`
                  }
                  formatter={(value) => [`$${value}`, "Open"]}
                />
                <Line
                  type="monotone"
                  dataKey="open"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))
      )}
    </section>
  );
}

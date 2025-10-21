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
    <section className="price-history-section">
    

      {historyData.length === 0 ? (
        <p className="loading">Loading price history...</p>
      ) : (
        <div className="charts-grid">
          {historyData.map((stock, index) => (
            <div className="chart-card" key={index}>
         
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={stock.open_prices}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString()
                    }
                    stroke="#777"
                  />
                  <YAxis stroke="#777" />
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
                    dot={{ r: 2 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

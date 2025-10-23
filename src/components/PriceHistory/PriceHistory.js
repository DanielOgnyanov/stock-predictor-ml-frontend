import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPriceHistory } from "../../api/stockApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./PriceHistory.css";

function PriceHistory() {
  const { symbol } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const result = await fetchPriceHistory(symbol);
        setData(result);
      } catch (error) {
        console.error("Error fetching price history:", error);
      }
    };
    loadHistory();
  }, [symbol]);

  return (
    <div className="price-history-wrapper">
      <ResponsiveContainer width="90%" height="80%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fill: "#aaa" }}
            axisLine={{ stroke: "#444" }}
            tickLine={{ stroke: "#444" }}
          />
          <YAxis
            tick={{ fill: "#aaa" }}
            axisLine={{ stroke: "#444" }}
            tickLine={{ stroke: "#444" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2a2a2a",
              border: "none",
              color: "#aaffaa",
            }}
            labelStyle={{ color: "#aaffaa" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#90ee90"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceHistory;

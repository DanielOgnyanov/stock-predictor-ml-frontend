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
import PredictSection from "../PredictSection/PredictSection";
import {AuthContext} from "../../context/AuthContext";

function PriceHistory() {
  const { symbol } = useParams();
  const [data, setData] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const result = await fetchPriceHistory(symbol);

        const formatted = result.map((item) => {
          const d = new Date(item.date);
          const monthName = d.toLocaleString("en-US", { month: "short" });
          const day = String(d.getDate()).padStart(2, "0");
          const year = d.getFullYear();

          return {
            ...item,
            date: `${monthName} ${day}, ${year}`, 
          };
        });

        setData(formatted);
      } catch (error) {
        console.error("Error fetching price history:", error);
      }
    };
    loadHistory();
  }, [symbol]);


  return (
    <div className="price-history-wrapper">
      <h2 className="price-history-title">{symbol} - Open Price History</h2>

      <ResponsiveContainer width="80%" height="50%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fill: "transparent" }}
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
            formatter={(value) => [`$${Number(value).toFixed(2)}`, "Price"]}
            labelFormatter={(label) => {
              const d = new Date(label);
              if (isNaN(d)) return label;
              const monthName = d.toLocaleString("en-US", { month: "short" });
              const day = String(d.getDate()).padStart(2, "0");
              const year = d.getFullYear();
              return `${monthName} ${day}, ${year}`;
            }}
          />



          <Line
            type="monotone"
            dataKey="price"
            stroke="#90ee90"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, stroke: "#ffffff", strokeWidth: 2, fill: "#90ee90" }}
            connectNulls={true}
          />

        </LineChart>
      </ResponsiveContainer>
      <PredictSection isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default PriceHistory;

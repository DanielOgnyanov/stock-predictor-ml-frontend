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


        const formatted = result.map((item) => {
          const d = new Date(item.date);
          const day = String(d.getDate()).padStart(2, "0");
          const month = String(d.getMonth() + 1).padStart(2, "0");
          const year = d.getFullYear();

          return {
            ...item,
            date: `${day}/${month}/${year}`,
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

      <h2 className="price-history-title">{symbol} - Price History</h2>

      <ResponsiveContainer width="80%" height="50%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fill: "#aaa" }}
            axisLine={{ stroke: "#444" }}
            tickLine={{ stroke: "#444" }}
            tickFormatter={(date) => {

              if (!date) return "";
              const [day, month, year] = date.split("/").map(Number);
              if (!month || isNaN(month)) return "";
              const monthName = new Date(0, month - 1).toLocaleString("en-US", {
                month: "short",
              });
              return monthName;
            }}
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

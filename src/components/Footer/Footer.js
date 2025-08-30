import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Stock Predictor. All rights reserved.</p>
        <div className="footer-links">
          <a href="#news">News</a>
          <a href="#predict">Predict</a>
          <a href="#prices">Live Prices</a>
        </div>
      </div>
    </footer>
  );
}

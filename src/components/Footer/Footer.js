import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        
      <div className="footer-container">

        <div className="footer-links">
          <a href="#news">News</a>
          <a href="#predict">Predict</a>
          <a href="#prices">Live Prices</a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Stock Predictor. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

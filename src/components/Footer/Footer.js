import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/livePrices">Live Prices</Link>
          <Link to="/news">News</Link>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Stock Predictor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

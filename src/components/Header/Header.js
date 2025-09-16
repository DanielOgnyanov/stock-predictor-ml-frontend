import "./Header.css";
import { useState } from "react";

function Header() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <div className="logo">📈 Stock Predictor</div>
      <nav className="nav">
        {isLoggedIn ? (
          <>
           
            <a href="#news">News</a>
            <a href="#home">Home</a>
            <a href="#predict">Predict</a>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="logout-btn"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            
            <a href="#live">Live Prices</a>
            <a href="login">Login</a>
            <a href="register">Register</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

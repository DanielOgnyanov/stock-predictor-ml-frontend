
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="logo">📈 Stock Predictor</div>
      <nav className="nav">
        <a href="#home">News</a>
        <a href="#home">Home</a>
        <a href="#features">Predict</a>
        <a href="#about">Live Prices</a>
       
      </nav>
    </header>
  );
}

export default Header;

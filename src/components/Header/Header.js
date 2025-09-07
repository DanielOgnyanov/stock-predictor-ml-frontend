
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="logo">📈 Stock Predictor</div>
      <nav className="nav">
        <a href="#news">News</a>
        <a href="#home">Home</a>
        <a href="#features">Predict</a>
        <a href="#live">Live Prices</a>
        <a href="login">Login</a>
       
      </nav>
    </header>
  );
}

export default Header;

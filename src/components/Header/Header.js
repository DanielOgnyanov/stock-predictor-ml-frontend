
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="logo">📈 Stock Predictor</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const guestLinks = [
    { label: "Live Prices", path: "#live" },
    { label: "Login", path: "login" },
    { label: "Register", path: "register" },
  ];

  const authLinks = [
    { label: "News", path: "#news" },
    { label: "Home", path: "#home" },
    { label: "Predict", path: "#predict" },
    { label: "Live Prices", path: "#live" },
  ];

  return (
    <header className="header">
      <div className="logo">📈 Stock Predictor</div>
      <nav className="nav">
        {isLoggedIn
          ? (
            <>
              {authLinks.map((link) => (
                <a key={link.label} href={link.path}>
                  {link.label}
                </a>
              ))}
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            guestLinks.map((link) => (
              <a key={link.label} href={link.path}>
                {link.label}
              </a>
            ))
          )}
      </nav>
    </header>
  );
}

export default Header;

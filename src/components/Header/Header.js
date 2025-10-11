import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const guestLinks = [
    { label: "Live Prices", path: "livePrices" },
    { label: "Login", path: "login" },
    { label: "Register", path: "register" },
  ];

  const authLinks = [
    { label: "News", path: "news" },
    { label: "Home", path: "home" },
    { label: "Predict", path: "predict" },
    { label: "Live Prices", path: "livePrices" },
  ];

    const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  };

  return (
    
    <header className="header">
      <ProfileMenu />
      <div className="logo" onClick={handleLogoClick}>
        📈 Stock Predictor
      </div>
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

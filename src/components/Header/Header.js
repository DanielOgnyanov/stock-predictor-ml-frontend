import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 
import { useNavigate, Link } from "react-router-dom"; 
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const guestLinks = [
    { label: "Live Prices", path: "livePrices" },
    { label: "News", path: "news" }
  ];

  const authLinks = [
    { label: "News", path: "news" },
    { label: "Home", path: "home" },
    { label: "Predict", path: "predict" },
    { label: "Live Prices", path: "livePrices" },
  ];

  const handleLogoClick = () => {
    navigate(isLoggedIn ? "/homepage" : "/");
  };

  return (
    <header className="header">
      <ProfileMenu />
      <div className="logo" onClick={handleLogoClick}>
        📈 Stock Predictor
      </div>
      <nav className="nav">
       
        {(isLoggedIn ? authLinks : guestLinks).map((link) => (
          <Link key={link.label} to={`/${link.path}`}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;

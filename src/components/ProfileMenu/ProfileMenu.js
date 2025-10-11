import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.css";

const ProfileMenu = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="profile-menu-container" ref={menuRef}>
      <button className="profile-avatar" onClick={toggleMenu}>
        {isLoggedIn ? "🧑‍💼" : "👤"}
      </button>

      {open && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <span>{isLoggedIn ? "Welcome back!" : "Guest User"}</span>
          </div>

          <div className="profile-divider" />

          {isLoggedIn ? (
            <>
              <button onClick={() => navigate("/settings")}>⚙️ Settings</button>

              {/* Theme Toggle */}
              <div className="theme-toggle" onClick={toggleTheme}>
                <div className={`toggle-track ${darkMode ? "dark" : "light"}`}>
                  <div className="toggle-thumb">
                    {darkMode ? "🌙" : "🌞"}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>🔐 Login</button>
              <button onClick={() => navigate("/register")}>📝 Register</button>

              {/* Theme Toggle */}
              <div className="theme-toggle" onClick={toggleTheme}>
                <div className={`toggle-track ${darkMode ? "dark" : "light"}`}>
                  <div className="toggle-thumb">
                    {darkMode ? "🌙" : "🌞"}
                  </div>
                </div>
              </div>

              <button onClick={() => navigate("/settings")}>⚙️ Settings</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

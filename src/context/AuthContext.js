import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      if (isTokenValid(savedToken)) {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        setIsLoggedIn(true);
      } else {
        logout();
      }
    }
  }, []);


  const isTokenValid = (jwt) => {
    try {
      const decoded = jwtDecode(jwt);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };

  const login = (loginResponse) => {
    const { token, username, userRole } = loginResponse;

    localStorage.setItem("token", token);
    localStorage.setItem(
      "user",
      JSON.stringify({ username, role: userRole })
    );

    setToken(token);
    setUser({ username, role: userRole });
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

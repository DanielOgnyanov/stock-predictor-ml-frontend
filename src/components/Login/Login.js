import React, { useState, useContext } from "react";
import "./Login.css";
import { loginUser } from "../../api/authLogin";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email format";

    if (!password) errs.password = "Password is required";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters";

    return errs;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    try {
      const data = await loginUser(email, password);

      if (!data || !data.token) {
        throw new Error("Invalid login response");
      }

      
      login({
        token: data.token,
        username: data.username,
        userRole: data.userRole
      });

      navigate("/predict"); 
    } catch (err) {
      console.error("Login error:", err);
      setErrors({ api: "Invalid email or password" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Login</h2>

        <label className="login-label" htmlFor="email">Email</label>
        <input
          id="email"
          className={`login-input ${errors.email ? "invalid" : ""}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        {errors.email && <div className="login-error">{errors.email}</div>}

        <label className="login-label" htmlFor="password">Password</label>
        <input
          id="password"
          className={`login-input ${errors.password ? "invalid" : ""}`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
        {errors.password && <div className="login-error">{errors.password}</div>}

        {errors.api && <div className="login-error">{errors.api}</div>}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div className="login-footer">
          <Link to="/reset-password" className="login-link">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

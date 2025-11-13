import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../api/authLogin"
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Login = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be >= 6 characters";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length === 0) {
      setLoading(true);
      try {

        const data = await loginUser(email, password);
        console.log("Login success:", data);
        navigate("/homepage");

        if (data.token) {
          login(data.token); 
        }

        if (typeof onSubmit === "function") {
          onSubmit(data);
        }
      } catch (err) {
        console.error("Login error:", err);
        setErrors({ api: "Invalid email or password" });
      } finally {
        setLoading(false);
      }
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
          placeholder="you@company.com"
          autoComplete="username"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <div id="email-error" className="login-error">{errors.email}</div>}

        <label className="login-label" htmlFor="password">Password</label>
        <input
          id="password"
          className={`login-input ${errors.password ? "invalid" : ""}`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && <div id="password-error" className="login-error">{errors.password}</div>}


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
}
export default Login;
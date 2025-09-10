import React, { useState } from "react";
import "./Login.css";
import {loginUser} from "../../api/authLogin" 


const Login = ({ onSubmit }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

        
        localStorage.setItem("token", data.token);

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
        <h2 className="login-title">Sign in</h2>

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

        <button type="submit" className="login-button">Sign in</button>

        <div className="login-footer">
          <a href="#forgot" className="login-link">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

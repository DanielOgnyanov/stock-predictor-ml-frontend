import React, { useState } from "react";
import "./Register.css";
import { authRegister } from "../../api/authRegister";


function Register() {
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await authRegister({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log("User registered:", response);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed: " + error);
    }
  };

  return (
      <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label className="login-label" htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label className="login-label" htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label className="login-label" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label className="login-label" htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

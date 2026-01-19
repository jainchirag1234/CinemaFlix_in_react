import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // backend API call yahan kar sakte ho
  };

  return (
    <div className="register-container">
      <div className="main-card">
        <div className="right-panel">
          <form onSubmit={handleSubmit} className="signup-form">
            <h1>Sign In </h1>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="reg-btn">
              Register
            </button>

            <Link to="/signup" className="login-link">
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

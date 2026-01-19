import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    occupation: "student",
    dob: "",
    gender: "male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can send formData to your backend here
  };

  return (
    <div className="register-container">
      <div className="main-card">
        {/* Right Side: Form */}
        <div className="right-panel">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <h1>SignUp Page</h1>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

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

            <div className="input-group">
              <label>Occupation</label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="professional">Professional</option>
              </select>
            </div>

            <div className="input-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="reg-btn">
              Register
            </button>
            <Link to="/signin" className="login-link">
              Already have an Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

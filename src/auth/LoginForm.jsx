import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="email">Email</label>
        <FaUser className="input-icon" />
      </div>

      <div className="input-field">
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="password">Password</label>
        <FaLock className="input-icon" />
      </div>

      <button type="submit" className="btn-submit">
        Sign In
      </button>
    </form>
  );
}

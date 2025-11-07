import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation logic (can expand later)
    if (formData.email && formData.password) {
      toast.success("🍫 Welcome back!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      toast.error("Please fill in all fields!");
    }
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("🎉 You’ve successfully registered!");
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="name">Full Name</label>
        <FaUser className="input-icon" />
      </div>

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
        <FaEnvelope className="input-icon" />
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

      <div className="input-field">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <FaLock className="input-icon" />
      </div>

      <button type="submit" className="btn-submit">
        Sign Up
      </button>
    </form>
  );
}

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./auth.css";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegister = location.pathname === "/register";

  const handleToggle = () => {
    navigate(isRegister ? "/login" : "/register");
  };

  return (
    <div className={`auth-container ${isRegister ? "active" : ""}`}>
      {/* Animated Chocolate Layers */}
      <div className="melt-layer"></div>
      <div className="melt-layer2"></div>

      {/* Form Section */}
      <div className="form-section">
        <div className="form-box">
          {isRegister ? (
            <>
              <h2 className="title">Register</h2>
              <RegisterForm />
            </>
          ) : (
            <>
              <h2 className="title">Login</h2>
              <LoginForm />
            </>
          )}
        </div>
      </div>

      {/* Info Panels */}
      <div className="info-box login-info">
        <h2>Welcome Back!</h2>
        <p>We’re happy to see you again. Let’s get you signed in.</p>
        <button className="switch-btn" onClick={handleToggle}>
          Sign Up
        </button>
      </div>

      <div className="info-box register-info">
        <h2>Welcome!</h2>
        <p>Join QuickBill and experience effortless billing simplicity.</p>
        <button className="switch-btn" onClick={handleToggle}>
          Sign In
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./auth/AuthPage";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Settings/company";
import Profile from "./pages/Settings/profile";
import Preference from "./pages/Settings/preference";
import FAQ from "./pages/Settings/faq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the toastify styles

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route element={<AuthPage />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings/company" element={<Company />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/settings/preference" element={<Preference />} />
          <Route path="/settings/faq" element={<FAQ />} />
        </Routes>
      </Router>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;

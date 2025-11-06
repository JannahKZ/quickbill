import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginForm.jsx";
import Register from "./pages/RegisterForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings/profile.jsx";
import './App.css';

=======
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./auth/AuthPage";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
>>>>>>> c226a8da8741629716a93d107eb09b0769308ed5

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route element={<AuthPage />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

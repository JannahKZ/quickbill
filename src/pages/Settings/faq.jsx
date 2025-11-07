import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useNavigate } from "react-router-dom";
import "./settings.css";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-layout">
        <Sidebar />
        <div className="settings-main">
            <div className="topbar">
            <Topbar />
            </div>
        <div className="settings-content">

            <div className="settings-card">
            <h2 className="settings-title">SETTINGS</h2>
            <p className="settings-subtitle">Frequently Asked Questions</p>

            <div className="tab-buttons">
                <button onClick={() => navigate("/settings")} className="tab">Profile</button>
                <button onClick={() => navigate("/settings/company")} className="tab">Company</button>
                <button onClick={() => navigate("/settings/preference")} className="tab">Preference</button>
                <button onClick={() => navigate("/settings/faq")} className="tab active">FAQ</button>
            </div>

            <div className="faq-content">
                <h4>Q: How do I update my profile?</h4>
                <p>A: Go to Settings → Profile and edit your details, then click “Save Changes”.</p>

                <h4>Q: Can I change my theme color?</h4>
                <p>A: Yes, visit Settings → Preference to switch between light and dark mode.</p>

                <h4>Q: Who can see my company info?</h4>
                <p>A: Only authorized users with access rights in your account.</p>
            </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default FAQ;

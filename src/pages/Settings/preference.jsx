import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useNavigate } from "react-router-dom";
import "./settings.css";

const Preference = () => {
  const navigate = useNavigate();
  const [prefs, setPrefs] = useState({
    theme: "light",
    language: "English",
  });

  const handleChange = (e) => {
    setPrefs({ ...prefs, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Preferences saved!");
  };

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
            <p className="settings-subtitle">Customize your preferences</p>

            <div className="tab-buttons">
                <button onClick={() => navigate("/settings")} className="tab">Profile</button>
                <button onClick={() => navigate("/settings/company")} className="tab">Company</button>
                <button onClick={() => navigate("/settings/preference")} className="tab active">Preference</button>
                <button onClick={() => navigate("/settings/faq")} className="tab">FAQ</button>
            </div>

            <form onSubmit={handleSave} className="preference-form">
                <label>Theme</label>
                <select name="theme" value={prefs.theme} onChange={handleChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                </select>

                <label>Language</label>
                <select name="language" value={prefs.language} onChange={handleChange}>
                <option>English</option>
                <option>Malay</option>
                </select>

                <button type="submit">SAVE CHANGES</button>
            </form>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Preference;

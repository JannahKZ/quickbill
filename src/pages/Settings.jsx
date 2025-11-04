import React, { useState } from "react";
import "./Settings.css";

function Setting() {
  const [profile, setProfile] = useState({
    username: "AdminUser",
    email: "admin@example.com",
    theme: "Pastel Chocolate",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // simple feedback so we can confirm functionality
    console.log("Saved profile:", profile);
    alert("Settings saved (check console).");
  };

  return (
    <div className="setting-container">
      <main className="setting-main">
        <h1>Settings (test)</h1>
        <div className="settings-card">
          <form onSubmit={handleSave}>
            <label>Username</label>
            <input
              name="username"
              value={profile.username}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
            />

            <label>Theme</label>
            <select name="theme" value={profile.theme} onChange={handleChange}>
              <option>Pastel Chocolate</option>
              <option>Classic Light</option>
              <option>Mint & Peach</option>
            </select>

            <button type="submit" className="save-btn">Save Changes</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Setting;

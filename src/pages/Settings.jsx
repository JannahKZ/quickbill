import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Settings.css";

function Setting() {
  const [profile, setProfile] = useState({
    username: "AdminUser",
    email: "admin@example.com",
    theme: "Pastel Chocolate",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="setting-container">
      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>By.N3 Admin</h2>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link
            to="/setting"
            className="active"
            onClick={() => setMenuOpen(false)}
          >
            Settings
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Logout
          </Link>
        </nav>
      </aside>

      {/* Mobile top bar */}
      <div className="mobile-topbar">
        <h1>Settings</h1>
        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Main content */}
      <main className="setting-main">
        <h1>Settings</h1>
        <div className="settings-card">
          <form onSubmit={handleSave}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />

            <label>Theme</label>
            <select
              name="theme"
              value={profile.theme}
              onChange={handleChange}
            >
              <option>Pastel Chocolate</option>
              <option>Classic Light</option>
              <option>Mint & Peach</option>
            </select>

            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Setting;

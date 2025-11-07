import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile changes saved successfully!");
    console.log("Saved data:", formData);
  };

  return (
    <div className="profile-container">
      <h2 className="settings-title">SETTINGS</h2>
      <p className="settings-subtitle">
        Manage your account settings and preferences
      </p>

      <div className="tab-buttons">
        <button className="tab active">Profile</button>
        <button className="tab">Company</button>
        <button className="tab">Preference</button>
        <button className="tab">FAQ</button>
      </div>

      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-picture">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Profile"
            />
          </div>
          <p className="username">@username</p>
        </div>

        <div className="profile-right">
          <form onSubmit={handleSave}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
              />
              <button type="button" className="change-btn">
                Change
              </button>
            </div>

            <button type="submit" className="save-btn">
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

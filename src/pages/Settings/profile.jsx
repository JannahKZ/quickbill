import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useNavigate } from "react-router-dom";
import "./settings.css";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-layout">
      <Sidebar />
      <div className="settings-main">
        <div className="topbar">
          <Topbar />
        </div>

        <div className="settings-content">
          <h2 className="settings-title">SETTINGS</h2>
          <p className="settings-subtitle">Manage your profile information</p>

          <div className="tab-buttons">
            <button className="tab active" onClick={() => navigate("/settings")}>Profile</button>
            <button className="tab" onClick={() => navigate("/settings/company")}>Company</button>
            <button className="tab" onClick={() => navigate("/settings/preference")}>Preference</button>
            <button className="tab" onClick={() => navigate("/settings/faq")}>FAQ</button>
          </div>

          <div className="profile-card">
            <div className="profile-left">
              <div className="profile-picture">
                <img src="https://i.pravatar.cc/90" alt="Profile" />
              </div>
              <p className="username">Anna Katrina Manchesi</p>
            </div>

            <div className="profile-right">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" />

              <label>Email</label>
              <input type="email" placeholder="Enter email" />

              <label>Password</label>
              <div className="password-field">
                <input type="password" placeholder="********" />
                <button className="change-btn">Change</button>
              </div>

              <button className="save-btn">SAVE CHANGES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useNavigate } from "react-router-dom";
import "./settings.css";

const Company = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Company information saved successfully!");
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
            <p className="settings-subtitle">Manage your company information</p>

            <div className="tab-buttons">
                <button onClick={() => navigate("/settings")} className="tab">Profile</button>
                <button onClick={() => navigate("/settings/company")} className="tab active">Company</button>
                <button onClick={() => navigate("/settings/preference")} className="tab">Preference</button>
                <button onClick={() => navigate("/settings/faq")} className="tab">FAQ</button>
            </div>

            <form onSubmit={handleSave} className="company-form">
                <label>Company Name</label>
                <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" />

                <label>Address</label>
                <input name="address" value={formData.address} onChange={handleChange} placeholder="Enter address" />

                <label>Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />

                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />

                <button type="submit">SAVE CHANGES</button>
            </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Company;

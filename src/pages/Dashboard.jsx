import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TotalCard from "../components/TotalCard";
import CompanyProfile from "../components/CompanyProfile";
import RecentActivities from "../components/RecentActivities";
import { FileText, FileSpreadsheet } from "lucide-react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="dashboard-inner">
          <div className="dashboard-grid">
            {/* --- LEFT SIDE --- */}
            <div className="dashboard-left">
              {/* --- Company Profile --- */}
              <div className="floating-box company-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Company Profile
                  </h2>
                  <button
                    onClick={() => navigate("/settings")}
                    className="px-4 py-2 rounded-lg bg-[#a87d4f] text-white hover:bg-[#90693f] transition"
                  >
                    Update
                  </button>
                </div>

                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 overflow-hidden">
                    <img
                      src="/company-logo.png"
                      alt="Company Logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Manage your company details used in quotations & invoices.
                  </p>
                </div>

                <CompanyProfile />
              </div>

              {/* --- Quotation Card --- */}
              <div className="floating-box">
                <TotalCard title="Quotations" value="5" icon={FileText} />
                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => navigate("/quotation")}
                    className="px-4 py-2 rounded-lg bg-[#a87d4f] text-white hover:bg-[#90693f] transition"
                  >
                    + New Quotation
                  </button>
                </div>
              </div>

              {/* --- Invoice Card --- */}
              <div className="floating-box">
                <TotalCard title="Invoices" value="11" icon={FileSpreadsheet} />
                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => navigate("/invoice")}
                    className="px-4 py-2 rounded-lg bg-[#a87d4f] text-white hover:bg-[#90693f] transition"
                  >
                    + New Invoice
                  </button>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE --- */}
            <div className="dashboard-right">
              <div className="floating-box h-full">
                <RecentActivities />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CompanyProfile from "../components/CompanyProfile";
import TotalCard from "../components/TotalCard";
import RecentActivities from "../components/RecentActivities";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#c39b72] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <CompanyProfile />
            <TotalCard />
          </div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import TotalCard from "../components/TotalCard.jsx";
import RecentActivities from "../components/RecentActivities.jsx";
import CompanyProfile from "../components/CompanyProfile.jsx";
import { DollarSign, ShoppingCart, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex bg-[#e3d6c1] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Topbar />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <TotalCard title="Total Sales" value="$12,340" icon={DollarSign} />
          <TotalCard title="Orders" value="245" icon={ShoppingCart} />
          <TotalCard title="Customers" value="1,024" icon={Users} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <RecentActivities />
          </div>
          <CompanyProfile />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-md">
      <h1 className="text-2xl font-semibold text-[#3b2f2f]">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell className="text-[#3b2f2f]" />
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-[#c7a17a]"
        />
      </div>
    </div>
  );
}

import React from "react";
import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-[#3b2f2f] text-white rounded-2xl p-4 shadow-md">
      <h1 className="text-xl font-semibold">QuickBill</h1>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search here"
            className="pl-9 pr-4 py-2 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c7a17a]"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">Anna Katrina Manchesi</p>
            <p className="text-xs text-gray-300">hello@smallvisuals.com</p>
          </div>
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-[#c7a17a]"
          />
        </div>
      </div>
    </div>
  );
}

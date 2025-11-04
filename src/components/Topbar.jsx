import React from "react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-[#3b2f2f] px-6 py-4 text-white">
      <div className="flex items-center bg-white rounded-full px-3 py-1 w-80">
        <input
          type="text"
          placeholder="Search here"
          className="w-full outline-none text-black text-sm px-2 bg-transparent"
        />
      </div>

      <div className="flex items-center space-x-3">
        <div className="text-right">
          <p className="font-semibold">Anna Katrina Marchesi</p>
          <p className="text-xs text-gray-300">hello@reallygreatsite.com</p>
        </div>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 border-2 border-white"
        />
      </div>
    </div>
  );
}

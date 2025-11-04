import React from "react";
import { Home, FileText, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 bg-[#2b1a0f] text-white flex flex-col items-center py-6 space-y-8">
      <h1 className="text-lg font-bold">QuickBill</h1>
      <div className="flex flex-col items-center space-y-6 mt-6 text-xl">
        <Home />
        <FileText />
        <Settings />
        <LogOut />
      </div>
    </div>
  );
}

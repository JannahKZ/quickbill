import React, { useState } from "react";
import {
  Menu,
  Home,
  FileText,
  FileSpreadsheet,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`sidebar bg-[#3b2f2f] text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-20 sidebar-collapsed"
      } flex flex-col`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 bg-[#c7a17a] p-2 rounded-full shadow-md hover:bg-[#b88e6a] transition"
      >
        <Menu size={20} />
      </button>

      <div className="flex items-center gap-3 px-6 py-6 border-b border-[#c7a17a]/30">
        <img
          src="/logo192.png"
          alt="QuickBill Logo"
          className="w-8 h-8 rounded-md bg-[#c7a17a] object-cover"
        />
        {isOpen && <h1 className="text-xl font-semibold">QuickBill</h1>}
      </div>

      <nav className="flex-1 px-4 py-6 space-y-3">
        <SidebarItem icon={<Home size={20} />} text="Dashboard" to="/dashboard" isOpen={isOpen} />
        <SidebarItem icon={<FileText size={20} />} text="Quotation" to="/quotation" isOpen={isOpen} />
        <SidebarItem icon={<FileSpreadsheet size={20} />} text="Invoice" to="/invoice" isOpen={isOpen} />
        <SidebarItem icon={<Clock size={20} />} text="History" to="/history" isOpen={isOpen} />
        <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings" isOpen={isOpen} />
      </nav>

      <div className="px-4 py-6 border-t border-[#c7a17a]/30">
        <SidebarItem icon={<LogOut size={20} />} text="Logout" to="/" isOpen={isOpen} />
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, to, isOpen }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#5a4444] transition"
    >
      {icon}
      {isOpen && <span className="text-sm font-medium">{text}</span>}
    </Link>
  );
}

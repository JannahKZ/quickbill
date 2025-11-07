import React from "react";
import { FileText, DollarSign } from "lucide-react";

export default function TotalCard({ title, value }) {
  const Icon = title === "Quotation" ? FileText : DollarSign;

  return (
    <div className="bg-[#fff] rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-all">
      <div>
        <h3 className="text-gray-600">{title}</h3>
        <p className="text-3xl font-bold text-[#3b2f2f]">{value}</p>
      </div>
      <Icon size={40} className="text-[#c7a17a]" />
    </div>
  );
}

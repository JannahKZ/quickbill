import React from "react";
import { Activity } from "lucide-react";

export default function RecentActivities() {
  const activities = [
    { id: 1, text: "New order received from Ahmad", time: "2 hours ago" },
    { id: 2, text: "Invoice #12345 sent to customer", time: "5 hours ago" },
    { id: 3, text: "Payment received from Ali", time: "Yesterday" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#3b2f2f] mb-4 flex items-center gap-2">
        <Activity className="text-[#c7a17a]" /> Recent Activities
      </h2>
      <ul className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-[#c7a17a]/40">
        {activities.map((act) => (
          <li
            key={act.id}
            className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0"
          >
            <span className="text-gray-700">{act.text}</span>
            <span className="text-sm text-gray-500">{act.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

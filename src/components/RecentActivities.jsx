import React from "react";

export default function RecentActivities() {
  const activities = [
    { id: 1, text: "QUO123456787 - Quotation", date: "07 July 2025" },
    { id: 2, text: "INV0123456789 - Invoice", date: "18 Oct 2025" },
    { id: 3, text: "QUO123456788 - Quotation", date: "07 Oct 2025" },
    { id: 4, text: "INV0123456789 - Invoice", date: "25 Sept 2025" },
  ];

  return (
    <div className="bg-[#fff] rounded-2xl shadow-lg p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#3b2f2f]">Recent Activities</h2>
        <button className="text-sm text-[#c7a17a] hover:underline">See All</button>
      </div>

      <ul className="space-y-3 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-[#c7a17a]/40">
        {activities.map((act) => (
          <li
            key={act.id}
            className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0"
          >
            <span className="text-gray-700 text-sm">{act.text}</span>
            <span className="text-xs text-gray-500">{act.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

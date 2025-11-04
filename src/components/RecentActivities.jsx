import React from "react";

const activities = [
  { id: "QU0123456787", date: "07 July 2025", type: "QUOTATION" },
  { id: "INV0123456789", date: "18 Oct 2025", type: "INVOICE" },
  { id: "QU0123456788", date: "25 Oct 2025", type: "QUOTATION" },
  { id: "INV0123456789", date: "25 Oct 2025", type: "INVOICE" },
  { id: "QU0123456789", date: "25 Oct 2025", type: "QUOTATION" },
  { id: "INV0123456786", date: "25 Oct 2025", type: "INVOICE" },
];

export default function RecentActivities() {
  return (
    <div className="bg-[#3b2f2f] rounded-xl text-white p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Recent Activities</h2>
        <button className="text-sm bg-[#7b5e57] px-3 py-1 rounded-full hover:bg-[#5f443b]">
          See All
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#2b1a0f] rounded-lg px-4 py-2 text-sm"
          >
            <div>
              <p className="font-bold">{item.id}</p>
              <p className="text-xs text-gray-300">
                {item.date} — {item.type}
              </p>
            </div>
            <button className="bg-[#7b5e57] px-4 py-1 rounded-full text-xs font-bold hover:bg-[#5f443b]">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

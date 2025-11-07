import React from "react";

export default function CompanyProfile() {
  return (
    <div className="bg-[#fff] rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#3b2f2f] mb-4">
        Company Profile
      </h2>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Name:</span> Max System Solution Sdn. Bhd.</p>
        <p><span className="font-semibold">Address:</span> No. 27, 1st Floor, Jalan Villa Tanjung, 12300 Butterworth, Pulau Pinang</p>
      </div>
    </div>
  );
}

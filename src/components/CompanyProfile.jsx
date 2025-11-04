import React from "react";

export default function CompanyProfile() {
  return (
    <div className="bg-[#3b2f2f] rounded-xl text-white p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Company Profile</h2>
        <button className="bg-[#7b5e57] px-4 py-1 text-xs rounded-full hover:bg-[#5f443b]">
          Update
        </button>
      </div>

      <div className="flex space-x-6">
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="rounded-lg bg-white p-2"
          />
        </div>
        <div>
          <p className="text-sm font-bold">NAME:</p>
          <p className="text-sm mb-2">MAX SYSTEM SOLUTION SDN. BHD.</p>

          <p className="text-sm font-bold">ADDRESS:</p>
          <p className="text-sm leading-tight">
            No. 27, 1st Floor, Jalan Villa Tanjung, Villa Tanjung, 12300
            Butterworth, Pulau Pinang
          </p>
        </div>
      </div>
    </div>
  );
}

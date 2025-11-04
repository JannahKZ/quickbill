import React from "react";

export default function CompanyProfile() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#3b2f2f] mb-4">
        Company Profile
      </h2>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold">Name:</span> QuickBill Solutions</p>
        <p><span className="font-semibold">Industry:</span> Billing & Finance</p>
        <p><span className="font-semibold">Location:</span> Kuala Lumpur, Malaysia</p>
        <p><span className="font-semibold">Email:</span> support@quickbill.com</p>
        <p><span className="font-semibold">Contact:</span> +60 12-345 6789</p>
      </div>
    </div>
  );
}

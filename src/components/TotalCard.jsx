import React from "react";
import { FileText, DollarSign } from "lucide-react";

export default function TotalCard() {
  return (
    <div className="bg-[#3b2f2f] rounded-xl text-white p-6 shadow-lg">
      <h2 className="font-bold text-lg mb-4">Total</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#2b1a0f] p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="font-bold text-sm">QUOTATION</p>
            <p className="text-3xl font-bold">5</p>
          </div>
          <FileText className="text-3xl" />
        </div>

        <div className="bg-[#2b1a0f] p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="font-bold text-sm">INVOICE</p>
            <p className="text-3xl font-bold">11</p>
          </div>
          <DollarSign className="text-3xl" />
        </div>
      </div>

      <button className="mt-6 bg-[#7b5e57] w-full py-2 rounded-full text-sm font-bold hover:bg-[#5f443b]">
        CREATE NEW
      </button>
    </div>
  );
}

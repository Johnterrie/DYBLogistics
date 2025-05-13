"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import Button from "../buttons/Button";

const carriers = [
  {
    name: "DHL",
    type: "Express",
    pickup: "Within 10 hours",
    delivery: "Within 2 days",
    amount: 25650.55,
  },
  {
    name: "FedEx",
    type: "Domestic",
    pickup: "Within 2 days",
    delivery: " Within 7 days",
    amount: 15000.05,
  },
  {
    name: "GIGM",
    type: "Standard",
    pickup: "Within 2 days",
    delivery: "Within 5 days",
    amount: 12800.85,
  },
  {
    name: "UPS",
    type: "Express",
    pickup: "Within 2 days",
    delivery: "Within 4 days",
    amount: 20825.75,
  },
];

const SelectCarrier = () => {
  const [carrierData, setCarrierData] = useState(carriers);

  const refreshRates = () => {
    setCarrierData((prevData) =>
      prevData.map((carrier) => ({
        ...carrier,
        amount: carrier.amount + Math.floor(Math.random() * 5000),
      }))
    );
  };

  const handleSelect = (carrier) => {
    alert(`You selected ${carrier.name} - ₦${carrier.amount.toLocaleString()}`);
  };

  return (
    <div className="p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[700px]">
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-2">Select Carrier</h1>
        <p className="text-gray-600 text-left mb-4">Choose your preferred rate</p>

        <div className="flex justify-end mb-4">
          <button
            className="flex items-center text-sm font-semibold text-[#FD4A09] hover:text-orange-600"
            onClick={refreshRates}
          >
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </button>
        </div>

        <div className="space-y-4">
          {carrierData.map((carrier, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              {/* Left Column */}
              <div className="flex flex-col text-center md:text-left">
                <span className="text-base font-semibold text-gray-800">{carrier.name}</span>
                <span className="text-sm text-gray-600">{carrier.type}</span>
              </div>

              {/* Middle Column - fully centered */}
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-sm text-gray-700 font-medium">Pickup: {carrier.pickup}</span>
                  <span className="text-sm text-gray-600">Delivery: {carrier.delivery}</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-gray-900">
                  <span className="text-gray-700">₦</span>
                  {carrier.amount.toLocaleString()}
                </span>
                <button
                  onClick={() => handleSelect(carrier)}
                  className="bg-[#FEA07F] text-white text-md px-6 py-1 rounded-full hover:bg-orange-600 transition"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default SelectCarrier;

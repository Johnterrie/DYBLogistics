"use client";
import React from 'react'
import { PiCardholderFill } from "react-icons/pi";

const AccountSummary = () => {
  return (
     <section className="mb-10 mt-24 px-3 sm:px-6 md:px-8 lg:px-10 w-full h-auto">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
    Account Summary
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-full md:max-w-4xl">
    {/* Account Balance */}
    <div className="bg-white shadow-md p-6 hover:shadow-lg transition border border-[#BDBDBD]">
      <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-4">Account Balance</h3>
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800">
        <PiCardholderFill className="text-[#28A745] text-2xl" />
        <span>₦2,000,000</span>
      </div>
    </div>

    {/* Pending Withdrawal */}
    <div className="bg-white shadow-md p-6 hover:shadow-lg transition border border-[#BDBDBD]">
      <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-4">Pending Withdrawal</h3>
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800">
        <PiCardholderFill className="text-[#28A745] text-2xl" />
        <span>₦1,000,000</span>
      </div>
    </div>
  </div>
</section>


  )
}

export default AccountSummary
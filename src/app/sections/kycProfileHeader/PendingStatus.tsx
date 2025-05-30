import React from 'react'

const PendingStatus = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-96 py-8">
      <div className="sm:px-2">
        <h1 className="text-2xl text-[#737373] font-semibold py-6">Profile & KYC</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="flex gap-4 py-4">
          <h3 className="text-[#FD4A09] underline text-lg">Profile</h3>
          <h3 className="text-[#C5C5C5] text-lg">Know Your Customer</h3>
        </div>

        {/* Right Section */}
        <div className="flex gap-2 py-4 w-full md:w-auto md:mr-28">
          <div className="h-[39px]">
            <h3 className="text-[#222222] text-md py-1 px-1">Status</h3>
          </div>
          <div className="h-[39px] bg-[#FFC107]">
            <h3 className="text-md text-white py-1 px-2">Pending</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingStatus
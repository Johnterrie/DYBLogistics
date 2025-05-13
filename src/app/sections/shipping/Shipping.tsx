'use client';
import React from 'react'
import { FiSearch } from 'react-icons/fi';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <h1 className="text-center text-4xl font-bold text-[#222222] mb-12">
        Choose Your Preferred Shipping <br /> Option By Cost
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="bg-gray-100 p-6 rounded-lg space-y-6">
          {/* Search */}
          <div className="bg-white flex items-center px-4 py-2 rounded-full shadow-sm h-20">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="ml-4 w-full bg-transparent outline-none text-sm text-gray-700"
            />
            <div className="bg-[#FD4A09] p-2 rounded-full">
              <FiSearch className="text-white text-lg" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-around font-semibold text-sm">
            <div className="bg-[#FFE7DE] text-[#FD4A09] px-4 py-2 rounded-full">In Progress</div>
            <div className="text-gray-600 px-4 py-2">Delivered</div>
            <div className="text-gray-600 px-4 py-2">All</div>
          </div>

          {/* Card 1 - In Transit */}
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4 h-72">
            <div className="flex justify-between">
              <p className="text-xs text-gray-600">Tracking Number</p>
              <div className="flex items-center bg-[#FDFDFD] border-2 border-solid rounded-full px-2 py-1">
                <div className="w-2 h-2 rounded-full bg-[#FD4A09] mr-1"></div>
                <p className="text-xs font-medium text-gray-400">In Transit</p>
              </div>
            </div>
            <div className='flex'>
            <div className="w-3 h-3 rounded-full border-2 border-[#FD4A09] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#FD4A09] rounded-full"></div>
                </div>
            <p className="text-sm font-semibold text-gray-800 mb-2 ml-4">20 5643 8765 4563</p>
            </div>

            {/* Route */}
            <div className="flex items-center justify-between">
              {/* Lagos & Left Dot */}
              <div className="flex items-center">
                <p className="text-sm text-gray-800 mr-1">Lagos</p>
                <div className="w-3 h-3 rounded-full border-2 border-[#FD4A09] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#FD4A09] rounded-full"></div>
                </div>
              </div>

              {/* Line */}
              <div className="relative flex-1 mx-1">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#FD4A09] to-gray-300"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>

              {/* Abuja */}
              <p className="text-sm text-gray-800">Abuja</p>
            </div>

            {/* Date and Time */}
            <div className="flex justify-between text-xs text-gray-500">
              <p>06/02/25, 13:50 PM</p>
              <p>06/02/25, 13:50 PM</p>
            </div>

            {/* Info */}
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-600">Price</p>
                <p className="font-semibold text-gray-800">₦20,000</p>
              </div>
              <div>
                <p className="text-gray-600">Description</p>
                <p className="font-semibold text-gray-800">Things</p>
              </div>
              <div>
                <p className="text-gray-600">Weight</p>
                <p className="font-semibold text-gray-800">3kg</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Delivered */}
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <div className="flex justify-between">
              <p className="text-xs text-gray-600">Tracking Number</p>
              <div className="flex items-center  bg-[#1EDE35] rounded-full px-2 py-1">
                <div className="w-2 h-2 rounded-full bg-[#D4F5DD]  mr-1"></div>
                <p className="text-xs font-medium text-white">Delivered</p>
              </div>
            </div>
            <div className='flex'>
            <div className="w-3 h-3 rounded-full border-2 border-[#FD4A09] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#FD4A09] rounded-full"></div>
                </div>
            <p className="text-sm font-semibold text-gray-800 mb-2 ml-4">20 5643 8765 4563</p>
            </div>

            {/* Route */}
            <div className="flex items-center justify-between">
              {/* Lagos & Left Dot */}
              <div className="flex items-center">
                <p className="text-sm text-gray-800 mr-1">Lagos</p>
                <div className="w-3 h-3 rounded-full border-2 border-[#FD4A09] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#FD4A09] rounded-full"></div>
                </div>
              </div>

              {/* Line */}
              <div className="relative flex-1 mx-1">
                <div className="w-full h-0.5 bg-[#FD4A09]"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FD4A09] rounded-full"></div>
              </div>

              {/* Abuja */}
              <p className="text-sm text-gray-800">Abuja</p>
            </div>

            {/* Date and Time */}
            <div className="flex justify-between text-xs text-gray-500">
              <p>06/02/25, 13:50 PM</p>
              <p>06/02/25, 13:50 PM</p>
            </div>

            {/* Info */}
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-600">Price</p>
                <p className="font-semibold text-gray-800">₦20,000</p>
              </div>
              <div>
                <p className="text-gray-600">Description</p>
                <p className="font-semibold text-gray-800">Things</p>
              </div>
              <div>
                <p className="text-gray-600">Weight</p>
                <p className="font-semibold text-gray-800">3kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#222222] text-white p-6 rounded-4xl space-y-4">
          {/* Image Placeholder */}
          <div />
          <img
           src="/images/DYBmap.png"
           alt=""
           className="w-full h-[500px] rounded-4xl object-cover shadow-md mb-8"
           />

          {/* Details */}
          <div className="bg-white text-black p-4 rounded-4xl flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm">Order #20 5643 8765 4563</p>
              <span className="text-xs bg-[#FFE7DE] text-[#FD4A09] px-2 py-1 rounded-full">In Transit</span>
            </div>

            <div className="flex justify-between text-sm font-semibold text-gray-800">
              <p>From</p>
              <p>To</p>
              <p>Current Location</p>
              <p>Time Left</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Lagos</p>
              <p>Abuja</p>
              <p>Delta</p>
              <p>8hrs</p>
            </div>
          </div>
        </div>
      </div>
      
     </div>
  )
}

export default Shipping
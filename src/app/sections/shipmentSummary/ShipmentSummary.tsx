"use client";
import React from 'react'
import { FaTruck,} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const ShipmentSummary = () => {
  return (
    <div className='mb-10 mt-12 lg:px-10'>
  <h2 className='text-gray-700 text-2xl font-semibold mb-6 p-6'>
    Shipment Summary
  </h2>

  <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:gap-2 lg:grid-cols-4 gap-2'>

    {[
      { title: 'Total Shipment', value: '₦1,000,000' },
      { title: 'In-Transit Shipment', value: '1,000' },
      { title: 'Delivered Shipment', value: '50' },
      { title: 'Pending Shipment', value: '200' },
    ].map((item, index) => (
      <div
        key={index}
        className='bg-white shadow-md p-4 hover:shadow-lg transition rounded w-full h-[123px] border border-[#BDBDBD] box-border'
      >
        <div className='flex flex-col justify-between h-full'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-medium text-gray-600'>{item.title}</h3>
            <FaTruck className="text-[#007BFF] text-xl" />
          </div>

          <div className="text-xl font-bold text-gray-800">{item.value}</div>

          <div className='flex items-center justify-between mt-1'>
            <p className='text-[10px] text-[#7C7C7C]'>Last Week</p>
            <div className='flex items-center gap-1 w-[72px] h-[22px] bg-[#CDE6D3] px-1 rounded'>
              <p className='text-[#51B669] text-xs'>+1.34%</p>
              <FaArrowTrendUp className='text-[#51B669] text-xs' />
            </div>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>


  )
}

export default ShipmentSummary
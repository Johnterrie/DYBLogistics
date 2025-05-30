import React from 'react'
import FileUpload from '../fileUpload/FileUpload'

const NewShipmentForm = () => {
  return (
    <div className='mb-6'>
        <div className="max-w-5xl mx-auto p-6 bg-white">
  <h2 className="text-md text-[#7C7c7C] mb-6">New shipment</h2>

  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* LEFT SIDE */}
    <div className="space-y-4">
      {/* Customer Name */}
      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-[#7C7C7C] mb-1">Customer Name</label>
        <input type="text" id="customerName" className="w-full border border-[#7C7c7C] rounded px-3 py-2 focus:outline-none " />
      </div>

      {/* Pickup Location */}
      <div>
        <label htmlFor="pickupLocation" className="block text-sm font-medium text-[#7C7c7C] mb-1">Pickup Location</label>
        <input type="text" id="pickupLocation" className="w-full border border-[#7C7c7C] rounded px-3 py-2 focus:outline-none " />
      </div>

      {/* Date */}
      <div className="relative">
        <label htmlFor="shipmentDate" className="block text-sm font-medium text-[#7C7c7C] mb-1 focus:outline-none">Date</label>
        <input
          type="date"
          id="shipmentDate"
          className="w-full border border-[#7C7c7C] rounded px-3 py-2 pr-10 "
          placeholder="dd/mm/yyyy"
        />
        <span className="absolute top-9 right-3 text-[#7C7c7C] pointer-events-none">
        </span>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-4">
      {/* Mobile Number */}
      <div>
        <label htmlFor="mobileNumber" className="block text-sm font-medium text-[#7C7c7C] mb-1">Mobile Number</label>
        <input type="tel" id="mobileNumber" className="w-full border border-[#7C7c7C] rounded px-3 py-2 focus:outline-none" />
      </div>

      {/* Drop Location */}
      <div>
        <label htmlFor="dropLocation" className="block text-sm font-medium text-[#7C7c7C] mb-1">Drop Location</label>
        <input type="text" id="dropLocation" className="w-full border border-[#7C7c7C] rounded px-3 py-2 focus:outline-none" />
      </div>

      {/* Amount Paid */}
      <div>
        <label htmlFor="amountPaid" className="block text-sm font-medium text-[#7C7c7C] mb-1">Amount Paid</label>
        <input type="number" id="amountPaid" className="w-full border border-[#7C7c7C] rounded px-3 py-2 focus:outline-none " />
      </div>
    </div>
  </form>

  {/* Status Indicators */}
  <div className="flex items-center gap-6 mt-8">
    {/* Ongoing */}
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-full bg-[#FD4A09] mr-2"></div>
      <span className="text-gray-800 font-medium">Ongoing</span>
    </div>

    {/* Shipped */}
    <div className="flex items-center">
      <div className="w-4 h-4 rounded-full bg-white border border-gray-400 mr-2"></div>
      <span className="text-gray-800 font-medium">Shipped</span>
    </div>
  </div>
</div>

<div>
    <FileUpload />
</div>


    </div>
  )
}

export default NewShipmentForm
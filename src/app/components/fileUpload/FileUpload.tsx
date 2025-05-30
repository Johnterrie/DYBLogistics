"use client"
import React from 'react'
import { CiExport } from 'react-icons/ci'

const FileUpload = () => {
  return (
    <div className='px-52'>
        <div className="w-[1010px] mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload</h2>

      <div className="border-2 border-dashed border-gray-300 rounded-lg h-[278px]  w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 transition hover:bg-gray-50">
        <CiExport size={40} className="text-[#FD4A09] mb-2 sm:mb-4" />
        <p className="text-[#FD4A09] font-medium">
          Drag and drop or choose file to upload
        </p>
        <p className="text-sm text-gray-400 mt-2">Supported formats <span className='text-blue-600'>JPEG or PNG</span></p>
      </div>

      <div className="flex justify-start gap-4 mt-6">
        <button className="px-6 py-2 lg:w-[200px] h-[43px] bg-[#FD4A09] text-white rounded-md hover:bg-orange-700 sm:w-auto transition">Add</button>
        <button className="px-6 py-2 lg:w-[200px] h-[43px] bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 sm:w-auto transition">Cancel</button>
      </div>
    </div>
    </div>
  )
}

export default FileUpload
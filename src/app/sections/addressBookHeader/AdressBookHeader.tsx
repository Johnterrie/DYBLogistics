'use client';
import React from 'react';
import { CiExport } from "react-icons/ci";

type Props = {
  onAddAddress: () => void;
  onExport: () => void;
};

const AddressBookHeader: React.FC<Props> = ({ onAddAddress, onExport }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-4 lg:px-10">
  {/* Title */}
  <h1 className="text-2xl font-bold sm:text-left">Address Book</h1>

  {/* Buttons */}
  <div className="flex flex-wrap gap-3">
    <div className='flex justify-around gap-0.5 border border-[#FD4A09] border-0.5 w-[97px] h-[40px]'>
      <CiExport
        onClick={onExport}
        className='text-[#FD4A09] text-center mt-3 ml-1 cursor-pointer' />
    
        <button
          onClick={onExport}
          className='text-md text-center px-2 text-[#FD4A09]'
          >
            Export
    
        </button>
    </div>
    <button
      onClick={onAddAddress}
      className="px-4 py-2 bg-[#FD4A09] text-white rounded hover:bg-blue-700 text-sm"
    >
      + Add Address
    </button>
  </div>
</div>


  );
};

export default AddressBookHeader;  

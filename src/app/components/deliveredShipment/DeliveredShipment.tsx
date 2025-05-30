"use client"
import DeliveredShipmentFeed from '@/app/sections/deliveredShipmentFeed/DeliveredShipmentFeed';
import React from 'react';
import { CiExport } from "react-icons/ci";


type Porps = {
    onAddShipment: ()=> void,
    onExport: ()=> void,

}

const DeliveredShipment: React.FC<Props> = ({onAddShipment, onExport}) => {
  return (
    <div className='lg:px-50 py-6'>
        <div className='flex flex-wrap items-center justify-between px-50'>
            {/* title */}
            <div>
                <h1 className='text-[#333333] w-[115px] h-[28px] pb-12 font-semibold text-2xl pr-10'>Shipments</h1>

            </div>
            {/* Button */}
            <div className='flex flex-wrap gap-4'>
                {/* Export Button */}
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

                {/* Add Shippment Button */}
                <div className='w-[183px] h-[40px] bg-[#FD4A09]'>      
                <button
                onClick={onAddShipment}
                className='text-md text-[#FFF] px-2 text-center mt-2 cursor-pointer'
                >
                    + Add new shipment

                </button>
                </div>

            </div>

        </div>
        <div>
            <DeliveredShipmentFeed />
        </div>
        

    </div>
  )
}

export default DeliveredShipment
"use client";
import React from 'react'
import SelectCarrier from '../sections/select/SelectCarrier'
import Button from '../sections/buttons/Button';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl">
        <SelectCarrier />
        
        <div className='mb-8'>
            <Button />
        </div>
        </div>
    </div>
  )
}

export default page
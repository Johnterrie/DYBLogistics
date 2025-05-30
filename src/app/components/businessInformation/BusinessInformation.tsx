"use client"
import CollapseCard from '@/app/sections/collapseCard/CollapseCard'
import PendingStatus from '@/app/sections/kycProfileHeader/PendingStatus'
import React from 'react'

const BusinessInformation = () => {
    
  return (
    <div className=''>
        <PendingStatus/>
        <CollapseCard />
        
    </div>
  )
}

export default BusinessInformation
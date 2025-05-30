"use client"
import PendingStatus from '@/app/sections/kycProfileHeader/PendingStatus'
import ReviewCollapseCard from '@/app/sections/reviewCollapseCard/ReviewCollapseCard'
import React from 'react'

const ReviewSetup = () => {
  return (
    <div>
        <PendingStatus />
        <ReviewCollapseCard />
    </div>
  )
}

export default ReviewSetup
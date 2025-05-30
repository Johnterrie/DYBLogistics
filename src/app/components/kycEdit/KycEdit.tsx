"use client"
import KycEditForm from '@/app/sections/kycEditForm/KycEditForm'
import ApprovedStatus from '@/app/sections/kycProfileHeader/ApprovedStatus'
import React from 'react'

const KycEdit = () => {
  return (
    <div>
        <ApprovedStatus />
        <KycEditForm />
    </div>
  )
}

export default KycEdit
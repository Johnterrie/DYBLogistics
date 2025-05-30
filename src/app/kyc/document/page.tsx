"use clent"
import DocumentUploaded from '@/app/components/documentUploaded/DocumentUploaded'
import VerifiedStatus from '@/app/sections/kycProfileHeader/verifiedStatus/VerifiedStatus'
import React from 'react'

const page = () => {
  return (
    <div>
        <VerifiedStatus />
        <DocumentUploaded />
    </div>
  )
}

export default page
import CustumButton from '@/app/sections/reusableButton/CustumButton'
import React from 'react'

const ButtonGroup: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 lg:justify-between md:justify-start my-6 w-full ml-6 lg:px-10">
  <CustumButton label="Book Shipment" />
  <CustumButton label="Track Shipment" />
  <CustumButton label="Fund Wallet" />
  <CustumButton label="Access Rate Calculator" />
</div>

  )
}

export default ButtonGroup
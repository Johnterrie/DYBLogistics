import React from 'react'

interface CustumButton{
    label: string;
    onClick?: () => void;

}
const CustumButton: React.FC = ({label, onClick}) => {
  return (
    <div>
    <button
      className="w-[270px] h-[48px] bg-[#FD4A09] text-white rounded-md hover:opacity-90 transition no-underline"
      onClick={onClick}
    >
      {label}
    </button>
    </div>
  )
}

export default CustumButton
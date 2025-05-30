import React from 'react'

const EditProgressBar = ({ currentStep, totalSteps, onEdit }) => {
    const progressPercent = (currentStep / totalSteps) * 100;
  return (
    <div>
        <div className='w-full 2xl:px-72 py-4 sm:px-6 md:px-12 lg:px-24 xl:px-40'>
        <div className="flex items-center gap-4 w-full">
      {/* Progress Line Container */}
      <div className="relative flex-1 h-1 bg-gray-400 rounded-full">
        <div
          className="absolute top-0 left-0 h-1 rounded-full"
          style={{ width: `${progressPercent}%`, backgroundColor: "#FD4A09" }}
        />
      </div>

      {/* Step Text */}
      <div className="text-sm text-gray-600 whitespace-nowrap">
        Step {currentStep} of {totalSteps}
      </div>

      {/* Edit Button */}
      <button
        
        onClick={onEdit}
        className="bg-[#FD4A09] w-[149.58px] text-white px-4 py-1.5 text-sm rounded-md hover:bg-orange-600 transition cursor-pointer"
      >
        Edit
      </button>
    </div>
    </div>
    </div>
  )
}

export default EditProgressBar
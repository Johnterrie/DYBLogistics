import React from 'react'

const Dyb = () => {
  return (
    <div>
        {/* New Section: Dark Background with White Text */}
       <div className="mt-16 bg-[#222222] text-white p-8 text-left rounded-lg shadow-md w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ship with the DYB Team</h2>
        <p className="text-md">
        DYB is a forward-thinking logistics company, and we are intentional about working with <br />
        people who are passionate, innovative, and committed to excellence. Ship with us today for <br /> 
        fast and efficient package delivery
        </p>

        {/* Sign Up Button */}
       <div className='pt-8'>
       <button className="bg-[#FD4A09] text-white py-3 px-8 rounded-lg font-semibold text-md hover:bg-[#e14307] transition-colors duration-300 cursor-pointer">
        Sign Up
       </button>
       </div>
       </div>
       
    </div>
  )
}

export default Dyb
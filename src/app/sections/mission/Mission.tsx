import React from 'react'

const Mission = () => {
  return (
    <div>
        {/* Split Section: Image + Info Box */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div>
         <img
           src="/images/frame.png"
           alt=""
           className="w-full h-[800px] object-cover shadow-md"
           />
        </div>

        {/* Right Content Box */}
        <div className="bg-[#FFF8F5] p-6 shadow-md flex flex-col justify-between h-[800px]">
        {/* Top Section */}
        <div className="mb-4 mt-12">
          <h4 className="text-xl font-bold mb-2 text-black">Our Mission</h4>
          <p className="text-gray-700 font-bold">
          To transform global logistics by providing fast, reliable, <br />and seamless parcel delivery through innovative digital <br />solutions.
         </p>
        </div>

        {/* Horizontal Line */}
        <div className="relative my-6">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full shadow-md"></span>
        <hr className="border-t-4 border-gray-500 w-full" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full shadow-md"></span>
        </div>

         {/* Bottom Section */}
         <div className="mb-32">
           <h4 className="text-xl font-bold mb-2 text-black">Our Vision</h4>
           <p className="text-gray-700 font-bold">
          To empower businesses worldwide with fast, reliable, <br /> and innovative logistics solutions that drive growth and <br /> seamless global connections.
           </p>
         </div>
        </div>
      </div>

    </div>
  )
}

export default Mission
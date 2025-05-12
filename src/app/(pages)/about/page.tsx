import React from 'react'

const about = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
        Redefining global logistics with smart solutions and <br />seamless parcel delivery that connects the world
      </h3>
      <button className="mt-4 px-6 py-3 w-32 bg-[#FD4A09] hover:bg-[#ff6b6b] text-white rounded-full text-md transition duration-300 cursor-pointer">
        Sign Up
      </button>
    </div>

    {/* Image Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/images/frame5.png"
            alt="Logistics 1"
            className="w-full h-88 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/frame4.png"
            alt="Logistics 2"
            className="w-full h-88 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/frame3.png"
            alt="Logistics 3"
            className="w-full h-88 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="mt-12">
          <img
            src="/images/image 2.png"
            alt=""
            className="w-full h-[900px] md:h-[1100px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="mt-12 flex justify-center">
         <img
           src="/images/frame2.png"
           alt=""
           className="w-[95%] md:w-[60%] h-[500px] md:h-[600px] object-cover rounded-lg shadow-md"
          />
        </div>

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
      {/* Last Section: Image and FAQ */}
     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Image */}
     <div>
     <img
      src="/images/image 18.png"
      alt="FAQ Image"
      className="w-[70%] h-[650px] object-cover rounded-lg shadow-md ml-16"
      />
     </div>

      {/* Right Content: FAQ */}
      <div className="bg-white text-black p-8 rounded-lg space-y-4 mr-8">
      <h3 className="text-3xl font-extrabold mb-12">Frequently Asked Questions</h3>
      <p className="text-lg mb-12">Have questions? We're here to help.</p>

      {/* Option 1: What services do you offer? */}
      <div className="flex items-center space-x-4 mb-12">
      <div className="relative w-full">
        <select className="p-2 rounded-lg bg-gray-200 text-black w-full appearance-none pr-10">
          <option value="services">What services do you offer?</option>
        </select>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD4A09]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
       </div>
      </div>
      <p className="text-gray-700 mr-8">We provide a wide range of logistics solutions, including domestic and international shipping.</p>

      {/* Option 2: How do I track my shipment? */}
      <div className="flex items-center space-x-4 mb-12">
      <div className="relative w-full">
        <select className="p-2 rounded-lg bg-gray-200 text-black w-full appearance-none pr-10">
          <option value="track-shipment">How do I track my shipment?</option>
        </select>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 rotate-270">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD4A09]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
       </div>
      </div>

      {/* Option 3: How are shipping rates determined? */}
      <div className="flex items-center space-x-4 mb-12">
      <div className="relative w-full">
        <select className="p-2 rounded-lg bg-gray-200 text-black w-full appearance-none pr-10">
          <option value="shipping-rates">How are shipping rates determined?</option>
        </select>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 rotate-270">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD4A09]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
       </div>
      </div>

      {/* Option 4: What type of payment do you accept? */}
      <div className="flex items-center space-x-4 mb-12">
      <div className="relative w-full">
        <select className="p-2 rounded-lg bg-gray-200 text-black w-full appearance-none pr-10">
          <option value="payment">What type of payment do you accept?</option>
        </select>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 rotate-270">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD4A09]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      </div>

      {/* Option 5: Do you ship internationally? */}
      <div className="flex items-center space-x-4 mb-12">
       <div className="relative w-full">
        <select className="p-2 rounded-lg bg-gray-200 text-black w-full appearance-none pr-10">
          <option value="international-shipping">Do you ship internationally?</option>
        </select>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 rotate-270">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD4A09]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        </div>
      </div>
      </div>
     </div>


  </section>
  )
}

export default about;
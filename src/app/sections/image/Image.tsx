import React from 'react'

const Image = () => {
  return (
    <div>
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
    </div>
  )
}

export default Image
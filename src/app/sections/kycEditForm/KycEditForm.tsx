import React from 'react'
import Image from 'next/image'

const KycEditForm = ({onEdit}) => {
  return (
    <div className='py-6 px-4 lg:px-24 2xl:px-96'>
        <div className=' flex gap-[64px]'>
            <h2>Company Logo:</h2>
            <Image 
            src="/images/dyblogo.svg"
            alt="Comapany Logo"
            width={130}
            height={57.39}
            />
        </div>
        <div>
            <form action="Edit" className='space-y-4'>
                {/* Company Name */}
                <div className='flex items-center gap-[64px] py-6'>
                    <label htmlFor="Company Name"
                    className='text-black'>
                        Company Name:
                        </label>
                        <input
                         type="text" 
                         placeholder='ABC Logistics'
                         className='w-[426px] h-[53px] bg-white border-[0.5px] border-gray-300 focus:outline-none rounded-lg p-6 text-lg'/>

                </div>
                {/* Primary Contact */}
                <div className='flex items-center gap-[64px] py-4'>
                    <label htmlFor="Primary Contact"
                    className='text-black'>
                        Primary Contact:
                        </label>
                        <input
                         type="text" 
                         placeholder='Mecury Paul'
                         className='w-[426px] h-[53px] bg-white border-[0.5px] border-gray-300 focus:outline-none rounded-lg p-6 text-lg'/>

                </div>
                {/* Phone */}
                <div className='flex items-center gap-[134px] py-4'>
                    <label htmlFor="Phone"
                    className='text-black'>
                        Phone:
                        </label>
                        <input
                         type="text" 
                         placeholder='+2349012676322'
                         className='w-[426px] h-[53px] bg-white border-[0.5px] border-gray-300 focus:outline-none rounded-lg p-6 text-lg'/>

                </div>
                {/* Business Address */}
                <div className='flex items-center gap-[45px] py-4'>
                    <label htmlFor="Business Address"
                    className='text-black'>
                        Business Address:
                        </label>
                        <textarea
                         placeholder='Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos'
                         rows={2}
                         className='w-[426px] h-[53px] bg-white border-[0.5px] border-gray-300 focus:outline-none rounded-lg p-6 text-lg'/>

                </div>
                {/* Registration Number */}
                <div className='flex items-center gap-[30px] py-4'>
                    <label htmlFor="Registration Number"
                    className='text-black'>
                        Registration Number:
                        </label>
                        <input
                         type="text" 
                         placeholder='1234567'
                         className='w-[426px] h-[53px] bg-white border-[0.5px] border-gray-300 focus:outline-none rounded-lg p-6 text-lg'/>

                </div>
                {/* Industry */}
                <div className='flex items-center gap-[124px] py-4'>
                    <label htmlFor="Industry"
                    className='text-black'>
                        Industry:
                        </label>
                        <input
                         type="text" 
                         placeholder='Logistics'
                         className='w-[426px] h-[53px] bg-white border-[0.5px] border-gray-300 focus:outline-none rounded-lg p-6 text-lg'/>

                </div>
                {/* Edit Button */}
               <button
        
                   onClick={onEdit}
                  className="bg-[#FD4A09] w-[149.58px] text-white px-4 py-1.5 text-sm rounded-md hover:bg-orange-600 transition cursor-pointer"
               >
                 Edit
               </button>

            </form>
        </div>

    </div>
  )
}

export default KycEditForm
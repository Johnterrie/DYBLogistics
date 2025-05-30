import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import EditProgressBar from '../stepProgressBar/EditProgressBar';
import { MdOutlineModeEdit } from 'react-icons/md';
import { FaRegDotCircle } from 'react-icons/fa';

const ReviewCollapseCard = ({onComplete}) => {
    const router = useRouter();
    const [step, setStep] = useState(5);
    const totalSteps = 5;
    const [isEditable, setIsEditable] = useState(false);
    const [companyName, setCompanyName] = useState('');

    const handleEditClick = () => {
    setIsEditable(true);
    };
  return (
    <div className="relative px-52 mx-auto py-14 mt-12 sm:px-6 md:px-12 lg:px-24 xl:px-40">
      {/* Layer 3 (bottom layer, peeking at top) */}
      <div className="absolute top-[-32px] left-0 right-0 mx-auto w-[706.2px] h-[358.82px] border-gray-300 bg-[#FFF8F5] shadow-[0_-3.27px_50px_-12px_rgba(0,0,0,0.25)] rounded-xl z-0"></div>

      {/* Layer 2 (middle layer, peeking above top layer) */}
      <div className="absolute top-[-4px] left-0 right-0 mx-auto w-[812.46px] h-[412.77px] border-gray-400 bg-[#FFF8F5] shadow-[0_-3.27px_50px_-12px_rgba(0,0,0,0.25)] rounded-xl z-10"></div>

      {/* Layer 1 (top layer, fully visible) */}
      <div className="relative top-[-20px] w-[1000.47px] h-[412.77px] mx-auto bg-[#FFF8F5] rounded-xl z-10 shadow-[0_-3.27px_50px_-12px_rgba(0,0,0,0.25)] p-4 mb-3">
        <h2 className="text-2xl font-bold mb-2 ">Review your setup before proceeding</h2>
        <p className="text-sm text-gray-700 font-semibold">Please review the details below and make any necessary changes before completing your setup.</p>

        <div className="flex justify-between py-8">
        <div>
            <div>
                <label className="text-1xl font-semibold">Company Name</label>
                <div  className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <input
                     type="text"
                     required
                     placeholder="(required field)"
                     onChange={(e) => setCompanyName(e.target.value)}
                     readOnly={!isEditable}
                     className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                    /> 
                    <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <label className="text-1xl font-semibold">Company Type</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <select
                defaultValue=""
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm text-gray-600 focus:outline-none"
                >
                {/* <option value="" disabled>Select type</option> */}
                <option value="Logistics">Logistics</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Tech">Tech</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Media">Media</option>
                <option value="Other">Other</option>
                </select>
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
            <div>
                <label className="text-1xl font-semibold">Business Contact Details</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <input
                type="text"
                placeholder="Phone or Email"
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                />
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <label className="text-1xl font-semibold">Company Logo Upload</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <input
                type="text"
                placeholder="File upload (image only)"
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                />
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
        </div>
        </div>
        <div>
            <div>
                <label className="text-1xl font-semibold">Business Registration Number</label>
                <div  className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <input
                     type="text"
                     required
                     placeholder="(required field)"
                     onChange={(e) => setCompanyName(e.target.value)}
                     readOnly={!isEditable}
                     className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                    /> 
                    <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <label className="text-1xl font-semibold">Business License Document (CAC)</label>
                <div  className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <input
                     type="text"
                     required
                     placeholder="(required field)"
                     onChange={(e) => setCompanyName(e.target.value)}
                     readOnly={!isEditable}
                     className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                    /> 
                    <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <label className="text-1xl font-semibold">Define Shipping Zones</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <select
                defaultValue=""
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm text-[#222222] font-semibold focus:outline-none"
                >
                {/* <option value="" disabled>Select type</option> */}
                <option value="International">International</option>
                <option value="Interstate">Inter-State</option>
                <option value="Other">Other</option>
                </select>
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <label className="text-1xl font-semibold">Select Supported Delivery Options</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <select
                defaultValue=""
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm text-[#222222] font-semibold focus:outline-none"
                >
                {/* <option value="" disabled>Select type</option> */}
                <option value="Same-Day">Same-Day</option>
                <option value="Later">Later</option>
                <option value="Other">Other</option>
                </select>
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
        </div>
        <div className='py-20'>
            <div>
                <label className="text-1xl font-semibold">Pricing Model</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <select
                defaultValue=""
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm text-[#222222] font-semibold focus:outline-none"
                >
                {/* <option value="" disabled>Select type</option> */}
                <option value="Weight Based Pricing">Weight Based Pricing</option>
                <option value="Other">Other</option>
                </select>
                <FaRegDotCircle 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 mr-1 pointer-events-none" 
                />
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <label className="text-1xl font-semibold">Additional Services</label>
                <div className="relative flex items-center mt-1 mb-1 w-[292.62px]">
                    <select
                defaultValue=""
                className="w-[292.62px] h-[36.78px] mt-1 mb-1 bg-white rounded-lg border-gray-300 px-3 text-sm text-[#222222] font-semibold focus:outline-none"
                >
                {/* <option value="" disabled>Select type</option> */}
                <option value="Insurance">Insurance</option>
                <option value="Other">Other</option>
                </select>
                <FaRegDotCircle 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 mr-1 pointer-events-none" 
                />
                <MdOutlineModeEdit
                    onClick={handleEditClick}
                    className="mt-4 text-gray-500 cursor-pointer" />
                </div>
            </div>
            <div>
                <button
                   onClick={onComplete}
                   className="bg-[#F0F0F0] text-[#222222] text-sm font-semibold px-4 py-2 rounded-lg transition duration-200 float-right shadow-md"
                   >
                   Completed
                </button>
            </div>
        </div>   
      </div>
      </div>
      <EditProgressBar 
        currentStep={step}
        totalSteps={totalSteps}
        onEdit={() => {
          router.push('/dashboard');
        }}/>
      
    </div>
  )
}

export default ReviewCollapseCard
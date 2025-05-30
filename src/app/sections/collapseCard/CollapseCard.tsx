"use client";
import StepProgressBar from '@/app/sections/stepProgressBar/StepProgressBar'
import React, {useState} from "react";

const CollapseCard = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

  return (
    <div className="relative px-52 mx-auto py-14 mt-12 sm:px-6 md:px-12 lg:px-24 xl:px-40">
      {/* Layer 3 (bottom layer, peeking at top) */}
      <div className="absolute top-[-32px] left-0 right-0 mx-auto w-[706.2px] h-[358.82px] border-gray-300 bg-[#FFF8F5] shadow-[0_-3.27px_50px_-12px_rgba(0,0,0,0.25)] rounded-xl z-0"></div>

      {/* Layer 2 (middle layer, peeking above top layer) */}
      <div className="absolute top-[-4px] left-0 right-0 mx-auto w-[812.46px] h-[412.77px] border-gray-400 bg-[#FFF8F5] shadow-[0_-3.27px_50px_-12px_rgba(0,0,0,0.25)] rounded-xl z-10"></div>

      {/* Layer 1 (top layer, fully visible) */}
      <div className="relative w-[1000.47px] h-[412.77px] mx-auto bg-[#FFF8F5] rounded-xl z-20 shadow-[0_-3.27px_50px_-12px_rgba(0,0,0,0.25)] p-4">
        <h2 className="text-3xl font-bold mb-2 ">Business Information Setup</h2>
        <p className="text-sm text-gray-700 font-semibold">Provide key company details to personalize your logistics dashboard.</p>

        <div className="flex justify-between py-8">
        <div>
            <div className="">
                <label className="text-1xl font-semibold">Company Name</label>
                <p className="text-gray-400 text-xs">Enter the legal name of your business. This will appear across the platform and <br /> 
                on any invoices or communications with your customers</p>
                <input
                type="text"
                required
                placeholder="(required field)"
                className="w-[292.62px] h-[36.78px] mt-3 mb-3 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                />
            </div>
            <div>
                <label className="text-1xl font-semibold">Company Type</label>
                <p className="text-gray-400 text-xs">Select the type of business you operate. This helps the platform tailor features <br /> 
                and reports specific to your logistics type.</p>
                <select
                defaultValue=""
                className="w-[292.62px] h-[36.78px] mt-3 mb-3 bg-white rounded-lg border-gray-300 px-3 text-sm text-gray-600 focus:outline-none"
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
            </div>

        </div>
        <div>
            <div>
                <label className="text-1xl font-semibold">Business Contact Details</label>
                <p className="text-gray-400 text-xs">Enter key contact information so customers and the platform can reach you.</p>
                <input
                type="text"
                placeholder="Phone or Email"
                className="w-[292.62px] h-[36.78px] mt-7 mb-3 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                />
            </div>
            <div>
                <label className="text-1xl font-semibold">Company Logo Upload</label>
                <p className="text-gray-400 text-xs">Upload your company logo to create a personalized, branded experience for your users.</p>
                <input
                type="text"
                placeholder="File upload (image only)"
                className="w-[292.62px] h-[36.78px] mt-7 mb-3 bg-white rounded-lg border-gray-300 px-3 text-sm focus:outline-none"
                />
            </div>

        </div>
      </div>
      </div>
      <StepProgressBar 
        currentStep={step}
        totalSteps={totalSteps}
        onNext={() => {
          if (step < totalSteps) setStep(step + 1);
        }}/>
      
    </div>
  );
};

export default CollapseCard;

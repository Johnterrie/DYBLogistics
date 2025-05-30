'use client';

import React, { useState } from 'react';

const DocumentUploaded = () => {
  const [govId, setGovId] = useState(null);
  const [businessLicence, setBusinessLicence] = useState(null);
  const [proofOfAddress, setProofOfAddress] = useState(null);

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const UploadField = ({ id, label, file, setter, placeholder }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 sm:gap-x-[64px]">
      <label htmlFor={id} className="w-full sm:w-1/3 font-medium">{label}</label>
      <div className="w-full sm:w-2/3">
        <label
          htmlFor={id}
          className={`block p-2 border border-gray-300 rounded cursor-pointer bg-white hover:bg-gray-50 ${
            file ? 'text-black' : 'text-gray-800'
          }`}
           style={{ width: '423px', height: '53px'}}
        >
          {file ? file.name : placeholder}
        </label>
        <input
          type="file"
          id={id}
          name={id}
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => handleFileChange(e, setter)}
        />
      </div>
    </div>
  );

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-96 py-10">
      <h2 className="text-2xl font-bold mb-8 text-left text-gray-700">Documents Uploaded</h2>

      <form className="space-y-6">
        <UploadField
          id="govId"
          label="Government Issued ID:"
          file={govId}
          setter={setGovId}
          placeholder="ID_front.jpg"
        />
        <UploadField
          id="businessLicence"
          label="Business Licence:"
          file={businessLicence}
          setter={setBusinessLicence}
          placeholder="license.pdf"
        />
        <UploadField
          id="proofOfAddress"
          label="Proof of Address:"
          file={proofOfAddress}
          setter={setProofOfAddress}
          placeholder="utility_bill.pdf"
        />

        <div className="text-center pt-4 mb-12">
          <button
            type="submit"
            className="bg-[#FD4A09] text-white px-6 py-2 rounded transition float-left"
          >
            Resubmit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentUploaded;

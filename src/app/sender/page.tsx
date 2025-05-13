'use client';

import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Tooltip } from 'react-tooltip';
import { Search, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Sender = () => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [altPhone, setAltPhone] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      console.log({ ...data, phone, altPhone });
      setLoading(false);
      alert('Saved!');
    }, 2000);
  };

  const handleClear = () => setSearch('');

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Headline and Description */}
        <h2 className="text-3xl font-bold text-[#222222] mb-2">Add Sender</h2>
        <p className="text-[#AEAEAE] mb-6">Search from your saved addresses or create a new address</p>

        {/* Search Bar */}
           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
             <div className="relative w-full md:w-1/2">
               <input
                 type="text"
                 placeholder="Search from address book"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full bg-[#FDF9F9] border-1 border-[#FDE3DB] rounded-lg py-2 px-4 pr-12 md:pr-4 md:pl-10 text-[#AEAEAE] font-medium outline-none"
                 />
    {/* Icon - Responsive styles */}
                  <Search
                  className={`
                  absolute top-1/2 transform -translate-y-1/2
                  md:left-3 md:text-gray-500
                  left-auto right-3 bg-[#FD4A09] text-white p-1 rounded-full
                  w-6 h-6
                  md:bg-transparent md:p-0 md:rounded-none md:w-5 md:h-5
                  `}
                  />
              </div>
              <button
              onClick={handleClear}
              className="flex items-center text-[#FD4A09] text-sm font-semibold space-x-1"
              >
              <X size={14} />
              <span>Clear all</span>
              </button>
              </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm text-gray-600 mb-1">First Name</label>
              <input
                {...register('firstName', { required: 'First name is required' })}
                className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div className="w-full">
              <label className="block text-sm text-gray-600 mb-1">Last Name</label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Address Line 1</label>
            <input
              {...register('addressLine1', { required: 'Address Line 1 is required' })}
              className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
              placeholder="Enter Address Line 1"
            />
            {errors.addressLine1 && (
              <p className="text-red-500 text-sm mt-1">{errors.addressLine1.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1"> Address Line 2 (add a landmark)*Optional</label>
            <input
              {...register('addressLine2')}
              className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
              placeholder="Enter Landmark"
            />
          </div>

          {/* Location Fields: Country, State, City, Postal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Country</label>
              <select
                {...register('country', { required: 'Country is required' })}
                className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
              >
                <option value=""></option>
                <option value="NG">Nigeria</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">State / Province</label>
              <select
                {...register('stateProvince')}
                className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
              >
                <option value=""></option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="rivers">Rivers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">City</label>
              <select
                {...register('city')}
                className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
              >
                <option value=""></option>
                <option value="ikeja">Ikeja</option>
                <option value="garki">Garki</option>
                <option value="portharcourt">Port Harcourt</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Postal / Zip Code</label>
              <input
                {...register('postalCode')}
                className="w-full border-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FDAA09]"
                placeholder="Enter Postal Code"
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <PhoneInput
                country={'ng'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '6px',
                  borderColor: '#d1d5db',
                }}
                buttonStyle={{ borderRadius: '6px 0 0 6px', borderColor: '#d1d5db' }}
                inputClass="text-sm focus:outline-none focus:border-[#959A4A]"
                specialLabel=""
              />
            </div>

            <div className="w-full">
              <label className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email format',
                  },
                })}
                type="email"
                className="w-full p-2 border-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#959A4A]"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Alternate Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Alternate Phone</label>
            <PhoneInput
              country={'ng'}
              value={altPhone}
              onChange={setAltPhone}
              inputStyle={{
                width: '100%',
                height: '40px',
                borderRadius: '6px',
                borderColor: '#d1d5db',
              }}
              buttonStyle={{ borderRadius: '6px 0 0 6px', borderColor: '#d1d5db' }}
              inputClass="text-sm focus:outline-none focus:border-[#959A4A]"
              specialLabel=""
              placeholder="Alternate Phone Number"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#FD4A09] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#FDAA0955] transition cursor-pointer"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save and Continue'}
            </button>
          </div>
        </form>

        {mounted && <Tooltip effect="solid" />}
      </div>
    </div>
  );
};

export default Sender;

'use client';
import React, { useState } from 'react';

interface AddressFormProps {
  onAdd: (newUser: { name: string; address: string; contact: string }) => void;
  onCancel: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && address && contact) {
      onAdd({ name, address, contact });
      setName('');
      setAddress('');
      setContact('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add Address</h2>
      <div className="mb-4 mt-8">
        <label className="block mb-1 font-semibold"> Contact Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 px-3 py-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Address</label>
        <textarea
          className="w-full border border-gray-300  px-3 py-4 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Phone Number</label>
        <input
          type="tel"
          className="w-full border border-gray-300  px-3 py-4 rounded"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Phone Number"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Additional Info</label>
        <input
          type="tel"
          className="w-full border border-gray-300  px-3 py-4 rounded"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Additional Info"
          required
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-[#fff] rounded  w-[201px] h-[40px] border border-[#FD4A09] hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#FD4A09] w-[201px] h-[40px] text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddressForm;

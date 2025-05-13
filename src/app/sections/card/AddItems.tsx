"use client";

import React, { useState } from "react";
import { Plus, Upload, Image, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AddItems = () => {
  const [showParcel, setShowParcel] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const handleAddItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-[600px]">
        <h1 className="text-3xl font-bold mb-2 text-left">Add Items</h1>
        <p className="text-gray-600 mb-6 text-left">What's your shipment?</p>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Parcel 1</h2>
            <button
              onClick={() => setShowParcel(!showParcel)}
              className="text-sm text-[#222222] hover:underline flex items-center"
            >
              {showParcel ? "Hide" : "Show"}
              {showParcel ? (
                <ChevronUp size={16} className="ml-1" />
              ) : (
                <ChevronDown size={16} className="ml-1" />
              )}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showParcel && (
              <motion.div
                key="parcel-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {/* Top Section */}
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Items</p>
                    <button
                      onClick={handleAddItem}
                      className="text-sm text-[#FD4A09] hover:text-green-800 flex items-center cursor-pointer"
                    >
                      <Plus size={16} className="mr-1" />
                      Add Item
                    </button>
                  </div>
                  <hr className="mb-2" />
                  {items.length === 0 ? (
                    <p className="text-gray-500 italic">No items added.</p>
                  ) : (
                    <ul className="list-disc list-inside text-gray-700">
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Section */}
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center text-gray-700">
                      <Image size={20} className="mr-2" />
                      <span>Proof of Weight</span>
                    </div>
                    <label className="text-sm text-[#222222] bg-[#FFCAB6] rounded-full cursor-pointer flex items-center w-32 h-8">
                      <Upload size={16} className="mr-1" />
                      Upload
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                  <hr className="mb-2" />
                  {file ? (
                    <p className="text-gray-700">{file.name}</p>
                  ) : (
                    <p className="text-gray-500 italic">No file uploaded.</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AddItems;

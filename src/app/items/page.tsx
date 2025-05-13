"use client";
import React from 'react';
import AddItems from '../sections/card/AddItems';
import Button from '../sections/buttons/Button';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Shared centered container */}
      <div className="w-full max-w-2xl"> 
        <AddItems />

        <div className="mt-6 mb-6">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Page;

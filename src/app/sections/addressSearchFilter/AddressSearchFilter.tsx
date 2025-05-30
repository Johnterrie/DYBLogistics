'use client'
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const FilterSolidIcon = () => (
     <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Double horizontal lines with shaded dots"
  >
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#000"  />
        <stop offset="100%" stopColor="#000"  />
      </linearGradient>
    </defs>

    {/* Top line */}
    <line x1={2} y1={6} x2={22} y2={6} stroke="#000" strokeWidth={4} />

    {/* Top shaded circle */}
    <circle cx={8} cy={6} r={4} fill="url(#gradient)" />

    {/* Bottom line */}
    <line x1={2} y1={16} x2={22} y2={16} stroke="#000" strokeWidth={4} />

    {/* Bottom shaded circle */}
    <circle cx={12} cy={16} r={4} fill="url(#gradient)" />
  </svg>
);
interface AddressSearchFilterProps {
  onSearch: (query: string) => void;
  onToggleFilter: () => void;
  filterEnabled: boolean;
}

const AddressSearchFilter: React.FC<AddressSearchFilterProps> = ({
  onSearch,
  onToggleFilter,
  filterEnabled
}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-end px-4 mt-4 lg:px-10">
  <div className="flex flex-wrap items-center gap-3 sm:gap-4 max-w-full w-full sm:w-auto">
    {/* Search Input */}
    <div className="relative w-full sm:w-[321px]">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#BDBDBD]" />
      <input
        type="text"
        placeholder="search something here"
        value={query}
        onChange={handleInputChange}
        className="pl-10 pr-3 py-[6px] w-full h-[35px] text-sm text-[#BDBDBD] border-[0.5px] border-[#ccc] rounded-[4px] outline-none placeholder-[#BDBDBD] placeholder-opacity-100"
      />
    </div>

    {/* Filter Button */}
    <button
      onClick={onToggleFilter}
      className="flex items-center justify-center gap-[10px] px-3 py-[6px] w-full sm:w-[87px] h-[35px] text-sm text-[#333333] border border-[0.5px] border-[#ccc] rounded-[4px] hover:bg-gray-100 transition"
      type="button"
      aria-label="Toggle filter options"
    >
      <FilterSolidIcon />
      Filter
    </button>
  </div>
</div>

  );
};

export default AddressSearchFilter;

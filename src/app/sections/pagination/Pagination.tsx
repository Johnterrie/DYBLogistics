import React, { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

type PaginationProps<T> = {
  data: T[];
  onPaginate: (visibleData: T[]) => void;
  deepColor?: string;
};

function Pagination<T>({ data = [], onPaginate, deepColor = '#FD4A09' }: PaginationProps<T>) {
  const [showCount, setShowCount] = useState(10);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(data.length / showCount);

  useEffect(() => {
    const start = page * showCount;
    const paginatedData = data.slice(start, start + showCount);
    onPaginate(paginatedData);
  }, [data, page, showCount]);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 mb-10">
      {/* Show Result Dropdown */}
      <div className="text-sm">
        <label htmlFor="showResults" className="mr-2 text-[#A3A2AB]">
          Show Result:
        </label>
        <select
          id="showResults"
          className="px-2 py-1 text-sm text-[#949494] focus:outline-none border border-gray-300 rounded"
          value={showCount}
          onChange={(e) => {
            setShowCount(parseInt(e.target.value));
            setPage(0); // Reset page to 0 when showCount changes
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-3">
        <button
          title="Previous"
          className="w-9 h-9 border rounded-lg flex items-center justify-center"
          style={{ borderColor: deepColor, backgroundColor: '#fff' }}
          onClick={handlePrev}
          disabled={page === 0}
        >
          <BiChevronLeft className="text-xl" style={{ color: deepColor }} />
        </button>

        <button
          title="Next"
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: deepColor }}
          onClick={handleNext}
          disabled={page === totalPages - 1}
        >
          <BiChevronRight className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;

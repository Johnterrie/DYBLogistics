import React from 'react';

interface ButtonProps {
  loading?: boolean;
  onPreviousClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ loading = false, onPreviousClick }) => {
  return (
    <div>
      {/* Save Button */}
      <div className="flex justify-center md:justify-start mt-6 gap-4">
        <button
          type="button"
          className="w-full md:w-auto bg-[#FEE5DC] text-[#222] font-semibold px-6 py-2 rounded-full hover:bg-gray-400 transition cursor-pointer"
          onClick={onPreviousClick || (() => window.history.back())}
        >
          Previous
        </button>

        <button
          type="submit"
          className="w-full md:w-auto bg-[#FD4A09] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#FDAA0955] transition cursor-pointer"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save and Continue'}
        </button>
      </div>
    </div>
  );
};

export default Button;

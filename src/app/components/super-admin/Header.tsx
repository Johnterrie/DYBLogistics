"use client";

import Image from "next/image";
import { FaBars, FaBell } from "react-icons/fa";

import search from "../../../../public/icons/search-icon.svg";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 bg-white shadow border-b border-gray-200">
      <div className="flex items-center gap-4">
        <FaBars className="text-xl cursor-pointer text-gray-700" />
        <div className="flex items-center gap-2">
          <Image
            alt="logo"
            src={`/images/dyblogo.svg`}
            width={100}
            height={100}
            className="hidden md:block"
          />
        </div>
      </div>

      <div className="w-full flex flex-row justify-start items-center gap-5 max-w-md mx-4 px-4 py-2 rounded-[4px] border-[0.5px] border-[#BDBDBD] focus-within:border-[#FD4A09] ">
        <Image src={search} alt="search page" />
        <input
          type="text"
          placeholder="Search"
          className="w-full  text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <FaBell className="text-lg text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-2">
          <Image
            src="/user-avatar.jpg"
            alt="User"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="text-sm leading-tight">
            <div className="font-medium">Mercury Paul</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

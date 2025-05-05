"use client";
import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
function Nav() {
  //   const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 left-0 md:static w-full md:border-b border-gray-shade/60 py-3">
        <div className="max-container flex items-center justify-between">
          <Link href={"/customer/dashboard"}>
            <Image
              alt="logo"
              src={"/images/dyblogo.svg"}
              width={100}
              height={100}
              className="hidden md:block"
            />
            <Image
              alt="logo"
              src={"/images/dyblogo.svg"}
              width={80}
              height={80}
              className="md:hidden"
            />
          </Link>

          {/* mobile nav */}
          <div className="md:hidden">
            {/* menu */}
            <div className="relative z-50">
              <Image
                alt="menu"
                src={"/icons/menu.svg"}
                width={20}
                height={20}
              />
            </div>

            {/* overlay */}

            {/* menu */}
            <div className=""></div>
          </div>

          {/* desktop nav */}
          <label
            htmlFor="desktop search"
            className="w-2/3 hidden md:flex items-center gap-4 px-4 py-2 border border-gray-shade/60"
          >
            <Image
              alt="search-gray"
              src={"/icons/search-gray.svg"}
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full focus:outline-none"
            />
          </label>

          <div className="hidden md:flex items-center gap-5">
            <button>
              <Image
                alt="togglemode"
                src={"/icons/moon.svg"}
                width={20}
                height={20}
              />
            </button>

            <Link href={"/customer/notification"}>
              <Image
                alt="notification"
                src={"/icons/notis.svg"}
                width={20}
                height={20}
              />
            </Link>

            <div className="flex items-center gap-2">
              <Image
                alt="profile"
                src={"/icons/profile.svg"}
                width={40}
                height={40}
              />
              <div className="flex flex-col text-gray-shade text-sm">
                <span>Charles Okocha</span>
                <span>user</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

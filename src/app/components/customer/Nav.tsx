"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NavLink } from "./navLink";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 md:static w-full md:border-b border-gray-shade/40 p-3 lg:py-5 lg:px-8 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Link href={"/customer/dashboard"}>
            <Image
              alt="logo"
              src={"/images/dyblogo.svg"}
              width={120}
              height={120}
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
            <div onClick={() => setIsNavOpen(true)} className="relative">
              <Image
                alt="menu"
                src={"/icons/menu.svg"}
                width={20}
                height={20}
              />
            </div>

            {/* overlay */}
            <div
              onClick={() => setIsNavOpen(false)}
              className={`${
                isNavOpen ? "fixed" : "hidden"
              } fixed top-0 left-0 bg-black/50 w-screen h-screen duration-200 ease-in-out`}
            />

            {/* menu */}
            <div
              onClick={() => {
                setTimeout(() => {
                  setIsNavOpen(false);
                }, 800);
              }}
              className={`${
                isNavOpen ? "right-0 opacity-100" : "right-[-100%] opacity-0"
              } absolute top-0 bg-gray-light text-secondary min-w-fit py-10 px-5 h-screen flex flex-col gap-5 duration-200 ease-in-out`}
            >
              <div
                onClick={() => setIsNavOpen(false)}
                className="w-full flex justify-between"
              >
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
                <IoMdClose className="text-3xl text-main" />
              </div>
              <NavLink
                href="/customer/dashboard"
                label="Dashboard"
                activeIcon="/icons/dash-active.svg"
                inactiveIcon="/icons/dash-inactive.svg"
              />
              <NavLink
                href="/customer/book-shipment"
                label="Book Shipment"
                activeIcon="/icons/book-ship-active.svg"
                inactiveIcon="/icons/book-ship-inactive.svg"
              />
              <NavLink
                href="/customer/track-shipment"
                label="Track Shipment"
                activeIcon="/icons/track-ship-active.svg"
                inactiveIcon="/icons/track-ship-inactive.svg"
              />
              <NavLink
                href="/customer/rate-calculator"
                label="Rate Calculator"
                activeIcon="/icons/calculator-active.svg"
                inactiveIcon="/icons/calculator-inactive.svg"
              />
              <NavLink
                href="/customer/wallet"
                label="Wallet"
                activeIcon="/icons/wallet-active.svg"
                inactiveIcon="/icons/wallet-inactive.svg"
              />
              <NavLink
                href="/customer/shipment-summary"
                label="Shipment Summary"
                activeIcon="/icons/summary-active.svg"
                inactiveIcon="/icons/summary-inactive.svg"
              />
              <NavLink
                href="/customer/settings"
                label="Settings"
                activeIcon="/icons/settings-active.svg"
                inactiveIcon="/icons/settings-inactive.svg"
              />
              <Link
                href={"/"}
                className={`
        group cursor-pointer 
        text-gray-shade
        hover:text-main hover:font-bold 
        duration-200 ease-in-out 
        flex items-center gap-2 text-lg font-semibold
      `}
              >
                <CiLogout className="text-2xl" />
                Log Out
              </Link>
            </div>
          </div>

          {/* desktop nav */}
          <label
            htmlFor="desktop search"
            className="w-2/4 hidden md:flex items-center gap-4 px-4 py-2 border border-gray-shade/40 rounded-sm"
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
        {/* mobile search */}
        <label
          htmlFor="mobile search"
          className="w-full md:hidden flex items-center gap-4 px-4 py-2 bg-gray-shade/10 rounded-full"
        >
          <input
            type="text"
            placeholder="Enter your tracking number"
            className="w-full focus:outline-none placeholder:text-xs"
          />
          <div className="bg-main p-3 rounded-full">
            <Image
              alt="search-gray"
              src={"/icons/search-white.svg"}
              width={20}
              height={20}
            />
          </div>
        </label>
      </nav>
    </>
  );
}

export default Nav;

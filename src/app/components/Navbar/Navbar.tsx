"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
function Navbar() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {}, []);
  return (
    <>
      <nav className="w-full p-5">
        <div className="max-container flex flex-row items-center gap-3">
          {/* logo */}
          <Link href={"/"}>
            <Image
              alt="logo"
              src={`/images/dyblogo.svg`}
              width={100}
              height={100}
              className="hidden md:block"
            />
            <Image
              alt="logo"
              src={`/images/dyblogo.svg`}
              width={80}
              height={80}
              className="md:hidden"
            />
          </Link>

          {/* desktop nav */}
          <div className="hidden w-3/4 lg:flex flex-row items-center gap-16 ml-auto">
            {/* links */}
            <div className="flex flex-row items-center gap-8">
              <Link href={"/shipping"} className="nav-link">
                shipping
              </Link>
              <Link href={"/tracking"} className="nav-link">
                tracking
              </Link>
              <Link href={"/resources"} className="nav-link">
                resources
              </Link>
              <Link href={"/contact"} className="nav-link">
                contact
              </Link>
            </div>

            {/* cta-buttons */}
            <div className="flex flex-row items-center gap-6">
              <Link
                className="text-sm text-gray-dark font-semibold"
                href={"/customer/dashboard"}
              >
                Log in
              </Link>
              <Link
                href={"signup"}
                className="btn-large flex items-center flex-row gap-2"
              >
                Sign up{" "}
                <Image
                  alt="icon"
                  src={"/icons/button-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          {/* mobile nav */}
          <div className="lg:hidden relative ml-auto">
            {/* menu */}
            <div className="cursor-pointer relative z-[10]">
              <Image
                alt="henu"
                src={"/icons/menu.svg"}
                width={30}
                height={30}
                onClick={() => setNavOpen(true)}
              />
            </div>

            {/* mobile nav */}
            <div className="">
              {/* blur-background */}
              <div
                className={`${
                  isNavOpen ? "block z-[50]" : "hidden"
                } duration-300 ease-in-out fixed top-0 left-0 bg-gray-dark opacity-40 h-screen w-screen`}
              />
              {/* nav-links */}
              <div
                className={`absolute ${
                  isNavOpen
                    ? "right-[-20px] opacity-100 z-[50]"
                    : "right-[-100%] opacity-0"
                } duration-300 ease-in-out top-[-10px] w-[175px] h-fit bg-background flex flex-col gap-5 p-5`}
              >
                <div className="w-full flex items-center">
                  {" "}
                  <span
                    onClick={() => setNavOpen(false)}
                    className="ml-auto text-gray-dark capitalize opacity-[67%]"
                  >
                    close
                  </span>
                </div>
                <Link href={"/shipping"} className="nav-link">
                  shipping
                </Link>
                <Link href={"/tracking"} className="nav-link">
                  tracking
                </Link>
                <Link href={"/resources"} className="nav-link">
                  resources
                </Link>
                <Link href={"/contact"} className="nav-link">
                  contact
                </Link>
                <Link
                  className="text-sm text-gray-dark font-semibold"
                  href={"/login"}
                >
                  Log in
                </Link>
                <Link
                  href={"signup"}
                  className="text-main flex flex-row items-center gap-2"
                >
                  Sign up{" "}
                  <Image
                    alt="icon"
                    src={"/icons/button-main-icon.svg"}
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

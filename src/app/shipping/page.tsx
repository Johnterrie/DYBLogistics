import Image from "next/image";
import Link from "next/link";
import React from "react";

import shipping from "../../../public/images/shipping.svg";
import destination from "../../../public/icons/destination-select-icon.svg";
import expressVan from "../../../public/icons/express-van-icon.svg";
import domesticRun from "../../../public/icons/domestic-run-icon.svg";
import searchIcon from "../../../public/icons/search-icon.svg";
import airFreight from "../../../public/icons/air-freight-icon.svg";
import seaFreight from "../../../public/icons/sea-freight-icon.svg";
import roadFreight from "../../../public/icons/road-freight-icon.svg";
import arrowDown from "../../../public/icons/arrow-down-grey.svg";

import { Faq } from "@/app/components/shipping/Faq";
import { StateSelector } from "@/app/components/shipping/StateSelector";

const navLinks = [
  { name: "Air", href: "", icon: airFreight },
  { name: "Road", href: "", icon: roadFreight },
  { name: "Sea", href: "", icon: seaFreight },
];

const ShippingPage = () => {
  return (
    <div className="px-[22px]">
      <div className="flex w-full justify-center">
        <h3 className="text-center font-bold text-[20px] md:text-[45px] my-[35px] w-[90%] sm:w-[65%]">
          Choose Your Preferred Shipping Option By Cost
        </h3>
      </div>

      <section className=" px-[22px] sm:px-[68px] md:py-[52px] flex flex-col md:flex-row">
        <div>
          <h4 className="text-left font-bold text-[14px] sm:text-[24px] mb-[8px] ">
            Domestic Shipping
          </h4>
          <p className="font-medium text-[#22222299] text-[12px] sm:text-[16px] leading-[148%] mb-[21px] sm:mb-[50px] ">
            At DYB Africa, we efficiently deliver nationwide by different
            channels and carefully selected couriers so your packages remain
            protected.
          </p>
          <button className=" mb-[50px] rounded-[40px] w-[129px] h-[30px] md:w-[271px] md:h-[70px] bg-[#FD4A09] font-bold text-[#FFFFFF] text-[12px] md:text-[20px] px-[35px] md:px-[81px] py-[6px] md:py-[23px] ">
            Explore &rarr;
          </button>
        </div>

        <div className=" px-[28px] py-[24px] md:py-0 flex flex-col md:items-start  md:flex-row gap-8">
          <form>
            <h5 className=" text-[12px] mb-[10px] sm:text-[20px] font-bold ">
              Charges
            </h5>
            <label className="font-medium text-[12px] sm:text-[14px] leading-[100%] text-[#22222299] mb-[14px] sm:mb-[29px] ">
              Check destination to see shipping rates
            </label>

            <div className="focus-within:border-[#FD4A09] mb-[17px] sm:mb-[21px] px-[17px] align-middle justify-between flex flex-row w-[300px] sm:w-[346] sm:h-[50px] h-[47px] top-[78px] left-[24px] rounded-[20px] sm:rounded-[30px] border-[1px] border-[#BCBCBC] ">
              <div className=" flex flex-row gap-1">
                <Image src={destination} alt="Destination icon" />
                <StateSelector />
              </div>
              <div className="flex justify-center align-middle  ">
                <Image src={arrowDown} alt="grew arrow down" className="" />
              </div>
            </div>

            <article>
              <header className="mb-[8px] sm:mb-[20px]">
                <h5 className=" font-bold text-[12px] sm:text-[18px] leading-[100%] ">
                  Rates
                </h5>
              </header>

              <div className="flex flex-row justify-between items-center px-[17px] h-[47px] w-[300px]  sm:w-[346] sm:h-[60px] rounded-[20px] sm:rounded-[30px] border-[1px] border-[#FD4A09] mb-[17px] ">
                <div className="flex flex-row gap-2  ">
                  <Image src={expressVan} alt="Express van icon" />
                  <p className="text-[12px] sm:text-[14px] font-semibold py-[13px] sm:py-[18px]">
                    Express
                  </p>
                </div>
                <p className="flex flex-col py-[8px]">
                  <span className="text-[11px] sm:text-[13px] font-semibold">
                    Price
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-semibold">
                    Duration
                  </span>
                </p>
              </div>

              <div className="flex flex-row justify-between items-center px-[17px] h-[47px] w-[300px]  sm:w-[346] sm:h-[60px] rounded-[20px] sm:rounded-[30px] border-[1px] border-[#BCBCBC] ">
                <div className="flex flex-row gap-2  ">
                  <Image src={domesticRun} alt="Domestic delivery icon" />
                  <p className="text-[12px] sm:text-[14px] font-semibold py-[13px] sm:py-[18px]">
                    Domestic
                  </p>
                </div>
                <p className="flex flex-col py-[8px]">
                  <span className="text-[11px] sm:text-[13px] font-semibold">
                    Price
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-semibold">
                    Duration
                  </span>
                </p>
              </div>
            </article>
          </form>

          <div className="mt-[50px] md:mt-0 md:px-[29px]">
            <form className="mb-[43px]">
              <label
                htmlFor="service-search"
                className="text-[12px] mb-[17px] sm:text-[20px] font-bold "
              >
                Search services
              </label>
              <div className="w-[276px] h-[38px] rounded-[30px] px-[20px] bg-[#F5F5F5] flex flex-row gap-1 focus-within:border-[1px] focus-within:border-[#FD4A09] ">
                <Image src={searchIcon} alt="Search icon" />
                <input
                  id="service-search"
                  type="text"
                  placeholder="Search"
                  className="w-[100%] outline-none"
                />
              </div>
            </form>

            <div className="">
              <h5 className="text-14 md:text-[20px] font-bold mb-[17px] ">
                All Services
              </h5>
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li
                    className="w-[276px] h-[38px] rounded-[30px] px-[20px] bg-[#F5F5F5]  focus-within:border-[1px] focus-within:border-[#FD4A09] "
                    key={link.name}
                  >
                    <Link
                      className="flex flex-row gap-1 py-[10px]"
                      href={link.href}
                    >
                      <Image src={link.icon} alt={`${link.name} icon`} />
                      <span>{link.name} freight</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex md:p-[74px] gap-16">
        <div className="hidden md:block ">
          <Image
            src={shipping}
            alt="Shipping illustration"
            className="object-cover object-center h-[100%]"
            quality={100}
          />
        </div>
        <div className="w-full py-[21px] md:py-0">
          <h3 className="text-center md:text-[45px] md:text-left font-bold ">
            Frequently Asked Questions
          </h3>
          <p className="text-center md:text-left font-normal md:font-medium md:text-2xl text-[12px] text-[#22222299]">
            Have questions? We’re here to help
          </p>
          <Faq />
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;

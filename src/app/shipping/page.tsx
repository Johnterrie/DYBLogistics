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

      <section>
        <div>
          <h4>Domestic Shipping</h4>
          <p>
            At DYB Africa, we efficiently deliver nationwide by different
            channels and carefully selected couriers so your packages remain
            protected.
          </p>
          <button>Explore &rarr;</button>
        </div>

        <div>
          <form>
            <h5>Charges</h5>
            <label>Check destination to see shipping rates</label>

            <div>
              <Image src={destination} alt="Destination icon" />
              <StateSelector />
            </div>

            <article>
              <header>
                <h5>Rates</h5>
              </header>

              <div>
                <div>
                  <Image src={expressVan} alt="Express van icon" />
                  <p>Express</p>
                </div>
                <p>
                  <span>Price</span>
                  <span>Duration</span>
                </p>
              </div>

              <div>
                <div>
                  <Image src={domesticRun} alt="Domestic delivery icon" />
                  <p>Domestic</p>
                </div>
                <p>
                  <span>Price</span>
                  <span>Duration</span>
                </p>
              </div>
            </article>
          </form>

          <div>
            <form>
              <label htmlFor="service-search" className="sr-only">
                Search services
              </label>
              <div>
                <Image src={searchIcon} alt="Search icon" />
                <input id="service-search" type="text" placeholder="Search" />
              </div>
            </form>

            <div>
              <h5>All Services</h5>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
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

      <section>
        <div>
          <Image src={shipping} alt="Shipping illustration" />
        </div>
        <div>
          <h3>Frequently Asked Questions</h3>
        </div>
        <Faq />
      </section>
    </div>
  );
};

export default ShippingPage;

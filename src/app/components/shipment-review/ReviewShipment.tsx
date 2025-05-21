"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import flag from "../../../../public/icons/flag-nigeria.svg";
import edit from "../../../../public/icons/edit-icon.svg";
import dhl from "../../../../public/images/dhl.svg";

interface Party {
  name: string;
  email: string;
  phones: string[];
  address: string;
}

interface ParcelInfo {
  purpose: string;
  totalWeight: string;
  totalValue: string;
  description: string;
}

interface CarrierInfo {
  name: string;
  cost: string;
}

interface ShipmentData {
  sender: Party;
  receiver: Party;
  parcel: ParcelInfo;
  carrier: CarrierInfo;
}

export default function ReviewShipment() {
  const [data, setData] = useState<ShipmentData | null>(null);

  useEffect(() => {
    const dummyData: ShipmentData = {
      sender: {
        name: "Charles Oka",
        email: "charlesoka@gmail.com",
        phones: ["+2349011111111", "+2349011111111"],
        address: "Rene street, Ikeja, Lagos, Nigeria. 100011",
      },
      receiver: {
        name: "Joy Smith",
        email: "joysmith@gmail.com",
        phones: ["+2348001111111", "+2348001111111"],
        address: "Adigun street, Lugbe Abuja, Nigeria. 122111",
      },
      parcel: {
        purpose: "Personal",
        totalWeight: "8kg",
        totalValue: "₦12,000.00",
        description: "Bag, 2 pieces, 8kg, ₦12,000.00",
      },
      carrier: {
        name: "DHL Express",
        cost: "₦25,650.50",
      },
    };

    setData(dummyData);
  }, []);

  if (!data) return <p className="text-center">Loading...</p>;

  return (
    <section className="p-6">
      <header className="mb-[35px]">
        <h1 className="text-[20px] md:text-[36px] text-center md:text-left leading-[25px] font-bold mb-[7px] md:mb-[14px]">
          Review Shipment
        </h1>
        <p className="text-[12px] md:text-[20px] text-400 text-[#2222227D] text-center md:text-left">
          Confirm all details below before making payment.
        </p>
      </header>

      <article
        className="mb-6 border-[0.4px] border-[#D7D7D7] rounded px-[21px] md:px-[23px] md:py-[25px] py-[15px]"
        aria-labelledby="sender-title"
      >
        <div className="flex flex-row justify-between items-start">
          <div>
            <h2 id="sender-title" className="text-lg font-medium mb-2">
              Sender
            </h2>
            <address className="not-italic">
              <p>{data.sender.name}</p>
              <p>{data.sender.email}</p>
              <p>{data.sender.phones.join(", ")}</p>
              <p>{data.sender.address}</p>
            </address>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 bg-[#FD4A0924] w-[69px] md:w-[145px] h-[23px] md:h-[45px] rounded-[40px]">
            <Image
              className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] "
              src={edit}
              alt="edit note"
            />
            <button className=" text-[12px] md:text-[24px] font-normal ">
              Edit
            </button>
          </div>
        </div>
      </article>

      <article
        className="mb-6 border-[0.4px] border-[#D7D7D7] rounded px-[21px] md:px-[23px] md:py-[25px] py-[15px]"
        aria-labelledby="receiver-title"
      >
        <div className="flex flex-row justify-between items-start">
          <div>
            {" "}
            <h2 id="receiver-title" className="text-lg font-medium mb-2">
              Receiver
            </h2>
            <address className="not-italic">
              <p>{data.receiver.name}</p>
              <p>{data.receiver.email}</p>
              <p>{data.receiver.phones.join(", ")}</p>
              <p>{data.receiver.address}</p>
            </address>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 bg-[#FD4A0924] w-[69px] md:w-[145px] h-[23px] md:h-[45px] rounded-[40px]">
            <Image
              className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] "
              src={edit}
              alt="edit note"
            />
            <button className=" text-[12px] md:text-[24px] font-normal ">
              Edit
            </button>
          </div>
        </div>
      </article>

      <section
        className="mb-6 border-[0.4px] border-[#D7D7D7] rounded px-[21px] md:px-[23px] md:py-[25px] py-[15px]"
        aria-labelledby="parcel-info-title"
      >
        <div className="flex flex-row justify-between items-start">
          <div>
            <h2 id="parcel-info-title" className="text-lg font-medium mb-2">
              Parcel Information
            </h2>
            <p>Purpose: {data.parcel.purpose}</p>
            <p>Total weight: {data.parcel.totalWeight}</p>
            <p>Item’s Total Value: {data.parcel.totalValue}</p>
            <p>{data.parcel.description}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 bg-[#FD4A0924] w-[69px] md:w-[145px] h-[23px] md:h-[45px] rounded-[40px]">
            <Image
              className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] "
              src={edit}
              alt="edit note"
            />
            <button className=" text-[12px] md:text-[24px] font-normal ">
              Edit
            </button>
          </div>
        </div>
      </section>

      <section
        className="mb-6 border-[0.4px] border-[#D7D7D7] rounded px-[21px] md:px-[23px] md:py-[25px] py-[15px]"
        aria-labelledby="carrier-title"
      >
        <div className="flex flex-row justify-between items-start">
          <div>
            <h2 id="carrier-title" className="text-lg font-medium mb-2">
              Carrier Information
            </h2>
            <div className="w-full flex flex-row  gap-1.5 items-center">
              <div className=" flex flex-row items-center justify-between md:justify-start md:gap-[24px]">
                <Image
                  className="w-[82px] h-[95px]"
                  src={dhl}
                  alt="dhl display"
                />
                <p className="font-semibold text-[12px] md:text-2xl leading-[100%]">
                  {data.carrier.name}
                </p>
              </div>
              <p className=" text-[16px] md:text-2xl font-bold ">
                {data.carrier.cost}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 bg-[#FD4A0924] w-[69px] md:w-[145px] h-[23px] md:h-[45px] rounded-[40px]">
            <Image
              className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] "
              src={edit}
              alt="edit note"
            />
            <button className=" text-[12px] md:text-[24px] font-normal ">
              Edit
            </button>
          </div>
        </div>
      </section>

      <div className="flex justify-between md:justify-start gap-10 mt-10 mb-12">
        <button className="font-bold text-[12px] md:text-[20px] md:border-[0.5px] md:border-[#22222299] p-3 w-full md:w-[145px] md:h-[60px] bg-[#FD4A0980] rounded-[40px]">
          Previous
        </button>
        <button className="font-bold text-[12px] text-[#FFFFFF] md:text-[20px] md:border-[0.5px]  p-3 w-full md:w-[225px] md:h-[60px] bg-[#FD4A09] rounded-[40px]">
          Make payment
        </button>
      </div>
    </section>
  );
}

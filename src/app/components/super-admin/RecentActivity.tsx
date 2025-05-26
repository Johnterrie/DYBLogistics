import React, { FC } from "react";

import newlyRegistered from "../../../../public/icons/new-registered.svg";
import recentTransaction from "../../../../public/icons/recent-transaction.svg";
import support from "../../../../public/icons/support-ticket.svg";
import loginActivity from "../../../../public/icons/login-activities.svg";
import time from "../../../../public/icons/time.svg";
import company from "../../../../public/icons/company.svg";

import Image, { StaticImageData } from "next/image";

type ActivityItem = {
  icon: StaticImageData;
  title: string;
  description: string;
  timestamp: string;
  details: string[];
  color?: string;
};

const activities: ActivityItem[] = [
  {
    icon: newlyRegistered,
    title: "Newly registered companies",
    description: "XYZ Logistics joined the platform.",
    timestamp: "2 mins ago",
    details: [
      "Registered by John Doe (Company Admin)",
      "Email: admin@xyzlogistics.com",
    ],
    color: "text-[#000000]",
  },
  {
    icon: recentTransaction,
    title: "Recent Transactions (Shipment Activity)",
    description: "ABC Logistics processed a ₦950,000 shipment.",
    timestamp: "10 mins ago",
    details: [
      "Shipment ID: #TXN77334",
      "Payment Status: Successful",
      "Destination: Lagos, NGA",
    ],
    color: "text-[#FFC107]",
  },
  {
    icon: support,
    title: "Support Tickets Raised",
    description:
      'John Doe (Client) raised a ticket: "Shipment delayed by 3 days."',
    timestamp: "15 mins ago",
    details: [
      "Ticket ID: #STX10579",
      "Assigned to: Jane Support - Bank Switch",
    ],
    color: " text-[#007BFF] ",
  },
  {
    icon: loginActivity,
    title: "Admin Login Activity",
    description: "Super Admin logged in from Lagos, NG (IP: 192.168.1.1)",
    timestamp: "20 mins ago",
    details: [
      "Device: MacBook Pro (Chrome Browser)",
      "Action Taken: Viewed Revenue Report",
    ],
    color: " text-[#333333] ",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-[4px] shadow border-[0.5px] border-[#BDBDBD] w-[80%]">
      <h3 className="text-lg leading-[100%] font-normal text-[#FD4A09] mb-4">
        Recent Activity live update
      </h3>
      <hr className="mb-4 border-none bg-[#BDBDBD] h-[0.5px] w-[80%]" />

      <div className="space-y-6 text-sm text[#000000]">
        {activities.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-start items-center gap-2 mb-3">
              <Image width={24} height={24} src={item.icon} alt={item.title} />
              <span className={`font-normal text-[14px]  ${item.color}`}>
                {item.title}
              </span>
            </div>
            <hr className="mb-2 border-none bg-[#BDBDBD] h-[0.5px] w-[48%]" />
            <div className="flex flex-row justify-start items-center gap-4">
              <Image
                src={company}
                width={16}
                height={16}
                alt={item.description}
              />
              <p className="font-normal text-[10px] leading-[100%] text-[#7C7C7C]">
                {" "}
                {item.description}{" "}
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4">
              <Image height={16} width={16} alt={item.timestamp} src={time} />
              <p className="mt-1 font-normal text-[10px] leading-[100%] text-[#7C7C7C]">
                {item.timestamp}
              </p>
            </div>
            <div className="mt-3">
              <p className="font-normal text-[10px] mb-2">Additional info</p>
              <div className=" text-[#000000] mt-1 space-y-1 font-normal text-[8px]">
                {item.details.map((detail, idx) => (
                  <div key={idx}>{detail}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

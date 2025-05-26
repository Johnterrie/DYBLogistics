import React from "react";
import Link from "next/link";
import { FaTruck, FaCheckCircle, FaTicketAlt, FaCogs } from "react-icons/fa";

import addCompany from "../../../../public/icons/new-registered.svg";
import viewShipment from "../../../../public/icons/view-shipment.svg";
import adjustFee from "../../../../public/icons/adjust-fee.svg";
import viewReport from "../../../../public/icons/view-report.svg";
import Image from "next/image";

type LinkCard = {
  title: string;
  icon: string;
  href: string;
  color: string;
};

const links: LinkCard[] = [
  {
    title: "Add Company",
    icon: addCompany,
    href: "/super-admin/company-management",
    color: "bg-blue-500",
  },
  {
    title: "View Shipment",
    icon: viewShipment,
    href: "/super-admin/shipment-management",
    color: "bg-green-500",
  },
  {
    title: "Adjust Fee",
    icon: adjustFee,
    href: "/super-admin/user-management",
    color: "bg-yellow-500",
  },
  {
    title: "View Report",
    icon: viewReport,
    href: "/super-admin/revenue",
    color: "bg-gray-700",
  },
];

const QuickLinks = () => {
  return (
    <div className="flex flex-wrap justify-start items-start gap-6">
      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          <div
            className={`flex items-center justify-between gap-4 px-5 p-3  h-11 border-[1px] border-[#BDBDBD] rounded-[4px] text-black cursor-pointer hover:opacity-90 `}
          >
            <p className="flex justify-start items-center text-[18px] gap-2.5">
              <Image
                width={24}
                height={24}
                quality={100}
                src={link.icon}
                alt={link.title}
              />
              <span className="text-sm font-medium">{link.title}</span>
            </p>

            <span>&rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;

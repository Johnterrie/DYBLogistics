"use client";

import React from "react";
import {
  Home,
  Users,
  Truck,
  DollarSign,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    icon: <Home size={18} />,
    label: "Dashboard",
    href: "/super-admin",
  },
  {
    icon: <Users size={18} />,
    label: "Company Management",
    href: "/super-admin/company-management",
  },
  {
    icon: <Users size={18} />,
    label: "Users Management",
    href: "/super-admin/user-management",
  },
  {
    icon: <DollarSign size={18} />,
    label: "Revenue & Transactions",
    href: "/super-admin/revenue-transactions",
  },
  {
    icon: <Shield size={18} />,
    label: "Support & Compliance",
    href: "/super-admin/support-compliance",
  },
  {
    icon: <Settings size={18} />,
    label: "Settings",
    href: "/super-admin/settings",
  },
  {
    icon: <LogOut size={18} />,
    label: "Logout",
    href: "/super-admin/logout",
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between items-start w-64 bg-white h-screen border-r px-4 py-6">
      <div className="mb-10">
        <ul className="space-y-4">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={idx}
                className={`flex items-center text-sm space-x-3 cursor-pointer px-1.5 rounded-[4px] ${
                  isActive
                    ? "text-[#FD4A09] font-semibold border-l-2 border-[#FD4A09] "
                    : "text-gray-700 hover:text-[#FD4A09]"
                }`}
              >
                {item.icon}
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="absolute bottom-4 left-6 text-xs text-gray-400">
        ©2025 DYB Logistics.
        <br />
        All rights reserved worldwide.
      </div>
    </div>
  );
};

export default Sidebar;

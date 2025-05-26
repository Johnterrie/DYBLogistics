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

const navItems = [
  { icon: <Home size={18} />, label: "Dashboard" },
  { icon: <Users size={18} />, label: "Company Management" },
  { icon: <Users size={18} />, label: "Users Management" },
  { icon: <DollarSign size={18} />, label: "Revenue & Transactions" },
  { icon: <Shield size={18} />, label: "Support & Compliance" },
  { icon: <Settings size={18} />, label: "Settings" },
  { icon: <LogOut size={18} />, label: "Logout" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-start w-64 bg-white h-screen border-r px-4 py-6">
      <div className="mb-10">
        <ul className="space-y-4">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm text-gray-700 hover:text-orange-500 cursor-pointer space-x-3"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
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

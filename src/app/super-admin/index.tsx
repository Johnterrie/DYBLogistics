import React from "react";
import RecentActivity from "../components/super-admin/RecentActivity";
import QuickLinks from "../components/super-admin/QuickLinks";
import DashboardStats from "../components/super-admin/shipment-mangement/DashBoardStat";

const SuperAdminHome = () => {
  return (
    <div>
      <h2 className="text-[24px] font-medium text-[#7C7C7C] min-w-[100%] mb-6">
        Welcome to your Dashboard
      </h2>
      <DashboardStats />

      <div className="flex flex-row gap-6  mt-6">
        <RecentActivity />
        <QuickLinks />
      </div>
    </div>
  );
};

export default SuperAdminHome;

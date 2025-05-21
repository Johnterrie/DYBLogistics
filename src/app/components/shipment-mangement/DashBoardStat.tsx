import { FC } from "react";
import { Building2, Truck, User, Wallet } from "lucide-react";
import StatCard from "./StatCard";

const DashboardStats: FC = () => {
  const stats = [
    {
      title: "Total Companies",
      value: 300,
      icon: Building2,
      growth: 3.2,
    },
    {
      title: "Total Shipment",
      value: "3,050",
      icon: Truck,
      growth: 12.6,
    },
    {
      title: "Active User",
      value: 500,
      subLabel: "This Week",
      icon: User,
      growth: 3.5,
    },
    {
      title: "Revenue Overview",
      value: "₦1,250,500",
      subLabel: "This Month",
      icon: Wallet,
      growth: 13.2,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;

import React from "react";
import StatCard from "./StatCard";

const UserManagementStats: React.FC = () => {
  const stats = [
    { title: "Total Users Registered", value: "1,000,000" },
    { title: "Active Users", value: "700,000" },
    { title: "Inactive Users", value: "200,000" },
    { title: "Total Clients Across All Companies", value: "900,000" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default UserManagementStats;

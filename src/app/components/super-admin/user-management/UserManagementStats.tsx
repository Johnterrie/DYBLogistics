"use client";

import React, { useState } from "react";
import StatCard from "./StatCard";

import add from "../../../../../public/icons/add-orange.svg";
import exportIcon from "../../../../../public/icons/export-orange.svg";
import searchIcon from "../../../../../public/icons/search-icon.svg";
import filterIcon from "../../../../../public/icons/filter-icon.svg";
import Image from "next/image";

import { userTableData } from "./userData";
import Table, { TableItem } from "../../table/Table";

const header = [
  "User ID",
  "Name",
  "Email",
  "Phone Number",
  "User Type",
  "Status",
];

const userStatus = ["All", "Active", "Suspended"];

const renderRow = (item: TableItem) => (
  <>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.userType}</td>
    <td>
      <span className={`status ${item.status.toLowerCase()}`}>
        {item.status}
      </span>
    </td>
  </>
);

const UserManagementStats: React.FC = () => {
  const stats = [
    { title: "Total Users Registered", value: "1,000,000" },
    { title: "Active Users", value: "700,000" },
    { title: "Inactive Users", value: "200,000" },
    { title: "Total Clients Across All Companies", value: "900,000" },
  ];

  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = userTableData.filter((user) => {
    const matchesStatus =
      filterStatus === "All" || user.status === filterStatus;

    const matchesSearch = Object.values(user)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  function handleEdit() {
    console.log("Editing item");
  }

  function handleView() {
    console.log("viewing item");
  }

  function handleDelete() {
    console.log("deleting item");
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between my-5 ">
        <h2 className="text-[24px] font-medium text-[#7C7C7C]">
          User Management
        </h2>
        <div className="flex flex-row gap-4 items-center">
          <button className="flex flex-row items-center gap-2 bg-[#FFF8F5] text-[#FD4A09] px-4 py-2 rounded-[4px] border-[0.5px] border-[#FD4A09]">
            <Image src={exportIcon} alt="export data" />
            <span>Export</span>
          </button>
          <button className="flex flex-row items-center gap-2 bg-[#FFF8F5] text-[#FD4A09] px-4 py-2 rounded-[4px] border-[0.5px] border-[#FD4A09]">
            <Image src={add} alt="add user" />
            <span>Add new User</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
      <div className="border-[0.5px] border-[#BDBDBD] px-4 py-6 rounded-[4px] mb-30">
        <div className="flex flex-row justify-between items-center ">
          <ul className="flex flex-row justify-start items-center gap-2 text-[#BDBDBD] ">
            {userStatus.map((status) => (
              <li
                onClick={() => setFilterStatus(status)}
                className={`font-normal text-[13px] ${filterStatus === status ? "text-[#FD4A09] underline underline-offset-3" : ""}`}
                key={status}
              >
                {status}
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row justify-start border-[0.5px] px-2 gap-1.5 border-[#BDBDBD] rounded-[4px] focus-within:border-[1px] focus-within:border-[#FD4A09]">
              <Image src={searchIcon} alt="search" />
              <input
                type="text"
                placeholder="Search something here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none h-[35px]  "
              />
            </div>
            <div className="flex flex-row items-center border-[0.5px] px-2 gap-1.5 border-[#BDBDBD] rounded-[4px] focus-within:border-[1px] focus-within:border-[#FD4A09]">
              <Image src={filterIcon} alt="filter element" />
              <span className="font-medium text-[16px] text-[#BDBDBD]">
                Filter
              </span>
            </div>
          </div>
        </div>

        <Table
          error={false}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onView={handleView}
          isLoading={false}
          renderRow={renderRow}
          itemsPerPage={5}
          data={filteredData}
          headers={header}
          getId={(item) => item.id}
        />
      </div>
    </div>
  );
};

export default UserManagementStats;

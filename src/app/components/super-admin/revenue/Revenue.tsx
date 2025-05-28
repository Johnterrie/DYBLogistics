"use client";

import Image from "next/image";
import React, { useState } from "react";

import exportButton from "../../../../../public/icons/export-grey.svg";
import searchIcon from "../../../../../public/icons/search-icon.svg";
import filterIcon from "../../../../../public/icons/filter-icon.svg";
import { userTableData } from "../user-management/userData";

import StatCard from "./StatCard";
import Table, { TableItem } from "../../table/Table";

const stats = [
  { revenueTitle: "Total Revenue", revenueValue: "₦200,000,000" },
  { revenueTitle: "Revenue this Month", revenueValue: "₦200,000,000" },
  { revenueTitle: "Commission Earned", revenueValue: "₦200,000,000" },
  { revenueTitle: "Payout Processed", revenueValue: "₦200,000,000" },
  { revenueTitle: "Pending Payout", revenueValue: "₦200,000,000" },
];

const header = [
  "Company ID",
  "Name",
  "Total Earning",
  "Commission Paid",
  "Status",
];

const RevenueStatus = ["Completed", "Pending", "Failed"];

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

const Revenue = () => {
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
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-normal text-[#7C7C7C] text-2xl">
          Revenue & Transactions
        </h2>
        <button className="flex flex-row justify-between items-center text-[#7C7C7C] text-[16px] font-normal border-[0.5px] border-[#7C7C7C] rounded-[4px] p-2">
          <Image
            width={24}
            height={24}
            src={exportButton}
            alt="export transactions"
          />
          <span>Export</span>
        </button>
      </div>
      <div className="flex flex-row justify-between mt-5">
        {stats.map((item, idx) => (
          <StatCard
            key={idx}
            revenueType={item.revenueTitle}
            revenueValue={item.revenueValue}
          />
        ))}
      </div>
      <div className="border-[0.5px] border-[#BDBDBD] px-4 py-6 rounded-[4px] mb-30">
        <div className="flex flex-row justify-between items-center ">
          <ul className="flex flex-row justify-start items-center gap-2 text-[#BDBDBD] ">
            {RevenueStatus.map((status) => (
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
          itemsPerPage={10}
          data={filteredData}
          headers={header}
          getId={(item) => item.id}
        />
      </div>
    </div>
  );
};

export default Revenue;

"use client";

import React, { useState } from "react";
import Table, { TableItem } from "../table/Table";

import { header, shipments } from "../table/data";

import searchIcon from "../../../../public/icons/search-icon.svg";
import filterIcon from "../../../../public/icons/filter-icon.svg";
import Image from "next/image";
import DashboardStats from "./DashBoardStat";

const shipmentStatus = [
  "All",
  "Pending",
  "In-Transit",
  "Delivered",
  "Canceled",
];

const renderRow = (item: TableItem) => (
  <>
    <td>{item.id}</td>
    <td>{item.sender}</td>
    <td>{item.receiver}</td>
    <td>{item.shipperDate}</td>
    <td>{item.destination}</td>
    <td>{item.company}</td>
    <td>
      <span className={`status ${item.status.toLowerCase()}`}>
        {item.status}
      </span>
    </td>
  </>
);

const Management: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = shipments.filter((shipment) => {
    const matchesStatus =
      filterStatus === "All" || shipment.status === filterStatus;

    const matchesSearch = Object.values(shipment)
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
    <>
      <DashboardStats />
      <div className="flex flex-row justify-between items-center">
        <ul className="flex flex-row justify-start items-center gap-2 text-[#BDBDBD]">
          {shipmentStatus.map((status) => (
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
    </>
  );
};

export default Management;

"use client";

import React, { useState } from "react";
import Table, { TableItem } from "../table/Table";
import { tableData } from "./companyData";
import Image from "next/image";

import searchIcon from "../../../../public/icons/search-icon.svg";

const renderRow = (item: TableItem) => (
  <>
    <td>{item.id}</td>
    <td>{item.companyName}</td>
    <td>{item.ownerName}</td>
    <td>{item.companyType}</td>
    <td>
      <span className={`status ${item.status.toLowerCase()}`}>
        {item.status}
      </span>
    </td>
    <td>{item.totalShipments}</td>
    <td>{item.dateCreated}</td>
  </>
);

const companyStatus = ["All", "Active", "Pending", "Suspended"];

const header = [
  "Company Name",
  "Owner Name",
  "Company Type",
  "Status",
  "Total Shipments",
  "Date Created",
  "Actions",
];

const CompanyManagement = () => {
  function handleEdit() {
    console.log("Editing item");
  }

  function handleView() {
    console.log("viewing item");
  }

  function handleDelete() {
    console.log("deleting item");
  }

  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = tableData.filter((company) => {
    const matchesStatus =
      filterStatus === "All" || company.status === filterStatus;

    const matchesSearch = Object.values(company)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-medium text-2xl text-[#7C7C7C]">
          Company Management
        </h2>
        <button className=" w-[151px] h-[40px] bg-[#FD4A09] text-[#FFFFFF] text-[16px] font-medium p-2 rounded-[4px] ">
          <span>+</span> <span>Add Company</span>
        </button>
      </div>
      <div className="border-[0.5px] border-[#BDBDBD] px-4 py-6 rounded-[4px] mb-30 mt-6">
        <div className="flex flex-row justify-between items-center ">
          <ul className="flex flex-row justify-start items-center gap-2 text-[#BDBDBD]">
            {companyStatus.map((status) => (
              <li
                onClick={() => setFilterStatus(status)}
                className={`font-normal text-[13px] ${filterStatus === status ? "text-[#FD4A09] underline underline-offset-3" : ""}`}
                key={status}
              >
                {status}
              </li>
            ))}
          </ul>
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
        </div>
        <Table
          onDelete={handleDelete}
          onEdit={handleEdit}
          onView={handleView}
          error={false}
          isLoading={false}
          itemsPerPage={10}
          getId={(item) => item.id}
          renderRow={renderRow}
          data={filteredData}
          headers={header}
        />
      </div>
    </div>
  );
};

export default CompanyManagement;

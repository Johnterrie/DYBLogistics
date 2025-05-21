"use client";

import React, { useEffect, useRef, useState } from "react";

import cancelIcon from "../../../../public/icons/cancel-icon.svg";
import editPen from "../../../../public/icons/edit-pen.svg";
import moreIcon from "../../../../public/icons/moreIcon.svg";
import viewIcon from "../../../../public/icons/view-icon.svg";
import Image from "next/image";

export interface TableItem {
  [key: string]: any;
}

interface TableProps {
  headers: string[];
  data: TableItem[];
  itemsPerPage: number;
  isLoading: boolean;
  error: boolean;
  renderRow: (item: TableItem) => React.ReactNode;
  getId: (item: TableItem) => string;
  refetch?: () => void;
  onView: (item: TableItem) => void;
  onEdit: (item: TableItem) => void;
  onDelete: (item: TableItem) => void;
}

interface ActionCellProps {
  item: TableItem;
  onView: (item: TableItem) => void;
  onEdit: (item: TableItem) => void;
  onDelete: (item: TableItem) => void;
}

const ActionCell: React.FC<ActionCellProps> = ({
  item,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <ul className="absolute top-0 right-0 px-2.5 py-4 w-[180px] h-[118px] bg-[#FFFFFF] border-[1px] flex flex-col gap-[14px] ">
      <li
        className=" flex flex-row items-center justify-start gap-3 text-normal text-[16px] leading-[100%] text-[#7C7C7C]"
        onClick={() => onView(item)}
      >
        <Image width={15} height={15} src={viewIcon} alt="view eye button" />
        <span>View details</span>
      </li>
      <li
        className=" flex flex-row items-center justify-start gap-3 text-normal text-[16px] leading-[100%] text-[#7C7C7C]"
        onClick={() => onEdit(item)}
      >
        <Image width={15} height={15} src={editPen} alt="edit pan" />
        <span>Update status</span>
      </li>
      <li
        className=" flex flex-row items-center justify-start gap-3 text-normal text-[16px] leading-[100%] text-[#7C7C7C]"
        onClick={() => onDelete(item)}
      >
        <Image width={15} height={15} src={cancelIcon} alt="cancel request" />
        <span>Cancel shipment</span>
      </li>
    </ul>
  );
};

const Table: React.FC<TableProps> = ({
  headers,
  data,
  itemsPerPage = 5,
  isLoading,
  error,
  renderRow,
  getId,
  // refetch,
  onView,
  onEdit,
  onDelete,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeActionCell, setActiveActionCell] = useState<string | null>(null);
  const actionCellRef = useRef<HTMLTableElement | null>(null);

  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        actionCellRef.current &&
        !actionCellRef.current.contains(event.target as Node)
      ) {
        setActiveActionCell(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && (
        <div>
          <p>There was an error loading the data.</p>
          {/* <button onClick={refetch} type="button">
            Retry
          </button> */}
        </div>
      )}

      <table className="px-[30px] w-full text-left " ref={actionCellRef}>
        <thead className="py-[15px]">
          <tr className="text-bold text-[#FD4A09] text-[13px] leading-[150%]">
            {headers.map((header, index) => (
              <th className="h-[50px]" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => {
            const itemId = getId(item);
            return (
              <tr
                key={itemId}
                className=" py-12 text-normal text-[#7C7C7C] text-[13px] leading-[150%]"
              >
                {renderRow(item)}
                <td className="h-[50px] relative">
                  <div
                    onClick={() => {
                      setActiveActionCell(
                        activeActionCell === itemId ? null : itemId
                      );
                    }}
                    aria-label="More actions"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="">
                      <Image src={moreIcon} alt="more details" />
                    </span>
                    {activeActionCell === itemId && (
                      <ActionCell
                        item={item}
                        onView={onView}
                        onEdit={onEdit}
                        onDelete={onDelete}
                      />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>

        {data?.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={headers.length + 1}>No table data to display yet</td>
            </tr>
          </tbody>
        )}
      </table>

      <div>
        <p>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, data?.length)} of {data?.length} entries
        </p>
        <div>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;

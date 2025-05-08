import { FaShuttleVan } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import Link from "next/link";

interface statProps {
  status?: string;
  value: number | string;
}

function StatsCard({ status = "total", value }: statProps) {
  const getStatusText = (status: string) => {
    return status === "total"
      ? "Total Shipments"
      : status === "transit"
      ? "Shipments in transit"
      : status === "pending"
      ? "Pending Shipment"
      : status === "cancelled"
      ? "Cancelled Shipment"
      : "Unknown";
  };
  function formatNumberWithCommas(number: number | string, decimals = 0) {
    const num = Number(number);
    if (isNaN(num)) {
      return "0";
    }
    const fixedNum = num.toFixed(decimals);
    const parts = fixedNum.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.length > 1 ? parts.join(".") : parts[0];
  }
  return (
    <>
      <div className="p-5 w-full lg:max-w-[250px] border border-gray-shade/40 flex flex-col justify-center gap-5 shadow-xs">
        <div className="w-full flex items-center justify-between">
          <h2>{getStatusText(status)}</h2>

          <span>
            {status === "total" ? (
              <FaShuttleVan className="text-3xl text-blue-500" />
            ) : status === "transit" ? (
              <GiProgression className="text-3xl text-green-500" />
            ) : status === "pending" ? (
              <div className="bg-yellow-400 flex flex-col items-center p-1 rounded-full">
                <CiMenuKebab className="text-white text-3xl rotate-90" />
              </div>
            ) : status === "cancelled" ? (
              <FcCancel className="text-3xl" />
            ) : (
              "Unknown"
            )}
          </span>
        </div>

        <p>{formatNumberWithCommas(value)}</p>

        <div className="w-full flex">
          <Link
            href={`/customer/shipment-summary?status=${status}`}
            className={`${
              status === "total"
                ? "bg-gray-shade/20"
                : status === "transit"
                ? "bg-green-100 text-green-500"
                : status === "pending"
                ? "bg-yellow-100 text-yellow-500"
                : status === "cancelled"
                ? "bg-red-100 text-red-500"
                : "bg-transparent"
            } ml-auto self-end text-xs px-8 py-2 rounded-sm`}
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
}

export default StatsCard;

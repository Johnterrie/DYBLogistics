import Image from "next/image";
import React, { FC } from "react";
import wallet from "../../../../../public/icons/adjust-fee.svg";

type StatCardProps = {
  revenueType: string;
  revenueValue: string;
};

const StatCard: FC<StatCardProps> = ({ revenueType, revenueValue }) => {
  return (
    <div className="flex flex-col justify-between items-center border-[0.5px] border-[#BDBDBD] w-[180px] h-[123px] rounded-[4px] px-[19px] py-[15px] ">
      <Image width={24} height={24} src={wallet} alt="wallet" />
      <p className="text-[13px] text-[#333333] font-normal  ">{revenueType}</p>
      <p className="text-[20px] text-[#333333] font-semibold ">
        {revenueValue}
      </p>
    </div>
  );
};

export default StatCard;

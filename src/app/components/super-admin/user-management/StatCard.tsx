import Image from "next/image";
import user from "../../../../../public/icons/user.svg";

type StatCardProps = {
  title: string;
  value: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="px-8 py-4 flex flex-col justify-center items-center  border-[#BDBDBD] border-[0.5px] p-4 rounded-[4px] w-[220px] h-[123px] text-center">
      <Image width={24} height={24} src={user} alt="user avatar" />
      <p className="text-[13px] font-normal text-[#333333]">{title}</p>
      <p className="text-[25px] font-semibold text-[#333333]">{value}</p>
    </div>
  );
};

export default StatCard;

import { ArrowUpRight } from "lucide-react";
import { FC } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subLabel?: string;
  icon?: FC<{ className?: string }>;
  growth: number;
}

const StatCard: FC<StatCardProps> = ({
  title,
  value,
  subLabel,
  icon: Icon,
  growth,
}) => {
  return (
    <div className="flex flex-col justify-between p-4 rounded-[4px] border border-[#BDBDBD] w-full bg-white shadow-[0px_9px_40px_0px_#0000001B]">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-sm text-[#333333]">{title}</h3>
          <p className="text-[18px] font-semibold text-[#333333]">{value}</p>
          {subLabel && <p className="text-xs text-gray-400">{subLabel}</p>}
        </div>
        {Icon && <Icon className="w-6 h-6 text-gray-400" />}
      </div>
      <div className="flex items-center text-green-600 text-xs mt-2">
        <ArrowUpRight className="w-4 h-4 mr-1" />+{growth}%
      </div>
    </div>
  );
};

export default StatCard;

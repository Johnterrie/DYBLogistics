type StatCardProps = {
  title: string;
  value: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="border border-blue-400 p-4 rounded-md w-full sm:w-auto text-center">
      <div className="text-sm font-medium text-gray-600">{title}</div>
      <div className="text-2xl font-bold text-black">{value}</div>
    </div>
  );
};

export default StatCard;

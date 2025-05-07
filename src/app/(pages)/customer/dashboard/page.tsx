import WalletCard from "@/app/components/customer/dashboard/walletCard";
import StatsCard from "@/app/components/customer/dashboard/statsCard";
function Dashboard() {
  return (
    <>
      <section className="w-full p-5 flex flex-col items-center justify-center md:justify-start md:items-start gap-5">
        <h2 className="w-full text-center md:text-start text-xl md:text-3xl font-bold mb-4">
          Hello Charles
        </h2>

        <WalletCard balance={0} />

        <div className="w-full flex flex-col md:flex-row items-center gap-5 flex-wrap">
          <StatsCard status="total" value={1000} />
          <StatsCard status="transit" value={100} />
          <StatsCard status="pending" value={30} />
          <StatsCard status="cancelled" value={10} />
        </div>
      </section>
    </>
  );
}

export default Dashboard;

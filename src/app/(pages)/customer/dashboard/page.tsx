import WalletCard from "@/app/components/customer/dashboard/walletCard";
import StatsCard from "@/app/components/customer/dashboard/statsCard";
import Image from "next/image";
import Link from "next/link";

function Dashboard() {
  const shipments = [];
  return (
    <section className="w-full h-full md:overflow-y-auto p-5 flex flex-col items-center justify-center md:justify-start md:items-start gap-5">
      <h2 className="w-full text-center md:text-start text-xl md:text-3xl font-[700] mb-4">
        Hello Charles
      </h2>

      <WalletCard balance={0} />

      <div className="w-full flex flex-col md:flex-row items-center gap-5 flex-wrap">
        <StatsCard status="total" value={1000} />
        <StatsCard status="transit" value={100} />
        <StatsCard status="pending" value={30} />
        <StatsCard status="cancelled" value={10} />
      </div>

      <div className="w-full">
        <Image
          alt="banner"
          src={"/images/banner.jpg"}
          width={900}
          height={900}
          className="object-cover h-[100px] md:h-auto rounded-lg  w-full"
        />
      </div>

      <div className="w-full flex flex-col gap-8 md:gap-12 py-5">
        <h2 className="text-xl font-[700] md:text-2xl text-center md:text-start">
          My Shipments
        </h2>
        {shipments.length <= 0 && (
          <div className="bg-[#FAF2E1] rounded-sm w-full md:w-2/3 mx-auto flex flex-col items-center justify-center gap-5 p-8">
            <h3 className="font-[500] md:text-lg">
              Tap to book first shipment
            </h3>
            <Link
              className="btn-large w-fit flex items-center gap-3"
              href={"/customer/book-shipment"}
            >
              Book Shipment
              <Image
                alt=""
                src={"/icons/right-arrow-small.svg"}
                width={20}
                height={20}
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;

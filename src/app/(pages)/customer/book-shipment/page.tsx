import Link from "next/link";
import Image from "next/image";
function BookShipment() {
  const shipments = [];
  return (
    <>
      <section className="w-full h-full md:overflow-y-auto p-5">
        {shipments.length <= 0 && (
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-xl font-[700] md:text-2xl">My Shipments</h2>
              <Link
                className="text-main hover:underline duration-200 ease-in-out md:text-lg"
                href={"/"}
              >
                Need help?
              </Link>
            </div>

            <div className="bg-[#FAF2E1] rounded-lg w-full flex flex-col items-center justify-center gap-8 p-8">
              <h3 className="font-[500] md:text-lg">
                You currently have no shipment booked
              </h3>
              <Image
                alt="no-shipment"
                src={"/images/empty.svg"}
                width={300}
                height={300}
                className="opacity-80 hidden md:block"
              />
              <Image
                alt="no-shipment"
                src={"/images/empty.svg"}
                width={200}
                height={200}
                className="opacity-80 md:hidden"
              />
              <button className="btn-large w-fit flex items-center gap-3 cursor-pointer hover:scale-105 duration-200 ease-in-out">
                Book Shipment
                <Image
                  alt=""
                  src={"/icons/right-arrow-small.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default BookShipment;

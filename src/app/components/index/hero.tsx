import Image from "next/image";
function Hero() {
  return (
    <>
      <section className="w-full flex justify-between">
        {/* hero text */}
        <div className="w-1/2 md:w-full flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <Image
              alt="cta-text"
              src={"/images/cta-text.svg"}
              width={200}
              height={200}
              className="object-cover"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold font-montreal">
                Reliable Logistics, On-Time Every Time
              </h2>
              <p className="text-gray-dark opacity-[65%]">
                Seamless shipment delivery solutions for your business with on
                time precision to keep you on track
              </p>
            </div>
            <Image
              alt="investors"
              src={"/images/investors.svg"}
              width={300}
              height={300}
              className="object-cover"
            />

            <label
              htmlFor="bookings"
              className="rounded-4xl border border-main flex items-center py-1 px-2 gap-3 justify-between"
            >
              <input
                type="text"
                placeholder="“Book, Track, Get Quotes”"
                className="w-full ml-2 text-sm text-gray-dark opacity-[87%] placeholder:text-gray-dark focus:outline-none"
              />
              <button className="btn-rounded">
                <Image
                  alt="arrow-up"
                  src={"/icons/arrow-up.svg"}
                  width={40}
                  height={40}
                />
              </button>
            </label>
          </div>
        </div>
        {/* hero-image */}
        <div className="w-1/2 md:w-full">
          <Image
            src="/images/hero.png"
            alt="hero"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;

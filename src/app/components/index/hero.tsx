import Image from "next/image";
function Hero() {
  return (
    <>
      <section className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* hero text */}
        <div className="md:w-1/2 w-full flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <Image
              alt="cta-text"
              src={"/images/cta-text.svg"}
              width={200}
              height={200}
              className="object-cover mx-auto md:mx-0"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl text-center md:text-start md:text-4xl font-bold font-montreal">
                Reliable Logistics, On-Time Every Time
              </h2>
              <p className="text-sm md:text-base text-center md:text-start text-gray-dark opacity-[65%]">
                Seamless shipment delivery solutions for your business with on
                time precision to keep you on track
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-1">
              <Image
                alt="investors"
                src={"/images/profiles.svg"}
                width={150}
                height={150}
                className="object-cover"
              />
              <span className="text-gray-dark opacity-[65%]">
                Join 5000+ customers to ship your package today
              </span>
            </div>
            <label
              htmlFor="bookings"
              className="md:max-w-3/4 rounded-4xl border border-main flex items-center py-1 px-2 gap-3 justify-between"
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
        <div className="relative md:w-1/2 w-full">
          <Image
            alt="herobox2"
            src={"/images/herobox.svg"}
            className="absolute left-[-25%] hidden lg:block"
            width={225}
            height={225}
          />
          <Image
            alt="herobox2"
            src={"/images/herobox.svg"}
            className="absolute left-[-10%] lg:hidden"
            width={200}
            height={200}
          />
          <Image
            src="/images/herobg.svg"
            alt="hero"
            width={700}
            height={700}
            className="hidden md:block object-cover"
          />
          <Image
            src="/images/herobg.svg"
            alt="hero"
            width={350}
            height={350}
            className="mx-auto md:hidden object-cover"
          />
          <Image
            alt="herobox"
            src={"/images/herobox2.svg"}
            className="absolute right-[2.5%] bottom-[8%] hidden lg:block"
            width={225}
            height={225}
          />
          <Image
            alt="herobox"
            src={"/images/herobox2.svg"}
            className="absolute right-[2.5%] bottom-[5%] lg:hidden"
            width={200}
            height={200}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;

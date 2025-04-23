import Image from "next/image";
function WhyChoose() {
  return (
    <>
      <section className="w-full mt-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between">
            {/* images */}
            <div className="order-2 md:order-1 relative w-full md:w-1/2">
              <Image
                alt=""
                src={"/images/Figmap.svg"}
                className=""
                width={500}
                height={500}
              />
              <Image
                alt=""
                src={"/images/globe.svg"}
                width={350}
                height={350}
                className="hidden lg:block absolute right-[14%] bottom-[-17%]"
              />
              <Image
                alt=""
                src={"/images/globe.svg"}
                width={250}
                height={250}
                className="hidden xs:block lg:hidden absolute right-[-5%] bottom-[-30%] md:right-[5%] md:bottom-[-18%]"
              />
              <Image
                alt=""
                src={"/images/globe.svg"}
                width={200}
                height={200}
                className="xs:hidden absolute right-[0%] bottom-[-28%]"
              />
            </div>

            <div className="order-1 md:order-2 relative w-full md:w-1/2 flex flex-col items-center md:items-start gap-5">
              <Image
                alt=""
                src={"/images/textbox.svg"}
                width={250}
                height={250}
                className="hidden md:block"
              />
              <Image
                alt=""
                src={"/images/textbox.svg"}
                width={200}
                height={200}
                className="md:hidden"
              />
              <h2 className="text-xl md:text-2xl text-center md:text-start lg:text-4xl font-bold font-montreal lg:max-w-[80%]">
                Speed, <span className="text-main">Accuracy</span>, Reliability-{" "}
                <span className="italic font-[400] text-lg md:text-xl lg:text-3xl">
                  Logistics that counts
                </span>
              </h2>

              <p className="text-sm text-gray-dark opacity-[60%]">
                At DYB Africa, we prioritize speed, accuracy and reliability to
                ensure your shipments arrive on-time, every time. With real time
                tracking and seamless coordination , we deliver logistics that
                truly count
              </p>

              <button className="btn-large hidden md:flex items-center flex-row gap-2 w-fit">
                Ship Now{" "}
                <Image
                  alt="arrow"
                  src={"/icons/button-icon.svg"}
                  width={20}
                  height={20}
                />
              </button>

              <button className="btn-small md:hidden flex items-center flex-row gap-2 w-fit">
                Ship Now{" "}
                <Image
                  alt="arrow"
                  src={"/icons/button-icon.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* second block */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between mt-12">
            <div className="order-2 relative w-full md:w-1/2">
              <Image
                alt=""
                src={"/images/whychoose.svg"}
                width={500}
                height={500}
                className=""
              />
            </div>

            <div className="order-1 w-full md:w-1/2 relative flex flex-col items-center md:items-start gap-5">
              <h2 className="text-xl md:text-2xl text-center md:text-start lg:text-4xl font-bold font-montreal lg:max-w-[80%]">
                Logistics for you and your business{" "}
                <span className="text-main">business</span>
              </h2>

              <p className="text-sm text-gray-dark opacity-[60%]">
                At DYB Africa, we prioritize speed, accuracy and reliability to
                ensure your shipments arrive on-time, every time. With real time
                tracking and seamless coordination , we deliver logistics that
                truly count
              </p>

              <button className="btn-large hidden md:flex items-center flex-row gap-2 w-fit">
                Ship Now{" "}
                <Image
                  alt="arrow"
                  src={"/icons/button-icon.svg"}
                  width={20}
                  height={20}
                />
              </button>

              <button className="btn-small md:hidden flex items-center flex-row gap-2 w-fit">
                Ship Now{" "}
                <Image
                  alt="arrow"
                  src={"/icons/button-icon.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;

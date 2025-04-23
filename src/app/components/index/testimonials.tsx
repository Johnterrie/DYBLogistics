import Image from "next/image";
import TestimonialCard from "./testimonialCard";

function Testimonials() {
  return (
    <>
      <section className="w-full flex flex-col mt-12">
        <div className="w-full grid grid-cols-6 lg:flex gap-1 md:gap-2">
          {/* first column */}
          <div className="translate-y-2 flex flex-col items-center justify-center gap-2 md:gap-5">
            <Image
              alt="profile2"
              src={"/images/profiles/profile2.svg"}
              width={150}
              height={150}
              className=""
            />
            <div className="relative">
              <Image
                alt="profile1"
                src={"/images/profiles/profile1.svg"}
                width={150}
                height={150}
              />
              <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-white/70 to-transparent blur-xl opacity-80" />
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className="translate-y-[-1rem] md:translate-y-[-2rem] flex flex-col items-center justify-center gap-2 md:gap-5">
            <Image
              alt="profile4"
              src={"/images/profiles/profile4.svg"}
              width={150}
              height={150}
              className=""
            />
            <Image
              alt="profile3"
              src={"/images/profiles/profile3.svg"}
              width={150}
              height={150}
            />
          </div>

          {/* 3rd-column */}
          <div className="hidden lg:flex flex-col items-center gap-5">
            <div className="flex translate-y-4 items-center justify-center gap-2 md:gap-3">
              <Image
                alt="profile5"
                src={"/images/profiles/profile5.svg"}
                width={150}
                height={150}
                className="translate-y-4"
              />
              <Image
                alt="profile6"
                src={"/images/profiles/profile6.svg"}
                width={150}
                height={150}
              />
              <Image
                alt="profile7"
                src={"/images/profiles/profile7.svg"}
                width={150}
                height={150}
                className="translate-y-4 lg:hidden xl:block"
              />
            </div>

            {/* text */}
            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <h3 className="text-gray-dark font-[600] opacity-[85%]">
                Testimonials
              </h3>
              <h2 className="font-bold font-montreal text-3xl text-center">
                What Our Customers are saying
              </h2>
              <p className="text-gray-dark opacity-[67%]">
                Trusted worldwide for reliable service
              </p>
            </div>
          </div>
          <Image
            alt="profile5"
            src={"/images/profiles/profile5.svg"}
            width={150}
            height={150}
            className="translate-y-4 lg:hidden"
          />
          <Image
            alt="profile6"
            src={"/images/profiles/profile8.svg"}
            width={150}
            height={150}
            className="lg:hidden"
          />
          <Image
            alt="profile7"
            src={"/images/profiles/profile9.svg"}
            width={150}
            height={150}
            className="translate-y-4 lg:hidden"
          />
          {/* 4th column */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-2 md:gap-5">
            <Image
              alt="profile8"
              src={"/images/profiles/profile8.svg"}
              width={150}
              height={150}
              className=""
            />
            <div className="relative">
              <Image
                alt="profile9"
                src={"/images/profiles/profile9.svg"}
                width={150}
                height={150}
              />
              <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-white/70 to-transparent blur-xl opacity-80" />
              </div>
            </div>
          </div>
          {/* 5th column */}
          <div className="translate-y-[-1rem] md:translate-y-[-2rem]">
            <Image
              alt="profile10"
              src={"/images/profiles/profile10.svg"}
              width={150}
              height={150}
              className=""
            />
          </div>
        </div>
        <div className="ml-auto md:mx-auto lg:hidden mt-4 flex flex-col items-center justify-center gap-3">
          <h3 className="text-sm md:text-base text-gray-dark font-[600] opacity-[85%]">
            Testimonials
          </h3>
          <h2 className="font-bold font-montreal text-lg md:text-3xl text-center">
            What Our Customers are saying
          </h2>
          <p className="text-sm md:text-base text-gray-dark opacity-[67%]">
            Trusted worldwide for reliable service
          </p>
        </div>

        {/* testimonials */}
        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-between">
            <TestimonialCard
              imageUrl={"/images/profiles/profile7.svg"}
              userName="Ade. A."
              location="Lagos"
              testimonial="DYB Logistics has been a game changer for us. Their service is always on time and hassle-free. We couldn’t ask for a more reliable partner!"
              customStyle="translate-x-[1rem] md:translate-x-0"
            />
            <TestimonialCard
              imageUrl={"/images/profiles/profile3.svg"}
              userName="Favour. O."
              location="Jos"
              testimonial="Sending parcels used to be a hassle, but with DYB Logistics, it’s now effortless and smooth, fast and reliable."
              customStyle="translate-x-[-1rem] md:translate-x-0"
            />
          </div>
          <TestimonialCard
            imageUrl={"/images/profiles/profile9.svg"}
            userName="Daniel. I."
            location="Abuja"
            testimonial="Your commitment to excellence and attention to detail is greatly appreciated. Thank you for your consistent, top-tier service!. Thank you DYB."
            customStyle="translate-x-[1rem] md:translate-x-0"
          />
        </div>
      </section>
    </>
  );
}

export default Testimonials;

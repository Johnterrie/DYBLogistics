"use client";
import Image from "next/image";
import { useState } from "react";
function Faq() {
  const faq = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a wide range of logistics solutions, including domestic and international shipping",
    },
    {
      question: "How do I track my shipment?",
      answer:
        "We provide a wide range of logistics solutions, including domestic and international shipping",
    },
    {
      question: "How are shipping rates determined?",
      answer:
        "We provide a wide range of logistics solutions, including domestic and international shipping",
    },
    {
      question: "What types of payment do you accept?",
      answer:
        "We provide a wide range of logistics solutions, including domestic and international shipping",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "We provide a wide range of logistics solutions, including domestic and international shipping",
    },
  ];
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

  const toggleCards = (index: number) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };
  return (
    <>
      <section
        id="faq"
        className="w-full flex flex-col md:flex-row gap-5 mt-12"
      >
        {/* image */}
        <div className="hidden md:block w-1/2">
          <Image
            alt="faq"
            src={"/images/faq.svg"}
            width={600}
            height={300}
            className="w-full h-[500px]"
          />
        </div>

        {/* faq */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {/* header */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h2 className="font-bold font-montreal text-lg md:text-3xl">
              Frequently asked questions
            </h2>
            <h3 className="text-sm md:text-base text-gray-dark opacity-[67%]">
              Have questions? We’re here to help
            </h3>
          </div>

          {/* questions */}
          <div className="w-full flex flex-col md:gap-4">
            {faq.map((obj, index) => {
              return (
                <div
                  onClick={() => toggleCards(index)}
                  key={index}
                  className="cursor-pointer bg-white text-gray-dark flex justify-between"
                >
                  <div className="w-full">
                    <h3
                      className={`w-full mb-2 md:text-xl bg-[#F5F5F5] rounded-xl flex items-center justify-between px-6 py-3`}
                    >
                      {obj.question}
                      <div className="">
                        {isOpenIndex === index ? (
                          <Image
                            alt="right-arrow"
                            src={"/icons/down-arrow.svg"}
                            width={10}
                            height={10}
                          />
                        ) : (
                          <Image
                            alt="right-arrow"
                            src={"/icons/right-arrow.svg"}
                            width={10}
                            height={10}
                          />
                        )}
                      </div>
                    </h3>
                    <div
                      className={`transition-all text-sm tracking-wide px-6 py-3
                                            text-gray-dark opacity-[67%] duration-200 ease-in-out
                                                ${
                                                  isOpenIndex === index
                                                    ? "block max-h-40"
                                                    : "hidden max-h-0"
                                                }`}
                    >
                      <p
                        className={`${
                          isOpenIndex === index ? "opacity-100" : "opacity-0"
                        } 
                                                    duration-200 ease-in-out`}
                      >
                        {obj.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

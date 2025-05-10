"use client";

import Image from "next/image";
import React, { useState } from "react";

import downArrow from "../../../../public/icons/down-arrow.svg";
import rightArrow from "../../../../public/icons/right-arrow.svg";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of logistics solutions, including domestic and international shipping",
  },
  {
    question: "How do I track my shipment?",
    answer: "Use your tracking ID...",
  },
  {
    question: "How are shipping rates determined?",
    answer: "Based on weight and distance.",
  },
  {
    question: "What types of payment do you accept?",
    answer: "We accept cards, transfers...",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we cover 50+ countries.",
  },
];
export const Faq = () => {
  const [activeIdex, setActiveIndex] = useState<number | null>(null);
  const handleFaqAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <ul>
      {faqs.map((faq, index) => (
        <li key={faq.question}>
          <div className="w-[100%] flex ">
            <div className="w-[100%] h-[51px] md:h-[60px] flex justify-between flex-row items-center bg-[#F5F5F5] rounded-[10px] px-6">
              <p className="md:font-medium font-bold text-[12px] md:text-2xl">
                {faq.question}
              </p>
              <button onClick={() => handleFaqAnswer(index)}>
                {activeIdex === index ? (
                  <Image src={downArrow} alt="arrow pointing downward" />
                ) : (
                  <Image src={rightArrow} alt="arrow pointing rightward" />
                )}
              </button>
            </div>
          </div>

          <div className="px-[17px] ">
            {activeIdex === index && (
              <p className="py-5 font-medium text-[12px] md:text-[16px] text-[#22222299]">
                {faq.answer}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

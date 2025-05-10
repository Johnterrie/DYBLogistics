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
          <div>
            <div>
              <p>{faq.question}</p>
              <button onClick={() => handleFaqAnswer(index)}>
                {activeIdex === index ? (
                  <Image src={downArrow} alt="arrow pointing downward" />
                ) : (
                  <Image src={rightArrow} alt="arrow pointing rightward" />
                )}
              </button>
            </div>
            {activeIdex === index && <p>{faq.answer}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
};

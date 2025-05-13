'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide a wide range of logistic solution, including domestic and international shipping.'
  },
  {
    question: 'How do I track my shippment?',
    answer: 'You can track your shippment via our tracking page.'
  },
  {
    question: 'How are shipping rate determined?',
    answer: 'We provide a wide range of logistic solution, including domestic and international shipping.'
  },
  {
    question: 'What types of payment do you accept?',
    answer: 'We provide a wide range of logistic solution, including domestic and international shipping.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'We provide a wide range of logistic solution, including domestic and international shipping.' 
  }
];

const Faq = () => {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleAnswer = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : false))
    );
  };

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Image */}
      <div>
        <img
          src="/images/image 18.png"
          alt="FAQ Image"
          className="w-[70%] h-[650px] object-cover rounded-lg shadow-md ml-16 pb-12"
        />
      </div>

      {/* Right Content: FAQ */}
      <div className="bg-white text-black p-8 rounded-lg space-y-4 mr-8">
        <h3 className="text-3xl font-extrabold mb-6">Frequently Asked Questions</h3>
        <p className="text-lg text-big-gray-100 mb-6">Have questions? We're here to help.</p>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 text-left text-black rounded-lg focus:outline-none"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-[#FD4A09] transform transition-transform ${
                  openStates[index] ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openStates[index] && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

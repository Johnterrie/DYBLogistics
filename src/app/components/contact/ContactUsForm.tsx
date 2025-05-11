"use client";

import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form
      className="md:p-8 md:bg-[#F5F5F5F5] md:rounded-4xl mb-[107px]"
      onSubmit={handleSubmit}
    >
      <h4 className="hidden md:block md:font-semibold md:text-[16px] mb-8">
        Have a question for us? Let us know & we will respond within 24 hours
      </h4>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
        />

        <select
          className="h-10 md:h-14 md:p-4 bg-[#EEEEEE] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        >
          <option value="">Reason For Inquiry</option>
          <option value="Support">Support</option>
          <option value="Sales">Sales</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="h-2 md:h-20 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
        />
      </div>

      {/* Replace with Captcha */}
      <div className="mt-7">
        <input type="checkbox" required /> I'm not a robot
      </div>

      <button
        className="w-[100%] h-[67px] rounded-4xl bg-[#FD4A09] font-medium text-[20px] text-[#FFFFFF] mt-14 "
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;

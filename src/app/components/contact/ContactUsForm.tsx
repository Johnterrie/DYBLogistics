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
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <div className="w-[100%]">
            <label
              className="block md:hidden font-normal text-[10px] leading-[100%] mb-[7px]"
              htmlFor=""
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className=" px-2.5 placeholder:invisible md:placeholder:visible w-[100%] outline-none focus:border-[2px] focus:border-[#FD4A09] h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
            />
          </div>
          <div className="w-[100%]">
            <label
              className="block md:hidden font-normal text-[10px] leading-[100%] mb-[7px]"
              htmlFor=""
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="px-2.5 placeholder:invisible md:placeholder:visible w-[100%] outline-none focus:border-[2px] focus:border-[#FD4A09] h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
            />
          </div>
        </div>

        <div className="w-[100%]">
          <label
            className="block md:hidden font-normal text-[10px] leading-[100%] mb-[7px]"
            htmlFor=""
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-2.5 placeholder:invisible md:placeholder:visible w-[100%] outline-none focus:border-[2px] focus:border-[#FD4A09] h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
          />
        </div>
        <div className="w-[100%]">
          <label
            className="block md:hidden font-normal text-[10px] leading-[100%] mb-[7px]"
            htmlFor=""
          >
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="px-2.5 placeholder:invisible md:placeholder:visible w-[100%] outline-none focus:border-[2px] focus:border-[#FD4A09] h-10 md:h-14 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
          />
        </div>

        <select
          className="outline-none focus:border-[2px] focus:border-[#FD4A09] h-10 md:h-14 md:p-4 bg-[#EEEEEE] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
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
          className="px-2.5 placeholder:invisible md:placeholder:visible outline-none focus:border-[2px] focus:border-[#FD4A09] h-[64px] md:h-20 md:p-4 bg-[#FFFFFF] border-[1px] rounded-[10px] border-[#CCCCCCCC]"
        />
      </div>

      {/* Replace with Captcha */}
      <div className="mt-7">
        <input type="checkbox" required /> I'm not a robot
      </div>

      <div className=" w-[100%] flex justify-center items-center ">
        <button
          className="w-[80%] md:w-[100%] h-[67px] rounded-4xl bg-[#FD4A09] font-medium text-[20px] text-[#FFFFFF] mt-14 "
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;

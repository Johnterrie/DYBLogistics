"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be 8+ characters, include letters, numbers & symbols";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone must contain only numbers";
    }

    if (!formData.userType) newErrors.userType = "Select user type";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Signup failed", result);
      } else {
        console.log("Signup successful", result);
        router.push("/");
      }
    } catch (error) {
      console.error("Error posting signup:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[648px] mx-auto bg-[#F9F9F9F5] py-[63px] px-[50px] rounded ">
      <form onSubmit={handleSubmit} className="space-y-6  ">
        <div className="flex flex-col gap-[11px]">
          <label className="font-semibold text-[18px] leading-[100%] text-[#222222]">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="outline-none focus:border-[#FD4A09] focus:border-[0.5px] w-full h-[48px] border-[#ADADAD99] border-[0.5px] bg-[#FFFFFF] py-[14px] px-[36px] rounded-[20px]"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-[11px]">
          <label className="font-semibold text-[18px] leading-[100%] text-[#222222]">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="outline-none focus:border-[#FD4A09] focus:border-[0.5px] w-full h-[48px] border-[#ADADAD99] border-[0.5px] bg-[#FFFFFF] py-[14px] px-[36px] rounded-[20px]"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-[11px]">
          <label className="block font-semibold text-[18px] leading-[100%] text-[#222222]">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="outline-none focus:border-[#FD4A09] focus:border-[0.5px] w-full h-[48px] border-[#ADADAD99] border-[0.5px] bg-[#FFFFFF] py-[14px] px-[36px] rounded-[20px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-3 text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-xs text-gray-600">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="flex flex-col gap-[11px]">
          <label className="font-semibold text-[18px] leading-[100%] text-[#222222]">
            Phone Number
          </label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="outline-none focus:border-[#FD4A09] focus:border-[0.5px] w-full h-[48px] border-[#ADADAD99] border-[0.5px] bg-[#FFFFFF] py-[14px] px-[36px] rounded-[20px]"
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="flex flex-col gap-[11px]">
          <label className="font-semibold text-[18px] leading-[100%] text-[#222222]">
            User Type
          </label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="mb-[148px] outline-none focus:border-[#FD4A09] focus:border-[0.5px] w-full h-[48px] border-[#ADADAD99] border-[0.5px] bg-[#FFFFFF] py-[14px] px-[36px] rounded-[20px]"
          >
            <option value="">--Select Option--</option>
            <option value="Individual">Individual</option>
            <option value="Business">Business</option>
          </select>
          {errors.userType && (
            <p className="text-red-600 text-sm">{errors.userType}</p>
          )}
        </div>
        <p className="text-[15px] text-[#22222266] font-medium ">
          By clicking the “Create Account” button below, you agree to DYB
          Africa’s{" "}
          <Link href="#" className="underline">
            terms of acceptable use
          </Link>
          .
        </p>
        <button
          type="submit"
          className="bg-[#FD4A09] text-white w-full h-[62px] py-2 rounded-[40px]"
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;

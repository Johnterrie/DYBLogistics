"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import signInHero from "../../../../public/images/sign-n-hero.svg";
import googleIcon from "../../../../public/icons/google-button.svg";
import appleIcon from "../../../../public/icons/apple-button.svg";

function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Signin failed");
      }

      router.push("/customer/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-9 lg:px-[116px] pt-[67px] pb-[100px] flex flex-row justify-between">
      <div>
        <div className="text-center lg:text-left text-[#222222]">
          <h2 className="text-[20px] lg:text-[28px] font-bold mb-[11px]">
            Welcome Back
          </h2>
          <p className="text-[12px] lg:text-[15px] font-medium text-[#222222B2]">
            "Welcome! Your journey to seamless delivery starts here. Track,
            ship, and move forward with confidence."
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-[43px] mb-[41px] lg:mt-[33px]"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[14px] md:text-[20px] mb-[14px] lg:mb-[11px] font-semibold text-[#222222]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="focus:border-[#FD4A09] focus:border-[0.5px]  outline-none block w-full h-[48px] border-[0.3px]  border-[#FD4A094D] bg-[#FDF9F9] rounded-[20px] p-2"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-[14px] md:text-[20px] mb-[14px] lg:mb-[11px] font-semibold text-[#222222]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="focus:border-[#FD4A09] focus:border-[0.5px]  outline-none block w-full h-[48px] border-[0.3px]  border-[#FD4A094D] bg-[#FDF9F9] rounded-[20px] p-2"
            />
          </div>

          <div className="text-right mb-4">
            <Link
              href="/forgot-password"
              className="text-[15px] font-medium text-[#4DA1EB] mb-[11px]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[69px] font-medium text-[20px] bg-[#FD4A09] text-white py-[22px] rounded-[40px]"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mb-[53px] text-center text-gray-500 text-sm flex justify-center items-center">
          <hr className="inline-block w-4/9 border-t border-gray-300" />
          <span className="mx-1 lg:mx-3">Or</span>
          <hr className="inline-block w-4/9 border-t border-gray-300" />
        </div>

        <div className="space-y-[17px]">
          <button
            type="button"
            className="w-full font-medium text-[15px] py-2 "
          >
            <Image
              src={googleIcon}
              alt="Google Icon"
              className="inline-block mr-2"
            />
            <span>Sign in with Google</span>
          </button>
          <button
            type="button"
            className="w-full font-medium text-[15px]  py-2 "
          >
            <Image
              src={appleIcon}
              alt="apple link"
              className="inline-block mr-2"
            />
            Sign in with Apple
          </button>
        </div>

        <div className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium">
            Sign up
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image src={signInHero} alt="Description" width={648} height={300} />
      </div>
    </div>
  );
}

export default Signin;

import React from "react";
import Image from "next/image"; // Add this import
import hero from "../../../../public/images/signup-orders.png";
import SignupForm from "../../components/signUpForm/SignupForm";

export default function SignUpPage() {
  return (
    <div className="px-0 lg:px-9  mt-[41px] ">
      <div className="text-center text-[#222222] mb-[47px]">
        <h1 className="font-semibold leading-[100%] text-[28px] mb-[5px]">
          Create Account
        </h1>
        <p className="font-medium text-[15px] leading-[100%]">
          Let’s get your packages moving
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="hidden lg:block w-[682px] h-[711px]">
          <Image
            src={hero}
            alt="Sign Up"
            width={682}
            height={711}
            layout="responsive"
            quality={100}
          />
        </div>
        <SignupForm />
      </div>
    </div>
  );
}

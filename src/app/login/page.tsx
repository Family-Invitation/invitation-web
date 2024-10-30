"use client";

import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Page(props: Props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Wrapper>
      <div className="w-full  h-full md:h-screen flex">
        <div className="w-full md:w-[55%]  py-12 md:py-12 flex flex-col  px-4 md:px-20">
          <h2 className="font-poppins text-[#DF1E9F] text-2xl md:text-4xl font-bold">
            Login
          </h2>
          <p className="font-poppins text-[#5D5454] text-xl mt-3">
            Masuk untuk menikmati layanan
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="font-poppins text-[#5D5454] text-lg">
                Email Aktif<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-transparent"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-poppins text-[#5D5454] text-lg">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#31ABED] text-white font-bold py-2 px-4 rounded-md w-full mt-6"
            >
              Masuk
            </button>
          </form>

          {/* Login link */}
          <p className="font-poppins text-[#5D5454] text-lg mt-4">
            Belum punya akun?{" "}
            <Link href="/register" className="text-[#31ABED] font-bold">
              Register disini
            </Link>
          </p>
        </div>
        <div
          style={{ background: "url(/images/bg-auth.png)" }}
          className="hidden md:block w-[45%] h-screen bg-cover bg-center bg-"
        ></div>
      </div>
    </Wrapper>
  );
}

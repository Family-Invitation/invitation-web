"use client";

import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Page(props: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
      <div className="w-full h-full md:h-screen flex">
        <div className="w-full md:w-[55%]  py-12 md:py-12 flex flex-col  px-4 md:px-20">
          <h2 className="font-poppins text-[#DF1E9F] text-2xl md:text-4xl font-bold">
            Register
          </h2>
          <p className="font-poppins text-[#5D5454] text-xl mt-3">
            Buat akun terlebih dahulu untuk menikmati layanan
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label className="font-poppins text-[#5D5454] text-lg">
                Nama<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-transparent"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-poppins text-[#5D5454] text-lg">
                Whatsapp Aktif<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-r-md bg-transparent"
                  required
                />
              </div>
            </div>

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
              Daftar
            </button>
          </form>

          {/* Login link */}
          <p className="font-poppins text-[#5D5454] text-lg mt-4">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-[#31ABED] font-bold">
              Log in disini
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

"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MenuNavbarOpen = () => {
    return (
      <div
        className={`${
          scrolling ? "fixed" : "relative"
        } inset-x-0 top-0 md:hidden flex flex-col bg-[#FEE7F2] h-screen z-40 w-full justify-center items-center gap-5 overflow-hidden`}
      >
        <button
          className="text-pink-400 absolute top-6 right-4"
          onClick={toggleMobileMenu}
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Portfolio */}
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <Link
            href="/desain"
            className="text-black hover:text-pink-500 text-xl font-twCent"
          >
            Desain
          </Link>
          {/* Template Design */}
          <Link
            href="/portofolio"
            className="text-black hover:text-pink-500 text-xl font-twCent"
          >
            Portofolio
          </Link>

          <button className="font-twCent text-white bg-pink-600 px-4 py-3  font-normal rounded-md text-base md:text-lg hover:bg-pink-500 w-[80%] mt-8">
            Pesan Sekarang
          </button>

          {/* Log in */}
          <a href="#" className="text-pink-500 text-xl font-twCent">
            Log in
          </a>
        </div>
      </div>
    );
  };

  return (
    <nav>
      {isMobileMenuOpen ? (
        <MenuNavbarOpen />
      ) : (
        <div
          className={`inset-x-0 top-0  flex items-center justify-between p-4  md:px-12  transition-all duration-300 z-50 bg-[#FEE7F2]  ${
            scrolling ? "bg-pink-100 fixed" : "relative"
          } `}
          style={{ zIndex: 1000 }}
        >
          <div className=" items-center space-x-4 w-[300px]">
            {/* Logo */}
            {/* <img src="/logo.png" alt="Logo" className={`h-12`} /> */}
            <Link
              href="/"
              className="font-leckerliOne text-[#DF1E9F] text-2xl w-full"
            >
              Family Decorative
            </Link>
          </div>
          <div>
            {/* Hamburger Icon */}
            <button className="md:hidden text-white" onClick={toggleMobileMenu}>
              <FaBars
                className={`w-6 h-6 transition-all duration-300 transform hover:scale-110 text-pink-500 `}
              />
            </button>
          </div>

          <div className="md:flex items-center space-x-4 md:space-x-4 hidden w-full justify-end gap-8">
            {/* Portfolio */}
            <Link
              href="/desain"
              className={`text-[#DF1E9F] hover:text-pink-500 text-lg font-poppins`}
            >
              Desain
            </Link>
            {/* Template Design */}
            <Link
              href="/portofolio"
              className={`text-[#DF1E9F] hover:text-pink-500 text-lg font-poppins`}
            >
              Portofolio
            </Link>
            {/* Log in */}
            <a
              href="#"
              className="text-white text-lg font-poppins bg-[#FA69BF] px-3  py-2 rounded-md hover:bg-[#DF1E9F]"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

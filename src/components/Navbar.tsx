"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <nav
      className={`fixed inset-x-0 top-0  flex items-center justify-between px-4 md:px-12 py-4  transition-all duration-300 z-50 ${
        scrolling ? "bg-pink-100" : ""
      }`}
      style={{ zIndex: 1000 }} 
    >
      <div className="md:flex items-center space-x-4">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>
      <div>
        {/* Hamburger Icon */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {!isMobileMenuOpen && <FaBars className="w-6 h-6" />}
        </button>
      </div>

      <div className="md:flex items-center space-x-4 md:space-x-4 hidden w-full justify-end">
        {/* Portfolio */}
        <a
          href="#"
          className={` ${
            scrolling ? "text-black" : "text-white"
          } hover:text-pink-500 text-base font-twCent`}
        >
          Portofolio
        </a>
        {/* Template Design */}
        <a
          href="#"
          className={`${
            scrolling ? "text-black" : "text-white"
          } hover:text-pink-500 text-base font-twCent`}
        >
          Template Design
        </a>
        {/* Log in */}
        <a href="#" className="text-pink-500 text-base font-twCent">
          Log in
        </a>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-pink-100 h-screen z-40 w-full justify-center items-center gap-5">
          <button
            className="text-pink-400 absolute top-6 right-4"
            onClick={toggleMobileMenu}
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Portfolio */}
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <a
              href="#"
              className="text-black hover:text-pink-500 text-xl font-twCent"
            >
              Portofolio
            </a>
            {/* Template Design */}
            <a
              href="#"
              className="text-black hover:text-pink-500 text-xl font-twCent"
            >
              Template Design
            </a>

            <button className="font-twCent text-white bg-pink-600 px-4 py-3  font-normal rounded-md text-base md:text-lg hover:bg-pink-500 w-[80%] mt-8">
              Pesan Sekarang
            </button>

            {/* Log in */}
            <a href="#" className="text-pink-500 text-xl font-twCent">
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

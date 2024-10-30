"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Variants for the mobile menu animation
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 }, // Start from the right
    visible: { x: 0, opacity: 1 }, // Animate to the center
    exit: { x: "100%", opacity: 0 }, // Animate out to the right
  };

  const MenuNavbarOpen = () => (
    <motion.div
      key="mobileMenu"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: 0.5 }}
      className={`inset-x-0 top-0 md:hidden flex flex-col bg-[#FEE7F2] h-screen -z-10 w-full justify-center items-center gap-5 overflow-hidden fixed`}
      style={{ top: 0, left: 0 }}
    >
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <Link
          href="/desain"
          className="text-black hover:text-pink-500 text-xl font-twCent"
        >
          Desain
        </Link>
        <Link
          href="/portofolio"
          className="text-black hover:text-pink-500 text-xl font-twCent"
        >
          Portofolio
        </Link>

        <button className="font-twCent text-white bg-pink-600 px-4 py-3 font-normal rounded-md text-base md:text-lg hover:bg-pink-500 w-[80%] mt-8">
          Pesan Sekarang
        </button>

        <Link href="/login" className="text-pink-500 text-xl font-twCent">
          Log in
        </Link>
      </div>
    </motion.div>
  );

  return (
    <nav className="sticky top-0 z-50">
      <AnimatePresence>
        {isMobileMenuOpen && <MenuNavbarOpen />}
      </AnimatePresence>

      <div
        className={`inset-x-0 top-0 flex items-center justify-between p-4 md:px-12 z-30 duration-300 bg-[#FEE7F2]`}
      >
        <div className="items-center space-x-4 w-[300px]">
          <Link
            href="/"
            className="font-leckerliOne text-[#DF1E9F] text-2xl w-full"
          >
            Family Decorative
          </Link>
        </div>
        <div>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 transition-all duration-300 transform hover:scale-110 text-pink-500" />
            ) : (
              <FaBars className="w-6 h-6 transition-all duration-300 transform hover:scale-110 text-pink-500" />
            )}
          </button>
        </div>

        <div className="md:flex items-center space-x-4 hidden w-full justify-end gap-3">
          <Link
            href="/desain"
            className="text-[#DF1E9F] hover:text-pink-500 text-lg font-poppins"
          >
            Desain
          </Link>
          <Link
            href="/portofolio"
            className="text-[#DF1E9F] hover:text-pink-500 text-lg font-poppins"
          >
            Portofolio
          </Link>

          <Link
            href="/login"
            className="text-white text-center text-lg font-poppins bg-[#FA69BF] px-2 py-2 rounded-md hover:bg-[#DF1E9F] w-[180px]"
          >
            Login
          </Link>
          <a
            href="#"
            className="text-white text-center text-lg font-poppins bg-[#FA69BF] px-2 py-2 rounded-md hover:bg-[#DF1E9F] w-[180px]"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

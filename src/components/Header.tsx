import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center h-screen px-4 md:px-12 opacity-95"
      style={{ backgroundImage: 'url("/images/bg-header.jpg")' }}
    >
      <div className="flex items-start h-screen flex-col justify-center  text-center md:text-left">
        <h1 className="text-white text-3xl md:text-5xl font-philosopher md:w-[40%] w-full px-8 md:px-0 leading-10">
          Solusi Digital Pernikahan Impian.
        </h1>
        <h3 className="text-white text-base md:text-lg font-twCent mt-8 md:w-[40%] w-full leading-8">
          Jadikan pernikahan impianmu lebih modern dan efisien dengan Viding,
          Solusi digital pernikahan terlengkap!
        </h3>
        <div className="mt-8 flex justify-center md:w-auto w-full">
          <button className="font-twCent text-white bg-pink-600 px-4 md:px-6  py-3 md:py-4 font-normal rounded-md text-base md:text-lg hover:bg-pink-500">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative h-screen px-4 md:px-12  bg-[#EEEDED]">
      <div className="flex items-start h-screen flex-col md:justify-center mt-60 md:mt-0 text-center md:text-left">
        <div className="flex items-center">
          <div className="w-full md:w-[65%]">
            <h1 className="text-[#DF1E9F] text-start text-3xl md:text-5xl font-philosopher  w-full  px-0 leading-10 font-medium">
              Rayakan Cinta Anda dengan Undangan Pernikahan Digital yang Elegan
            </h1>
            <h3 className="text-[#680848]  text-start text-base md:text-lg font-twCent mt-8 w-full leading-8">
              Personalisasikan hari istimewa Anda dengan desain unik yang
              mencerminkan kisah cinta Anda.
            </h3>
            <div className="mt-8 flex justify-center md:justify-start md:w-auto w-full">
              <button className="font-twCent text-white bg-[#FA69BF] px-4 md:px-6  py-3  font-normal rounded-md text-base md:text-lg hover:bg-pink-500 w-[300px]">
                Buat Sekarang
              </button>
            </div>
          </div>
          <div className="w-auto relative hidden md:block">
            <img
              src="/images/landing-page/img-header.png"
              alt="img-header"
              loading="lazy"
              className="w-full h-[600px] relative "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

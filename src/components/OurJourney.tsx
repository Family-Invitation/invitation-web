"use client";

import React, { useEffect } from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { useGetOurJourney } from "@/hooks/landing-page/useOurJourney";

const OurJourney = () => {
  useEffect(() => {
    useGetOurJourney();
  }, []);
  return (
    <div className="max-w-7xl mx-4 md:mx-auto my-14 md:my-20 bg-pink-500 p-10 rounded-lg flex flex-col justify-center items-center text-white w-auto md:w-full">
      <h2 className="w-full text-center text-3xl md:text-5xl font-philosopher tracking-wider font-semibold">
        Our Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="mb-2">
            <GiBigDiamondRing className="w-[100px] h-full" />
          </div>
          <div className="text-4xl font-bold font-twCent">100</div>
          <div className="text-2xl font-twCent text-center">Weddings</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="mb-2">
            <IoMdPersonAdd className="w-[100px] h-full" />
          </div>
          <div className="text-4xl font-bold font-twCent">100</div>
          <div className="text-2xl font-twCent text-center">Invited Guest</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="mb-2">
            <RiMoneyDollarCircleLine className="w-[100px] h-full" />
          </div>
          <div className="text-4xl font-bold font-twCent">100</div>
          <div className="text-2xl font-twCent text-center"> E-Angpao</div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;

import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";

const OurJourney = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 bg-pink-500 p-10 rounded-lg flex flex-col justify-center items-center w-full text-white">
      <h2 className="w-full text-center text-5xl font-philosopher font-semibold">
        Our Journey
      </h2>
      <div className="grid grid-cols-3 gap-6 w-full mt-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="mb-2">
            <GiBigDiamondRing clasName=" w-10 md:w-[100px]" />
          </div>
          <div className="text-4xl font-bold font-twCent">100</div>
          <div className="text-2xl font-twCent">Weddings</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="mb-2">
            <IoMdPersonAdd size={100} />
          </div>
          <div className="text-4xl font-bold font-twCent">100</div>
          <div className="text-2xl font-twCent"> Invited Guest</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="mb-2">
            <RiMoneyDollarCircleLine size={100} />
          </div>
          <div className="text-4xl font-bold font-twCent">100</div>
          <div className="text-2xl font-twCent"> E-Angpao</div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;

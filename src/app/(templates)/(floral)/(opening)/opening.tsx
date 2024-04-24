import React from "react";

type Props = {};

const opening = (props: Props) => {
  return (
    <div className="w-full md:w-[768px] mx-auto h-screen relative">
      <div className="w-full h-screen relative bg-[url('/images/floral/bg-floral-template.png')]">
        <div className="text-center p-16">
          <h2 className="text-black text-lg uppercase font-portSans">
            The Weading of
          </h2>
          <h4 className="text-[#B87A54] text-[40px] font-['qagettoSans']">
            Putra & Putri
          </h4>
          <h4 className="text-black text-lg">Rabu, 24 Januari 2024</h4>
        </div>
      </div>
    </div>
  );
};

export default opening;

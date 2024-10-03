import React from "react";

type Props = {};

const Footer = () => {
  return (
    <div className="bg-[#A21272] px-4 md:px-12 py-20 md:py-12 w-full">
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-[70%]">
          <h5 className="font-leckerliOne text-[#FEE7F2] text-3xl mb-4">
            Family Decorative
          </h5>

          {/* Description */}
          <div className="text-[#FEE7F2] font-light text-base font-poppins leading-6 space-y-2">
            <p>Siap Membuat Undangan Impian Anda?</p>
            <p>
              Mulai desain undangan pernikahan digital Anda hari ini. Punya
              pertanyaan?
            </p>
            <p>
              Hubungi kami kapan saja—kami siap membantu membuat hari Anda
              sempurna.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[30%] font-poppins mt-8 md:mt-0">
          <div className="text-[#FEE7F2] text-lg">Desain</div>
          <div className="text-[#FEE7F2] text-lg mt-4"> Portofolio</div>
          <button className="text-[#F2FEE7] bg-[#8BB84C] px-4 py-3  font-normal rounded-md text-base mt-4">
            Pesan Sekarang
          </button>
        </div>
      </div>
      <div className="text-[#FEE7F2] text-xl mt-16 text-center">
        © Family Decorative 2024
      </div>
      {/* Title */}
    </div>
  );
};

export default Footer;

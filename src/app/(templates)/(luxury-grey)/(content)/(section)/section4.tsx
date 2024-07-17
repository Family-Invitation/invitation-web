import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {};

const section4 = ({ data }: Readonly<any>) => {
  return (
    <div className="bg-[#2C3333] flex justify-center items-center flex-col px-5 py-8">
      <div className="text-center" data-aos="zoom-in">
        <h2 className="font-playFair text-white text-3xl">EVENT</h2>
        <h2 className="font-dancingScript text-white text-xl">Countdown</h2>
      </div>
      <div className="mt-8 h-full w-full px-8" data-aos="flip-up">
        <div
          className={`bg-cover bg-center bg-no-repeat rounded-t-[150px] h-[450px] w-full`}
          style={{
            backgroundImage: `url("${data?.section3.content_box.event_picture}")`,
          }}
        ></div>
      </div>
      <div
        className="flex justify-between items-center mt-8 w-[50%]"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
          <h4>00</h4>
          <h4>Hari</h4>
        </div>
        <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
          <h4>00</h4>
          <h4>Jam</h4>
        </div>
        <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
          <h4>00</h4>
          <h4>Menit</h4>
        </div>
        <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
          <h4>00</h4>
          <h4>Detik</h4>
        </div>
      </div>

      <div className="divider  mt-8 mx-0 mb-0 px-12 text-2xl">
        <FaHeart />
      </div>
    </div>
  );
};

export default section4;

import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";

type Props = {};

const section9 = ({ data }: Readonly<any>) => {
  return (
    <FloralWrapperLayout id="section9">
      <div className="flex flex-col items-center justify-center h-full">
        <h4
          className="text-center text-[#282828]  mb-4 font-combo text-base"
          data-aos="zoom-in"
        >
          Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami
          mengucapkan Terima Kasih.
        </h4>
        <div
          className="relative items-center justify-center flex mx-auto  h-[160px] w-[150px] mb-5 "
          data-aos="fade-up"
        >
          <img
            src="/images/floral/avatar.png"
            alt="frame"
            loading="lazy"
            className=" rounded-full animate-wiggle"
          />
        </div>
        <p
          className="text-[#3E3E3E] text-base  font-croissantOne"
          data-aos="zoom-in"
        >
          Kami yang berbahagia{" "}
        </p>
        <h4
          className="text-[#B87A54] text-[40px] font-qagetto"
          data-aos="zoom-in"
        >
          {data?.section9?.couples ?? ""}
        </h4>
      </div>
    </FloralWrapperLayout>
  );
};

export default section9;

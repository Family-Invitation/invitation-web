import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";

type Props = {};

const section2 = ({ data }: Readonly<any>) => {
  return (
    <FloralWrapperLayout id="section2">
      <div>
        <h2
          className="text-[#171717] text-base font-combo text-center mb-4"
          data-aos="fade-up"
        >
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah
          kami akan menyelenggarakan acara pernikahan :
        </h2>
        <div className="text-center">
          <div
            className="relative items-center justify-center flex mx-auto  h-[160px] w-[150px] mb-3 "
            data-aos="zoom-in"
          >
            <img
              src="/images/floral/avatar.png"
              alt="frame"
              loading="lazy"
              className=" rounded-full animate-wiggle"
            />
          </div>

          <h4
            className="text-[#B87A54] text-4xl font-dancingScript mb-2"
            data-aos="zoom-in"
          >
            {data?.section2?.man?.name}
          </h4>
          <h4
            className="text-[#171717] text-base leading-[1.3] font-combo"
            data-aos="zoom-in"
          >
            Putra dari {data?.section2?.man?.dad} & <br />
            {data?.section2?.man?.mom}
          </h4>
          <div
            className="flex items-center w-full px-20 py-2"
            data-aos="zoom-in"
          >
            <div className="flex-grow border-t-2 border-[#39251A]"></div>
            <span className="mx-3 text-[#39251A] font-croissantOne text-lg font-semibold">
              &
            </span>
            <div className="flex-grow border-t-2 border-[#39251A]"></div>
          </div>
          <div className="relative items-center justify-center flex mx-auto  h-[150px] w-[150px] mb-3 ">
            <img
              src="/images/floral/avatar.png"
              alt="frame"
              loading="lazy"
              className=" rounded-full animate-wiggle"
              data-aos="zoom-in"
            />
          </div>
          <h4
            className="text-[#B87A54] text-4xl font-dancingScript mb-2"
            data-aos="zoom-in"
          >
            {data?.section2?.woman?.name}
          </h4>
          <h4
            className="text-[#171717] text-base leading-[1.3] font-combo"
            data-aos="zoom-in"
          >
            Putri dari {data?.section2?.woman?.dad} & <br />
            {data?.section2?.woman?.mom}
          </h4>
        </div>
      </div>
    </FloralWrapperLayout>
  );
};

export default section2;

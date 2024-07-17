import React from "react";

type Props = {};

const section8 = ({ data }: Readonly<any>) => {
  return (
    <div className={`flex justify-center items-center flex-col h-full w-full bg-[url('${data?.section9.theme.background_mobile}')] bg-center bg-no-repeat bg-cover relative`}>
      <div className="absolute inset-0   bg-black opacity-30 transition-opacity duration-300 w-full"></div>
      <div
        className={`w-full h-full relative px-8  overflow-hidden flex flex-col items-center justify-center text-white `}
      >
        <h2
          className="font-poppins text-xs tracking-widest font-semibold"
          style={{ letterSpacing: "4px" }}
        >
          The Wedding Of
        </h2>
        <div className=" text-2xl md:text-3xl font-playWrite my-8 font-normal  text-center">
          <h4>{data?.man} </h4>
          <h4 className="my-2">&</h4>
          <h4>{data?.woman}</h4>
        </div>
        <h2
          className="font-poppins text-xs tracking-widest font-semibold"
          style={{ letterSpacing: "4px" }}
        >
          {data?.metadata?.description}
        </h2>
        <div className="absolute bottom-[200px] text-center" data-aos="zoom-in">
          <p className="text-white text-xs font-poppins px-2">
            Atas kehadiran dan doa restunya kami ucapkan terimakasih.
          </p>
        </div>
      </div>
    </div>
  );
};

export default section8;

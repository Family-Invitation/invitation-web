import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { assetsUrl, urlWA } from "@/lib/constants";

type Props = {};

const section9 = ({ data }: Readonly<any>) => {
  return (
    <div
      className={`flex justify-center items-center flex-col h-full w-full bg-center bg-no-repeat bg-cover relative`}
      style={{
        backgroundImage: `url("${data?.section9.theme.background_mobile}")`,
      }}
    >
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

        <div className="absolute bottom-[70px] flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <img
              src={
                data.section9.vendor?.picture || assetsUrl + "/logo-brown.png"
              }
              alt="logo"
              style={{
                // aspectRatio: "1:1",
                borderRadius: 10,
                width: "80px",
                marginTop: "30px",
              }}
              onClick={() => {
                window.open(data.section9.vendor?.url, "_blank");
              }}
              data-aos="flip-right"
            />
            <div
              className="text-white mt-3 text-xs font-combo"
              // data-aos="flip-right"
            >
              {data.section9.vendor?.name || "Family Invitation"}
            </div>
          </div>
          {!data.section9.vendor && (
            <div
              style={{ display: "flex", marginTop: "20px", gap: "10px" }}
              data-aos="zoom-in"
            >
              <Link href={urlWA + "6289516789565"} target="_blank">
                <FaWhatsapp size={30} color="#B87A54" />
              </Link>
              <Link
                href="https://www.instagram.com/familyinvitation_/"
                target="_blank"
              >
                <FaInstagram size={30} color="#B87A54" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default section9;

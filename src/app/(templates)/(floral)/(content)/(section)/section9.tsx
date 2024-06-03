import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import { assetsUrl, urlWA } from "@/lib/constants";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

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
          className="text-[#3E3E3E] text-base font-crimsonPro"
          data-aos="zoom-in"
        >
          Kami yang berbahagia{" "}
        </p>
        <h4
          className="text-[#B87A54] text-[40px] font-quicksand"
          data-aos="zoom-in"
        >
          {data?.section9?.couples ?? ""}
        </h4>

        <img
          src={data.section9.vendor?.picture || assetsUrl + "/logo-brown.png"}
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
          className="text-[#303130] mt-3 text-xs font-combo"
          data-aos="zoom-in"
        >
          {data.section9.vendor?.name || "Family Invitation"}
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
    </FloralWrapperLayout>
  );
};

export default section9;

import { Data } from "@/interfaces/dataInterfaces";
import { urlWA } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import useResizeFont from "@/hooks/useResize";

export default function Section9({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const mempelaiPria = data?.mempelaiPria?.namaPanggilan;
  const ayahMempelaiPria = data?.mempelaiPria?.namaOrangTua?.bapak;
  const ibuMempelaiPria = data?.mempelaiPria?.namaOrangTua?.ibu;
  const mempelaiWanita = data?.mempelaiWanita?.namaPanggilan;
  const ayahMempelaiWanita = data?.mempelaiWanita?.namaOrangTua?.bapak;
  const ibuMempelaiWanita = data?.mempelaiWanita?.namaOrangTua?.ibu;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        margin: "100px auto",
        alignItems: "center",
        fontFamily: "Josefin Sans",
      }}
    >
      <div
        style={{
          color: "#efefef",
          marginBottom: "30px",
          // marginLeft: "300px",
          // marginRight: "300px",
          fontSize: resizeList(20, [
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
        className="mx-16 lg:mx-[300px]"
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: data.section9.text_gratitude }}
      ></div>
      <div
        style={{
          color: "white",
          fontSize: "15px",
        }}
        data-aos="fade-up"
      >
        {data.section9.text_regards}
      </div>
      <div
        style={{
          marginTop: "30px",
          // color: "#85875F",
          color: "white",
          fontSize: resizeList(60, [
            {
              width: 450,
              decreasePercent: 50,
            },
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
        data-aos="fade-up"
      >
        {data.section9.couples}
      </div>
      {/* <div
        style={{
          color: "#F5EACF",
          marginTop: "30px",
          fontSize: resizeList(20, [
            {
              width: 450,
              decreasePercent: 50,
            },
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
      >
        The Big Family
      </div> */}

      {/* <div
        style={{
          color: "white",
          marginTop: "30px",
          fontSize: resizeList(20, [
            {
              width: 450,
              decreasePercent: 50,
            },
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
      >
        Lord {ayahMempelaiPria} & Lady {ibuMempelaiPria}
      </div> */}
      {/* <div
        style={{
          color: "white",
          marginTop: "10px",
          fontSize: resizeList(20, [
            {
              width: 450,
              decreasePercent: 50,
            },
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
      >
        Lord {ayahMempelaiWanita} & Lady {ibuMempelaiWanita}
      </div> */}
      <img
        src="/logo.png"
        alt="logo"
        style={{
          // aspectRatio: "1:1",
          width: "80px",
          marginTop: "30px",
          // mixBlendMode: "color-burn",
          // backgroundColor: "transparent",
          // borderRadius: "50%",
        }}
        data-aos="flip-right"
      />
      <div
        style={{
          color: "white",
          marginTop: "10px",
          fontSize: resizeList(15, [
            {
              width: 450,
              decreasePercent: 40,
            },
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
        data-aos="zoom-in"
      >
        Family Invitation
      </div>
      <div
        style={{ display: "flex", marginTop: "20px", gap: "10px" }}
        data-aos="zoom-in"
      >
        <Link href={urlWA + "6289516789565"} target="_blank">
          <FaWhatsapp size={30} color="white" />
        </Link>
        <Link
          href="https://www.instagram.com/familyinvitation_/"
          target="_blank"
        >
          <FaInstagram size={30} color="white" />
        </Link>
      </div>
    </div>
  );
}

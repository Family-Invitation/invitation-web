import useGetData from "@/hooks/useGetData";
import { Data } from "@/interfaces/dataInterfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Section9() {
  const [windowWidth, setWindowWidth] = useState(0);

  const dataKonsumen: Data = useGetData();

  const { data } = dataKonsumen;

  const mempelaiPria = data?.mempelaiPria?.namaLengkap;
  const ayahMempelaiPria = data?.mempelaiPria?.namaOrangTua?.bapak;
  const ibuMempelaiPria = data?.mempelaiPria?.namaOrangTua?.ibu;
  const mempelaiWanita = data?.mempelaiWanita?.namaLengkap;
  const ayahMempelaiWanita = data?.mempelaiWanita?.namaOrangTua?.bapak;
  const ibuMempelaiWanita = data?.mempelaiWanita?.namaOrangTua?.ibu;

  const whatsappLink = `https://api.whatsapp.com/send?phone=6287896695791`;

  useEffect(() => {
    function f() {
      setWindowWidth(window.innerWidth);
    }

    f();

    window.addEventListener("resize", f);

    return () => window.removeEventListener("resize", f);
  }, []);

  function resizeList(
    normalSize: number,
    list: {
      width: number;
      decresePercent: number;
    }[]
  ): number {
    for (const { width: w, decresePercent: d } of list) {
      if (windowWidth <= w) {
        return normalSize - (normalSize * d) / 100;
      }
    }
    return normalSize;
  }
  return (
    <div
      style={{
        width: "100%",
        minHeight: "55vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        margin: "100px auto",
        alignItems: "center",
        fontFamily: "Josefin Sans",
      }}
    >
      <div
        style={{
          color: "#4F583D",
          fontSize: resizeList(30, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
        }}
      >
        Thank You
      </div>
      <div
        style={{
          marginTop: "30px",
          color: "#85875F",
          fontSize: resizeList(60, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
        }}
      >
        {mempelaiPria} & {mempelaiWanita}
      </div>
      <div
        style={{
          color: "#F5EACF",
          marginTop: "30px",
          fontSize: resizeList(20, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
        }}
      >
        The Big Family
      </div>

      <div
        style={{
          color: "white",
          marginTop: "30px",
          fontSize: resizeList(20, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
        }}
      >
        Lord {ayahMempelaiPria} & Lady {ibuMempelaiPria}
      </div>
      <div
        style={{
          color: "white",
          marginTop: "10px",
          fontSize: resizeList(20, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
        }}
      >
        Lord {ayahMempelaiWanita} & Lady {ibuMempelaiWanita}
      </div>
      <img
        src="/logo.png"
        alt="logo"
        style={{
          aspectRatio: "1:1",
          width: "150px",
          marginTop: "30px",
          mixBlendMode: "color-burn",
          backgroundColor: "transparent",
        }}
      />
      <div style={{ display: "flex", marginTop: "20px", gap: "10px" }}>
        <Link href={whatsappLink} target="_blank">
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

import Image from "next/image";
import { useEffect, useState } from "react";
import { Data } from "@/interfaces/dataInterfaces";
import useResizeFont from "@/hooks/useResize";

export default function Section6({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const images = [
    { imageUrl: "/images/Asset-2.webp", label: "Menggunakan Masker" },
    { imageUrl: "/images/Asset-3.webp", label: "Menggunakan Sabun" },
    { imageUrl: "/images/Asset-4.webp", label: "Mencuci Tangan" },
    { imageUrl: "/images/Asset-5.webp", label: "Menjaga Jarak" },
    { imageUrl: "/images/Asset-6.webp", label: "Menggunakan Hand Sanitizer" },
    { imageUrl: "/images/Asset-7.webp", label: "Tidak bersentuhan" },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#84865f",
        // fontFamily: "Cormorant Garamond",
        textAlign: "center",
      }}
      className="px-6"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
        className="py-12"
      >
        <h3
          style={{
            marginTop: resizeList(100, [
              {
                width: 700,
                decreasePercent: 50,
              },
            ]),
            color: "white",
            fontSize: resizeList(30, [
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            margin: 0,
          }}
          className="font-cormorantGaramond "
          data-aos="fade-up"
        >
          {data.section6.text_subtitle_before}
        </h3>
        <h2
          style={{
            color: "white",
            fontFamily: "Cormorant Garamond",
            marginTop: 24,
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
            fontWeight: 600,
            margin: 0,
          }}
          data-aos="fade-up"
        >
          {data.section6.text_title}
        </h2>
        <div // Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontSize: resizeList(30, [
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
          }}
          className="font-cormorantGaramond mt-2 md:mt-5"
          data-aos="fade-up"
        >
          {data.section6.text_subtitle_after}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          className="m-4 md:m-12 gap-5 md:gap-10"
        >
          {data.section6.images.map(({ url, label }: any, i: number) => (
            <div
              key={i}
              style={{
                width: "100%",
                overflow: "hidden",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
              }}
              data-aos="fade-up"
            >
              <Image
                src={url}
                alt="image"
                width={120}
                height={120}
                style={{
                  aspectRatio: "1/1",
                  margin: 20,
                }}
              />
              <div
                style={{
                  color: "white",
                  fontFamily: "Roboto",
                }}
                className="text-xs md:text-base"
                data-aos="fade-up"
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

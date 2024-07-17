import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import Image from "next/image";

type Props = {};

const images = [
  {
    imageUrl: "/images/floral/asset-hp-1.png",
    label: "Mencuci Tangan",
  },
  {
    imageUrl: "/images/floral/asset-hp-2.png",
    label: "Menggunakan Hand Sanitize",
  },
  {
    imageUrl: "/images/floral/asset-hp-3.png",
    label: "Menghindari Kerumunan",
  },
  { imageUrl: "/images/floral/asset-hp-4.png", label: "Menggunakan Masker" },
  { imageUrl: "/images/floral/asset-hp-5.png", label: "Tidak bersentuhan" },
  { imageUrl: "/images/floral/asset-hp-6.png", label: "Menjaga Jarak" },
];

const section6 = ({ data }: Readonly<any>) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-[#F1F1F1]">
      <h2 className="font-playFair text-[#383838] text-3xl">Protokol</h2>
      <h2 className="font-dancingScript text-[#2f2f2f] text-xl mb-5">
        Kesehatan
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        className="mx-0 my-4 sm:m-4 md:m-12 gap-4 md:gap-6"
      >
        {images.map(({ imageUrl: url, label }: any, i: number) => (
          <div
            key={i}
            style={{
              width: "100%",
              overflow: "hidden",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            // data-aos="fade-up"
          >
            <img
              src={url}
              alt={label}
              style={{
                aspectRatio: "1/1",
                margin: 12,
                filter:
                  "brightness( 101% ) contrast( 100% ) saturate( 0% ) blur( 0px ) hue-rotate( 0deg )",
              }}
              className="w-20 md:w-24 m-2"
            />
            <div
              className="text-[10px] md:text-xs text-[#54595F] text-center font-poppins px-[2px]"
              //   data-aos="fade-up"
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default section6;

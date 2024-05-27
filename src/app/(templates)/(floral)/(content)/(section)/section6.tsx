import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import Image from "next/image";

type Props = {};

const images = [
  { imageUrl: "/images/floral/asset-hp-1.png", label: "Mencuci Tangan" },
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
    <FloralWrapperLayout id="section6">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="mb-4 text-[#B87A54]  text-4xl font-qagetto">
          Protokol Kesehatan
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          className="m-4 md:m-12 gap-3 md:gap-10"
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
                // justifyContent: "center",
                alignItems: "center",
              }}
              data-aos="fade-up"
            >
              <img
                src={url}
                alt={label}
                style={{
                  aspectRatio: "1/1",
                  margin: 12,
                }}
                className="w-20  md:w-24 m-2"
              />
              <div
                className="text-xs md:text-base text-[#54595F] text-center font-poppins"
                data-aos="fade-up"
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FloralWrapperLayout>
  );
};

export default section6;

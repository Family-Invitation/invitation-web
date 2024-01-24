import ButtonBase from "@/components/ButtonBase";
import { Data, IButton, IGiftCard } from "@/interfaces/dataInterfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";
import useResizeFont from "@/hooks/useResize";

export default function Section8({ data }: Readonly<Data>) {
  const { resizeList, windowWidth } = useResizeFont();

  const GiftCard = ({
    isGift = false,
    bank = "",
    rekName = "",
    rekNumber = "",
    recipientName = "",
    address = "",
  }: IGiftCard) => {
    return (
      <div
        style={{
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "100px",
          maxWidth: "500px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Josefin Sans",
        }}
        className="my-6 mx-auto"
      >
        {isGift ? (
          <>
            <FaGift size={60} color="#4F583D" />
            <div
              style={{
                color: "#4F583D",
                marginTop: "20px",
                fontSize: resizeList(30, [
                  {
                    width: 700,
                    decreasePercent: 30,
                  },
                ]),
              }}
            >
              {recipientName}
            </div>
            <div
              style={{
                color: "#85865F",
                marginTop: "20px",
                fontSize: resizeList(20, [
                  {
                    width: 700,
                    decreasePercent: 30,
                  },
                ]),
              }}
            >
              {address}
            </div>
          </>
        ) : (
          <>
            {/* <Image src="/barcode.webp" alt="barcode" width={200} height={200} /> */}
            <div
              style={{
                color: "#4F583D",
                marginTop: "20px",
                fontSize: resizeList(30, [
                  {
                    width: 700,
                    decreasePercent: 30,
                  },
                ]),
              }}
            >
              {bank}
            </div>
            <div
              style={{
                color: "#85865F",
                marginTop: "20px",
                fontSize: resizeList(20, [
                  {
                    width: 700,
                    decreasePercent: 30,
                  },
                ]),
              }}
            >
              {rekName}
            </div>
            <div
              style={{
                color: "#85865F",
                marginTop: "20px",
                fontSize: resizeList(20, [
                  {
                    width: 700,
                    decreasePercent: 30,
                  },
                ]),
              }}
            >
              {rekNumber}
            </div>
          </>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {!isGift && <ButtonBase text="Copy" />}
          {/* <ButtonBase text="Confirm" /> */}
        </div>
      </div>
    );
  };

  return (
    <div
      id="section8"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#84865f",
        zIndex: -1,
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            margin: "100px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="px-8"
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "0 auto",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div
              style={{
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
              className="font-cormorantGaramond font-semibold"
            >
              Wedding Gift
            </div>
            <div
              style={{
                color: "white",
                marginTop: "20px",
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
              className="font-josefinSans"
            >
              Kehadiran Anda merupakan hadiah terindah. Namun, apabila Anda
              memberikan tanda kasih kepada kami, dapat melalui fitur di bawah
              ini:
            </div>
          </div>
          <div style={{ width: "100%", margin: "50px 0" }}>
            <GiftCard
              isGift={false}
              bank="DANA"
              rekName="Muhamad Alfiqri"
              rekNumber="085781172863"
            />
            <GiftCard
              isGift={false}
              bank="Bank BCA"
              rekName="Pigita Disca Pertiwi"
              rekNumber="7651439586"
            />
          </div>
          {/* <div className="w-full lg:w-[500px]">
            <div
              style={{
                color: "white",
                marginTop: "50px",
                textAlign: "center",
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
            >
              Send Gift
            </div>
            <div>
              <GiftCard
                isGift={true}
                recipientName="John Doe"
                address="Jl. Setiabudi 100, Jakarta Pusat"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Data, IButton, IGiftCard } from "@/interfaces/dataInterfaces";
import useResizeFont from "@/hooks/useResize";
import ButtonBase from "@/components/ButtonBase";
import "react-toastify/dist/ReactToastify.css";
import { urlWA } from "@/lib/constants";

export default function Section8({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const GiftCard = ({
    isGift = false,
    bank = "",
    rekName = "",
    rekNumber = "",
    recipientName = "",
    address = "",
    nomorWa = "",
    copyText = "Salin",
  }: IGiftCard) => {
    const handleCopy = (textToCopy: string) => {
      navigator.clipboard.writeText(textToCopy);
      toast.success("Nomor rekening berhasil disalin", {
        position: "top-center",
        autoClose: 5000,
        transition: Zoom,
      });
    };

    return (
      <div
        style={{
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "20%",
          maxWidth: "400px",
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
                color: "#333",
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
                color: "#333",
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
                color: "#333",
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
                color: "#333",
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
                color: "#333",
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
          {!isGift && (
            <ButtonBase
              text={copyText}
              isLink={false}
              onClick={() => handleCopy(rekNumber)}
            />
          )}
        </div>
      </div>
    );
  };

  const namaMempelaiPria = data?.mempelaiPria?.namaLengkap;
  const nomorRekeningPria = data?.mempelaiPria?.nomorRekening;
  const nomorWaPria = data?.mempelaiPria?.nomorWA;
  const namaBankPria = data?.mempelaiPria?.namaBank;

  const namaMempelaiWanita = data?.mempelaiWanita?.namaLengkap;
  const nomorRekeningWanita = data?.mempelaiWanita?.nomorRekening;
  const nomorWaWanita = data?.mempelaiWanita?.nomorWA;
  const namaBankWanita = data?.mempelaiWanita?.namaBank;
  return (
    <div
      id="section8"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#D2B591",
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
          className="px-6"
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
              data-aos="fade-up"
            >
              {data.section8.text_title}
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
              data-aos="fade-up"
            >
              {data.section8.text_subtitle}
            </div>
          </div>
          <div style={{ width: "100%", margin: "50px 0" }} data-aos="fade-up">
            {data.section8.content_box.map(
              ({ name, no, title, button }: any, index: number) => (
                <GiftCard
                  key={index}
                  isGift={false}
                  bank={title}
                  rekName={name}
                  rekNumber={no}
                  nomorWa={""}
                  copyText={button.copy.text}
                />
              )
            )}
            {/* 
            <GiftCard
              isGift={false}
              bank={namaBankWanita}
              rekName={namaMempelaiWanita}
              rekNumber={nomorRekeningWanita}
              nomorWa={nomorWaWanita}
            /> */}
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
      <ToastContainer />
    </div>
  );
}

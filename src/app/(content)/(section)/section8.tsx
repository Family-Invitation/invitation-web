import { IButton, IGiftCard } from "@/interfaces/dataInterfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";

export default function Section8() {
  const [windowWidth, setWindowWidth] = useState(0);

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
        id="section8"
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
          margin: "25px auto",
          fontFamily: "Josefin Sans",
        }}
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
              {recipientName}
            </div>
            <div
              style={{
                color: "#85865F",
                marginTop: "20px",
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
              {address}
            </div>
          </>
        ) : (
          <>
            <Image src="/barcode.webp" alt="barcode" width={200} height={200} />
            <div
              style={{
                color: "#4F583D",
                marginTop: "20px",
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
              {bank}
            </div>
            <div
              style={{
                color: "#85865F",
                marginTop: "20px",
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
              {rekName}
            </div>
            <div
              style={{
                color: "#85865F",
                marginTop: "20px",
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
          <ButtonBase text="Confirm" />
        </div>
      </div>
    );
  };

  const ButtonBase = ({ icon, text, onClick }: IButton) => {
    return (
      <button
        style={{
          border: "#8A594C",
          backgroundColor: "#8A594C",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "5px",
          width: "100px",
          color: "white",
          marginBottom: "10px",
        }}
      >
        {text}
      </button>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#84865f",
        zIndex: -1,
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignContent: "center",
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
                    decresePercent: 50,
                  },
                  {
                    width: 700,
                    decresePercent: 30,
                  },
                ]),
              }}
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
                    decresePercent: 50,
                  },
                  {
                    width: 700,
                    decresePercent: 30,
                  },
                ]),
                fontFamily: "Josefin Sans",
              }}
            >
              Kehadiran Anda merupakan hadiah terindah. Namun, apabila Anda
              memberikan tanda kasih kepada kami, dapat melalui fitur di bawah
              ini:
            </div>
          </div>
          <div style={{ width: "100%", margin: "50px 0" }}>
            <GiftCard
              isGift={false}
              bank="Bank BCA"
              rekName="John Doe"
              rekNumber="123456789"
            />
            <GiftCard
              isGift={false}
              bank="Bank Mandiri"
              rekName="John Doe"
              rekNumber="123456789"
            />
          </div>
          <div style={{ width: "500px" }}>
            <div
              style={{
                color: "white",
                marginTop: "50px",
                textAlign: "center",
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
              Send Gift
            </div>
            <div>
              <GiftCard
                isGift={true}
                recipientName="John Doe"
                address="Jl. Setiabudi 100, Jakarta Pusat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

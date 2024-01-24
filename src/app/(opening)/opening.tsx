"use client";
import useGetData from "@/hooks/useGetData";
import { Data } from "@/interfaces/dataInterfaces";
import { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  showOpening: boolean;
  setShowOpening: Dispatch<SetStateAction<boolean>>;
  setShowContent: Dispatch<SetStateAction<boolean>>;
}

const Opening: NextPage<Props> = ({
  showOpening,
  setShowOpening,
  setShowContent,
}) => {
  console.log("opening");
  const [windowWidth, setWindowWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);

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

  function scroll(id: string) {
    const doc = document.getElementById(id);
    if (doc) {
      window.scrollTo({
        top: doc?.offsetTop || 0 - 60,
        behavior: "smooth",
      });

      setTimeout(() => {
        document.body.style.overflow = "auto";
        setShowOpening(false);
        window.scrollTo({
          top: 0,
        });
      }, 750);
    }
  }

  useEffect(() => {
    function f() {
      setWindowWidth(window.innerWidth);
    }

    f();

    window.addEventListener("resize", f);

    setLoaded(true);

    // document.body.style.overflow = "hidden";

    return () => window.removeEventListener("resize", f);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (showOpening) {
      body.style.overflow = "hidden";
    } else {
      setShowOpening(false);
      body.style.overflow = ""; // Mengembalikan overflow ke nilai default saat komponen unmount
    }

    return () => {
      // Cleanup effect: mengembalikan overflow ke nilai default saat komponen unmount
      body.style.overflow = "";
    };
  }, [showOpening]);

  console.log({ showOpening });

  const dataKonsumen: Data = useGetData();

  const { data } = dataKonsumen;

  const mempelaiPria = data?.mempelaiPria?.namaLengkap;
  const mempelaiWanita = data?.mempelaiWanita?.namaLengkap;

  return (
    // <div>tes</div>
    <div
      id="opening"
      style={{
        opacity: loaded ? 1 : 0,
        transition: "ease-in 300ms",
        width: "100%",
        height: "100vh",
        // backgroundImage: 'url("/bg-section1.webp")',
        backgroundColor: "#e9ede8",
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={`${
        showOpening ? "d-flex" : "d-none"
      } bg-[url('/images/bg-section1-mobile.webp')] md:bg-[url('/bg-section1.webp')] px-6 text-center`}
    >
      <img
        data-aos="zoom-in"
        style={{
          borderRadius: "50%",
          width: resizeList(216, [
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
        src="/couple.png"
        alt=""
      />
      <h2
        style={{
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
          fontWeight: 400,
          color: "#85865f",
          fontFamily: "Josefin Sans",
          margin: resizeList(20, [
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
        The Wedding of
      </h2>
      <h2
        style={{
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
          fontWeight: 600,
          color: "#4f583d",
          fontFamily: "Cormorant Garamond",
          margin: 0,
        }}
      >
        {mempelaiPria} & {mempelaiWanita}
      </h2>
      <h3
        style={{
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
          fontWeight: 400,
          color: "#8fa6ac",
          fontFamily: "Josefin Sans",
          margin: `${resizeList(30, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ])}px 0px`,
        }}
      >
        Kepada Bpk/Ibu/Saudara/i
      </h3>
      <h2
        style={{
          fontSize: resizeList(32, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
          fontWeight: 400,
          color: "#8fa6ac",
          fontFamily: "Josefin Sans",
          marginBottom: 40,
        }}
      >
        Ega & Partner
      </h2>
      {/* <h3
        style={{
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
          fontWeight: 400,
          color: "#ceb793",
          fontFamily: "Josefin Sans",
        }}
      >
        You are cordially invited to our wedding.
      </h3> */}
      <button
        style={{
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
          fontWeight: 400,
          fontFamily: "Josefin Sans",
          backgroundColor: "#8a584c",
          borderRadius: 100,
          color: "white",
          fill: "white",
          border: "none",
          padding: `${12}px ${24}px`,
          cursor: windowWidth < 1000 ? "default" : "pointer",
          outline: "none",
          boxShadow: "0 4px 3px 2px rgba(0, 0, 0, 0.2)",
        }}
        onClick={() => {
          setShowContent(true);
          scroll("section1");
        }}
      >
        Open Invitation
      </button>
    </div>
  );
};

export default Opening;

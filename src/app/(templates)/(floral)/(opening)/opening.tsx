import React, { useEffect, Dispatch, SetStateAction, useState } from "react";
import { FaQrcode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { NextPage } from "next";
import { formatInvitationName } from "@/helpers/formatInvitationName";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

type Props = {
  showOpening: boolean;
  showContent: boolean;
  setShowOpening: Dispatch<SetStateAction<boolean>>;
  setShowContent: Dispatch<SetStateAction<boolean>>;
  data: any;
};

const opening: NextPage<Props> = ({
  showOpening,
  showContent,
  setShowOpening,
  setShowContent,
  data,
}) => {
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const searchParams = useSearchParams();

  const toParam = searchParams.get("to") ?? "";

  function scroll(id: string) {
    const doc = document.getElementById(id);

    window.scrollTo({
      top: doc?.offsetTop || 0 - 60,
      behavior: "smooth",
    });

    document.body.style.overflow = "auto";
    setShowOpening(false);
    setTimeout(() => {
      const docOpening = document.getElementById("opening");
      if (docOpening) {
        docOpening.style.display = "none";
        AOS.init();
      }
    }, 750);
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

    if (showContent) {
      setShowOpening(false);
      scroll("content");
      body.style.overflow = ""; // Mengembalikan overflow ke nilai default saat komponen unmount
    } else {
      body.style.overflow = "hidden";
    }
    // body.style.overflow = showOpening ? "hidden" : "auto";

    return () => {
      // Cleanup effect: mengembalikan overflow ke nilai default saat komponen unmount
      body.style.overflow = "";
    };
  }, [showContent]);

  return (
    <div id="opening" className="w-full md:w-[768px] mx-auto h-screen relative">
      <div className="w-full h-screen relative bg-[url('/images/floral/bg-floral-template.png')] px-8 py-10 md:py-16 overflow-hidden">
        <img
          className="absolute -top-12 right-0 h-[250px] w-[220px] animate-heartBeat opacity-75 "
          src="/images/floral/asset-7.png"
          alt=""
          data-aos="fade-up"
        />
        <img
          className="absolute -bottom-16 -left-16 h-[250px] w-[220px] animate-heartBeat -z-[2px] opacity-75 "
          src="/images/floral/asset-6.png"
          alt=""
          data-aos="fade-down"
        />
        <div className="text-center">
          <div className="relative items-center justify-center flex mx-auto  h-[160px] w-[160px] mb-5">
            <img
              src="/images/floral/frame.png"
              alt="frame"
              loading="lazy"
              className="absolute"
              data-aos="zoom-in"
            />
            <h2 className="absolute top-14 left-[15px] text-5xl font-portSans text-[#B87A54] w-[50px]">
              {data?.man.slice(0, 1)}
            </h2>
            <h2 className="absolute bottom-10 right-[15px] text-5xl font-portSans text-[#B87A54] w-[50px]">
              {data?.woman.slice(0, 1)}
            </h2>
          </div>
          <h2 className="text-black text-xl font-portSans">THE WEDDING OF</h2>

          <h4 className="text-[#B87A54] text-4xl font-quicksand my-3">
            {data?.man} <br /> & <br /> {data?.woman}
          </h4>
          <h4 className="text-black text-lg font-combo">
            {data?.metadata?.description ?? ""}
          </h4>
          <div className="flex justify-center items-center my-5 md:my-8">
            <img
              className="w-[50px] h-[50px]"
              src="/images/floral/wedding.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-black text-sm font-medium font-poppins">
              Kepada Yth.
            </h4>
            <h4 className="text-black text-sm font-medium font-poppins">
              Bapak/Ibu/Saudara/i
            </h4>
            <h3 className="mt-2 text-[#B87A54] text-xl font-medium font-times">
              {formatInvitationName(toParam)}
            </h3>
            <button
              className="flex items-center justify-center space-x-2 bg-[#C4855F]  text-white py-2 px-4 rounded-md mt-3 z-10 font-portSans"
              onClick={() => {
                setShowContent(true);
              }}
            >
              <MdEmail className="w-4 h-4" />
              <span>Buka Undangan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default opening;

import { formatInvitationName } from "@/helpers/formatInvitationName";
import Aos from "aos";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

type Props = {
  data: any;
  children: React.ReactNode;
};

const WrapperLayout = ({ data, children }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const searchParams = useSearchParams();
  const toParam = searchParams.get("to") ?? "";

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

  useEffect(() => {
    function f() {
      setWindowWidth(window.innerWidth);
    }

    f();

    window.addEventListener("resize", f);

    Aos.init();

    return () => window.removeEventListener("resize", f);
  }, []);

  return (
    <div className="grid grid-cols-10">
      <div className="col-span-10 md:col-span-7 relative h-screen hidden md:block">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${
              windowWidth > 900
                ? data.opening.theme?.background || "/bg-section1.webp"
                : data.opening.theme?.background_mobile ||
                  "/images/bg-section1-mobile.webp"
            }')`,
            width: "calc(70%)", // Adjust to match the grid column span
          }}
        >
          {/* Enhanced overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 transition-opacity duration-300 w-full"></div>
          
          {/* Subtle decorative elements that won't interfere with the photo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-white/20"></div>
            <div className="absolute bottom-32 right-12 w-16 h-16 rounded-full border border-white/15"></div>
            <div className="absolute top-1/3 right-8 w-12 h-12 rounded-full border border-white/10"></div>
            <div className="absolute bottom-1/3 left-8 w-24 h-24 rounded-full border border-white/15"></div>
          </div>

          <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center text-white">
            {/* Main Content Section */}
            <div className="relative text-center mb-32">
              {/* Elegant backdrop for text readability */}
              <div className="absolute -inset-8 bg-gradient-to-br from-white/15 to-white/5 rounded-3xl  shadow-2xl"></div>

              <div className="relative z-10 py-8">
                {/* Header with decorative elements */}
                {/* <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/60"></div>
                  <div className="mx-3 w-2 h-2 rounded-full bg-white/70"></div>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/60"></div>
                </div> */}

                <h2
                  className="font-serif text-sm tracking-widest font-light text-white/90 mb-8"
                  style={{ letterSpacing: "4px" }}
                >
                  {data?.opening?.text_title || "The Wedding Of"}
                </h2>

                {/* Names with elegant styling */}
                <div className="text-3xl md:text-4xl font-cursive my-8 font-normal text-center">
                  <h4 className="text-white drop-shadow-lg" style={{ fontFamily: "cursive" }}>
                     {data?.man} & {data?.woman}
                  </h4>
                </div>

                <h2
                  className="font-serif text-sm tracking-widest font-light text-white/90"
                  style={{ letterSpacing: "4px" }}
                >
                  {data?.metadata?.description}
                </h2>

                {/* Bottom decorative elements */}
                {/* <div className="flex items-center justify-center mt-6">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/60"></div>
                  <div className="mx-2 w-1.5 h-1.5 rounded-full bg-white/60"></div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/60"></div>
                </div> */}
              </div>
            </div>

            {/* Invitation Section */}
            <div className="relative text-center">
              {/* Elegant backdrop for invitation */}
              <div className="absolute -inset-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/15 shadow-xl"></div>
              
              <div className="relative z-10 py-6">
                {/* Decorative line above */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-6 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                  <div className="mx-2 w-1 h-1 rounded-full bg-white/50"></div>
                  <div className="w-6 h-px bg-gradient-to-l from-transparent to-white/50"></div>
                </div>

                <p className="text-white/90 text-sm font-serif tracking-wide drop-shadow-lg">
                  Kepada Yth.
                </p>
                <p className="text-white text-2xl md:text-3xl mt-3 font-serif drop-shadow-lg" style={{ fontFamily: "serif" }}>
                  {formatInvitationName(toParam)}
                </p>

                {/* Decorative line below */}
                <div className="flex items-center justify-center mt-4">
                  <div className="w-6 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                  <div className="mx-2 w-1 h-1 rounded-full bg-white/50"></div>
                  <div className="w-6 h-px bg-gradient-to-l from-transparent to-white/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-10 md:col-span-3 h-screen">{children}</div>
    </div>
  );
};

export default WrapperLayout;
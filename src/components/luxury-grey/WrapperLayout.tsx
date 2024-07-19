import { formatInvitationName } from "@/helpers/formatInvitationName";
import Aos from "aos";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
            width: "calc(70% )", // Adjust to match the grid column span
          }}
        >
          <div className="absolute inset-0   bg-black opacity-30 transition-opacity duration-300 w-full"></div>
          <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center text-white">
            <h2
              className="font-poppins text-xs tracking-widest font-semibold"
              style={{ letterSpacing: "4px" }}
            >
              The Wedding Of
            </h2>
            <h4 className="text-3xl md:text-4xl font-dancingScript my-8 font-extralight">
              {data?.opening?.couple_name}
            </h4>
            <h2
              className="font-poppins text-xs tracking-widest font-semibold"
              style={{ letterSpacing: "4px" }}
            >
              {data?.metadata?.description}
            </h2>

            <div className="mt-32 text-center">
              <p className="text-white text-xs font-poppins">Kepada Yth.</p>
              <p className="text-white text-3xl mt-2 font-playFair">
                {formatInvitationName(toParam)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-10 md:col-span-3 h-screen ">{children}</div>
    </div>
  );
};

export default WrapperLayout;

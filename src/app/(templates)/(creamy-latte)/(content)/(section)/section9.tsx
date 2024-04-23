import { Data } from "@/interfaces/dataInterfaces";
import { urlWA } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import useResizeFont from "@/hooks/useResize";

export default function Section9({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();
  const [showBackground, setShowBackground] = useState(false);

  function handleCheckScroll(doc: HTMLElement | null) {
    if (doc?.offsetTop && !showBackground && window.scrollY > doc?.offsetTop) {
      // console.log(
      //   "Scroll position:",
      //   window.scrollY,
      //   doc?.offsetTop,
      //   showBackground
      // );
      setShowBackground(true);
    } else if (
      doc?.offsetTop &&
      showBackground &&
      window.scrollY < doc?.offsetTop
    ) {
      setShowBackground(false);
    }
  }

  // console.log("BACK", showBackground);

  useEffect(() => {
    const doc = document.getElementById("section7");

    // Function to handle scroll event
    const handleScroll = () => {
      // Log the scroll position
      handleCheckScroll(doc);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={
        {
          // backgroundImage: `url("${
          //   windowWidth > 900
          //     ? data.section9.theme?.background || "/bg-section1.webp"
          //     : data.section9.theme?.background_mobile ||
          //       "/images/bg-section1-mobile.webp"
          // }")`,
          // backgroundColor: "white",
          // backgroundSize: "auto 100vh",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          // zIndex: 0,
        }
      }
      className="relative w-full h-screen flex flex-col  justify-center content-center text-center items-center font-JosefinSans box-border"
    >
      <div
        style={{
          display: showBackground ? "block" : "none",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: "-9",
          bottom: 0,
          backgroundImage: `url("${
            windowWidth > 900
              ? data.section9.theme?.background || "/bg-section1.webp"
              : data.section9.theme?.background_mobile ||
                "/images/bg-section1-mobile.webp"
          }")`,
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  bg-black opacity-30 transition-opacity duration-300"></div>
      </div>
      <div className="relative flex flex-col  justify-center items-center">
        <div
          style={{
            color: "#efefef",
            fontSize: resizeList(20, [
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
          }}
          className="mx-16 lg:mx-[300px]"
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: data.section9.text_gratitude }}
        ></div>
        <div
          style={{
            color: "white",
            fontSize: "15px",
          }}
          data-aos="fade-up"
        >
          {data.section9.text_regards}
        </div>
        <div
          style={{
            marginTop: "30px",
            // color: "#85875F",
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
          data-aos="fade-up"
        >
          {data.section9.couples}
        </div>
        {/* <div
        style={{
          color: "#F5EACF",
          marginTop: "30px",
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
      >
        The Big Family
      </div> */}

        {/* <div
        style={{
          color: "white",
          marginTop: "30px",
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
      >
        Lord {ayahMempelaiPria} & Lady {ibuMempelaiPria}
      </div> */}
        {/* <div
        style={{
          color: "white",
          marginTop: "10px",
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
      >
        Lord {ayahMempelaiWanita} & Lady {ibuMempelaiWanita}
      </div> */}
        <img
          src={data.section9.vendor?.picture || "/logo.png"}
          alt="logo"
          style={{
            // aspectRatio: "1:1",
            borderRadius: 10,
            width: "80px",
            marginTop: "30px",
            // mixBlendMode: "color-burn",
            // backgroundColor: "transparent",
            // borderRadius: "50%",
          }}
          data-aos="flip-right"
        />
        <div
          style={{
            color: "white",
            marginTop: "10px",
            fontSize: resizeList(15, [
              {
                width: 450,
                decreasePercent: 40,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
          }}
          data-aos="zoom-in"
        >
          {data.section9.vendor?.name || "Family Invitation"}
        </div>
        {!data.section9.vendor && (
          <div
            style={{ display: "flex", marginTop: "20px", gap: "10px" }}
            data-aos="zoom-in"
          >
            <Link href={urlWA + "6289516789565"} target="_blank">
              <FaWhatsapp size={30} color="white" />
            </Link>
            <Link
              href="https://www.instagram.com/familyinvitation_/"
              target="_blank"
            >
              <FaInstagram size={30} color="white" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

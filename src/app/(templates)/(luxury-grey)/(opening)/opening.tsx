import React, {
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
  useLayoutEffect,
} from "react";
import { FaQrcode, FaHeart } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { NextPage } from "next";
import { formatInvitationName } from "@/helpers/formatInvitationName";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [windowHeight, setWindowHeight] = useState(0);
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
      setWindowHeight(window.innerHeight);
    }

    f();

    window.addEventListener("resize", f);

    setLoaded(true);

    return () => window.removeEventListener("resize", f);
  }, []);

  useLayoutEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [showContent]);

  useEffect(() => {
    const body = document.body;

    if (showContent) {
      setShowOpening(false);
      scroll("content");
    } else {
    }
  }, [showContent]);

  return (
    <div
      id="opening"
      className="w-full mx-auto h-screen relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('${
          windowWidth > 900
            ? data.opening.theme?.background || "/bg-section1.webp"
            : data.opening.theme?.background_mobile ||
              "/images/bg-section1-mobile.webp"
        }')`,
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

      <div
        className="w-full h-full relative px-8 py-[4vh] md:py-[4vh] overflow-hidden flex flex-col justify-center items-center text-white"
        data-aos="fade-up"
      >
        {/* Main Content Section */}
        <div className="relative text-center mb-8">
          {/* Elegant backdrop for text readability */}
          <div className="absolute -inset-8 bg-gradient-to-br from-white/15 to-white/5  shadow-2xl"></div>

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
              {/* Desktop version - single line */}
              <h4
                className="text-white drop-shadow-lg md:block hidden"
                style={{ fontFamily: "cursive" }}
              >
                {data?.opening?.couple_name}
              </h4>

              {/* Mobile version - separate lines with heart */}
              <div
                className="md:hidden block"
                style={{ fontFamily: "cursive" }}
              >
                <h4 className="text-white drop-shadow-lg">{data?.man}</h4>
                <div className="flex items-center justify-center my-4">
                  <div className="w-8 h-px bg-white/60"></div>
                  <FaHeart className="mx-3 text-red-300 text-xl animate-pulse drop-shadow-lg" />
                  <div className="w-8 h-px bg-white/60"></div>
                </div>
                <h4 className="text-white drop-shadow-lg">{data?.woman}</h4>
              </div>
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
        <div
          className="flex flex-col justify-center items-center relative"
          style={{ marginTop: (windowHeight / 100) * 6 }}
        >
          {/* Elegant backdrop for invitation */}
          <div className="absolute -inset-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/15 shadow-xl"></div>

          <div className="relative z-10 text-center py-6">
            {/* Decorative line above */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-px bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="mx-2 w-1 h-1 rounded-full bg-white/50"></div>
              <div className="w-6 h-px bg-gradient-to-l from-transparent to-white/50"></div>
            </div>

            <p className="text-white/90 text-sm font-serif tracking-wide drop-shadow-lg">
              Kepada Yth.
            </p>
            <p
              className="text-white text-2xl md:text-3xl mt-3 mb-6 font-serif drop-shadow-lg"
              style={{ fontFamily: "serif" }}
            >
              {formatInvitationName(toParam)}
            </p>

            {/* Enhanced button */}
            <button
              className="group relative overflow-hidden bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm text-white text-sm py-3 px-6 rounded-2xl font-sans border border-white/30 shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-opacity-50 transition-all duration-300"
              onClick={() => setShowContent(true)}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative flex items-center justify-center space-x-2">
                <MdEmail className="w-4 h-4 drop-shadow-lg" />
                <span className="tracking-wide drop-shadow-lg">
                  Open Invitation
                </span>
              </div>
            </button>

            {/* Decorative line below */}
            <div className="flex items-center justify-center mt-6">
              <div className="w-6 h-px bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="mx-2 w-1 h-1 rounded-full bg-white/50"></div>
              <div className="w-6 h-px bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default opening;

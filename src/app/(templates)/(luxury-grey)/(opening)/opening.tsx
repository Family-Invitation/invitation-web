import React, {
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
  useLayoutEffect,
} from "react";
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

    return () => window.removeEventListener("resize", f);
  }, []);

  useLayoutEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed"; // Prevent scroll bar from appearing
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = ""; // Prevent scroll bar from appearing
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = ""; // Prevent scroll bar from appearing
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

  // const bgUrl = data?.opening?.couple_picture;

  // console.log({ bgUrl });

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
      <div
        className={`w-full h-full relative px-8 py-28 md:py-28 overflow-hidden flex flex-col items-center text-white `}
        data-aos="fade-up"
      >
        <h2
          className="font-poppins text-xs tracking-widest font-semibold"
          style={{ letterSpacing: "4px" }}
        >
          The Wedding Of
        </h2>
        <h4 className=" text-3xl md:text-4xl font-dancingScript my-8 font-normal md:block hidden">
          {data?.opening?.couple_name}
        </h4>
        <div className=" text-3xl md:text-4xl font-dancingScript my-8 font-normal md:hidden block text-center">
          <h4>{data?.man} </h4>
          <h4 className="my-2">&</h4>
          <h4>{data?.woman}</h4>
        </div>
        <h2
          className="font-poppins text-xs tracking-widest font-semibold"
          style={{ letterSpacing: "4px" }}
        >
          {data?.metadata?.description}
        </h2>

        <div className="mt-[200px] flex flex-col justify-center items-center">
          <p className="text-white text-xs font-poppins">Kepada Yth.</p>
          <p className="text-white text-3xl mt-2 font-playFair">
            {" "}
            {formatInvitationName(toParam)}
          </p>
          <button
            className="flex items-center justify-center space-x-2 mt-6 bg-gray-800 text-white  text-sm py-2 px-4 rounded-xl font-poppins border border-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            onClick={() => setShowContent(true)}
          >
            <MdEmail className="w-4 h-4" />
            <span>Open Invitation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default opening;

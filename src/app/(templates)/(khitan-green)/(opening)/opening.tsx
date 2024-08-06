import React, {
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
  useLayoutEffect,
} from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { NextPage } from "next";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { formatInvitationName } from "@/helpers/formatInvitationName";
import { MdEmail } from "react-icons/md";

type Props = {
  showOpening: boolean;
  showContent: boolean;
  setShowOpening: Dispatch<SetStateAction<boolean>>;
  setShowContent: Dispatch<SetStateAction<boolean>>;
  data: any;
};

const Opening: NextPage<Props> = ({
  showOpening,
  showContent,
  setShowOpening,
  setShowContent,
  data,
}: Props) => {
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

  return (
    <div
      id="opening"
      className="bg-cover max-w-3xl text-center bg-fixed h-screen w-full relative"
      style={{
        backgroundImage: `url("/images/khitan-green/green-bg-islamic-scaled.jpg")`,
        backgroundPosition: "bottom center",
      }}
    >
      <img
        className="absolute -top-2 left-0 h-[150px] w-[140px] z-10"
        src="/images/khitan-green/decoration-left.png"
        alt=""
        data-aos="fade-down"
      />
      <img
        className="absolute -top-2 right-0 h-[150px] w-[150px] z-10"
        src="/images/khitan-green/decoration-right.png"
        alt=""
        data-aos="fade-down"
      />
      <div
        className="flex flex-col h-full justify-center items-center font-crimsonPro mx-4 md:mx-10"
        data-aos="fade-up"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661277731403-f5f8f237ae2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover h-[150px] aspect-square rounded-full "
        />
        <h4 className="text-lg text-[#FFCB58] mt-4">Undangan</h4>
        <h2 className="text-3xl font-dancingScript text-[#FFCB58] my-2">
          Walimatul Khitan Romeo
        </h2>
        <h3 className="text-[#FFCB58] text-2xl">10 Juni 2023</h3>
        <p className="text-[#FFCB58] text-base mt-6">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>
        <h3 className="text-white text-2xl my-4">
          {formatInvitationName(toParam)}
        </h3>
        <p className="text-[#FFCB58] text-base">
          Kami mengundang Anda untuk dapat hadir dalam acara kami
        </p>
        <button
          className="flex items-center justify-center space-x-2 mt-6 bg-[#FFCB58] text-[#5C4C28]  text-sm py-2 px-4 rounded-xl font-poppins"
          onClick={() => setShowContent(true)}
        >
          <MdEmail className="w-4 h-4" />
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  );
};

export default Opening;

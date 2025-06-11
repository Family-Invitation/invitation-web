import React, { useEffect, useState } from "react";
import { FaHeart, FaCalendarAlt } from "react-icons/fa";
import { formatDate } from "@/helpers/formatDate";
import { calculateTimeLeft } from "@/helpers/calculateTimeLeft";

type Props = {};

// Define the props type for DateItem
type DateItemProps = {
  value: number;
  text: string;
};

const DateItem = ({ value, text }: DateItemProps) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 text-center text-white shadow-2xl shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:border-white/30">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight drop-shadow-lg">
            {value}
          </span>
          <span className="text-xs md:text-sm font-sans uppercase tracking-wider mt-1 opacity-90">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

const Section1 = ({ data }: Readonly<any>) => {
  const targetDate = new Date(data.section3?.date).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div
      className="max-h-screen w-full mx-auto relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${data.section1.theme?.background_mobile}')`,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white/20"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full border border-white/20"></div>
      </div>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

      <div className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-white px-6 py-12">
        {/* Main content container */}
        <div className="max-w-lg w-full text-center space-y-8 relative z-10">
          {/* Title section with enhanced styling */}
          <div className="space-y-10" data-aos="fade-up">
            {/* Decorative top element */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
              <FaHeart className="mx-4 text-white/60 text-xl animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
            </div>

            <h2
              className="text-white text-lg md:text-xl font-serif tracking-[0.3em] font-light uppercase drop-shadow-lg"
              style={{ letterSpacing: "4px" }}
            >
              {data?.section1.text_title || "The Wedding Of"}
            </h2>

            {/* Names with glassmorphism background */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 shadow-2xl shadow-black/30 mt-10">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>

              <div className="space-y-4">
                <h1 className="text-2xl font-serif font-light text-white leading-tight drop-shadow-lg">
                  {data?.man}
                </h1>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                  <span className="text-2xl font-serif text-white/90 font-light">
                    &
                  </span>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                </div>
                <h1 className="text-2xl  font-serif font-light text-white leading-tight drop-shadow-lg">
                  {data?.woman}
                </h1>
              </div>
            </div>

            {/* Description with enhanced styling */}
            <div className="max-w-md mx-auto">
              <p className="text-white/90 font-sans text-center text-sm leading-relaxed bg-white/5  border border-white/10 px-6 py-3 rounded-2xl tracking-wide">
                {data?.metadata?.description}
              </p>
            </div>
          </div>

          {/* Quranic verse with enhanced styling */}
          <div
            className="space-y-4 max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* <div className="flex items-center justify-center">
              <div className="w-12 h-px bg-white/40"></div>
              <div className="mx-3 w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-12 h-px bg-white/40"></div>
            </div> */}

            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-6 shadow-2xl shadow-black/30">
              <blockquote className="text-sm font-serif leading-relaxed text-white/95 italic font-light text-center">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang."
              </blockquote>

              <div className="flex items-center justify-center mt-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/40"></div>
                <div className="mx-2 w-1 h-1 rounded-full bg-white/60"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/40"></div>
              </div>

              <cite className="text-xs font-sans text-white/80 font-normal tracking-wider mt-3 block text-center">
                Q.S. Ar-Rum : 21
              </cite>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        {/* <div
          className="mt-12 flex items-center justify-center opacity-60"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="w-16 h-px bg-white/40"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-16 h-px bg-white/40"></div>
        </div> */}

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-8 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-12 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Section1;

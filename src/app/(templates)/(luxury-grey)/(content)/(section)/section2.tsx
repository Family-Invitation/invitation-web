import React from "react";
import { FaInstagram, FaHeart } from "react-icons/fa";

const section2 = ({ data }: Readonly<any>) => {
  return (
    <div
      className="flex flex-col justify-center items-center py-12 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(180deg, #404747 0%, #3A3E3E 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white/20"></div>
      </div>

      {/* Enhanced Title Section */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
          <FaHeart className="mx-4 text-white/60 text-xl animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
        </div>

        <h2
          className="text-white text-3xl md:text-4xl font-serif mb-4 tracking-wide"
          data-aos="fade-up"
        >
          {data?.section2.text_title || "Our Wedding"}
        </h2>

        <div className="max-w-md mx-auto">
          <h4
            className="text-white/90 font-serif text-center text-sm leading-relaxed italic px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang
            Bapak/Ibu/Saudara/I untuk menghadiri acara Pernikahan kami
          </h4>
        </div>
      </div>

      {/* Enhanced Groom Card */}
      <div
        className="mt-8 px-2 h-full w-full max-w-md"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-tr-[36px] blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>

          <div className="relative flex w-full h-full shadow-2xl shadow-black/50 rounded-tr-[32px] overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            {/* Groom Label */}
            <div
              className="w-1/5 relative"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #A19788 0%, #2C3333 70%)",
              }}
            >
              <div className="flex justify-center items-center h-full relative">
                <div className="rotate-90 text-white text-3xl md:text-4xl font-serif tracking-widest drop-shadow-lg">
                  GROOM
                </div>
              </div>
              {/* Decorative line */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-px bg-white/30"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-px bg-white/30"></div>
            </div>

            {/* Groom Image */}
            <div
              className="w-4/5 relative h-[350px] rounded-tr-[32px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${data?.section2?.man?.picture}')`,
              }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Groom Info Card - Separated */}
        <div className="mt-6 px-4" data-aos="fade-up" data-aos-delay="400">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 text-center text-white shadow-2xl shadow-black/30 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/30">
            {/* Decorative top accent */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-6 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>

            <div className="relative z-10">
              <h4 className="text-2xl font-sans font-bold mb-3 tracking-wide text-white drop-shadow-lg">
                {data?.section2?.man?.name}
              </h4>

              {/* Decorative line under name */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/40"></div>
                <div className="mx-2 w-1 h-1 rounded-full bg-white/60"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/40"></div>
              </div>

              <div className="text-sm font-sans text-white/90 leading-relaxed mb-5 bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
                <span className="block text-white/70 text-xs uppercase tracking-wider mb-1">
                  {data?.section2?.man?.text_son_of}
                </span>
                <div className="font-medium text-base">
                  <span className="text-white">{data?.section2?.man?.dad}</span>
                  <span className="mx-2 text-white/60">&</span>
                  <span className="text-white">{data?.section2?.man?.mom}</span>
                </div>
              </div>

              {data?.section2?.man?.social_media?.instagram?.enabled && (
                <div className="flex justify-center items-center">
                  <a
                    href={data?.section2?.man?.social_media?.instagram?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-700 hover:to-pink-700 py-3 px-6 rounded-2xl font-medium text-sm transition-all duration-300 transform hover:scale-110 shadow-xl backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-sm group-hover/btn:blur-md transition-all duration-300"></div>
                    <FaInstagram className="mr-3 text-lg relative z-10" />
                    <span className="relative z-10 font-medium">
                      {data?.section2?.man?.name}
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Couple Names */}
      <div
        className="text-white mt-8 mb-8 font-cursive text-center text-4xl md:text-5xl relative z-10"
        data-aos="zoom-in"
        data-aos-delay="500"
        style={{ fontFamily: "cursive" }}
      >
        <div className="flex items-center justify-center">
          <div className="mx-6 flex items-center">
            <div className="w-8 h-px bg-white/60"></div>
            <FaHeart className="mx-3 text-red-400 text-2xl animate-pulse" />
            <div className="w-8 h-px bg-white/60"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bride Card */}
      <div
        className="px-2 h-full w-full max-w-md"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-l from-white/10 to-white/5 rounded-tl-[36px] blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>

          <div className="relative flex w-full h-full shadow-2xl shadow-black/50 rounded-tl-[32px] overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            {/* Bride Image */}
            <div
              className="w-4/5 relative h-[350px] rounded-tl-[32px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${data?.section2?.woman?.picture}')`,
              }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Bride Label */}
            <div
              className="w-1/5 relative"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #A19788 0%, #2C3333 70%)",
              }}
            >
              <div className="flex justify-center items-center h-full relative">
                <div className="rotate-90 text-white text-3xl md:text-4xl font-serif tracking-widest drop-shadow-lg">
                  BRIDE
                </div>
              </div>
              {/* Decorative line */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-px bg-white/30"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-px bg-white/30"></div>
            </div>
          </div>
        </div>

        {/* Bride Info Card - Separated */}
        <div className="mt-6 px-4" data-aos="fade-up" data-aos-delay="700">
          <div className="relative bg-gradient-to-bl from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 text-center text-white shadow-2xl shadow-black/30 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/30">
            {/* Decorative top accent */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-6 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>

            <div className="relative z-10">
              <h4 className="text-2xl font-sans font-bold mb-3 tracking-wide text-white drop-shadow-lg">
                {data?.section2?.woman?.name}
              </h4>

              {/* Decorative line under name */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/40"></div>
                <div className="mx-2 w-1 h-1 rounded-full bg-white/60"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/40"></div>
              </div>

              <div className="text-sm font-sans text-white/90 leading-relaxed mb-5 bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
                <span className="block text-white/70 text-xs uppercase tracking-wider mb-1">
                  {data?.section2?.woman?.text_daughter_of}
                </span>
                <div className="font-medium text-base">
                  <span className="text-white">
                    {data?.section2?.woman?.dad}
                  </span>
                  <span className="mx-2 text-white/60">&</span>
                  <span className="text-white">
                    {data?.section2?.woman?.mom}
                  </span>
                </div>
              </div>

              {data?.section2?.woman?.social_media?.instagram?.enabled && (
                <div className="flex justify-center items-center">
                  <a
                    href={data?.section2?.woman?.social_media?.instagram?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-700 hover:to-pink-700 py-3 px-6 rounded-2xl font-medium text-sm transition-all duration-300 transform hover:scale-110 shadow-xl backdrop-blur-sm border border-white/10 hover:border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-sm group-hover/btn:blur-md transition-all duration-300"></div>
                    <FaInstagram className="mr-3 text-lg relative z-10" />
                    <span className="relative z-10 font-medium">
                      {data?.section2?.woman?.name}
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div
        className="mt-12 flex items-center justify-center opacity-60"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="w-12 h-px bg-white/40"></div>
        <div className="mx-3 w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-12 h-px bg-white/40"></div>
      </div>
    </div>
  );
};

export default section2;

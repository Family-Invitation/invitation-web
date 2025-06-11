import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaHeart } from "react-icons/fa";
import { assetsUrl, urlWA } from "@/lib/constants";

type Props = {};

const section9 = ({ data }: Readonly<any>) => {
  return (
    <div
      className="flex justify-center items-center flex-col h-full w-full bg-center bg-no-repeat bg-cover relative min-h-screen"
      style={{
        backgroundImage: `url("${data?.section9.theme.background_mobile}")`,
      }}
    >
      {/* Enhanced overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 transition-opacity duration-300 w-full"></div>

      {/* Subtle decorative elements that won't interfere with the photo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-white/20"></div>
        <div className="absolute bottom-32 right-12 w-16 h-16 rounded-full border border-white/15"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 rounded-full border border-white/10"></div>
        <div className="absolute bottom-1/3 left-8 w-24 h-24 rounded-full border border-white/15"></div>
      </div>

      <div className="w-full h-full relative px-8 overflow-hidden flex flex-col items-center justify-center text-white">
        {/* Main Content Section */}
        <div className="relative text-center mb-12" data-aos="zoom-in">
          {/* Elegant backdrop for text readability */}
          <div className="absolute -inset-8 bg-gradient-to-br from-white/10 to-white/5  rounded-3xl border border-white/20 shadow-2xl"></div>

          <div className="relative z-10 py-8">
            {/* Header with decorative elements */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="mx-3 w-2 h-2 rounded-full bg-white/70"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/60"></div>
            </div>

            <h2
              className="font-serif text-sm tracking-widest font-light text-white/90 mb-8"
              style={{ letterSpacing: "4px" }}
            >
              {data?.section9.text_title || "The Wedding Of"}
            </h2>

            {/* Names with elegant styling */}
            <div
              className="text-3xl md:text-4xl font-cursive my-8 font-normal text-center"
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

            <h2
              className="font-serif text-sm tracking-widest font-light text-white/90"
              style={{ letterSpacing: "4px" }}
            >
              {data?.metadata?.description}
            </h2>

            {/* Bottom decorative elements */}
            <div className="flex items-center justify-center mt-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="mx-2 w-1.5 h-1.5 rounded-full bg-white/60"></div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>
        </div>

        {/* Thank you message */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative">
            <p className="relative text-white/90 text-sm font-sans px-6 py-4 leading-relaxed tracking-wide drop-shadow-lg">
              Atas kehadiran dan doa restunya kami ucapkan terimakasih.
            </p>
          </div>
        </div>

        {/* Vendor/Credits Section */}
        <div
          className="absolute bottom-8 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo and Social Media Container */}
            {data.section9.vendor?.picture ? (
              // If vendor logo exists, show only logo
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                <div
                  className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/30 shadow-xl cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    if (data.section9.vendor?.url) {
                      window.open(data.section9.vendor.url, "_blank");
                    }
                  }}
                >
                  <img
                    src={data.section9.vendor.picture}
                    alt="logo"
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>
              </div>
            ) : (
              // If no vendor logo, show default logo with social media side by side
              <div className="flex items-center justify-center space-x-6">
                {/* Default Logo */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/30 shadow-xl hover:scale-105 transition-all duration-300">
                    <img
                      src={assetsUrl + "/logo-brown.png"}
                      alt="logo"
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Social Media Links - Side by side with logo */}
                <div className="flex items-center space-x-3">
                  <Link href={urlWA + "6289516789565"} target="_blank">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full p-3 border border-white/30 shadow-xl hover:scale-110 transition-all duration-300">
                        <FaWhatsapp
                          size={18}
                          className="text-green-400 drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/familyinvitation_/"
                    target="_blank"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full p-3 border border-white/30 shadow-xl hover:scale-110 transition-all duration-300">
                        <FaInstagram
                          size={18}
                          className="text-pink-400 drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {/* Vendor name (if exists) */}
            {data.section9.vendor?.name && (
              <div className="text-white/80 mt-3 text-xs font-sans tracking-wide drop-shadow-lg text-center">
                {data.section9.vendor.name}
              </div>
            )}

            {/* Default vendor name (if no custom vendor) */}
            {!data.section9.vendor?.name && (
              <div className="text-white/80 mt-3 text-xs font-sans tracking-wide drop-shadow-lg text-center">
                Family Invitation
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default section9;

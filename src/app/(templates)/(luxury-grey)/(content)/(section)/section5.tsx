import React from "react";
import MomentGallery from "@/components/luxury-grey/MomentGallery";
import YoutubeVideo from "@/components/YoutubeVideo";
import { FaHeart, FaCamera } from "react-icons/fa";

type Props = {};

const section5 = ({ data }: Readonly<any>) => {
  return (
    <div 
      className="flex justify-center items-center flex-col px-5 py-16 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, #2C3333 0%, #1a1f1f 50%, #2C3333 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-white/20"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 rounded-full border border-white/20"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-white/20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 rounded-full border border-white/15"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10" data-aos="zoom-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
          <FaCamera className="mx-4 text-white/60 text-2xl animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
        </div>
        <h2 className="font-serif text-white text-3xl md:text-4xl font-light tracking-wide mb-2">
          MOMENT
        </h2>
        <h2 className="text-white/80 text-2xl font-cursive tracking-wider" style={{ fontFamily: 'cursive' }}>
          Gallery
        </h2>
      </div>

      {/* Gallery Component */}
      <div className="w-full max-w-6xl relative z-10">
        <MomentGallery data={data} />
      </div>

      {/* Bottom decorative element */}
      {/* <div className="flex items-center justify-center mt-16 opacity-70 relative z-10">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
        <FaHeart className="mx-4 text-red-400 text-3xl animate-pulse drop-shadow-lg" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
      </div> */}
    </div>
  );
};

export default section5;
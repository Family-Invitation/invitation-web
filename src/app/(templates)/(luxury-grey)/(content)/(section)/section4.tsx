import React, { useEffect } from "react";
import { FaHeart, FaRing, FaStar } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";

const Section4 = ({ data }: Readonly<any>) => {
  function generateIconByIcon(title: string) {
    const iconProps = "w-6 h-6 drop-shadow-lg";
    switch (title.toLowerCase()) {
      case "heart":
        return <FaHeart className={`${iconProps} text-red-400`} />;
      case "ring":
        return <FaRing className={`${iconProps} text-amber-400`} />;
      case "man_woman":
        return <ImManWoman className={`${iconProps} text-blue-400`} />;
      default:
        return <MdOutlineDateRange className={`${iconProps} text-purple-400`} />;
    }
  }

  return data?.section4?.stories?.length ? (
    <div 
      className="flex justify-center items-center flex-col px-5 py-16 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-gray-400/30"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 rounded-full border border-gray-400/30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-gray-400/30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border border-gray-400/20"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10" data-aos="zoom-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400/60"></div>
          <FaHeart className="mx-4 text-red-400/70 text-2xl animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400/60"></div>
        </div>
        <h2 className="font-serif text-gray-800 text-3xl md:text-4xl font-light tracking-wide mb-2">
          LOVE
        </h2>
        <h2 className="text-gray-600 text-2xl font-cursive tracking-wider" style={{ fontFamily: 'cursive' }}>
          Story
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="w-full max-w-4xl flex flex-col items-center relative z-10">
        {data.section4.stories.map((step: any, index: number, arr: any) => (
          <div 
            key={index} 
            className={`w-full grid grid-cols-6 gap-8 mb-12 group ${
              index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse'
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            {/* Timeline Icon Column */}
            <div className={`col-span-1 flex flex-col items-center relative ${
              index % 2 === 0 ? '' : 'md:order-2'
            }`}>
              {/* Glow effect for icon */}
              <div className="absolute inset-0 bg-white/50 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 w-16 h-16 -top-2 -left-2"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-4 rounded-full shadow-2xl shadow-gray-400/30 z-10 mb-6 border-2 border-white transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  {generateIconByIcon(step.icon)}
                </div>
              </div>
              
              {/* Timeline Line */}
              {index < arr.length - 1 && (
                <div className="flex-1 w-0.5 bg-gradient-to-b from-gray-300 via-gray-200 to-transparent relative min-h-[120px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-400/50 to-transparent w-full rounded-full blur-sm"></div>
                </div>
              )}
            </div>

            {/* Content Card Column */}
            <div className={`col-span-5 relative group/card ${
              index % 2 === 0 ? '' : 'md:order-1'
            }`}>
              {/* Card glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-white/50 to-gray-100/50 rounded-3xl blur-lg opacity-60 group-hover/card:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 border border-white/50 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[280px] object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Decorative corner elements on image */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/60 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/60 rounded-tr-lg"></div>
                </div>

                {/* Content Container */}
                <div className="p-8 relative">
                  {/* Decorative corner elements */}
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-l-2 border-b-2 border-gray-300/60 rounded-bl-lg"></div>
                  <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-gray-300/60 rounded-br-lg"></div>
                  
                  {/* Date Badge */}
                  <div className="flex justify-start mb-6">
                    <div className="relative group/badge">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur-sm"></div>
                      <div className="relative bg-gradient-to-r from-gray-100 to-white px-6 py-3 rounded-2xl border border-gray-200/80 shadow-lg">
                        <h4 className="font-sans text-gray-700 text-sm font-medium tracking-wide">
                          {step.date}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-gray-800 text-3xl md:text-4xl font-light mb-6 leading-tight tracking-wide">
                    {step.title}
                  </h4>

                  {/* Decorative divider */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
                    <div className="mx-3 w-2 h-2 rounded-full bg-gray-400"></div>
                    <div className="w-12 h-px bg-gradient-to-l from-gray-400 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-gray-50/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60">
                    <h4
                      className="text-gray-600 font-sans text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: step.content.replaceAll("\n", "<br>"),
                      }}
                    ></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative element */}
      {/* <div className="flex items-center justify-center mt-12 opacity-70">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400/60"></div>
        <FaHeart className="mx-4 text-red-400 text-3xl animate-pulse drop-shadow-lg" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400/60"></div>
      </div> */}
    </div>
  ) : (
    <></>
  );
};

export default Section4;
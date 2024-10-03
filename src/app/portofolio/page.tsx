"use client";
import Wrapper from "@/components/Wrapper";
import "../globals.css";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("terbaru");

  const cardItems = [
    {
      image: "/back-cover.jpg",
      groomName: "Yanto",
      brideName: "Yanti",
      date: "10 Desember 2022",
    },
    {
      image: "/back-cover.jpg",
      groomName: "Rahmat",
      brideName: "Salsa",
      date: "10 Desember 2023",
    },
    {
      image: "/back-cover.jpg",
      groomName: "Budi",
      brideName: "Yanti",
      date: "10 Desember 2021",
    },
    {
      image: "/back-cover.jpg",
      groomName: "Dono",
      brideName: "Siska",
      date: "20 Desember 2022",
    },
    {
      image: "/back-cover.jpg",
      groomName: "Burhan",
      brideName: "Amel",
      date: "11 Desember 202",
    },
    // Tambahkan lebih banyak card sesuai kebutuhan
  ];
  return (
    <Wrapper>
      <div
        className="relative h-[300px] md:h-[400px] px-4 md:px-12  bg-[#EEEDED] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, #FEE7F2 0%, rgba(254, 231, 242, 0.505) 62.5%, rgba(254, 231, 242, 0) 100%), url('/images/portofolio/hero.png')`,
        }}
      >
        <div className="flex items-center flex-col justify-center  text-center h-full">
          <h2 className="font-poppins text-[#DF1E9F] text-2xl md:text-5xl">
            Para Pasangan yang Merayakan bersama Kami
          </h2>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl py-12 mx-auto">
          {/* Tab Navigation */}
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "terbaru"
                  ? "border-b-2 border-[#FF477E] text-[#49516F] font-semibold text-lg"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("terbaru")}
            >
              Terbaru
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "populer"
                  ? "border-b-2 border-[#FF477E] text-[#49516F]  font-semibold text-lg"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("populer")}
            >
              Populer
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "terbaru" && (
              <div>
                <Carousel
                  responsive={responsive}
                  ssr={true} // server-side rendering
                  infinite={true}
                  autoPlay={false}
                  keyBoardControl={true}
                  customTransition="all .5"
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  swipeable
                  itemClass="flex justify-center items-center"
                >
                  {cardItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-[250px] h-[400px] bg-center bg-cover rounded-lg flex flex-col justify-center items-center text-white font-leckerliOn"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

                      {/* Content over the overlay */}
                      <div className="relative z-10 text-center mt-[230px]">
                        <p className="text-lg font-bold">{item.groomName}</p>
                        <p className="text-lg">&</p>
                        <p className="text-lg font-bold">{item.brideName}</p>
                        <p className="text-sm mt-2">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
            {activeTab === "populer" && (
              <div>
                <h2 className="text-xl font-semibold">Tema Populer</h2>
                {/* Content for "Populer" */}
                <p>Ini adalah daftar tema populer...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

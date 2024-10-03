"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

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

const InvitationHistory = (props: Props) => {
  const cardItems = [
    {
      image: "/back-cover.jpg",
      groomName: "Tono",
      brideName: "Zulia",
      date: "8 Desember 2024",
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
    <div className="bg-[#A21272] py-20 md:py-12 w-full text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#FEE7F2] text-3xl font-bold mb-8">
          Riwayat Undangan
        </h2>

        <Carousel
          responsive={responsive}
          ssr={true} // server-side rendering
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          containerClass="carousel-container"
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
    </div>
  );
};

export default InvitationHistory;

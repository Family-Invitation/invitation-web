"use client";
import React from "react";
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

const InvitationHistory = () => {
  const cardItems = [
    {
      image:
        "https://assets.familydecorative.com/file/thumbnail/febby-wildan.jpg",
    },
    {
      image: "https://assets.familydecorative.com/file/thumbnail/syifa-ary.jpg",
    },
    {
      image:
        "https://assets.familydecorative.com/file/thumbnail/mutiara-kosasih.jpg",
    },
    {
      image:
        "https://assets.familydecorative.com/file/thumbnail/rini-irvan.jpg",
    },
    {
      image:
        "https://assets.familydecorative.com/file/thumbnail/amanda-dimas.jpg",
    },
  ];

  return (
    <div className="bg-[#A21272] py-20 md:py-12 w-full text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#FEE7F2] text-3xl font-bold mb-8">
          Riwayat Undangan
        </h2>

        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          swipeable
          itemClass="flex justify-center items-center"
        >
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[400px] bg-center bg-cover rounded-lg flex flex-col justify-center items-center text-white font-leckerliOn transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InvitationHistory;

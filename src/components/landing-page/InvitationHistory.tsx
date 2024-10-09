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
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InvitationHistory;

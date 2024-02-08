"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimoni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataImages = [
    {
      id: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_1280.jpg",
      year: 2022,
      label: "Start Dating",
      name: "Jono & Jini",
    },
    {
      id: 2,
      imageUrl:
        "https://media.istockphoto.com/id/1190043570/id/foto/selamat-fotografi-pernikahan-calon-pengantin-di-upacara-pernikahan-tradisi-pernikahan-ditaburi.jpg?s=1024x1024&w=is&k=20&c=7ap4OxXVDIlff5tuUFJeY8apY_tJN1OkQFp_g24CNn4=",
      year: 2023,
      label: "Engagement",
      name: "Agus & Tuti",
    },
    {
      id: 3,
      imageUrl: "/images/bg-header.jpg",
      year: 2024,
      label: "Wedding",
      name: "Bambang & Bunga",
    },
    {
      id: 4,
      imageUrl:
        "https://media.istockphoto.com/id/1190043570/id/foto/selamat-fotografi-pernikahan-calon-pengantin-di-upacara-pernikahan-tradisi-pernikahan-ditaburi.jpg?s=1024x1024&w=is&k=20&c=7ap4OxXVDIlff5tuUFJeY8apY_tJN1OkQFp_g24CNn4=",
      year: 2025,
      label: "Family",
      name: "Abdul & Cika",
    },
    {
      id: 5,
      imageUrl: "/images/bg-header.jpg",
      year: 2026,
      label: "Special Moments",
      name: "Susilo & Rifa",
    },
    // Add more items as needed
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 20,
    },
  };

  return (
    <div className="bg-pink-100">
      <div className="max-w-7xl mx-4  md:mx-auto my-14 md:my-20 rounded-lg flex flex-col justify-center items-center w-auto  md:w-full ">
        <h2 className="w-full text-center  text-3xl md:text-5xl font-philosopher font-semibold tracking-wider text-pink-500">
          Apa Kata Mereka?
        </h2>
        <div className="w-full mt-8">
          <Carousel
            responsive={responsive}
            infinite
            containerClass="carousel-container"
            showDots={false}
            ssr
            keyBoardControl
            transitionDuration={500}
            beforeChange={(nextIndex) => setCurrentIndex(nextIndex)}
            itemClass="carousel-item"
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
            swipeable
            partialVisible
          >
            {dataImages.map((data, index) => (
              <div
                key={data?.id}
                className="flex justify-center items-center flex-col h-[400px] md:h-[500px] mr-0 md:mr-8"
              >
                <img
                  key={data?.id}
                  src={data.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4">
                  <div className="flex flex-col justify-center items-start p-4 bg-white  rounded-md bg-opacity-60 mx-4">
                    <div className="text-pink-500 font-semibold">
                      {data?.name}
                    </div>
                    <div className="text-xs mb-3 text-gray-800">
                      Sabtu, 10 Januari 2020
                    </div>
                    <div className="text-sm text-gray-900">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus vel facilis quos ipsam esse debitis,
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;

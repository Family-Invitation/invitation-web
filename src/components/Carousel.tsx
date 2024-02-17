// Carousel.tsx

import { ICarouselItem } from "@/interfaces/dataInterfaces";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ResponsiveCarousel = ({ stories }: { stories: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dataImages: ICarouselItem[] = [
    {
      id: 1,
      imageUrl: "https://placekitten.com/800/600",
      year: 2022,
      label: "Start Dating",
    },
    {
      id: 2,
      imageUrl: "https://placekitten.com/801/600",
      year: 2023,
      label: "Engagement",
    },
    {
      id: 3,
      imageUrl: "https://placekitten.com/802/600",
      year: 2024,
      label: "Wedding",
    },
    {
      id: 4,
      imageUrl: "https://placekitten.com/803/600",
      year: 2025,
      label: "Family",
    },
    {
      id: 5,
      imageUrl: "https://placekitten.com/804/600",
      year: 2026,
      label: "Special Moments",
    },
    // Add more items as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dataImages.length) % dataImages.length
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        marginTop: "30px",
      }}
    >
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
      >
        {stories.map((item: any) => (
          <div
            key={item?.date}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="p-8"
          >
            {/* <div
              style={{
                width: "100%",
                height: "50px",
                // backgroundColor: "white",
                marginBottom: "30px",
                color: "#8A594C",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                fontStyle: "italic",
                fontWeight: 600,
              }}
              className="font-josefinSan text-gray-800 text-2xl"
            >
              {item.title}
              <IoMdArrowDropdown
                color="white"
                size={26}
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  marginLeft: "5px",
                }}
              />
            </div> */}
            <div className="rounded-lg overflow-auto shadow-lg bg-white p-6 relative  h-[300px] rounded-bl-[50px] rounded-tr-[50px] w-full">
              <div
                style={{
                  width: "100%",
                  height: "50px",

                  color: "#8A594C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
                className="font-josefinSan text-gray-800 text-2xl md:mb-8 mb-4"
              >
                {item.title}
                {/* <IoMdArrowDropdown
                color="white"
                size={26}
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  marginLeft: "5px",
                }}
              /> */}
              </div>
              <p
                style={{ fontFamily: ` "Droid Serif", "Sans-serif"` }}
                className="text-gray-800 text-lg italic"
              >
                "{item?.content}"
              </p>
              <p className="font-cormorantGaramond text-gray-600 text-md mt-6 float-right">
                {item?.date}
              </p>
            </div>
            {/* <img
              key={item?.id}
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
              style={{
                width: "70%",
                objectFit: "cover",
                borderRadius: "50%",
                aspectRatio: "1/1",
              }}
            /> */}
            {/* <div
              style={{ color: "white", marginTop: "30px", fontSize: "30px" }}
              className="font-cormorantGaramond"
            >
              {item?.date}
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;

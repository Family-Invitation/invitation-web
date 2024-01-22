// Carousel.tsx

import { ICarouselItem } from "@/interfaces/dataInterfaces";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ResponsiveCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dataImages: ICarouselItem[] = [
    {
      imageUrl: "https://placekitten.com/800/600",
      year: 2022,
      label: "Start Dating",
    },
    {
      imageUrl: "https://placekitten.com/801/600",
      year: 2023,
      label: "Engagement",
    },
    {
      imageUrl: "https://placekitten.com/802/600",
      year: 2024,
      label: "Wedding",
    },
    {
      imageUrl: "https://placekitten.com/803/600",
      year: 2025,
      label: "Family",
    },
    {
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
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop"
        showDots={false}
        ssr
        keyBoardControl
        transitionDuration={500}
        beforeChange={(nextIndex) => setCurrentIndex(nextIndex)}
        itemClass="carousel-item"
      >
        {dataImages.map((data, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "70px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "white",
                marginBottom: "30px",
                color: "#8A594C",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {data.label}
              <IoMdArrowDropdown
                color="white"
                size={26}
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  marginLeft: "5px",
                }}
              />
            </div>
            <img
              key={index}
              src={data.imageUrl}
              alt={`Slide ${index + 1}`}
              style={{
                width: "70%",
                objectFit: "cover",
                borderRadius: "50%",
                aspectRatio: "1/1",
              }}
            />
            <div style={{ color: "white", marginTop: "30px" }}>{data.year}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;

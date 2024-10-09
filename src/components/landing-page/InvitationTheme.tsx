"use client";
import React, { useState } from "react";
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
    items: 2,
    // partialVisibilityGutter: 40,
  },
};

const InvitationTheme = (props: Props) => {
  const [activeTab, setActiveTab] = useState("terbaru");

  const cardItems = [
    {
      image: "https://assets.familydecorative.com/file/theme/luxury-grey.jpg",
      title: "Luxury Grey",
    },
    {
      image: "https://assets.familydecorative.com/file/theme/creamy-latte.jpg",
      title: "Creamy Latte",
    },
    {
      image: "https://assets.familydecorative.com/file/theme/floral.jpg",
      title: "Floral",
    },
    {
      image: "https://assets.familydecorative.com/file/theme/green-leaves.jpg",
      title: "Green Leaves",
    },
    // Tambahkan lebih banyak card sesuai kebutuhan
  ];

  return (
    <div className="bg-[#FEE7F2]">
      <div className="max-w-6xl py-20 md:py-12 mx-auto">
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
                swipeable
                itemClass="flex justify-center items-center"
              >
                {cardItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl w-[170px] md:w-[220px] mt-2"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-[170px] md:h-[220px] object-cover rounded-b-none rounded-t-lg"
                    />
                    <div className="bg-[#E7F2FE]  p-3 md:p-4 rounded-t-none rounded-b-lg text-center">
                      <p className="font-poppins text-[#49516F] font-semibold">
                        {item.title}
                      </p>
                      <button className="bg-[#31ABED] text-white px-4 py-1 rounded-md w-full mt-2 font-poppins font-semibold text-base">
                        Lihat
                      </button>
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
  );
};

export default InvitationTheme;

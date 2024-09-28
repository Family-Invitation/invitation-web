import React from "react";
import MomentGallery from "@/components/luxury-grey/MomentGallery";
import YoutubeVideo from "@/components/YoutubeVideo";

type Props = {};

const section5 = ({ data }: Readonly<any>) => {
  return (
    <div className="bg-[#2C3333] flex justify-center items-center flex-col px-5 py-8">
      <div className="text-center" data-aos="zoom-in">
        <h2 className="font-playFair text-white text-3xl">MOMENT</h2>
        <h2 className="font-dancingScript text-white text-xl mb-5">gallery</h2>
      </div>
      <MomentGallery data={data} />
    </div>
  );
};

export default section5;

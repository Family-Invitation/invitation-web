import React from "react";

type Props = {};

type WhyChooseUsItemProps = {
  imgSrc: string;
  altText: string;
  description: string;
};

const WhyChooseUsItem = ({
  imgSrc,
  altText,
  description,
}: WhyChooseUsItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#FEE7F2] h-[80px] w-[80px] md:h-[140px] md:w-[140px] p-3 md:p-4 rounded-full">
        <img
          src={imgSrc}
          alt={altText}
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      <p className="mt-4 text-[#FEE7F2] text-xs md:text-base">{description}</p>
    </div>
  );
};

const WhyChooseUs = (props: Props) => {
  return (
    <div className="bg-[#A21272] w-full py-20 md:py-12 text-center">
      <h2 className="text-[#FEE7F2] text-2xl md:text-3xl font-bold">
        <span className="font-poppins">Mengapa Memilih </span>
        <span className="font-leckerliOne">Family Decorative?</span>
      </h2>
      <div className="flex gap-3 md:gap-12  md:max-w-3xl justify-center items-center mx-auto mt-8">
        <WhyChooseUsItem
          imgSrc="/images/landing-page/img-why-us-1.png"
          altText="Ramah Lingkungan"
          description="Ramah Lingkungan"
        />
        <WhyChooseUsItem
          imgSrc="/images/landing-page/img-why-us-2.png"
          altText="Hemat Biaya"
          description="Hemat Biaya"
        />
        <WhyChooseUsItem
          imgSrc="/images/landing-page/img-why-us-3.png"
          altText="Pengiriman Instan"
          description="Pengiriman Instan"
        />
        <div>
          <div className="bg-[#FEE7F2] h-[80px] w-[80px]  md:h-[140px] md:w-[140px] p-3 md:p-4 rounded-full flex justify-center flex-col items-center gap-1 md:gap-2">
            <div className="bg-[#FA69BF] h-[30%] w-[15px]  md:w-[35px] md:h-[35px] rounded-full"></div>
            <div className="bg-[#FA69BF] h-[65%] w-[20px] md:w-[50px] md:h-[70px] rounded-[30px]"></div>
          </div>
          <p className="mt-4 text-[#FEE7F2] text-xs md:text-base">
            Pelacakan RSVP
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type Props = {};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex">
      {/* Icon Wrapper */}
      <div className="bg-[#31ABED] p-3 md:p-2 mr-4 md:mr-6 rounded-xl h-[60px] w-[60px]  md:w-[80px]  md:h-[80px] flex justify-center items-center flex-grow-0">
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <p className="text-[#2384B8] font-poppins font-bold text-lg">{title}</p>
        <p className="text-[#2384B8] text-md md:text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

const OurFeature = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="py-20 md:py-12 max-w-6xl mx-4 md:mx-auto font-bold">
        <h2 className="text-2xl md:text-3xl text-[#2384B8] text-center font-bold">
          Dilengkapi dengan Fitur-Fitur
           <br />
          untuk Membuat Hari Anda Istimewa
        </h2>
        {/* <h2 className="text-2xl md:text-3xl text-[#2384B8] text-center font-bold mt-1">
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-12">
          <FeatureItem
            icon={<IoPlayCircle className="text-[#E7F2FE] text-6xl" />}
            title="Siaran Langsung"
            description="Undang teman anda untuk ikut merayakan hari spesial anda dimanapun mereka berada dengan fitur siaran langsung kami"
          />

          <FeatureItem
            icon={<FaUser className="text-[#E7F2FE] text-6xl" />}
            title="Undangan yang dapat dipersonalisasi"
            description="Buat undangan unik yang hanya dimiliki oleh anda."
          />

          <FeatureItem
            icon={<FaWhatsapp className="text-[#E7F2FE] text-6xl" />}
            title="Whatsapp AutoBlast"
            description="Undang seluruh teman anda hanya dengan 1 kali klik di whatsapp"
          />

          <FeatureItem
            icon={<FaLocationDot className="text-[#E7F2FE] text-6xl" />}
            title="Peta Interaktif"
            description="Undang teman anda untuk ikut merayakan hari spesial anda dimanapun mereka berada dengan fitur Live Wedding kami"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFeature;

import React from "react";
import { FaHeart, FaRing, FaStar } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";

const Section4 = ({ data }: Readonly<any>) => {
  const steps = [
    {
      date: "12 September 2017",
      title: "Awal Bertemu",
      icon: "perkenalan",
      description:
        "Tahun di mana dia dikenalkan oleh rekan kerjanya yang juga temanku melalui sosial media.",
      image: data.opening.theme?.background,
    },
    {
      date: "15 Mei 2019",
      title: "Lamaran",
      icon: "lamaran",
      description:
        "Hari di mana dia menyatakan keseriusannya di hadapan orang tua.",
      image: data?.section3.content_box.reception_picture,
    },
    {
      date: "20 Juli 2020",
      title: "Menikah",
      icon: "menikah",
      description:
        "Hari bahagia di mana kami resmi menjadi pasangan suami istri.",
      image: data?.section3.content_box.wedding_picture,
    },
  ];

  function generateIconByTitle(title: string) {
    switch (title.toLowerCase()) {
      case "perkenalan":
        return <FaHeart className="text-red-500" />;
      case "lamaran":
        return <FaRing className="text-yellow-500" />;
      case "menikah":
        return <ImManWoman className="text-blue-500" />;
      default:
        return <MdOutlineDateRange className="text-gray-500" />; // Jika tidak ada icon yang sesuai
    }
  }

  return (
    <div className="bg-[#F1F1F1] flex justify-center items-center flex-col px-5 py-8">
      <div className="text-center" data-aos="zoom-in">
        <h2 className="font-playFair text-[#383838] text-3xl">LOVE</h2>
        <h2 className="font-dancingScript text-[#2f2f2f] text-xl mb-5">
          Story
        </h2>
      </div>
      <div className="w-full flex flex-col items-center">
        {steps.map((step, index) => (
          <div key={index} className="w-full grid grid-cols-6 mb-8">
            <div className="col-span-1 flex flex-col items-center relative">
              <div className="bg-white p-2 rounded-full shadow-md z-10 mb-4">
                {generateIconByTitle(step.icon)}
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 w-px bg-gray-300 z-0 transition-all duration-300"></div>
              )}
            </div>
            <div className="col-span-5 bg-white rounded-lg p-4">
              <img
                src={step.image}
                alt=""
                className="w-full h-[200px] object-cover rounded-md"
              />
              <div className="mt-4 flex flex-col text-start">
                <div className="flex justify-start">
                  <h4 className="bg-[#f6f6f6] px-3 py-1 font-poppins text-[#0F0F0F] text-xs w-auto rounded-xl">
                    {step.date}
                  </h4>
                </div>
                <h4 className="font-playFair text-[#0F0F0F] text-3xl mt-2">
                  {step.title}
                </h4>
                <h4 className="text-[#4D4D4D] text-sm font-lora mt-2">
                  {step.description}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;

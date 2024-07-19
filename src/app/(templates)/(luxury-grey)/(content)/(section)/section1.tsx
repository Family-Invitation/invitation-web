import React, { useEffect, useState } from "react";
import LuxuryGreyWrapperLayout from "@/components/luxury-grey/WrapperLayout";
import { formatDate } from "@/helpers/formatDate";
import { calculateTimeLeft } from "@/helpers/calculateTimeLeft";

type Props = {};

// Define the props type for DateItem
type DateItemProps = {
  value: number;
  text: string;
};

const DateItem = ({ value, text }: DateItemProps) => {
  return (
    <div className="py-3 px-4 bg-[#D79872] rounded-lg shadow-xl">
      <div className="flex flex-col text-white font-semibold text-xs  md:text-sm font-poppins">
        <p className="text-white text-sm font-poppins">{value}</p>
        <p className="text-white font-poppins">{text}</p>
      </div>
    </div>
  );
};

const section1 = ({ data }: Readonly<any>) => {
  const targetDate = new Date(data.section3?.date).getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);
  return (
    <div
      className="min-h-screen w-full mx-auto relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${data.section1.theme?.background_mobile}')`,
      }}
    >
      <div
        className="absolute top-0 left-0 opacity-20 transition-all duration-300 w-full h-full bg-transparent"
        style={{
          backgroundImage:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(98,114,128,1) 0%, rgba(52,63,51,1) 90.1% )",
        }}
      ></div>

      <div className="w-full minh-full relative  overflow-hidden flex flex-col items-center text-white px-12 pt-[300px]">
        <h2
          className="font-poppins text-xs tracking-widest font-semibold"
          style={{ letterSpacing: "4px" }}
          data-aos="fade-up"
        >
          The Wedding Of
        </h2>
        <div
          className=" text-2xl md:text-3xl font-dancingScript my-8 font-normal  text-center"
          data-aos="fade-up"
        >
          <h4>{data?.man} </h4>
          <h4 className="my-2">&</h4>
          <h4>{data?.woman}</h4>
        </div>
        <h2
          className="font-poppins text-xs tracking-widest font-semibold"
          style={{ letterSpacing: "4px" }}
          data-aos="fade-up"
        >
          {data?.metadata?.description}
        </h2>
        <div
          data-aos="fade-down "
          className="flex flex-col items-center justify-center"
        >
          <h4 className="mt-20 text-xs font-times font-thin italic text-center">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang.”
          </h4>
          <h4 className="mt-4 text-xs font-times italic">Q.S. Ar- Rum : 21</h4>
        </div>
      </div>
    </div>
  );
};

export default section1;

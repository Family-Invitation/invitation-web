import React, { useEffect, useState } from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
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
    <FloralWrapperLayout id="section1" hideTopFrame={true}>
      <div>
        <h2 className="text-black text-xl font-times font-light text-center mb-4 font- ">
          THE WEDDING OF
        </h2>
        <div className="text-center">
          <div className="relative items-center justify-center flex mx-auto  h-[160px] w-[150px] mb-5 ">
            <img
              src="/images/floral/avatar.png"
              alt="frame"
              loading="lazy"
              className=" rounded-full animate-wiggle"
            />
          </div>

          <h4 className="text-[#B87A54] text-4xl font-quicksand">
            {data.man} <br /> & <br /> {data.woman}
          </h4>
          <h4 className="text-[#171717] text-md font-combo mt-2">
            We Invited you to celebrate our wedding <br />
            {formatDate(data?.section1?.date ?? "")}
          </h4>
          <div className="flex justify-center items-center my-8 gap-3">
            <DateItem value={timeLeft?.days} text="Hari" />
            <DateItem value={timeLeft?.hours} text="Jam" />
            <DateItem value={timeLeft?.minutes} text="Menit" />
            <DateItem value={timeLeft?.seconds} text="Detik" />
          </div>
        </div>
      </div>
    </FloralWrapperLayout>
  );
};

export default section1;

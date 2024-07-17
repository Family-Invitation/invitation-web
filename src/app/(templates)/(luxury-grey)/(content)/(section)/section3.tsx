import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

type Props = {};

const section3 = ({ data }: Readonly<any>) => {
  const targetDate = new Date(data.section3.date).getTime();
  const wedding = data?.section3?.content_box?.wedding?.date;
  const reception = data?.section3?.content_box?.reception?.date;
  // Split the string by comma and space to separate the day from the date
  const [weddingDay, dateMonthYear] = wedding.split(", ");
  const [receptionDay, dateReceptionMonthYear] = reception.split(", ");

  // Split the dateMonthYear by space to separate the date and month/year
  const [weddingDate, weddingMonth, weddingYear] = dateMonthYear.split(" ");
  const [receptionDate, receptionMonth, receptionYear] =
    dateReceptionMonthYear.split(" ");

  // Combine the month and year
  const weddingMonthYear = `${weddingMonth} ${weddingYear}`;
  const receptionMonthYear = `${receptionMonth} ${receptionYear}`;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      {/* akad & resepsi */}
      <div className="bg-[#2C3333] flex justify-center items-center flex-col px-5 py-8">
        <h2 className="font-playFair text-white text-2xl">WEDDING</h2>
        <h2 className="font-dancingScript text-white text-xl">Event</h2>

        {/* card akad nikah */}
        <div className="relative h-full w-full mt-8 shadow-black shadow-lg rounded-t-3xl">
          <div className="bg-[url('https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754287-scaled-1.jpg')] bg-cover bg-center bg-no-repeat rounded-t-3xl h-[400px] w-full"></div>
          <div className="flex w-full">
            <div className="w-1/4 max-h-[400px] bg-[#2C3333]">
              <div className="flex justify-center items-center h-full relative">
                <div className=" rotate-90 text-white  text-3xl font-playFair ">
                  AKAD NIKAH
                </div>
              </div>
            </div>
            <div className="w-3/4 py-12 flex justify-center items-center flex-col bg-white">
              <h2 className="text-[#363636] font-playFair text-2xl mb-2 font-thin">
                {weddingDay}
              </h2>
              <div className="divider divider-neutral m-0 px-12"></div>
              <h2 className="text-[#363636] font-playFair text-4xl mb-2">
                {weddingDate}
              </h2>
              <div className="divider divider-neutral m-0 px-12"></div>
              <h2 className="text-[#1F1F1F] font-playFair text-2xl mt-2">
                {weddingMonthYear}
              </h2>
              <h4 className="mt-4 text-[#54595F] font-portSans text-base font-semibold">
                {data?.section3?.content_box?.wedding?.time}
              </h4>
              {data?.section3?.content_box?.wedding?.button?.map?.enabled && (
                <a
                  className="flex items-center justify-center space-x-2 bg-[#2C3333]  text-white py-2 px-4 rounded-md mt-4 btn-sm w-[150px] border-[2px] border-white "
                  href={data?.section3?.content_box?.wedding?.button?.map?.href}
                  target="_blank"
                >
                  <FaMapLocationDot className="w-4 h-4" />
                  <span className="font-combo text-base ">Map</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* card resepsi */}
        <div className="relative h-full w-full mt-8 shadow-black shadow-lg rounded-t-3xl">
          <div className="bg-[url('https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754256-scaled-1.jpg')] bg-cover bg-center bg-no-repeat rounded-t-3xl h-[400px] w-full"></div>
          <div className="flex w-full">
            <div className="w-3/4 py-12 flex justify-center items-center flex-col bg-white">
              <h2 className="text-[#363636] font-playFair text-2xl mb-2 font-thin">
                {receptionDay}
              </h2>
              <div className="divider divider-neutral m-0 px-12"></div>
              <h2 className="text-[#363636] font-playFair text-4xl mb-2">
                {receptionDate}
              </h2>
              <div className="divider divider-neutral m-0 px-12"></div>
              <h2 className="text-[#1F1F1F] font-playFair text-2xl mt-2">
                {receptionMonthYear}
              </h2>
              <h4 className="mt-4 text-[#54595F] font-portSans text-base font-semibold">
                {data?.section3?.content_box?.reception?.time}
              </h4>
              {data?.section3?.content_box?.reception?.button?.map?.enabled && (
                <a
                  className="flex items-center justify-center space-x-2 bg-[#2C3333]  text-white py-2 px-4 rounded-md mt-4 btn-sm w-[150px] border-[2px] border-white "
                  href={
                    data?.section3?.content_box?.reception?.button?.map?.href
                  }
                  target="_blank"
                >
                  <FaMapLocationDot className="w-4 h-4" />
                  <span className="font-combo text-base ">Map</span>
                </a>
              )}
            </div>
            <div className="w-1/4 max-h-[400px] bg-[#2C3333]">
              <div className="flex justify-center items-center h-full relative">
                <div className=" rotate-90 text-white  text-3xl font-playFair ">
                  RESEPSI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* countdown */}
      <div className="bg-[#2C3333] flex justify-center items-center flex-col px-5 py-8">
        <h2 className="font-playFair text-white text-3xl">EVENT</h2>
        <h2 className="font-dancingScript text-white text-xl">Countdown</h2>
        <div className="mt-8 h-full w-full px-8">
          <div className="bg-[url('https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754224-scaled-1.jpg')] bg-cover bg-center bg-no-repeat rounded-t-[150px] h-[450px] w-full"></div>
        </div>
        <div className="flex justify-between items-center mt-8 w-[50%]">
          <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
            <h4> {timeLeft.days}</h4>
            <h4>Hari</h4>
          </div>
          <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
            <h4>{timeLeft?.hours}</h4>
            <h4>Jam</h4>
          </div>
          <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
            <h4>{timeLeft?.minutes}</h4>
            <h4>Menit</h4>
          </div>
          <div className="flex justify-center items-center flex-col font-poppins text-white max-w-[50px]">
            <h4>{timeLeft?.seconds}</h4>
            <h4>Detik</h4>
          </div>
        </div>

        <div className="divider  mt-8 mx-0 mb-0 px-12 text-2xl">
          <FaHeart />
        </div>
      </div>
    </>
  );
};

export default section3;

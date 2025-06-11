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
      <div 
        className="flex justify-center items-center flex-col px-5 py-16 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #2C3333 0%, #1a1f1f 50%, #2C3333 100%)",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-white/20"></div>
          <div className="absolute bottom-32 right-16 w-28 h-28 rounded-full border border-white/20"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-white/20"></div>
        </div>

        <div className="text-center mb-12 relative z-10" data-aos="zoom-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <FaHeart className="mx-4 text-white/60 text-2xl animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-light tracking-wide mb-2">
            {data?.section3.content_box.text_title || "WEDDING"}
          </h2>
          <h2 className="text-white/80 text-2xl font-cursive tracking-wider" style={{ fontFamily: 'cursive' }}>Event</h2>
        </div>

        {/* card akad nikah */}
        <div
          className="relative h-full w-full max-w-4xl mt-8 group"
          data-aos="fade-up"
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-white/5 rounded-t-[48px] blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative shadow-2xl shadow-black/60 rounded-t-[40px] overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-t-[40px] h-[450px] w-full relative"
              style={{
                backgroundImage: `url("${data?.section3.content_box.wedding_picture}")`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            <div className="flex w-full">
              <div className="w-1/4 max-h-[450px] bg-gradient-to-b from-gray-800 to-gray-900 relative">
                {/* Decorative elements */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-white/30"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-white/30"></div>
                
                <div className="flex justify-center items-center h-full relative">
                  <div className="rotate-90 text-white text-3xl md:text-4xl font-serif tracking-[0.2em] drop-shadow-lg">
                    {data?.section3.content_box.text_wedding || "AKAD NIKAH"}
                  </div>
                </div>
              </div>
              
              <div className="w-3/4 py-16 flex justify-center items-center flex-col bg-gradient-to-br from-white to-gray-50 relative">
                {/* Decorative corner elements */}
                <div className="absolute top-6 left-6 w-4 h-4 border-l-2 border-t-2 border-gray-300 rounded-tl-lg"></div>
                <div className="absolute top-6 right-6 w-4 h-4 border-r-2 border-t-2 border-gray-300 rounded-tr-lg"></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 border-l-2 border-b-2 border-gray-300 rounded-bl-lg"></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-gray-300 rounded-br-lg"></div>
                
                <h2 className="text-gray-700 font-serif text-3xl mb-4 font-light tracking-wide">
                  {weddingDay}
                </h2>
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <div className="mx-3 w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                
                <h2 className="text-gray-800 font-serif text-6xl mb-6 font-bold drop-shadow-sm">
                  {weddingDate}
                </h2>
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <div className="mx-3 w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                
                <h2 className="text-gray-800 font-serif text-3xl mb-6 font-medium">
                  {weddingMonthYear}
                </h2>
                
                <div className="bg-gray-100/70 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-gray-200">
                  <h4
                    className="text-gray-600 font-sans text-lg font-medium leading-relaxed text-center"
                    dangerouslySetInnerHTML={{
                      __html: data?.section3?.content_box?.wedding?.time.replaceAll(
                        "\n",
                        "<br>"
                      ),
                    }}
                  ></h4>
                </div>
                
                {data?.section3?.content_box?.wedding?.button?.map?.enabled && (
                  <a
                    className="group/btn relative flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl border-2 border-gray-700 hover:border-gray-600 min-w-[180px]"
                    href={data?.section3?.content_box?.wedding?.button?.map?.href}
                    target="_blank"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-sm group-hover/btn:blur-md transition-all duration-300"></div>
                    <FaMapLocationDot className="w-5 h-5 relative z-10" />
                    <span className="font-sans text-lg font-medium relative z-10">View Map</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* card resepsi */}
        <div
          className="relative h-full w-full max-w-4xl mt-16 group"
          data-aos="fade-up"
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-l from-white/10 to-white/5 rounded-t-[48px] blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative shadow-2xl shadow-black/60 rounded-t-[40px] overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-t-[40px] h-[450px] w-full relative"
              style={{
                backgroundImage: `url("${data?.section3.content_box.reception_picture}")`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            <div className="flex w-full">
              <div className="w-3/4 py-16 flex justify-center items-center flex-col bg-gradient-to-bl from-white to-gray-50 relative">
                {/* Decorative corner elements */}
                <div className="absolute top-6 left-6 w-4 h-4 border-l-2 border-t-2 border-gray-300 rounded-tl-lg"></div>
                <div className="absolute top-6 right-6 w-4 h-4 border-r-2 border-t-2 border-gray-300 rounded-tr-lg"></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 border-l-2 border-b-2 border-gray-300 rounded-bl-lg"></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-gray-300 rounded-br-lg"></div>
                
                <h2 className="text-gray-700 font-serif text-3xl mb-4 font-light tracking-wide">
                  {receptionDay}
                </h2>
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <div className="mx-3 w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                
                <h2 className="text-gray-800 font-serif text-6xl mb-6 font-bold drop-shadow-sm">
                  {receptionDate}
                </h2>
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <div className="mx-3 w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                
                <h2 className="text-gray-800 font-serif text-3xl mb-6 font-medium">
                  {receptionMonthYear}
                </h2>
                
                <div className="bg-gray-100/70 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-gray-200">
                  <h4
                    className="text-gray-600 font-sans text-lg font-medium leading-relaxed text-center"
                    dangerouslySetInnerHTML={{
                      __html:
                        data?.section3?.content_box?.reception?.time.replaceAll(
                          "\n",
                          "<br>"
                        ),
                    }}
                  ></h4>
                </div>
                
                {data?.section3?.content_box?.reception?.button?.map?.enabled && (
                  <a
                    className="group/btn relative flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl border-2 border-gray-700 hover:border-gray-600 min-w-[180px]"
                    href={
                      data?.section3?.content_box?.reception?.button?.map?.href
                    }
                    target="_blank"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-sm group-hover/btn:blur-md transition-all duration-300"></div>
                    <FaMapLocationDot className="w-5 h-5 relative z-10" />
                    <span className="font-sans text-lg font-medium relative z-10">View Map</span>
                  </a>
                )}
              </div>
              
              <div className="w-1/4 max-h-[450px] bg-gradient-to-b from-gray-800 to-gray-900 relative">
                {/* Decorative elements */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-white/30"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-white/30"></div>
                
                <div className="flex justify-center items-center h-full relative">
                  <div className="rotate-90 text-white text-3xl md:text-4xl font-serif tracking-[0.2em] drop-shadow-lg">
                    {data?.section3.content_box.text_reception || "RESEPSI"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* countdown */}
      <div 
        className="flex justify-center items-center flex-col px-5 py-16 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #2C3333 0%, #1a1f1f 50%, #2C3333 100%)",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-36 h-36 rounded-full border border-white/20"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 rounded-full border border-white/20"></div>
          <div className="absolute top-2/3 left-1/3 w-16 h-16 rounded-full border border-white/20"></div>
        </div>

        <div className="text-center mb-12 relative z-10" data-aos="zoom-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <FaHeart className="mx-4 text-white/60 text-2xl animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-light tracking-wide mb-2">
            {data?.section3.content_box.text_event || "EVENT"}
          </h2>
          <h2 className="text-white/80 text-2xl font-cursive tracking-wider" style={{ fontFamily: 'cursive' }}>
            {data?.section3.content_box.text_countdown || "Countdown"}
          </h2>
        </div>

        <div className="mt-8 h-full w-full max-w-2xl px-8 group" data-aos="flip-up">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-t-[180px] blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
          
          <div className="relative">
            <div
              className="bg-cover bg-center bg-no-repeat rounded-t-[160px] h-[500px] w-full shadow-2xl shadow-black/60 relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage: `url("${data?.section3.content_box.event_picture}")`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-[160px]"></div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-between items-center mt-12 w-full max-w-md relative z-10"
          data-aos="fade-up"
        >
          {[
            { value: timeLeft.days, label: "Hari" },
            { value: timeLeft.hours, label: "Jam" },
            { value: timeLeft.minutes, label: "Menit" },
            { value: timeLeft.seconds, label: "Detik" }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative flex justify-center items-center flex-col font-sans text-white min-w-[70px]"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-md group-hover:bg-white/10 transition duration-300"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 transform transition-all duration-300 hover:scale-110 hover:bg-white/15 min-h-[100px] flex flex-col justify-center items-center">
                <h4 className="text-3xl font-bold mb-2 drop-shadow-lg">{item.value}</h4>
                <h4 className="text-sm font-medium uppercase tracking-wider text-white/80">{item.label}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex items-center justify-center mt-16 opacity-80">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
          <FaHeart className="mx-4 text-red-400 text-3xl animate-pulse drop-shadow-lg" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
        </div> */}
      </div>
    </>
  );
};

export default section3;
import React, { useState } from "react";
import { FaRegCopy, FaGift, FaHeart, FaCheck } from "react-icons/fa";
import { toast, ToastContainer, Zoom } from "react-toastify";

type Props = {};

type RekeningItem = {
  name: string;
  no: string;
  title: string;
};

const Card = ({ name, no, title }: RekeningItem) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);

      // Trigger animation
      setIsAnimating(true);
      setIsCopied(true);

      // Show custom toast with bank info
      toast.success(
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <FaCheck className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-gray-800">Berhasil disalin!</p>
            <p className="text-sm text-gray-600">
              {title} - {textToCopy}
            </p>
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: 4000,
          transition: Zoom,
          className: "custom-toast",
          bodyClassName: "custom-toast-body",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Reset after animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      toast.error("Gagal menyalin nomor rekening", {
        position: "top-center",
        autoClose: 3000,
        transition: Zoom,
      });
    }
  };

  return (
    <div className="relative group" data-aos="fade-up">
      {/* Card glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-white/50 to-gray-100/50 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition duration-300"></div>

      <div className="relative bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 border border-white/50 p-8">
        {/* Card Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <FaGift className="text-gray-500 text-xl mr-2" />
            <h3 className="font-serif text-gray-800 text-xl font-light tracking-wide">
              Rekening
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
            <div className="mx-2 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="w-8 h-px bg-gradient-to-l from-gray-400 to-transparent"></div>
          </div>
        </div>

        {/* Account Number with Copy Feedback */}
        <div className="text-center mb-6">
          <p className="text-gray-700 font-sans text-sm font-medium mb-2 tracking-wide">
            {title}
          </p>
          <div
            className={`relative group/number cursor-pointer transition-all duration-300 ${
              isAnimating ? "scale-105" : ""
            }`}
            onClick={() => handleCopy(no)}
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-25 group-hover/number:opacity-50 transition duration-300 
              from-gray-200 to-gray-100"
              `}
            ></div>
            <div
              className={`relative border rounded-2xl px-6 py-3 text-lg tracking-wider shadow-lg transition-all duration-300 
              bg-gradient-to-br from-gray-50 to-white border-gray-200/80 text-gray-800"
              `}
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="font-mono text-gray-800">{no}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 opacity-70">
            Klik nomor untuk menyalin
          </p>
        </div>

        {/* Copy Button */}
        <div className="flex justify-center mb-6">
          <div className="relative group/button">
            <div
              className={`absolute -inset-1 rounded-2xl blur transition duration-300 ${
                isCopied
                  ? "bg-gradient-to-r from-green-500 to-green-600 opacity-80"
                  : "bg-gradient-to-r from-gray-600 to-gray-700 opacity-60 group-hover/button:opacity-100"
              }`}
            ></div>
            <button
              className={`relative flex items-center justify-center space-x-3 px-6 py-3 rounded-2xl font-sans font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl ${
                isCopied
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white scale-105"
                  : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white"
              }`}
              onClick={() => handleCopy(no)}
              disabled={isAnimating}
            >
              {isCopied ? (
                <>
                  <FaCheck className="w-4 h-4 animate-bounce" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <FaRegCopy className="w-4 h-4" />
                  <span>Salin Rekening</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Account Holder Name */}
        <div className="text-center">
          <p className="text-gray-600 font-sans text-sm font-medium tracking-wide">
            a.n. {name}
          </p>
        </div>
      </div>
    </div>
  );
};

const section8 = ({ data }: Readonly<any>) => {
  const { content_box } = data?.section8;

  if (!content_box?.length) {
    return null;
  }

  return (
    <div
      className="flex justify-center items-center flex-col px-5 py-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-20 w-32 h-32 rounded-full border border-gray-400/30"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 rounded-full border border-gray-400/30"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full border border-gray-400/25"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full border border-gray-400/20"></div>
        <div className="absolute top-1/4 right-1/6 w-16 h-16 rounded-full border border-gray-400/15"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10" data-aos="zoom-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400/60"></div>
          <FaGift className="mx-4 text-gray-500/70 text-2xl animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400/60"></div>
        </div>
        <h2 className="font-serif text-gray-800 text-4xl md:text-5xl font-light tracking-wide mb-2">
          {data?.section8.text_title || "WEDDING"}
        </h2>
        <h2
          className="text-gray-600 text-2xl font-cursive tracking-wider"
          style={{ fontFamily: "cursive" }}
        >
          Gift
        </h2>
      </div>

      {/* Description */}
      <div
        className="max-w-3xl text-center mb-12 relative z-10"
        data-aos="fade-up"
      >
        <div className="relative bg-gradient-to-br from-white/80 to-gray-50/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-400/15 border border-white/50">
          <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed tracking-wide">
            Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan
            jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi
            kado secara cashless.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-2xl space-y-8 relative z-10">
        {content_box.map((item: RekeningItem, index: number) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card name={item.name} no={item.no} title={item.title} />
          </div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <div className="flex items-center justify-center mt-16 opacity-70 relative z-10">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400/60"></div>
        <FaHeart className="mx-4 text-red-400 text-3xl animate-pulse drop-shadow-lg" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400/60"></div>
      </div>

      {/* <ToastContainer 
        className="custom-toast-container"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        style={{
          fontSize: '14px',
        }}
      /> */}

      <style jsx global>{`
        .custom-toast {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(229, 231, 235, 0.5);
          border-radius: 16px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          backdrop-filter: blur(10px);
        }

        .custom-toast-body {
          padding: 0;
          margin: 0;
          font-family: "Inter", sans-serif;
        }

        .Toastify__progress-bar {
          background: linear-gradient(90deg, #10b981, #059669);
          height: 3px;
          border-radius: 2px;
        }

        .Toastify__close-button {
          color: #6b7280;
          opacity: 0.7;
        }

        .Toastify__close-button:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default section8;

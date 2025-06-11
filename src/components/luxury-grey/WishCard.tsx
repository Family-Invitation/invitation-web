import { IWishItem } from "@/interfaces/dataInterfaces";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaHeart, FaRegClock } from "react-icons/fa6";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { usePostLike } from "@/hooks/useWish";
import { Zoom, toast } from "react-toastify";

const WishCard = ({
  id,
  name,
  wish,
  date,
  likeCount: likeQty,
  isLiked: liked,
  user,
  key,
  index,
  wishesLength,
}: IWishItem) => {
  // Format tanggal dan waktu dengan date-fns
  const formattedDate = format(date, "dd MMMM yyyy", { locale: localeId });
  const formattedTime = format(date, "HH.mm");

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const postApiLike = usePostLike();

  const postLike = async (state: boolean) => {
    if (state) {
      setIsLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setIsLiked(true);
      setLikeCount((c) => c + 1);
    }

    postApiLike.mutate(
      {
        wish_id: id,
        user: user,
        liked: !state,
      },
      {
        onSuccess: (data) => {
          console.log("LIKE", data, id, user, !state);
        },
      }
    );
  };

  useEffect(() => {
    setLikeCount(likeQty);
    setIsLiked(liked);
  }, []);

  return (
    <div className="relative group">
      {/* Card glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
      
      <div className="relative bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-gray-400/15 border border-white/60 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/25 hover:scale-[1.01]">
        
        {/* Name Section */}
        <div className="mb-4">
          <h3 className="font-serif text-gray-800 text-lg md:text-xl font-medium tracking-wide">
            {name}
          </h3>
          <div className="flex items-center mt-1.5">
            <div className="w-6 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
            <div className="mx-1.5 w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-6 h-px bg-gradient-to-l from-gray-400 to-transparent"></div>
          </div>
        </div>

        {/* Message Section */}
        <div className="mb-5">
          <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
            {wish}
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          {/* Date & Time */}
          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-1.5 group/date hover:text-gray-600 transition-colors duration-200">
              <div className="p-1.5 rounded-full bg-gray-100/60 group-hover/date:bg-gray-200/60 transition-colors duration-200">
                <FaCalendar size={12} />
              </div>
              <span className="font-sans text-xs font-medium tracking-wide">
                {formattedDate}
              </span>
            </div>
            
            <div className="flex items-center space-x-1.5 group/time hover:text-gray-600 transition-colors duration-200">
              <div className="p-1.5 rounded-full bg-gray-100/60 group-hover/time:bg-gray-200/60 transition-colors duration-200">
                <FaRegClock size={12} />
              </div>
              <span className="font-sans text-xs font-medium tracking-wide">
                {formattedTime}
              </span>
            </div>
          </div>

          {/* Like Button */}
          <div className="flex items-center">
            <button
              className="group/like flex items-center space-x-2 px-3 py-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/80 hover:from-gray-100 hover:to-gray-200/80 border border-gray-200/60 hover:border-gray-300/60 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
              onClick={() => {
                if (user != "") {
                  postLike(isLiked);
                } else {
                  toast.warning(
                    "Kamu tidak terdaftar sebagai penerima undangan",
                    {
                      position: "top-center",
                      autoClose: 5000,
                      transition: Zoom,
                    }
                  );
                }
              }}
            >
              {likeCount > 0 && (
                <span className="font-sans text-xs font-medium text-gray-600 group-hover/like:text-gray-700 transition-colors duration-200">
                  {likeCount}
                </span>
              )}
              <div className="relative">
                <FaHeart 
                  size={16} 
                  className={`transition-all duration-300 transform group-hover/like:scale-110 ${
                    isLiked 
                      ? "text-red-400 drop-shadow-sm" 
                      : "text-gray-400 group-hover/like:text-red-300"
                  }`}
                />
                {isLiked && (
                  <div className="absolute inset-0 animate-ping">
                    <FaHeart size={16} className="text-red-400/50" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
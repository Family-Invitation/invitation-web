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
  // Memformat tanggal dan waktu dengan date-fns
  const formattedDate = format(date, "dd MMMM yyyy", { locale: localeId });
  const formattedTime = format(date, "HH.mm");

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const postApiLike = usePostLike();
  // console.log("KEY", key);
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
    <div
      style={{
        display: "flex",
        padding: "15px",
        flexDirection: "column",
        borderRadius: "10px",
        backgroundColor: "white",
        marginTop: index === 0 ? "1rem" : "",
        marginBottom: wishesLength && wishesLength - 1 === index ? "1rem" : "",
      }}
      className="shadow-md shadow-[#000000]"
    >
      <div
        style={{
          color: "#845A27",
          fontSize: "1.2rem",
          fontFamily: "Cormorant Garamond",
        }}
      >
        {name}
      </div>
      <div style={{ color: "#818181" }} className="mt-3 md:mt-5 ">
        {wish}
      </div>
      <div
        style={{ border: "1px solid #ADADAD", width: "100%" }}
        className="md:my-7 my-4"
      ></div>
      {/* Container Bottom */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Time, Calendar */}
        <div
          style={{ display: "flex", color: "#ADADAD", alignItems: "center" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaCalendar size={16} color="#ADADAD" />
            <div style={{ marginLeft: "4px", marginRight: "20px" }}>
              {formattedDate}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaRegClock size={16} color="#ADADAD" />
            <div style={{ marginLeft: "4px" }}> {formattedTime}</div>
          </div>
        </div>
        {/* Likes */}
        <div
          style={{
            display: "flex",
            color: "#ADADAD",
            alignItems: "center",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: 10,
            }}
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
              <div style={{ marginLeft: "4px", marginRight: "4px" }}>
                {likeCount}
              </div>
            )}
            <FaHeart size={16} color={isLiked ? "#e36a6a" : "#adadad"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishCard;

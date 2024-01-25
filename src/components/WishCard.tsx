import { IWishItem } from "@/interfaces/dataInterfaces";
import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const WishCard = ({ name, wish, date }: IWishItem) => {
  // Memformat tanggal dan waktu dengan date-fns
  const formattedDate = format(date, "dd MMMM yyyy", { locale: id });
  const formattedTime = format(date, "HH.mm");

  return (
    <div
      style={{
        display: "flex",
        padding: "15px",
        flexDirection: "column",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
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
      <div style={{ display: "flex", color: "#ADADAD", alignItems: "center" }}>
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
    </div>
  );
};

export default WishCard;

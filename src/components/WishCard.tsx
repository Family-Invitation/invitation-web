import { IWishItem } from "@/interfaces/dataInterfaces";
import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const WishCard = ({ name, wish, date, time }: IWishItem) => {
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
      <div style={{ color: "#818181", marginTop: "20px" }}>{wish}</div>
      <div
        style={{ border: "1px solid #ADADAD", width: "100%", margin: "30px 0" }}
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
          <div style={{ marginLeft: "4px", marginRight: "20px" }}> {date}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaRegClock size={16} color="#ADADAD" />
          <div style={{ marginLeft: "4px" }}> {time}</div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;

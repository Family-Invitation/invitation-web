import { IButton } from "@/interfaces/dataInterfaces";
import Link from "next/link";
import React from "react";

const ButtonBase = ({ icon, text, isLink, link = "", onClick }: IButton) => {
  const buttonStyles = {
    border: "#8A594C",
    backgroundColor: "#8A594C",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "5px",
    // width: "100px",
    color: "white",
    marginBottom: "10px",
  };

  return (
    <>
      {isLink ? (
        <Link href={link} target="_blank">
          <div style={buttonStyles} className="text-center lg:w-[100px] w-20">
            {text}
          </div>
        </Link>
      ) : (
        <button
          style={buttonStyles}
          className="lg:w-[100px] w-20"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default ButtonBase;

import { IButton } from "@/interfaces/dataInterfaces";
import Link from "next/link";
import React from "react";

const ButtonBase = ({
  icon,
  text,
  isLink,
  link = "",
  isLoading = false,
  onClick,
  bgColor = "#8A594C",
}: IButton) => {
  const buttonStyles = {
    border: bgColor,
    backgroundColor: bgColor,
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
          <div
            style={buttonStyles}
            className=" lg:min-w-[100px] min-w-[80px] text-sm lg:text-base text-center"
          >
            {text}
          </div>
        </Link>
      ) : (
        <button
          style={buttonStyles}
          className="lg:min-w-[100px] min-w-[80px] text-sm lg:text-base text-center"
          onClick={onClick}
        >
          {isLoading ? "Loading..." : text}
        </button>
      )}
    </>
  );
};

export default ButtonBase;

import { IButton } from "@/interfaces/dataInterfaces";
import React from "react";

type Props = {};

const ButtonBase = ({ icon, text, onClick }: IButton) => {
  return (
    <button
      style={{
        border: "#8A594C",
        backgroundColor: "#8A594C",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "5px",
        width: "100px",
        color: "white",
        marginBottom: "10px",
      }}
    >
      {text}
    </button>
  );
};

export default ButtonBase;

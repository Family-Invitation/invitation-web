import { IMenu } from "@/interfaces/dataInterfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  FaCalendarAlt,
  FaCameraRetro,
  FaInbox,
  FaGift,
  FaRestroom,
} from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Menu = ({ to, children }: IMenu) => {
  return (
    <ScrollLink to={to} smooth={true} duration={800}>
      <Link href={`#${to}`} style={{ cursor: "pointer", padding: "16px 20px" }}>
        {children}
      </Link>
    </ScrollLink>
  );
};
const BottomNavbar: React.FC = () => {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "1000px",
        backgroundColor: "#8A594C",
        padding: "4px 20px",
        color: "#fff",
        display: "flex",

        borderRadius: "50px 50px 0 0",
        zIndex: "999",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Menu to="section1">
          <Image
            src="/couple.png"
            alt="couple"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
        </Menu>
        <Menu to="section2">
          <FaRestroom size={30} color="#CEB793" />
        </Menu>
        <Menu to="section3">
          <FaCalendarAlt size={30} color="#CEB793" />
        </Menu>
        <Menu to="section5">
          <FaCameraRetro size={30} color="#CEB793" />
        </Menu>
        <Menu to="">
          <FaInbox size={30} color="#CEB793" />
        </Menu>
        <Menu to="section8">
          <FaGift size={30} color="#CEB793" />
        </Menu>
      </ul>
    </nav>
  );
};

export default BottomNavbar;

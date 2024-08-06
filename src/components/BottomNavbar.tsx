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
import useResizeFont from "@/hooks/useResize";

const Menu = ({ to, children }: IMenu) => {
  return (
    <ScrollLink to={to} smooth={true} duration={800}>
      <Link href={`#${to}`} style={{ cursor: "pointer", padding: "0 20px" }}>
        {children}
      </Link>
    </ScrollLink>
  );
};
const BottomNavbar = ({ data, template }: any) => {
  const { resizeList } = useResizeFont();

  const templateActive = data?.template;
  // const

  const fontSizeMenu = resizeList(40, [
    // { width: 450, decreasePercent: 50 },
    { width: 700, decreasePercent: 30 },
  ]);

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor:
          templateActive === "green-leaves"
            ? "#8A594C"
            : "khitan-green"
            ? "#FFFFFF52"
            : undefined,
        backgroundImage:
          templateActive === "creamy-latte"
            ? `url("/art-paper.jpg")`
            : undefined,
        color: "#fff",
        display: "flex",
        zIndex: "999",
        width: "max-content",
      }}
      className="py-0 px-5 max-h-[4.5rem] lg:max-h-24  rounded-t-3xl lg:rounded-t-[50px]"
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          // padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className="gap-6 lg:gap-12 p-0 lg:p-3"
      >
        <Menu to="section1">
          <div
            style={{
              width: fontSizeMenu,
              height: fontSizeMenu,
              borderRadius: "50%",
              backgroundColor: "#CEB793",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={data.bottom_navbar.picture}
              alt="couple"
              style={{
                borderRadius: "50%",
                width: "90%",
                height: "90%",
              }}
              // className="lg:w-[80px] lg:h-[80px] w-12 h-12"
            />
          </div>
        </Menu>
        <Menu to="section2">
          <FaRestroom color="#CEB793" size={fontSizeMenu} />
        </Menu>
        <Menu to="section3">
          <FaCalendarAlt color="#CEB793" size={fontSizeMenu} />
        </Menu>
        <Menu to="section5">
          <FaCameraRetro color="#CEB793" size={fontSizeMenu} />
        </Menu>
        <Menu to="section7">
          <FaInbox color="#CEB793" size={fontSizeMenu} />
        </Menu>
        <Menu to="section8">
          <FaGift color="#CEB793" size={fontSizeMenu} />
        </Menu>
      </ul>
    </nav>
  );
};

export default BottomNavbar;

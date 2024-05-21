import React from "react";
import { IoMdHome, IoMdHeart, IoIosCalendar, IoIosGift } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

type Props = {};

const listMenu = [
  {
    icon: <IoMdHome className="w-full h-full" />,
    to: "section1",
  },
  {
    icon: <IoMdHeart className="w-full h-full" />,
    to: "section2",
  },
  {
    icon: <IoIosCalendar className="w-full h-full" />,
    to: "section3",
  },
  // {
  //   icon: <IoMdPhotos className="w-full h-full" />,
  //   to: "section4",
  // },
  {
    icon: <MdOutlineHealthAndSafety className="w-full h-full" />,
    to: "section6",
  },
  {
    icon: <FaMessage className="w-full h-full" />,
    to: "section7",
  },
  {
    icon: <IoIosGift className="w-full h-full" />,
    to: "section8",
  },
];

const Menu = ({ icon, to }: { icon: any; to: string }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={800}>
      <Link href={`#${to}`} className="cursor-pointer">
        <div className="rounded-lg bg-[#C4855F] h-full">
          <div className="p-2 h-full w-full text-white flex justify-center items-center">
            {icon}
          </div>
        </div>
      </Link>
    </ScrollLink>
  );
};

const BottomNavbar = (props: Props) => {
  return (
    <div className="fixed bottom-0  flex  w-full justify-center items-center z-50">
      <div className="w-[300px]  p-2 bg-white  grid grid-cols-6 gap-2 h-[55px] rounded-lg">
        {listMenu.map((item, index) => (
          <Menu key={index} icon={item.icon} to={item.to} />
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;

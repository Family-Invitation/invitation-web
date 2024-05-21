import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import { FaMapLocationDot } from "react-icons/fa6";

type Props = {};

type MapItem = {
  enabled: boolean;
  href: string;
  text: string;
};
type CardProps = {
  text_title: string;
  date: string;
  time: string;
  address: string;
  button: {
    map: MapItem;
  };
};

type CardItemProps = {
  cardItem: CardProps;
};

const Card = ({ cardItem }: CardItemProps) => {
  const redirectTo = (location: string) => {
    window.open(location, "_blank");
  };

  const {
    text_title,
    date,
    time,
    address,
    button: { map },
  } = cardItem;

  return (
    <div
      className="p-6 bg-white rounded-lg text-center flex flex-col  items-center"
      data-aos="fade-up"
    >
      <h2 className="mb-4 text-[#B87A54] text-4xl font-qagetto">
        {text_title}
      </h2>
      <p className="text-black">{date}</p>
      <p className="text-[#B87A54] font-semibold mb-4 font-portSans">{time}</p>
      <p className="text-black">Bertempat di</p>
      <p className="text-[#353535] font-portSans">{address}</p>
      {map?.enabled && (
        <a
          className="flex items-center justify-center space-x-2 bg-[#C4855F]  text-white py-2 px-4 rounded-md mt-4 btn-sm w-[150px]"
          href={map.href}
          target="_blank"
        >
          <FaMapLocationDot className="w-4 h-4" />
          <span className="font-combo text-base ">{map?.text}</span>
        </a>
      )}
    </div>
  );
};

const section3 = ({ data }: Readonly<any>) => {
  return (
    <FloralWrapperLayout id="section3">
      <div className="flex flex-col gap-8">
        <Card cardItem={data?.section3?.content_box?.wedding} />
        <Card cardItem={data?.section3?.content_box?.reception} />
      </div>
    </FloralWrapperLayout>
  );
};

export default section3;

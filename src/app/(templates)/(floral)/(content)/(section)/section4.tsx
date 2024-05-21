import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import { FaMapLocationDot } from "react-icons/fa6";

type Props = {};

const section4 = ({ data }: Readonly<any>) => {
  return (
    <FloralWrapperLayout id="section4">
      <h2 className="flex justify-center items-center h-full text-4xl text-[#C4855F]">
        Our Gallery
      </h2>
    </FloralWrapperLayout>
  );
};

export default section4;

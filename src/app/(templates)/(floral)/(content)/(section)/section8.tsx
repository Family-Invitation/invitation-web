import React from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import { FaRegCopy } from "react-icons/fa";

type Props = {};

type RekeningItem = {
  name: string;
  no: string;
  title: string;
};

const Card = ({ name, no, title }: RekeningItem) => {
  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div
      className="rounded-lg p-6 bg-[#F3F3F3] flex justify-center items-center flex-col"
      style={{ opacity: 0.7 }}
    >
      <h3 className="text-2xl text-[#C4855F] mb-5 font-quicksand">Rekening</h3>
      <p className="text-[#303030] font-semibold font-poppins text-sm">
        {title}
      </p>
      <p className="text-[#292929] font-poppins text-[15px]">{no}</p>
      <button
        className="flex items-center justify-center space-x-2 bg-[#C4855F]  text-white py-2 px-4 rounded-md mt-4 min-w-[150px] btn-sm"
        onClick={() => handleCopy(no)}
      >
        <FaRegCopy className="w-4 h-4" />
        <span className="font-poppins">Salin Rekening</span>
      </button>
      <p className="mt-3 text-[#292929] font-alata">{name}</p>
    </div>
  );
};

const section8 = ({ data }: Readonly<any>) => {
  const { content_box } = data?.section8;

  if (!content_box?.length) {
    return null;
  }

  return (
    <FloralWrapperLayout id="section8">
      <div className="flex flex-col justify-center items-center">
        <h2
          className="text-3xl text-[#C4855F] mb-4 font-quicksand"
          data-aos="zoom-in"
        >
          Beri Hadiah
        </h2>
        <p
          className="text-center text-[#4F4F4F] text-sm font-poppins"
          data-aos="zoom-in"
        >
          Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan
          jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado
          secara cashless.
        </p>
        <div className="mt-4 w-full flex flex-col gap-6" data-aos="fade-up">
          {content_box.map((item: RekeningItem) => (
            <Card name={item.name} no={item.no} title={item.title} />
          ))}
        </div>
      </div>
    </FloralWrapperLayout>
  );
};

export default section8;

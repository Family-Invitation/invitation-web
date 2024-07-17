import React from "react";
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
      className="rounded-lg p-6 bg-[#f1f1f1] flex justify-center items-center flex-col shadow-md shadow-black"
      // style={{ opacity: 0.7 }}
    >
      <h3 className="text-2xl text-[#2D2D2D] mb-5 font-shippory">Rekening</h3>
      <p className="text-[#303030] font-semibold font-poppins text-sm">
        {title}
      </p>
      <p className="text-[#292929] font-poppins text-[15px]">{no}</p>
      <button
        className="flex items-center justify-center space-x-2 bg-[#4e4e4e]  text-white py-2 px-4 rounded-md mt-4 min-w-[150px] btn-sm"
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
  console.log({ content_box });

  if (!content_box?.length) {
    return null;
  }
  return (
    <div className="bg-white flex justify-center items-center flex-col px-5 py-8">
      <h2 className="font-playFair text-[#525252] text-2xl">WEDDING</h2>
      <h2 className="font-dancingScript text-[#525252] text-xl">gift</h2>

      <h4 className="mt-3 font-poppins text-[#4F4F4F] text-xs text-center">
        Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan jika
        memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado secara
        cashless.
      </h4>
      <div className="mt-4 w-full flex flex-col gap-6">
        {content_box.map((item: RekeningItem) => (
          <Card name={item.name} no={item.no} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default section8;

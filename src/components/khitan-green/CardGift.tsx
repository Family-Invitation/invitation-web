import { FaRegCopy } from "react-icons/fa";

type RekeningItem = {
  name: string;
  no: string;
  title: string;
};

const CardGift = ({ name, no, title }: RekeningItem) => {
  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div
      className="rounded-lg py-6 px-10 bg-[#f1f1f1] flex justify-center items-center flex-col shadow-md shadow-black"
      data-aos="flip-up"
    >
      <div className="border-t-2 border-[2px] border-[#FFCB58] w-full mb-3"></div>
      <h3 className="text-2xl text-[#2D2D2D] mb-5 font-shippory">Rekening</h3>
      <p className="text-[#303030] font-semibold font-poppins text-sm">
        {title}
      </p>
      <p className="text-[#292929] font-poppins text-[15px]">{no}</p>
      <button
        className="flex items-center justify-center space-x-2 bg-[#FFCB58]  text-white py-2 px-4 rounded-md mt-4 min-w-[150px] btn-sm"
        onClick={() => handleCopy(no)}
      >
        <FaRegCopy className="w-4 h-4" />
        <span className="font-poppins text-white">Salin Rekening</span>
      </button>
      <p className="mt-3 text-[#292929] font-alata">{name}</p>
    </div>
  );
};

export default CardGift;

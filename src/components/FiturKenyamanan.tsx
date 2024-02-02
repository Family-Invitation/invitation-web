import React from "react";
import { AiFillBank } from "react-icons/ai";

interface ICard {
  Icon: React.ElementType;
  title: string;
  description: string;
}
const Card = ({ Icon, title, description }: ICard) => {
  return (
    <div className="bg-white border border-[#FDF3F8] rounded-2xl shadow-lg p-8 flex flex-col text-start">
      <div>{<Icon size={40} color="#DB2777" />}</div>
      <p className="mt-4 text-pink-500 text-xl tracking-wider leading-10 font-twCent">
        {title}
      </p>
      <p className="text-black text-base leading-8 font-normal font-twCent">
        {description}
      </p>
    </div>
  );
};
const FiturKenyamanan = () => {
  return (
    <div className="bg-white flex justify-center items-center my-20 flex-col max-w-7xl md:mx-auto mx-4 text-center ">
      <h2 className="text-2xl md:text-5xl text-pink-500 font-philosopher tracking-wider font-semibold">
        Fitur Kenyamanan Pengguna
      </h2>
      <h3 className="text-base md:text-lg mt-5 w-full md:w-[50%] text-center tracking-wider text-[#686868]">
        Kita menyediakan berbagai fitur yang bisa mempermudah dan menyamankan
        pernikahanmu lo! Jadi kamu nggak perlu ribet lagi.
      </h3>
      <div className="mt-12 grid :grid-cols-2 md:grid-cols-3 gap-8">
        <Card
          Icon={AiFillBank}
          title="Cinematic Live Wedding"
          description="Menyiarkan pernikahan kamu kepada orang tercinta secara Cinematic di berbagai macam online Platform Streaming."
        />

        <Card
          Icon={AiFillBank}
          title="Personalized Invitation"
          description="Kirim undangan digital online website ke tamu spesial secara personal dengan nama yang bisa dicantumkan secara personal di undangan web kamu. 1 nama tamu, 1 undangan digital."
        />
        <Card
          Icon={AiFillBank}
          title="Whatsapp AutoBlast"
          description="Sebar undangan digital pernikahan kamu secara Otomatis via Whatsapp hanya dengan satu klik, akun kamu aman dan bebas diblokir oleh Whatsapp karena terlalu banyak broadcast!"
        />
        <Card
          Icon={AiFillBank}
          title="Cinematic Live Wedding"
          description="Menyiarkan pernikahan kamu kepada orang tercinta secara Cinematic di berbagai macam online Platform Streaming."
        />

        <Card
          Icon={AiFillBank}
          title="Personalized Invitation"
          description="Kirim undangan digital online website ke tamu spesial secara personal dengan nama yang bisa dicantumkan secara personal di undangan web kamu. 1 nama tamu, 1 undangan digital."
        />
        <Card
          Icon={AiFillBank}
          title="Whatsapp AutoBlast"
          description="Sebar undangan digital pernikahan kamu secara Otomatis via Whatsapp hanya dengan satu klik, akun kamu aman dan bebas diblokir oleh Whatsapp karena terlalu banyak broadcast!"
        />
      </div>
    </div>
  );
};

export default FiturKenyamanan;

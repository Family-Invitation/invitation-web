import React from "react";
import FloralWrapperLayout from "./WrapperLayout";

type Props = {};

const Quote = (props: Props) => {
  return (
    <FloralWrapperLayout id="quote" fullHeight={false} noFrame={true}>
      <div
        className="p-4 text-center text-[#444444] font-crimsonPro text-sm font-normal"
        data-aos="zoom-in"
      >
        <p className="text-sm mb-4">
          “Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan
          Pasangan-pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung
          Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Diantaramu Rasa
          Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu Benar-benar Terdapat
          Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir”
        </p>
        <p className="">{`{ Q.S : Ar-Rum (30) : 20 }`}</p>
      </div>
    </FloralWrapperLayout>
  );
};

export default Quote;

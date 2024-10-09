"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "Apakah ada batas kirim undangan?",
    answer:
      "Tidak ada batas untuk kirim undangan digital website dari Family Invitation. Cukup satu undangan untuk banyak tamu.",
  },
  {
    question: "Apakah ada batas revisinya?",
    answer:
      "Undangan website online di Family Invitation Tidak ada batas revisi.",
  },
  {
    question: "Apa yang dimaksud denna masa aktif?",
    answer:
      "Masa aktif pada undangan digital website adalah masa undangan online dapat diakses. Jika masa aktif berakhir maka undangan Tidak damat diakses.",
  },
  {
    question: "Apakah ada program kemitraan?",
    answer:
      "Ada! Kami menawarkan kemitraan undangan digital website Sudah termasuk, custom branding, sales page, custom domain dan lain-lain kaum Bisa hubungi admin untuk info lebih lengkap.",
  },
];

type Props = {};

const Faq: React.FC<Props> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the selected FAQ
  };

  return (
    <div className="bg-[#FEE7F2]  py-20 md:py-12 text-center w-full">
      <h2 className="text-[#DF1E9F] text-2xl md:text-3xl font-bold mb-8">
        Pertanyaan yang Sering Diajukan
      </h2>

      <div className="space-y-4  md:max-w-6xl mx-4 md:mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-[#DF1E9F] rounded-lg  w-auto md:w-[700px] mx-auto"
          >
            <div className="flex justify-between items-center">
              <p className="text-[#DF1E9F] font-poppins font-bold text-base md:text-lg">
                {faq.question}
              </p>
              <div onClick={() => toggleFaq(index)} className="cursor-pointer">
                {openIndex === index ? (
                  <FaChevronUp className="text-[#DF1E9F]" />
                ) : (
                  <FaChevronDown className="text-[#DF1E9F]" />
                )}
              </div>
            </div>

            {/* Answer with transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-linear ${
                openIndex === index ? "max-h-[100px]" : "max-h-0"
              }`}
            >
              <p className="text-[#313A69] font-bold text-base mt-2 text-start">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

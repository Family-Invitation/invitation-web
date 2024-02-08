import React from "react";
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-4 md:mx-auto mt-14 md:mt-20 mb-4 bg-white rounded-lg flex flex-col justify-center items-center w-auto md:w-full text-black font-twCent">
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col">
          <div className="font-semibold text-lg">Tentang Kami</div>
          <div className="mt-5 tracking-wider">
            Viding adalah One Stop Platform Digitalisasi Pernikahan Online yang
            membuat pernikahan kamu menjadi lebih efisien, efektif, bermakna dan
            Up to Date dengan berbagai macam layanan yang disediakan seperti
            Undangan Digital, Buku Tamu Digital, E-Gift, dan Cinematic Wedding
            Live Streaming yang bisa kamu dapatkan di dalam satu paket.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-lg">Social</div>
          <div className="mt-5 flex gap-3">
            <div className="bg-black p-2 rounded-full">
              <FaTiktok size={20} color="white" />
            </div>
            <div className="bg-blue-800 p-2 rounded-full">
              <FaFacebook size={20} color="white" />
            </div>
            <div className="bg-pink-200 p-2 rounded-full">
              <FaInstagram size={20} color="white" />
            </div>
            <div className="bg-red-500 p-2 rounded-full">
              <FaYoutube size={20} color="white" />
            </div>
          </div>
          <div className="mt-3">Phone: 08123456789</div>
          <div className="mt-3">Email: halo@familydecorative.com</div>
        </div>
        <div className="flex flec-col">
          <div className="font-semibold text-lg">Information</div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 text-sm tracking-wide">
        © Copyright 2024. PT Aku Bisa Ibadah
      </div>
    </footer>
  );
};

export default Footer;

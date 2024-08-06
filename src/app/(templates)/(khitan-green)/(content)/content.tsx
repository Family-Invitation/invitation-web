import CardGift from "@/components/khitan-green/CardGift";
import KhitanGreenGallery from "@/components/khitan-green/Gallery";
import WishKhitanGreen from "@/components/khitan-green/Wish";
import WishCard from "@/components/khitan-green/WishCard";
import { WishMessage } from "@/interfaces/dataInterfaces";
import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { urlWA } from "@/lib/constants";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import MusicPlayer from "@/components/MusicPlayer";
import BottomNavbar from "@/components/BottomNavbar";

type Props = {
  showContent: boolean;
  data: any;
};

const Content = ({ showContent, data }: Props) => {
  const listRekening = [
    {
      name: "Montblanc Maulana S.E",
      no: "1234567890",
      title: "Bank Central Asia",
    },
    {
      name: "Bank Mandiri",
      no: "1234567890",
      title: "Bank Rakyat Indonesia",
    },
  ];

  return (
    <div
      id="content"
      className="bg-cover  max-w-3xl text-center bg-fixed"
      style={{
        backgroundImage: `url("/images/khitan-green/green-bg-islamic-scaled.jpg")`,
        backgroundPosition: "bottom center",
      }}
    >
      {/* section 1 */}
      <div
        id="section1"
        className="flex flex-col justify-center items-center w-full h-screen"
      >
        <div className="mx-4 md:mx-10 font-crimsonPro text-[#FFCB58] flex flex-col items-center h-full justify-center">
          <div data-aos="fade-up">
            <h3 className="text-base pb-2">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </h3>
            <h3 className="text-base pb-2">Assalamu'alaikum Wr.Wb.</h3>
            <h3 className="text-base leading-5">
              Alhamdullillah Dengan Penuh Rasa Syukur Kami Memohon Ridho Dan
              Rahmat Allah SWT, Kami Bermaksud Melaksanakan Walimatul Khitan
              Putra Kami Yang Kami Beri Nama:
            </h3>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl py-3">Romeo Maulana</h2>
            <img
              src="https://plus.unsplash.com/premium_photo-1661277731403-f5f8f237ae2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover  h-[150px] aspect-square rounded-full "
            />
            <h4 className="text-base pt-3">Putra dari</h4>
            <h4 className="text-base pt-1">
              Montblanc Maulana S.E & Janice Yunita S.I
            </h4>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div
        id="section2"
        className="flex flex-col justify-center items-center w-full mt-[100px]"
      >
        <div className="mx-4 md:mx-10 font-crimsonPro">
          <h3 className="text-white text-3xl" data-aos="fade-up">
            Jadwal Acara
          </h3>
          <div
            className="bg-[#FFFFFF30] w-full px-6 py-8 rounded-2xl mt-5 flex items-center flex-col"
            data-aos="zoom-in"
          >
            <BiCalendar className="h-10 w-10 text-white" />
            <h2 className="text-white text-2xl mt-2">Walimatul Khitan Romeo</h2>
            <div className="divider w-full"></div>
            <div className="flex items-center gap-2 justify-start w-full text-white mt-2">
              <FaRegCalendar className="h-4 w-4 text-white" />
              <span>10 Juni 2023</span>
            </div>
            <div className="flex items-center gap-2 justify-start w-full text-white mt-1">
              <span>
                <FaRegClock className="h-4 w-4 text-white" />
              </span>
              <span>10.00 - Selesai</span>
            </div>
            <div className="flex items-center gap-2 justify-start w-full text-white text-start leading-5 mt-1">
              <span>
                <IoLocationSharp className="h-4 w-4 text-white" />
              </span>
              <span>
                <strong>Hotel Shangrila Jakarta</strong> <br />
                Kota BNI, Jl. Jenderal Sudirman No.Kav. 1, Karet Tengsin,
                Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota
                Jakarta 10220
              </span>
            </div>
            <button className="flex items-center justify-center space-x-2 bg-[#FFCB58]  text-white py-2 px-4 rounded-md mt-3 z-10 font-portSans">
              <span>Buka Peta</span>
            </button>
          </div>
          <p
            className="text-[#FFCB58] mt-5 italic text-sm"
            data-aos="fade-down"
          >
            Ya Allah, berikanlah kami pertolongan untuk memperoleh keutamaan-Mu,
            serta jauhkan kami dari perbuatan hina. Ya Allah, terimalah khitan
            kami, selamatkanlah urusan-urusan kami, sembuhkanlah sakit kami
            karena khitan ini, bayarkanlah utang-utang kami, wujudkanlah
            cita-cita kami, serta lapangkanlah rezeki kami, wahai Zat Yang Maha
            Memberi. Ya Allah, semoga Engkau memberikan keselamatan kepada kami,
            orang-orang yang menunaikan ibadah haji, orang-orang yang berperang
            di jalan-Mu, serta kepada para musafir, yaitu umat Rasulullah
            Muhammad Sallallahu Alaihi Wasalam, baik yang ada di darat maupun di
            laut. Sesungguhnya Engkau berkuasa atas apa yang Engkau kehendaki,
            wahai sebaik-baik majikan dan sebaik-baik penolong. Maha suci Allah,
            Tuhan yang memiliki kesucian dan segala sifat rendah yang mereka
            (orang kafir) sematkan. Dan kesejahteraan bagi para utusan Allah.
            Segala puji hanya milik Allah, Tuhan Semesta Alam.
          </p>
        </div>
      </div>

      {/* secton 3 */}
      <div
        id="section3"
        className="flex flex-col justify-center items-center w-full mt-[100px]"
      >
        <div className="px-4 md:px-10 w-full">
          <WishKhitanGreen data={data} />
        </div>
      </div>

      {/* section 4 */}
      <div
        id="section4"
        className="flex flex-col justify-center items-center w-full mt-[100px]"
      >
        <h3
          className="text-[#FFCB58] text-3xl font-crimsonPro mb-5"
          data-aos="zoom-in"
        >
          Galeri
        </h3>
        <div className="px-4 md:px-10 w-full">
          <KhitanGreenGallery data={data} />
        </div>
      </div>

      {/* section 5 */}
      <div id="section5">
        <div className="flex flex-col justify-center items-center w-full mt-[150px]">
          <h3
            className="text-[#FFCB58] text-3xl font-crimsonPro mb-5"
            data-aos="zoom-in"
          >
            Hadiah
          </h3>
          <div className="mt-4 w-full flex flex-col gap-6 px-4 md:px-10 py-4">
            {listRekening.map((item) => (
              <CardGift name={item.name} no={item.no} title={item.title} />
            ))}
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div id="section6">
        <div className="flex flex-col justify-center items-center w-full  h-screen text-[#FFCB58]  font-crimsonPro">
          <div className="h-full flex flex-col items-center justify-center mx-4 md:mx-10">
            <div></div>
            <p className="text-base">
              Demikian undangan ini kami sampaikan, atas perhatian dan kehadiran
              Saudara/i, kami ucapkan terima kasih.
            </p>
            <p className="text-base mt-2">
              <strong>Wassalamu’alaikum Wr. Wb.</strong>
            </p>
            <div data-aos="zoom-in">
              <h3 className="mt-8 text-3xl">Kami yang Mengundang</h3>
              <h2 className="text-3xl font-dancingScript mt-4">
                Montlbanc Maulana S.E
              </h2>
              <p className="text-3xl font-cormorantGaramond">&</p>
              <h2 className="text-3xl font-dancingScript">
                Janice Juwita S.I{" "}
              </h2>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661277731403-f5f8f237ae2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="mt-8 object-cover  h-[150px] aspect-square rounded-full "
              data-aos="flip-right"
            />
            <div className="mt-8 flex flex-col items-center">
              <img src="/logo.png" alt="" className="h-[50px] aspect-square" />
              <div className="mt-2 text-white">Family Invitation</div>
              <div
                style={{ display: "flex", marginTop: "20px", gap: "10px" }}
                // data-aos="zoom-in"
              >
                <Link href={urlWA + "6289516789565"} target="_blank">
                  <FaWhatsapp size={30} color="white" />
                </Link>
                <Link
                  href="https://www.instagram.com/familyinvitation_/"
                  target="_blank"
                >
                  <FaInstagram size={30} color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MusicPlayer */}
      <MusicPlayer
        showContent={showContent}
        audioSource={data.music.url}
        template="khitan-green"
      />
    </div>
  );
};

export default Content;

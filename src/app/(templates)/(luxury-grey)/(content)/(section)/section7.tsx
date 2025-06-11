import React, { useEffect, useState } from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import { IoMdSend } from "react-icons/io";
import { FaHeart, FaEnvelope, FaPen } from "react-icons/fa";
import { WishMessage } from "@/interfaces/dataInterfaces";
import WishCard from "@/components/luxury-grey/WishCard";
import { useSearchParams } from "next/navigation";
import { useGetWish, usePostWish } from "@/hooks/useWish";
import ButtonBase from "@/components/ButtonBase";
import { formatInvitationName } from "@/helpers/formatInvitationName";

type Props = {};

const section7 = ({ data }: Readonly<any>) => {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<WishMessage[]>([]);
  const [qty, setQty] = useState(5);
  const [lastId, setLastId] = useState(0);
  const [isLoadingDataWish, setIsLoadingDataWish] = useState(false);
  const [totalDataWish, setTotalDataWish] = useState(0);

  const searchParams = useSearchParams();

  const groupParam = searchParams.get("group") ?? "0";
  const toParam = searchParams.get("to") ?? "";

  const postApi = usePostWish();
  const postData = async () => {
    if (message.trim() == "") {
      return;
    }
    setMessage((m) => m.trim());
    await postApi.mutate(
      {
        invitation_id: data.code,
        sender: sender,
        message: message,
      },
      {
        onSuccess: async () => {
          const { data: dataWish } = await useGetWish(1, data.code, 0, toParam);
          setWishes((current) => [...(dataWish?.wishes || []), ...current]);
          setTotalDataWish(dataWish?.total_documents);
        },
      }
    );
    setSender("");
    setMessage("");
  };

  const loadMore = async () => {
    setIsLoadingDataWish(true);
    const { data: dataWish } = await useGetWish(
      qty,
      data.code,
      lastId,
      toParam
    );
    const list = dataWish?.wishes || [];
    setWishes((current) => [...current, ...list]);
    setTotalDataWish(dataWish?.total_documents || 0);
    setIsLoadingDataWish(false);
  };

  useEffect(() => {
    if (groupParam === "0") {
      const sender = formatInvitationName(toParam);
      setSender(sender);
    }
  }, [groupParam]);

  useEffect(() => {
    setLastId(wishes[wishes.length - 1]?.id || 0);
  }, [wishes]);

  useEffect(() => {
    loadMore();
    setQty(3);
  }, []);

  return (
    <div
      className="flex justify-center items-center flex-col px-5 py-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      {/* Elemen dekoratif latar belakang */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-gray-400/30"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 rounded-full border border-gray-400/30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-gray-400/30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border border-gray-400/20"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 rounded-full border border-gray-400/15"></div>
      </div>

      {/* Bagian Header */}
      <div className="text-center mb-16 relative z-10" data-aos="zoom-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400/60"></div>
          <FaEnvelope className="mx-4 text-gray-500/70 text-2xl animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400/60"></div>
        </div>
        <h2 className="font-serif text-gray-800 text-3xl md:text-4xl font-light tracking-wide mb-2">
          UCAPAN
        </h2>
        {/* <h2
          className="text-gray-600 text-2xl font-cursive tracking-wider"
          style={{ fontFamily: "cursive" }}
        >
          & Doa
        </h2> */}
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Formulir Kartu */}
        <div className="mb-12" data-aos="fade-up">
          {/* Efek cahaya pada kartu */}
          <div className="absolute -inset-2 bg-gradient-to-r from-white/50 to-gray-100/50 rounded-3xl blur-lg opacity-60"></div>

          <div className="relative bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/20 border border-white/50 p-8">
            {/* Header Formulir */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <FaPen className="text-gray-500 text-xl mr-2" />
                <h3 className="font-serif text-gray-800 text-2xl font-light tracking-wide">
                  Bagikan Ucapan Anda
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-12 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
                <div className="mx-3 w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-12 h-px bg-gradient-to-l from-gray-400 to-transparent"></div>
              </div>
            </div>

            {/* Input Nama */}
            <div className="mb-6">
              <label className="block text-gray-700 font-sans text-sm font-medium mb-3 tracking-wide">
                Nama Anda <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="relative w-full bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-2xl px-6 py-4 text-gray-700 font-sans focus:outline-none focus:ring-2 focus:ring-gray-300/50 focus:border-transparent transition-all duration-300 shadow-lg placeholder-gray-400"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                />
              </div>
            </div>

            {/* Pesan Ucapan */}
            <div className="mb-8">
              <label className="block text-gray-700 font-sans text-sm font-medium mb-3 tracking-wide">
                Ucapan & Doa
              </label>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <textarea
                  placeholder="Tulis ucapan dan doa dari hati Anda..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="relative w-full bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-2xl px-6 py-4 text-gray-700 font-sans focus:outline-none focus:ring-2 focus:ring-gray-300/50 focus:border-transparent transition-all duration-300 shadow-lg placeholder-gray-400 resize-none"
                />
              </div>
            </div>

            {/* Tombol Kirim */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <button
                  className="relative flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-2xl font-sans font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={postData}
                  disabled={
                    postApi.isLoading || !sender.trim() || !message.trim()
                  }
                >
                  <span>
                    {postApi.isLoading ? "Mengirim..." : "Kirim Ucapan"}
                  </span>
                  <IoMdSend className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Status Memuat */}
        {isLoadingDataWish && (
          <div className="text-center text-gray-600 text-lg font-sans mb-8">
            <div className="inline-flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600 mr-3"></div>
              Memuat ucapan...
            </div>
          </div>
        )}

        {/* Status Kosong */}
        {!wishes.length && !isLoadingDataWish && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl shadow-gray-400/20 border border-white/50 max-w-md mx-auto">
              <FaEnvelope className="mx-auto text-gray-400 text-4xl mb-6" />
              <h3 className="text-gray-600 font-serif text-xl mb-3">
                Belum ada ucapan
              </h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">
                Jadilah yang pertama untuk berbagi ucapan dan doa dari hati Anda
                untuk pasangan yang bahagia.
              </p>
            </div>
          </div>
        )}

        {/* Kontainer Daftar Ucapan dengan Tinggi Tetap dan Gulir */}
        {wishes.length > 0 && (
          <div className="relative" data-aos="fade-up">
            {/* Daftar Ucapan dengan Maksimal Tinggi dan Gulir */}
            <div
              className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300/60 hover:scrollbar-thumb-gray-400/80 scrollbar-track-transparent space-y-6"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(156, 163, 175, 0.6) transparent",
              }}
            >
              {wishes.map((item: WishMessage, index) => (
                <div key={item.id} className="relative group">
                  <WishCard
                    key={index}
                    id={item.id}
                    name={item.sender}
                    wish={item.message}
                    date={item.created_at}
                    likeCount={item.like_count}
                    isLiked={item.is_liked}
                    user={toParam}
                    wishesLength={wishes.length}
                  />
                </div>
              ))}
            </div>

            {/* Indikator Gulir - muncul saat konten dapat digulir */}
            <div className="absolute top-0 right-0 w-1 h-full bg-gray-200/30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="w-full bg-gradient-to-b from-gray-400/60 to-gray-600/60 rounded-full transform scale-y-50 origin-top"></div>
            </div>

            {/* Efek Pudar di Bawah */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-100/80 to-transparent pointer-events-none rounded-b-2xl"></div>
          </div>
        )}

        {/* Tombol Muat Lebih Banyak */}
        {totalDataWish > wishes.length && (
          <div className="flex justify-center mt-8" data-aos="fade-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <button
                className="relative bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-sans font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl border border-gray-200/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                onClick={loadMore}
                disabled={isLoadingDataWish}
              >
                {isLoadingDataWish ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
                    <span>Memuat...</span>
                  </>
                ) : (
                  <span>
                    {data.section7?.button?.more?.text ||
                      "Muat Lebih Banyak Ucapan"}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Elemen dekoratif bawah */}
      {/* <div className="flex items-center justify-center mt-16 opacity-70 relative z-10">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400/60"></div>
        <FaHeart className="mx-4 text-red-400 text-3xl animate-pulse drop-shadow-lg" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400/60"></div>
      </div> */}
    </div>
  );
};

export default section7;

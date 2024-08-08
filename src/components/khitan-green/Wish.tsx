import React, { useEffect, useState } from "react";
import FloralWrapperLayout from "@/components/floral/WrapperLayout";
import { IoMdSend } from "react-icons/io";
import { WishMessage } from "@/interfaces/dataInterfaces";
import WishCard from "@/components/khitan-green/WishCard";
import { useSearchParams } from "next/navigation";
import { useGetWish, usePostWish } from "@/hooks/useWish";
import ButtonBase from "@/components/ButtonBase";
import { formatInvitationName } from "@/helpers/formatInvitationName";

type Props = {
  data: any;
};

const WishKhitanGreen = ({ data }: Readonly<any>) => {
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

  console.log({ data });
  console.log({ wishes });

  const postApi = usePostWish();
  const postData = async () => {
    if (message.trim() == "") {
      return;
    }
    setMessage((m) => m.trim());
    // Lakukan sesuatu sebelum atau setelah operasi POST
    await postApi.mutate(
      {
        invitation_id: data?.code,
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
      data?.code,
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
    <div className="flex flex-col  h-full py-8 w-full">
      <h2
        className="text-3xl text-[#FFCB58] font-crimsonPro text-center"
        data-aos="zoom-in"
      >
        Doa & Ucapan
      </h2>
      <div
        className="px-6 py-4 bg-[#FFFFFF30] rounded-lg mt-4 "
        data-aos="fade-up"
      >
        <div className="label">
          <span className="label-text font-combo text-white">
            Nama <span className="text-red-600">*</span>
          </span>
        </div>
        <input
          type="text"
          placeholder="Masukkan Nama"
          className="input  w-full bg-[#F3F3F3] input-sm font-combo text-[#353535]"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <div className="label">
          <span className="label-text font-combo text-white">Ucapan & Doa</span>
        </div>
        <textarea
          placeholder="Tulis Ucapan & Doa"
          rows={4}
          style={{ width: "100%" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea  bg-[#F3F3F3] text-[#353535] font-combo"
        />
        <button
          className="flex items-center justify-center space-x-2 bg-[#FFB001]  text-white py-2 px-6 rounded-md mt-2 btn-sm"
          onClick={postData}
        >
          <span className="font-combo">
            {postApi.isLoading ? "Loading..." : "Kirim"}
          </span>
          <IoMdSend className="w-4 h-4" />
        </button>
      </div>
      {isLoadingDataWish && (
        <div className="text-center text-lg text-white">Loading...</div>
      )}
      {!wishes.length && (
        <div className="text-center text-white w-full mt-8 font-combo text-sm">
          Belum ada ucapan, Yuk kirim ucapan untuk ananda Romeo Maulana.
        </div>
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-8 w-full overflow-auto"
        data-aos="fade-up"
      >
        <>
          {wishes.map((item: WishMessage, index) => (
            <WishCard
              key={item.id}
              index={index}
              id={item.id}
              name={item.sender}
              wish={item.message}
              date={item.created_at}
              likeCount={item.like_count}
              isLiked={item.is_liked}
              user={toParam}
              wishesLength={wishes.length}
            />
          ))}
        </>
      </div>
      {totalDataWish > wishes.length && (
        <div className="w-full flex justify-center mt-4 md:mt-8">
          <ButtonBase
            text={"Lihat lebih banyak"}
            isLink={false}
            isLoading={isLoadingDataWish}
            onClick={loadMore}
            bgColor={"#FFCB58"}
          />
        </div>
      )}
    </div>
  );
};

export default WishKhitanGreen;

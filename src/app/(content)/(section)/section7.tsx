import ButtonBase from "@/components/ButtonBase";
import WishCard from "@/components/WishCard";
import { Data, WishMessage } from "@/interfaces/dataInterfaces";
import useResizeFont from "@/hooks/useResize";
import { useGetWish, usePostWish } from "@/hooks/useWish";
import { useState } from "react";

export default function Section7({ data }: Readonly<Data>) {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [qty, setQty] = useState(5);
  const { resizeList, windowWidth } = useResizeFont();
  const {
    data: dataWish,
    isLoading: isLoadingDataWish,
    refetch: refetchData,
  } = useGetWish(qty);

  const postApi = usePostWish();
  const totalDataWish = dataWish?.data?.total_documents;

  const postData = async () => {
    // Lakukan sesuatu sebelum atau setelah operasi POST
    await postApi.mutate(
      {
        invitation_id: 1,
        sender: sender,
        message: message,
      },
      {
        onSuccess: () => {
          refetchData();
        },
      }
    );
    setSender("");
    setMessage("");
  };

  const loadMore = () => {
    setQty(qty + 3);
    refetchData();
  };

  return (
    <div
      id="section7"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url("/art-paper.jpg")`,
        zIndex: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 50,
          transform: "translateY(-1px)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2600 131.1"
          preserveAspectRatio="none"
          speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
          speechify-initial-font-size="16px"
          fill="#84865f"
        >
          <path
            d="M0 0L2600 0 2600 69.1 0 0z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
          <path
            style={{ opacity: 0.5 }}
            d="M0 0L2600 0 2600 69.1 0 69.1z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
          <path
            style={{ opacity: 0.25 }}
            d="M2600 0L0 0 0 130.1 2600 69.1z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
        </svg>
      </div>
      <div
        style={{
          margin: "0 auto",
          fontFamily: "Cormorant Garamond",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="w-full lg:w-[1000px] px-6 md:px-0 py-[100px]"
        data-aos="zoom-in-down"
      >
        <h2
          style={{
            color: "#4F583D",
            marginTop: 24,
            fontSize: resizeList(60, [
              {
                width: 450,
                decreasePercent: 50,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            fontWeight: 600,
            margin: 0,
          }}
        >
          Ucapan
        </h2>
        <div // Text
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#85865F",
            fontFamily: "Josefin Sans",
            fontSize: resizeList(20, [
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
          }}
          className="text-center"
          data-aos="zoom-in-down"
        >
          Suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan restu kepada kami
        </div>
        <div
          style={{
            backgroundColor: "#4F583DAB",
            marginTop: "30px",
            boxSizing: "border-box",
          }}
          className="py-12 lg:py-12 px-6 lg:px-24 mx-4 w-full rounded-[50px] lg:rounded-[100px]"
          data-aos="zoom-in-down"
        >
          <input
            type="text"
            placeholder="Nama"
            style={{ width: "100%", padding: "10px" }}
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
          <textarea
            placeholder="Tulis Ucapan & Doa"
            rows={6}
            style={{ width: "100%", padding: "10px", margin: "30px  0" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="text-start">
            <ButtonBase
              text="Kirim"
              isLink={false}
              isLoading={postApi.isLoading}
              onClick={postData}
            />
          </div>
          {isLoadingDataWish && (
            <div className="text-center text-lg text-white">Loading...</div>
          )}
          {!dataWish?.data?.wishes?.length && (
            <div className="text-center text-white w-full mt-8 font-josefinSans text-sm">
              Belum ada data
            </div>
          )}
          <div
            className="grid grid-cols-1 lg:grid-cols-2  gap-8 md:gap-16 mt-8 w-full"
            data-aos="fade-up"
          >
            <>
              {dataWish?.data?.wishes?.length &&
                dataWish?.data?.wishes?.map((item: WishMessage) => (
                  <WishCard
                    key={item.id}
                    name={item.sender}
                    wish={item.message}
                    date={item.created_at}
                  />
                ))}
            </>
          </div>
          {totalDataWish > dataWish?.data?.wishes?.length && (
            <div className="w-full flex justify-center mt-4 md:mt-8">
              <ButtonBase
                text="Load More"
                isLink={false}
                isLoading={isLoadingDataWish}
                onClick={loadMore}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

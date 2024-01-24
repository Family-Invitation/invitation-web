import ButtonBase from "@/components/ButtonBase";
import WishCard from "@/components/WishCard";
import { Data } from "@/interfaces/dataInterfaces";
import useResizeFont from "@/hooks/useResize";
import { useGetWish } from "@/hooks/useWish";

export default function Section7({ data }: Readonly<Data>) {
  const { resizeList, windowWidth } = useResizeFont();
  const { data: dataWish } = useGetWish();

  console.log({ dataWish });
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
          Make a Wish
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
        >
          It is an honor and pleasure for us, if you can attend and give us your
          blessing
        </div>
        <div
          style={{
            backgroundColor: "#4F583DAB",
            marginTop: "30px",
            boxSizing: "border-box",
          }}
          className="py-12 lg:py-12 px-6 lg:px-24 mx-4 w-full rounded-[50px] lg:rounded-[100px]"
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{ width: "100%", padding: "10px" }}
          />
          <textarea
            placeholder="Your Wish"
            rows={6}
            style={{ width: "100%", padding: "10px", margin: "30px 0 50px 0" }}
          />
          <div className="text-start">
            <ButtonBase text="Submit" isLink={false} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 md:gap-16 mt-8 w-full">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <WishCard
                key={item}
                name="anonim"
                wish="make a wish"
                date="20 Januari 2024"
                time="12.00 "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

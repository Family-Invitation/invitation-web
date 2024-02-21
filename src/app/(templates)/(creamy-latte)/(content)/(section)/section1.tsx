import useResizeFont from "@/hooks/useResize";
import { Data } from "@/interfaces/dataInterfaces";

export default function Section1({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const fontSizeTitle = resizeList(30, [
    { width: 450, decreasePercent: 50 },
    { width: 900, decreasePercent: 40 },
  ]);

  const fontSizeDate = resizeList(45, [
    { width: 450, decreasePercent: 50 },
    { width: 900, decreasePercent: 30 },
  ]);

  const fontSizeMempelai = resizeList(84, [
    { width: 450, decreasePercent: 50 },
    { width: 900, decreasePercent: 40 },
  ]);

  return (
    <div
      id="section1"
      style={{
        backgroundImage: `url("${
          windowWidth > 900
            ? data.section1.theme?.background || "/bg-section1.webp"
            : data.section1.theme?.background_mobile ||
              "/images/bg-section1-mobile.webp"
        }")`,
        backgroundSize: "auto 100vh",
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "top",
        position: "fixed",
        zIndex: -10,
      }}
      className="w-full h-screen flex flex-col justify-center text-center"
    >
      <div className="h-screen absolute inset-0  bg-black opacity-30 transition-opacity duration-300"></div>
      <div className="relative" style={{ transform: "translateY(150px)" }}>
        <h2
          className="font-josefinSans text-white font-semibold leading-53 mb-2"
          style={{ fontSize: fontSizeTitle }}
        >
          {data.section1.text_title}
        </h2>
        <h1
          className="font-cormorantGaramond text-white font-extrabold leading-none m-4 mt-5"
          style={{ fontSize: fontSizeMempelai }}
        >
          {windowWidth < 768 ? (
            <>
              {data.man_called} & {data.woman_called}
            </>
          ) : (
            data.section1.couple_name
          )}
        </h1>
        <h3
          className="font-cormorantGaramond text-white font-light leading-45"
          style={{ fontSize: fontSizeDate }}
        >
          {data.section1.formatted.date}
        </h3>
      </div>
    </div>
  );
}

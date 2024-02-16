import useResizeFont from "@/hooks/useResize";
import { Data } from "@/interfaces/dataInterfaces";

export default function Section1({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const fontSizeTitle = resizeList(40, [
    { width: 450, decreasePercent: 50 },
    { width: 700, decreasePercent: 30 },
  ]);

  const fontSizeDate = resizeList(45, [
    { width: 450, decreasePercent: 50 },
    { width: 700, decreasePercent: 30 },
  ]);

  const fontSizeMempelai = resizeList(84, [
    { width: 450, decreasePercent: 50 },
    { width: 700, decreasePercent: 40 },
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
      }}
      className="w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-center"
    >
      <h2
        className="font-josefinSans text-[#CEB793] font-semibold leading-53 mb-2"
        style={{ fontSize: fontSizeTitle }}
      >
        {data.section1.text_title}
      </h2>
      <h1
        className="font-cormorantGaramond text-[#8FA6AC] font-extrabold leading-none m-4"
        style={{ fontSize: fontSizeMempelai }}
      >
        {windowWidth < 768 ? (
          <>
            {data.man} <br /> & <br /> {data.woman}
          </>
        ) : (
          data.section1.couple_name
        )}
      </h1>
      <h3
        className="font-cormorantGaramond text-[#CEB793] font-light leading-45"
        style={{ fontSize: fontSizeDate }}
      >
        {data.section1.formatted.date}
      </h3>
    </div>
  );
}

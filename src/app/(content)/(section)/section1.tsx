import useResizeFont from "@/hooks/useResize";
import { Data } from "@/interfaces/dataInterfaces";

export default function Section1({ data }: Readonly<Data>) {
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

  const mempelaiPria = data?.mempelaiPria?.namaLengkap;
  const mempelaiWanita = data?.mempelaiWanita?.namaLengkap;

  return (
    <div
      id="section1"
      className="w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-center bg-[url('/images/bg-section1-mobile.webp')] md:bg-[url('/bg-section1.webp')]"
    >
      <h2
        className="font-josefinSans text-[#CEB793] font-semibold leading-53 mb-2"
        style={{ fontSize: fontSizeTitle }}
      >
        The Wedding of
      </h2>
      <h1
        className="font-cormorantGaramond text-[#8FA6AC] font-extrabold leading-none m-4"
        style={{ fontSize: fontSizeMempelai }}
      >
        {windowWidth < 768 ? (
          <>
            {mempelaiPria} <br /> & <br /> {mempelaiWanita}
          </>
        ) : (
          `${mempelaiPria} & ${mempelaiWanita}`
        )}
      </h1>
      <h3
        className="font-cormorantGaramond text-[#CEB793] font-light leading-45"
        style={{ fontSize: fontSizeDate }}
      >
        03.02.2024
      </h3>
    </div>
  );
}

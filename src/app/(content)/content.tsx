import MusicPlayer from "@/components/MusicPlayer";
import Section1 from "./(section)/section1";
import Section2 from "./(section)/section2";
import Section3 from "./(section)/section3";
import Section4 from "./(section)/section4";
import Section5 from "./(section)/section5";
import Section6 from "./(section)/section6";
import Section7 from "./(section)/section7";
import Section8 from "./(section)/section8";
import Section9 from "./(section)/section9";
import BottomNavbar from "@/components/BottomNavbar";
import useGetData from "@/hooks/useGetData";
import { Data } from "@/interfaces/dataInterfaces";

export default function Content() {
  const dataKonsumen: Data = useGetData();
  console.log("konten");
  const { data } = dataKonsumen;
  return (
    <div style={{ width: "100%" }}>
      <Section1 data={data} />
      <Section2 data={data} />
      <Section3 data={data} />
      <Section4 data={data} />
      <Section5 data={data} />
      <Section6 data={data} />
      <Section7 data={data} />
      <Section8 data={data} />
      <Section9 />
      <MusicPlayer />
      {/* <BottomNavbar /> */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
        className="bg-[url('/images/bg-section1-mobile.webp')] md:bg-[url('/bg-section1.webp')] "
      >
        <div
          className="absolute top-0 left-0 opacity-50 transition-all duration-300 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #00000000 0%, #000000 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}

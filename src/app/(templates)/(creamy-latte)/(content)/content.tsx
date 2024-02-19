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
import { useGetData } from "@/hooks/useGetData";
import { Data } from "@/interfaces/dataInterfaces";

export default function Content({
  showContent,
  data,
}: {
  showContent: boolean;
  data: any;
}) {
  return (
    <div id="content" style={{ width: "100%", zIndex: 10 }}>
      <Section1 data={data} />
      <div className=" relative">
        <div className="h-full rotate-180 w-full absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="white"
          >
            <path
              className="elementor-shape-fill"
              d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100c0,0,0,0,0-0 L0,0v99.3C0,99.3,79.7,98.7,194,99z"
            ></path>
          </svg>
        </div>
      </div>
      <Section2 data={data} />
      <Section3 data={data} />
      <Section4 data={data} />
      <Section5 data={data} />
      <Section6 data={data} />
      <Section7 data={data} />
      <Section8 data={data} />
      <Section9 data={data} />
      <MusicPlayer
        showContent={showContent}
        audioSource={data.music.url}
        template={data?.template ?? ""}
      />
      <BottomNavbar data={data} template={data?.template ?? ""} />
      {/* <div
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
      </div> */}
    </div>
  );
}

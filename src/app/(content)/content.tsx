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

export default function Content() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <MusicPlayer />
      <BottomNavbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4)), url("/bg-section1.webp")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}

import Quote from "@/components/floral/Quote";
import Section1 from "./(section)/section1";
import Section2 from "./(section)/section2";
import Section3 from "./(section)/section3";
import Section4 from "./(section)/section4";
// import Section5 from "./(section)/section5";
import Section6 from "./(section)/section6";
import Section7 from "./(section)/section7";
import Section8 from "./(section)/section8";
import Section9 from "./(section)/section9";
import BottomNavbar from "@/components/floral/BottomNavbar";
import MusicPlayer from "@/components/MusicPlayer";
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
      <Quote />
      <Section2 data={data} />
      <Section3 data={data} />
      {/* <Section4 data={data} /> */}
      {/* <Section5 data={data} /> */}
      <Section6 data={data} />
      <Section7 data={data} />
      <Section8 data={data} />
      <Section9 data={data} />
      <BottomNavbar />
      <MusicPlayer
        showContent={showContent}
        audioSource={data.music.url}
        template={"floral"}
      />
    </div>
  );
}

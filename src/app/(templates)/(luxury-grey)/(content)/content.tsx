import Quote from "@/components/floral/Quote";
import Section1 from "./(section)/section1";
import Section2 from "./(section)/section2";
import Section3 from "./(section)/section3";
import Section4 from "./(section)/section4";
import Section5 from "./(section)/section5";
import Section6 from "./(section)/section6";
import Section7 from "./(section)/section7";
import Section8 from "./(section)/section8";
import Section9 from "./(section)/section9";
import BottomNavbar from "@/components/floral/BottomNavbar";
import MusicPlayer from "@/components/MusicPlayer";
import { useGetData } from "@/hooks/useGetData";
import { Data } from "@/interfaces/dataInterfaces";
import { useEffect, useState } from "react";
import WrapperLayout from "@/components/luxury-grey/WrapperLayout";

export default function Content({
  showContent,
  data,
}: {
  showContent: boolean;
  data: any;
}) {
  const [scrollBackContent, setScrollBackContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const minOffset = document.getElementById("content")?.offsetTop || 0;
      if (window.scrollY < minOffset && !scrollBackContent) {
        setScrollBackContent(true);
        // alert(scrollBackContent);
        window.scrollTo({ top: minOffset, behavior: "smooth" });
      } else {
        if (scrollBackContent) {
          setScrollBackContent(false);
        }
      }
    };
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="content" style={{ width: "100%", zIndex: 10 }}>
      <WrapperLayout data={data}>
        <Section1 data={data} />
        <Section2 data={data} />
        <Section3 data={data} />
        <Section4 data={data} />
        <Section5 data={data} />
        <Section6 data={data} />
        <Section7 data={data} />
        <div className="border-t border-gray-300" />
        <Section8 data={data} />
        <Section9 data={data} />
        {/* <BottomNavbar /> */}
        <MusicPlayer
          showContent={showContent}
          audioSource={data.music.url}
          template="luxury-grey"
        />
      </WrapperLayout>
    </div>
  );
}

import { Data } from "@/interfaces/dataInterfaces";
import Image from "next/image";
import useResizeFont from "@/hooks/useResize";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import GalleryComponent from "@/components/Gallery";
import YoutubeVideo from "@/components/YoutubeVideo";

export default function Section5({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg"];

  return (
    <div
      id="section5"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(180deg, #FFFFFFFF 10%, #FFFFFF00 100%), url("https://i0.wp.com/zeinvitation.com/wp-content/uploads/2022/07/BACKGROUND_LEAVES_WATERCOLOR-01-Vertical-scaled.jpg?fit=1707%2C2560&ssl=1")`,
        zIndex: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      />
      {/* <h3
        style={{
          marginTop: resizeList(100, [
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
          color: "#85865F",
          fontFamily: "Josefin Sans",
          fontSize: resizeList(30, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
          margin: 0,
        }}
      >
        A Glimpse of
      </h3> */}
      <h2
        style={{
          color: "#4F583D",
          fontFamily: "Cormorant Garamond",
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
        data-aos="zoom-out"
      >
        {data.section5.text_gallery}
      </h2>
      <div // Text
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#CEB793",
          fontFamily: "Josefin Sans",
          fontSize: resizeList(20, [
            {
              width: 700,
              decreasePercent: 30,
            },
          ]),
        }}
        data-aos="zoom-out"
      >
        <span>{data.section5.text_moments}</span>
      </div>
      <div style={{ maxWidth: "1000px", marginTop: "60px" }}>
        <YoutubeVideo videoId={data.section5?.video_id ?? ""} />

        <div className="grid grid-cols-2 gap-3 md:gap-4 mx-6 md:mx-0 pt-3 md:pt-4">
          <GalleryComponent data={data} />
        </div>
      </div>
    </div>
  );
}

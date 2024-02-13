import { Data } from "@/interfaces/dataInterfaces";
import Image from "next/image";
import useResizeFont from "@/hooks/useResize";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

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
        {/* <iframe
          width="1140px"
          height="600px"
          src="https://www.youtube.com/embed/64ojWgAzl94"
          title="Video YouTube"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}

        <div className="grid grid-cols-2 gap-4 md:gap-5 mx-6 md:mx-0 pt-3">
          <Gallery id="my-gallery">
            {data.section5.pictures.map(
              ({ url: imgUrl }: { url: string }, i: number) => (
                <Item<HTMLImageElement>
                  original={imgUrl}
                  thumbnail={imgUrl}
                  width="1600"
                  height="1600"
                  alt="Photo of seashore by Folkert Gorter"
                  // You can pass string id
                  id={i}
                >
                  {({ ref, open }) => (
                    <img
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#819575",
                        borderRadius: "3%",
                        objectFit: "cover",
                      }}
                      src={imgUrl}
                      ref={ref}
                      onClick={open}
                      className="rounded-md p-1"
                    />
                  )}
                </Item>
              )
            )}
          </Gallery>
        </div>
      </div>
    </div>
  );
}

import Carousel from "@/components/Carousel";
import { Data } from "@/interfaces/dataInterfaces";
import useResizeFont from "@/hooks/useResize";

export default function Section4({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const { stories, text_title } = data?.section4 ?? null;

  if (!stories) return null;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#D2B591",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Josefin Sans",
      }}
      className="py-[100px] mx-auto"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            color: "white",
            fontSize: resizeList(30, [
              {
                width: 450,
                decreasePercent: 50,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            margin: 0,
          }}
        >
          The Journey
        </h3>
        <h2
          style={{
            color: "white",
            fontFamily: "Cormorant Garamond",
            marginTop: 20,
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
        >
          {text_title}
        </h2>
        {/* <div // Text
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontFamily: "Josefin Sans",
            fontSize: resizeList(20, [
              {
                width: 700,
                decresePercent: 30,
              },
            ]),
          }}
        >
          How it all started
        </div> */}
        <div className="w-full">
          <Carousel stories={stories} />
        </div>
      </div>
      {/* <div // Footer
        style={
          {
            //   height: 180,
            // backgroundColor: "red",
          }
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          style={{
            width: "100%",
            transform: "translateY(-1%)",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <path
            fill="#84865f"
            fill-opacity="1"
            d="M0,0L1440,180L1440,0L0,0Z"
            speechify-initial-font-family="GTWalsheim, system-ui, sans-serif"
            speechify-initial-font-size="16px"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

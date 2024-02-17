import Carousel from "@/components/Carousel";
import { Data } from "@/interfaces/dataInterfaces";
import useResizeFont from "@/hooks/useResize";

export default function Section4({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  const { stories, text_title, text_subtitle } = data?.section4 ?? {};

  if (!stories) return null;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#84865f",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Josefin Sans",
      }}
      className="min-h-[80vh] md:min-h-screen"
    >
      <div // Header
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
          speechify-initial-font-size="16px"
          style={{
            transform: "scaleY(-1) translateY(99%)",
            position: "absolute",
          }}
        >
          <path
            fill="#84865f"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
          <path
            fill="#84865f"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
          <path
            fill="#84865f"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            marginTop: resizeList(100, [
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
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
          {text_title || "The Journey"}
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
          {text_subtitle || "Our Love Story"}
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

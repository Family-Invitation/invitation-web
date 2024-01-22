import Image from "next/image";
import { useEffect, useState } from "react";

export default function Section5() {
  const [windowWidth, setWindowWidth] = useState(0);

  function resizeList(
    normalSize: number,
    list: {
      width: number;
      decresePercent: number;
    }[]
  ): number {
    for (const { width: w, decresePercent: d } of list) {
      if (windowWidth <= w) {
        return normalSize - (normalSize * d) / 100;
      }
    }
    return normalSize;
  }

  useEffect(() => {
    function f() {
      setWindowWidth(window.innerWidth);
    }

    f();

    window.addEventListener("resize", f);

    return () => window.removeEventListener("resize", f);
  }, []);

  return (
    <div
      id="section5"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, #FFFFFF00 100%), url("https://i0.wp.com/zeinvitation.com/wp-content/uploads/2022/07/BACKGROUND_LEAVES_WATERCOLOR-01-Vertical-scaled.jpg?fit=1707%2C2560&ssl=1")`,
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
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
          fontWeight: 600,
          margin: 0,
        }}
      >
        Gallery
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
              decresePercent: 30,
            },
          ]),
        }}
      >
        <span>Our Moments</span>
        {/* <strong>J. R. R. Tolkien</strong> */}
      </div>
      <div style={{ maxWidth: "1140px", marginTop: "60px" }}>
        {/* <iframe
          width="1140px"
          height="600px"
          src="https://www.youtube.com/embed/64ojWgAzl94"
          title="Video YouTube"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            paddingTop: "12px",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <Image
              key={item}
              src={`/img${item}.jpeg`}
              alt="foto wedding"
              width={200}
              height={160}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

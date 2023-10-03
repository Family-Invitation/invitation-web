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
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url("https://i0.wp.com/zeinvitation.com/wp-content/uploads/2022/07/BACKGROUND_LEAVES_WATERCOLOR-01-Vertical-scaled.jpg?fit=1707%2C2560&ssl=1")`,
        zIndex: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <h3
        style={{
          marginTop: "30%",
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
      </h3>
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
        Our Moments
      </h2>
      <div // Text
        style={{
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
        <span>
          I would rather share one lifetime with you than face all the ages of
          this world alone.
        </span>
        <strong>J. R. R. Tolkien</strong>
      </div>
    </div>
  );
}

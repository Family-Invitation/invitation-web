import { useEffect, useState } from "react";

export default function Section1() {
  const [windowWidth, setWindowWidth] = useState(0);

  function resize(
    width: number,
    normalSize: number,
    decresePercent: number
  ): number {
    return windowWidth > width
      ? normalSize
      : normalSize - (normalSize * decresePercent) / 100;
  }

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
      id="section1"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("/back.png")',
        backgroundColor: "#e9ede8",
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Josefin Sans",
          color: "#CEB793",
          fontSize: resizeList(40, [
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
          lineHeight: "53px",
        }}
      >
        The Wedding of
      </h2>
      <h1
        style={{
          fontFamily: "Cormorant Garamond",
          color: "#8FA6AC",
          fontSize: resizeList(84, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 40,
            },
          ]),
          fontWeight: 900,
          margin: 0,
        }}
      >
        Romeo & Juliet
      </h1>
      <h3
        style={{
          fontFamily: "Cormorant Garamond",
          color: "#CEB793",
          fontSize: resizeList(45, [
            {
              width: 450,
              decresePercent: 50,
            },
            {
              width: 700,
              decresePercent: 30,
            },
          ]),
          fontWeight: 300,
          lineHeight: "45px",
        }}
      >
        31.12.23
      </h3>
    </div>
  );
}

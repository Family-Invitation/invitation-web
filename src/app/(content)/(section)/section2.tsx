import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Section2() {
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
        boxSizing: "border-box",
        padding: "100px 50px",
        width: "100%",
      }}
    >
      <div // Text
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <h2
          style={{
            fontFamily: "Josefin Sans",
            color: "#85865F",
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
          The Beloved
        </h2>
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#4F583D",
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
          Groom & Bride
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: resizeList(400, [
              {
                width: 450,
                decresePercent: 50,
              },
              {
                width: 700,
                decresePercent: 30,
              },
            ]),
            fontFamily: "Josefin Sans",
            color: "#8FA6AC",
            fontSize: resizeList(30, [
              {
                width: 450,
                decresePercent: 50,
              },
              {
                width: 700,
                decresePercent: 20,
              },
            ]),
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          <p style={{ margin: "10px 0", fontWeight: 300 }}>
            Once in awhile, right in the middle of an ordinary life, love gives
            us a fairy tale.
          </p>
          <strong>Unknown</strong>
        </div>
      </div>
      <div // Foto & Detail
        style={{
          display: "flex",
          // height: "100vh",
        }}
      >
        <div // Segment 1
          style={{
            flex: 1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div // Picture
            style={{
              width: "100%",
              height: resizeList(281, [
                {
                  width: 450,
                  decresePercent: 70,
                },
                {
                  width: 700,
                  decresePercent: 60,
                },
              ]),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <img
              style={{
                width: resizeList(250, [
                  {
                    width: 450,
                    decresePercent: 70,
                  },
                  {
                    width: 700,
                    decresePercent: 60,
                  },
                ]),
                height: resizeList(250, [
                  {
                    width: 450,
                    decresePercent: 70,
                  },
                  {
                    width: 700,
                    decresePercent: 60,
                  },
                ]),
                borderRadius: "50%",
                position: "absolute",
              }}
              src="/man.png"
              alt=""
            />
            <img
              style={{
                width: resizeList(300, [
                  {
                    width: 450,
                    decresePercent: 70,
                  },
                  {
                    width: 700,
                    decresePercent: 60,
                  },
                ]),
                position: "absolute",
                zIndex: 1,
              }}
              src="/frame-rustic.webp"
              alt=""
            />
          </div>
          <h2
            style={{
              margin: "10px 0",
              color: "#8A584C",
              fontFamily: "Cormorant Garamond",
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
            }}
          >
            Romeo Montague
          </h2>
          <img
            style={{
              width: resizeList(243, [
                {
                  width: 450,
                  decresePercent: 70,
                },
                {
                  width: 700,
                  decresePercent: 60,
                },
              ]),
            }}
            src="/divider-rustic.webp"
            alt=""
          />
          <b
            style={{
              fontFamily: "Josefin Sans",
              color: "#85865F",
              fontSize: resizeList(25, [
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
              margin: "20px 0",
            }}
          >
            Son of
          </b>
          <p
            style={{
              fontFamily: "Josefin Sans",
              color: "#85865F",
              fontSize: resizeList(25, [
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
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            Lord Montague
            <br />
            &
            <br />
            Lady Montague
          </p>
          <div // Sosmed
            style={{
              color: "#8A584C",
              margin: "20px 0",
            }}
          >
            <FaFacebook
              style={{
                width: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                height: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
              }}
            />
            <FaTiktok
              style={{
                width: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                height: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
              }}
            />
            <FaInstagram
              style={{
                width: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                height: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
              }}
            />
          </div>
        </div>
        <div // Segment 2
          style={{
            flex: resizeList(1, [
              {
                width: 450,
                decresePercent: 50,
              },
              {
                width: 700,
                decresePercent: 30,
              },
            ]),
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
            fontFamily: "Cormorant Garamond",
            color: "#8A584C",
          }}
        >
          <div
            style={{
              height: resizeList(281, [
                {
                  width: 450,
                  decresePercent: 70,
                },
                {
                  width: 700,
                  decresePercent: 60,
                },
              ]),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            &
          </div>
        </div>
        <div // Segment 3
          style={{
            flex: 1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div // Picture
            style={{
              width: "100%",
              height: resizeList(281, [
                {
                  width: 450,
                  decresePercent: 70,
                },
                {
                  width: 700,
                  decresePercent: 60,
                },
              ]),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <img
              style={{
                width: resizeList(250, [
                  {
                    width: 450,
                    decresePercent: 70,
                  },
                  {
                    width: 700,
                    decresePercent: 60,
                  },
                ]),
                height: resizeList(250, [
                  {
                    width: 450,
                    decresePercent: 70,
                  },
                  {
                    width: 700,
                    decresePercent: 60,
                  },
                ]),
                borderRadius: "50%",
                position: "absolute",
              }}
              src="/woman.png"
              alt=""
            />
            <img
              style={{
                width: resizeList(300, [
                  {
                    width: 450,
                    decresePercent: 70,
                  },
                  {
                    width: 700,
                    decresePercent: 60,
                  },
                ]),
                position: "absolute",
                zIndex: 1,
              }}
              src="/frame-rustic.webp"
              alt=""
            />
          </div>
          <h2
            style={{
              margin: "10px 0",
              color: "#8A584C",
              fontFamily: "Cormorant Garamond",
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
            }}
          >
            Juliet Capulet
          </h2>
          <img
            style={{
              width: resizeList(243, [
                {
                  width: 450,
                  decresePercent: 70,
                },
                {
                  width: 700,
                  decresePercent: 60,
                },
              ]),
            }}
            src="/divider-rustic.webp"
            alt=""
          />
          <b
            style={{
              fontFamily: "Josefin Sans",
              color: "#85865F",
              fontSize: resizeList(25, [
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
              margin: "20px 0",
            }}
          >
            Daughter of
          </b>
          <p
            style={{
              fontFamily: "Josefin Sans",
              color: "#85865F",
              fontSize: resizeList(25, [
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
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            Lord Capulet
            <br />
            &
            <br />
            Lady Capulet
          </p>
          <div // Sosmed
            style={{
              color: "#8A584C",
              margin: "20px 0",
            }}
          >
            <FaFacebook
              style={{
                width: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                height: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
              }}
            />
            <FaTiktok
              style={{
                width: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                height: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
              }}
            />
            <FaInstagram
              style={{
                width: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                height: resizeList(40, [
                  {
                    width: 450,
                    decresePercent: 50,
                  },
                ]),
                margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

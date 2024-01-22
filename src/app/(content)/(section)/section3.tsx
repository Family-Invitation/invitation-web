import { useEffect, useState } from "react";
import { GiDiamondRing, GiAerialSignal } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
  IoLocationOutline,
  IoLocationSharp,
  IoFastFoodOutline,
} from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

export default function Section3() {
  const [windowWidth, setWindowWidth] = useState(0);

  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  function zeroReplace(n: number): string {
    return n > 9 ? `${n}` : `0${n}`;
  }

  useEffect(() => {
    const date = 1000 * 60 * 60 * 24;
    setCount(date);

    function f() {
      setWindowWidth(window.innerWidth);
    }

    f();

    window.addEventListener("resize", f);

    return () => window.removeEventListener("resize", f);
  }, []);

  useEffect(() => {
    if (count) {
      const timeout = setTimeout(() => {
        setCountdown({
          days: ~~(count / 1000 / 60 / 60 / 24),
          hours: ~~(count / 1000 / 60 / 60),
          minutes: ~~((count / 1000 / 60) % 60),
          seconds: ~~(count / 1000) % 60,
        });
        setCount((c) => c - 1000);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <div
      id="section3"
      style={{
        width: "100%",
        backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, #FFFFFF00 100%), url("https://i0.wp.com/zeinvitation.com/wp-content/uploads/2022/07/BACKGROUND_LEAVES_WATERCOLOR-01-Vertical-scaled.jpg?fit=1707%2C2560&ssl=1")`,
        zIndex: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          margin: "100px auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            marginTop: "20%",
            color: "#8A584C",
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
          Countdown to
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
          Our Happy Day
        </h2>
        <div // Countdown Group
          style={{
            margin: "50px 0",
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            height: resizeList(128, [
              {
                width: 450,
                decresePercent: 50,
              },
              {
                width: 600,
                decresePercent: 30,
              },
            ]),
          }}
        >
          <div // Days
            style={{
              margin: "0 5px",
              flex: 1,
              // height: 128,
              backgroundColor: "#8FA6AC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#F5EACF",
            }}
          >
            <span
              style={{
                fontSize: resizeList(60, [
                  {
                    width: 450,
                    decresePercent: 60,
                  },
                  {
                    width: 600,
                    decresePercent: 40,
                  },
                ]),
                fontWeight: 600,
                fontFamily: "Josefin Sans",
              }}
            >
              {zeroReplace(countdown.days)}
            </span>
            <span
              style={{
                fontSize: resizeList(19, [
                  {
                    width: 450,
                    decresePercent: 40,
                  },
                  {
                    width: 600,
                    decresePercent: 30,
                  },
                ]),
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Days
            </span>
          </div>
          <div // Hours
            style={{
              margin: "0 5px",
              flex: 1,
              // height: 128,
              backgroundColor: "#8FA6AC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#F5EACF",
            }}
          >
            <span
              style={{
                fontSize: resizeList(60, [
                  {
                    width: 450,
                    decresePercent: 60,
                  },
                  {
                    width: 600,
                    decresePercent: 40,
                  },
                ]),
                fontWeight: 600,
                fontFamily: "Josefin Sans",
              }}
            >
              {zeroReplace(countdown.hours)}
            </span>
            <span
              style={{
                fontSize: resizeList(19, [
                  {
                    width: 450,
                    decresePercent: 40,
                  },
                  {
                    width: 600,
                    decresePercent: 30,
                  },
                ]),
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Hours
            </span>
          </div>
          <div // Minutes
            style={{
              margin: "0 5px",
              flex: 1,
              // height: 128,
              backgroundColor: "#8FA6AC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#F5EACF",
            }}
          >
            <span
              style={{
                fontSize: resizeList(60, [
                  {
                    width: 450,
                    decresePercent: 60,
                  },
                  {
                    width: 600,
                    decresePercent: 40,
                  },
                ]),
                fontWeight: 600,
                fontFamily: "Josefin Sans",
              }}
            >
              {zeroReplace(countdown.minutes)}
            </span>
            <span
              style={{
                fontSize: resizeList(19, [
                  {
                    width: 450,
                    decresePercent: 40,
                  },
                  {
                    width: 600,
                    decresePercent: 30,
                  },
                ]),
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Minutes
            </span>
          </div>
          <div // Seconds
            style={{
              margin: "0 5px",
              flex: 1,
              // height: 128,
              backgroundColor: "#8FA6AC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#F5EACF",
            }}
          >
            <span
              style={{
                fontSize: resizeList(60, [
                  {
                    width: 450,
                    decresePercent: 60,
                  },
                  {
                    width: 600,
                    decresePercent: 40,
                  },
                ]),
                fontWeight: 600,
                fontFamily: "Josefin Sans",
              }}
            >
              {zeroReplace(countdown.seconds)}
            </span>
            <span
              style={{
                fontSize: resizeList(19, [
                  {
                    width: 450,
                    decresePercent: 40,
                  },
                  {
                    width: 600,
                    decresePercent: 30,
                  },
                ]),
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
              }}
            >
              Seconds
            </span>
          </div>
        </div>
        <div // Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#5F7161",
            fontFamily: "Josefin Sans",
            fontSize: resize(600, 20, 50),
          }}
        >
          <span>
            The highest happiness on earth is the happiness of marriage.
          </span>
          <strong>William Lyon Phelps</strong>
        </div>
        <div // Space
          style={{
            height: 100,
          }}
        />
        <div // Picture & Detail
          style={{
            minHeight: "100vh",
            width: "70%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div // Picture
            style={{
              width: "100%",
              height: 610,
              backgroundImage: `url("https://i.pinimg.com/564x/02/cc/12/02cc121cde3b6ed097f608cee5676823.jpg")`,
              backgroundPosition:
                windowWidth > 1100
                  ? "0 -250px"
                  : windowWidth > 730
                  ? "0 -150px"
                  : "center",
              transition: "ease-in 1000ms",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "white",
              borderRadius: "250px 250px 0 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              boxSizing: "border-box",
              padding: "100px 0",
              opacity: 0.8,
            }}
          >
            <div // Text
              style={{
                //   backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h2
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: resizeList(30, [
                    {
                      width: 450,
                      decresePercent: 50,
                    },
                    {
                      width: 750,
                      decresePercent: 30,
                    },
                  ]),
                  margin: 0,
                }}
              >
                Where & When
              </h2>
              <h1
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: resizeList(60, [
                    {
                      width: 450,
                      decresePercent: 50,
                    },
                    {
                      width: 750,
                      decresePercent: 30,
                    },
                  ]),
                  fontWeight: 600,
                  margin: "20px 0",
                }}
              >
                Wedding Day
              </h1>
              <div // Text
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontFamily: "Josefin Sans",
                  fontSize: resizeList(20, [
                    {
                      width: 450,
                      decresePercent: 60,
                    },
                    {
                      width: 750,
                      decresePercent: 50,
                    },
                  ]),
                }}
              >
                <span>
                  Gravitation is not responsible for people falling in love.
                </span>
                <strong>Albert Einstein</strong>
              </div>
            </div>
          </div>
          <div // Detail
            style={{
              minHeight: 100,
              backgroundColor: "white",
              display: "flex",
              flexDirection: windowWidth > 1000 ? "row" : "column",
            }}
          >
            <div // 1
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                padding: resizeList(50, [
                  {
                    width: 450,
                    decresePercent: 30,
                  },
                ]),
              }}
            >
              <GiDiamondRing
                style={{
                  width: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  height: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  color: "#4F583D",
                  margin: "10px 0",
                }}
              />
              <h2
                style={{
                  color: "#4F583D",
                  fontSize: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                Holy Matrimony
              </h2>
              <img
                style={{
                  width: "100%",
                  maxWidth: 243,
                }}
                src="/divider-rustic.webp"
                alt=""
              />
              <div // Detail
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  color: "#85865F",
                  margin: "10px 0",
                  lineHeight: 1.5,
                }}
              >
                <div // Date
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineCalendar
                    style={{
                      width: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      height: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      margin: "0 5px",
                    }}
                  />
                  <span>Sunday, 31 December 2023</span>
                </div>
                <div // Time
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiTimeFive
                    style={{
                      width: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      height: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      margin: "0 5px",
                    }}
                  />
                  <span>10.00 - 12.00 WIB</span>
                </div>
                <div // Location
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <IoLocationOutline
                      style={{
                        width: resizeList(16, [
                          {
                            width: 450,
                            decresePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decresePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <strong>Shangri-La Hotel Jakarta</strong>
                    <span>
                      Jl. Jenderal Sudirman No.Kav. 1, Karet Tengsin, Kecamatan
                      Tanah Abang, Kota Jakarta Pusat, DKI Jakarta 10220
                    </span>
                  </div>
                </div>
              </div>
              <button // Map
                style={{
                  margin: "10px 0",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Josefin Sans",
                  backgroundColor: "#8A584C",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 3,
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoLocationSharp
                  style={{
                    width: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    height: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    margin: "0 5px",
                  }}
                />
                <span>Open Map</span>
              </button>
              <button // Calendar
                style={{
                  margin: "10px 0",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Josefin Sans",
                  backgroundColor: "#8A584C",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 3,
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdOutlineDateRange
                  style={{
                    width: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    height: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    margin: "0 5px",
                  }}
                />
                <span>Add To Calendar</span>
              </button>
            </div>
            <div // 2
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                padding: resizeList(50, [
                  {
                    width: 450,
                    decresePercent: 30,
                  },
                ]),
              }}
            >
              <IoFastFoodOutline
                style={{
                  width: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  height: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  color: "#4F583D",
                  margin: "10px 0",
                }}
              />
              <h2
                style={{
                  color: "#4F583D",
                  fontSize: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                Wedding Reception
              </h2>
              <img
                style={{
                  width: "100%",
                  maxWidth: 243,
                }}
                src="/divider-rustic.webp"
                alt=""
              />
              <div // Detail
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  color: "#85865F",
                  margin: "10px 0",
                  lineHeight: 1.5,
                }}
              >
                <div // Date
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineCalendar
                    style={{
                      width: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      height: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      margin: "0 5px",
                    }}
                  />
                  <span>Sunday, 31 December 2023</span>
                </div>
                <div // Time
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiTimeFive
                    style={{
                      width: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      height: resizeList(16, [
                        {
                          width: 450,
                          decresePercent: 30,
                        },
                      ]),
                      margin: "0 5px",
                    }}
                  />
                  <span>18.00 - 21.00</span>
                </div>
                <div // Location
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <IoLocationOutline
                      style={{
                        width: resizeList(16, [
                          {
                            width: 450,
                            decresePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decresePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <strong>Shangri-La Hotel Jakarta</strong>
                    <span>
                      Jl. Jenderal Sudirman No.Kav. 1, Karet Tengsin, Kecamatan
                      Tanah Abang, Kota Jakarta Pusat, DKI Jakarta 10220
                    </span>
                  </div>
                </div>
              </div>
              <button // Map
                style={{
                  margin: "10px 0",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Josefin Sans",
                  backgroundColor: "#8A584C",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 3,
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoLocationSharp
                  style={{
                    width: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    height: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    margin: "0 5px",
                  }}
                />
                <span>Open Map</span>
              </button>
              <button // Calendar
                style={{
                  margin: "10px 0",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Josefin Sans",
                  backgroundColor: "#8A584C",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 3,
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdOutlineDateRange
                  style={{
                    width: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    height: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    margin: "0 5px",
                  }}
                />
                <span>Add To Calendar</span>
              </button>
            </div>
          </div>
          <div // Footer
            style={{
              marginBottom: "20%",
              backgroundColor: "white",
              borderBottomLeftRadius: 250,
              borderBottomRightRadius: 250,
            }}
          >
            <div // Live Streaming
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                padding: 50,
              }}
            >
              <GiAerialSignal
                style={{
                  width: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  height: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  color: "#4F583D",
                  margin: "10px 0",
                }}
              />
              <h2
                style={{
                  color: "#4F583D",
                  fontSize: resizeList(50, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                Live Streaming
              </h2>
              <img
                style={{
                  width: "100%",
                  maxWidth: 243,
                }}
                src="/divider-rustic.webp"
                alt=""
              />
              <div // Detail
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  color: "#85865F",
                  margin: "10px 0",
                  textAlign: "center",
                }}
              >
                We will broadcast the wedding ceremony virtually
              </div>
              <button // Join
                style={{
                  margin: "10px 0",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decresePercent: 30,
                    },
                  ]),
                  fontFamily: "Josefin Sans",
                  backgroundColor: "#8A584C",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: 3,
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsFillCameraVideoFill
                  style={{
                    width: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    height: resizeList(16, [
                      {
                        width: 450,
                        decresePercent: 30,
                      },
                    ]),
                    margin: "0 5px",
                  }}
                />
                <span>Join</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

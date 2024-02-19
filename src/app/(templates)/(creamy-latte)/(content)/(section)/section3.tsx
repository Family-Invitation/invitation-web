import { useEffect, useState } from "react";
import useResizeFont from "@/hooks/useResize";
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
import { Data } from "@/interfaces/dataInterfaces";

export default function Section3({ data }: Readonly<any>) {
  const targetDate = new Date(data.section3.date).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const { resizeList, windowWidth } = useResizeFont();

  const redirectToMap = (location: string) => {
    window.open(location, "_blank");
  };

  return (
    <div
      id="section3"
      style={{
        width: "100%",
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
      }}
      className="bg-opacity-50 bg-[#845A27]"
    >
      <div
        style={{
          // margin: "100px auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="max-w-7xl bg-[#75634e82] rounded-t-[800px] rounded-b-[500px] md:rounded-b-[300px] px-0 md:px-14 md:mx-auto mx-6 md:my-[100px] my-12"
      >
        <div
          style={{
            // margin: "100px auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="my-8 md:my-[100px] mx-auto"
        >
          <h3
            style={{
              // marginTop: "20%",
              color: "#fff",
              fontFamily: "Josefin Sans",
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
              // margin: 0,
            }}
            data-aos="zoom-in"
            className="mx-0 mt-6 md:mt-0"
          >
            {data.section3.text_countdown}
          </h3>
          <h2
            style={{
              color: "#fff",
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
            data-aos="zoom-in"
          >
            {data.section3.text_our_happy_day}
          </h2>
          <div // Countdown Group
            style={{
              // margin: "50px 0",
              // width: "100%",
              display: "flex",
              justifyContent: "space-between",
              height: resizeList(128, [
                {
                  width: 450,
                  decreasePercent: 50,
                },
                {
                  width: 600,
                  decreasePercent: 30,
                },
              ]),
            }}
            data-aos="zoom-in"
            className="md:w-[70%] w-[85%] my-[50px]"
          >
            <div // Days
              style={{
                margin: "0 5px",
                flex: 1,
                // height: 128,
                // backgroundColor: "#8FA6AC",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <span
                style={{
                  fontSize: resizeList(60, [
                    {
                      width: 450,
                      decreasePercent: 60,
                    },
                    {
                      width: 600,
                      decreasePercent: 40,
                    },
                  ]),
                  fontWeight: 600,
                  fontFamily: "Josefin Sans",
                }}
              >
                {/* {zeroReplace(countdown.days)} */}
                {timeLeft.days}
              </span>
              <span
                style={{
                  fontSize: resizeList(19, [
                    {
                      width: 450,
                      decreasePercent: 40,
                    },
                    {
                      width: 600,
                      decreasePercent: 30,
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
                // backgroundColor: "#8FA6AC",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <span
                style={{
                  fontSize: resizeList(60, [
                    {
                      width: 450,
                      decreasePercent: 60,
                    },
                    {
                      width: 600,
                      decreasePercent: 40,
                    },
                  ]),
                  fontWeight: 600,
                  fontFamily: "Josefin Sans",
                }}
              >
                {/* {zeroReplace(countdown.hours)} */}
                {timeLeft.hours}
              </span>
              <span
                style={{
                  fontSize: resizeList(19, [
                    {
                      width: 450,
                      decreasePercent: 40,
                    },
                    {
                      width: 600,
                      decreasePercent: 30,
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
                // backgroundColor: "#8FA6AC",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <span
                style={{
                  fontSize: resizeList(60, [
                    {
                      width: 450,
                      decreasePercent: 60,
                    },
                    {
                      width: 600,
                      decreasePercent: 40,
                    },
                  ]),
                  fontWeight: 600,
                  fontFamily: "Josefin Sans",
                }}
              >
                {/* {zeroReplace(countdown.minutes)} */}
                {timeLeft.minutes}
              </span>
              <span
                style={{
                  fontSize: resizeList(19, [
                    {
                      width: 450,
                      decreasePercent: 40,
                    },
                    {
                      width: 600,
                      decreasePercent: 30,
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
                // backgroundColor: "#8FA6AC",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <span
                style={{
                  fontSize: resizeList(60, [
                    {
                      width: 450,
                      decreasePercent: 60,
                    },
                    {
                      width: 600,
                      decreasePercent: 40,
                    },
                  ]),
                  fontWeight: 600,
                  fontFamily: "Josefin Sans",
                }}
              >
                {/* {zeroReplace(countdown.seconds)} */}
                {timeLeft.seconds}
              </span>
              <span
                style={{
                  fontSize: resizeList(19, [
                    {
                      width: 450,
                      decreasePercent: 40,
                    },
                    {
                      width: 600,
                      decreasePercent: 30,
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
              color: "#fff",
              fontFamily: "Josefin Sans",
              fontSize: "20px",
            }}
            data-aos="zoom-in"
          >
            {/* <span>
            The highest happiness on earth is the happiness of marriage.
          </span> */}
            <strong>{data.section3.formatted.date}</strong>
          </div>
          <div // Space
            className="h-12 md:h-[100px]"
          />
          <div // Picture & Detail
            style={{
              minHeight: "100vh",
              // width: "70%",
              display: "flex",
              flexDirection: "column",
            }}
            className=" w-auto mx-6 md:mx-auto"
          >
            <div // Picture
              style={{
                width: "100%",
                height: 610,
                backgroundImage: `url("${data.section3.content_box.background_box_picture}")`,
                backgroundPosition:
                  windowWidth > 1100
                    ? "0 -400px"
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
                opacity: 1,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div className="absolute inset-0  bg-black opacity-30 transition-opacity duration-300"></div>
              <div // Text
                style={{
                  //   backgroundColor: "red",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                data-aos="zoom-in"
              >
                {/* <h2
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: resizeList(30, [
                    {
                      width: 450,
                      decreasePercent: 50,
                    },
                    {
                      width: 750,
                      decreasePercent: 30,
                    },
                  ]),
                  margin: 0,
                }}
              >
                Where & When
              </h2> */}
                <h1
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: resizeList(60, [
                      {
                        width: 450,
                        decreasePercent: 50,
                      },
                      {
                        width: 750,
                        decreasePercent: 30,
                      },
                    ]),
                    fontWeight: 600,
                    margin: "20px 0",
                  }}
                >
                  {data.section3.content_box.text_title}
                </h1>
                <div // Text
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "Josefin Sans",
                    fontSize: resizeList(20, [
                      {
                        width: 750,
                        decreasePercent: 50,
                      },
                    ]),
                  }}
                  className="px-2"
                  data-aos="zoom-in"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.section3.content_box.text_invite,
                    }}
                  >
                    {/* <em>Assalamu'alaikum Wr.Wb.</em>
                  <br />
                  <br />
                  Tanpa mengurangi rasa hormat, kami mengundang
                  Bapak/Ibu/Saudara/i untuk hadir dihari bahagia Pernikahan kami
                  yang akan di laksanakan pada: */}
                  </span>
                  {/* <strong>Albert Einstein</strong> */}
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
                      decreasePercent: 30,
                    },
                  ]),
                }}
                data-aos="fade-up"
              >
                <GiDiamondRing
                  style={{
                    width: resizeList(50, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    height: resizeList(50, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    color: "#4F583D",
                    margin: "10px 0",
                  }}
                />
                <h2
                  style={{
                    color: "#333",
                    fontSize: resizeList(50, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 600,
                    textAlign: "center",
                    margin: "10px 0",
                  }}
                >
                  {data.section3.content_box.wedding.text_title}
                </h2>
                {/* <img
                style={{
                  width: "100%",
                  maxWidth: 243,
                }}
                src="/divider-rustic.webp"
                alt=""
              /> */}
                <div // Detail
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: resizeList(16, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    color: "#333",
                    margin: "10px 0",
                    lineHeight: 1.5,
                  }}
                >
                  <div // Date
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="w-full"
                  >
                    <AiOutlineCalendar
                      style={{
                        width: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>{data.section3.content_box.wedding.date}</span>
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
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>{data.section3.content_box.wedding.time}</span>
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
                              decreasePercent: 30,
                            },
                          ]),
                          height: resizeList(16, [
                            {
                              width: 450,
                              decreasePercent: 30,
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
                      <span>{data.section3.content_box.wedding.address}</span>
                    </div>
                  </div>
                </div>
                {data.section3.content_box.wedding.button.map.enabled && (
                  <button // Map
                    style={{
                      margin: "10px 0",
                      fontSize: resizeList(16, [
                        {
                          width: 450,
                          decreasePercent: 30,
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
                    onClick={() =>
                      redirectToMap(
                        data.section3.content_box.wedding.button.map.href
                      )
                    }
                  >
                    <IoLocationSharp
                      style={{
                        width: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>
                      {data.section3.content_box.wedding.button.map.text}
                    </span>
                  </button>
                )}
                {data.section3.content_box.wedding.button.calendar.enabled && (
                  <button // Calendar
                    style={{
                      margin: "10px 0",
                      fontSize: resizeList(16, [
                        {
                          width: 450,
                          decreasePercent: 30,
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
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>
                      {data.section3.content_box.wedding.button.calendar.text}
                    </span>
                  </button>
                )}
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
                      decreasePercent: 30,
                    },
                  ]),
                }}
                data-aos="fade-up"
              >
                <IoFastFoodOutline
                  style={{
                    width: resizeList(50, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    height: resizeList(50, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    color: "#4F583D",
                    margin: "10px 0",
                  }}
                />
                <h2
                  style={{
                    color: "#333",
                    fontSize: resizeList(50, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 600,
                    textAlign: "center",
                    margin: "10px 0",
                  }}
                >
                  {data.section3.content_box.reception.text_title}
                </h2>
                {/* <img
                style={{
                  width: "100%",
                  maxWidth: 243,
                }}
                src="/divider-rustic.webp"
                alt=""
              /> */}
                <div // Detail
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: resizeList(16, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    color: "#333",
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
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>{data.section3.content_box.reception.date}</span>
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
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>{data.section3.content_box.reception.time}</span>
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
                              decreasePercent: 30,
                            },
                          ]),
                          height: resizeList(16, [
                            {
                              width: 450,
                              decreasePercent: 30,
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
                      {/* <strong>Shangri-La Hotel Jakarta</strong> */}
                      <span>{data.section3.content_box.reception.address}</span>
                    </div>
                  </div>
                </div>
                {data.section3.content_box.reception.button.map.enabled && (
                  <button // Map
                    style={{
                      margin: "10px 0",
                      fontSize: resizeList(16, [
                        {
                          width: 450,
                          decreasePercent: 30,
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
                    onClick={() =>
                      redirectToMap(
                        data.section3.content_box.wedding.button.map.href
                      )
                    }
                  >
                    <IoLocationSharp
                      style={{
                        width: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>
                      {data.section3.content_box.reception.button.map.text}
                    </span>
                  </button>
                )}
                {data.section3.content_box.reception.button.calendar
                  .enabled && (
                  <button // Calendar
                    style={{
                      margin: "10px 0",
                      fontSize: resizeList(16, [
                        {
                          width: 450,
                          decreasePercent: 30,
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
                            decreasePercent: 30,
                          },
                        ]),
                        height: resizeList(16, [
                          {
                            width: 450,
                            decreasePercent: 30,
                          },
                        ]),
                        margin: "0 5px",
                      }}
                    />
                    <span>
                      {data.section3.content_box.reception.button.calendar.text}
                    </span>
                  </button>
                )}
              </div>
            </div>
            <div // Footer
              style={{
                backgroundColor: "white",
                // borderBottomLeftRadius: 250,
                // borderBottomRightRadius: 250,
                minHeight: 100,
              }}
              className=" rounded-b-[400px]"
            >
              {/* <div // Live Streaming
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
                      decreasePercent: 30,
                    },
                  ]),
                  height: resizeList(50, [
                    {
                      width: 450,
                      decreasePercent: 30,
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
                      decreasePercent: 30,
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
                      decreasePercent: 30,
                    },
                  ]),
                  color: "#85865F",
                  margin: "10px 0",
                  textAlign: "center",
                }}
              >
                Kami juga berencana untuk mempublikasikan pernikahan kami secara
                virtual melalui live Instagram yang bisa anda ikuti melalui link
                berikut:
              </div>
              <button // Join
                style={{
                  margin: "10px 0",
                  fontSize: resizeList(16, [
                    {
                      width: 450,
                      decreasePercent: 30,
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
                        decreasePercent: 30,
                      },
                    ]),
                    height: resizeList(16, [
                      {
                        width: 450,
                        decreasePercent: 30,
                      },
                    ]),
                    margin: "0 5px",
                  }}
                />
                <span>Join</span>
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

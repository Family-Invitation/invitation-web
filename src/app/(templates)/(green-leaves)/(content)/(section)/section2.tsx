import useResizeFont from "@/hooks/useResize";
import { Data } from "@/interfaces/dataInterfaces";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";

export default function Section2({ data }: Readonly<any>) {
  const { resizeList, windowWidth } = useResizeFont();

  return (
    <div
      id="section2"
      style={{
        boxSizing: "border-box",
        // padding: "100px 50px",
        width: "100%",
        backgroundImage:
          'linear-gradient(180deg, #ffffff00, #ffffff00, #ffffff00, #ffffffff), url("/bg-section2.webp")',
        backgroundSize: "cover !important",
        backgroundRepeat: "repeat",
        // backgroundPosition: "center",
        backgroundColor: "#fff",
        backgroundPosition: "bottom center",

        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF00 100%)",
          opacity: 1,
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          height: "100%",
          width: "100%",
          padding: "100px 0",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div // Text
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            {/* <h2
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
          </h2> */}
            {/* <h1
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
          </h1> */}
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
                    decreasePercent: 50,
                  },
                  {
                    width: 700,
                    decreasePercent: 30,
                  },
                ]),
                fontFamily: "Josefin Sans",
                color: "#8FA6AC",
                fontSize: resizeList(30, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                  {
                    width: 700,
                    decreasePercent: 20,
                  },
                ]),
                fontWeight: 400,
                fontStyle: "italic",
              }}
              data-aos="zoom-in"
            >
              <p
                style={{ margin: "10px 0", fontWeight: 300 }}
                dangerouslySetInnerHTML={{
                  __html: data.section2.quotes.replaceAll("\n", "<br>"),
                }}
              ></p>
              {/* <strong>Unknown</strong> */}
            </div>
          </div>
          <div // Foto & Detail
            style={{
              display: "flex",
              // height: "100vh",
            }}
          >
            {data.switch_couple ? <Woman data={data} /> : <Man data={data} />}
            <div // Segment 2
              style={{
                flex: resizeList(1, [
                  {
                    width: 450,
                    decreasePercent: 90,
                  },
                  {
                    width: 700,
                    decreasePercent: 50,
                  },
                ]),
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
                fontFamily: "Cormorant Garamond",
                color: "#8A584C",
              }}
            >
              <div
                style={{
                  height: (
                    data.section2.is_used_picture == undefined
                      ? true
                      : data.section2.is_used_picture
                  )
                    ? resizeList(281, [
                        {
                          width: 450,
                          decreasePercent: 70,
                        },
                        {
                          width: 700,
                          decreasePercent: 60,
                        },
                      ])
                    : "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-aos="zoom-in"
              >
                &
              </div>
            </div>
            {data.switch_couple ? <Man data={data} /> : <Woman data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Man({ data }: any) {
  const { resizeList, windowWidth } = useResizeFont();
  return (
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
      {(data.section2.is_used_picture == undefined
        ? true
        : data.section2.is_used_picture) && (
        <div // Picture
          style={{
            width: "100%",
            height: resizeList(281, [
              {
                width: 450,
                decreasePercent: 70,
              },
              {
                width: 700,
                decreasePercent: 60,
              },
            ]),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
          data-aos="zoom-in"
        >
          <img
            style={{
              width: resizeList(250, [
                {
                  width: 450,
                  decreasePercent: 70,
                },
                {
                  width: 700,
                  decreasePercent: 60,
                },
              ]),
              height: resizeList(250, [
                {
                  width: 450,
                  decreasePercent: 70,
                },
                {
                  width: 700,
                  decreasePercent: 60,
                },
              ]),
              borderRadius: "50%",
              position: "absolute",
            }}
            src={data.section2.man.picture}
            alt=""
          />
          <img
            style={{
              width: resizeList(300, [
                {
                  width: 450,
                  decreasePercent: 70,
                },
                {
                  width: 700,
                  decreasePercent: 60,
                },
              ]),
              position: "absolute",
              zIndex: 1,
            }}
            src="/frame-rustic.webp"
            alt=""
          />
        </div>
      )}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        data-aos="zoom-in"
      >
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "70px 0px 10px",
            color: "#8A584C",
            width: "100%",
            height: 70,
            fontFamily: "Cormorant Garamond",
            fontSize: resizeList(40, [
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
          }}
        >
          {data.section2.man.name}
        </h2>
        <img
          style={{
            width: resizeList(243, [
              {
                width: 450,
                decreasePercent: 70,
              },
              {
                width: 700,
                decreasePercent: 60,
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
                decreasePercent: 50,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            fontWeight: 600,
            margin: "20px 0",
          }}
        >
          {data.section2.man.text_son_of}
        </b>
        <p
          style={{
            fontFamily: "Josefin Sans",
            color: "#85865F",
            fontSize: resizeList(25, [
              {
                width: 450,
                decreasePercent: 50,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            fontWeight: 300,
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          {data.section2.man.dad}
          <br />
          &
          <br />
          {data.section2.man.mom}
        </p>
        <div // Sosmed
          style={{
            color: "#8A584C",
            margin: "20px 0",
            display: "flex",
          }}
        >
          {data.section2.man.social_media.facebook.enabled && (
            <a
              href={data.section2.man.social_media.facebook.href}
              target="_blank"
            >
              <FaFacebook
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
          {data.section2.man.social_media.tiktok.enabled && (
            <a
              href={data.section2.man.social_media.tiktok.href}
              target="_blank"
            >
              <FaTiktok
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
          {data.section2.man.social_media.instagram.enabled && (
            <a
              href={data.section2.man.social_media.instagram.href}
              target="_blank"
            >
              <FaInstagram
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
          {data.section2.man.social_media.twitter.enabled && (
            <a
              href={data.section2.man.social_media.twitter.href}
              target="_blank"
            >
              <FaXTwitter
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Woman({ data }: any) {
  const { resizeList, windowWidth } = useResizeFont();
  return (
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
      {(data.section2.is_used_picture == undefined
        ? true
        : data.section2.is_used_picture) && (
        <div // Picture
          style={{
            width: "100%",
            height: resizeList(281, [
              {
                width: 450,
                decreasePercent: 70,
              },
              {
                width: 700,
                decreasePercent: 60,
              },
            ]),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
          data-aos="zoom-in"
        >
          <img
            style={{
              width: resizeList(250, [
                {
                  width: 450,
                  decreasePercent: 70,
                },
                {
                  width: 700,
                  decreasePercent: 60,
                },
              ]),
              height: resizeList(250, [
                {
                  width: 450,
                  decreasePercent: 70,
                },
                {
                  width: 700,
                  decreasePercent: 60,
                },
              ]),
              borderRadius: "50%",
              position: "absolute",
            }}
            src={data.section2.woman.picture}
            alt=""
          />
          <img
            style={{
              width: resizeList(300, [
                {
                  width: 450,
                  decreasePercent: 70,
                },
                {
                  width: 700,
                  decreasePercent: 60,
                },
              ]),
              position: "absolute",
              zIndex: 1,
            }}
            src="/frame-rustic.webp"
            alt=""
          />
        </div>
      )}
      <div
        style={{
          flex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        data-aos="zoom-in"
      >
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "70px 0px 10px",
            color: "#8A584C",
            width: "100%",
            height: 70,
            fontFamily: "Cormorant Garamond",
            fontSize: resizeList(40, [
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
          }}
        >
          {data.section2.woman.name}
        </h2>
        <img
          style={{
            width: resizeList(243, [
              {
                width: 450,
                decreasePercent: 70,
              },
              {
                width: 700,
                decreasePercent: 60,
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
                decreasePercent: 50,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            fontWeight: 600,
            margin: "20px 0",
          }}
        >
          {data.section2.woman.text_daughter_of}
        </b>
        <p
          style={{
            fontFamily: "Josefin Sans",
            color: "#85865F",
            fontSize: resizeList(25, [
              {
                width: 450,
                decreasePercent: 50,
              },
              {
                width: 700,
                decreasePercent: 30,
              },
            ]),
            fontWeight: 300,
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          {data.section2.woman.dad}
          <br />
          &
          <br />
          {data.section2.woman.mom}
        </p>
        <div // Sosmed
          style={{
            color: "#8A584C",
            margin: "20px 0",
            display: "flex",
          }}
        >
          {data.section2.woman.social_media.facebook.enabled && (
            <a
              href={data.section2.woman.social_media.facebook.href}
              target="_blank"
            >
              <FaFacebook
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
          {data.section2.woman.social_media.tiktok.enabled && (
            <a
              href={data.section2.woman.social_media.tiktok.href}
              target="_blank"
            >
              <FaTiktok
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
          {data.section2.woman.social_media.instagram.enabled && (
            <a
              href={data.section2.woman.social_media.instagram.href}
              target="_blank"
            >
              <FaInstagram
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
          {data.section2.woman.social_media.twitter.enabled && (
            <a
              href={data.section2.woman.social_media.twitter.href}
              target="_blank"
            >
              <FaXTwitter
                size={resizeList(40, [
                  {
                    width: 450,
                    decreasePercent: 50,
                  },
                ])}
                style={{
                  margin: windowWidth > 450 ? "5px 15px" : "5px 5px",
                }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

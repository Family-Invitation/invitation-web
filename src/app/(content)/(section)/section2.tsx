import useResizeFont from "@/hooks/useResize";
import { Data } from "@/interfaces/dataInterfaces";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Section2({ data }: Readonly<Data>) {
  const { resizeList, windowWidth } = useResizeFont();

  const mempelaiPria = data?.mempelaiPria?.namaLengkap;
  const ayahMempelaiPria = data?.mempelaiPria?.namaOrangTua?.bapak;
  const ibuMempelaiPria = data?.mempelaiPria?.namaOrangTua?.ibu;
  const mempelaiWanita = data?.mempelaiWanita?.namaLengkap;
  const ayahMempelaiWanita = data?.mempelaiWanita?.namaOrangTua?.bapak;
  const ibuMempelaiWanita = data?.mempelaiWanita?.namaOrangTua?.ibu;

  return (
    <div
      id="section2"
      style={{
        boxSizing: "border-box",
        // padding: "100px 50px",
        width: "100%",
        backgroundImage: 'url("/bg-section2.webp")',
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
          >
            <p style={{ margin: "10px 0", fontWeight: 300 }}>
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri,agar kamu cenderung
              dan merasa tentram kepadanya, dan Dia menjadikandi antaramu rasa
              kasih dan sayang. <br />
              <br /> ( Ar-Rum 21 )
            </p>
            {/* <strong>Unknown</strong> */}
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
                src="/man.jpeg"
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
            <h2
              style={{
                margin: "10px 0",
                color: "#8A584C",
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
              {mempelaiPria}
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
              Son of
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
              {ayahMempelaiPria}
              <br />
              &
              <br />
              {ibuMempelaiPria}
            </p>
            <div // Sosmed
              style={{
                color: "#8A584C",
                margin: "20px 0",
                display: "flex",
              }}
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
            </div>
          </div>
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
                src="/woman.jpeg"
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
            <h2
              style={{
                margin: "10px 0",
                color: "#8A584C",
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
              {mempelaiWanita}
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
              Daughter of
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
              {ayahMempelaiWanita}
              <br />
              &
              <br />
              {ibuMempelaiWanita}
            </p>
            <div // Sosmed
              style={{
                color: "#8A584C",
                margin: "20px 0",
                display: "flex",
              }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

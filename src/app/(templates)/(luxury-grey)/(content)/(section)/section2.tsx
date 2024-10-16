import React from "react";
import { FaInstagram } from "react-icons/fa";

type Props = {};

const section2 = ({ data }: Readonly<any>) => {
  return (
    <div
      className="flex flex-col justify-center items-center py-8"
      style={{
        backgroundImage: "linear-gradient(180deg, #404747 0%, #3A3E3E 100%)",
      }}
    >
      <h2 className="text-white text-2xl font-playFair" data-aos="fade-up">
        Our Wedding
      </h2>
      <h4
        className="text-white mt-3 font-times text-center text-sm italic px-2"
        data-aos="fade-up"
      >
        Tanpa mengurangi rasa hormat, kami bermaksud mengundang
        Bapak/Ibu/Saudara/I untuk menghadiri acara Pernikahan kami
      </h4>

      {/* //groom Card*/}
      <div className="mt-5 px-5 h-full w-full" data-aos="fade-up">
        <div className="flex w-full h-full shadow-black shadow-md rounded-tr-[32px]">
          <div
            className="w-1/5"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #A19788 0%, #2C3333 70%)",
            }}
          >
            <div className="flex justify-center items-center h-full relative">
              <div className=" rotate-90 text-white  text-4xl font-playFair">
                GROOM
              </div>
            </div>
          </div>
          <div
            className="w-4/5 relative  h-[400px] rounded-tr-[32px] bg-cover bg-center bg-no-repeat opacity-90"
            style={{
              backgroundImage: `url('${data.section2.man?.picture}')`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 mb-4 border border-blue-50 bg-transparent mx-4 rounded-xl text-center text-white">
              <div className="absolute inset-0 backdrop-blur-[2px] bg-black bg-opacity-30 rounded-xl"></div>{" "}
              <div className="relative z-10">
                <h4 className="text-lg font-shippory font-semibold">
                  {" "}
                  {data?.section2?.man?.name}
                </h4>
                <h4 className="text-xs font-shippory">
                  {data?.section2.man.text_son_of} {data?.section2?.man?.dad} &{" "}
                  <br />
                  {data?.section2?.man?.mom}
                </h4>
                {data?.section2?.man?.social_media?.instagram?.enabled && (
                  <div className="flex justify-center items-center mt-2 relative z-10">
                    <a
                      href={data?.section2?.man?.social_media?.instagram?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex bg-black jutify-center items-center py-1 px-2 rounded-md font-combo "
                    >
                      <span className="mr-1">
                        <FaInstagram />
                      </span>
                      {data?.section2?.man?.name}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white mt-5 font-dancingScript text-center text-3xl"
        data-aos="zoom-in"
      >
        - {data?.man_called} & {data?.woman_called} -
      </div>

      {/* //bride Card*/}
      <div className="mt-6 px-5 h-full w-full shado" data-aos="fade-up">
        <div className="flex w-full h-full shadow-black shadow-md rounded-tl-[32px]">
          <div
            className="w-4/5 relative h-[400px] rounded-tl-[32px] bg-cover bg-center bg-no-repeat opacity-90"
            style={{
              backgroundImage: `url('${data.section2.woman?.picture}')`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 mb-4 border border-blue-50 bg-transparent mx-4 rounded-xl text-center text-white">
              <div className="absolute inset-0 backdrop-blur-[2px] bg-black bg-opacity-30 rounded-xl"></div>{" "}
              {/* Light blur overlay */}
              <div className="relative z-10">
                <h4 className="text-lg font-shippory font-semibold">
                  {data?.section2?.woman?.name}
                </h4>
                <h4 className="text-xs font-shippory">
                  {data?.section2.woman.text_daughter_of}{" "}
                  {data?.section2?.woman?.dad} & <br />
                  {data?.section2?.woman?.mom}
                </h4>
                {data?.section2?.woman?.social_media?.instagram?.enabled && (
                  <div className="flex justify-center items-center mt-2 relative z-10">
                    <a
                      href={
                        data?.section2?.woman?.social_media?.instagram?.href
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex bg-black jutify-center items-center py-1 px-2 rounded-md font-combo"
                    >
                      <span className="mr-1">
                        <FaInstagram />
                      </span>
                      {data?.section2?.woman?.name}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="w-1/5"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #A19788 0%, #2C3333 70%)",
            }}
          >
            <div className="flex justify-center items-center h-full relative">
              <div className=" rotate-90 text-white  text-4xl font-playFair">
                BRIDE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;

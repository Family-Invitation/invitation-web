import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import YoutubeVideo from "../YoutubeVideo";

type Props = {
  data: {
    section5: {
      pictures: any;
      video_id: string;
    };
  };
};

const MomentGallery = ({ data }: Readonly<Props>) => {
  const listDataImage = [
    {
      url: "https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754287-scaled-1.jpg",
    },
    {
      url: "https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754256-scaled-1.jpg",
    },
    {
      url: "https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754224-scaled-1.jpg",
    },
    {
      url: "https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754224-scaled-1.jpg",
    },
    {
      url: "https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754224-scaled-1.jpg",
    },
    {
      url: "https://hi.momenkita.id/wp-content/uploads/2023/10/pexels-ba-tik-3754224-scaled-1.jpg",
    },
  ];
  return (
    <Gallery id="my-gallery">
      <div
        style={{
          width: "100%",
          margin: "20px 0",
        }}
      >
        <YoutubeVideo
          useMargin={false}
          videoId={data.section5?.video_id ?? ""}
        />
      </div>
      <div className="grid grid-cols-6 gap-3 w-full" data-aos="fade-up">
        {data?.section5?.pictures.map(
          ({ url: imgUrl }: { url: string }, i: number) => (
            <Item<HTMLImageElement>
              original={imgUrl}
              thumbnail={imgUrl}
              width="auto"
              height="auto"
              id={i}
              key={imgUrl}
            >
              {({ ref, open }) => (
                <div
                  className={`relative overflow-hidden cursor-pointer group ${
                    i === 0
                      ? "col-span-6"
                      : i === 1
                      ? "col-span-4"
                      : i === 2
                      ? "col-span-2"
                      : "col-span-2"
                  }`}
                  style={{ height: "200px" }}
                  onClick={open}
                >
                  <img
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                    src={imgUrl}
                    ref={ref}
                    alt=""
                  />
                  <div className="absolute inset-0 rounded-sm  bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              )}
            </Item>
          )
        )}
      </div>
    </Gallery>
  );
};

export default MomentGallery;

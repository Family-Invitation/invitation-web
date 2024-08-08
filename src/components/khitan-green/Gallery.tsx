import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

type Props = {
  data: {
    section5: {
      pictures: any;
    };
  };
};

const KhitanGreenGallery = ({ data }: Readonly<Props>) => {
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
      <div className="grid grid-cols-6  gap-3 w-full" data-aos="fade-up">
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
              {({ ref, open }) => {
                return (
                  <div
                    className={`relative overflow-hidden cursor-pointer group col-span-3 md:col-span-2 h-[220px] md:h-[350px]`}
                    // style={{ height: "350px" }}
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
                      alt="" />
                    <div className="absolute inset-0 rounded-sm  bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                );
              }}
            </Item>
          )
        )}
      </div>
    </Gallery>
  );
};

export default KhitanGreenGallery;

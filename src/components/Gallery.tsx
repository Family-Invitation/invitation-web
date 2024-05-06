import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

type GalleryComponentProps = {
  data: any;
};

const GalleryComponent = ({ data }: GalleryComponentProps) => {
  const templateActive = data?.template;
  const borderColor = "#D2B591";
  return (
    <Gallery id="my-gallery">
      {data.section5.pictures.map(
        (
          {
            url: imgUrl,
            width = 1600,
            height = 1600,
          }: { url: string; width: number; height: number },
          i: number
        ) => (
          <Item<HTMLImageElement>
            original={imgUrl}
            thumbnail={imgUrl}
            width={width}
            height={height}
            // cropped={false}
            alt="Photo of seashore by Folkert Gorter"
            // You can pass string id
            id={i}
            key={imgUrl}
          >
            {({ ref, open }) => (
              <div
                className="relative overflow-hidden inline-block cursor-pointer"
                onClick={open}
              >
                <img
                  style={{
                    background: borderColor,
                    width: 1600,
                    aspectRatio: "9/16",
                    objectFit: "cover",
                  }}
                  className={`rounded-md p-1 transition-transform duration-300 transform`}
                  src={imgUrl}
                  ref={ref}
                  alt=""
                />
                <div className="absolute inset-0 rounded-sm m-1 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            )}
          </Item>
        )
      )}
    </Gallery>
  );
};

export default GalleryComponent;

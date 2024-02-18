import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

type GalleryComponentProps = {
  data: any;
};

const GalleryComponent = ({ data }: GalleryComponentProps) => {
  return (
    <Gallery id="my-gallery">
      {data.section5.pictures.map(
        ({ url: imgUrl }: { url: string }, i: number) => (
          <Item<HTMLImageElement>
            original={imgUrl}
            thumbnail={imgUrl}
            width="1600"
            height="1600"
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
                  className="bg-[#819575] rounded-md p-1 transition-transform duration-300 transform hover:scale-105"
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

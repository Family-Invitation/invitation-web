import React, { useState } from "react";
import YoutubeVideo from "../YoutubeVideo";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaExpand,
} from "react-icons/fa";

type Props = {
  data: {
    section5: {
      pictures: any;
      video_id: string;
    };
  };
};

const MomentGallery = ({ data }: Readonly<Props>) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const nextImage = () => {
    if (selectedImage !== null && data?.section5?.pictures) {
      setSelectedImage((selectedImage + 1) % data.section5.pictures.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && data?.section5?.pictures) {
      setSelectedImage(
        selectedImage === 0
          ? data.section5.pictures.length - 1
          : selectedImage - 1
      );
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, selectedImage]);

  return (
    <div className="w-full">
      {/* Video Section */}
      {data.section5?.video_id && (
        <div className="mb-12 relative group" data-aos="fade-up">
          {/* Video glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-3 border border-white/20 shadow-2xl shadow-black/40">
            <div className="relative overflow-hidden rounded-2xl">
              <YoutubeVideo
                useMargin={false}
                videoId={data.section5.video_id}
              />
            </div>

            {/* Video label */}
            {/* <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <FaPlay className="w-3 h-3 text-white" />
                <span className="text-white text-sm font-medium">
                  Featured Video
                </span>
              </div>
            </div> */}
          </div>
        </div>
      )}

      {/* Photo Gallery Grid */}
      <div
        className="grid grid-cols-6 gap-4 w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data?.section5?.pictures.map(
          ({ url: imgUrl }: { url: string }, i: number) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
                i === 0
                  ? "col-span-6"
                  : i === 1
                  ? "col-span-4"
                  : i === 2
                  ? "col-span-2"
                  : "col-span-2"
              }`}
              onClick={() => openModal(i)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl shadow-black/40 border border-white/20">
                <img
                  src={imgUrl}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover overlay with expand icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <FaExpand className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Image number badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">
                    {i + 1}
                  </span>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/60 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Custom Modal */}
      {isModalOpen && selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
          {/* Modal Background */}
          <div className="absolute inset-0" onClick={closeModal}></div>

          {/* Modal Content */}
          <div className="relative max-w-6xl max-h-[90vh] w-full mx-4">
            {/* Close Button - Top Right Corner of Image */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90 shadow-lg border border-white/20"
            >
              <FaTimes className="w-5 h-5 drop-shadow-lg" />
            </button>

            {/* Navigation Buttons */}
            {data.section5.pictures.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={data.section5.pictures[selectedImage].url}
                alt={`Gallery image ${selectedImage + 1}`}
                className="w-full h-full max-h-[90vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">
                  {selectedImage + 1} of {data.section5.pictures.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {data.section5.pictures.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
                {data.section5.pictures.map(
                  ({ url }: { url: string }, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-white shadow-lg scale-110"
                          : "border-white/30 hover:border-white/60 hover:scale-105"
                      }`}
                    >
                      <img
                        src={url}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MomentGallery;

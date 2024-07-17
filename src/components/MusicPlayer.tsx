import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

type Template = "green-leaves" | "creamy-latte" | "floral" | "luxury-grey";
const MusicPlayer = ({
  showContent,
  audioSource,
  template,
}: {
  showContent: boolean;
  audioSource: string;
  template: Template;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const colors = {
    "green-leaves": "#4F583D",
    "creamy-latte": "#D2B591",
    floral: "#D79872",
    "luxury-grey": "#2D2D2D",
  };

  const mainColor = colors[template];

  const handleTogglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        // if (onPause) onPause();
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        // if (onPlay) onPlay();
      }
    }
  };

  useEffect(() => {
    // URL sumber audio

    if (audioRef.current) {
      audioRef.current.src = audioSource;
      audioRef.current.preload = "auto";
      // (Optional) Anda dapat menambahkan logika lainnya di sini, seperti memuat metadata audio atau mengatur volume
    }
  }, []);

  useEffect(() => {
    if (showContent) {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [showContent]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "100px",
        left: template === "luxury-grey" ? "20px" : "auto",
        right: template !== "luxury-grey" ? "20px" : "auto",
        zIndex: "999",
      }}
    >
      <button
        onClick={handleTogglePlayPause}
        style={{
          backgroundColor: "white",
          color: mainColor,
          borderRadius: "50%",
          border: `5px solid ${mainColor}`,
          cursor: "pointer",
          outline: "none",
        }}
        className="p-2 md:p-3"
      >
        {isPlaying ? (
          <div className="w-4 lg:w-6 h-4 lg:h-6">
            <FaPause size="100%" />
          </div>
        ) : (
          <div className="w-4 lg:w-6 h-4 lg:h-6">
            <FaPlay size="100%" />
          </div>
        )}
      </button>
      <audio ref={audioRef}></audio>
    </div>
  );
};

export default MusicPlayer;

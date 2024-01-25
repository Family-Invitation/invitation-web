import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = ({ showContent }: { showContent: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    const audioSource = "/beautiful-in-white.mp3";

    if (audioRef.current) {
      audioRef.current.src = audioSource;
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
        right: "20px",
        zIndex: "999",
      }}
    >
      <button
        onClick={handleTogglePlayPause}
        style={{
          backgroundColor: "white",
          color: "#4F583D",
          borderRadius: "50%",
          border: "5px solid #4F583D",
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

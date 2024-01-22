import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
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

  return (
    <div
      style={{
        position: "fixed",
        bottom: "100px",
        right: "30px",
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
          padding: "12px 12px 10px 14px",
        }}
      >
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>
      <audio ref={audioRef}></audio>
    </div>
  );
};

export default MusicPlayer;

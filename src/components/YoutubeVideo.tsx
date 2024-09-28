import React from "react";

type YoutubeVideoProps = {
  videoId: string;
  useMargin?: boolean; // Add margin around the video if true. Default is false.
};

/**
 * Renders a YouTube video component.
 *
 * @param {YoutubeVideoProps} videoId - The ID of the YouTube video.
 * @return {JSX.Element | null} The rendered YouTube video component or null if videoId is falsy.
 */

const YoutubeVideo = ({ videoId, useMargin = true }: YoutubeVideoProps) => {
  if (!videoId) {
    return null;
  }
  return (
    <div className={`${useMargin ? "mx-6 md:mx-0" : ""} aspect-video`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=""
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;

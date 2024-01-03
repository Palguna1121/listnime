"use client";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ ytId }) => {
  const [viewportSize, setViewportSize] = useState("md");
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setIsVideoReady(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setViewportSize("lg");
      } else if (window.innerWidth >= 768) {
        setViewportSize("md");
      } else {
        setViewportSize("sm");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getWidthBasedOnViewportSize = (size) => {
    switch (size) {
      case "lg":
        return "850";
      case "md":
        return "650";
      case "sm":
        return "450";
      default:
        return "650";
    }
  };

  const getHeightBasedOnViewportSize = (size) => {
    switch (size) {
      case "lg":
        return "500";
      case "md":
        return "300";
      case "sm":
        return "200";
      default:
        return "300";
    }
  };

  const options = {
    width: getWidthBasedOnViewportSize(viewportSize),
    height: getHeightBasedOnViewportSize(viewportSize),
  };
  return <>{isVideoReady && <YouTube videoId={ytId} onReady={(event) => event.target.pauseVideo()} opts={options} />}</>;
};

export default VideoPlayer;

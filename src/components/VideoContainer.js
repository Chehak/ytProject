import React, { useEffect } from "react";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = data.json();
    console.log(json);
  };

  return <div>VideoContainer</div>;
};

export default VideoContainer;

import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-[12px] p-2 m-2">
      {videos[0] && <AdVideoCard info={videos[0]} key={videos[0]}/>}
      {videos.map((video) => (
        <Link to={"/watch" + "?v=" + video?.id}>
          <VideoCard info={video} key={video?.id} fromSearchPage={false}  />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;

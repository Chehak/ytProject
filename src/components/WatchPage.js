import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsPage from "./CommentsPage";

const WatchPage = () => {
 
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 flex flex-col">
      <div>
        <iframe
          width="800"
          height="400"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src={
            "https://www.youtube.com/embed/" + videoId + "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
        ></iframe>
      </div>
      <div>
        <CommentsPage/>
      </div>
    </div>
  );
};

export default WatchPage;

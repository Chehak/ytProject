import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsPage from "./CommentsPage";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-2 flex flex-col w-full">
      <div className="flex w-full">
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

      
        <div className="w-full">
          <LiveChat />
        </div>
       
        </div>
        
      <div className="w-[800px]">
        <CommentsPage />
      </div>
     
    </div>
  );
};

export default WatchPage;

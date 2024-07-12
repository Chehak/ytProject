import React from "react";
import numeral from "numeral";

const VideoCard = ({ info, fromSearchPage }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  function formatNumber(number) {
    return numeral(number).format("0.[0]a").toUpperCase();
  }
  return (
    <div
      className={
        fromSearchPage
          ? " w-[24rem] rounded-lg p-2 pb-0 flex "
          : "w-[24rem] rounded-lg p-2 pb-0"
      }
    >
      <img
        className="rounded-lg w-[24rem] "
        alt="thumbnail"
        src={thumbnails?.high?.url}
      />
      <ul className={fromSearchPage ? "ml-5" : ""}>
        <li
          className={
            fromSearchPage
              ? "font-medium line-clamp-2 pt-2 w-[350px]"
              : "font-medium line-clamp-1 pt-2"
          }
        >
          {title}
        </li>
        <li className="text-[#606060]">{channelTitle}</li>
        <li className="text-[#606060]">
          {formatNumber(statistics?.viewCount)} views
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="">
      <VideoCard info={info} />
      <div className="flex justify-normal pl-2">
        <p className="text-sm font-semibold mr-2">Sponsered</p>
        <p className="text-sm">Alexa Movies</p>
      </div>
      <div className="flex justify-between p-2">
        <button
          type="button"
          className=" flex-1 border border-b-slate-300 px-1 py-1 text-center rounded-full text-sm font-semibold text-[#065fd4] mr-1"
        >
          Watch{" "}
        </button>
        <button className="flex-1 border border-b-slate-300 px-1 py-1 text-center rounded-full text-sm font-semibold text-[#065fd4]">
          Youtube Premium{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;

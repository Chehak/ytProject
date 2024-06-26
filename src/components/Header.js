import React from "react";
import { HAMBURGER_MENU, USER_ICON, YT_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    console.log(dispatch(toggleMenu()));
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="menu"
          src={HAMBURGER_MENU}
          className="h-8"
          onClick={handleToggleClick}
        />
        <img alt="logo" src={YT_LOGO} className="h-8" />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-3/4 border border-gray-600 rounded-l-full py-2 px-5"
        />
        <button
          type="submit"
          className="rounded-r-full border border-gray-600 p-2"
        >
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img alt="user-icon" src={USER_ICON} className="h-8" />
      </div>
    </div>
  );
};

export default Header;

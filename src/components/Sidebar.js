import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //this is known as early return pattern
  if (!isMenuOpen) return;
  return (
    <div className="p-5 shadow-lg w-48">
      <h2 className="font-bold">You</h2>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>YouTube Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h2 className="font-bold">Watch later</h2>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>YouTube Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h2 className="font-bold">Subscription</h2>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>YouTube Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

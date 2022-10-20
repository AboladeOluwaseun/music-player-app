import React from "react";

import homeIcon from "../../../Assets/Home/home.png";
import playlistIcon from "../../../Assets/Home/home.png";
import radioIcon from "../../../Assets/Home/home.png";
import videosIcon from "../../../Assets/Home/home.png";
import profileIcon from "../../../Assets/Home/home.png";
import logoutIcon from "../../../Assets/Home/home.png";

const Navmenu = () => {
  const navIcons: { name: string; src: string }[] = [
    { name: "homeIcon", src: "src/Assets/Home/home.png" },
    { name: "homeIcon", src: "src/Assets/Home/home.png" },
    { name: "homeIcon", src: "src/Assets/Home/home.png" },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div>
            <img className="mt-3" src={homeIcon} alt="home-icon" />
          </div>
          <div>
            <img className="mt-3" src={playlistIcon} alt="playlist-icon" />
          </div>
          <div>
            {" "}
            <img className="mt-3" src={radioIcon} alt="radio-icon" />
          </div>
          <div>
            {" "}
            <img className="mt-3" src={videosIcon} alt="videos-icon" />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div>
            {" "}
            <img className="mt-3" src={profileIcon} alt="profile-icon" />
          </div>
          <div>
            {" "}
            <img className="mt-3" src={logoutIcon} alt="logout-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navmenu;

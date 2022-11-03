import React from "react";
import homeIcon from "../../../Assets/Home/home.png";
import playlistIcon from "../../../Assets/Home/playlist.png";
import radioIcon from "../../../Assets/Home/radio.png";
import videosIcon from "../../../Assets/Home/videos.png";
import profileIcon from "../../../Assets/Home/profile.png";
import logoutIcon from "../../../Assets/Home/logout.png";
import ImageArray from "../../../Interfaces/imageArray";
const Navmenu: React.FC = () => {
  const navIconsArray1: ImageArray[] = [
    { name: "homeIcon", src: homeIcon },
    { name: "playlistIcon", src: playlistIcon },
    { name: "radioIcon", src: radioIcon },
    { name: "videosIcon", src: videosIcon },
  ];
  const navIconsArray2: ImageArray[] = [
    { name: "profileIcon", src: profileIcon },
    { name: "logoutIcon", src: logoutIcon },
  ];
  const navIcons1 = navIconsArray1.map((navIcon, index) => {
    return (
      <div className="cursor-pointer">
        <img
          className={`mt-8 cursor-pointer ${index === 0 && "mt-0"}`}
          src={navIcon.src}
          alt={navIcon.name}
        />
      </div>
    );
  });

  const navIcons2 = navIconsArray2.map((navIcon) => {
    return (
      <div className="cursor-pointer">
        <img
          className="mt-3 cursor-pointer"
          src={navIcon.src}
          alt={navIcon.name}
        />
      </div>
    );
  });
  return (
    <>
      <div className="hidden lmd:flex flex-col items-start justify-between space">
        <div className="flex flex-col items-start justify-between bg-[#1A1E1F]">
          {navIcons1}
        </div>
        <div className="mt-8 flex flex-col items-center justify-between">
          {navIcons2}
        </div>
      </div>
    </>
  );
};

export default Navmenu;

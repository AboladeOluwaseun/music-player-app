import React from "react";
import coverArt from "../../../Assets/Home/Rectangle 17.png";
import likeButton from "../../../Assets/Home/Stroke-1.png";

interface Props {}

export const Chartcard = (props: Props) => {
  return (
    <>
      <div className="text-white p-4 bg-[#1A1E1F]  mt-3 rounded-lg flex justify-between items-start">
        <div className="block lmd:flex">
          <img className="" src={coverArt} alt="cover-art" />
          <div className=" mt-3 lmd:ml-4">
            <p className="text-[1.1rem]">Golden age of 80s</p>
            <p className="text-[0.8rem] text-white/50">Sean swadder</p>
            <p className="text-[0.8rem]">2:34:45</p>
          </div>
        </div>
        <div className=" ">
          <img
            src={likeButton}
            alt="like-button"
            className="border-[1px] rounded-[100%] border-gray-500 h-6 w-6 p-1"
          />
        </div>
      </div>
    </>
  );
};

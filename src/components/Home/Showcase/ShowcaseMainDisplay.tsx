import React from "react";
import patttern from "../../../Assets/Home/Vectorpp.svg";
import artistImage from "../../../Assets/Home/artistimage.png";
import ImageArray from "../../../Interfaces/imageArray";
import Ellipse2 from "../../../Assets/Home/Ellipse2.png";
import Ellipse3 from "../../../Assets/Home/Ellipse3.png";
import Ellipse4 from "../../../Assets/Home/Ellipse4.png";
import Ellipse5 from "../../../Assets/Home/Ellipse5.png";
import Ellipse6 from "../../../Assets/Home/Ellipse6.png";
import Likebutton from "../../../Assets/Home/likebutton.png";
const ShowcaseMainDisplay = () => {
  const profilePictureArray: ImageArray[] = [
    { name: "ellipse2", src: Ellipse2 },
    { name: "ellipse3", src: Ellipse3 },
    { name: "ellipse4", src: Ellipse4 },
    { name: "ellipse5", src: Ellipse5 },
    { name: "ellipse6", src: Ellipse6 },
  ];
  const profilePictures = profilePictureArray.map((profilePic, index) => {
    return (
      <img
        src={profilePic.src}
        className={`-ml-2 ${index === 0 && "-ml-0"}`}
        alt="profile picture"
      />
    );
  });
  return (
    <div className=" relative bg-[#609EAF] text-white rounded-[2rem] max-h-full lmd:min-h-[370px] w-[100%] mx-auto p-8">
      <div className="flex flex-col  items-start justify-between">
        <p className="text-[0.8rem]">Currated playlist</p>
        <div className="mt-32">
          <h1 className="text-[35px] font-bold fon">R & B Hits</h1>
          <p className="lmd:max-w-[50%]">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more.
          </p>
        </div>
        <div className="flex justify-between space-x-3 mt-24">
          <div className="flex items-center justify-start">
            {profilePictures}
          </div>
          <div className="flex items-center space-x-3 ">
            <div>
              {" "}
              <img src={Likebutton} alt="like-button" className="" />
            </div>
            <p>33k Likes</p>
          </div>
        </div>
      </div>
      <img
        src={patttern}
        alt="pattern"
        className="absolute bottom-[0.03rem] right-8 h-full"
      />
      <img
        src={artistImage}
        alt="artist-image"
        className="absolute hidden lmd:block bottom-[0.02rem] right-8 h-full"
      />
    </div>
  );
};

export default ShowcaseMainDisplay;

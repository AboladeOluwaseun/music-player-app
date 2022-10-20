import React from "react";
import Navmenu from "./Navmenu";

const Showcase = () => {
  return (
    <>
      <div className=" grid  grid-cols-showcaseLayout mt-12 min-h-full ">
        <Navmenu />
        <div className="bg-green-600">i</div>

        <div className=" bg-yellow-500">i</div>
      </div>
    </>
  );
};

export default Showcase;

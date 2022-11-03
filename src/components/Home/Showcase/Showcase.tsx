import React from "react";
import Navmenu from "./Navmenu";
import ShowcaseMainDisplay from "./ShowcaseMainDisplay";
import Topcharts from "./Topcharts";
const Showcase = () => {
  return (
    <>
      <div className="block lmd:grid grid-cols-showcaseLayout mt-12 min-h-full ">
        <Navmenu />
        <ShowcaseMainDisplay />
        <Topcharts />
      </div>
    </>
  );
};

export default Showcase;

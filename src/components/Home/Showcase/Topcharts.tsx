import React from "react";
import { Chartcard } from "./Chartcard";
const Topcharts = () => {
  return (
    <div className="w-[90%] mt-12 lmd:mt-0 overflow-x-hidden mx-auto">
      <p className="text-white  "> Top charts</p>
      <div className=" lmd:block lmd:mt-3 grid grid-flow-col overflow-x-auto auto-cols-[80%] gap-4">
        <div>
          <Chartcard />
        </div>
        <div>
          <Chartcard />
        </div>
        <div>
          <Chartcard />
        </div>
        <div>
          <Chartcard />
        </div>
      </div>
    </div>
  );
};

export default Topcharts;

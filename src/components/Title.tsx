import React from "react";
import { CellarDoor, WineGlass } from "../images";

export const Title: React.FC = () => (
  <div className="w-full bg-gradient-to-br from-rose-600 to-fuchsia-900 h-[50vh] flex flex-col items-center justify-center lg:items-start">
    <h1 className="text-[3rem] lg:text-[10rem] font-bold lg:font-black lg:tracking-tighter lg:ml-[10rem] flex items-center">
      Web3 Wines
      <img
        src={WineGlass}
        className="max-h-[8rem] ml-[2rem] hidden 2xl:block"
        alt="Wine glass"
      />
    </h1>
  </div>
);

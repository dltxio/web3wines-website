import React from "react";
import NavBar from "./NavBar";
import {Footer} from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="w-full bg-black text-white">
    <NavBar />
      <div>
          {children}
      </div>
    <Footer/>
  </div>
);

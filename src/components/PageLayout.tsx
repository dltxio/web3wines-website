import React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="w-full bg-black bg-hero-plus text-white">
    <Navbar />
    {children}
  </div>
);

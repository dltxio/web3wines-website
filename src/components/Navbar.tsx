import React from "react";
import { Link } from "react-router-dom";
import { useScreenSize, useScroll } from "../hooks";
import classNames from "classnames";

const FORM_LINK = "https://nzue9lvyzct.typeform.com/to/NjwnOkMt";

export const Navbar: React.FC = () => {
  const scroll = useScroll();
  const [screenY] = useScreenSize();

  return (
    <div
      className={classNames(
        "w-full fixed top-0 flex justify-between items-center px-2 py-1 lg:px-4 lg:py-2 lg:text-[1.1rem] transition-all duration-200",
        {
          "bg-black shadow-md": scroll > screenY
        }
      )}
    >
      <Link to="/">Home</Link>
      <a href={FORM_LINK} target="_blank" rel="noreferrer noopener">
        Join
      </a>
    </div>
  );
};

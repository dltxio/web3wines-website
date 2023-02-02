import { useLayoutEffect, useState } from "react";

export const useScreenSize = () => {
  // tuple data type: [x, y]
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const getSizes = () =>
      setScreenSize([window.innerWidth, window.innerHeight]);

    getSizes();

    window.addEventListener("resize", getSizes);

    return () => window.removeEventListener("resize", getSizes);
  }, []);

  return screenSize;
};

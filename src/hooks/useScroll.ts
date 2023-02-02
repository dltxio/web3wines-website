import { useLayoutEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    const getScroll = () => setScroll(window.scrollY);

    getScroll();

    window.addEventListener("scroll", getScroll);

    return () => window.removeEventListener("scroll", getScroll);
  }, []);

  return scroll;
};

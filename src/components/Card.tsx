import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  classnames?: string;
};

export const Card: React.FC<Props> = ({ children, classnames }) => (
  <div
    className={classNames(
      "group mx-auto mt-8 max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none hover:bg-orange-50",
      {
        [classnames || ""]: !!classnames
      }
    )}
  >
    {children}
  </div>
);

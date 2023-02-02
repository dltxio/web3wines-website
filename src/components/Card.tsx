import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  classnames?: string;
};

export const Card: React.FC<Props> = ({ children, classnames }) => (
  <div
    className={classNames(
      "bg-white rounded-xl p-6 text-black shadow-lg font-semibold w-auto h-auto",
      {
        [classnames || ""]: !!classnames
      }
    )}
  >
    {children}
  </div>
);

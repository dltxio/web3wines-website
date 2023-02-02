// import { lazy } from "react";
import { AppRoutes } from "./types/app";
import Landing from "./pages/Landing";

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Landing />
  }
];

export { default as NotFound } from "./pages/NotFound";
export default Routing;

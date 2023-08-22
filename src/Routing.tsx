// import { lazy } from "react";
import { AppRoutes } from "./types/app";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import ValueChain from "./pages/ValueChain";
import BlockchainApp from "./pages/BlockchainApp";
import Membership from "./pages/Membership";
import News from "./pages/News";
import Faqs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/about_us",
    element:<AboutUs />
  },
  {
    path: "/value_chain",
    element:<ValueChain />
  },
  {
    path: "/blockchain_app",
    element:<BlockchainApp />
  },
  {
    path: "/membership",
    element:<Membership />
  },
  {
    path: "/news",
    element:<News />
  },
  {
    path: "/faqs",
    element:<Faqs />
  },
  {
    path: "/contact_us",
    element:<ContactUs />
  }
];

export { default as NotFound } from "./pages/NotFound";
export default Routing;

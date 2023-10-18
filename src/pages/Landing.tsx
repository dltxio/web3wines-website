import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";
import {
  DAOMasterLabs,
  DLTx,
  Blockstars,
  NeldnerRoad,
  SmartTradeNetworks
} from "../images";
import { Hero } from "../components";

const Landing: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <Hero />
      <div className="w-full flex flex-col items-center pt-12 lg:pt-24 px-4 lg:px-32">
        <section className="w-auto flex justify-items-center">
          <p className="font-serif italic text-thin text-[1.25rem] lg:text-[1.75rem] leading-[2.2rem] lg:leading-[4.2rem] text-center">
            Web3 Wines is a consortium of industry experts, primary producers,
            and enthusiasts with the focus of using blockchain technology to
            verify premium wines.
          </p>
        </section>
        <section className="w-full flex flex-col items-center lg:mt-[6rem] pb-12">
          <h3 className="w-full text-center text-[1.5rem] lg:text-[2rem] font-semibold mb-4">
            PARTNERS
          </h3>
          <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-y-[2rem] lg:gap-x-[14rem] mt-4 items-center">
            <p className="flex flex-col-reverse items-center justify-between">
              <img
                src={DLTx}
                alt="DLTx Labs logo"
                className="h-[6rem] lg:h-[8rem]"
              />
            </p>
            <p className="flex flex-col-reverse items-center justify-between">
              <img
                src={DAOMasterLabs}
                alt="DAO Master Labs logo"
                className="h-[8rem] lg:h-[10rem]"
              />
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-y-[2rem] lg:gap-x-[14rem] mt-4 items-center">
            <p className="flex flex-col-reverse items-center justify-between">
              <img
                src={Blockstars}
                alt="Blockstars logo"
                className="h-[6rem] lg:h-[8rem]"
              />
            </p>
            <p className="flex flex-col-reverse items-center justify-between">
              <img
                src={NeldnerRoad}
                alt="Neldner Road logo"
                className="h-[6rem] lg:h-[8rem]"
              />
            </p>
            <p className="flex flex-col-reverse items-center justify-between">
              <img
                src={SmartTradeNetworks}
                alt="Smart Trade Networks logo"
                className="h-[6rem] lg:h-[8rem]"
              />
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Landing;

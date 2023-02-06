import React, { useLayoutEffect } from "react";
import { PageLayout, Title } from "../components";
import { Card } from "../components/Card";
import { DAOMasterLabs, DLTx } from "../images";

const Landing: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <Title />
      <div className="w-full flex flex-col items-center pt-12 lg:pt-24 px-4 lg:px-32">
        <section className="w-full flex flex-col lg:grid lg:grid-cols-2">
          <h2 className="w-full text-center lg:text-left text-[2rem] lg:text-[4rem] font-bold leading-[2.2rem] lg:leading-[4.2rem] mb-8 flex items-center">
            Exclusive NFT membership with Australia&apos;s top wineries
          </h2>
          <Card>
            Utilising the blockchain, users will be able to prepay for their
            bottles, and have them delivered straight from the winery.
            <br />
            <br />
            Web3 technology will allow user&apos;s to be part of a "members
            only" club, and reap the benefits of tiered rewards, appealing to
            all types of customers.
            <br />
            <br />
            Future plans for governance will allow members to be a part of the
            decision-making process, including the wines they&apos;ll receive,
            perks they have access to, and more.
          </Card>
        </section>
        <section className="w-full flex flex-col lg:grid lg:grid-cols-2 mt-12 lg:mt-[10rem]">
          <h2 className="w-full text-center lg:text-right text-[2rem] lg:text-[4rem] font-bold leading-[2.2rem] lg:leading-[4.2rem] mb-8 lg:order-2 flex items-center">
            Best-in-class treatment, delivered straight to your door
          </h2>
          <Card classnames="lg:order-1">
            Members receive bottles straight to their doorstep, with higher tier
            members receiving additional perks and benefits, including:
            <ol className="w-full list-disc ml-6 my-2">
              <li>More bottles per month</li>
              <li>Wines on special occasions</li>
              <li>Premium bottles</li>
            </ol>
            With the potential for more perks down the line.
            <br />
            <br />
            Furthermore, rich metadata will allow members to learn more about
            their wine, including region, storage temperature, and the time of
            year the grapes were harvested.
          </Card>
        </section>
        <section className="w-full flex flex-col lg:grid lg:grid-cols-2 mt-12 lg:mt-[10rem]">
          <h2 className="w-full text-center lg:text-left text-[2rem] lg:text-[4rem] font-bold leading-[2.2rem] lg:leading-[4.2rem] mb-8 flex items-center">
            Fully utilise the power of the blockchain
          </h2>
          <Card>
            With a multi-market approach, wineries will be exposed to the large,
            initial revenue stream of the primary sales, as well as the
            perpetual secondary stream powered by the reselling of memberships.
            <br />
            <br />
            Join global brands like LVMH and Nike, and traditional financial
            institutions like JP Morgan and ANZ, in the Web3 space to take
            advantage of a new growing market, and the next generation of
            technology.
          </Card>
        </section>
        <section className="w-full flex flex-col items-center mt-20 lg:mt-[10rem] pb-12">
          <h3 className="w-full text-center text-[1.5rem] lg:text-[3rem] font-semibold mb-4">
            Partners:
          </h3>
          <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-y-[1rem] lg:gap-x-[20rem] mt-4 items-center">
            <p className="flex flex-col-reverse items-center justify-between">
              <span className="block whitespace-nowrap text-[1.2rem] lg:text-[1.6rem] mt-2">
                DLTx Labs
              </span>
              <img
                src={DLTx}
                alt="DLTx Labs logo"
                className="h-[6rem] lg:h-[8rem]"
              />
            </p>
            <p className="flex flex-col-reverse items-center justify-between">
              <span className="block whitespace-nowrap text-[1.2rem] lg:text-[1.6rem] lg:bottom-3 lg:relative">
                DAO Master Labs
              </span>
              <img
                src={DAOMasterLabs}
                alt="DAO Master Labs logo"
                className="h-[8rem] lg:h-[10rem]"
              />
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Landing;

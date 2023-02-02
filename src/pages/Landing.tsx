import React, { useLayoutEffect } from "react";
import { PageLayout, Title } from "../components";
import { Card } from "../components/Card";

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
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2">
          <h2 className="w-full text-center lg:text-left text-[2rem] lg:text-[4rem] font-bold leading-[2.2rem] lg:leading-[4.2rem] mb-8">
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
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 mt-12 lg:mt-[10rem]">
          <h2 className="w-full text-center lg:text-right text-[2rem] lg:text-[4rem] font-bold leading-[2.2rem] lg:leading-[4.2rem] mb-8 lg:order-2">
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
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 mt-12 lg:mt-[10rem] pb-12">
          <h2 className="w-full text-center lg:text-left text-[2rem] lg:text-[4rem] font-bold leading-[2.2rem] lg:leading-[4.2rem] mb-8">
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
        </div>
      </div>
    </PageLayout>
  );
};

export default Landing;

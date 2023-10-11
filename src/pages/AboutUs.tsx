import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";
import Team from "../components/Team";

const AboutUs: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const stats = [
    { name: "ESTABLISHED", value: "2023" },
    { name: "MEMBERS", value: "15" },
    { name: "EVENTS", value: "10" },
    { name: "PROJECTS", value: "5" }
  ];

  return (
    <PageLayout>
      <div className="relative isolate overflow-hidden bg-cover bg-hero-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Web3 Wines is a consortium of industry experts, primary producers,
              and enthusiasts with the focus of using blockchain technology to
              verify premium wines. Our goal is to have a positive effect on the
              wider Australian wine industry by introducing a new technology
              that brings verifiable trust. We want to work with world renowned
              wine brands and bring their clients a different type of
              experience, one that combines the rich traditional history of wine
              culture and the impending technological evolution that blockchain
              will bring with it.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(stat => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Team />
    </PageLayout>
  );
};

export default AboutUs;

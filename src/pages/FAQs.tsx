import React, { useLayoutEffect } from "react";
import { Card, PageLayout } from "../components";

const faqs = [
  {
    id: 1,
    question: "What is NFT?",
    answer:
      "An NFT (non-fungible token) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided. " +
      "The ownership of an NFT is recorded in the blockchain and can be transferred by the owner, allowing NFTs to be sold and traded."
  },
  {
    id: 2,
    question: "What are some examples of using blockchain in wine industry?",
    answer: "BitWine, Winechain, Cult Wines"
  }
];
const FAQs: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <div className="bg-black h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              FAQs
            </h2>
          </div>
          {faqs.map(item => (
            <Card>
              <div className="grid grid-cols-8 cols-2 p-8 sm:p-10 flex-auto text-justify text-navbar">
                <h1 className="col-span-1 text-8xl font-bold tracking-tight">
                  {item.id}
                </h1>
                <div className="col-span-7">
                  <h3 className="text-xl font-bold tracking-tight ">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-7 text-white group-hover:text-navbar">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQs;

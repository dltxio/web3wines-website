import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

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
      <div className="bg-page h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              FAQs
            </h2>
          </div>
          {faqs.map(item => (
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-navbar">
                  {item.id}. {item.question}
                </h3>
                <p className="mt-6 text-base leading-7 text-white">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQs;

import React, { useLayoutEffect } from "react";
import { Card, PageLayout } from "../components";

const application = [
  {
    name: "Provenance and Authenticity",
    desc: "One of the most significant challenges in the wine industry is counterfeiting and maintaining the provenance of fine wines. NFTs can be used to certify the authenticity of a wine bottle, ensuring that a specific bottle comes from a particular vineyard and vintage."
  },
  {
    name: "Digital Wine Collections",
    desc: 'Just as people collect physical wine bottles, there might be a market for collectible digital wine "bottles" or experiences. Wineries could issue limited edition digital art, videos, or interactive experiences that represent a particular vintage or blend, allowing enthusiasts to "collect" wines in a new digital format.'
  },
  {
    name: "Special Access or Experiences",
    desc: "Wineries can mint NFTs that serve as tickets or vouchers for special events, tastings, or tours. Owners of these NFTs could gain access to exclusive experiences, like barrel tastings, harvest events, or dinners with the winemakers. "
  },
  {
    name: "Wine Futures and Investments",
    desc: "Traditionally, some wine enthusiasts and investors buy \"wine futures,\" which means purchasing wine before it's bottled and usually before it's even produced. NFTs can represent these wine futures, enabling easier trade and verification of ownership. "
  },
  {
    name: "Storytelling & Branding",
    desc: "NFTs can be a medium to tell the story of the wine, the vineyard, or the people behind it. Digital multimedia content can be paired with the NFT, such as videos, augmented reality experiences, or interactive web elements. "
  },
  {
    name: "Royalties ",
    desc: "When NFTs are resold on secondary markets, original creators (in this case, wineries or wine-related artists) can receive a percentage of the sale, ensuring they continue to benefit from the increasing value of their wine or related art. "
  },
  {
    name: "Collaborations with Artists",
    desc: "Wineries can collaborate with digital artists to create NFT art that encapsulates the essence of a particular wine, vintage, or vineyard story. This creates an intersection of wine appreciation and digital art collection. "
  },
  {
    name: "Sustainability and Social Initiatives",
    desc: "Wineries can sell NFTs to fund specific sustainable practices or social initiatives, allowing consumers to support and be part of a cause."
  }
];
const BlockchainApp: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <div className="relative isolate overflow-hidden bg-cover bg-hero-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              Blockchain Application
            </h2>
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              In Wine Industry
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The integration of blockchain technology in the Australian wine
              industry optimizes the complex value chain. By ensuring
              transparency and security, it enhances production, distribution,
              and consumption processes. Through streamlined data management, it
              facilitates efficient tracking from grape cultivation to global
              distribution, fostering trust and quality assurance.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-page py-12 sm:py-24 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {application.map(item => (
          <Card>
            <div className="p-8 sm:p-10 lg:flex-auto text-navbar">
              <h3 className="text-2xl font-bold tracking-tight">{item.name}</h3>
              <p className="mt-6 text-base leading-7 text-white group-hover:text-navbar">
                {item.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

export default BlockchainApp;

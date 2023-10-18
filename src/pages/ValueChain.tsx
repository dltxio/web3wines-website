import React, { useLayoutEffect } from "react";
import { Card, PageLayout } from "../components";

const valueChain = [
  {
    name: "Grape Growing and Vineyards",
    desc: "The foundation of the wine industry, grape growers cultivate vineyards to produce high-quality grapes that serve as the raw material for wine production. Factors such as climate, soil, and vineyard management practices influence grape quality."
  },
  {
    name: "Harvesting and Crushing",
    desc: "Grapes are harvested during the appropriate season and then crushed to extract the juice. The quality of the grapes and the handling during this stage significantly impact the wine's characteristics."
  },
  {
    name: "Wine Production",
    desc: "The process of fermentation and aging takes place in wineries. Winemakers use their expertise to transform grape juice into wine, adjusting factors like yeast strains, fermentation temperatures, and aging conditions to achieve desired flavours and styles."
  },
  {
    name: "Bottling and Packaging",
    desc: "After the wine has matured and developed its desired flavours, it is bottled and packaged for distribution. Labelling, branding, and packaging design are crucial to attract consumers."
  },
  {
    name: "Distribution and Marketing",
    desc: "Once bottled, wine is distributed through various channels, including wholesalers, retailers, and directly from wineries. Effective marketing strategies, including advertising, promotions, and wine-tasting events, help create awareness and drive sales."
  },
  {
    name: "Export and Import",
    desc: "Australian wines are exported to international markets, contributing significantly to the industry's revenue. Importers in other countries play a vital role in bringing Australian wines to global consumers."
  },
  {
    name: "Research and Development",
    desc: "Ongoing research is essential to improve vineyard practices, winemaking techniques, and wine quality. Research institutions, universities, and industry associations contribute to innovation and knowledge dissemination."
  },
  {
    name: "Wine Tourism",
    desc: "Many wineries offer wine tourism experiences, allowing visitors to tour vineyards, learn about winemaking processes, and participate in tastings. This element contributes to local economies and promotes brand awareness."
  },
  {
    name: "Wine Education",
    desc: "Wine education programs, courses, and certifications are offered to industry professionals and enthusiasts. These programs cover topics like viticulture, enology, wine appreciation, and business aspects of the industry."
  },
  {
    name: "Wine Associations and Industry Groups",
    desc: "Various industry associations, such as Wine Australia, represent and support the interests of wineries, grape growers, and related businesses. They provide resources, advocacy, and networking opportunities."
  },
  {
    name: "Retail and Hospitality",
    desc: "Wine is sold to consumers through retail outlets such as liquor stores and supermarkets. It is also an integral part of the hospitality industry, served in restaurants, bars, and hotels"
  }
];

const ValueChain: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              Wine Industry
            </h2>
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              Value Chain
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Australian wine industry value chain consists of several
              interconnected elements that contribute to the production,
              distribution, and consumption of wine.
            </p>
          </div>
          {valueChain.map(item => (
            <Card>
              <div className="p-8 sm:p-10 lg:flex-auto text-center text-navbar">
                <h3 className="text-2xl font-bold tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-6 text-base leading-7 text-white">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ValueChain;

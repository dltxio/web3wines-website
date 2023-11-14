import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Card, PageLayout } from "../components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface FAQ {
  id: number;
  attributes: {
    question: string;
    answer: string;
  };
}
const FAQs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://cms.dltx.io/api/faqs?populate=*")
      .then(({ data }) => {
        setFaqs(data.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const renderSkeletonCard = () => {
    return (
      <Card>
        <div className="grid grid-cols-8 cols-2 p-8 sm:p-10 flex-auto text-justify text-navbar">
          <h1 className="col-span-2 text-8xl font-bold tracking-tight">
            <Skeleton width={100} height={100} />
          </h1>
          <div className="col-span-6">
            <h3 className="text-xl font-bold tracking-tight ">
              <Skeleton count={1} />
            </h3>
            <p className="mt-2 leading-7 text-white group-hover:text-navbar">
              <Skeleton count={3} />
            </p>
          </div>
        </div>
      </Card>
    );
  };

  if (error) {
    return <div> An error occurred: {error.message}</div>;
  }

  return (
    <PageLayout>
      <div className="relative isolate overflow-hidden bg-cover bg-hero-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-navbar sm:text-6xl">
              FAQs
            </h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Common questions about our services and policies. If you can't
              find the information you're looking for, please don't hesitate to
              reach out to us directly.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-page py-12 sm:py-24 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <SkeletonTheme baseColor="#987654" highlightColor="#c4bda0">
          {isLoading ? (
            <div>
              {renderSkeletonCard()}
              {renderSkeletonCard()}
            </div>
          ) : (
            faqs.map((faq, index) => (
              <Card key={faq.id}>
                <div className="grid grid-cols-8 cols-2 p-8 sm:p-10 flex-auto text-justify text-navbar">
                  <h1 className="col-span-2 text-8xl font-bold tracking-tight">
                    {index + 1}
                  </h1>
                  <div className="col-span-6">
                    <h3 className="text-xl font-bold tracking-tight ">
                      {faq.attributes.question}
                    </h3>
                    <p className="mt-2 leading-7 text-white group-hover:text-navbar">
                      {faq.attributes.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </SkeletonTheme>
      </div>
    </PageLayout>
  );
};

export default FAQs;

import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

const FORM_LINK = "https://nzue9lvyzct.typeform.com/to/NjwnOkMt";

const Membership: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <PageLayout>
      <div className="overflow-hidden h-screen bg-page text-center py-24 sm:py-32">
        <h2 className="text-4xl font-bold tracking-tight text-navbar text-center sm:text-6xl">
          Membership
        </h2>
        <div className="py-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-navbar sm:text-4xl">
            Benefits of becoming a member
          </p>
          <ul className="mt-6 text-lg leading-8 text-white">
            <li>Enhanced Transparency</li>
            <li>Anti-Counterfeiting</li>
            <li>Quality Assurance</li>
            <li>Consumer Engagement</li>
            <li>Regulatory Compliance</li>
            <li>Efficient Supply Chain</li>
            <li>Data Security</li>
          </ul>
        </div>
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-navbar sm:text-4xl">
            Membership joining process
          </p>
          <div className="mt-6 text-lg leading-8 text-white">
            <p>
              Fill in{" "}
              <a href={FORM_LINK} className="underline underline-offset-4">
                EOI form
              </a>{" "}
              or send email to us at info@web3wines.org.
            </p>
            <p>Our team will contact you for further process!</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Membership;

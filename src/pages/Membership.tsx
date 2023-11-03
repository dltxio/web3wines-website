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
      <div className="relative isolate overflow-hidden bg-cover bg-hero-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-widest text-navbar font-custom sm:text-8xl">
              Membership Benefits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Membership offers unparalleled benefits, including enhanced
              transparency, anti-counterfeiting measures, and guaranteed quality
              assurance. Engage directly with us, ensuring regulatory
              compliance, a streamlined supply chain, and robust data security
              for a seamless experience.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-page py-12 sm:py-24 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-navbar sm:text-4xl">
          Membership joining process
        </p>
        <div className="mt-6 text-lg leading-8 text-white">
          <p>Fill in EOI form or send email to us at info@web3wines.org.</p>
          <p>Our team will contact you for further process!</p>
        </div>
        <div className="py-12">
          <a
            href={FORM_LINK}
            target="_blank"
            className="p-3 rounded-xl bg-navbar font-bold hover:bg-orange-50 hover:text-navbar"
          >
            Submit EOI
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Membership;

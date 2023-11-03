import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

const CONTACT_FORM_LINK = "https://bit.ly/Web3Wines_contact_form";

const ContactUs: React.FC = () => {
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
              Contact Us
            </h2>
            <p className="mt-2 text-lg leading-8 text-white">
              We'd love to hear from you! Whether you have a question or a
              recommendation, our team is ready to assist you in any way we can.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-page py-12 sm:py-24 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mt-6 text-lg leading-8 text-white">
          <p>
            Fill in our contact form below. Our passionate team is eager to
            raise a glass to your inquiries and ideas.
          </p>
          <p>
            Expect to hear from us soon as we uncork the possibilities together!
          </p>
        </div>
        <div className="py-12">
          <a
            href={CONTACT_FORM_LINK}
            target="_blank"
            className="p-3 rounded-xl bg-navbar font-bold hover:bg-orange-50 hover:text-navbar"
          >
            Contact Form
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;

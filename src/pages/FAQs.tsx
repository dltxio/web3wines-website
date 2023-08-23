import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

const faqs = [
    { id: 1, question: 'What is NFTs?', answer: ''},
    { id: 2, question: 'How can we use blockchain in wine verification?', answer: ''},



]
const FAQs: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <PageLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">FAQs</h2>
                    </div>
                    {faqs.map((item) => (
                        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{item.id}.   {item.question}</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">{item.answer}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default FAQs;
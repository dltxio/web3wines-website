import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

const Membership: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <PageLayout>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <h2 className="text-4xl font-bold tracking-tight text-black text-center sm:text-6xl">Membership</h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of becoming our member</p>
                                <ul className="mt-6 text-lg leading-8 text-gray-600">
                                    <li>Enhanced Transparency</li>
                                    <li>Anti-Counterfeiting</li>
                                    <li>Quality Assurance</li>
                                    <li>Consumer Engagement</li>
                                    <li>Regulatory Compliance</li>
                                    <li>Efficient Supply Chain</li>
                                    <li>Data Security</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Joining process</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Give us an understanding of your appetite around getting involved in the Web3 Wines and implementing blockchain
                            technology in your next vintage. Email us at info@web3wines.org. Our team look forward to working with you!
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Membership;
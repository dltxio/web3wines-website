import { Typography } from "@material-tailwind/react";

export function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-navbar">
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Web3 Wines. All rights reserved.
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="/about_us"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        About Us
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="/faqs"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        FAQs
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="/contact_us"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}
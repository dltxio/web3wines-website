import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="relative w-full bg-navbar py-6">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <h1 className="font-bold">WEB3 WINES</h1>
                    <ul>
                        <li>Address: 1 Eagle St., Brisbane QLD 4000 Australia</li>
                        <li>Phone: 0423456789</li>
                        <li>Email: info@web3wines.org</li>
                    </ul>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="/">Web3 Wines</a>. All
                        Rights Reserved.
                    </Typography>
                </div>
            </div>
        </footer>
    );
}
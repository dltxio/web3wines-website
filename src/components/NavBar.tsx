// import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    //
    // // const toggleMenu = () => {
    // //     setMenuOpen(!menuOpen);
    // // };

    return (
        <nav className="fixed w-full mx-auto flex flex-col md:justify-center items-center bg-navbar p-4">
            <div className="container">
                <div className="flex flex-col lg:flex-row space-x-20">
                    <Link to="/" className="text-white hover:text-blue-200">HOME</Link>
                    <Link to="/about_us" className="text-white hover:text-blue-200">ABOUT US</Link>
                    <Link to="/value_chain" className="text-white hover:text-blue-200">WINE INDUSTRY VALUE CHAIN</Link>
                    <Link to="/blockchain_app" className="text-white hover:text-blue-200">BLOCKCHAIN APPLICATION</Link>
                    <Link to="/membership" className="text-white hover:text-blue-200">MEMBERSHIP</Link>
                    <Link to="/news" className="text-white hover:text-blue-200">NEWS & UPDATES</Link>
                    <Link to="/faqs" className="text-white hover:text-blue-200">FAQs</Link>
                    <Link to="/contact_us" className="text-white hover:text-blue-200">CONTACT US</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

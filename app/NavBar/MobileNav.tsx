import React, { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-900 p-4 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" legacyBehavior>
                            <a className="text-violet font-bold text-2xl">🏠︎</a>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" legacyBehavior><a className="nav-link">Home</a></Link>
                            <Link href="/About/" legacyBehavior><a className="nav-link">About</a></Link>
                            <Link href="/Projects/" legacyBehavior><a className="nav-link">Projects</a></Link>
                            <Link href="/Experience/" legacyBehavior><a className="nav-link">Experience</a></Link>
                            <Link href="/Skills/" legacyBehavior><a className="nav-link">Skills</a></Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12h18M3 6h18M3 18h18"></path>
                            </svg>
                            <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 text-right">
                    <Link href="/" legacyBehavior><a className="block nav-link">Home</a></Link>
                    <Link href="/About/" legacyBehavior><a className="block nav-link">About</a></Link>
                    <Link href="/Projects/" legacyBehavior><a className="block nav-link">Projects</a></Link>
                    <Link href="/Experience/" legacyBehavior><a className="block nav-link">Experience</a></Link>
                    <Link href="/Skills/" legacyBehavior><a className="block nav-link">Skills</a></Link>
                </div>
            </div>
        </nav>
    );
}

export default MobileNav;
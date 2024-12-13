import React from "react";
import Link from "next/link";

const MobileNav = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex justify-between">
                <li>
                    <Link href="/" aria-current=
                        "page" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link href="/About/" aria-current=
                        "page" className="nav-link">About</Link>
                </li>
                <li>
                    <Link href="/Projects/" aria-current=
                        "page" className="nav-link">Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MobileNav;
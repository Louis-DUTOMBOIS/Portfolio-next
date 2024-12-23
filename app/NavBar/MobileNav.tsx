import React from "react";
import Link from "next/link";

const MobileNav = () => {
    return (
        <nav className="bg-gray-900 p-4 text-white">
            <ul className="flex justify-between">
                <li>
                    <Link href="/" aria-current="page" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link href="/About/" aria-current="page" className="nav-link">About</Link>
                </li>
                <li>
                    <Link href="/Projects/" aria-current="page" className="nav-link">Projects</Link>
                </li>
                <li>
                    <Link href="/Experience/" aria-current="page" className="nav-link">Experience</Link>
                </li>
                <li>
                    <Link href="/Hero/" aria-current="page" className="nav-link">Me</Link>
                </li>
                <li>
                    <Link href="/Skills/" aria-current="page" className="nav-link">Skills</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MobileNav;
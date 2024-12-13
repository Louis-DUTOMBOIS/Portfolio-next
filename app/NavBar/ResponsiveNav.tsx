"use client";

import Nav from "@/app/NavBar/Nav";
import MobileNav from "@/app/NavBar/MobileNav";
import { useEffect, useState } from "react";

const ResponsiveNav = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {isMobile ? <MobileNav /> : <Nav />}
        </div>
    );
}

export default ResponsiveNav;
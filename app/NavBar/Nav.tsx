import React from "react";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom";
import AboutPage from "@/app/About/page";
import ContactPage from "@/app/Contact/page";
import ProjectsPage from "@/app/Projects/page";
import HomePage from "@/app/page";

const Nav = () => {
    return (
        <Router>
            <nav className="bg-gray-800 p-4 text-white">
                <ul className="flex justify-between">
                    <li>
                        <NavLink to="/" aria-current=
                            "page"  className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" aria-current=
                            "page" className="nav-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" aria-current=
                            "page"  className="nav-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" aria-current=
                            "page" className="nav-link">Projects</NavLink>
                    </li>
                </ul>
            </nav>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage /> }></Route>
                    <Route path="/contact" element={<ContactPage />} ></Route>
                    <Route path="/projects" element={<ProjectsPage />}></Route>
                </Routes>
        </Router>
    );
}

export default Nav;
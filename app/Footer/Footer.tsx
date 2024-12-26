"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Follow Me</h2>
                    <div className="mt-2 flex space-x-4">
                        <a href="https://www.linkedin.com/in/louis-dutombois" target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Louis-DUTOMBOIS" target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">
                            GitHub
                        </a>
                        <a href="https://twitter.com/louis_dutombois" target="_blank" rel="noopener noreferrer" className="text-violet hover:underline">
                            Twitter
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Contact</h2>
                    <p className="mt-2">louis.dutombois@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
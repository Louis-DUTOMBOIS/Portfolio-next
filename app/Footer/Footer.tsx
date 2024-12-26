import React from "react";

const Footer = () => {
    return (
        <footer className="relative bg-cover bg-center h-32">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
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
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Contact</h2>
                        <p className="mt-2">louis.dutombois@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
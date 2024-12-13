import React from "react";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">Contact Me</h1>
                <p className="text-xl mt-2">I'd love to hear from you!</p>
            </header>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Email</h2>
                <p className="mt-4 text-lg">louis.dutombois@gmail.com</p>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Social Media</h2>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/louis-dutombois" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        LinkedIn
                    </a>
                    <a href="https://github.com/Louis-DUTOMBOIS" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
                        GitHub
                    </a>
                    <a href="https://twitter.com/louis_dutombois" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Twitter
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
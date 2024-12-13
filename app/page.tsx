import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">Louis DUTOMBOIS</h1>
                <p className="text-xl mt-2">Full Stack Developer</p>
            </header>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <ul className="list-disc list-inside mt-4">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>CSS</li>
                </ul>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div className="mt-4">
                    <div className="bg-white p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">Project 1</h3>
                        <p className="mt-2">Description of project 1.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">Project 2</h3>
                        <p className="mt-2">Description of project 2.</p>
                    </div>
                </div>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="mt-4">Email: louis.dutombois@gmail.com</p>
            </section>
        </div>
    );
};

export default HomePage;
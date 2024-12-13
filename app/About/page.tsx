import React from "react";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">About Me</h1>
                <p className="text-xl mt-2">Get to know me better!</p>
            </header>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Biography</h2>
                <p className="mt-4 text-lg">
                    I am Louis DUTOMBOIS, a passionate Full Stack Developer with expertise in JavaScript, React, TypeScript, Node.js, and CSS. I love creating web applications that are both functional and aesthetically pleasing.
                </p>
            </section>
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
        </div>
    );
};

export default AboutPage;
import React from "react";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">My Projects</h1>
                <p className="text-xl mt-2">Explore my work and contributions</p>
            </header>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold">Project 1</h3>
                        <p className="mt-2 text-gray-700">Description of project 1.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold">Project 2</h3>
                        <p className="mt-2 text-gray-700">Description of project 2.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold">Project 3</h3>
                        <p className="mt-2 text-gray-700">Description of project 3.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn more</a>
                    </div>
                </div>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">Other Projects</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold">Project 4</h3>
                        <p className="mt-2 text-gray-700">Description of project 4.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold">Project 5</h3>
                        <p className="mt-2 text-gray-700">Description of project 5.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold">Project 6</h3>
                        <p className="mt-2 text-gray-700">Description of project 6.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn more</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
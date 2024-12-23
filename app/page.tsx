import React from "react";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-black p-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">Louis DUTOMBOIS</h1>
                <p className="text-xl mt-2">Full Stack Developer</p>
            </header>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Hero/" className="text-blue-400 hover:underline">Hero</Link>
                </h2>
                <p className="mt-4">Louis DUTOMBOIS, Web Developpeur</p>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">
                    <Link href="/About/" className="text-blue-400 hover:underline">About</Link>
                </h2>
                <p className="mt-4">Louis DUTOMBOIS, 19 ans, étudiant à l'IUT de Lens, en BUT Informatique et apprenti développeur Web.</p>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Experience/" className="text-blue-400 hover:underline">Experience</Link>
                </h2>
                <p className="mt-4">Formation en BUT Informatique à l'IUT de Lens, Baccalauréat avec spécialité Mathématiques et NSI, et diverses expériences professionnelles.</p>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Skills/" className="text-blue-400 hover:underline">Skills</Link>
                </h2>
                <ul className="list-disc list-inside mt-4">
                    <li>Java</li>
                    <li>JavaFX / Scenebuilder</li>
                    <li>HTML/CSS</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Git</li>
                    <li>Canva</li>
                    <li>Figma</li>
                </ul>
            </section>
            <section className="my-8">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Projects/" className="text-blue-400 hover:underline">Projects</Link>
                </h2>
                <div className="mt-4">
                    <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">Roca</h3>
                        <p className="mt-2">Site de lecture et de création d'histoire à choix, réalisé avec Laravel, HTML/CSS, SQL et PHP.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">FlatCraft</h3>
                        <p className="mt-2">Jeu 2D inspiré de Minecraft, réalisé en Java avec JavaFX.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">Pokedex</h3>
                        <p className="mt-2">Pokedex permettant de rechercher un pokemon, réalisé dans le cadre du cours de MSI.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">Raytracer</h3>
                        <p className="mt-2">Librairie générant des images avec raytracing, réalisée en Java.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
                        <h3 className="text-xl font-bold">Toys Market</h3>
                        <p className="mt-2">Projet affichant des jeux et leur description provenant d'une API, réalisé dans le cadre du cours de MSI.</p>
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
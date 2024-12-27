import Link from 'next/link';
import Page from "@/app/Hero/page";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-black p-4">
            <header className="text-center my-8">
            </header>

                <Page />
            <section className="my-8 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">
                    <Link href="/About/" className="text-violet hover:underline">About</Link>
                </h2>
                <p className="mt-4">Louis DUTOMBOIS, 20 ans, étudiant à l&apos;IUT de Lens, en BUT Informatique et développeur Informatique.</p>
            </section>
            <section className="my-8 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Experience/" className="text-violet hover:underline">Experience</Link>
                </h2>
                <p className="mt-4">Formation en BUT Informatique à l&apos;IUT de Lens, Baccalauréat avec spécialité Mathématiques et NSI, et diverses expériences professionnelles.</p>
            </section>
            <section className="my-8 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Skills/" className="text-violet hover:underline">Skills</Link>
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
                    <li>...</li>
                </ul>
            </section>
            <section className="my-8 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">
                    <Link href="/Projects/" className="text-violet hover:underline">Projects</Link>
                </h2>
                <div className="mt-4">
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold">Roca</h3>
                        <p className="mt-2">Site de lecture et de création d&apos;histoire à choix, réalisé avec Laravel, HTML/CSS, SQL et PHP.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold">FlatCraft</h3>
                        <p className="mt-2">Jeu 2D inspiré de Minecraft, réalisé en Java avec JavaFX.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold">Pokedex</h3>
                        <p className="mt-2">Pokedex permettant de rechercher un pokemon, réalisé dans le cadre du cours de MSI.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold">Raytracer</h3>
                        <p className="mt-2">Librairie générant des images avec raytracing, réalisée en Java.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold">Toys Market</h3>
                        <p className="mt-2">Projet affichant des jeux et leur description provenant d&apos;une API, réalisé dans le cadre du cours de MSI.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
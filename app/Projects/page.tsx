import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
    const projects = [
        { name: 'Roca', image: '/Roca.jpeg', url: 'https://github.com/Mizorami/Roca', description: 'Roca est un site de lecture et de création d\'histoire à choix. Ce projet a été réalisé lors du marathon Web en collaboration avec un autre pôle de mon IUT qui est le pôle MMI. Le site utilise Laravel, HTML/CSS, SQL et PHP. Le site permet de lire une histoire, mais aussi de créer une histoire soit même et de la publier.' },
        { name: 'FlatCraft', image: '/flatcraft1.png', url: 'https://github.com/Mizorami/flatcraft', description: 'Ce projet a été réalisé dans le cadre du cursus QDev (Qualité en Développement). Notre objectif était de créer un jeu 2D inspiré de Minecraft. Minecraft dont ces trois dimensions,l\'inventaire, les blocs à extraire et à utiliser pour différentes fabrications, ainsi que différents biomes et structures de terrain. Le projet est réalisé en Java, l\'affichage se fait avec JavaFX, et l\'implémentation des patrons de conception est le coeur du projet.' },
        { name: 'Pokedex', image: '/pokedex2.png', url: 'https://github.com/Mizorami/pokedex', description: 'Ce projet a été réalisé dans le cadre du cours de MSI (Management des systèmes d\'information). Le but était de créer un pokedex qui permet de rechercher un pokemon afin de connaître les principaux détails attendus par le client. Ce projet était une mise en situation de ce qu\'il peut se passer en entreprise avec les moments de rush et la collaboration en équipe.' },
        { name: 'Raytracer', image: '/raytracing2.png', url: 'https://github.com/Mizorami/Raytracer', description: 'Ce projet a été réalisé dans le cadre de la SAE S3.A.01. Le but était de créer une librairie générant des images avec raytracing. Dans un premier temps l\'application va lire un fichier donné puis, l\'image est générée en utilisant différentes méthodes et classes. Pour finir l\'image est téléchargée. Le projet a été réalisé en Java. L\'implémentation de patrons de conception est le coeur du projet.' },
        { name: 'Toys Market', image: '/jeuInfo.png', url: 'https://github.com/Mizorami/InfoJeux/tree/develop', description: 'Ce projet a été réalisé dans le cadre du cours de MSI (Management des systèmes d\'information). Le but de ce projet est d\'afficher les différents et leur description provenant d\'une API. On pourra alors aussi modifier, supprimer ou encore créer un nouveau jeu.' }
    ];

    return (
        <section id="portfolio" className="bg-black text-white p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">MES PROJETS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src={project.image} alt={project.name} width={500} height={300} className="w-full h-48 object-cover rounded mb-4" />
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="mt-2 text-gray-300">{project.description}</p>
                            <a href={project.url} className="text-violet hover:underline mt-4 block">Learn more</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
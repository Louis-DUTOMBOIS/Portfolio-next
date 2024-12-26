import React from 'react';

const Page = () => {
    const experiences = [
        { name: 'BUT Informatique', company: 'IUT de Lens', duration: '2022 - Aujourd’hui', content: 'Formation informatique spécialisé dans le développement web.' },
        { name: 'Baccalauréat', company: 'Lycée Vauban à Aire-sur-la-Lys', duration: '2019 - 2022', content: 'Baccalauréat avec spécialité Mathématiques et Numérique et sciences informatiques (NSI) avec option mathématiques expertes' },
        { name: 'Stage en développement Web', company: 'Une entreprise', duration: '8 à 10 semaines', content: 'Stage durant lequel je me verrais attribuer des taches en lien avec ma formation. Ce stage a pour but de me faire monter en niveau et de m\'habituer à la vie en entreprise.' },
        { name: 'Animateur en centre aéré', company: 'Aire sur la lys', duration: "2019 - Aujourd'hui", content: 'Être animateur en centre aéré durant mes vacances mon permis d\'apprendre ce que sont l\'esprit d\'équipe ainsi que la cohésion de groupe afin d\'arriver à un même objectif. Cela m\'a aussi permis de développer ma créativité.' },
        { name: 'Manoeuvre en Couverture/Zinguerie', company: 'Aire sur la lys', duration: 'Juillet 2019 - Août 2019', content: 'Travailler dans une entreprise de Couverture/Zinguerie m\'a permis de développer une détermination et une capacité à travailler dans n\'importe quelle condition hors du commun, car le métier de couvreur est un métier très dur physiquement.' }
    ];

    return (
        <section className="relative bg-cover bg-center mb-14 z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <h2 className="text-3xl font-bold mb-8 text-violet-500 text-center">FORMATION/EXPERIENCE</h2>
            <div className="container mx-auto">
            {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md mb-8 border-l-4 border-violet">
                            <h3 className="text-2xl font-semibold text-purple-700 ">{exp.name}</h3>
                            <p className="text-l text-gray-500 ">{exp.company} - {exp.duration}</p>
                            <p className="text-xl">{exp.content}</p>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Page;
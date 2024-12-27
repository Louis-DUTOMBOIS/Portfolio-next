import React from 'react';

const Page = () => {
    const experiences = [
        { name: 'BUT Informatique', company: 'IUT de Lens', duration: '2022 - Aujourd’hui', content: 'Formation informatique spécialisée dans le développement web.' },
        { name: 'Stage en développement Web', company: 'Orange', duration: '10 semaines', content: 'Stage durant lequel j\'ai eu à réaliser un site marketing interne en PHP, JavaScript et HTML/CSS. Ce stage m\'a offert l\'opportunité de développer mes compétences, tant sur le plan technique qu\'en communication, ainsi que de collaborer efficacement en équipe sur un projet commun.' },
        { name: 'Baccalauréat', company: 'Lycée Vauban à Aire-sur-la-Lys', duration: '2019 - 2022', content: 'Baccalauréat avec spécialités Mathématiques et Numérique et sciences informatiques (NSI) avec option mathématiques expertes' },
        { name: 'Animateur en centre aéré', company: 'Aire sur la lys', duration: "2019 - Aujourd'hui", content: 'Être animateur en centre aéré durant mes vacances m\'a permis d\'apprendre ce qu\'est l\'esprit d\'équipe ainsi que la cohésion de groupe afin d\'arriver à un même objectif. Cela m\'a aussi permis de développer ma créativité.' },
        {
            name: 'Manœuvre en Couverture/Zinguerie',
            company: 'Entreprise locale à Aire-sur-la-Lys',
            duration: 'Juillet 2019 - Août 2019',
            content: 'Lors de cette expérience, j\'ai participé activement à des travaux de couverture et de zinguerie, découvrant ainsi les exigences du travail manuel et les contraintes des métiers du bâtiment. J\'ai appris à travailler en équipe dans un environnement exigeant et à respecter des consignes de sécurité strictes. Cette expérience m\'a offert une première immersion dans le monde professionnel, développant ma rigueur, mon endurance et ma capacité à m\'adapter à des tâches variées.'
        }
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
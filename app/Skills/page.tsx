import React from 'react';

const SkillsPage = () => {
    const skills = [
        { name: 'Java', percentage: '75%' },
        { name: 'JavaFX / Scenebuilder', percentage: '65%' },
        { name: 'HTML/CSS', percentage: '80%' },
        { name: 'PHP', percentage: '70%' },
        { name: 'Laravel', percentage: '70%' },
        { name: 'Python', percentage: '80%' },
        { name: 'SQL', percentage: '65%' }
    ];

    return (
        <section className="relative bg-cover bg-center mb-14">
            <div className="flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-3xl font-bold mb-8">MES COMPETENCES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <p>{skill.percentage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
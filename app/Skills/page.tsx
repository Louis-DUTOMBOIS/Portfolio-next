import React from 'react';

const SkillsPage = () => {
    const skills = [
        { name: 'Java', percentage: 75 },
        { name: 'JavaFX / Scenebuilder', percentage: 65 },
        { name: 'HTML/CSS', percentage: 80 },
        { name: 'PHP', percentage: 70 },
        { name: 'Laravel', percentage: 70 },
        { name: 'Python', percentage: 80 },
        { name: 'SQL', percentage: 65 }
    ];

    const circumference = 50 * 2 * Math.PI;

    return (
        <section className="relative bg-cover bg-center mb-14">
            <div className="flex flex-col items-center justify-center text-white text-center">
                <h2 className="text-3xl font-bold mb-8">MES COMPETENCES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center flex-wrap max-w-md px-10 bg-gray-800 shadow-xl rounded-2xl h-20 mb-7">
                            <div className="flex items-center justify-center -m-6 overflow-hidden bg-gray-800 rounded-full">
                                <svg className="w-32 h-32 transform translate-x-1 translate-y-1" aria-hidden="true">
                                    <circle
                                        className="text-gray-300"
                                        strokeWidth="10"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="50"
                                        cx="60"
                                        cy="60"
                                    />
                                    <circle
                                        className="text-violet"
                                        strokeWidth="10"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={circumference - (skill.percentage / 100) * circumference}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="50"
                                        cx="60"
                                        cy="60"
                                    />
                                </svg>
                                <span className="absolute text-2xl text-violet">{`${skill.percentage}%`}</span>
                            </div>
                            <p className="ml-10 font-medium text-violet sm:text-xl">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
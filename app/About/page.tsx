import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-black text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <img src="images/profilLouis2.png" alt="Profile" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8" />
                <div>
                    <h2 className="text-3xl font-bold mb-4">A PROPOS DE MOI</h2>
                    <p>Louis DUTOMBOIS, 19 ans, je suis étudiant à l'IUT de Lens, en BUT Informatique ainsi qu'un apprenti développeur Web. Durant ma formation, j'ai pu toucher et découvrir différents domaines comme la programmation, le développement web, les bases de données. Si vous souhaitez me contacter, vous le pouvez en passant par <a href="#contact" className="text-blue-400 hover:underline">LinkedIn, Github, ou par email</a>!</p>
                </div>
            </div>
        </section>
    );
};

export default About;
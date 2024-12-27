import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <section id="about" className="relative bg-cover bg-center">
            <div className="relative mt-2 flex flex-col items-center justify-center h-full text-white text-center">
                <Image src="/pp.png" alt="Profile Photo" width={300} height={150} className="rounded-full mb-4 shadow-lg" />
                <h1 className="text-5xl font-bold mb-4 text-violet">About Me</h1>
                <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed text-lg">
                    Je m’appelle Louis DUTOMBOIS, j’ai 20 ans et je suis actuellement étudiant en BUT Informatique à l’IUT de Lens. Depuis toujours, je suis passionné par les nouvelles technologies et le développement informatique, ce qui m’a naturellement conduit à m’orienter vers ce domaine.
                </p>
                <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed text-lg">
                    Au-delà de mes études, je suis une personne curieuse et déterminée, toujours en quête d’apprentissage et de perfectionnement. J’aime comprendre le fonctionnement des choses et résoudre des problèmes complexes, une approche qui guide ma manière de travailler et d’apprendre.
                </p>
                <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed text-lg">
                    Rigoureux et organisé, je m’efforce de toujours donner le meilleur de moi-même dans tout ce que j’entreprends. Mon dynamisme et ma patience m’aident à m’adapter à des environnements variés, qu’il s’agisse d’un projet d’équipe ou d’une mission individuelle.
                </p>
                <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed text-lg">
                    En dehors de l’informatique, je m’intéresse également au design, au sport, notamment au volley-ball, ainsi qu’à la musique. Ces passions m’apportent un équilibre et nourrissent ma créativité au quotidien.
                </p>
                <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed text-lg">
                    Je suis convaincu que mon parcours, mes qualités personnelles et mon enthousiasme me permettront de contribuer de manière significative à tout projet ou défi qui se présentera à moi.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
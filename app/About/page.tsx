import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <section id="about" className="relative bg-cover bg-center h-screen">
            <div className="relative mt-2 flex flex-col items-center justify-center h-full text-white text-center">
                <Image src="/pp.png" alt="Profile Photo" width={300} height={150} className="rounded-full mb-4" />
                <h1 className="text-5xl font-bold mb-4 text-violet">About Me</h1>
                <p className="mt-4 text-gray-300">Louis DUTOMBOIS, 19 ans, étudiant à l&apos;IUT de Lens, en BUT Informatique et apprenti développeur Web.</p>
            </div>
        </section>
    );
};

export default AboutPage;
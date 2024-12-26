import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-futuristic">About Me</h1>
            <Image src="/path/to/image.jpg" alt="About Image" width={500} height={300} className="rounded-lg shadow-md mt-4" />
            <p className="mt-4 text-gray-300">Louis DUTOMBOIS, 19 ans, étudiant à l&apos;IUT de Lens, en BUT Informatique et apprenti développeur Web.</p>
        </div>
    );
};

export default AboutPage;
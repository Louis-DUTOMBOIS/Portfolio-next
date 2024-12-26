import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <Image src="/path/to/image.jpg" alt="About Image" width={500} height={300} />
            <p>Louis DUTOMBOIS, 19 ans, étudiant à l&apos;IUT de Lens, en BUT Informatique et apprenti développeur Web.</p>
        </div>
    );
};

export default AboutPage;